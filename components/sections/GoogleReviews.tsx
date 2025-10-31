'use client'

import { Star, Loader2, AlertCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import useSWR from 'swr'

interface Review {
  id: string
  author: string
  rating: number
  text: string
  date: string
  relativeTime?: string
  profilePhoto?: string
  language?: string
}

interface ReviewsData {
  placeName?: string
  averageRating: number
  totalReviews: number
  reviews: Review[]
  source: 'google' | 'mock'
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface GoogleReviewsProps {
  placeId?: string
  className?: string
}

export default function GoogleReviews({ placeId, className = '' }: GoogleReviewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Configuração do Place ID
  // Se não fornecido via props, usa o ID da unidade principal (Moinhos de Vento)
  // Este valor deve ser configurado pela contratante
  const googlePlaceId = placeId || process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || ''

  // Fetch reviews from API
  const { data, error, isLoading } = useSWR<ReviewsData>(
    googlePlaceId ? `/api/reviews?placeId=${googlePlaceId}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 3600000, // 1 hora
    }
  )

  // Reviews data with fallback
  const reviews = data?.reviews || []
  const averageRating = data?.averageRating || 0
  const totalReviews = data?.totalReviews || 0
  const placeName = data?.placeName

  const nextReview = () => {
    if (reviews.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }
  }

  const prevReview = () => {
    if (reviews.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    }
  }

  // Reset index when reviews change
  useEffect(() => {
    if (currentIndex >= reviews.length) {
      setCurrentIndex(0)
    }
  }, [reviews.length, currentIndex])

  const currentReview = reviews[currentIndex]

  // Loading state
  if (isLoading) {
    return (
      <section className={`py-20 bg-gradient-to-b from-white to-gray-50 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin mx-auto text-[#2C3E6B]" />
            <p className="mt-4 text-gray-600">Carregando avaliações do Google...</p>
          </div>
        </div>
      </section>
    )
  }

  // Error state
  if (error || !data) {
    return (
      <section className={`py-20 bg-gradient-to-b from-white to-gray-50 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <AlertCircle className="w-12 h-12 mx-auto text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-[#2C3E6B] mb-2">
              Não foi possível carregar as avaliações
            </h3>
            <p className="text-gray-600 mb-4">
              Verifique se o Google Place ID está configurado corretamente nas variáveis de ambiente.
            </p>
            <p className="text-sm text-gray-500">
              {data?.source === 'mock' && '(Exibindo dados de demonstração)'}
            </p>
          </div>
        </div>
      </section>
    )
  }

  // No reviews available
  if (reviews.length === 0) {
    return (
      <section className={`py-20 bg-gradient-to-b from-white to-gray-50 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#2C3E6B]">Nenhuma avaliação disponível</h3>
            <p className="text-gray-600 mt-2">Seja o primeiro a avaliar!</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-20 bg-gradient-to-b from-white to-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#D4A853] mb-3">
            Avaliações
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E6B] mb-4">
            Nossas Avaliações
          </h2>
          {placeName && (
            <p className="text-gray-600 mb-4">{placeName}</p>
          )}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= Math.floor(averageRating)
                      ? 'fill-[#D4A853] text-[#D4A853]'
                      : 'text-gray-300'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-[#2C3E6B]">{averageRating.toFixed(1)}</span>
            <span className="text-gray-500">({totalReviews} avaliações)</span>
          </div>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-gray-600 hover:text-[#2C3E6B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2C3E6B]/50 rounded-lg px-3 py-1"
            aria-label="Ver mais avaliações no Google Maps"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Avaliações do Google
          </a>
          {data?.source === 'mock' && (
            <p className="text-xs text-orange-600 mt-2">
              ⚠️ Dados de demonstração (Configure GOOGLE_PLACES_API_KEY para dados reais)
            </p>
          )}
        </div>

        {/* Carrossel de reviews */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            {/* Review content */}
            <div className="mb-6">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= currentReview.rating
                        ? 'fill-[#D4A853] text-[#D4A853]'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                "{currentReview.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#4A9B9F] to-[#2C3E6B] text-white font-bold text-lg">
                  {currentReview.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#2C3E6B]">{currentReview.author}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(currentReview.date).toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={prevReview}
                disabled={reviews.length <= 1}
                className="p-3 rounded-full border-2 border-[#2C3E6B] text-[#2C3E6B] hover:bg-[#2C3E6B] hover:text-white transition-all focus:outline-none focus:ring-4 focus:ring-[#2C3E6B]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Avaliação anterior"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="flex items-center gap-2" role="tablist" aria-label="Selecionar avaliação">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#2C3E6B]/50 ${
                      index === currentIndex ? 'w-8 bg-[#2C3E6B]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    role="tab"
                    aria-label={`Ir para avaliação ${index + 1}`}
                    aria-selected={index === currentIndex}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                disabled={reviews.length <= 1}
                className="p-3 rounded-full border-2 border-[#2C3E6B] text-[#2C3E6B] hover:bg-[#2C3E6B] hover:text-white transition-all focus:outline-none focus:ring-4 focus:ring-[#2C3E6B]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Próxima avaliação"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
