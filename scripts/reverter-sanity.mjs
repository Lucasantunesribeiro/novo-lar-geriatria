/**
 * Volta documentos do Sanity para o estado salvo num backup.
 *
 * Uso:
 *   node scripts/reverter-sanity.mjs backups/melhorias-brenda-<data>.json --dry   (só lista)
 *   node scripts/reverter-sanity.mjs backups/melhorias-brenda-<data>.json         (restaura)
 *
 * O backup é o arquivo que scripts/aplicar-melhorias-brenda.mjs grava antes de
 * escrever. Cada documento é recolocado inteiro (createOrReplace).
 *
 * ATENÇÃO: o que alguém editar no Studio nesses mesmos documentos depois do
 * backup também é desfeito.
 *
 * Precisa de SANITY_API_TOKEN (escrita) no .env.local. O valor nunca é impresso.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
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
const arquivo = process.argv.slice(2).find((a) => !a.startsWith('--'))

if (!arquivo) {
  console.error('Informe o backup: node scripts/reverter-sanity.mjs backups/<arquivo>.json')
  process.exit(1)
}
if (!projectId || !token) {
  console.error('Falta NEXT_PUBLIC_SANITY_PROJECT_ID ou SANITY_API_TOKEN')
  process.exit(1)
}

const docs = JSON.parse(fs.readFileSync(path.resolve(raiz, arquivo), 'utf8'))
if (!Array.isArray(docs) || docs.length === 0) {
  console.error('Backup vazio ou em formato inesperado.')
  process.exit(1)
}

console.log(`${docs.length} documento(s) no backup:`)
for (const d of docs) console.log(`  - ${d._id} (${d._type})`)

if (dry) {
  console.log('\n--dry: nada foi escrito.')
  process.exit(0)
}

// _rev e _updatedAt são do servidor; o resto volta como estava.
const mutations = docs.map(({ _rev, _updatedAt, ...doc }) => ({ createOrReplace: doc }))

const base = `https://${projectId}.api.sanity.io/v${apiVersion}/data`
const r = await fetch(`${base}/mutate/${dataset}?returnIds=true`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  body: JSON.stringify({ mutations }),
})
const corpo = await r.json()
if (!r.ok) {
  console.error('Falhou:', JSON.stringify(corpo, null, 2))
  process.exit(1)
}
console.log(`\nOK: ${(corpo.results || []).length} documento(s) restaurado(s).`)
