import { Check } from 'lucide-react'

export default function EnfermagemSection() {
  const benefits = [
    'Equipe de enfermagem qualificada em regime de plantão',
    'Médico disponível para urgências e consultas',
    'Administração controlada de medicamentos',
    'Aferição regular de sinais vitais',
    'Protocolo de prevenção de quedas e úlceras',
    'Relatórios médicos compartilhados com a família',
  ]

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        width: '100%',
        background: '#F7F9FC',
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

        {/* Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
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
              width: '100%',
              background: '#FFFFFF',
              border: '1px solid #E3E8F5',
              boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
              borderRadius: '24px',
            }}
          >
            {/* Heading */}
            <h2
              style={{
                fontFamily: 'Arial',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '32px',
                lineHeight: '38px',
                letterSpacing: '-1.2px',
                color: '#1A2745',
                margin: 0,
              }}
            >
              Enfermagem e médico 24h
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
                      background: 'rgba(29, 51, 100, 0.1)',
                      borderRadius: '50%',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <Check size={12} style={{ color: '#1D3364', strokeWidth: 3 }} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'Arial',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: '#4A5565',
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
      </section>
    </div>
  )
}
