'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'
import { MessageCircle } from 'lucide-react'

const HERO_IMAGES = [
  {
    src: '/banner-home.jpg',
    alt: 'Cuidado especializado para idosos - Ambiente acolhedor',
  },
  {
    src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg',
    alt: 'Unidade Moinhos de Vento - Área externa',
  },
  {
    src: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
    alt: 'Unidade Passo d\'Areia - Recepção',
  },
  {
    src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
    alt: 'Unidade Moinhos de Vento Barão - Área comum',
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

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden text-white">
      {/* Image Carousel Background */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1530]/95 via-[#142553]/85 to-[#233d75]/45"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(255,255,255,0.25),_transparent_55%)]"></div>

      {/* Content */}
      <div className="relative">
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-start xl:gap-16">
            {/* Left Content */}
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
                <span className="rounded-full border border-white/30 bg-white/5 px-4 py-1">Atendimento 24h</span>
                <span className="rounded-full border border-white/30 bg-white/5 px-4 py-1">Hospedagem assistida</span>
                <span className="rounded-full border border-white/30 bg-white/5 px-4 py-1">Porto Alegre</span>
              </div>

              <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Cuidado especializado e hospedagem assistida para quem você ama
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                Estrutura acolhedora, equipe multidisciplinar e rotinas personalizadas que promovem autonomia, bem-estar e
                segurança. Planeje a próxima etapa com confiança ao lado do Novo Lar Geriatria.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-white/80 sm:text-base">
                {[
                  'Planos flexíveis com acompanhamento familiar diário',
                  'Equipe de enfermagem, médicos e fisioterapeutas 24 horas',
                  'Atividades cognitivas, culturais e gastronômicas inclusas',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4A853]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  { value: '20+', label: 'Anos de experiência' },
                  { value: '3', label: 'Unidades especializadas' },
                  { value: '24/7', label: 'Atendimento humanizado' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/10 p-4 shadow-lg shadow-black/10 backdrop-blur-sm"
                  >
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                    <div className="mt-1 text-xs text-white/70">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center rounded-xl bg-[#D4A853] px-8 py-3.5 text-base font-semibold text-[#1a2745] shadow-lg shadow-[#0b1530]/30 transition hover:-translate-y-0.5 hover:bg-[#c49943] focus:outline-none focus:ring-4 focus:ring-[#D4A853]/50"
                >
                  Solicite mais informações
                </Link>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="mx-auto w-full max-w-lg justify-self-end rounded-3xl bg-white/95 p-6 shadow-2xl shadow-[#0b1530]/25 backdrop-blur md:p-8 lg:mx-0">
              <div className="mb-4 flex items-start gap-3">
                <div className="rounded-xl bg-[#2C3E6B]/10 p-2.5 text-[#2C3E6B]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#2C3E6B]">
                    Solicite mais informações
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-[#1a2745]">É fácil, rápido e online</h3>
                  <p className="mt-1 text-xs text-gray-500">Retornamos em até 1 hora útil.</p>
                </div>
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
            className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
            aria-current={index === currentImageIndex}
          />
        ))}
      </div>
    </section>
  )
}
