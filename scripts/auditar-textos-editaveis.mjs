/**
 * Lista os textos que uma pagina mostra e que o cliente NAO consegue editar.
 *
 *   node scripts/auditar-textos-editaveis.mjs /            (a pagina inicial)
 *   node scripts/auditar-textos-editaveis.mjs /sobre
 *
 * Como funciona: le a pagina servida em http://localhost:3123, extrai o texto
 * visivel e procura cada trecho dentro do conteudo do Sanity (o documento da
 * pagina, os textos do site, o cabecalho, o rodape, as unidades, os servicos,
 * os depoimentos e os artigos). O que nao for achado esta preso no codigo.
 *
 * O servidor precisa estar de pe:  npx next start -p 3123
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
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-11-04'
const SERVIDOR = process.env.SERVIDOR_LOCAL || 'http://localhost:3123'

const rota = process.argv[2] || '/'

// ── o que a pagina mostra ────────────────────────────────────────
const html = await fetch(SERVIDOR + rota).then((r) => r.text())

const textoVisivel = html
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]+>/g, '\n')
  .replace(/&amp;/g, '&')
  .replace(/&#x27;|&#39;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/&nbsp;/g, ' ')
  .replace(/&ldquo;|&rdquo;/g, '"')
  .split('\n')
  .map((l) => l.trim())
  .filter(Boolean)

// ── todo o conteudo que o cliente pode editar ────────────────────
const groq = `{
  "pagina": *[_type == "page" && path == "${rota}"][0],
  "textos": *[_type == "textosGlobais"][0],
  "cabecalho": *[_type == "headerConfig"][0],
  "rodape": *[_type == "footerConfig"][0],
  "unidades": *[_type == "unit"],
  "servicos": *[_type == "service"],
  "depoimentos": *[_type == "testimonial"],
  "artigos": *[_type == "blogPost"],
  "equipe": *[_type == "teamMember"]
}`

const conteudo = (
  await fetch(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(groq)}`
  ).then((r) => r.json())
).result

const editavel = JSON.stringify(conteudo).toLowerCase()

/** Ignora numeros soltos, datas, telefones e rotulos de uma palavra curta. */
function valeConferir(linha) {
  if (linha.length < 12) return false
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(linha)) return false
  if (/^\(?\d{2}\)?[\s.\d-]{6,}$/.test(linha)) return false
  if (/^[\d.,%\s]+$/.test(linha)) return false
  return true
}

const presos = []
const vistos = new Set()

for (const linha of textoVisivel) {
  if (!valeConferir(linha) || vistos.has(linha)) continue
  vistos.add(linha)

  // procura o trecho no conteudo editavel, ignorando acentuacao de escape
  const agulha = linha.toLowerCase().slice(0, 60)
  if (!editavel.includes(agulha)) presos.push(linha)
}

console.log(`pagina: ${rota}`)
console.log(`trechos de texto na tela: ${vistos.size}`)
console.log(`vindos do Sanity (editaveis): ${vistos.size - presos.length}`)
console.log(`presos no codigo: ${presos.length}\n`)

if (presos.length === 0) {
  console.log('Tudo o que aparece na tela pode ser editado no painel.')
  process.exit(0)
}

console.log('NAO EDITAVEIS:')
for (const p of presos) console.log('  · ' + (p.length > 110 ? p.slice(0, 110) + '…' : p))
process.exit(1)
