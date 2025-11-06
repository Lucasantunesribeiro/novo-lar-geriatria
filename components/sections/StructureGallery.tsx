'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const photos = [
  { src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg', alt: 'Área externa - Moinhos de Vento' },
  { src: "/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg", alt: "Recepção - Passo d'Areia" },
  { src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg', alt: 'Área comum - Moinhos de Vento' },
  { src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg', alt: 'Sala de estar' },
]

export default function StructureGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const scrollLeft = container.scrollLeft
    const itemWidth = container.scrollWidth / photos.length
    const index = Math.round(scrollLeft / itemWidth)

    setActiveIndex(index)
  }
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      {/* Fundo azul - Mobile: 5% top/bottom, 3% left/right | Desktop: 18% */}
      <div className="absolute top-[5%] bottom-[5%] left-[3%] right-[3%] lg:top-[18%] lg:bottom-[18%] lg:left-[12%] lg:right-[12%] bg-[#2C3E6B] rounded-[40px] lg:rounded-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-12">

          {/* Desktop: Grid 2 colunas de fotos */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="25vw"
                />
              </div>
              <div className="relative h-[180px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={photos[1].src}
                  alt={photos[1].alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="25vw"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-[170px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={photos[2].src}
                  alt={photos[2].alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="25vw"
                />
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={photos[3].src}
                  alt={photos[3].alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="25vw"
                />
              </div>
            </div>
          </div>

          {/* Mobile: Carrossel melhorado */}
          <div className="lg:hidden">
            {/* Texto primeiro */}
            <div className="text-white text-center mb-6">
              <h2 className="text-3xl font-bold tracking-tight mb-3">
                Veja Nossa Estrutura
              </h2>
              <p className="text-sm leading-relaxed opacity-90 px-2">
                Ambientes amplos, acolhedores e preparados para promover conforto, segurança e qualidade de vida.
              </p>
            </div>

            {/* Carrossel com scroll suave */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
                style={{ scrollBehavior: 'smooth' }}
              >
                <div className="flex gap-3">
                  {photos.map((photo, index) => (
                    <div key={index} className="flex-none w-[90vw] max-w-[400px] snap-center first:ml-0 last:mr-0">
                      <div className="relative h-[280px] rounded-xl overflow-hidden shadow-2xl">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover"
                          sizes="90vw"
                          priority={index === 0}
                        />
                      </div>
                      <p className="text-white text-xs text-center mt-2 opacity-80">{photo.alt}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Indicadores interativos */}
              <div className="flex justify-center gap-2 mt-3 mb-5">
                {photos.map((_, index) => (
                  <div
                    key={index}
                    className={`rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? 'w-6 h-2 bg-white'
                        : 'w-2 h-2 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Botão */}
            <Link
              href="/fotos"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-[#A67C2F] text-[#2C3E6B] font-semibold text-base hover:bg-[#d4a84f] transition-all duration-300 w-full shadow-lg"
            >
              Conheça as unidades
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Desktop: Texto */}
          <div className="hidden lg:flex text-white flex-col justify-center px-8">
            <h2 className="text-5xl font-bold tracking-tight mb-6">
              Veja Nossa Estrutura
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Ambientes amplos, acolhedores e preparados para promover conforto, segurança e qualidade de vida dos nossos residentes.
            </p>
            <Link
              href="/fotos"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-[#A67C2F] text-[#2C3E6B] font-semibold text-lg hover:bg-[#d4a84f] transition-all duration-300 w-fit"
            >
              Conheça as unidades
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}


