/**
 * Grava o Google Place ID de cada unidade no Sanity.
 *
 *   node scripts/gravar-place-ids.mjs --dry
 *   node scripts/gravar-place-ids.mjs
 *
 * De onde vieram: o cliente pegou no Place ID Finder do Google, buscando pelo
 * NOME da casa. Buscar pelo endereco devolve o ponto da rua, que responde OK
 * mas nao tem nota nem avaliacao — foi o que aconteceu na primeira tentativa.
 *
 *   errado (rua)          certo (estabelecimento)
 *   R. Luciana de Abreu   Novo Lar Geriatria - Unidade Luciana de Abreu
 *   R. Barao de Sto Angelo  Novo Lar Geriatria - Unidade Barao de santo Angelo
 *   R. Brg. Oliveira Neri Novo Lar - Geriatria
 *
 * `lib/avaliacoes.ts` le esse campo primeiro, antes de olhar variavel de
 * ambiente. Idempotente: rodar duas vezes nao muda nada.
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

const POR_SLUG = {
  'moinhos-luciana-de-abreu': 'ChIJ2VvRRLd5GZURkJR7ttAAvuw',
  'moinhos-barao-de-santo-angelo': 'ChIJW-li3Ll5GZURRyMtvrgYrQU',
  'passo-dareia': 'ChIJp3_mCWJ3GZUR-1O1XsCMu88',
}

if (!projectId || (!dry && !token)) {
  console.error('Falta NEXT_PUBLIC_SANITY_PROJECT_ID ou SANITY_API_TOKEN')
  process.exit(1)
}

const base = `https://${projectId}.api.sanity.io/v${apiVersion}/data`

const r = await fetch(
  `${base}/query/${dataset}?query=${encodeURIComponent('*[_type=="unit"]{_id,"slug":slug.current,name,googlePlaceId}')}`
)
const corpo = await r.json()
if (corpo.error) throw new Error(JSON.stringify(corpo.error))
const unidades = corpo.result || []

const mutations = []
for (const [slug, placeId] of Object.entries(POR_SLUG)) {
  const unidade = unidades.find((u) => u.slug === slug)
  if (!unidade) {
    console.log(`  ${slug}: NAO ENCONTRADA no Sanity — pulei`)
    continue
  }
  if (unidade.googlePlaceId === placeId) {
    console.log(`  ${slug}: ja esta com esse Place ID`)
    continue
  }
  console.log(`  ${slug}: ${unidade.googlePlaceId || '(vazio)'} -> ${placeId}`)
  mutations.push({ patch: { id: unidade._id, set: { googlePlaceId: placeId } } })
}

if (mutations.length === 0) {
  console.log('\nNada a fazer.')
  process.exit(0)
}
if (dry) {
  console.log('\n--dry: nada foi escrito.')
  process.exit(0)
}

const carimbo = new Date().toISOString().replace(/[:.]/g, '-')
const dirBackup = path.resolve(raiz, 'backups')
fs.mkdirSync(dirBackup, { recursive: true })
fs.writeFileSync(
  path.join(dirBackup, `place-ids-${carimbo}.json`),
  JSON.stringify(unidades, null, 2),
  'utf8'
)
console.log(`\nbackup: backups/place-ids-${carimbo}.json`)

const envio = await fetch(`${base}/mutate/${dataset}?returnIds=true`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  body: JSON.stringify({ mutations }),
})
const resposta = await envio.json()
if (!envio.ok) {
  console.error('Falhou:', JSON.stringify(resposta, null, 2))
  process.exit(1)
}
console.log('OK — Place IDs gravados.')
