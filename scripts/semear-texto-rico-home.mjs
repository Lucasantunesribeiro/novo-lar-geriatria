/**
 * Leva para o Studio o texto do bloco "Por que escolher a Novo Lar",
 * preservando os dois trechos em negrito e a quebra de linha do desktop.
 *
 *   node scripts/semear-texto-rico-home.mjs --dry
 *   node scripts/semear-texto-rico-home.mjs
 *
 * O texto nao e redigitado: sai do proprio components/home/WhyChooseUs.tsx.
 * O `\n` no meio vira a quebra que hoje aparece so em tela grande.
 */
import fs from 'node:fs'
import path from 'node:path'
import {randomUUID} from 'node:crypto'

const envPath = path.resolve(process.cwd(), '.env.local')
if (fs.existsSync(envPath)) {
  for (const linha of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = linha.match(/^([A-Z0-9_]+)=(.*)$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-11-04'
const dry = process.argv.includes('--dry')

if (!projectId || (!dry && !token)) {
  console.error('Falta NEXT_PUBLIC_SANITY_PROJECT_ID ou SANITY_API_TOKEN')
  process.exit(1)
}

const base = `https://${projectId}.api.sanity.io/v${apiVersion}/data`
const k = () => randomUUID().replace(/-/g, '').slice(0, 12)

// ── o texto de hoje, lido do componente ──────────────────────────
const ARQUIVO = 'components/home/WhyChooseUs.tsx'
const fonte = fs.readFileSync(path.resolve(process.cwd(), ARQUIVO), 'utf8')

const inicio = fonte.indexOf('Escolher um residencial')
const fim = fonte.indexOf('</>', inicio)
if (inicio < 0 || fim < 0) {
  console.error(`nao achei o texto de hoje em ${ARQUIVO}`)
  process.exit(1)
}

const jsx = fonte.slice(inicio, fim)

/**
 * Quebra o JSX em pedacos: texto comum, <strong> e a quebra de linha.
 * O JSX junta linhas com um espaco, menos logo depois de um <br />.
 */
const pedacos = []
let resto = jsx
let depoisDeQuebra = false

while (resto.length > 0) {
  const mStrong = resto.match(/<strong>([\s\S]*?)<\/strong>/)
  const mBr = resto.match(/<br className="hidden lg:block" \/>/)

  const iStrong = mStrong ? resto.indexOf(mStrong[0]) : Infinity
  const iBr = mBr ? resto.indexOf(mBr[0]) : Infinity
  const corte = Math.min(iStrong, iBr)

  if (corte === Infinity) {
    pedacos.push({tipo: 'texto', valor: resto, depoisDeQuebra})
    break
  }

  if (corte > 0) {
    pedacos.push({tipo: 'texto', valor: resto.slice(0, corte), depoisDeQuebra})
    depoisDeQuebra = false
  }

  if (iBr < iStrong) {
    pedacos.push({tipo: 'quebra'})
    resto = resto.slice(iBr + mBr[0].length)
    depoisDeQuebra = true
  } else {
    pedacos.push({tipo: 'negrito', valor: mStrong[1]})
    resto = resto.slice(iStrong + mStrong[0].length)
    depoisDeQuebra = false
  }
}

/** Colapsa espacos e quebras do JSX do jeito que o React faz. */
function comoOReactLe(texto, coladoNaQuebra) {
  let t = texto.replace(/\s*\n\s*/g, coladoNaQuebra ? '' : ' ')
  return t
}

// monta os spans, juntando a quebra dentro do texto (hardBreak = "\n")
const children = []
for (const p of pedacos) {
  if (p.tipo === 'quebra') {
    children.push({_key: k(), _type: 'span', marks: [], text: '\n'})
    continue
  }
  const texto = comoOReactLe(p.valor, p.depoisDeQuebra)
  if (texto === '') continue
  children.push({
    _key: k(),
    _type: 'span',
    marks: p.tipo === 'negrito' ? ['strong'] : [],
    text: texto,
  })
}

// o JSX deixa um espaco sobrando no fim; o site nao mostra esse espaco
const ultimo = children[children.length - 1]
if (ultimo) ultimo.text = ultimo.text.replace(/\s+$/, '')

const bloco = {_key: k(), _type: 'block', style: 'normal', markDefs: [], children}

console.log('texto que vai para o Studio:\n')
for (const c of children)
  console.log(
    `  [${(c.marks[0] || 'normal').padEnd(6)}] ${JSON.stringify(c.text).slice(0, 100)}`
  )

const reconstruido = children
  .map((c) => (c.marks.includes('strong') ? `<strong>${c.text}</strong>` : c.text))
  .join('')
  .replace('\n', '<br class="hidden lg:block"/>')
console.log(`\ncomo vai sair no site:\n  ${reconstruido}`)

// ── escrever ─────────────────────────────────────────────────────
const groq = `*[_id == "page-inicio"][0]{
  "blocos": blocos[]{_key, _type, "temTexto": count(descricaoRica) > 0}
}`
const pagina = (
  await fetch(`${base}/query/${dataset}?query=${encodeURIComponent(groq)}`).then((r) => r.json())
).result

const b = (pagina?.blocos || []).find((x) => x._type === 'homePorQue')
if (!b) {
  console.error('\nbloco homePorQue nao existe em page-inicio.')
  process.exit(1)
}
if (b.temTexto) {
  console.log('\nO bloco ja tem texto escrito no Studio — nao mexo.')
  process.exit(0)
}

if (dry) {
  console.log('\n--dry: nada foi escrito.')
  process.exit(0)
}

const r = await fetch(`${base}/mutate/${dataset}?returnIds=true`, {
  method: 'POST',
  headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`},
  body: JSON.stringify({
    mutations: [
      {patch: {id: 'page-inicio', set: {[`blocos[_key=="${b._key}"].descricaoRica`]: [bloco]}}},
    ],
  }),
})

const corpo = await r.json()
if (!r.ok) {
  console.error('\nFalhou:', JSON.stringify(corpo, null, 2))
  process.exit(1)
}
console.log('\nOK — texto escrito.')
