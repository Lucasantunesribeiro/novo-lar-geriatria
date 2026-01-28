export default function ThreePillarsSection() {
  const pillars = [
    {
      title: 'Hospedagem acolhedora',
      description: 'Suites amplas, áreas externas arborizadas e ambientes personalizados para acolher diferentes níveis de dependência.',
    },
    {
      title: 'Equipe multidisciplinar 24h',
      description: 'Médicos geriatras, enfermeiros, fisioterapeutas, terapeutas ocupacionais e musicoterapeutas atuam em regime integral.',
    },
    {
      title: 'Famílias próximas',
      description: 'Processos transparentes, visitas guiadas frequentes e acompanhamento das rotinas para deixar a família sempre por perto.',
    },
  ]

  return (
    <div
      style={{
        width: '100%',
        background: '#FFFFFF',
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '80px 130px',
          width: '100%',
          maxWidth: '1440px',
          height: '662.25px',
          margin: '0 auto',
        }}
      >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px 12px',
          gap: '40px',
          width: '1180px',
          maxWidth: '1180px',
          height: '502.25px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
            width: '768px',
            maxWidth: '768px',
            height: '112px',
          }}
        >
          <h2
            style={{
              width: '799px',
              height: '40px',
              fontFamily: 'Arial',
              fontWeight: 700,
              fontSize: '36px',
              lineHeight: '40px',
              color: '#1A2745',
              margin: 0,
            }}
          >
            Cuidado humanizado, com base técnica sólida
          </h2>

          <p
            style={{
              width: '768px',
              height: '56px',
              fontFamily: 'Arial',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '28px',
              color: '#4A5565',
              margin: 0,
            }}
          >
            Conheça os pilares que fazem da Novo Lar referência em hospedagem assistida, reabilitação e home care para idosos e pacientes de alta complexidade.
          </p>
        </div>

        {/* Three Pillar Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '24px',
            width: '1156px',
            height: '350.25px',
          }}
        >
          {pillars.map((pillar, index) => (
            <div
              key={index}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                isolation: 'isolate',
                width: index === 2 ? '369.34px' : '369.33px',
                height: '350.25px',
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
              }}
            >
              {/* Image Placeholder */}
              <div
                style={{
                  width: index === 2 ? '367.34px' : '367.33px',
                  height: '192px',
                  background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
                  zIndex: 1,
                }}
              />

              {/* Content */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '24px',
                  width: index === 2 ? '367.34px' : '367.33px',
                  height: '156.25px',
                  zIndex: 0,
                }}
              >
                <h3
                  style={{
                    width: index === 2 ? '319.34px' : '319.33px',
                    height: '28px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '28px',
                    color: '#1A2745',
                    margin: 0,
                  }}
                >
                  {pillar.title}
                </h3>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '11.25px 0px 0px',
                    width: index === 2 ? '319.34px' : '319.33px',
                    height: '80.25px',
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
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}
