/**
 * Copia para o Studio os cartoes que hoje estao escritos dentro do codigo da
 * pagina inicial: os tres cartoes de unidade e os seis cartoes de servico.
 *
 *   node scripts/semear-cartoes-home.mjs --dry
 *   node scripts/semear-cartoes-home.mjs
 *
 * Os textos nao sao redigitados aqui: o script recorta os literais de dentro
 * de components/home/UnitsSection.tsx e components/home/ServicesSection.tsx,
 * entao o que vai para o CMS e exatamente o que a pagina mostra hoje.
 *
 * Campo de imagem fica vazio de proposito: vazio = a foto de hoje.
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

/**
 * Recorta o literal de um array declarado no arquivo e o avalia.
 * Conta colchetes para achar o fechamento certo, entao arrays aninhados
 * (como `benefits: [...]`) nao confundem o recorte.
 */
function lerArrayDoCodigo(arquivo, nome) {
  const fonte = fs.readFileSync(path.resolve(process.cwd(), arquivo), 'utf8')
  const inicio = fonte.indexOf(`const ${nome} = [`)
  if (inicio < 0) throw new Error(`${nome} nao encontrado em ${arquivo}`)

  const abre = fonte.indexOf('[', inicio)
  let profundidade = 0
  let fim = -1
  for (let i = abre; i < fonte.length; i++) {
    if (fonte[i] === '[') profundidade++
    else if (fonte[i] === ']') {
      profundidade--
      if (profundidade === 0) {
        fim = i
        break
      }
    }
  }
  if (fim < 0) throw new Error(`nao achei o fim de ${nome}`)

  const literal = fonte.slice(abre, fim + 1)
  return eval(literal)
}

/** Recorta uma string declarada com `const NOME = '...'` (ou template curto). */
function lerStringDoCodigo(arquivo, nome) {
  const fonte = fs.readFileSync(path.resolve(process.cwd(), arquivo), 'utf8')
  const i = fonte.indexOf(`const ${nome} =`)
  if (i < 0) throw new Error(`${nome} nao encontrado em ${arquivo}`)
  const trecho = fonte.slice(i + `const ${nome} =`.length)
  const aspas = trecho.search(/['"`]/)
  const fecha = trecho[aspas]
  let fim = aspas + 1
  while (fim < trecho.length && !(trecho[fim] === fecha && trecho[fim - 1] !== '\\')) fim++
  return eval(trecho.slice(aspas, fim + 1))
}

/** Pega o texto de hoje de um `{rotuloX || 'texto'}` dentro do JSX. */
function lerRotuloDoCodigo(arquivo, nomeDaProp) {
  const fonte = fs.readFileSync(path.resolve(process.cwd(), arquivo), 'utf8')
  const m = fonte.match(new RegExp(`${nomeDaProp}\\s*\\|\\|\\s*'([^']+)'`))
  if (!m) throw new Error(`fallback de ${nomeDaProp} nao encontrado em ${arquivo}`)
  return m[1]
}

const ARQ_UNIDADES = 'components/home/UnitsSection.tsx'

const UNIDADES = lerArrayDoCodigo('components/home/UnitsSection.tsx', 'LEGACY_UNIT_CARDS')
const SERVICOS = lerArrayDoCodigo('components/home/ServicesSection.tsx', 'SERVICES')

console.log(`unidades lidas do codigo: ${UNIDADES.length}`)
console.log(`servicos lidos do codigo: ${SERVICOS.length}\n`)

const cartoesUnidade = UNIDADES.map((u) => ({
  _key: k(),
  _type: 'cartaoUnidade',
  titulo: u.title,
  endereco: u.address,
  caracteristica: u.feature,
  whatsapp: u.whatsapp,
  linkDetalhes: u.detailsHref,
}))

const cartoesServico = SERVICOS.map((s) => ({
  _key: k(),
  _type: 'cartaoServico',
  titulo: s.title,
  descricao: s.description,
  beneficios: [...s.benefits],
}))

for (const c of cartoesUnidade) console.log(`  unidade: ${c.titulo}`)
console.log()
for (const c of cartoesServico) console.log(`  servico: ${c.titulo}`)

// ── onde escrever ────────────────────────────────────────────────
const groq = `*[_id == "page-inicio"][0]{
  _id,
  "blocos": blocos[]{_key, _type, "temCartoes": count(cartoes) > 0, rodape, titulo, descricao, rotuloVisitas, rotuloAgendar, rotuloWhatsapp, rotuloDetalhes}
}`

const pagina = (
  await fetch(`${base}/query/${dataset}?query=${encodeURIComponent(groq)}`).then((r) => r.json())
).result

if (!pagina) {
  console.error('\npage-inicio nao encontrado.')
  process.exit(1)
}

const TEXTOS_UNIDADES = {
  titulo: lerStringDoCodigo(ARQ_UNIDADES, 'LEGACY_SECTION_TITLE'),
  descricao: lerStringDoCodigo(ARQ_UNIDADES, 'LEGACY_SECTION_DESCRIPTION'),
  rotuloVisitas: lerRotuloDoCodigo(ARQ_UNIDADES, 'rotuloVisitas'),
  rotuloAgendar: lerRotuloDoCodigo(ARQ_UNIDADES, 'rotuloAgendar'),
  rotuloWhatsapp: lerRotuloDoCodigo(ARQ_UNIDADES, 'rotuloWhatsapp'),
  rotuloDetalhes: lerRotuloDoCodigo(ARQ_UNIDADES, 'rotuloDetalhes'),
}

console.log('\ntextos do bloco de unidades lidos do codigo:')
for (const [campo, valor] of Object.entries(TEXTOS_UNIDADES))
  console.log(`  ${campo.padEnd(16)} ${String(valor).slice(0, 70)}`)

const acha = (tipo) => (pagina.blocos || []).find((b) => b._type === tipo)
const bUnidades = acha('homeUnidades')
const bServicos = acha('homeServicos')
const bCta = acha('homeCtaFinal')

const mutations = []
const pular = []

if (!bUnidades) pular.push('bloco homeUnidades nao existe')
else if (bUnidades.temCartoes) pular.push('homeUnidades ja tem cartoes — nao mexo')
else
  mutations.push({
    patch: {id: 'page-inicio', set: {[`blocos[_key=="${bUnidades._key}"].cartoes`]: cartoesUnidade}},
  })

if (bUnidades) {
  const faltando = Object.fromEntries(
    Object.entries(TEXTOS_UNIDADES).filter(([campo]) => !bUnidades[campo])
  )
  if (Object.keys(faltando).length === 0) pular.push('os textos do bloco de unidades ja estao preenchidos')
  else
    mutations.push({
      patch: {
        id: 'page-inicio',
        set: Object.fromEntries(
          Object.entries(faltando).map(([campo, valor]) => [
            `blocos[_key=="${bUnidades._key}"].${campo}`,
            valor,
          ])
        ),
      },
    })
}

if (!bServicos) pular.push('bloco homeServicos nao existe')
else if (bServicos.temCartoes) pular.push('homeServicos ja tem cartoes — nao mexo')
else
  mutations.push({
    patch: {id: 'page-inicio', set: {[`blocos[_key=="${bServicos._key}"].cartoes`]: cartoesServico}},
  })

const RODAPE_DE_HOJE =
  'Antes de falar com a equipe, você pode navegar por depoimentos, unidades e FAQ para chegar mais preparado para o contato.'

if (!bCta) pular.push('bloco homeCtaFinal nao existe')
else if (bCta.rodape) pular.push('homeCtaFinal ja tem rodape — nao mexo')
else
  mutations.push({
    patch: {id: 'page-inicio', set: {[`blocos[_key=="${bCta._key}"].rodape`]: RODAPE_DE_HOJE}},
  })

// ── rotulos globais ──────────────────────────────────────────────
const textos = (
  await fetch(
    `${base}/query/${dataset}?query=${encodeURIComponent('*[_type == "textosGlobais"][0]{_id, rotuloAcessarBlog, rotuloFaleWhatsapp, rotuloEtiquetaGoogle}')}`
  ).then((r) => r.json())
).result

const ROTULOS_DE_HOJE = {
  rotuloAcessarBlog: 'Acessar Blog',
  rotuloFaleWhatsapp: 'Fale por WhatsApp',
  rotuloEtiquetaGoogle: 'Avaliações no Google',
}

if (!textos) pular.push('textosGlobais nao existe')
else {
  const faltando = Object.fromEntries(
    Object.entries(ROTULOS_DE_HOJE).filter(([campo]) => !textos[campo])
  )
  if (Object.keys(faltando).length === 0) pular.push('os rotulos globais ja estao preenchidos')
  else mutations.push({patch: {id: textos._id, set: faltando}})
}

console.log(`\n${mutations.length} escrita(s).`)
for (const p of pular) console.log(`  pulado: ${p}`)

if (dry) {
  console.log('\n--dry: nada foi escrito.')
  process.exit(0)
}
if (mutations.length === 0) process.exit(0)

const r = await fetch(`${base}/mutate/${dataset}?returnIds=true`, {
  method: 'POST',
  headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`},
  body: JSON.stringify({mutations}),
})

const corpo = await r.json()
if (!r.ok) {
  console.error('\nFalhou:', JSON.stringify(corpo, null, 2))
  process.exit(1)
}

console.log('\nOK —', (corpo.results || []).length, 'documento(s) atualizados.')
