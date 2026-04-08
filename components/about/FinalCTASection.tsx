import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, MessageCircle, Phone } from 'lucide-react'

import { COMPANY_CONTACT } from '@/lib/site-data'

const CTA_CARDS = [
  {
    title: 'Central Novo Lar',
    description: 'Converse com a equipe e entenda qual unidade faz mais sentido para o seu familiar.',
    icon: Phone,
    href: `tel:${COMPANY_CONTACT.centralPhoneDigits}`,
    label: COMPANY_CONTACT.centralPhoneDisplay,
  },
  {
    title: 'WhatsApp',
    description: 'Fale pelo WhatsApp para tirar dúvidas, pedir retorno e receber orientação inicial.',
    icon: MessageCircle,
    href: `https://wa.me/${COMPANY_CONTACT.whatsappDigits}`,
    label: 'Abrir conversa',
  },
  {
    title: 'Agendar visita guiada',
    description: 'Escolha a unidade de preferência e conheça a operação de perto com apoio da equipe.',
    icon: Calendar,
    href: '/contato',
    label: 'Agendar agora',
  },
]

interface FinalCTASectionProps {
  title?: string
  description?: string
}

export default function FinalCTASection({
  title = 'Conheça a Novo Lar de perto.',
  description = 'Depois de entender nossa história, o próximo passo é conhecer a estrutura real, conversar com a equipe e validar se a rotina faz sentido para sua família.',
}: FinalCTASectionProps) {
  return (
    <div className="flex w-full justify-center bg-gradient-to-b from-white to-[#F9FAFB] px-4 py-16 sm:px-8 lg:py-[80px]">
      <section className="flex w-full max-w-[1440px] flex-col items-center">
        <div className="flex w-full max-w-[1156px] flex-col items-center gap-10 rounded-3xl bg-[linear-gradient(135deg,#102041_0%,#1D3364_50%,#2E7B7F_100%)] p-8 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] lg:p-[40px]">
          <div className="flex w-full max-w-[672px] flex-col items-center gap-4 text-center">
            <div className="flex flex-row items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <MapPin size={16} className="text-white/80" />
              <span className="text-xs font-bold uppercase tracking-[3.6px] text-white/80">
                Atendimento próximo
              </span>
            </div>

            <h2 className="m-0 text-3xl font-bold text-white md:text-4xl lg:text-[36px] lg:leading-[40px]">
              {title}
            </h2>

            <p className="m-0 max-w-[970px] text-base leading-relaxed text-white/80">
              {description}
            </p>
          </div>

          <div className="grid w-full max-w-[1076px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CTA_CARDS.map((card) => {
              const Icon = card.icon
              const external = card.href.startsWith('http') || card.href.startsWith('tel:')

              const cardContent = (
                <>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="m-0 mb-3 text-xl font-bold leading-7 text-white">{card.title}</h3>
                  <p className="m-0 mb-4 flex-grow text-sm leading-6 text-white/80">{card.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold leading-5 text-[#F5D481]">
                    {card.label}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </>
              )

              if (external) {
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex w-full flex-col items-start rounded-2xl border border-white/20 bg-white/10 p-6 transition-colors hover:bg-white/20"
                  >
                    {cardContent}
                  </a>
                )
              }

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group flex w-full flex-col items-start rounded-2xl border border-white/20 bg-white/10 p-6 transition-colors hover:bg-white/20"
                >
                  {cardContent}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
