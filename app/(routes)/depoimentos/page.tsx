import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GoogleReviews from '@/components/sections/GoogleReviews'
import { Star, Quote, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Depoimentos de Famílias - Avaliações e Relatos Reais | Novo Lar Geriatria',
  description: 'Leia depoimentos reais de famílias que confiam no cuidado da Novo Lar Geriatria. Histórias de carinho, profissionalismo e dedicação no atendimento aos idosos em Porto Alegre.',
  keywords: ['depoimentos novo lar', 'avaliações residencial geriátrico', 'relatos famílias', 'testemunhos casa de repouso', 'satisfação clientes porto alegre'],
  openGraph: {
    title: 'Depoimentos de Famílias - Avaliações e Relatos Reais | Novo Lar Geriatria',
    description: 'Leia depoimentos reais de famílias que confiam no cuidado da Novo Lar Geriatria. Histórias de carinho e profissionalismo.',
    url: 'https://novolargeriatria.com.br/depoimentos',
    type: 'website',
    images: [
      {
        url: 'https://novolargeriatria.com.br/Novo-Lar-Logo-7.png',
        width: 1200,
        height: 630,
        alt: 'Depoimentos Novo Lar Geriatria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Depoimentos de Famílias | Novo Lar Geriatria',
    description: 'Leia relatos reais de famílias que confiam no nosso cuidado.',
    images: ['https://novolargeriatria.com.br/Novo-Lar-Logo-7.png'],
  },
  alternates: {
    canonical: 'https://novolargeriatria.com.br/depoimentos',
  },
}

const TESTIMONIALS = [
  {
    name: 'Jacqueline',
    rating: 5,
    text: 'Aproveito para agradecer-lhe todo o atendimento prestado durante a breve estada dele com vocês, e um agradecimento especial à enfermagem, atendentes e funcionárias da clinica, que tanto carinho tiveram com meu pai. Nossa família é muito grata a todos vocês.',
    highlight: true
  },
  {
    name: 'Erli Lima',
    rating: 5,
    text: 'Excelente Casa de repouso para Idosos em Porto Alegre!',
    highlight: true
  },
  {
    name: 'Leonardo Dutra',
    rating: 5,
    text: 'Casa com excelente estrutura e ótimos profissionais para cuidá-los!',
    highlight: false
  },
  {
    name: 'Matheus Giovani',
    rating: 5,
    text: 'Excelente atendimento. Muito cuidado e carinho dedicado aos idosos. Lugar lindo e higienizado.',
    highlight: false
  },
]

export default function TestimonialsPage() {
  const featuredTestimonials = TESTIMONIALS.filter(t => t.highlight)
  const regularTestimonials = TESTIMONIALS.filter(t => !t.highlight)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2C3E6B] via-[#3d5285] to-[#2E7B7F] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[#8B6914]" />
              <span className="text-sm font-semibold">Histórias reais de famílias satisfeitas</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Depoimentos
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Veja o que dizem as famílias que confiam em nosso trabalho
            </p>

            <div className="mt-8 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} className="text-[#8B6914] fill-[#8B6914]" />
              ))}
              <span className="ml-3 text-2xl font-bold">5.0</span>
            </div>
            <p className="mt-2 text-white/80">Avaliação média de nossos residentes e familiares</p>
          </div>
        </div>
      </section>

      {/* Depoimentos em Destaque */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E6B] mb-4">
              Depoimentos em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Histórias que nos motivam a continuar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-[#2E7B7F]/5 to-[#2C3E6B]/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-[#2E7B7F]/20 relative"
              >
                <Quote className="absolute top-6 right-6 text-[#2E7B7F] opacity-10 group-hover:opacity-20 transition-opacity" size={64} />

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={i < testimonial.rating ? 'text-[#8B6914] fill-[#8B6914]' : 'text-gray-300'}
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="border-t-2 border-[#2E7B7F]/20 pt-4">
                  <p className="font-bold text-[#2C3E6B] text-lg">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outros Depoimentos */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E6B] mb-4">
              Mais Depoimentos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Centenas de famílias satisfeitas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 relative"
              >
                <Quote className="absolute top-4 right-4 text-[#2E7B7F] opacity-10" size={40} />

                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < testimonial.rating ? 'text-[#8B6914] fill-[#8B6914]' : 'text-gray-300'}
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 italic leading-relaxed text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="border-t border-gray-200 pt-3">
                  <p className="font-bold text-[#2C3E6B]">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações do Google */}
      <GoogleReviews />

      <Footer />
    </div>
  )
}




