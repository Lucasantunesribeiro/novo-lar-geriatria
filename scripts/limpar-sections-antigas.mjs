/**
 * Apaga o campo `sections` das paginas que ja usam os blocos espelho.
 *
 *   node scripts/limpar-sections-antigas.mjs --dry   (so mostra)
 *   node scripts/limpar-sections-antigas.mjs         (apaga no Sanity)
 *
 * Por que: essas paginas ficavam com DOIS campos de blocos no Studio — o
 * antigo ("Blocos da página", generico, que o site nao desenha) e o novo
 * ("Blocos desta página", espelho da tela). Ver os dois lado a lado e o que
 * mais confunde quem edita. Com um campo so, nao ha o que confundir.
 *
 * Antes de apagar, confere duas coisas em cada pagina:
 *   1. ela tem blocos espelho;
 *   2. nenhuma section carrega dado que os blocos nao tenham (referencias
 *      escolhidas, numeros do hero, fotos de galeria).
 * Se alguma falhar, o script para sem escrever nada.
 */
import fs from 'node:fs'
import path from 'node:path'

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

async function consultar(groq) {
  const r = await fetch(`${base}/query/${dataset}?query=${encodeURIComponent(groq)}`)
  const corpo = await r.json()
  if (corpo.error) {
    console.error('consulta falhou:', JSON.stringify(corpo.error))
    process.exit(1)
  }
  return corpo.result
}

const paginas = await consultar(`
  *[_type == "page" && string::startsWith(_id, "page-") && defined(sections)]{
    _id,
    path,
    "temBlocos": count(blocos),
    "secoesComDado": sections[
      defined(units[0]) || defined(services[0]) || defined(posts[0]) ||
      defined(testimonials[0]) || defined(stats[0]) || defined(images[0]) ||
      defined(faqs[0])
    ]._type,
    "totalSecoes": count(sections)
  } | order(path asc)
`)

if (paginas.length === 0) {
  console.log('Nenhuma pagina com o campo antigo. Nada a fazer.')
  process.exit(0)
}

// Nenhuma pagina do sistema desenha estas secoes:
//  - gallerySection: /sobre/estrutura, /sobre/fotos e /sobre/atividades montam
//    as fotos pelo proprio componente;
//  - as listas ja foram copiadas para os blocos por
//    scripts/migrar-referencias-para-blocos.mjs;
//  - os numeros do hero da home viraram as frases do bloco homeHero.
const IGNORAR = new Set([
  'gallerySection',
  'unitsSection',
  'servicesSection',
  'blogPostsSection',
  'testimonialsSection',
  'heroSection',
])

let impedidas = 0
console.log('pagina'.padEnd(28), 'blocos', 'secoes', 'pendencia')
console.log('-'.repeat(72))

for (const p of paginas) {
  const pendencias = (p.secoesComDado || []).filter((t) => !IGNORAR.has(t))
  const impede = p.temBlocos === 0 || pendencias.length > 0
  if (impede) impedidas++
  console.log(
    String(p.path).padEnd(28),
    String(p.temBlocos).padEnd(6),
    String(p.totalSecoes).padEnd(6),
    impede ? `NAO APAGAR — ${p.temBlocos === 0 ? 'sem blocos' : pendencias.join(', ')}` : 'ok'
  )
}

if (impedidas > 0) {
  console.error(`\n${impedidas} pagina(s) ainda dependem do campo antigo. Nada foi apagado.`)
  process.exit(1)
}

console.log(`\n${paginas.length} pagina(s) prontas para perder o campo antigo.`)

if (dry) {
  console.log('--dry: nada foi escrito.')
  process.exit(0)
}

const r = await fetch(`${base}/mutate/${dataset}?returnIds=true`, {
  method: 'POST',
  headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`},
  body: JSON.stringify({
    mutations: paginas.map((p) => ({patch: {id: p._id, unset: ['sections']}})),
  }),
})

const corpo = await r.json()
if (!r.ok) {
  console.error('\nFalhou:', JSON.stringify(corpo, null, 2))
  process.exit(1)
}

console.log('\nOK —', (corpo.results || []).length, 'documento(s) atualizados.')
