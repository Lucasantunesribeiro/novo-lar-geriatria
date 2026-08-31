'use client'

import { MapPin, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface UnitHeroFigmaProps {
  name: string
  address: string
  neighborhood: string
  description?: string
  whatsapp?: string
  image?: string
}

export default function UnitHeroFigma({
  name,
  address,
  neighborhood,
  description,
  whatsapp,
  image,
}: UnitHeroFigmaProps) {
  return (
    <section
      className="flex flex-col justify-center items-start px-8 md:px-16 lg:px-32 py-24 md:py-32"
      style={{
        background: 'linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)',
        minHeight: '846px',
      }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-36 w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-6 w-full lg:w-[672px] lg:max-w-[672px]">
          <div className="inline-flex items-center px-4 py-2 bg-[#D4A853] rounded-full w-fit">
            <span className="text-white font-bold text-sm leading-5 uppercase tracking-wide">
              Geriatria em Porto Alegre
            </span>
          </div>

          <h1
            className="text-[#2C3E6B] font-bold leading-tight"
            style={{
              fontSize: '48px',
              lineHeight: '52px',
              letterSpacing: '-1.5px',
            }}
          >
            {name} - Unidade de Geriatria com segurança e tranquilidade
          </h1>

          <p
            className="text-[#4A5565]"
            style={{
              fontSize: '18px',
              lineHeight: '29px',
            }}
          >
            {description ||
              'Cada unidade da Novo Lar foi cuidadosamente planejada para oferecer um ambiente seguro, acolhedor e funcional, respeitando a rotina do bairro e facilitando a proximidade da família. Mais do que estrutura, cada unidade carrega o mesmo padrão de cuidado humanizado, atenção individual e acompanhamento profissional contínuo que fazem parte da essência da Novo Lar.'}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#D4A853]" />
              <span
                className="font-bold"
                style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgba(74, 85, 101, 0.9)',
                }}
              >
                {address}, {neighborhood}
              </span>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/contato"
              className="flex items-center justify-center px-6 py-3.5 bg-[#2C3E6B] text-white font-bold text-sm rounded-xl hover:bg-[#2C3E6B]/90 transition-colors"
              style={{
                width: '224px',
                height: '48px',
              }}
            >
              Agendar Visita
            </Link>

            {whatsapp ? (
              <a
                href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-[#00A63E] text-white font-bold text-sm rounded-xl hover:bg-[#00A63E]/90 transition-colors"
                style={{
                  width: '318px',
                  height: '48px',
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Falar com nossa equipe no WhatsApp
              </a>
            ) : null}
          </div>
        </div>

        {image ? (
          <div className="hidden lg:block w-full lg:w-[384px] h-[606px] relative rounded-3xl overflow-hidden shadow-2xl">
            <Image src={image} alt="Unidade Novo Lar Geriatria" fill className="object-cover" />
          </div>
        ) : null}
      </div>
    </section>
  )
}
