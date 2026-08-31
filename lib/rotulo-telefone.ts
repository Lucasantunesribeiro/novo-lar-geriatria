import { COMPANY_CONTACT } from '@/lib/site-data'

/**
 * Rotulos genericos que os clientes pediram para trocar pelo numero: quem le
 * "Ligar agora" ainda nao sabe para onde vai ligar, e no celular o numero
 * precisa estar visivel antes do toque.
 *
 * A comparacao ignora caixa e espacos porque a mesma frase aparece escrita de
 * varios jeitos pelo projeto e pelo CMS ("Ligar agora", "Ligar Agora",
 * "LIGAR AGORA", "Ligue agora"). Nenhum destes tem acento, entao nao ha
 * normalizacao de acento aqui.
 */
const GENERICOS = new Set([
  'ligar',
  'ligar agora',
  'ligue agora',
  'ligar para a central',
  'telefone',
  'falar por telefone',
])

/**
 * Devolve o texto que o botao de telefone deve mostrar.
 *
 * Rotulo vazio ou generico vira o numero da central. Rotulo escrito de
 * proposito no CMS ("Falar com a unidade Passo d'Areia", por exemplo) e
 * respeitado como esta.
 */
export function rotuloTelefone(rotulo?: string, numero = COMPANY_CONTACT.centralPhoneDisplay) {
  if (!rotulo) return numero
  return GENERICOS.has(rotulo.trim().toLowerCase()) ? numero : rotulo
}
