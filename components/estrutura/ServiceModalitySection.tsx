import { Home, Calendar, Heart } from 'lucide-react'

export default function ServiceModalitySection() {
  const services = [
    {
      icon: Home,
      title: 'Hospedagem permanente',
      description: 'Para idosos que precisam de cuidados contínuos e acompanhamento 24h em ambiente seguro e acolhedor.',
      benefits: [
        'Assistência integral',
        'Equipe multidisciplinar',
        'Rotina personalizada',
        'Relatórios periódicos',
      ],
    },
    {
      icon: Calendar,
      title: 'Hospedagem temporária',
      description: 'Solução para períodos de viagem, recuperação ou necessidade pontual de cuidado especializado.',
      benefits: [
        'Flexibilidade de período',
        'Adaptação gradual',
        'Mesma estrutura completa',
        'Acompanhamento dedicado',
      ],
    },
    {
      icon: Heart,
      title: 'Cuidados pós-operatórios e reabilitação',
      description: 'Ambiente preparado para recuperação com suporte clínico, fisioterapia e nutrição orientada.',
      benefits: [
        'Supervisão médica',
        'Fisioterapia especializada',
        'Nutrição pós-cirúrgica',
        'Conforto e segurança',
      ],
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
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '80px 384px 96px',
          width: '1440px',
          height: '948px',
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
            width: '672px',
            height: '128px',
            marginBottom: '56px',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '8px 16px',
              gap: '8px',
              height: '32px',
              background: 'rgba(29, 51, 100, 0.1)',
              borderRadius: '16777200px',
            }}
          >
            <span
              style={{
                fontFamily: 'Arial',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '16px',
                textAlign: 'center',
                letterSpacing: '3.6px',
                textTransform: 'uppercase',
                color: '#1D3364',
              }}
            >
              Modalidades disponíveis
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              width: '672px',
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
            Cuidado que acompanha cada fase da família
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
            Oferecemos diferentes modalidades para atender necessidades específicas de cada família.
          </p>
        </div>

        {/* Service Cards Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '24px',
            width: '100%',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '32px',
                width: '364px',
                height: '542px',
                background: '#FFFFFF',
                border: '1px solid #E3E8F5',
                boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
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
                  marginBottom: '24px',
                }}
              >
                <service.icon size={28} style={{ color: '#FFFFFF' }} />
              </div>

              {/* Title */}
              <h3
                style={{
                  width: '300px',
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '32px',
                  color: '#1A2745',
                  margin: '0 0 16px 0',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  width: '300px',
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#4A5565',
                  margin: '0 0 24px 0',
                }}
              >
                {service.description}
              </p>

              {/* Benefits List */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  width: '100%',
                }}
              >
                {service.benefits.map((benefit, benefitIndex) => (
                  <div
                    key={benefitIndex}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        background: '#2E7B7F',
                        borderRadius: '50%',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'Arial',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#4A5565',
                      }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
