'use client'

import Link from 'next/link'
import { MessageCircle, Phone } from 'lucide-react'
import { COMPANY_CONTACT } from '@/lib/site-data'

interface CtaButton {
  _key?: string
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

interface CtaSectionData {
  _type: string
  title: string
  description?: string
  style?: 'light' | 'dark' | 'gradient'
  ctas?: CtaButton[]
}

export function CtaSectionRenderer({ data }: { data: CtaSectionData }) {
  const isGradient = !data.style || data.style === 'gradient'
  const isDark = data.style === 'dark'

  const wrapperClass = isGradient
    ? 'bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] py-16 text-white'
    : isDark
      ? 'bg-[#2C3E6B] py-16 text-white'
      : 'bg-[#F9FAFB] py-16'

  const titleClass = isGradient || isDark ? 'text-3xl font-bold text-white' : 'text-3xl font-bold text-[#2C3E6B]'
  const descClass = isGradient || isDark ? 'text-white/85' : 'text-gray-600'

  function renderCta(cta: CtaButton, i: number) {
    const isPrimary = cta.variant !== 'secondary'
    const isWhatsapp = cta.href === '#whatsapp'
    const isPhone = cta.href === '#phone'

    const primaryCls =
      'inline-flex items-center gap-2 rounded-full bg-[#10B981] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#059669]'
    const secondaryCls = isGradient || isDark
      ? 'inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10'
      : 'inline-flex items-center gap-2 rounded-full border-2 border-[#2C3E6B]/30 px-8 py-3.5 text-sm font-bold text-[#2C3E6B] transition hover:border-[#2C3E6B]'
    const cls = isPrimary ? primaryCls : secondaryCls

    if (isWhatsapp) {
      return (
        <a
          key={cta._key || i}
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

    if (isPhone) {
      return (
        <a key={cta._key || i} href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`} className={cls}>
          <Phone className="h-4 w-4" />
          {cta.label || COMPANY_CONTACT.centralPhoneDisplay}
        </a>
      )
    }

    return (
      <Link key={cta._key || i} href={cta.href} className={cls}>
        {cta.label}
      </Link>
    )
  }

  return (
    <section className={wrapperClass}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={titleClass}>{data.title}</h2>
        {data.description && (
          <p className={`mx-auto mt-3 max-w-xl text-base ${descClass}`}>{data.description}</p>
        )}
        {data.ctas && data.ctas.length > 0 && (
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {data.ctas.map((cta, i) => renderCta(cta, i))}
          </div>
        )}
      </div>
    </section>
  )
}
