'use client'

import Image from 'next/image'
import Link from 'next/link'

interface SectionCollageProps {
  title: string
  description: string
  cta?: {
    label: string
    href: string
  }
  images: Array<{
    src: string
    alt: string
  }>
  reverse?: boolean
}

/**
 * SectionCollage - Layout de colagem de imagens + texto
 *
 * Layout responsivo:
 * - Mobile: Stack vertical (texto acima, colagem abaixo em 2x2)
 * - Desktop: Grid 12 colunas (colagem col-span-7, texto col-span-5)
 *
 * Decisões de design:
 * - Imagem principal (primeira) ocupa espaço maior e posição destacada
 * - Imagens auxiliares têm offsets sutis (translate) para criar profundidade
 * - z-index em camadas para sobreposição orgânica
 * - Hover effects suaves em todas as imagens
 * - Sem cores/tipografia específicas - herda do tema
 */
export default function SectionCollage({
  title,
  description,
  cta,
  images,
  reverse = false,
}: SectionCollageProps) {
  // Preencher com imagens vazias se necessário (mínimo 4)
  const normalizedImages = [...images]
  while (normalizedImages.length < 4) {
    normalizedImages.push({
      src: '/placeholder.jpg',
      alt: 'Imagem placeholder',
    })
  }

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div
          className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
            reverse ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Bloco de Texto */}
          <div
            className={`${
              reverse ? 'md:col-span-5 md:col-start-1' : 'md:col-span-5 md:col-start-8'
            } space-y-6 ${reverse ? 'md:order-1' : 'md:order-2'}`}
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {title}
              </h2>
              <p className="text-lg md:text-xl leading-relaxed opacity-90">
                {description}
              </p>
            </div>

            {cta && (
              <div className="pt-2">
                <Link
                  href={cta.href}
                  className="section-collage-cta inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-offset-2"
                >
                  {cta.label}
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          {/* Colagem de Imagens */}
          <div
            className={`${
              reverse ? 'md:col-span-7 md:col-start-6' : 'md:col-span-7 md:col-start-1'
            } ${reverse ? 'md:order-2' : 'md:order-1'}`}
          >
            {/* Mobile: Grid 2x2 */}
            <div className="grid grid-cols-2 gap-4 md:hidden">
              {normalizedImages.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl shadow-lg ${
                    index === 0 ? 'aspect-[4/3]' : 'aspect-square'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>

            {/* Desktop: Colagem orgânica com offsets */}
            <div className="hidden md:grid md:grid-cols-2 gap-4 relative">
              {/* Imagem Principal - Maior e destacada */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[3/4] z-10 -translate-y-4">
                <Image
                  src={normalizedImages[0].src}
                  alt={normalizedImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 40vw, 30vw"
                />
              </div>

              {/* Grid de imagens auxiliares */}
              <div className="flex flex-col gap-4">
                {/* Imagem 2 - Superior direita com leve offset */}
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-video translate-x-2 z-20">
                  <Image
                    src={normalizedImages[1].src}
                    alt={normalizedImages[1].alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 30vw, 25vw"
                  />
                </div>

                {/* Imagens 3 e 4 - Grid inferior com offsets */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-square -translate-y-2 z-10">
                    <Image
                      src={normalizedImages[2].src}
                      alt={normalizedImages[2].alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 1024px) 20vw, 15vw"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-square translate-y-2 translate-x-2 z-20">
                    <Image
                      src={normalizedImages[3].src}
                      alt={normalizedImages[3].alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 1024px) 20vw, 15vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
