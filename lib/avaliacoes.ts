import { client } from '@/lib/sanity/client'
import { TESTIMONIALS } from '@/lib/testimonials-data'

/**
 * Fonte unica das avaliacoes do site.
 *
 * Tudo que mostra avaliacao no site — a home, /depoimentos, o carrossel das
 * paginas de servico e das landings — passa por aqui. Antes cada lugar tinha a
 * sua propria lista: a home lia um arquivo de codigo, /depoimentos tinha
 * quatro escritas na mao dentro da pagina, e so o carrossel falava com o
 * Google. Dava para a mesma casa mostrar depoimento diferente em cada pagina.
 *
 * Regra do cliente: so aparece avaliacao de 5 estrelas (NOTA_MINIMA). A nota
 * media e o total continuam sendo os numeros reais do Google, nao os da lista
 * filtrada — senao o site anunciaria uma media que nao existe.
 */

export const NOTA_MINIMA = 5

export type AvaliacaoGoogle = {
  id: string
  author: string
  rating: number
  text: string
  date: string
  relativeTime?: string
  profilePhoto?: string
  language?: string
  unidade?: string
}

export type ResumoAvaliacoes = {
  avaliacoes: AvaliacaoGoogle[]
  /** Nota media real do Google, ponderada pelo numero de avaliacoes de cada casa. */
  notaMedia: number
  /** Total real de avaliacoes no Google, somando as tres casas. */
  total: number
  /** 'google' = veio da API agora. 'arquivo' = as avaliacoes reais guardadas no repositorio. */
  origem: 'google' | 'arquivo'
  /**
   * Linha de contagem pronta para a tela. Sai daqui, e nao de cada
   * componente, porque so aqui se sabe se o numero e o total real do Google
   * ou apenas quantas avaliacoes foram copiadas para o repositorio — no
   * segundo caso o site nao anuncia numero nenhum, para nao afirmar um total
   * que nao conferimos.
   */
  rotuloContagem: string
}

/**
 * De onde saem os Place IDs do Google.
 *
 * Ordem: primeiro o que estiver escrito no Studio, em cada unidade (campo
 * "Google Place ID"); depois as variaveis de ambiente, para o caso de alguem
 * preferir configurar por la. Sem nenhum dos dois, devolve lista vazia.
 */
export async function placeIdsDasUnidades(): Promise<string[]> {
  const ids: string[] = []

  if (client) {
    try {
      const doCms: Array<string | null> = await client.fetch(
        '*[_type=="unit" && defined(googlePlaceId)].googlePlaceId'
      )
      for (const id of doCms || []) if (id) ids.push(id)
    } catch {
      // CMS fora do ar nao pode derrubar a pagina inteira: seguimos para as
      // variaveis de ambiente.
    }
  }

  const doAmbiente = [
    process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID,
    process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID_MOINHOS_LUCIANA,
    process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID_MOINHOS_BARAO,
    process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID_PASSO_DAREIA,
  ]
  for (const id of doAmbiente) if (id && id.trim()) ids.push(id.trim())

  return [...new Set(ids)]
}

/**
 * As avaliacoes reais que ja estavam guardadas em lib/testimonials-data.ts.
 *
 * Foram copiadas a mao do Google e todas sao 5 estrelas. Servem de reserva
 * para quando a chave do Google nao estiver configurada ou o Google nao
 * responder: melhor mostrar avaliacao real congelada do que caixa vazia.
 */
export function avaliacoesDoArquivo(): ResumoAvaliacoes {
  const avaliacoes: AvaliacaoGoogle[] = TESTIMONIALS.filter(
    (t) => t.rating >= NOTA_MINIMA
  ).map((t) => ({
    id: `arquivo-${t.id}`,
    author: t.author,
    rating: t.rating,
    text: t.text,
    date: '',
  }))

  return {
    avaliacoes,
    notaMedia: 5,
    total: avaliacoes.length,
    origem: 'arquivo',
    rotuloContagem: '· avaliações no Google',
  }
}

type RespostaDoGoogle = {
  result?: {
    name?: string
    rating?: number
    user_ratings_total?: number
    reviews?: Array<{
      author_name: string
      rating: number
      text: string
      time: number
      relative_time_description?: string
      profile_photo_url?: string
      language?: string
    }>
  }
  status: string
}

/**
 * Busca as avaliacoes no Google e devolve so as de 5 estrelas.
 *
 * Devolve `null` quando nao da para perguntar (sem chave, sem Place ID) ou
 * quando o Google nao respondeu nada util — assim quem chama decide se cai na
 * reserva ou se some com a secao.
 */
export async function buscarAvaliacoesDoGoogle(
  placeIdsPedidos?: string[]
): Promise<ResumoAvaliacoes | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) return null

  const placeIds =
    placeIdsPedidos && placeIdsPedidos.length > 0
      ? placeIdsPedidos
      : await placeIdsDasUnidades()
  if (placeIds.length === 0) return null

  const porCasa = await Promise.all(
    placeIds.map(async (placeId) => {
      const url = new URL('https://maps.googleapis.com/maps/api/place/details/json')
      url.searchParams.set('place_id', placeId)
      url.searchParams.set('fields', 'name,rating,user_ratings_total,reviews')
      url.searchParams.set('key', apiKey)
      url.searchParams.set('language', 'pt-BR')

      try {
        const resposta = await fetch(url.toString(), {
          headers: { Accept: 'application/json' },
          next: { revalidate: 3600 },
        })
        if (!resposta.ok) {
          console.error(`Google Places respondeu ${resposta.status} para ${placeId}`)
          return null
        }
        const corpo: RespostaDoGoogle = await resposta.json()
        if (corpo.status !== 'OK' || !corpo.result) {
          console.error(`Google Places status ${corpo.status} para ${placeId}`)
          return null
        }
        return corpo.result
      } catch (erro) {
        console.error(`Google Places falhou para ${placeId}:`, erro)
        return null
      }
    })
  )

  const casas = porCasa.filter(Boolean) as NonNullable<RespostaDoGoogle['result']>[]
  if (casas.length === 0) return null

  const avaliacoes: AvaliacaoGoogle[] = casas
    .flatMap((casa) =>
      (casa.reviews || [])
        // Aqui mora o pedido do cliente: so 5 estrelas chegam ao site.
        .filter((review) => review.rating >= NOTA_MINIMA)
        // Avaliacao com nota e sem texto vira cartao vazio no carrossel.
        .filter((review) => (review.text || '').trim().length > 0)
        .map((review) => ({
          id: `${review.time}-${review.author_name.replace(/\s/g, '')}`,
          author: review.author_name,
          rating: review.rating,
          text: review.text.trim(),
          date: new Date(review.time * 1000).toISOString(),
          relativeTime: review.relative_time_description,
          profilePhoto: review.profile_photo_url,
          language: review.language,
          unidade: casa.name,
        }))
    )
    // Mais recentes primeiro: era essa a queixa do cliente, que a vitrine
    // parecia sempre a mesma.
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  if (avaliacoes.length === 0) return null

  // Media e total sao os numeros reais do Google, de todas as notas — nao so
  // das 5 estrelas que ficaram na tela.
  const total = casas.reduce((soma, c) => soma + (c.user_ratings_total || 0), 0)
  const somaNotas = casas.reduce(
    (soma, c) => soma + (c.rating || 0) * (c.user_ratings_total || 0),
    0
  )

  return {
    avaliacoes,
    notaMedia: total > 0 ? Number((somaNotas / total).toFixed(1)) : 0,
    total,
    origem: 'google',
    rotuloContagem: total > 0 ? `· ${total} avaliações no Google` : '· avaliações no Google',
  }
}

/**
 * O que as paginas usam: tenta o Google, cai na lista real do repositorio se
 * o Google nao vier. Nunca devolve vazio, e nunca devolve nota abaixo de 5.
 */
export async function avaliacoesParaExibir(
  placeIdsPedidos?: string[]
): Promise<ResumoAvaliacoes> {
  return (await buscarAvaliacoesDoGoogle(placeIdsPedidos)) ?? avaliacoesDoArquivo()
}
