import Link from 'next/link'
import { ArrowRight, CalendarDays, MessageCircle, Phone } from 'lucide-react'

import { COMPANY_CONTACT } from '@/lib/site-data'

const CTA_CARDS = [
  {
    title: 'Central Novo Lar',
    description: 'Atendimento humano para orientar sobre perfil clínico, unidades e disponibilidade.',
    icon: Phone,
    link: `tel:${COMPANY_CONTACT.centralPhoneDigits}`,
    linkLabel: COMPANY_CONTACT.centralPhoneDisplay,
  },
  {
    title: 'WhatsApp',
    description: 'Canal rápido para tirar dúvidas, pedir retorno e combinar a primeira visita.',
    icon: MessageCircle,
    link: `https://wa.me/${COMPANY_CONTACT.whatsappDigits}`,
    linkLabel: 'Abrir conversa',
  },
  {
    title: 'Agendar visita guiada',
    description: 'Leve sua família para conhecer a estrutura, a equipe e as opções de cuidado.',
    icon: CalendarDays,
    link: '/contato',
    linkLabel: 'Solicitar horario',
  },
]

const SUPPORTING_LINKS = [
  { href: '/depoimentos', label: 'Ver depoimentos' },
  { href: '/sobre/localizacao', label: 'Comparar unidades' },
  { href: '/perguntas-frequentes', label: 'Ler FAQ' },
]

interface FinalCTAProps {
  title?: string
  description?: string
}

export default function FinalCTA({
  title = 'Estamos prontos para ajudar sua família a decidir com segurança, sem pressa e com contexto real.',
  description = 'Este bloco fecha a home conectando contato imediato, visita presencial e páginas de apoio para quem ainda está comparando opções.',
}: FinalCTAProps) {
  return (
    <section className="w-full px-5 py-10 lg:px-[208px] lg:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 rounded-[24px] bg-[linear-gradient(135deg,#102041_0%,#1D3364_50%,#2E7B7F_100%)] px-5 py-10 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] lg:px-[56px] lg:py-[56px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-white/80">
            Decisão assistida
          </span>
          <h2 className="max-w-4xl text-2xl font-bold text-white lg:text-[36px] lg:leading-[1.1]">
            {title}
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-white/80 lg:text-base">
            {description}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {CTA_CARDS.map((card) => {
            const Icon = card.icon
            const isExternal = !card.link.startsWith('/')

            const content = (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="mt-5 flex flex-1 flex-col">
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-white/80">{card.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#F5D481]">
                    {card.linkLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </>
            )

            if (isExternal) {
              return (
                <a
                  key={card.title}
                  href={card.link}
                  target={card.link.startsWith('http') ? '_blank' : undefined}
                  rel={card.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex min-h-[240px] flex-col rounded-2xl border border-white/20 bg-white/10 p-6 transition hover:bg-white/15"
                >
                  {content}
                </a>
              )
            }

            return (
              <Link
                key={card.title}
                href={card.link}
                className="flex min-h-[240px] flex-col rounded-2xl border border-white/20 bg-white/10 p-6 transition hover:bg-white/15"
              >
                {content}
              </Link>
            )
          })}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-white/75">
            Antes de falar com a equipe, você pode navegar por depoimentos, unidades e FAQ para
            chegar mais preparado para o contato.
          </p>
          <div className="flex flex-wrap gap-3">
            {SUPPORTING_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
