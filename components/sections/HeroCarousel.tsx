'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import ContactForm from '@/components/forms/ContactForm'

const HERO_IMAGES = [
  {
    src: '/banner-home.jpg',
    alt: 'Residencial geriátrico em Porto Alegre - Ambiente acolhedor e familiar',
  },
  {
    src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg',
    alt: 'Casa de repouso Moinhos de Vento - Área externa',
  },
  {
    src: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
    alt: 'Residencial para idosos Passo d\'Areia - Recepção',
  },
  {
    src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
    alt: 'Casa geriátrica Moinhos de Vento - Área de convivência',
  },
]

const UNITS = [
  {
    slug: 'moinhos-luciana-de-abreu',
    name: 'Moinhos de Vento · Rua Luciana de Abreu, 151',
  },
  {
    slug: 'moinhos-barao-de-santo-angelo',
    name: 'Moinhos de Vento · Rua Barão de Santo Ângelo, 406',
  },
  {
    slug: 'passo-dareia',
    name: "Passo d'Areia · Rua Brigadeiro Oliveira Neri, 175",
  },
]


export default function HeroCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden text-white">
      {/* Image Background - Otimizado para performance */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              quality={85}
              sizes="100vw"
              className="object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1836]/75 via-[#1b2d57]/60 to-[#2f4478]/35"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(255,255,255,0.18),_transparent_55%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(212,168,83,0.12),_transparent_45%)] mix-blend-screen"></div>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0c1836]/55 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative">
        <div className="container mx-auto px-4 py-20 sm:py-24 lg:py-30">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center xl:gap-14">
            {/* Left Content */}
            <div className="max-w-3xl space-y-8">
              <div className="space-y-5">
                <h1 className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl xl:text-6xl">
                  Residencial Geriátrico em Porto Alegre<br />
                  <span className="bg-gradient-to-r from-[#8B6914] to-[#E5C36F] bg-clip-text text-transparent">
                    Cuidado com carinho e acolhimento de verdade
                  </span>
                </h1>

                <p className="max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
                  Ambiente familiar, equipe multidisciplinar 24h e atenção personalizada para quem você ama.
                </p>
              </div>

              <div className="grid max-w-2xl gap-5 sm:grid-cols-3">
                {[
                  { value: '20+', label: 'Anos', sublabel: 'de experiência' },
                  { value: '3', label: 'Unidades', sublabel: 'em Porto Alegre' },
                  { value: '24/7', label: 'Atendimento', sublabel: 'humanizado' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/15 to-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-md transition-all duration-300 hover:border-[#8B6914]/40 hover:shadow-[#8B6914]/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B6914]/0 to-[#8B6914]/0 transition-all duration-300 group-hover:from-[#8B6914]/10 group-hover:to-transparent"></div>
                    <div className="relative">
                      <div className="text-4xl font-bold text-white">{item.value}</div>
                      <div className="mt-2 text-sm font-semibold text-white/90">{item.label}</div>
                      <div className="text-xs text-white/70">{item.sublabel}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="mx-auto w-full max-w-lg justify-self-end rounded-2xl border border-gray-200 bg-white p-7 shadow-lg md:p-9 lg:mx-0">
              <div className="mb-6 space-y-2">
                <h2 className="text-2xl font-bold text-[#1a2745]">Fale conosco</h2>
                <p className="text-sm text-gray-600">Retornamos em ate 1 hora util</p>
              </div>

              <ContactForm units={UNITS} />
            </div>
          </div>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full p-2 transition focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentImageIndex ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
            aria-current={index === currentImageIndex}
          >
            <span
              className={`block h-3 w-3 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            ></span>
            <span className="sr-only">Ir para imagem {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  )
}


