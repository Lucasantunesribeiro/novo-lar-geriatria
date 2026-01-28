import { Check } from 'lucide-react'

export default function HospedagemSection() {
  const benefits = [
    'Suítes individuais ou compartilhadas com banheiro adaptado',
    'Equipe de enfermagem e cuidadores 24 horas',
    'Médico de plantão para urgências e acompanhamento',
    'Monitoramento contínuo de saúde e bem-estar',
    'Atividades terapêuticas e socialização diária',
    'Nutrição balanceada com 6 refeições ao dia',
  ]

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        width: '100%',
        background: 'linear-gradient(135deg, rgba(13, 26, 54, 0.95) 0%, rgba(29, 51, 100, 0.9) 50%, rgba(46, 123, 127, 0.85) 100%)',
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '120px 112px',
          gap: '48px',
          width: '1440px',
          height: '562px',
          margin: '0 auto',
        }}
      >
        {/* Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0px 32px',
            width: '516px',
            height: '402px',
          }}
        >
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '32px',
              gap: '24px',
              width: '452px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(4px)',
              borderRadius: '24px',
            }}
          >
            {/* Heading */}
            <h2
              style={{
                width: '386px',
                fontFamily: 'Arial',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '32px',
                lineHeight: '38px',
                letterSpacing: '-1.2px',
                color: '#FFFFFF',
                margin: 0,
              }}
            >
              Hospedagem assistida 24h
            </h2>

            {/* Benefits List */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                width: '100%',
              }}
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '20px',
                      height: '20px',
                      background: 'rgba(245, 212, 129, 0.2)',
                      borderRadius: '50%',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <Check size={12} style={{ color: '#F5D481', strokeWidth: 3 }} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'Arial',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      flex: 1,
                    }}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div
          style={{
            width: '484px',
            height: '454px',
            position: 'relative',
          }}
        >
          {/* Image 1 - Top Left */}
          <div
            style={{
              position: 'absolute',
              left: '0%',
              right: '52%',
              top: '0%',
              bottom: '52%',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          />

          {/* Image 2 - Bottom Left */}
          <div
            style={{
              position: 'absolute',
              left: '0%',
              right: '52%',
              top: '52%',
              bottom: '0%',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          />

          {/* Image 3 - Bottom Right */}
          <div
            style={{
              position: 'absolute',
              left: '52%',
              right: '0%',
              top: '68%',
              bottom: '0%',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          />

          {/* Image 4 - Top Right */}
          <div
            style={{
              position: 'absolute',
              left: '52%',
              right: '0%',
              top: '0%',
              bottom: '32%',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          />
        </div>
      </section>
    </div>
  )
}
