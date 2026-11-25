/**
 * Leva para o Sanity as correções da planilha de revisão da Brenda.
 *
 *   node scripts/aplicar-melhorias-brenda.mjs --dry   (só mostra, não grava)
 *   node scripts/aplicar-melhorias-brenda.mjs         (grava; precisa de token)
 *
 * Por que existe: o código já foi corrigido, mas várias páginas leem o texto
 * do Sanity e o Sanity ganha do código. Sem esta escrita, o visitante continua
 * vendo "bairros nobres", "WhatsApp 24h", telefone antigo e afins.
 *
 * Diferente do corrigir-textos-cms.mjs (busca-e-troca no dataset inteiro),
 * aqui cada troca aponta para um campo exato. Regras:
 *   - modo "igual": só grava se o valor atual for EXATAMENTE o "de".
 *   - modo "trecho": troca só aquele pedaço do texto, se o pedaço existir.
 *   - modo "se-vazio": só grava se o campo ainda não existir.
 * Rodar duas vezes não faz nada na segunda: tudo já estará no "para".
 *
 * Antes de gravar, salva os documentos tocados em backups/.
 * O script nunca imprime o token nem nenhum outro valor de ambiente.
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

// ── textos aprovados (os mesmos que já estão no código) ──────────
const VISITA = 'As visitas são abertas todos os dias. Combine o melhor horário com a equipe.'
const EQUIPE = 'Enfermagem e cuidadores 24 horas, com médicos e terapeutas em escala'
const BAIRROS = "Unidades em Moinhos de Vento e Passo d'Areia, em Porto Alegre"
const RETORNO = 'Envie uma mensagem e nossa equipe retorna o mais breve possível.'
const CASA_BARAO = 'Casa tradicional no bairro Moinhos de Vento'
const HERO =
  'Cuidamos de idosos com diferentes graus de dependência, com enfermagem e cuidadores 24 horas, equipe de saúde multiprofissional e uma rotina pensada para cada pessoa. As visitas são abertas todos os dias.'
const SERVICOS =
  'Atividades pensadas para cada residente manter a autonomia no dia a dia, exercitar a coordenação e a atenção e se sentir ativo e valorizado.'
const JOGOS =
  'Jogos e brincadeiras adaptados a cada residente, que exercitam memória, atenção e raciocínio e criam momentos de convívio e sociabilidade.'
const FESTAS =
  'Aniversário de cada residente e datas especiais do ano celebrados na própria casa com decoração e, sempre que possível, a presença da família.'
const TEMPORARIA_CURTA =
  'Recuperação após cirurgia, alta hospitalar ou um período de cuidado enquanto a família se organiza, com enfermagem 24h e reabilitação desde o primeiro dia.'
const TEMPORARIA = `Hospedagem temporária para idosos em Porto Alegre. ${TEMPORARIA_CURTA}`
const MSG_TEMPORARIA = 'Olá! Gostaria de saber mais sobre a hospedagem temporária da Novo Lar.'
// "9h às 19h" veio da planilha da cliente e ainda está na lista de confirmação.
const HORARIO = 'Equipe 24h · Atendimento comercial 9h às 19h'

// ── trocas campo a campo ─────────────────────────────────────────
// modo padrão: "igual". "trechos" troca pedaços; "se-vazio" só cria.
const TROCAS = [
  // cabeçalho
  { id: 'headerConfigSingleton', caminho: 'topBarLinks[_key=="3d097201afea"].label',
    de: 'Fale Conosco', para: 'Agendar visita', motivo: 'botão do topo leva à visita (planilha)' },

  // home
  { id: 'page-inicio', caminho: 'blocos[_key=="c5ae371f7588"].botaoTexto',
    de: 'Fale Conosco', para: 'Agendar visita', motivo: 'botão do hero (planilha)' },
  { id: 'page-inicio', caminho: 'blocos[_key=="c5ae371f7588"].descricao',
    de: 'Cuidamos de idosos com diferentes graus de dependência, oferecendo atenção individual, equipe multidisciplinar 24 horas e ambientes preparados para promover bem-estar, segurança e tranquilidade às famílias.',
    para: HERO, motivo: 'texto do hero aprovado pela cliente (planilha, item 1)' },
  { id: 'page-inicio', caminho: 'blocos[_key=="c5ae371f7588"].numeros[_key=="66492e20a467"].description',
    de: 'Unidades em bairros nobres de Porto Alegre', para: BAIRROS, motivo: '"bairros nobres" sai (planilha)' },
  { id: 'page-inicio', caminho: 'blocos[_key=="7e15e809fd88"].beneficios[_key=="1a4edfa5afd0"].descricao',
    de: 'Médicos, enfermagem e terapeutas sempre presentes', para: EQUIPE,
    motivo: 'médico e terapeutas não ficam 24h; enfermagem e cuidadores sim' },
  { id: 'page-inicio', caminho: 'blocos[_key=="81b8a3e4a8f4"].cartoes[_key=="119a2a5002a7"].caracteristica',
    de: 'Casa tradicional em região central', para: CASA_BARAO, motivo: 'Moinhos não é "região central"' },
  { id: 'page-inicio', caminho: 'blocos[_key=="234670a49753"].cartoes[_key=="9ecfe27f9ca2"].descricao',
    de: 'Atividades terapêuticas que estimulam as capacidades cognitivas, motoras e sociais, promovendo autonomia e qualidade de vida.',
    para: SERVICOS, motivo: 'texto aprovado pela cliente (planilha, item 2)' },

  // perguntas frequentes
  { id: 'faqPage-singleton', caminho: 'faqs[1].answer', modo: 'trechos',
    trechos: [
      ['mais de 20 anos', 'mais de 30 anos'],
      ["três unidades em bairros nobres de Porto Alegre (Moinhos de Vento e Passo d'Areia), estrutura moderna e acessível,",
        "três unidades em Porto Alegre (duas em Moinhos de Vento e uma no Passo d'Areia), estrutura acessível,"],
    ],
    motivo: 'tempo de casa (30 anos), "bairros nobres" e "moderna" saem' },
  { id: 'faqPage-singleton', caminho: 'faqs[2].answer', modo: 'trechos',
    trechos: [
      ['(51) 3346.7620', '(51) 3376.9462'],
      ['As visitas podem ser realizadas de segunda a domingo.', VISITA],
    ],
    motivo: 'telefone da central atual e regra de visita aprovada' },
  { id: 'faqPage-singleton', caminho: 'ctaSection.buttons[1].href',
    de: 'tel:+555133467620', para: 'tel:+555133769462', motivo: 'telefone da central atual' },
  { id: 'faqPage-singleton', caminho: 'ctaSection.buttons[1].label',
    de: 'Ligar: (51) 3346.7620', para: 'Ligar: (51) 3376.9462', motivo: 'telefone da central atual' },

  // sobre
  { id: 'page-sobre', caminho: 'blocos[_key=="b16897286757"].cartoes[_key=="9d11d82054e4"].descricao',
    de: 'Médicos, enfermagem e terapeutas sempre presentes', para: EQUIPE,
    motivo: 'médico e terapeutas não ficam 24h' },
  { id: 'page-sobre-atividades', caminho: 'blocos[_key=="582904439431"].cartoes[_key=="b9da07ac2c0b"].titulo',
    de: 'Leitura e jogos cognitivos', para: 'Jogos cognitivos', motivo: 'planilha, item 3' },
  { id: 'page-sobre-atividades', caminho: 'blocos[_key=="582904439431"].cartoes[_key=="b9da07ac2c0b"].descricao',
    de: 'Atividades adaptadas para atenção, memória, linguagem e raciocínio no ritmo de cada residente.',
    para: JOGOS, motivo: 'planilha, item 3' },
  { id: 'page-sobre-atividades', caminho: 'blocos[_key=="582904439431"].cartoes[_key=="8cfdfef5f381"].titulo',
    de: 'Convivência social', para: 'Festas e Comemorações', motivo: 'planilha, item 4' },
  { id: 'page-sobre-atividades', caminho: 'blocos[_key=="582904439431"].cartoes[_key=="8cfdfef5f381"].descricao',
    de: 'Rodas de conversa, comemorações e encontros que fortalecem vínculos e senso de pertencimento.',
    para: FESTAS, motivo: 'planilha, item 4' },
  { id: 'page-sobre-estrutura', caminho: 'blocos[_key=="235778953451"].unidades[_key=="9f5c4b5aa2d9"].destaques[0]',
    de: 'Casa tradicional em região central', para: CASA_BARAO, motivo: 'Moinhos não é "região central"' },
  { id: 'page-sobre-estrutura', caminho: 'blocos[_key=="a38b717238d5"].cartoes[_key=="cd57df8f476d"].titulo',
    de: 'WhatsApp 24h', para: 'WhatsApp', motivo: 'ninguém responde WhatsApp de madrugada' },
  { id: 'page-sobre-estrutura', caminho: 'blocos[_key=="a38b717238d5"].cartoes[_key=="cd57df8f476d"].descricao',
    de: 'Envie uma mensagem e receba retorno rápido da equipe de plantão para orientações imediatas.',
    para: RETORNO, motivo: 'promessa de retorno imediato que não se cumpre' },
  { id: 'page-sobre-estrutura', caminho: 'blocos[_key=="1c172fa7c686"].botaoHref',
    de: 'https://wa.me/555133467620', para: 'https://wa.me/5551920011523',
    motivo: 'botão apontava WhatsApp para um fixo antigo' },
  { id: 'page-sobre-localizacao', caminho: 'blocos[_key=="cc864c752d3c"].cartoes[_key=="2bdf8f8e175c"].titulo',
    de: 'Bairros nobres e seguros', para: "Moinhos de Vento e Passo d'Areia", motivo: '"bairros nobres" sai' },

  // páginas de busca
  { id: 'seo-page-moinhos-de-vento', caminho: 'seo.description', modo: 'trechos',
    trechos: [['neste bairro nobre,', 'neste bairro,']], motivo: '"bairro nobre" sai' },
  { id: 'seo-page-novo-hamburgo', caminho: 'sections[_key=="faq"].faqs[_key=="f3"].answer', modo: 'trechos',
    trechos: [['no bairro nobre central,', 'no bairro,']], motivo: '"bairro nobre central" sai' },
  { id: 'seo-page-pergunta-visitas', caminho: 'sections[_key=="two-wy5b2"].checklistItems[0]',
    de: 'Visitas diárias liberadas — sem necessidade de agendamento prévio',
    para: 'Visitas abertas todos os dias — combine o melhor horário com a equipe',
    motivo: 'regra de visita aprovada' },

  // serviços
  { id: 'service-hospedagem-assistida-24h', caminho: 'highlights[13]',
    de: "Localização privilegiada em bairros nobres de Porto Alegre (Moinhos de Vento e Passo d'Areia), próximo a hospitais e com fácil acesso",
    para: "Unidades em Moinhos de Vento e Passo d'Areia, em Porto Alegre, próximas a hospitais e com fácil acesso",
    motivo: '"bairros nobres" sai' },
  { id: 'service-musicoterapia-socializacao', caminho: 'highlights[0]',
    de: 'Musicoterapeutas especializados em geriatria conduzindo sessões individuais e em grupo',
    para: 'Sessões de música individuais e em grupo, adaptadas a cada residente',
    motivo: 'quem conduz e com que formação ainda não foi confirmado' },

  // unidades
  ...['CP4L9iYvntAeS3zWec5oWP', 'TLbSBIZTx3rbZtjVmzEte5', 'd1n9NUdu5CwUlXOr5XpsRG'].map((id) => ({
    id, caminho: 'hours', de: 'Atendimento 24 horas', para: HORARIO,
    motivo: 'separa cuidado 24h de atendimento comercial (A CONFIRMAR o horário)',
  })),
  { id: 'd1n9NUdu5CwUlXOr5XpsRG', caminho: 'faq[_key=="faq-0"].answer',
    de: 'As visitas são permitidas diariamente das 9h às 18h. Recomendamos agendar previamente para melhor atendimento.',
    para: VISITA, motivo: 'regra de visita aprovada' },

  // hospedagem temporária
  { id: 'seo-page-hospedagem-temporaria', caminho: 'seo.description',
    de: 'Hospedagem temporária para idosos em Porto Alegre. Curta ou média estadia com cuidados completos para viagens da família, pós-hospitalar ou respiro do cuidador.',
    para: TEMPORARIA, motivo: 'planilha, item 5' },
  { id: 'seo-page-hospedagem-temporaria', caminho: 'sections[_key=="hero"].description',
    de: 'Precise viajar? O cuidador principal precisa descansar? O idoso está se recuperando de cirurgia? A Novo Lar oferece hospedagem temporária com os mesmos cuidados da residência permanente.',
    para: TEMPORARIA_CURTA, motivo: 'planilha, item 5 (o título já diz "hospedagem temporária")' },
  { id: 'seo-page-hospedagem-temporaria', caminho: 'sections[_key=="hero"].primaryCta.mensagem', modo: 'se-vazio',
    para: MSG_TEMPORARIA, motivo: 'WhatsApp já abre com o assunto' },
  { id: 'seo-page-hospedagem-temporaria', caminho: 'sections[_key=="cta"].ctas[_key=="cta1"].label',
    de: 'Falar por WhatsApp', para: 'Falar sobre hospedagem temporária', motivo: 'botão diz do que se trata' },
  { id: 'seo-page-hospedagem-temporaria', caminho: 'sections[_key=="cta"].ctas[_key=="cta1"].mensagem', modo: 'se-vazio',
    para: MSG_TEMPORARIA, motivo: 'WhatsApp já abre com o assunto' },
]

// Item novo no menu: só entra se nenhum item já levar para a página.
const MENU = {
  id: 'headerConfigSingleton',
  depoisDe: 'mainNavigation[_key=="97fd452f4686"]',
  item: { _key: 'hosptemp01', type: 'link', label: 'Hospedagem temporária', href: '/hospedagem-temporaria-idosos-porto-alegre' },
}

// ── leitura de caminho no documento ──────────────────────────────
/** Quebra 'a[_key=="x"].b[0].c' em segmentos. */
function segmentos(caminho) {
  const out = []
  const re = /([A-Za-z_][A-Za-z0-9_]*)|\[_key=="([^"]+)"\]|\[(\d+)\]/g
  let m
  while ((m = re.exec(caminho))) {
    if (m[1]) out.push({ campo: m[1] })
    else if (m[2]) out.push({ chave: m[2] })
    else out.push({ indice: Number(m[3]) })
  }
  return out
}

/**
 * Lê o valor e devolve também o caminho "canônico": índice numérico vira
 * [_key=="..."] quando o item tem chave, para a escrita não depender da ordem.
 */
function ler(doc, caminho) {
  let atual = doc
  let canonico = ''
  for (const s of segmentos(caminho)) {
    if (atual === undefined || atual === null) return { achou: false }
    if (s.campo) {
      atual = atual[s.campo]
      canonico += canonico ? `.${s.campo}` : s.campo
    } else if (s.chave) {
      if (!Array.isArray(atual)) return { achou: false }
      atual = atual.find((i) => i && i._key === s.chave)
      canonico += `[_key=="${s.chave}"]`
    } else {
      if (!Array.isArray(atual)) return { achou: false }
      const item = atual[s.indice]
      canonico += item && typeof item === 'object' && item._key ? `[_key=="${item._key}"]` : `[${s.indice}]`
      atual = item
    }
  }
  return { achou: true, valor: atual, canonico }
}

/** O pai do campo final precisa existir para "se-vazio" fazer sentido. */
function paiExiste(doc, caminho) {
  const corte = caminho.lastIndexOf('.')
  if (corte < 0) return true
  const pai = ler(doc, caminho.slice(0, corte))
  return pai.achou && pai.valor && typeof pai.valor === 'object'
}

// ── execução ─────────────────────────────────────────────────────
const ids = [...new Set([...TROCAS.map((t) => t.id), MENU.id])]
const docs = await consultar(`*[_id in ${JSON.stringify(ids)}]`)
const porId = Object.fromEntries(docs.map((d) => [d._id, d]))

const mudancas = []
const avisos = []

for (const t of TROCAS) {
  const doc = porId[t.id]
  if (!doc) { avisos.push(`documento ausente: ${t.id}`); continue }
  const modo = t.modo || 'igual'
  const r = ler(doc, t.caminho)

  if (modo === 'se-vazio') {
    if (!paiExiste(doc, t.caminho)) { avisos.push(`${t.id} ${t.caminho}: lugar do campo não existe`); continue }
    if (r.achou && r.valor !== undefined && r.valor !== null && r.valor !== '') {
      if (r.valor !== t.para) avisos.push(`${t.id} ${t.caminho}: já tem outro valor, não mexi`)
      continue
    }
    const pai = t.caminho.slice(0, t.caminho.lastIndexOf('.'))
    const canonPai = ler(doc, pai).canonico
    const campo = t.caminho.slice(t.caminho.lastIndexOf('.') + 1)
    mudancas.push({ id: t.id, caminho: `${canonPai}.${campo}`, atual: '(vazio)', alvo: t.para, motivo: t.motivo })
    continue
  }

  if (!r.achou || typeof r.valor !== 'string') {
    avisos.push(`${t.id} ${t.caminho}: campo não encontrado ou não é texto`)
    continue
  }

  if (modo === 'trechos') {
    let saida = r.valor
    for (const [de, para] of t.trechos) {
      if (saida.includes(de)) saida = saida.split(de).join(para)
      else if (!saida.includes(para)) avisos.push(`${t.id} ${t.caminho}: trecho não achado: ${JSON.stringify(de.slice(0, 60))}`)
    }
    if (saida !== r.valor) mudancas.push({ id: t.id, caminho: r.canonico, atual: r.valor, alvo: saida, motivo: t.motivo })
    continue
  }

  if (r.valor === t.para) continue // já aplicado
  if (r.valor !== t.de) {
    avisos.push(`${t.id} ${t.caminho}: valor atual difere do esperado, não mexi`)
    continue
  }
  mudancas.push({ id: t.id, caminho: r.canonico, atual: r.valor, alvo: t.para, motivo: t.motivo })
}

// menu
let inserirMenu = false
const header = porId[MENU.id]
if (!header) avisos.push(`documento ausente: ${MENU.id}`)
else {
  const nav = header.mainNavigation || []
  const jaTem = nav.some((n) => n && n.href === MENU.item.href)
  const ancora = ler(header, MENU.depoisDe)
  if (jaTem) { /* já aplicado */ }
  else if (!ancora.achou || !ancora.valor) avisos.push(`${MENU.id}: item "Serviços" do menu não achado, não inseri`)
  else inserirMenu = true
}

if (avisos.length) {
  console.log(`${avisos.length} aviso(s):`)
  for (const a of avisos) console.log(`  - ${a}`)
  console.log('')
}

if (mudancas.length === 0 && !inserirMenu) {
  console.log('Nada a corrigir — o Sanity já está com os textos novos.')
  process.exit(0)
}

// backup
const carimbo = new Date().toISOString().replace(/[:.]/g, '-')
const idsTocados = [...new Set([...mudancas.map((m) => m.id), ...(inserirMenu ? [MENU.id] : [])])]
const dirBackup = path.resolve(raiz, 'backups')
fs.mkdirSync(dirBackup, { recursive: true })
const nomeBackup = `melhorias-brenda-${carimbo}.json`
fs.writeFileSync(
  path.join(dirBackup, nomeBackup),
  JSON.stringify(docs.filter((d) => idsTocados.includes(d._id)), null, 2),
  'utf8',
)
console.log(`backup dos ${idsTocados.length} documentos tocados: backups/${nomeBackup}\n`)

// relatório
console.log(`${mudancas.length} campo(s) a corrigir${inserirMenu ? ' + 1 item novo no menu' : ''}:\n`)
for (const m of mudancas) {
  console.log(`  ${m.id}`)
  console.log(`    campo : ${m.caminho}`)
  console.log(`    de    : ${JSON.stringify(m.atual.slice(0, 220))}`)
  console.log(`    para  : ${JSON.stringify(m.alvo.slice(0, 220))}`)
  console.log(`    porque: ${m.motivo}\n`)
}
if (inserirMenu) {
  console.log(`  ${MENU.id}`)
  console.log(`    menu  : insere "${MENU.item.label}" depois de "Serviços"`)
  console.log('    porque: a página não tinha caminho a partir do menu\n')
}

if (dry) {
  console.log('--dry: nada foi escrito.')
  process.exit(0)
}

const mutations = mudancas.map((m) => ({ patch: { id: m.id, set: { [m.caminho]: m.alvo } } }))
if (inserirMenu) {
  mutations.push({ patch: { id: MENU.id, insert: { after: MENU.depoisDe, items: [MENU.item] } } })
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

console.log(`OK — ${(corpo.results || []).length} alteração(ões) gravadas.`)
console.log(`Para desfazer: backups/${nomeBackup}`)
