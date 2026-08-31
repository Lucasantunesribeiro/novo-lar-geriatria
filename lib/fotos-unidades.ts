/**
 * Fotos reais de cada casa, que ja estao em public/fotos-sobre/.
 *
 * Por que existe: duas das tres unidades nao tinham galeria nenhuma no Sanity,
 * entao a pagina da unidade abria sem uma foto sequer do lugar. As fotos
 * sempre estiveram no projeto, so nao estavam ligadas na pagina.
 *
 * Regra de precedencia, igual ao resto do projeto: se a unidade tiver fotos
 * no CMS, o CMS manda. Esta lista so entra quando o CMS esta vazio.
 *
 * A lista foi tirada do conteudo das pastas (16, 12 e 14 arquivos). Se alguem
 * acrescentar ou tirar arquivo de la, precisa mexer aqui tambem — nao ha como
 * ler a pasta em tempo de execucao porque public/ nao e importavel.
 */

type FotoLocal = { src: string; alt: string }

const PASTAS: Record<string, { pasta: string; arquivos: string[]; casa: string }> = {
  'moinhos-luciana-de-abreu': {
    casa: 'Moinhos de Vento — Rua Luciana de Abreu, 151',
    pasta: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151',
    arquivos: [
      '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg',
      '9.jpeg', '10.jpeg', '11.jpeg', '12.jpeg', '13.jpeg', '14.jpeg', '15.jpeg', '16.jpeg',
    ],
  },
  'moinhos-barao-de-santo-angelo': {
    casa: 'Moinhos de Vento — Rua Barão de Santo Ângelo, 406',
    pasta: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406',
    arquivos: [
      '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg',
      '7.jpeg', '8.jpeg', '9.jpeg', '10.jpeg', '11.jpeg', '12.jpeg',
    ],
  },
  'passo-dareia': {
    casa: "Passo d'Areia — Rua Brigadeiro Oliveira Neri, 175",
    pasta: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175',
    arquivos: [
      '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg',
      '8.jpeg', '12.jpeg', '13.jpeg', '14.jpeg', '15.jpeg', '16.jpeg', '17.jpeg',
    ],
  },
}

/**
 * Fotos da casa daquele endereco. Devolve lista vazia para slug desconhecido,
 * para a pagina simplesmente nao mostrar galeria em vez de quebrar.
 */
export function fotosDaUnidade(slug: string): FotoLocal[] {
  const grupo = PASTAS[slug]
  if (!grupo) return []

  return grupo.arquivos.map((arquivo, i) => ({
    // encodeURI porque os nomes de pasta tem espaco, virgula e acento.
    src: encodeURI(`${grupo.pasta}/${arquivo}`),
    alt: `${grupo.casa} — foto ${i + 1}`,
  }))
}
