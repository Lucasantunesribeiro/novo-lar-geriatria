import { Heart, Users, Calendar, Home } from 'lucide-react'

const BENEFITS = [
  {
    title: 'Cuidado humanizado',
    description: 'Atenção individual e respeito à história de cada residente',
    icon: Heart,
  },
  {
    title: 'Equipe multidisciplinar 24h',
    description: 'Médicos, enfermagem e terapeutas sempre presentes',
    icon: Users,
  },
  {
    title: 'Rotina ativa e terapêutica',
    description: 'Estímulo físico, cognitivo e emocional',
    icon: Calendar,
  },
  {
    title: 'Estrutura acolhedora',
    description: 'Ambientes adaptados, confortáveis e acessíveis',
    icon: Home,
  },
]

export default function BenefitsSection() {
  return (
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)',
      }}
    >
      <section
        className="flex flex-col items-center px-5 py-10 lg:px-[130px] lg:py-[80px]"
        style={{
          width: '100%',
        }}
      >
        <div
          className="flex flex-col items-center gap-8 lg:gap-[48px] w-full"
          style={{
            maxWidth: '1180px',
          }}
        >
          {/* Header */}
          <div className="flex flex-col items-center gap-4 w-full">
            <h2
              className="text-2xl lg:text-[36px] lg:leading-[40px] text-center"
              style={{
                fontFamily: 'Arial',
                fontWeight: 700,
                color: '#2C3E6B',
              }}
            >
              Diferenciais que fazem a diferença
            </h2>

            <p
              className="text-base lg:text-[18px] lg:leading-[29px] text-center"
              style={{
                fontFamily: 'Arial',
                fontWeight: 400,
                color: '#4A5565',
                maxWidth: '800px',
              }}
            >
              Cada detalhe foi pensado para promover bem-estar, segurança e qualidade de vida aos nossos residentes e tranquilidade às suas famílias.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[24px] w-full">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="flex flex-col items-start p-5 lg:p-[24px]"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                    borderRadius: '16px',
                    gap: '16px',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="flex flex-row justify-center items-center w-12 h-12 lg:w-[48px] lg:h-[48px]"
                    style={{
                      background: 'rgba(44, 62, 107, 0.1)',
                      borderRadius: '12px',
                    }}
                  >
                    <Icon size={24} color="#2C3E6B" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3
                      style={{
                        fontFamily: 'Arial',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '24px',
                        color: '#2C3E6B',
                      }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Arial',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#4A5565',
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
