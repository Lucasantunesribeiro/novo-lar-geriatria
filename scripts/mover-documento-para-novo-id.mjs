/**
 * Move um documento para um identificador novo, mantendo o conteudo.
 *
 *   node scripts/mover-documento-para-novo-id.mjs page-home page-inicio --dry
 *   node scripts/mover-documento-para-novo-id.mjs page-home page-inicio
 *
 * Alguns documentos deste dataset ficaram presos num estado em que existem
 * quando se pede o conteudo publicado, mas somem na visao que o Studio usa
 * para editar — o painel abre a pagina em branco. Regravar por cima e ate
 * apagar e recriar com o mesmo id nao resolvem: o defeito acompanha o
 * identificador. Um identificador novo nasce limpo.
 *
 * A troca acontece numa transacao so (cria o novo e apaga o antigo juntos),
 * entao o site nunca fica sem a pagina. Uma copia vai para disco antes.
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

const [idAntigo, idNovo] = process.argv.slice(2).filter((a) => !a.startsWith('--'))
const dry = process.argv.includes('--dry')

if (!idAntigo || !idNovo) {
  console.error('uso: node scripts/mover-documento-para-novo-id.mjs <id antigo> <id novo> [--dry]')
  process.exit(1)
}
if (!projectId || (!dry && !token)) {
  console.error('Falta NEXT_PUBLIC_SANITY_PROJECT_ID ou SANITY_API_TOKEN')
  process.exit(1)
}

const base = `https://${projectId}.api.sanity.io/v${apiVersion}/data`

async function apareceEm(perspectiva, id) {
  const groq = `*[_id == "${id}"]{_id}`
  const r = await fetch(
    `${base}/query/${dataset}?query=${encodeURIComponent(groq)}&perspective=${perspectiva}`
  )
  return ((await r.json()).result || []).length > 0
}

const doc = (
  await fetch(`${base}/doc/${dataset}/${encodeURIComponent(idAntigo)}`).then((r) => r.json())
).documents?.[0]

if (!doc) {
  console.error(`${idAntigo}: nao encontrado.`)
  process.exit(1)
}

if (await apareceEm('published', idNovo)) {
  console.error(`${idNovo}: ja existe. Escolha outro identificador.`)
  process.exit(1)
}

const {_rev, _system, _createdAt, _updatedAt, _id, ...conteudo} = doc
const campos = Object.keys(conteudo).filter((c) => !c.startsWith('_'))

console.log(`de : ${idAntigo}`)
console.log(`para: ${idNovo}`)
console.log(`campos que vao junto (${campos.length}): ${campos.join(', ')}`)
console.log(`blocos: ${doc.blocos?.length ?? 0}`)

if (dry) {
  console.log('\n--dry: nada foi escrito.')
  process.exit(0)
}

const pastaCopia = path.resolve(process.cwd(), '.copias-antes-do-reparo')
fs.mkdirSync(pastaCopia, {recursive: true})
const arquivoCopia = path.join(pastaCopia, `${idAntigo}-${Date.now()}.json`)
fs.writeFileSync(arquivoCopia, JSON.stringify(doc, null, 2), 'utf8')
console.log(`\ncopia de seguranca: ${arquivoCopia}`)

// Quem apontava para o documento antigo passa a apontar para o novo.
const quemReferencia = (
  await fetch(
    `${base}/query/${dataset}?query=${encodeURIComponent(
      `*[references("${idAntigo}")]{_id}`
    )}&perspective=raw`
  ).then((r) => r.json())
).result || []

const mutations = [{create: {_id: idNovo, ...conteudo}}, {delete: {id: idAntigo}}]

for (const {_id} of quemReferencia) {
  const outro = (
    await fetch(`${base}/doc/${dataset}/${encodeURIComponent(_id)}`).then((r) => r.json())
  ).documents?.[0]
  if (!outro) continue

  // troca o identificador dentro do documento inteiro, sem mexer em mais nada
  const {_rev: _r, _system: _s, _createdAt: _c, _updatedAt: _u, ...semMeta} = outro
  const trocado = JSON.parse(
    JSON.stringify(semMeta).split(`"${idAntigo}"`).join(`"${idNovo}"`)
  )
  mutations.push({createOrReplace: trocado})
  console.log(`  ${_id}: referencia atualizada`)
}

const r = await fetch(`${base}/mutate/${dataset}?returnIds=true`, {
  method: 'POST',
  headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`},
  body: JSON.stringify({mutations}),
})

const corpo = await r.json()
if (!r.ok) {
  console.error('\nFalhou:', JSON.stringify(corpo, null, 2))
  console.error(`O conteudo esta salvo em ${arquivoCopia}`)
  process.exit(1)
}

console.log('\nconferindo...\n')
const publicado = await apareceEm('published', idNovo)
const noStudio = await apareceEm('drafts', idNovo)
const antigoSumiu = !(await apareceEm('published', idAntigo))

console.log(`  ${idNovo.padEnd(24)} publicado=${publicado ? 'sim' : 'nao'}  no Studio=${noStudio ? 'sim' : 'NAO'}`)
console.log(`  ${idAntigo.padEnd(24)} removido=${antigoSumiu ? 'sim' : 'nao'}`)

process.exit(publicado && noStudio && antigoSumiu ? 0 : 1)
