/**
 * Passo 1 do plano: corrige no Sanity os dados que hoje estao errados no ar.
 *
 *   node scripts/corrigir-dados-cms.mjs --dry
 *   node scripts/corrigir-dados-cms.mjs
 *
 * O que corrige, e por que:
 *
 *  - Telefone e WhatsApp das Configuracoes e das 3 Unidades.
 *    O numero (51) 3346.7620 foi trocado no codigo no commit 6425480
 *    ("substituir telefone central antigo"), mas o CMS ficou com o antigo.
 *    Os numeros corretos saem de lib/site-data.ts, nao sao digitados aqui.
 *
 *  - WhatsApp: as unidades de Moinhos apontavam para 555127970901, que e
 *    telefone fixo. wa.me com fixo abre "numero invalido". O unico numero
 *    com WhatsApp no projeto e COMPANY_CONTACT.whatsappDigits.
 *
 *  - Cartoes de unidade da home: endereco da Luciana (231 -> 151), endereco
 *    do Passo d'Areia (Paqueta Oliveira Neto 770 -> Brigadeiro Oliveira Neri
 *    175) e o "jardim interno" que o cliente diz nao existir.
 *
 *  - Diferenciais da unidade Luciana: remove "Jardim interno" e conserta o
 *    acento quebrado de "Area".
 *
 * Antes de escrever, salva os documentos inteiros em backups/.
 * So altera campo que esta diferente do alvo: rodar duas vezes nao faz nada.
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

async function consultar(query) {
  const r = await fetch(`${base}/query/${dataset}?query=${encodeURIComponent(query)}`)
  const corpo = await r.json()
  if (corpo.error) throw new Error(JSON.stringify(corpo.error))
  return corpo.result
}

// ── numeros certos, lidos de lib/site-data.ts ────────────────────
function lerSiteData() {
  const fonte = fs.readFileSync(path.resolve(raiz, 'lib/site-data.ts'), 'utf8')

  // A aspa de fechamento tem que ser a mesma da abertura. Com um padrao
  // frouxo, "Passo d'Areia" era lido como "Passo d" — o apostrofo cortava.
  const pegar = (bloco, campo) => {
    const m = bloco.match(new RegExp(`${campo}: (['"])((?:(?!\\1).)*)\\1`))
    return m ? m[2] : null
  }

  const unidades = {}
  for (const slug of ['moinhos-luciana-de-abreu', 'moinhos-barao-de-santo-angelo', 'passo-dareia']) {
    const i = fonte.indexOf(`slug: '${slug}'`)
    if (i < 0) throw new Error(`slug ${slug} nao encontrado em lib/site-data.ts`)
    const bloco = fonte.slice(i, i + 600)
    unidades[slug] = {
      phoneDisplay: pegar(bloco, 'phoneDisplay'),
      phoneDigits: pegar(bloco, 'phoneDigits'),
      neighborhood: pegar(bloco, 'neighborhood'),
      address: pegar(bloco, 'address'),
    }
  }

  const iContato = fonte.indexOf('export const COMPANY_CONTACT')
  const contato = fonte.slice(iContato, iContato + 500)

  return {
    unidades,
    whatsappDigits: pegar(contato, 'whatsappDigits'),
    centralPhoneDisplay: pegar(contato, 'centralPhoneDisplay'),
  }
}

const SITE = lerSiteData()

console.log('numeros lidos de lib/site-data.ts:')
console.log(`  central          ${SITE.centralPhoneDisplay}`)
console.log(`  whatsapp unico   ${SITE.whatsappDigits}`)
for (const [slug, u] of Object.entries(SITE.unidades)) console.log(`  ${slug.padEnd(30)} ${u.phoneDisplay}`)
console.log()

// ── de qual documento do CMS e cada unidade ──────────────────────
const POR_ENDERECO = [
  { slug: 'moinhos-luciana-de-abreu', casa: 'Luciana de Abreu' },
  { slug: 'moinhos-barao-de-santo-angelo', casa: 'Barão de Santo Ângelo' },
  { slug: 'passo-dareia', casa: 'Oliveira Neri' },
]

/** Conserta "?rea" -> "Área": o acento se perdeu na carga original. */
function arrumarAcento(texto) {
  const c = texto.charCodeAt(0)
  const quebrado = (c >= 0xd800 && c <= 0xdfff) || c === 0xfffd
  return quebrado ? 'Á' + texto.slice(1) : texto
}

const unidades = await consultar('*[_type=="unit"]{_id,name,phone,whatsapp,address,features}')
const settings = await consultar('*[_id=="siteSettingsSingleton"][0]')
const home = await consultar('*[_id=="page-inicio"][0]')
const cabecalho = await consultar('*[_type=="headerConfig"][0]{_id,logoHeight,phones}')

if (!settings) throw new Error('siteSettingsSingleton nao encontrado')
if (!home) throw new Error('page-inicio nao encontrado')
if (!cabecalho) throw new Error('headerConfig nao encontrado')
if (unidades.length !== 3) throw new Error(`esperava 3 unidades, achei ${unidades.length}`)

/** Altura do logo no cabecalho, em pixels. O cliente pediu um logo maior. */
const ALTURA_LOGO = 68

/**
 * Os dois telefones do topo, a pedido do cliente: um para Moinhos de Vento e
 * outro para o Passo d'Areia. As duas casas de Moinhos dividem o mesmo
 * numero, entao sao dois botoes e nao tres. Os numeros saem de
 * lib/site-data.ts; nada e digitado aqui.
 */
const moinhos = SITE.unidades['moinhos-luciana-de-abreu']
const passo = SITE.unidades['passo-dareia']
const TELEFONES_DO_TOPO = [
  {
    _key: 'fone-moinhos',
    unidade: moinhos.neighborhood,
    label: moinhos.phoneDisplay,
    href: `tel:${moinhos.phoneDigits}`,
  },
  {
    _key: 'fone-passo',
    unidade: passo.neighborhood,
    label: passo.phoneDisplay,
    href: `tel:${passo.phoneDigits}`,
  },
]

// ── backup ───────────────────────────────────────────────────────
const carimbo = new Date().toISOString().replace(/[:.]/g, '-')
const dirBackup = path.resolve(raiz, 'backups')
fs.mkdirSync(dirBackup, { recursive: true })
const arqBackup = path.join(dirBackup, `cms-${carimbo}.json`)

const idsTocados = [settings._id, home._id, cabecalho._id, ...unidades.map((u) => u._id)]
const brutos = await consultar(`*[_id in ${JSON.stringify(idsTocados)}]`)
fs.writeFileSync(arqBackup, JSON.stringify(brutos, null, 2), 'utf8')
console.log(`backup dos ${brutos.length} documentos: backups/cms-${carimbo}.json\n`)

// ── montar as mudancas ───────────────────────────────────────────
const mutations = []
const mudancas = []

function definir(id, caminho, atual, alvo, motivo) {
  // Compara por valor: alguns campos sao listas, e lista nunca e igual a si
  // mesma com ===. Sem isso, o script escreveria de novo a cada execucao.
  if (JSON.stringify(atual) === JSON.stringify(alvo)) return
  mudancas.push({ id, caminho, atual, alvo, motivo })
  mutations.push({ patch: { id, set: { [caminho]: alvo } } })
}

// Cabecalho: o logo estava em 48px numa barra de 100px e o cliente pediu
// maior. O campo fica editavel no Studio; aqui so subimos o valor guardado.
definir(
  cabecalho._id,
  'logoHeight',
  cabecalho.logoHeight,
  ALTURA_LOGO,
  'logo pequeno demais na barra de 100px (cliente apontou)'
)
definir(
  cabecalho._id,
  'phones',
  cabecalho.phones,
  TELEFONES_DO_TOPO,
  'so havia um telefone no topo; o cliente pediu um para Moinhos e outro para o Passo d\'Areia'
)

// Configuracoes do site
definir(
  settings._id,
  'globalPhone',
  settings.globalPhone,
  SITE.centralPhoneDisplay,
  'numero antigo, trocado no codigo em 6425480'
)
definir(
  settings._id,
  'globalWhatsapp',
  settings.globalWhatsapp,
  SITE.whatsappDigits,
  'era fixo; wa.me com fixo abre numero invalido'
)

// Unidades
for (const doc of unidades) {
  const casa = POR_ENDERECO.find((p) => (doc.address || doc.name || '').includes(p.casa))
  if (!casa) throw new Error(`nao identifiquei a unidade: ${doc.name}`)
  const certo = SITE.unidades[casa.slug]

  definir(doc._id, 'phone', doc.phone, certo.phoneDisplay, `telefone de ${casa.slug}`)
  definir(doc._id, 'whatsapp', doc.whatsapp, SITE.whatsappDigits, 'unico numero com WhatsApp')

  if (Array.isArray(doc.features)) {
    const novas = doc.features
      .map(arrumarAcento)
      .filter((f) => !(casa.slug === 'moinhos-luciana-de-abreu' && f === 'Jardim interno'))

    if (JSON.stringify(novas) !== JSON.stringify(doc.features)) {
      mudancas.push({
        id: doc._id,
        caminho: 'features',
        atual: doc.features.join(' | '),
        alvo: novas.join(' | '),
        motivo: 'acento quebrado / jardim que nao existe',
      })
      mutations.push({ patch: { id: doc._id, set: { features: novas } } })
    }
  }
}

// Cartoes de unidade da home
const blocoUnidades = (home.blocos || []).find((b) => b._type === 'homeUnidades')
if (!blocoUnidades) throw new Error('bloco homeUnidades nao existe em page-inicio')

// O cartao e identificado pelo titulo + endereco juntos: o da Luciana tem
// titulo generico ("Moinhos de Vento") e o do Passo d'Areia tem o endereco
// errado, entao nenhum dos dois campos sozinho identifica os tres.
const CARTOES_CERTOS = [
  {
    marcas: ['Luciana de Abreu'],
    endereco: 'Rua Luciana de Abreu, 151 - Bairro Moinhos de Vento',
    caracteristica: 'Estrutura premium',
  },
  {
    marcas: ['Passo'],
    endereco: "Rua Brigadeiro Oliveira Neri, 175 - Bairro Passo d'Areia",
  },
  {
    marcas: ['Barão de Santo Ângelo'],
    caracteristica: 'Casa tradicional em região central',
  },
]

const casados = new Set()

for (const cartao of blocoUnidades.cartoes || []) {
  const texto = `${cartao.titulo || ''} ${cartao.endereco || ''}`
  const alvo = CARTOES_CERTOS.find((c) => c.marcas.some((marca) => texto.includes(marca)))
  if (!alvo) throw new Error(`nao identifiquei o cartao de unidade: ${JSON.stringify(texto)}`)
  if (casados.has(alvo)) throw new Error(`dois cartoes casaram com o mesmo alvo: ${alvo.marcas}`)
  casados.add(alvo)

  const p = `blocos[_key=="${blocoUnidades._key}"].cartoes[_key=="${cartao._key}"]`

  if (alvo.endereco) definir(home._id, `${p}.endereco`, cartao.endereco, alvo.endereco, 'endereco errado')
  if (alvo.caracteristica)
    definir(home._id, `${p}.caracteristica`, cartao.caracteristica, alvo.caracteristica, 'texto que o cliente contestou')
  definir(home._id, `${p}.whatsapp`, cartao.whatsapp, SITE.whatsappDigits, 'unico numero com WhatsApp')
}

// ── relatorio ────────────────────────────────────────────────────
if (mudancas.length === 0) {
  console.log('Nada a corrigir — os dados ja estao certos.')
  process.exit(0)
}

console.log(`${mudancas.length} campo(s) a corrigir:\n`)
for (const m of mudancas) {
  console.log(`  ${m.id}`)
  console.log(`    campo : ${m.caminho}`)
  console.log(`    de    : ${JSON.stringify(m.atual)}`)
  console.log(`    para  : ${JSON.stringify(m.alvo)}`)
  console.log(`    porque: ${m.motivo}\n`)
}

if (dry) {
  console.log('--dry: nada foi escrito.')
  process.exit(0)
}

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

console.log(`OK — ${(corpo.results || []).length} documento(s) atualizados.`)
console.log(`Para desfazer: backups/cms-${carimbo}.json`)
