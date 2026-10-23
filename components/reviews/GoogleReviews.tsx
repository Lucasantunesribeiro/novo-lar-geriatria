import { avaliacoesParaExibir } from '@/lib/avaliacoes'
import ReviewsCarousel from './ReviewsCarousel'

interface GoogleReviewsProps {
  placeId?: string
  className?: string
  titulo?: string
}

export default async function GoogleReviews({ placeId, ...props }: GoogleReviewsProps) {
  const resumo = await avaliacoesParaExibir(placeId ? [placeId] : undefined)

  return (
    <ReviewsCarousel
      {...props}
      dados={{
        averageRating: resumo.notaMedia,
        totalReviews: resumo.total,
        reviews: resumo.avaliacoes,
        source: resumo.origem,
      }}
    />
  )
}
