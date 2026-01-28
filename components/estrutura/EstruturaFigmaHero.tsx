'use client'

import { Sparkles, Phone } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_CONTACT } from '@/lib/site-data'

export default function EstruturaFigmaHero() {
  return (
    <section
      className="relative flex flex-col items-start px-8 md:px-24 lg:px-36 py-20 isolate"
      style={{
        minHeight: '777px',
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/placeholders/hero-estrutura.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(13, 26, 54, 0.95) 0%, rgba(29, 51, 100, 0.9) 50%, rgba(46, 123, 127, 0.85) 100%)',
          zIndex: 1,
        }}
      />

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0"
        style={{
          mixBlendMode: 'soft-light',
          opacity: 0.15,
          backgroundImage: 'url(/placeholders/pattern-overlay.png)',
          zIndex: 2,
        }}
      />

      {/* Content Container */}
      <div
        className="relative flex flex-col lg:flex-row justify-center items-start gap-12 w-full max-w-[1156px] mx-auto"
        style={{ zIndex: 3 }}
      >
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6 flex-1 max-w-[723px]">
          {/* Breadcrumb/Tag */}
          <div
            className="flex items-center px-4 py-2 gap-2 bg-white/10 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-[#D4A853]" />
            <span className="text-white/80 font-bold text-sm tracking-[4.2px] uppercase">
              Hospedagem assistida em Porto Alegre
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight">
            Serviços completos para o cuidado integral de quem você ama
          </h1>

          {/* Description */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed">
            Conheça nossa estrutura multidisciplinar, construída para oferecer segurança, autonomia e acolhimento em todas as etapas da jornada do idoso.
          </p>

          {/* Service Tags */}
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full">
              <span className="text-white font-bold text-sm">Hospedagem assistida 24h</span>
            </div>
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full">
              <span className="text-white font-bold text-sm">Enfermagem e médico 24h</span>
            </div>
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full">
              <span className="text-white font-bold text-sm">Nutrição individualizada</span>
            </div>
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full">
              <span className="text-white font-bold text-sm">Terapia ocupacional</span>
            </div>
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full">
              <span className="text-white font-bold text-sm">Musicoterapia e socialização</span>
            </div>
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full">
              <span className="text-white font-bold text-sm">Serviços de lavanderia</span>
            </div>
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full">
              <span className="text-white font-bold text-sm">Convênio com farmácia</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/contato"
              className="px-6 py-3.5 bg-white text-[#2C3E6B] font-bold text-sm text-center rounded-xl hover:bg-white/90 transition-colors"
            >
              Agendar Visita Guiada
            </Link>
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-[#00A63E] text-white font-bold text-sm rounded-xl hover:bg-[#00A63E]/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Falar com nossa equipe no WhatsApp
            </a>
          </div>
        </div>

        {/* Right Stats Cards */}
        <div className="flex flex-col justify-center gap-4 w-full lg:w-[320px]">
          {/* Card 1 */}
          <div
            className="flex flex-col p-6 gap-1 bg-white/10 border border-white/10 rounded-3xl"
            style={{
              boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <div className="text-white font-bold text-3xl leading-9">3</div>
            <div className="text-white/70 font-bold text-sm tracking-[3.5px] uppercase">Unidades em Porto Alegre</div>
            <p className="text-white/80 text-sm leading-5 pt-1">
              Localizadas nos bairros Moinhos de Vento e Passo d&apos;Areia
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="flex flex-col p-6 gap-1 bg-white/10 border border-white/10 rounded-3xl"
            style={{
              boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <div className="text-white font-bold text-3xl leading-9">24h</div>
            <div className="text-white/70 font-bold text-sm tracking-[3.5px] uppercase">Equipe de enfermagem</div>
            <p className="text-white/80 text-sm leading-5 pt-1">
              Profissionais habilitados acompanhando todos os residentes
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="flex flex-col p-6 gap-1 bg-white/10 border border-white/10 rounded-3xl"
            style={{
              boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <div className="text-white font-bold text-3xl leading-9">6</div>
            <div className="text-white/70 font-bold text-sm tracking-[3.5px] uppercase">Refeições diárias</div>
            <p className="text-white/80 text-sm leading-5 pt-1">
              Cardápio supervisionado por nutricionista com ajustes individuais
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
