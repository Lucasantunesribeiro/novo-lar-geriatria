'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Lightbox from '@/components/ui/Lightbox'
import { COMPANY_CONTACT } from '@/lib/site-data'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sparkles,
  ArrowRight,
  HandHeart,
  Users,
  ZoomIn,
} from 'lucide-react'

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
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1b37] via-[#1d2f5f] to-[#4A9B9F] py-24 text-white">
        <Image
          src="/fotos-sobre/sobre-1.jpg"
          alt="Galeria de fotos - Novo Lar Geriatria"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1b37]/95 via-[#1d2f5f]/90 to-[#4A9B9F]/85"></div>
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>

        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                <Sparkles className="h-4 w-4 text-[#D4A853]" />
                Galeria de fotos
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Conheça nossos ambientes através de imagens
              </h1>
              <p className="mt-6 text-lg text-white/85 sm:text-xl">
                Explore a estrutura completa das três unidades da Novo Lar Geriatria em Porto Alegre.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#D4A853] px-8 py-4 text-lg font-semibold text-[#1a2745] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#c49943]"
                >
                  Agendar visita presencial
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
                >
                  <HandHeart className="h-5 w-5" />
                  Falar com especialista
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria completa */}
      <section className="bg-[#f8fafc] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#2C3E6B] sm:text-5xl">Galeria de fotos</h2>
            <p className="mt-4 text-lg text-gray-600">
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

      {/* CTA final */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] to-[#4A9B9F] py-20 text-white">
        <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-10"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Visite a Novo Lar Geriatria</h2>
            <p className="mt-4 text-lg text-white/85">
              Agende um horário para conhecer nossas casas e entender como podemos acolher quem você ama com excelência.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 rounded-xl bg-[#D4A853] px-8 py-4 text-lg font-semibold text-[#1a2745] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#c49943]"
              >
                Falar com a equipe
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                <Users className="h-5 w-5" />
                Conversar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

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

      <Footer />
    </div>
  )
}
