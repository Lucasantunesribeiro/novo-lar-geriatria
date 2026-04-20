'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle } from 'lucide-react'
import { COMPANY_CONTACT } from '@/lib/site-data'

interface TrustBadge {
  _key?: string
  value: string
  label: string
}

interface LandingCta {
  type: 'whatsapp' | 'phone' | 'link'
  label: string
  href?: string
}

interface Breadcrumb {
  _key?: string
  label: string
  href?: string
}

interface SeoHeroData {
  eyebrow?: string
  heading: string
  description?: string
  trustBadges?: TrustBadge[]
  primaryCta?: LandingCta
  secondaryCta?: LandingCta
  breadcrumbs?: Breadcrumb[]
}

function CtaButton({ cta, primary }: { cta: LandingCta; primary: boolean }) {
  const primaryCls =
    'inline-flex items-center justify-center gap-2 rounded-xl bg-[#2C3E6B] px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_-6px_rgba(44,62,107,0.5)] hover:bg-[#1f2b4b] w-full sm:w-auto h-[54px]'
  const secondaryCls =
    'inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#2C3E6B] bg-transparent px-8 py-4 text-base font-bold text-[#2C3E6B] transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_-6px_rgba(44,62,107,0.2)] hover:bg-[#2C3E6B]/5 w-full sm:w-auto h-[54px]'
  const cls = primary ? primaryCls : secondaryCls

  if (cta.type === 'whatsapp') {
    const isWppPrimary =
      'inline-flex items-center justify-center gap-2 rounded-xl bg-[#10B981] px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_-6px_rgba(16,185,129,0.5)] hover:bg-[#059669] w-full sm:w-auto h-[54px]'
    return (
      <a
        href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}`}
        target="_blank"
        rel="noopener noreferrer"
        className={primary ? isWppPrimary : secondaryCls}
      >
        <MessageCircle className="h-5 w-5" />
        {cta.label}
      </a>
    )
  }

  if (cta.type === 'phone') {
    return (
      <a href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`} className={cls}>
        <Phone className="h-4 w-4" />
        {cta.label || COMPANY_CONTACT.centralPhoneDisplay}
      </a>
    )
  }

  return (
    <Link href={cta.href || '/'} className={cls}>
      {cta.label}
    </Link>
  )
}

export function SeoHero({ data }: { data: SeoHeroData }) {
  const { eyebrow, heading, description, trustBadges, primaryCta, secondaryCta, breadcrumbs } = data

  return (
    <section 
      className="relative w-full overflow-hidden py-12 md:py-20 lg:py-[120px] flex items-center"
      style={{
        background: 'linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)',
        minHeight: '821px',
      }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/herosection.png"
          alt="Novo Lar Geriatria"
          fill
          className="object-cover object-center lg:object-right"
          priority
        />
        {/* Overlay para legibilidade no mobile/tablet */}
        <div className="absolute inset-0 bg-white/90 lg:bg-transparent" />
        {/* Gradient overlay no desktop para garantir contraste do texto à esquerda */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent w-full md:w-[70%]" />
      </div>

      <div className="container relative z-10 mx-auto px-5 lg:px-[120px] flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between items-center" style={{ maxWidth: '1440px' }}>
        {/* Lado Esquerdo - Detalhes Hero */}
        <div className="mx-auto lg:mx-0 w-full lg:max-w-[672px] flex flex-col items-start gap-5 lg:gap-[25px]">
          {eyebrow && (
            <div
              className="flex flex-row items-center px-4 py-2 shadow-sm"
              style={{
                background: '#D4A853',
                borderRadius: '999px',
                minHeight: '36px',
              }}
            >
              <p className="text-sm font-bold leading-[20px] text-white font-arial tracking-wide">
                {eyebrow}
              </p>
            </div>
          )}

          <h1 
            className="text-4xl lg:text-[48px] lg:leading-[52px] font-bold text-[#2C3E6B] font-arial"
            style={{ letterSpacing: '-1.5px', maxWidth: '523px' }}
          >
            {heading}
          </h1>

          {description && (
            <p 
              className="text-base lg:text-[18px] lg:leading-[29px] text-[#4A5565] font-arial"
              style={{ maxWidth: '627px' }}
            >
              {description}
            </p>
          )}

          {/* Trust badges */}
          {trustBadges && trustBadges.length > 0 && (
            <div className="flex flex-row flex-wrap items-stretch justify-start gap-4 w-full mt-4">
              {trustBadges.map((badge, i) => (
                <div 
                  key={badge._key || i} 
                  className="flex flex-col items-start min-w-[150px] flex-1 max-w-[300px] p-5 bg-white/70 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[20px] transition-transform hover:-translate-y-1"
                >
                  <span className="text-3xl lg:text-[2rem] font-extrabold text-[#D4A853] drop-shadow-sm leading-none mb-2">{badge.value}</span>
                  <span className="text-sm font-bold text-[#2C3E6B] leading-snug">{badge.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 w-full mt-6">
              {primaryCta && <CtaButton cta={primaryCta} primary={true} />}
              {secondaryCta && <CtaButton cta={secondaryCta} primary={false} />}
            </div>
          )}

          <div className="h-px w-24 bg-[#D4A853] mt-2 opacity-60 hidden lg:block" />

          {/* Breadcrumb */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="w-full">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-[#4A5565]">
                {breadcrumbs.map((crumb, i) => (
                  <li key={crumb._key || i} className="flex items-center gap-2">
                    {i > 0 && <span className="text-gray-400">/</span>}
                    {crumb.href ? (
                      <Link href={crumb.href} className="transition hover:text-[#2C3E6B] font-medium">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="font-bold text-[#2C3E6B]" aria-current="page">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>

        {/* Lado Direito - Principais Benefícios */}
        <div 
          className="flex flex-col items-start p-6 lg:p-[32px_24px_24px] gap-3 w-full lg:w-[497px] shrink-0 box-border bg-[rgba(46,123,127,0.05)] border border-[rgba(46,123,127,0.15)] rounded-[16px] backdrop-blur-sm lg:backdrop-blur-none"
        >
          <h4 className="font-arial font-bold text-[12px] leading-[16px] tracking-[3.6px] uppercase text-[#2C3E6B] mb-1">
            Principais benefícios
          </h4>
          <ul className="flex flex-col items-start gap-2 w-full">
            {[
              "Planos permanentes ou temporários totalmente personalizados conforme perfil clínico e necessidades de cada família",
              "Equipe multidisciplinar completa presente 24h: médico geriatra, enfermeiros, fisioterapeutas, nutricionistas, psicólogos e terapeutas ocupacionais",
              "Ambientes totalmente acessíveis com pisos antiderrapantes, corrimãos, áreas verdes arborizadas e salas de convivência climatizadas",
              "Quartos individuais ou compartilhados com camas hospitalares, climatização, banheiros adaptados e sistema de chamada de emergência",
              "Programação diária supervisionada: atividades terapêuticas, recreativas, culturais, fisioterapia em grupo e celebrações especiais"
            ].map((text, index) => (
              <li key={index} className="flex flex-row items-start gap-2 w-full min-h-[40px]">
                <div className="flex flex-col items-start pt-[2px] w-4 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                    <path d="M13.3333 4L6.00001 11.3333L2.66667 8" stroke="#2E7B7F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="font-arial font-normal text-[14px] leading-[20px] text-[#364153]">
                  {text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
