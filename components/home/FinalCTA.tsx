import Link from 'next/link'
import { Phone, MessageCircle, CalendarDays, ArrowRight } from 'lucide-react'

const CTA_CARDS = [
  {
    title: 'Central Novo Lar',
    description: 'Telefone direto com atendimento humano e acolhedor.',
    icon: Phone,
    link: 'tel:+555133467668',
    linkLabel: 'Ligar agora',
  },
  {
    title: 'WhatsApp 24h',
    description: 'Converse com nossa equipe e tire dúvidas imediatas.',
    icon: MessageCircle,
    link: 'https://wa.me/555133467668',
    linkLabel: 'Abrir WhatsApp',
  },
  {
    title: 'Agendar visita guiada',
    description: 'Escolha o melhor horário e conheça cada detalhe do residencial.',
    icon: CalendarDays,
    link: '/contato',
    linkLabel: 'Agendar visita',
  },
]

export default function FinalCTA() {
  return (
    <section
      className="flex flex-col items-center px-5 py-10 lg:px-[208px] lg:py-[80px]"
      style={{
        width: '100%',
      }}
    >
      <div
        className="flex flex-col items-center px-5 py-10 lg:px-[208px] lg:py-[80px] gap-8 lg:gap-[48px] w-full lg:w-[1280px]"
        style={{
          background: 'linear-gradient(135deg, #102041 0%, #1D3364 50%, #2E7B7F 100%)',
          boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
          borderRadius: '24px',
          maxWidth: '100%',
        }}
      >
        {/* Header */}
        <div
          className="flex flex-col items-center gap-4 lg:gap-[16px]"
          style={{
            maxWidth: '672px',
          }}
        >
          {/* Badge */}
          <div
            className="px-4 py-2 lg:px-[16px] lg:py-[8px]"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '999px',
            }}
          >
            <span
              className="text-[10px] lg:text-[12px]"
              style={{
                fontFamily: 'Arial',
                fontWeight: 700,
                lineHeight: '16px',
                letterSpacing: '3.6px',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              Atendimento próximo
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-2xl lg:text-[36px]"
            style={{
              fontFamily: 'Arial',
              fontWeight: 700,
              lineHeight: '1.1',
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            Estamos prontos para ajudar sua família a tomar a melhor decisão.
          </h2>

          {/* Subtitle */}
          <p
            className="text-sm lg:text-[16px]"
            style={{
              fontFamily: 'Arial',
              fontWeight: 400,
              lineHeight: '1.5',
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
            }}
          >
            Fale com nossa central, visite o espaço ou envie mensagens para descobrir como conduzir este momento com segurança.
          </p>
        </div>

        {/* Grid de Cards de Contato */}
        <div
          className="flex flex-col lg:flex-row justify-center items-stretch gap-5 lg:gap-[24px]"
          style={{
            width: '100%',
          }}
        >
          {CTA_CARDS.map((card) => {
            const Icon = card.icon
            const isExternal = !card.link.startsWith('/')

            return (
              <div
                key={card.title}
                className="flex flex-col items-start w-full lg:w-[342.67px] p-5 lg:p-[24px] gap-3 lg:gap-[16px]"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                }}
              >
                {/* Ícone */}
                <div
                  className="flex flex-row justify-center items-center w-10 h-10 lg:w-[48px] lg:h-[48px]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: '16px',
                  }}
                >
                  <Icon size={24} color="#FFFFFF" />
                </div>

                {/* Título */}
                <h3
                  className="text-lg lg:text-[20px]"
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    lineHeight: '1.4',
                    color: '#FFFFFF',
                  }}
                >
                  {card.title}
                </h3>

                {/* Descrição */}
                <p
                  className="text-sm lg:text-[14px]"
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    lineHeight: '1.4',
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  {card.description}
                </p>

                {/* Link */}
                {isExternal ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-2 lg:gap-[8px]"
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <span
                      className="text-sm lg:text-[14px]"
                      style={{
                        fontFamily: 'Arial',
                        fontWeight: 700,
                        lineHeight: '1.4',
                        color: '#F5D481',
                      }}
                    >
                      {card.linkLabel}
                    </span>
                    <ArrowRight size={16} color="#F5D481" />
                  </a>
                ) : (
                  <Link
                    href={card.link}
                    className="flex flex-row items-center gap-2 lg:gap-[8px]"
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <span
                      className="text-sm lg:text-[14px]"
                      style={{
                        fontFamily: 'Arial',
                        fontWeight: 700,
                        lineHeight: '1.4',
                        color: '#F5D481',
                      }}
                    >
                      {card.linkLabel}
                    </span>
                    <ArrowRight size={16} color="#F5D481" />
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
