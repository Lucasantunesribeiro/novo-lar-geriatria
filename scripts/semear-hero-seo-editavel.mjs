/**
 * Deixa o topo das paginas SEO 100% editavel no Studio.
 *
 *   node scripts/semear-hero-seo-editavel.mjs --dry
 *   node scripts/semear-hero-seo-editavel.mjs
 *
 * O que estava preso no codigo, igual nas ~70 paginas: o titulo "Principais
 * beneficios", os 5 itens da caixa da direita e a foto de fundo
 * (public/herosection.png). Nada disso dava para mudar pelo Studio.
 *
 * O que este script faz: sobe a foto uma vez so e escreve nos documentos os
 * mesmos textos e a mesma foto que ja estao no ar. Visualmente nada muda —
 * muda que agora ha o que editar.
 *
 * Idempotente: pagina que ja tiver os campos preenchidos nao e tocada.
 */
import fs from 'node:fs'
import path from 'node:path'

const raiz = process.cwd()
const envPath = path.resolve(raiz, '.env.local')
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

const base = `https://${projectId}.api.sanity.io/v${apiVersion}`

async function consultar(query) {
  const r = await fetch(`${base}/data/query/${dataset}?query=${encodeURIComponent(query)}`)
  const corpo = await r.json()
  if (corpo.error) throw new Error(JSON.stringify(corpo.error))
  return corpo.result
}

/**
 * Os mesmos textos que estao em components/seo-landing/sections/SeoHero.tsx.
 * Sao lidos de la, e nao digitados aqui, para os dois nunca sairem do lugar.
 */
function lerPadroesDoComponente() {
  const fonte = fs.readFileSync(
    path.resolve(raiz, 'components/seo-landing/sections/SeoHero.tsx'),
    'utf8'
  )
  const i = fonte.indexOf('const BENEFICIOS_PADRAO')
  const j = fonte.indexOf(']', i)
  if (i < 0 || j < 0) throw new Error('BENEFICIOS_PADRAO nao encontrado em SeoHero.tsx')

  const bloco = fonte.slice(i, j)
  const itens = [...bloco.matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1].replace(/\\'/g, "'"))
  if (itens.length !== 5) throw new Error(`esperava 5 beneficios, li ${itens.length}`)

  const foto = fonte.match(/const FOTO_DE_FUNDO_PADRAO = '([^']+)'/)
  if (!foto) throw new Error('FOTO_DE_FUNDO_PADRAO nao encontrada')

  return { beneficios: itens, foto: foto[1] }
}

const PADRAO = lerPadroesDoComponente()
console.log(`li de SeoHero.tsx: ${PADRAO.beneficios.length} beneficios e a foto ${PADRAO.foto}\n`)

async function subirImagem(caminhoPublico) {
  const arquivo = path.join(raiz, 'public', decodeURIComponent(caminhoPublico).replace(/^\//, ''))
  if (!fs.existsSync(arquivo)) throw new Error(`arquivo nao existe: ${arquivo}`)
  const nome = path.basename(arquivo)
  const tipo = nome.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg'
  const r = await fetch(`${base}/assets/images/${dataset}?filename=${encodeURIComponent(nome)}`, {
    method: 'POST',
    headers: { 'Content-Type': tipo, Authorization: `Bearer ${token}` },
    body: fs.readFileSync(arquivo),
  })
  const corpo = await r.json()
  if (!r.ok) throw new Error(`upload falhou: ${JSON.stringify(corpo)}`)
  return corpo.document._id
}

// ── quem precisa ─────────────────────────────────────────────────
const paginas = await consultar(
  '*[defined(sections) && count(sections[_type=="seoHeroSection"]) > 0]{_id, "heros": sections[_type=="seoHeroSection"]{_key, beneficios, beneficiosTitulo, imagemFundo}}'
)

const pendentes = []
for (const pagina of paginas) {
  for (const hero of pagina.heros || []) {
    const faltaTexto = !hero.beneficios || hero.beneficios.length === 0
    const faltaFoto = !hero.imagemFundo
    if (faltaTexto || faltaFoto) pendentes.push({ id: pagina._id, key: hero._key, faltaTexto, faltaFoto })
  }
}

console.log(`${paginas.length} pagina(s) com hero SEO; ${pendentes.length} sem os campos novos.`)

if (pendentes.length === 0) {
  console.log('Nada a fazer.')
  process.exit(0)
}

if (dry) {
  for (const p of pendentes.slice(0, 8)) {
    console.log(`  ${p.id} [${p.key}] texto:${p.faltaTexto ? 'falta' : 'ok'} foto:${p.faltaFoto ? 'falta' : 'ok'}`)
  }
  if (pendentes.length > 8) console.log(`  ... e mais ${pendentes.length - 8}`)
  console.log('\n--dry: nada foi escrito.')
  process.exit(0)
}

// A foto e a mesma para todas: sobe uma vez e reaproveita a referencia.
const assetId = await subirImagem(PADRAO.foto)
console.log(`foto enviada ao Sanity: ${assetId}\n`)

const mutations = pendentes.map((p) => {
  const set = {}
  if (p.faltaTexto) {
    set[`sections[_key=="${p.key}"].beneficios`] = PADRAO.beneficios
    set[`sections[_key=="${p.key}"].beneficiosTitulo`] = 'Principais benefícios'
  }
  if (p.faltaFoto) {
    set[`sections[_key=="${p.key}"].imagemFundo`] = {
      _type: 'image',
      asset: { _type: 'reference', _ref: assetId },
    }
    set[`sections[_key=="${p.key}"].imagemFundoAlt`] = 'Novo Lar Geriatria'
  }
  return { patch: { id: p.id, set } }
})

// O Sanity limita o tamanho da requisicao: mandamos em lotes.
let atualizados = 0
for (let i = 0; i < mutations.length; i += 20) {
  const lote = mutations.slice(i, i + 20)
  const r = await fetch(`${base}/data/mutate/${dataset}?returnIds=true`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ mutations: lote }),
  })
  const corpo = await r.json()
  if (!r.ok) {
    console.error('Falhou:', JSON.stringify(corpo, null, 2))
    process.exit(1)
  }
  atualizados += (corpo.results || []).length
  process.stdout.write(`  ${atualizados}/${mutations.length}\r`)
}

console.log(`\nOK — ${atualizados} pagina(s) agora com o topo editavel no Studio.`)
