/**
 * Passo 3b do plano: corrige no Sanity os TEXTOS que os clientes apontaram.
 *
 *   node scripts/corrigir-textos-cms.mjs --dry
 *   node scripts/corrigir-textos-cms.mjs
 *
 * Por que existe um script separado do corrigir-dados-cms.mjs: aquele mexe em
 * campo conhecido (telefone, endereco). Este aqui e uma busca-e-troca que
 * varre TODO texto de TODO documento, porque as mesmas frases aparecem
 * espalhadas em paginas EXPLORE, FAQ, blog e rodape.
 *
 * Importante: as paginas /ilpi-em-porto-alegre e as EXPLORE leem o texto do
 * Sanity, nao dos arquivos de seed. Trocar so no codigo nao muda o que o
 * visitante ve — a escrita no CMS e obrigatoria.
 *
 * Antes de escrever, salva os documentos inteiros em backups/.
 * So altera o que casa: rodar duas vezes nao faz nada.
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

// ── tabela de trocas ─────────────────────────────────────────────
// Ordem importa: o mais longo primeiro, para o curto nao comer o longo.
const TROCAS = [
  {
    de: 'RDC 283/2005',
    para: 'RDC 502/2021',
    motivo: 'a RDC 283/2005 foi revogada; a norma vigente para ILPI e a RDC 502/2021 (cliente apontou)',
  },
  {
    de: 'RDC 283 ',
    para: 'RDC 502/2021 ',
    motivo: 'mesma norma revogada, citada sem o ano',
  },
  {
    de: 'funcionamento regular em Porto Alegre',
    para: 'funcionamento em Porto Alegre',
    motivo: '"regular" soa a jargao de fiscalizacao e nao acrescenta nada (cliente apontou)',
  },
  {
    de: 'operação regular',
    para: 'operação',
    motivo: 'mesmo caso de "funcionamento regular"',
  },
  {
    de: 'Unidades registradas',
    para: 'Unidades',
    motivo: '"registradas" nao diz nada ao familiar que le (cliente apontou)',
  },
  {
    de: 'unidades registradas',
    para: 'unidades',
    motivo: 'mesma frase, no meio da linha',
  },
  {
    de: 'três unidades reais na cidade',
    para: 'três unidades na cidade',
    motivo: '"reais" abre a duvida de que existiriam unidades irreais (cliente apontou)',
  },
  {
    de: 'Não temos unidades físicas em',
    para: 'Não temos unidade em',
    motivo: 'no plural com "fisicas" a frase soa defensiva (cliente apontou)',
  },
  {
    de: 'Este bloco fecha a home conectando contato imediato, visita presencial e páginas de apoio para quem ainda está comparando opções.',
    para: '',
    motivo: 'anotacao de desenvolvimento que vazou para a pagina (cliente apontou); o codigo ja nao tem esse padrao',
  },
  {
    de: 'Estrutura moderna em região central',
    para: 'Casa tradicional em região central',
    motivo: 'a casa da Barao de Santo Angelo e antiga; chamar de moderna e falso (cliente apontou)',
  },
  {
    de: 'Áreas de convivência integradas com jardins',
    para: 'Áreas de convivência amplas',
    motivo: 'a Barao de Santo Angelo nao tem jardim integrado (cliente apontou)',
  },
  {
    de: 'Unidade moderna no Moinhos de Vento',
    para: 'Casa tradicional no Moinhos de Vento',
    motivo: 'mesma casa antiga descrita como moderna, agora na descricao da unidade',
  },
  {
    de: 'Solicitar horario',
    para: 'Solicitar horário',
    motivo: 'acento faltando no rotulo do cartao de agendamento da home',
  },

  // ── jardim ───────────────────────────────────────────────────
  // Nenhuma das tres casas tem jardim: a Luciana e a Barao ja tinham sido
  // negadas pelos clientes, e agora o Passo d'Areia tambem. Entao toda
  // promessa de jardim sobre as casas sai.
  //
  // Atencao: "Jardim Itu" e "Jardim Lindoia" sao nomes de bairro da Zona
  // Norte e NAO podem ser tocados — por isso as trocas abaixo sao frases
  // inteiras, nunca a palavra solta.
  {
    de: 'amplos espaços de convivência, jardim interno e toda a infraestrutura',
    para: 'amplos espaços de convivência e toda a infraestrutura',
    motivo: 'o Passo d\'Areia nao tem jardim interno (cliente confirmou)',
  },
  {
    de: 'com amplos espaços, jardim interno e equipe multidisciplinar',
    para: 'com amplos espaços e equipe multidisciplinar',
    motivo: 'mesma promessa de jardim, agora na descricao de busca',
  },
  {
    de: 'Jardim arborizado',
    para: 'Áreas de convivência amplas',
    motivo: 'diferencial de jardim numa casa que nao tem jardim',
  },
  {
    de: 'banhados por luz natural, jardins, salas de convívio',
    para: 'banhados por luz natural, salas de convívio',
    motivo: 'promessa de jardim generica sobre as tres casas',
  },
  {
    de: 'percorra suítes, jardins e espaços de convivência',
    para: 'percorra suítes e espaços de convivência',
    motivo: 'o roteiro da visita levava a um jardim que nao existe',
  },
  {
    de: 'acessibilidade total, jardins, salas de convivência',
    para: 'acessibilidade total, salas de convivência',
    motivo: 'promessa de jardim generica sobre as tres casas',
  },
  {
    de: 'áreas de convivência, jardim, espaços para visitas',
    para: 'áreas de convivência, espaços para visitas',
    motivo: 'promessa de jardim generica sobre as tres casas',
  },
  {
    de: 'Áreas de convivência e jardim',
    para: 'Áreas de convivência',
    motivo: 'item de lista prometendo jardim no Passo d\'Areia',
  },
  {
    de: 'Contamos com jardins arborizados, salas de atividades',
    para: 'Contamos com salas de atividades',
    motivo: 'promessa de jardim generica sobre as tres casas',
  },
  {
    de: 'corrimãos, áreas verdes arborizadas e salas de convivência',
    para: 'corrimãos e salas de convivência',
    motivo: '"areas verdes arborizadas" e a mesma promessa de jardim com outro nome',
  },
  {
    de: 'quartos acessíveis, áreas verdes e sala de convivência',
    para: 'quartos acessíveis e sala de convivência',
    motivo: 'mesma promessa de area verde nas casas',
  },
  {
    de: 'Estrutura premium com jardim interno',
    para: 'Estrutura premium',
    motivo: 'o cliente pediu explicitamente "deixar estrutura premium apenas"',
  },
  {
    de: 'quartos individuais e coletivos, área verde e sala de convivência',
    para: 'quartos individuais e coletivos e sala de convivência',
    motivo: 'area verde prometida na unidade de Moinhos de Vento, que nao tem',
  },
]

// Campos que nunca podem ser tocados por busca-e-troca: mudar um destes
// quebra endereco de pagina, referencia ou imagem.
const CHAVES_PROIBIDAS = new Set([
  '_id', '_type', '_rev', '_key', '_ref', '_createdAt', '_updatedAt',
  'current', 'slug', 'url', 'href', 'asset',
  'imagePath', 'heroImagePath', 'coverImagePath', 'imagemPadrao',
])

function trocar(texto) {
  let saida = texto
  const usadas = []
  for (const t of TROCAS) {
    if (saida.includes(t.de)) {
      saida = saida.split(t.de).join(t.para)
      usadas.push(t.motivo)
    }
  }
  return usadas.length ? { saida, motivo: usadas.join(' | ') } : null
}

/** Monta o caminho que o Sanity entende: prefere _key a indice. */
function segmento(item, indice) {
  if (item && typeof item === 'object' && !Array.isArray(item) && item._key) {
    return `[_key=="${item._key}"]`
  }
  return `[${indice}]`
}

const mudancas = []

function andar(valor, caminho, doc) {
  if (typeof valor === 'string') {
    const r = trocar(valor)
    if (r) mudancas.push({ id: doc._id, caminho, atual: valor, alvo: r.saida, motivo: r.motivo })
    return
  }
  if (Array.isArray(valor)) {
    valor.forEach((item, i) => andar(item, caminho + segmento(item, i), doc))
    return
  }
  if (valor && typeof valor === 'object') {
    for (const chave of Object.keys(valor)) {
      if (CHAVES_PROIBIDAS.has(chave)) continue
      andar(valor[chave], caminho ? `${caminho}.${chave}` : chave, doc)
    }
  }
}

// ── varredura ────────────────────────────────────────────────────
const todos = await consultar('*[!(_id in path("drafts.**"))]')
console.log(`${todos.length} documentos lidos do dataset "${dataset}".`)

for (const doc of todos) andar(doc, '', doc)

if (mudancas.length === 0) {
  console.log('Nada a corrigir — os textos ja estao certos.')
  process.exit(0)
}

// ── backup ───────────────────────────────────────────────────────
const carimbo = new Date().toISOString().replace(/[:.]/g, '-')
const idsTocados = [...new Set(mudancas.map((m) => m.id))]
const dirBackup = path.resolve(raiz, 'backups')
fs.mkdirSync(dirBackup, { recursive: true })
const arqBackup = path.join(dirBackup, `textos-${carimbo}.json`)
fs.writeFileSync(
  arqBackup,
  JSON.stringify(todos.filter((d) => idsTocados.includes(d._id)), null, 2),
  'utf8',
)
console.log(`backup dos ${idsTocados.length} documentos tocados: backups/textos-${carimbo}.json\n`)

// ── relatorio ────────────────────────────────────────────────────
console.log(`${mudancas.length} texto(s) a corrigir em ${idsTocados.length} documento(s):\n`)
for (const m of mudancas) {
  console.log(`  ${m.id}`)
  console.log(`    campo : ${m.caminho}`)
  console.log(`    de    : ${JSON.stringify(m.atual.slice(0, 200))}`)
  console.log(`    para  : ${JSON.stringify(m.alvo.slice(0, 200))}`)
  console.log(`    porque: ${m.motivo}\n`)
}

if (dry) {
  console.log('--dry: nada foi escrito.')
  process.exit(0)
}

const mutations = mudancas.map((m) => ({
  patch: { id: m.id, set: { [m.caminho]: m.alvo } },
}))

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
console.log(`Para desfazer: backups/textos-${carimbo}.json`)
