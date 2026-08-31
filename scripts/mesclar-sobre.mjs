/**
 * Mescla /sobre/a-novo-lar dentro de /sobre.
 *
 *   node scripts/mesclar-sobre.mjs --dry
 *   node scripts/mesclar-sobre.mjs
 *
 * Pedido do cliente: "No rodape, o Sobre a Novo Lar tem que ser a mesma coisa
 * que Sobre Nos. Pode fazer uma mescla das duas paginas e torna-las uma so."
 *
 * Antes de mover qualquer coisa eu conferi frase por frase o que a
 * /sobre/a-novo-lar afirma e o que a /sobre ja dizia. Nada estava coberto,
 * fora os dois botoes do topo:
 *
 *   fundada em 1994 ................ nao existia em /sobre
 *   socios com 40+ anos ............ nao existia
 *   hotelaria + enfermagem 24h ..... nao existia
 *   permanente ou temporaria ....... nao existia
 *   bairros Moinhos e Passo ........ nao existia (so "unidades")
 *   numeros 1994 / 3 / 40+ / 24h ... nao existia
 *   Missao, Visao e Valores ........ nao existia
 *   botoes Agendar / Falar ......... ja existia em sobreCtaFinal
 *
 * Entao o conteudo vai inteiro: os blocos "paginaHistoria" e "paginaPilares"
 * sao copiados para /sobre, com os mesmos textos, e so o hero fica de fora.
 *
 * O documento antigo NAO e apagado: fica despublicado, com o titulo avisando
 * onde o conteudo foi parar. Assim da para voltar atras.
 *
 * Idempotente: rodar duas vezes nao duplica nada.
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

const ORIGEM = 'page-sobre-a-novo-lar'
const DESTINO = 'page-sobre'

if (!projectId || (!dry && !token)) {
  console.error('Falta NEXT_PUBLIC_SANITY_PROJECT_ID ou SANITY_API_TOKEN')
  process.exit(1)
}

const base = `https://${projectId}.api.sanity.io/v${apiVersion}/data`

async function consultar(query) {
  const r = await fetch(`${base}/query/${dataset}?query=${encodeURIComponent(query)}`)
  const corpo = await r.json()
  if (corpo.error) throw new Error(JSON.stringify(corpo.error))
  return corpo.result
}

const docs = await consultar(`*[_id in ["${ORIGEM}","${DESTINO}"]]`)
const origem = docs.find((d) => d._id === ORIGEM)
const destino = docs.find((d) => d._id === DESTINO)

if (!origem) throw new Error(`${ORIGEM} nao encontrado`)
if (!destino) throw new Error(`${DESTINO} nao encontrado`)

const historia = (origem.blocos || []).find((b) => b._type === 'paginaHistoria')
const pilares = (origem.blocos || []).find((b) => b._type === 'paginaPilares')

if (!historia) throw new Error('bloco paginaHistoria nao encontrado na origem')
if (!pilares) throw new Error('bloco paginaPilares nao encontrado na origem')

const jaTem = (tipo) => (destino.blocos || []).some((b) => b._type === tipo)

// ── onde cada bloco entra ────────────────────────────────────────
// A historia logo depois de "Cuidar de pessoas sempre foi a nossa essencia",
// que e onde a pagina fala do nascimento da empresa. Os pilares antes do
// "Nosso compromisso", que fecha a pagina.
//
// Aponta pela chave do bloco, e nao pelo indice: a primeira insercao empurra
// tudo uma casa para baixo, e um indice calculado antes dela cai no lugar
// errado. Foi o que aconteceu na primeira execucao.
const posicaoDe = (tipo) => {
  const bloco = (destino.blocos || []).find((b) => b._type === tipo)
  if (!bloco) throw new Error(`nao achei o bloco ${tipo} em ${DESTINO}`)
  return `blocos[_key=="${bloco._key}"]`
}

const mutations = []
const relatorio = []

if (jaTem('paginaHistoria')) {
  relatorio.push('historia: /sobre ja tem, nao mexo')
} else {
  relatorio.push(`historia: ${(historia.paragrafos || []).length} paragrafos e ${(historia.destaques || []).length} numeros -> /sobre`)
  mutations.push({
    patch: {
      id: DESTINO,
      insert: { after: posicaoDe('sobreVitrineEstrutura'), items: [historia] },
    },
  })
}

if (jaTem('paginaPilares')) {
  relatorio.push('pilares: /sobre ja tem, nao mexo')
} else {
  relatorio.push(`pilares: missao, visao e ${(pilares.valores || []).length} valores -> /sobre`)
  mutations.push({
    patch: {
      id: DESTINO,
      insert: { before: posicaoDe('sobreCompromisso'), items: [pilares] },
    },
  })
}

// A descricao de busca da /sobre passa a cobrir tambem a historia.
const SEO_NOVO =
  'Conheça a história da Novo Lar Geriatria, fundada em 1994 em Porto Alegre: missão, valores, estrutura, unidades e proposta assistencial.'
if (destino.seo?.description !== SEO_NOVO) {
  relatorio.push('descricao de busca da /sobre: passa a mencionar a historia e 1994')
  mutations.push({ patch: { id: DESTINO, set: { 'seo.description': SEO_NOVO } } })
}

// Documento antigo sai do ar, mas nao e apagado.
if (origem.published !== false) {
  relatorio.push('/sobre/a-novo-lar: despublicada (o conteudo agora vive em /sobre)')
  mutations.push({
    patch: {
      id: ORIGEM,
      set: {
        published: false,
        indexable: false,
        title: 'A Novo Lar (mesclada em Sobre Nós — não editar)',
      },
    },
  })
}

for (const linha of relatorio) console.log('  ' + linha)

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
  path.join(dirBackup, `mescla-sobre-${carimbo}.json`),
  JSON.stringify(docs, null, 2),
  'utf8'
)
console.log(`\nbackup: backups/mescla-sobre-${carimbo}.json`)

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
console.log('OK — mescla feita.')
