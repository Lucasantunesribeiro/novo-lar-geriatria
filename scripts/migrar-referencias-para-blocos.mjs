/**
 * Copia as escolhas de unidades, servicos, artigos e depoimentos das secoes
 * antigas para os blocos espelho.
 *
 *   node scripts/migrar-referencias-para-blocos.mjs --dry
 *   node scripts/migrar-referencias-para-blocos.mjs
 *
 * Sem isso, apagar o campo `sections` faria a pagina inicial perder as
 * unidades, os servicos, os artigos e os depoimentos que estao escolhidos la.
 * Depois desta migracao, tudo mora num campo so.
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

/** De qual secao cada bloco herda a lista, por documento. */
const MAPA = {
  'page-home': [
    ['homeUnidades', 'unitsSection', 'units'],
    ['homeServicos', 'servicesSection', 'services'],
    ['homeBlog', 'blogPostsSection', 'posts'],
    ['homeDepoimentos', 'testimonialsSection', 'testimonials'],
  ],
  'page-servicos': [['servicosLista', 'servicesSection', 'services']],
  'page-blog': [['paginaListaBlog', 'blogPostsSection', 'posts']],
}

async function consultar(groq) {
  const r = await fetch(`${base}/query/${dataset}?query=${encodeURIComponent(groq)}`)
  const corpo = await r.json()
  if (corpo.error) {
    console.error('consulta falhou:', JSON.stringify(corpo.error))
    process.exit(1)
  }
  return corpo.result
}

const ids = Object.keys(MAPA)
const docs = await consultar(`*[_id in ${JSON.stringify(ids)}]{_id, sections, blocos}`)

const mutations = []
const criarBlocos = []

for (const doc of docs) {
  for (const [tipoDoBloco, tipoDaSecao, campo] of MAPA[doc._id]) {
    const secao = (doc.sections || []).find((s) => s._type === tipoDaSecao)
    const referencias = (secao?.[campo] || []).filter((r) => r?._ref)

    if (referencias.length === 0) {
      console.log(`${doc._id.padEnd(16)} ${tipoDoBloco.padEnd(18)} — a seção não escolheu nada`)
      continue
    }

    const bloco = (doc.blocos || []).find((b) => b._type === tipoDoBloco)
    const itens = referencias.map((r) => ({
      _key: k(),
      _type: 'reference',
      _ref: r._ref,
    }))

    if (!bloco) {
      criarBlocos.push(`${doc._id} > ${tipoDoBloco}`)
      console.log(
        `${doc._id.padEnd(16)} ${tipoDoBloco.padEnd(18)} — BLOCO NAO EXISTE (${referencias.length} item(ns) ficariam órfãos)`
      )
      continue
    }

    console.log(
      `${doc._id.padEnd(16)} ${tipoDoBloco.padEnd(18)} <- ${referencias.length} item(ns) de ${tipoDaSecao}`
    )

    mutations.push({
      patch: {
        id: doc._id,
        set: {[`blocos[_key=="${bloco._key}"].itens`]: itens},
      },
    })
  }
}

if (criarBlocos.length > 0) {
  console.error(`\nFaltam blocos: ${criarBlocos.join(', ')}. Semeie a página antes.`)
  process.exit(1)
}

console.log(`\n${mutations.length} lista(s) a migrar.`)

if (dry) {
  console.log('--dry: nada foi escrito.')
  process.exit(0)
}

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
