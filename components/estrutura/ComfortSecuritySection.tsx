import { Shield, Bed, Thermometer, Camera, Bell, Heart } from 'lucide-react'

export default function ComfortSecuritySection() {
  const features = [
    {
      icon: Shield,
      title: 'Segurança 24h',
      description: 'Monitoramento constante, controle de acesso e equipe de plantão.',
    },
    {
      icon: Bed,
      title: 'Suítes adaptadas',
      description: 'Quartos confortáveis com banheiros adaptados e mobiliário seguro.',
    },
    {
      icon: Thermometer,
      title: 'Climatização',
      description: 'Ambientes climatizados para conforto térmico em todas as estações.',
    },
    {
      icon: Camera,
      title: 'Câmeras de segurança',
      description: 'Sistema de CFTV em áreas comuns para garantir proteção.',
    },
    {
      icon: Bell,
      title: 'Chamada de emergência',
      description: 'Botões de chamada em todos os quartos e banheiros.',
    },
    {
      icon: Heart,
      title: 'Acessibilidade total',
      description: 'Rampas, corrimãos e pisos antiderrapantes em toda a estrutura.',
    },
  ]

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        width: '100%',
        background: 'linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)',
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '80px 130px',
          width: '1440px',
          margin: '0 auto',
        }}
      >
        {/* Header Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            gap: '16px',
            width: '768px',
            marginBottom: '56px',
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '36px',
              lineHeight: '40px',
              textAlign: 'center',
              color: '#1A2745',
              margin: 0,
            }}
          >
            Conforto e segurança em cada detalhe
          </h2>

          {/* Subtitle */}
          <p
            style={{
              width: '672px',
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'center',
              color: '#4A5565',
              margin: 0,
            }}
          >
            Infraestrutura completa pensada para oferecer tranquilidade aos residentes e suas famílias.
          </p>
        </div>

        {/* Features Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            width: '1180px',
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '32px 24px',
                gap: '16px',
                background: '#FFFFFF',
                border: '1px solid #E3E8F5',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                textAlign: 'center',
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, #1D3364 0%, #2E7B7F 100%)',
                  borderRadius: '16px',
                }}
              >
                <feature.icon size={28} style={{ color: '#FFFFFF' }} />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: '#1A2745',
                  margin: 0,
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#4A5565',
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
