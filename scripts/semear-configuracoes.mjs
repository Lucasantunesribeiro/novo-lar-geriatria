/**
 * Cria os documentos de configuracao do site com os valores que ja estao no ar.
 *
 *   node scripts/semear-configuracoes.mjs --dry   (so mostra)
 *   node scripts/semear-configuracoes.mjs         (escreve no Sanity)
 *
 * Sao tres: "Cabeçalho do site", "Rodapé do site" e "Textos do site".
 * Sem eles o cliente abre o Studio e ve os campos em branco, sem saber o que o
 * site usa hoje. Com eles, ve o texto real e so precisa editar.
 *
 * Usa `createIfNotExists`: se o documento ja existir, nada e sobrescrito.
 */
import fs from 'node:fs'
import path from 'node:path'
import {randomUUID} from 'node:crypto'

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
const dry = process.argv.includes('--dry')

if (!projectId) {
  console.error('Falta NEXT_PUBLIC_SANITY_PROJECT_ID')
  process.exit(1)
}
if (!dry && !token) {
  console.error('Falta SANITY_API_TOKEN (com permissao de escrita)')
  process.exit(1)
}

const k = () => randomUUID().replace(/-/g, '').slice(0, 12)

// ── Cabecalho ────────────────────────────────────────────────────
// Copia fiel do que components/layout/HeaderWrapper.tsx usa hoje.
const CABECALHO = {
  _id: 'headerConfigSingleton',
  _type: 'headerConfig',
  showTopBar: true,
  topBarBusinessHours: 'Atendimento Comercial 9h-19h · Equipe 24h',
  topBarText: 'Residencial Geriátrico em Porto Alegre - Novo Lar',
  topBarLinks: [
    {_key: k(), label: 'Tour e contato', href: '/sobre'},
    {_key: k(), label: 'Fotos', href: '/sobre/fotos'},
    {_key: k(), label: 'Notícias', href: '/blog'},
    {_key: k(), label: 'Fale Conosco', href: '/contato'},
  ],
  mainNavigation: [
    {_key: k(), type: 'link', label: 'Sobre Nós', href: '/sobre'},
    {_key: k(), type: 'link', label: 'Serviços', href: '/servicos'},
    {_key: k(), type: 'link', label: 'Estrutura', href: '/sobre/estrutura'},
    {_key: k(), type: 'link', label: 'Notícias', href: '/blog'},
    {_key: k(), type: 'link', label: 'Contato', href: '/contato'},
  ],
  showUnitsDropdown: true,
  unitsDropdownLabel: 'Unidades',
  unitsDropdownItems: [
    {
      _key: k(),
      label: 'Moinhos de Vento - Luciana de Abreu',
      href: '/unidade-luciana-de-abreu',
    },
    {
      _key: k(),
      label: 'Moinhos de Vento - Barão de Santo Ângelo',
      href: '/unidade-barao-sto-angelo',
    },
    {_key: k(), label: "Passo d'Areia", href: '/unidade-novo-lar-geriatria'},
  ],
  showPhoneButton: true,
  phones: [{_key: k(), label: '(51) 3376.9462', href: 'tel:5133769462'}],
  showWhatsappButton: true,
  whatsappButtonLabel: 'WhatsApp',
  whatsappNumber: '5551920011523',
  logoAlt: 'Novo Lar Geriatria',
  logoHeight: 48,
  mobileMenuTitle: 'Menu',
}

// ── Rodape ───────────────────────────────────────────────────────
// Copia fiel de components/layout/FooterLight.tsx.
const RODAPE = {
  _id: 'footerConfigSingleton',
  _type: 'footerConfig',
  logoAlt: 'Novo Lar Geriatria - Residencial Geriátrico em Porto Alegre',
  descricao:
    'Cuidado humanizado e especializado para idosos em Porto Alegre, com mais de 30 anos de experiência, equipe multidisciplinar e três unidades reais na cidade.',
  mostrarTelefone: true,
  telefoneTexto: '(51) 3376.9462',
  telefoneLink: 'tel:5133769462',
  mostrarEmail: true,
  colunas: [
    {
      _key: k(),
      titulo: 'Institucional',
      links: [
        {_key: k(), label: 'Sobre a Novo Lar', href: '/sobre/a-novo-lar'},
        {_key: k(), label: 'Equipe multidisciplinar', href: '/sobre/equipe'},
        {_key: k(), label: 'Atividades', href: '/sobre/atividades'},
        {_key: k(), label: 'Localização', href: '/sobre/localizacao'},
      ],
    },
    {
      _key: k(),
      titulo: 'Explore',
      links: [
        {_key: k(), label: 'ILPI em Porto Alegre', href: '/ilpi-em-porto-alegre'},
        {_key: k(), label: 'Cuidados para Alzheimer', href: '/cuidados-alzheimer'},
        {_key: k(), label: 'Perguntas frequentes', href: '/perguntas-frequentes'},
        {_key: k(), label: 'Comparativos', href: '/comparativos/ilpi-ou-home-care'},
        {_key: k(), label: 'Depoimentos', href: '/depoimentos'},
      ],
    },
  ],
  mostrarUnidades: true,
  tituloUnidades: 'Unidades',
  linksUnidades: [
    {
      _key: k(),
      label: 'Moinhos de Vento - Luciana de Abreu',
      href: '/unidade-luciana-de-abreu',
    },
    {
      _key: k(),
      label: 'Moinhos de Vento - Barão de Santo Ângelo',
      href: '/unidade-barao-sto-angelo',
    },
    {_key: k(), label: "Passo d'Areia", href: '/unidade-novo-lar-geriatria'},
  ],
  mostrarAno: true,
  textoCopyright: 'Novo Lar Geriatria. Porto Alegre - RS. Todos os direitos reservados.',
}

// ── Textos do site ───────────────────────────────────────────────
const TEXTOS = {
  _id: 'textosGlobaisSingleton',
  _type: 'textosGlobais',

  formTitulo: 'Envie sua Mensagem',
  formLabelNome: 'Nome Completo *',
  formPlaceholderNome: 'Seu nome completo',
  formPlaceholderEmail: 'seuemail@exemplo.com',
  formPlaceholderTelefone: '(51) 99999-9999',
  formOpcaoUnidadeVazia: 'Selecione uma unidade',
  formOpcaoNaoSei: 'Ainda não sei',
  formPlaceholderMensagem: 'Conte-nos como podemos ajudá-lo...',
  formBotao: 'Enviar Mensagem',
  formSucesso: 'Mensagem enviada com sucesso!',
  formSucessoDetalhe: 'Redirecionando...',
  formErro: 'Erro ao enviar mensagem',
  formTituloUnidades: 'Nossas Unidades',

  cookiesMostrar: true,
  cookiesAceitar: 'Aceitar',
  cookiesRejeitar: 'Rejeitar',
  cookiesPersonalizar: 'Customizar',

  erroTitulo: 'Página não encontrada',
  erroDescricao: 'A página que você está procurando não existe ou foi movida.',
  erroBotao: 'Voltar para o início',

  obrigadoTitulo: 'Mensagem Enviada com Sucesso!',
  obrigadoDescricao:
    'Obrigado por entrar em contato conosco. Recebemos sua mensagem e nossa equipe entrará em contato em breve.',

  whatsappFlutuanteMostrar: true,
  barraCelularMostrar: true,
  barraCelularTextoLigar: 'Ligar',
  barraCelularTextoWhatsapp: 'WhatsApp',

  rotuloVerServicos: 'Conheça todos os serviços',
  rotuloBuscaFamilia: 'Cuidado importante quando a família busca:',
  rotuloBeneficios: 'Principais benefícios',
  rotuloComoAcontece: 'Como esse serviço acontece na prática',
  rotuloOutrosServicos: 'Outros Serviços',
  rotuloContatoUnidade: 'Informações de Contato',
  rotuloAvaliacoesGoogle: '· 26 avaliações no Google',
  artigoCtaTitulo: 'Tem dúvidas sobre cuidados geriátricos?',
}

const DOCUMENTOS = [
  {rotulo: 'Cabeçalho do site', doc: CABECALHO},
  {rotulo: 'Rodapé do site', doc: RODAPE},
  {rotulo: 'Textos do site', doc: TEXTOS},
]

for (const {rotulo, doc} of DOCUMENTOS) {
  const campos = Object.keys(doc).filter((c) => c !== '_id' && c !== '_type')
  console.log(`${rotulo} (${doc._id}) -> ${campos.length} campos`)
}

if (dry) {
  console.log('\n--dry: nada foi escrito.')
  process.exit(0)
}

const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}?returnIds=true`
const resposta = await fetch(url, {
  method: 'POST',
  headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`},
  body: JSON.stringify({
    mutations: DOCUMENTOS.map(({doc}) => ({createIfNotExists: doc})),
  }),
})

const corpo = await resposta.json()

if (!resposta.ok) {
  console.error('\nFalhou:', JSON.stringify(corpo, null, 2))
  process.exit(1)
}

console.log('\nOK —', JSON.stringify(corpo.results ?? corpo))
