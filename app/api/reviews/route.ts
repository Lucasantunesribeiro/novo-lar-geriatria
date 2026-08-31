import { NextRequest, NextResponse } from 'next/server'
import { placeIdsDasUnidades } from '@/lib/avaliacoes'

// `edge` nao foi mantido porque agora a rota tambem le o Sanity para
// descobrir os Place IDs das unidades.
export const revalidate = 3600 // Cache por 1 hora

interface GoogleReview {
  author_name: string
  author_url?: string
  language: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

interface GooglePlacesResponse {
  result: {
    name: string
    rating: number
    user_ratings_total: number
    reviews: GoogleReview[]
  }
  status: string
}

/**
 * API Route para obter avaliações do Google Places API
 *
 * Query params:
 * - placeId: Google Place ID (obrigatório)
 *
 * Variáveis de ambiente:
 * - GOOGLE_PLACES_API_KEY: API Key do Google Places (configurada pela contratante)
 *
 * Exemplo de uso:
 * GET /api/reviews?placeId=ChIJ...
 *
 * Resposta:
 * {
 *   averageRating: 4.9,
 *   totalReviews: 127,
 *   reviews: [...]
 * }
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    // Sem placeId na URL, a rota descobre sozinha quais sao as casas — assim
    // o carrossel do site nao precisa saber de Place ID nenhum, e trocar uma
    // unidade no Studio ja muda o que aparece.
    const pedido = searchParams.get('placeId')
    const placeIds = pedido ? [pedido] : await placeIdsDasUnidades()

    if (placeIds.length === 0) {
      // Em desenvolvimento devolvemos exemplos, para dar para ver e testar o
      // carrossel sem depender da chave do Google. Em producao, nao: melhor a
      // secao sumir do que mostrar depoimento inventado.
      if (process.env.NODE_ENV === 'development') {
        console.warn('⚠️ Sem Place ID: devolvendo avaliações de exemplo (só em desenvolvimento)')
        return NextResponse.json(getMockReviews())
      }

      return NextResponse.json(
        {
          error: 'Sem Place ID',
          message:
            'Nenhuma unidade tem "Google Place ID" preenchido no Studio, e nao ha Place ID nas variaveis de ambiente.',
          reviews: [],
        },
        { status: 404 }
      )
    }

    // Validação da API Key
    const apiKey = process.env.GOOGLE_PLACES_API_KEY

    if (!apiKey) {
      console.error('❌ GOOGLE_PLACES_API_KEY não configurada no ambiente')

      // Em desenvolvimento, retorna dados mockados
      if (process.env.NODE_ENV === 'development') {
        console.warn('⚠️ Retornando dados mockados em desenvolvimento')
        return NextResponse.json(getMockReviews())
      }

      return NextResponse.json(
        {
          error: 'Configuração inválida',
          message: 'API Key do Google Places não configurada. Entre em contato com o suporte.',
        },
        { status: 500 }
      )
    }

    // Uma consulta por casa. Junta tudo numa lista so, porque para a familia
    // que le o site interessa a opiniao sobre a Novo Lar, nao sobre um CNPJ.
    const porCasa = await Promise.all(
      placeIds.map(async (placeId) => {
        const url = new URL('https://maps.googleapis.com/maps/api/place/details/json')
        url.searchParams.set('place_id', placeId)
        url.searchParams.set('fields', 'name,rating,user_ratings_total,reviews')
        url.searchParams.set('key', apiKey)
        url.searchParams.set('language', 'pt-BR')

        const response = await fetch(url.toString(), {
          method: 'GET',
          headers: { Accept: 'application/json' },
          next: { revalidate: 3600 },
        })

        if (!response.ok) {
          console.error(`❌ Google Places respondeu ${response.status} para ${placeId}`)
          return null
        }

        const data: GooglePlacesResponse = await response.json()

        if (data.status !== 'OK') {
          console.error('❌ Google Places API status:', data.status, 'para', placeId)
          return null
        }

        return data.result
      })
    )

    const casas = porCasa.filter(Boolean) as GooglePlacesResponse['result'][]

    if (casas.length === 0) {
      return NextResponse.json(
        {
          error: 'Erro ao buscar avaliações',
          message:
            'O Google nao devolveu avaliacao para nenhuma unidade. Confira a chave e os Place IDs.',
          reviews: [],
        },
        { status: 502 }
      )
    }

    const formattedReviews = casas
      .flatMap((casa) =>
        (casa.reviews || []).map((review) => ({
          id: `${review.time}-${review.author_name.replace(/\s/g, '')}`,
          author: review.author_name,
          rating: review.rating,
          text: review.text,
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

    const totalReviews = casas.reduce((soma, c) => soma + (c.user_ratings_total || 0), 0)
    // Media ponderada pelo numero de avaliacoes de cada casa.
    const somaNotas = casas.reduce((soma, c) => soma + (c.rating || 0) * (c.user_ratings_total || 0), 0)
    const averageRating = totalReviews > 0 ? Number((somaNotas / totalReviews).toFixed(1)) : 0

    console.log(
      `✅ Reviews obtidos do Google: ${formattedReviews.length} avaliações de ${casas.length} unidade(s)`
    )

    return NextResponse.json({
      placeName: casas.map((c) => c.name).join(' · '),
      averageRating,
      totalReviews,
      reviews: formattedReviews,
      source: 'google',
      cachedAt: new Date().toISOString(),
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    })

  } catch (error) {
    console.error('❌ Erro ao buscar reviews do Google:', error)

    return NextResponse.json(
      {
        error: 'Erro interno',
        message: 'Erro ao buscar avaliações. Tente novamente mais tarde.',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined,
      },
      { status: 500 }
    )
  }
}

/**
 * Dados mockados para desenvolvimento
 */
function getMockReviews() {
  return {
    placeName: 'Novo Lar Geriatria - Moinhos de Vento',
    averageRating: 4.9,
    totalReviews: 127,
    reviews: [
      {
        id: '1',
        author: 'Maria Silva',
        rating: 5,
        text: 'Excelente atendimento e estrutura impecável. Minha mãe está muito bem cuidada e feliz. A equipe é atenciosa e carinhosa.',
        date: '2025-01-15T00:00:00.000Z',
        relativeTime: 'há 2 semanas',
        language: 'pt',
      },
      {
        id: '2',
        author: 'João Santos',
        rating: 5,
        text: 'Ambiente acolhedor e profissionais muito qualificados. A nutrição é excelente e as atividades diárias são muito bem planejadas.',
        date: '2025-01-10T00:00:00.000Z',
        relativeTime: 'há 3 semanas',
        language: 'pt',
      },
      {
        id: '3',
        author: 'Ana Paula Rodrigues',
        rating: 5,
        text: 'Meu pai está na unidade há 6 meses e a diferença na qualidade de vida dele é notável. Estrutura moderna e equipe muito dedicada. Recomendo de olhos fechados!',
        date: '2025-01-05T00:00:00.000Z',
        relativeTime: 'há 1 mês',
        language: 'pt',
      },
      {
        id: '4',
        author: 'Carlos Oliveira',
        rating: 5,
        text: 'Fizemos a escolha certa ao escolher a Novo Lar. A localização é privilegiada e a estrutura é moderna. Nossa família está muito satisfeita.',
        date: '2024-12-28T00:00:00.000Z',
        relativeTime: 'há 1 mês',
        language: 'pt',
      },
      {
        id: '5',
        author: 'Fernanda Costa',
        rating: 5,
        text: 'Ambiente familiar, equipe qualificada e muito carinho no cuidado. Minha avó se adaptou super bem e fez novos amigos.',
        date: '2024-12-20T00:00:00.000Z',
        relativeTime: 'há 1 mês',
        language: 'pt',
      },
      {
        id: '6',
        author: 'Roberto Mendes',
        rating: 4,
        text: 'Ótima estrutura e profissionais dedicados. As instalações são limpas e bem mantidas. Recomendo!',
        date: '2024-12-15T00:00:00.000Z',
        relativeTime: 'há 2 meses',
        language: 'pt',
      },
    ],
    source: 'mock',
    cachedAt: new Date().toISOString(),
  }
}
