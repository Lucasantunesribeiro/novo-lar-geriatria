/**
 * Tira a escolha fixa de depoimentos do bloco da home.
 *
 *   node scripts/soltar-depoimentos-da-home.mjs --dry
 *   node scripts/soltar-depoimentos-da-home.mjs
 *
 * O bloco "homeDepoimentos" tinha quatro depoimentos apontados a dedo no campo
 * `itens`. Enquanto esse campo estiver preenchido ele ganha de tudo, e a home
 * mostra sempre os mesmos quatro — que era exatamente a queixa do cliente
 * ("a vitrine parece sempre a mesma").
 *
 * Esvaziando o campo, a home passa a mostrar as avaliacoes reais de 5 estrelas
 * vindas de lib/avaliacoes.ts (Google quando a chave existir, a lista do
 * repositorio enquanto nao existir). Os quatro documentos de depoimento
 * continuam no Studio, intactos: quem quiser voltar a fixa-los so precisa
 * escolhe-los de novo no bloco.
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

const base = `https://${projectId}.api.sanity.io/v${apiVersion}/data`

const r = await fetch(
  `${base}/query/${dataset}?query=${encodeURIComponent('*[_type=="page" && path=="/"][0]{_id, blocos}')}`
)
const corpo = await r.json()
if (corpo.error) throw new Error(JSON.stringify(corpo.error))
const pagina = corpo.result
if (!pagina) throw new Error('pagina da home nao encontrada')

const bloco = (pagina.blocos || []).find((b) => b._type === 'homeDepoimentos')
if (!bloco) throw new Error('bloco homeDepoimentos nao encontrado')

const quantos = (bloco.itens || []).length
if (quantos === 0) {
  console.log('  home: o bloco de depoimentos ja esta solto')
  process.exit(0)
}

console.log(`  home: ${quantos} depoimento(s) fixado(s) no bloco -> soltando`)
if (dry) {
  console.log('\n--dry: nada foi escrito.')
  process.exit(0)
}

const carimbo = new Date().toISOString().replace(/[:.]/g, '-')
const dirBackup = path.resolve(raiz, 'backups')
fs.mkdirSync(dirBackup, { recursive: true })
fs.writeFileSync(
  path.join(dirBackup, `home-depoimentos-${carimbo}.json`),
  JSON.stringify(bloco, null, 2),
  'utf8'
)
console.log(`\nbackup: backups/home-depoimentos-${carimbo}.json`)

const envio = await fetch(`${base}/mutate/${dataset}?returnIds=true`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  body: JSON.stringify({
    mutations: [
      {
        patch: {
          id: pagina._id,
          unset: [`blocos[_key=="${bloco._key}"].itens`],
        },
      },
    ],
  }),
})
const resposta = await envio.json()
if (!envio.ok) {
  console.error('Falhou:', JSON.stringify(resposta, null, 2))
  process.exit(1)
}
console.log('OK — a home passa a mostrar as avaliacoes reais.')
