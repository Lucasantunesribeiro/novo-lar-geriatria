'use client'

import Link from 'next/link'
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
    'inline-flex items-center gap-2 rounded-full bg-[#10B981] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#059669]'
  const secondaryCls =
    'inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10'
  const cls = primary ? primaryCls : secondaryCls

  if (cta.type === 'whatsapp') {
    return (
      <a
        href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}`}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        <MessageCircle className="h-4 w-4" />
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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-12 text-white md:py-20">
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">{eyebrow}</p>
          )}
          <h1 className="mt-2 text-3xl font-bold text-white md:text-5xl">{heading}</h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              {description}
            </p>
          )}

          {/* Trust badges */}
          {trustBadges && trustBadges.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustBadges.map((badge, i) => (
                <div key={badge._key || i} className="flex items-center gap-1.5">
                  <span className="text-base font-bold text-[#D4A853]">{badge.value}</span>
                  <span className="text-sm text-white/70">{badge.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {primaryCta && <CtaButton cta={primaryCta} primary={true} />}
              {secondaryCta && <CtaButton cta={secondaryCta} primary={false} />}
            </div>
          )}

          <div className="mt-6 h-px w-24 bg-[#D4A853]" />

          {/* Breadcrumb */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                {breadcrumbs.map((crumb, i) => (
                  <li key={crumb._key || i} className="flex items-center gap-2">
                    {i > 0 && <span>/</span>}
                    {crumb.href ? (
                      <Link href={crumb.href} className="transition hover:text-white">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="font-medium text-white" aria-current="page">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
      </div>
    </section>
  )
}
