export default function AboutExperienceSection() {
  return (
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)',
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '120px 130px',
          width: '100%',
          maxWidth: '1440px',
          height: '1552px',
          margin: '0 auto',
        }}
      >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px 12px',
          gap: '128px',
          width: '1180px',
          maxWidth: '1180px',
          height: '1312px',
          margin: '0 auto',
        }}
      >
        {/* Header with Stars */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            gap: '16px',
            width: '1156px',
            height: '148px',
          }}
        >
          {/* 5 Stars */}
          <div
            style={{
              position: 'relative',
              width: '225px',
              height: '36px',
            }}
          >
            {[0, 1, 2, 3, 4].map((index) => (
              <svg
                key={index}
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                style={{
                  position: 'absolute',
                  left: `${index * 47}px`,
                  top: '0px',
                }}
              >
                <path
                  d="M18 2L22.326 14.674L35 16.146L25.146 24.326L28.652 37L18 29.348L7.348 37L10.854 24.326L1 16.146L13.674 14.674L18 2Z"
                  fill="#FFC800"
                />
              </svg>
            ))}
          </div>

          {/* Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              gap: '16px',
              width: '1156px',
              height: '96px',
            }}
          >
            <h2
              style={{
                width: '1156px',
                height: '96px',
                fontFamily: 'Arial',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '48px',
                textAlign: 'center',
                color: '#2C3E6B',
                margin: 0,
              }}
            >
              Mais de três décadas de experiência em cuidado geriátrico
            </h2>
          </div>
        </div>

        {/* Content - Image and Text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
            gap: '54px',
            width: '1156px',
            height: '454px',
          }}
        >
          {/* Image 1 */}
          <div
            style={{
              width: '484px',
              height: '454px',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              borderRadius: '16px',
            }}
          />

          {/* Text */}
          <p
            style={{
              width: '449px',
              height: '448px',
              fontFamily: 'Arial',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '28px',
              color: '#4A5565',
              margin: 0,
            }}
          >
            Com mais de 30 anos de atuação em Porto Alegre, a Novo Lar construiu uma trajetória baseada em ética, profissionalismo e dedicação contínua ao cuidado com a pessoa idosa. Ao longo desse tempo, acompanhamos de perto as transformações do envelhecimento, da medicina e das necessidades das famílias, evoluindo constantemente nossos processos, estrutura e equipe para oferecer um atendimento cada vez mais completo. Hoje, somos referência em hospedagem assistida, cuidados especializados, reabilitação e cuidados paliativos, atendendo idosos com diferentes graus de dependência.
          </p>
        </div>

        {/* Benefits Section - Image and 5 Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px',
            gap: '54px',
            width: '944px',
            height: '454px',
          }}
        >
          {/* 5 Benefit Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              width: '406px',
              height: '454px',
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '16px 24px',
                width: '406px',
                height: '78px',
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '4px',
                  width: '356px',
                  height: '44px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '20px',
                    color: '#2C3E6B',
                    margin: 0,
                  }}
                >
                  Cuidado humanizado
                </h3>
                <p
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#4A5565',
                    margin: 0,
                  }}
                >
                  Atenção individual e respeito à história de cada residente
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '16px 24px',
                width: '406px',
                height: '78px',
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '4px',
                  width: '337px',
                  height: '44px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '20px',
                    color: '#2C3E6B',
                    margin: 0,
                  }}
                >
                  Equipe multidisciplinar 24h
                </h3>
                <p
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#4A5565',
                    margin: 0,
                  }}
                >
                  Médicos, enfermagem e terapeutas sempre presentes
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '16px 24px',
                width: '406px',
                height: '78px',
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '4px',
                  width: '300px',
                  height: '44px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '20px',
                    color: '#2C3E6B',
                    margin: 0,
                  }}
                >
                  Estrutura acolhedora e segura
                </h3>
                <p
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#4A5565',
                    margin: 0,
                  }}
                >
                  Ambientes adaptados, confortáveis e acessíveis
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '16px 24px',
                width: '406px',
                height: '78px',
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '4px',
                  width: '234px',
                  height: '44px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '20px',
                    color: '#2C3E6B',
                    margin: 0,
                  }}
                >
                  Rotina ativa e terapêutica
                </h3>
                <p
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#4A5565',
                    margin: 0,
                  }}
                >
                  Estímulo físico, cognitivo e emocional
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '16px 24px',
                width: '406px',
                height: '78px',
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '4px',
                  width: '308px',
                  height: '44px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '20px',
                    color: '#2C3E6B',
                    margin: 0,
                  }}
                >
                  Alimentação saudável e balanceada
                </h3>
                <p
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#4A5565',
                    margin: 0,
                  }}
                >
                  Planos nutricionais individualizados
                </p>
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div
            style={{
              width: '484px',
              height: '454px',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              borderRadius: '16px',
            }}
          />
        </div>
      </div>
    </section>
    </div>
  )
}
