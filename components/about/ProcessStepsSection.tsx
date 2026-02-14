export default function ProcessStepsSection() {
  const steps = [
    {
      number: 1,
      title: 'Tour guiado pelas unidades',
      description: 'Agende um horário, percorra suítes, jardins e espaços de convivência e conheça nossa equipe de perto.',
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

  return (
    <div
      className="about-steps"
      style={{
        width: '100%',
        background: '#F7F9FC',
      }}
    >
      <section
        className="about-steps__section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '80px 130px',
          width: '100%',
          maxWidth: '1440px',
          height: '514px',
          margin: '0 auto',
        }}
      >
      <div
        className="about-steps__content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px 12px',
          gap: '40px',
          width: '1180px',
          maxWidth: '1180px',
          height: '354px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          className="about-steps__header"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
            width: '768px',
            maxWidth: '768px',
            height: '84px',
          }}
        >
          <h2
            style={{
              width: '772px',
              height: '40px',
              fontFamily: 'Arial',
              fontWeight: 700,
              fontSize: '36px',
              lineHeight: '40px',
              textAlign: 'center',
              color: '#1A2745',
              margin: 0,
            }}
          >
            Proximidade e transparência com as famílias
          </h2>

          <p
            style={{
              width: '736px',
              height: '28px',
              fontFamily: 'Arial',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '28px',
              textAlign: 'center',
              color: '#4A5565',
              margin: 0,
            }}
          >
            Transparência e cuidado em cada etapa para garantir uma transição tranquila e acolhedora.
          </p>
        </div>

        {/* Cards */}
        <div
          className="about-steps__grid"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            padding: '0px',
            gap: '24px',
            width: '1156px',
            height: '230px',
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="about-steps__card"
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '24px',
                isolation: 'isolate',
                width: index === 2 ? '369.34px' : '369.33px',
                height: '230px',
                background: '#FFFFFF',
                border: '1px solid #E3E8F5',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                position: 'relative',
              }}
            >
              {/* Number Badge */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  width: '32px',
                  height: '32px',
                  left: '25px',
                  top: '-15px',
                  background: '#1D3364',
                  boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
                  borderRadius: '33554400px',
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    textAlign: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '16px 0px 0px',
                  width: index === 2 ? '319.34px' : '319.33px',
                  height: index === 2 ? '72px' : '44px',
                  zIndex: 0,
                }}
              >
                <h3
                  style={{
                    width: index === 2 ? '319.34px' : '319.33px',
                    height: index === 2 ? '56px' : '28px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '28px',
                    color: '#1A2745',
                    margin: 0,
                  }}
                >
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  padding: '11.25px 0px 0px',
                  width: index === 2 ? '319.34px' : '319.33px',
                  height: index === 2 ? '108px' : '136px',
                  zIndex: 1,
                }}
              >
                <p
                  style={{
                    width: index === 2 ? '319.34px' : '319.33px',
                    height: '69px',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '23px',
                    color: '#4A5565',
                    margin: 0,
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
    </div>
  )
}
