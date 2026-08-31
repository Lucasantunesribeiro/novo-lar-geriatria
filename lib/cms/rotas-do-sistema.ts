/**
 * ARQUIVO GERADO — nao edite a mao.
 * Regenere com: node scripts/gerar-rotas-do-sistema.mjs
 *
 * Enderecos que ja tem um arquivo proprio em app/(routes)/.
 * O Next.js sempre serve o arquivo; a rota curinga [...slug] nunca os alcanca.
 */

export const ROTAS_COM_ARQUIVO_PROPRIO: readonly string[] = [
  '/',
  '/acolhimento-pos-alta-hospitalar-idosos',
  '/alvorada',
  '/blog',
  '/cachoeirinha',
  '/cachoeirinha/ilpi-em-porto-alegre',
  '/canoas',
  '/canoas/ilpi-em-porto-alegre',
  '/casa-de-repouso-em-porto-alegre',
  '/clinica-geriatrica-porto-alegre',
  '/clinica-para-idosos-em-porto-alegre',
  '/contato',
  '/cuidado-integral-ao-idoso-em-porto-alegre',
  '/cuidados-alzheimer',
  '/cuidados-demencia',
  '/cuidados-fragilidade-do-idoso',
  '/cuidados-idosos-acamados',
  '/cuidados-mobilidade-reduzida',
  '/cuidados-pacientes-cronicos',
  '/cuidados-pacientes-neurologicos',
  '/cuidados-pacientes-oncologicos',
  '/cuidados-paliativos-idosos',
  '/cuidados-parkinson',
  '/cuidados-perda-cognitiva',
  '/cuidados-pos-avc',
  '/cuidados-pos-cirurgicos-idosos',
  '/cuidados-reabilitacao-geriatrica',
  '/depoimentos',
  '/esteio',
  '/fotos',
  '/gravatai',
  '/gravatai/ilpi-em-porto-alegre',
  '/hospedagem-temporaria-idosos-porto-alegre',
  '/ilpi-em-porto-alegre',
  '/ilpi-porto-alegre',
  '/internacao-geriatrica-porto-alegre',
  '/internacao-para-pacientes-cronicos-porto-alegre',
  '/internacao-para-pacientes-neurologicos-porto-alegre',
  '/lar-para-idosos-em-porto-alegre',
  '/novo-hamburgo',
  '/novo-hamburgo/ilpi-em-porto-alegre',
  '/obrigado',
  '/perguntas-frequentes',
  '/politica-de-privacidade',
  '/porto-alegre',
  '/porto-alegre/moinhos-de-vento',
  '/porto-alegre/moinhos-de-vento/cuidados-alzheimer',
  '/porto-alegre/moinhos-de-vento/cuidados-demencia',
  '/porto-alegre/moinhos-de-vento/cuidados-paliativos',
  '/porto-alegre/moinhos-de-vento/cuidados-parkinson',
  '/porto-alegre/passo-dareia',
  '/porto-alegre/passo-dareia/cuidados-demencia',
  '/porto-alegre/passo-dareia/cuidados-parkinson',
  '/porto-alegre/passo-dareia/idosos-acamados',
  '/regiao-metropolitana',
  '/residencia-assistida-porto-alegre',
  '/residencia-para-idosos-porto-alegre',
  '/residencial-geriatrico-em-porto-alegre',
  '/residencial-geriatrico-porto-alegre',
  '/sao-leopoldo',
  '/sao-leopoldo/ilpi-em-porto-alegre',
  '/sapucaia-do-sul',
  '/servicos',
  '/sobre',
  '/sobre/atividades',
  '/sobre/equipe',
  '/sobre/estrutura',
  '/sobre/fotos',
  '/sobre/localizacao',
  '/termos-de-uso',
  '/vale-do-sinos',
  '/viamao',
  '/viamao/ilpi-em-porto-alegre',
  '/zona-norte-porto-alegre',
]

const CONJUNTO = new Set(ROTAS_COM_ARQUIVO_PROPRIO)

/** O endereco ja e servido por um arquivo do projeto? */
export function temArquivoProprio(caminho: string): boolean {
  return CONJUNTO.has(normalizarCaminho(caminho))
}

/** Normaliza para a forma usada no Sanity: comeca com /, sem barra final. */
export function normalizarCaminho(caminho: string): string {
  if (!caminho) return '/'
  const comBarra = caminho.startsWith('/') ? caminho : `/${caminho}`
  if (comBarra === '/') return '/'
  return comBarra.replace(/\/+$/, '')
}
