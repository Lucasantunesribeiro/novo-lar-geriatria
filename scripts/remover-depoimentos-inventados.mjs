/**
 * Apaga do Sanity os depoimentos que nao sao de ninguem.
 *
 *   node scripts/remover-depoimentos-inventados.mjs --dry
 *   node scripts/remover-depoimentos-inventados.mjs
 *
 * Como sabemos que sao inventados, e nao so "parecidos":
 *
 *   - "Maria Silva" e "Joao Santos" eram os nomes do mock de desenvolvimento
 *     da rota /api/reviews (git show HEAD:app/api/reviews/route.ts, linhas 210
 *     e 219). Alguem publicou o exemplo como se fosse avaliacao de familia.
 *   - Os outros quatro depoimentos do CMS tem _id com nome de gente
 *     (testimonial-erli-lima, testimonial-jacqueline, ...), sinal de que
 *     entraram de proposito; esses dois tem _id sorteado pelo Sanity.
 *   - Nenhum dos dois aparece nas 21 avaliacoes reais copiadas do Google em
 *     lib/testimonials-data.ts.
 *
 * Site de casa geriatrica nao pode mostrar depoimento de familia que nao
 * existe. Os quatro reais ficam.
 *
 * O documento e apagado, mas o conteudo vai antes para backups/ — se algum dia
 * aparecer prova de que sao reais, da para recolocar.
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

const INVENTADOS = ['Maria Silva', 'João Santos']

if (!projectId || (!dry && !token)) {
  console.error('Falta NEXT_PUBLIC_SANITY_PROJECT_ID ou SANITY_API_TOKEN')
  process.exit(1)
}

const base = `https://${projectId}.api.sanity.io/v${apiVersion}/data`

const r = await fetch(
  `${base}/query/${dataset}?query=${encodeURIComponent('*[_type=="testimonial"]')}`
)
const corpo = await r.json()
if (corpo.error) throw new Error(JSON.stringify(corpo.error))
const todos = corpo.result || []

const alvos = todos.filter((t) => INVENTADOS.includes(t.name))
const ficam = todos.filter((t) => !INVENTADOS.includes(t.name))

for (const t of alvos) console.log(`  apagar: ${t._id} — "${t.name}"`)
for (const t of ficam) console.log(`  fica:   ${t._id} — "${t.name}"`)

if (alvos.length === 0) {
  console.log('\nNada a fazer.')
  process.exit(0)
}
if (dry) {
  console.log('\n--dry: nada foi apagado.')
  process.exit(0)
}

const carimbo = new Date().toISOString().replace(/[:.]/g, '-')
const dirBackup = path.resolve(raiz, 'backups')
fs.mkdirSync(dirBackup, { recursive: true })
fs.writeFileSync(
  path.join(dirBackup, `depoimentos-inventados-${carimbo}.json`),
  JSON.stringify(alvos, null, 2),
  'utf8'
)
console.log(`\nbackup: backups/depoimentos-inventados-${carimbo}.json`)

// Apaga tambem o rascunho, se existir: apagar so o publicado deixa o
// documento voltando a aparecer no Studio como alteracao pendente.
const mutations = alvos.flatMap((t) => [
  { delete: { id: t._id } },
  { delete: { id: `drafts.${t._id}` } },
])

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
console.log('OK — depoimentos inventados removidos.')
