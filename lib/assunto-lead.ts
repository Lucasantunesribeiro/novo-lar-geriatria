// Assunto do e-mail de lead enviado por app/api/contact/route.ts.
//
// O formulário manda o slug da unidade ("moinhos-luciana-de-abreu"), e o
// assunto saía com o slug cru. Aqui o slug vira o nome que a equipe reconhece.
//
// Mapa fixo em vez de consulta ao Sanity: são 3 unidades e o nome muda pouco,
// e uma consulta a mais em cada envio deixaria o formulário mais lento e
// sujeito a falha. Os slugs seguem lib/site-data.ts (UNITS) e os endereços
// curtos de getUnitPath (/unidade-luciana-de-abreu...).
//
// Sem import de propósito: assim o teste (scripts/testar-assunto-lead.mjs)
// roda direto no Node, sem o alias "@/".

const NOME_POR_SLUG: Record<string, string> = {
  'moinhos-luciana-de-abreu': 'Unidade Luciana de Abreu',
  'unidade-luciana-de-abreu': 'Unidade Luciana de Abreu',
  'moinhos-barao-de-santo-angelo': 'Unidade Barão de Santo Ângelo',
  'moinhos-barao-santo-angelo': 'Unidade Barão de Santo Ângelo',
  'unidade-barao-sto-angelo': 'Unidade Barão de Santo Ângelo',
  'passo-dareia': "Unidade Passo d'Areia",
  'unidade-novo-lar-geriatria': "Unidade Passo d'Areia",
}

/** Nome da unidade para o assunto; "Site" quando o slug não é conhecido. */
export function nomeDaUnidade(slug?: string | null): string {
  if (!slug) return 'Site'
  return NOME_POR_SLUG[slug.trim().toLowerCase()] ?? 'Site'
}

/** Assunto do e-mail: unidade tem prioridade; sem unidade, usa o serviço. */
export function assuntoDoLead(dados: { unit?: string; service?: string }): string {
  if (dados.unit) return `Novo Lead — ${nomeDaUnidade(dados.unit)}`
  if (dados.service) return `Novo Lead — Serviço ${dados.service}`
  return 'Novo Lead — Site'
}
