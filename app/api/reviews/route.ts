import { NextRequest, NextResponse } from 'next/server'

import { avaliacoesParaExibir } from '@/lib/avaliacoes'

// `edge` nao foi mantido porque a rota tambem le o Sanity para descobrir os
// Place IDs das unidades.
export const revalidate = 3600 // Cache por 1 hora

/**
 * Avaliacoes do Google para o carrossel do site.
 *
 * GET /api/reviews              -> as tres casas juntas
 * GET /api/reviews?placeId=Ch.. -> so uma casa
 *
 * Quem faz o trabalho e `lib/avaliacoes.ts`, que e a mesma fonte usada pela
 * home e por /depoimentos no servidor. Aqui so existe o que e proprio de uma
 * rota HTTP: ler o parametro e devolver JSON.
 *
 * Duas regras que vem de la e valem para o site inteiro:
 *   - so avaliacao de 5 estrelas aparece (pedido do cliente);
 *   - a nota media e o total sao os numeros reais do Google, de todas as
 *     notas, e nao a media das que sobraram na tela.
 *
 * Nao existe mais resposta de erro nem lista vazia: sem chave do Google, a
 * rota devolve as avaliacoes reais guardadas em lib/testimonials-data.ts. O
 * campo `source` diz de onde veio ('google' ou 'arquivo'). Antes, sem chave, a
 * secao sumia da pagina — e era isso que estava acontecendo em producao.
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const pedido = searchParams.get('placeId')

    const resumo = await avaliacoesParaExibir(pedido ? [pedido] : undefined)

    return NextResponse.json(
      {
        averageRating: resumo.notaMedia,
        totalReviews: resumo.total,
        reviews: resumo.avaliacoes,
        source: resumo.origem,
        cachedAt: new Date().toISOString(),
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
        },
      }
    )
  } catch (error) {
    console.error('Erro ao buscar avaliações:', error)

    return NextResponse.json(
      {
        error: 'Erro interno',
        message: 'Erro ao buscar avaliações. Tente novamente mais tarde.',
        reviews: [],
      },
      { status: 500 }
    )
  }
}
