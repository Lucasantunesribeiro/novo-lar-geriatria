const STEPS = [
  {
    number: 1,
    title: 'Tour guiado pelas unidades',
    description: 'Agende um horário, percorra suítes e espaços de convivência e conheça nossa equipe de perto.',
  },
  {
    number: 2,
    title: 'Plano personalizado de cuidado',
    description: 'Avaliações clínicas e sociais para entender o perfil do residente e montar um plano que respeita a história da família.',
  },
  {
    number: 3,
    title: 'Integração e acompanhamento contínuo',
    description: 'Relatórios recorrentes, adaptações da rotina e participação da família para garantir conforto e segurança em cada fase.',
  },
]

export default function ProcessSteps() {
  return (
    <section
      className="flex flex-col items-center px-5 py-10 lg:px-[130px] lg:py-[80px]"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
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
            Como preparamos a chegada da sua família
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
            Transparência e cuidado em cada etapa para garantir uma transição tranquila e acolhedora.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[24px] w-full">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-start p-6 lg:p-[32px] pt-8 lg:pt-[40px]"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                gap: '16px',
              }}
            >
              {/* Number Badge */}
              <div
                className="absolute -top-4 left-6 flex flex-row justify-center items-center w-10 h-10 lg:w-[48px] lg:h-[48px]"
                style={{
                  background: '#2C3E6B',
                  borderRadius: '50%',
                  boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '28px',
                    color: '#FFFFFF',
                  }}
                >
                  {step.number}
                </span>
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
                  {step.title}
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
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
