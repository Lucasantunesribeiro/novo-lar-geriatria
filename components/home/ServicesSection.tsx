import Link from 'next/link'
import Image from 'next/image'
import type { ServicesSectionData } from '@/types/cms'

const SERVICES = [
  {
    title: 'Hospedagem Assistida 24h',
    description:
      'A Novo Lar oferece hospedagem assistida com cuidado contínuo, em um ambiente seguro, acolhedor e preparado para diferentes graus de dependência. Todos os residentes contam com acompanhamento profissional, rotina assistida e atenção individualizada, respeitando sua história, preferências e necessidades.',
    benefits: [
      'Um lar com suporte 24 horas',
      'Segurança, presença profissional contínua e rotina estruturada',
      'Tranquilidade para acompanhar o envelhecimento com dignidade',
    ],
  },
  {
    title: 'Enfermagem Especializada',
    description:
      'A enfermagem especializada integra o cuidado diário de todos os residentes, garantindo acompanhamento clínico constante, administração segura de medicamentos e atenção imediata a qualquer intercorrência.',
    benefits: [
      'O idoso possui condições clínicas que exigem monitoramento contínuo',
      'Há uso regular de medicações',
      'A família busca segurança técnica no cuidado diário',
    ],
  },
  {
    title: 'Fisioterapia e Reabilitação',
    description:
      'Sessões de fisioterapia personalizadas focadas em manter e recuperar a mobilidade, equilíbrio e independência funcional dos residentes.',
    benefits: [
      'Manutenção da mobilidade e independência',
      'Prevenção de quedas e lesões',
      'Recuperação pós-cirúrgica ou acidentes',
    ],
  },
  {
    title: 'Terapia Ocupacional',
    description:
      'Atividades terapêuticas que estimulam as capacidades cognitivas, motoras e sociais, promovendo autonomia e qualidade de vida.',
    benefits: [
      'Estímulo cognitivo e motor',
      'Atividades de vida diária assistidas',
      'Promoção da autonomia e autoestima',
    ],
  },
  {
    title: 'Nutrição Especializada',
    description:
      'Cardápios balanceados e personalizados elaborados por nutricionistas, respeitando restrições alimentares e preferências individuais.',
    benefits: [
      'Dietas personalizadas e balanceadas',
      'Acompanhamento nutricional constante',
      'Respeito às restrições e preferências',
    ],
  },
  {
    title: 'Acompanhamento Médico',
    description:
      'Consultas regulares com médicos geriatras e especialistas, garantindo acompanhamento integral da saúde de cada residente.',
    benefits: [
      'Consultas médicas regulares',
      'Acompanhamento de condições crônicas',
      'Integração com especialistas quando necessário',
    ],
  },
]

type CmsService = NonNullable<ServicesSectionData['servicesResolved']>[number]

interface ServicesSectionProps {
  title?: string
  description?: string
  services?: CmsService[]
}

const DEFAULT_SERVICE_IMAGES = [
  '/nossos-servicos/1.jpg',
  '/nossos-servicos/2.jpg',
  '/nossos-servicos/3.jpg',
  '/nossos-servicos/4.jpg',
  '/nossos-servicos/5.jpg',
  '/nossos-servicos/6.jpg',
  '/nossos-servicos/1.jpg',
]

export default function ServicesSection({
  title = 'Nossos Serviços',
  description = 'Cuidado integral e personalizado para cada fase da vida.',
  services,
}: ServicesSectionProps) {
  const contentServices =
    services && services.length > 0
      ? services.map((service, index) => ({
          title: service.title,
          description: service.summary || service.description || '',
          benefits:
            service.highlights && service.highlights.length > 0
              ? service.highlights.slice(0, 3)
              : ['Cuidado individualizado', 'Acompanhamento profissional contínuo', 'Suporte alinhado ao perfil do residente'],
          image: service.heroImageUrl || DEFAULT_SERVICE_IMAGES[index] || DEFAULT_SERVICE_IMAGES[0],
          imageAlt: service.heroImageAlt || service.title,
        }))
      : SERVICES.map((service, index) => ({
          ...service,
          image: DEFAULT_SERVICE_IMAGES[index] || DEFAULT_SERVICE_IMAGES[0],
          imageAlt: service.title,
        }))

  return (
    <section
      className="flex flex-col items-center px-5 py-10 lg:px-[100px] lg:py-[80px]"
      style={{
        background: '#F9FAFB',
        width: '100%',
      }}
    >
      <div
        className="flex flex-col items-center gap-8 lg:gap-[48px] w-full lg:w-[1180px]"
        style={{
          padding: '0px 12px',
          maxWidth: '100%',
        }}
      >
        <div
          className="flex flex-col items-center gap-4 lg:gap-[16px]"
          style={{
            width: '100%',
          }}
        >
          <h2
            className="text-3xl lg:text-[48px]"
            style={{
              fontFamily: 'Arial',
              fontWeight: 700,
              lineHeight: '1',
              color: '#2C3E6B',
              textAlign: 'center',
              width: '100%',
            }}
          >
            {title}
          </h2>

          <p
            className="text-base lg:text-[18px]"
            style={{
              fontFamily: 'Arial',
              fontWeight: 400,
              lineHeight: '1.6',
              color: '#4A5565',
              textAlign: 'center',
              maxWidth: '456px',
            }}
          >
            {description}
          </p>
        </div>

        <div
          className="flex flex-col items-start gap-12 lg:gap-[68px] w-full lg:w-[1206px]"
          style={{
            maxWidth: '100%',
          }}
        >
          {contentServices.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col items-center p-5 lg:p-[32px] gap-6 lg:gap-[54px] ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              style={{
                width: '100%',
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
              }}
            >
              <div
                className="relative w-full lg:w-[532px] h-[240px] lg:h-[387px] lg:min-w-[532px] overflow-hidden"
                style={{
                  borderRadius: '16px',
                }}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div
                className="flex flex-col items-start gap-5 lg:gap-[24px]"
                style={{
                  flex: 1,
                }}
              >
                <div className="flex flex-col items-start gap-3 lg:gap-[16px]">
                  <div className="flex flex-row items-center gap-3 lg:gap-[16px]">
                    <div className="w-7 h-7 lg:w-[34px] lg:h-[34px]">
                      <svg width="100%" height="100%" viewBox="0 0 34 34" fill="none">
                        <circle cx="17" cy="17" r="15" stroke="#2C3E6B" strokeWidth="2" />
                        <path
                          d="M12 17L15 20L22 13"
                          stroke="#2C3E6B"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <h3
                      className="text-2xl lg:text-[30px]"
                      style={{
                        fontFamily: 'Arial',
                        fontWeight: 700,
                        lineHeight: '1.4',
                        color: '#2C3E6B',
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <p
                    className="text-sm lg:text-[14px]"
                    style={{
                      fontFamily: 'Arial',
                      fontWeight: 400,
                      lineHeight: '1.8',
                      color: '#4A5565',
                      maxWidth: '496px',
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                <div
                  className="p-5 lg:px-[24px] lg:pt-[32px] lg:pb-[24px]"
                  style={{
                    background: 'rgba(46, 123, 127, 0.05)',
                    border: '1px solid rgba(46, 123, 127, 0.15)',
                    borderRadius: '16px',
                    width: '100%',
                  }}
                >
                  <h4
                    className="text-[10px] lg:text-[12px] mb-3 lg:mb-[12px]"
                    style={{
                      fontFamily: 'Arial',
                      fontWeight: 700,
                      lineHeight: '16px',
                      letterSpacing: '3.6px',
                      textTransform: 'uppercase',
                      color: '#2C3E6B',
                    }}
                  >
                    Cuidado importante quando a família busca:
                  </h4>

                  <div className="flex flex-col items-start gap-2 lg:gap-[8px]">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex flex-row items-start"
                        style={{ gap: '8px' }}
                      >
                        <div style={{ paddingTop: '2px' }}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="7" stroke="#2E7B7F" strokeWidth="1.33" />
                            <path
                              d="M5 8L7 10L11 6"
                              stroke="#2E7B7F"
                              strokeWidth="1.33"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p
                          style={{
                            fontFamily: 'Arial',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#364153',
                          }}
                        >
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/servicos"
          className="flex flex-row justify-center items-center w-full lg:w-[350px]"
          style={{
            padding: '14px 0px',
            background: '#2C3E6B',
            borderRadius: '12px',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'Arial',
              fontWeight: 700,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#FFFFFF',
              textAlign: 'center',
              width: '100%',
            }}
          >
            Conheça todos os serviços
          </span>
        </Link>
      </div>
    </section>
  )
}
