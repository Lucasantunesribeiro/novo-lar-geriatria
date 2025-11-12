'use client'

import { useState } from 'react'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import GoogleReviews from '@/components/sections/GoogleReviews'
import Lightbox from '@/components/ui/Lightbox'
import { COMPANY_CONTACT } from '@/lib/site-data'
import Image from 'next/image'
import Link from 'next/link'
import { Users, ZoomIn, Phone } from 'lucide-react'

const GALLERY_SECTIONS = [
  {
    title: 'Moinhos de Vento · Rua Luciana de Abreu, 151',
    subtitle: 'Ambientes acolhedores no coração do bairro',
    images: [
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/3.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/5.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/6.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/7.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/8.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/9.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/10.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/11.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/13.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/14.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/15.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/16.jpeg',
    ],
  },
  {
    title: 'Moinhos de Vento · R. Barão de Santo Ângelo, 406',
    subtitle: 'Conforto e modernidade em cada andar',
    images: [
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/2.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/3.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/4.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/5.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/6.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/7.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/8.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/9.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/10.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/11.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/12.jpeg',
    ],
  },
  {
    title: "Passo d'Areia · R. Brigadeiro Oliveira Neri, 175",
    subtitle: 'Espaços amplos em região estratégica da cidade',
    images: [
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/2.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/3.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/4.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/5.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/6.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/7.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/8.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/12.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/13.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/14.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/15.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/16.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/17.jpeg',
    ],
  },
]

export default function FotosPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (sectionIndex: number, imageIndex: number) => {
    setCurrentSection(sectionIndex)
    setCurrentImageIndex(imageIndex)
    setLightboxOpen(true)
  }

  const handleNext = () => {
    const currentSectionImages = GALLERY_SECTIONS[currentSection].images
    if (currentImageIndex < currentSectionImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      {/* Subheader */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-12 text-white">
        <Image
          src="/fotos-sobre/sobre-1.jpg"
          alt="Galeria de fotos - Novo Lar Geriatria"
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E6B]/95 via-[#1d3364]/90 to-[#2E7B7F]/85"></div>
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-wider text-white/80">
              Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Galeria de Fotos
            </h1>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm">
                <li>
                  <Link href="/" className="text-white/80 transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li className="text-white/50">/</li>
                <li>
                  <Link href="/sobre" className="text-white/80 transition hover:text-white">
                    Sobre
                  </Link>
                </li>
                <li className="text-white/50">/</li>
                <li className="font-medium text-white" aria-current="page">
                  Galeria de Fotos
                </li>
              </ol>
            </nav>

            <div className="mt-6 h-px w-24 bg-[#8B6914]"></div>
          </div>
        </div>
      </section>

      {/* Galeria completa */}
      <section className="bg-[#f8fafc] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg text-gray-600">
              Explore nossos ambientes e conheça a estrutura completa das três unidades
            </p>
          </div>

          <div className="mt-12 space-y-16">
            {GALLERY_SECTIONS.map((section) => (
              <div key={section.title} className="space-y-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#2C3E6B]">{section.title}</h3>
                    <p className="text-sm text-gray-600">{section.subtitle}</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {section.images.map((image, imageIndex) => (
                    <button
                      key={image}
                      onClick={() => openLightbox(GALLERY_SECTIONS.indexOf(section), imageIndex)}
                      className="group relative overflow-hidden rounded-xl border border-white/60 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Image
                        src={image}
                        alt={`${section.title} - Novo Lar Geriatria`}
                        width={800}
                        height={600}
                        className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      />
                      {/* Overlay com ícone de zoom */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                        <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#2C3E6B]">
                          <ZoomIn className="h-4 w-4" />
                          Ampliar
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações do Google */}
      <GoogleReviews />

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={GALLERY_SECTIONS[currentSection].images}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrevious={handlePrevious}
          title={GALLERY_SECTIONS[currentSection].title}
        />
      )}

      <FooterWrapper />
    </div>
  )
}




