import { Utensils, Users, Music, Shirt, Pill } from 'lucide-react'

export default function AdditionalServicesSection() {
  const services = [
    {
      icon: Utensils,
      title: 'Nutrição individualizada',
      description: 'Cardápio elaborado por nutricionista com 6 refeições diárias, adaptado a restrições alimentares, doenças crônicas e preferências individuais.',
    },
    {
      icon: Users,
      title: 'Terapia ocupacional',
      description: 'Atividades que estimulam autonomia, coordenação motora e memória, preservando capacidades funcionais e promovendo qualidade de vida.',
    },
    {
      icon: Music,
      title: 'Musicoterapia e socialização',
      description: 'Sessões de música, jogos, artesanato e convivência em grupo para estimular interação social e bem-estar emocional.',
    },
    {
      icon: Shirt,
      title: 'Serviços de lavanderia',
      description: 'Lavagem, higienização e cuidado com roupas pessoais e de cama, garantindo conforto e higiene para os residentes.',
    },
    {
      icon: Pill,
      title: 'Convênio com farmácia',
      description: 'Parceria com farmácia para fornecimento de medicamentos com entrega direta na unidade e controle rigoroso de estoque.',
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
              Serviços complementares
            </span>
          </div>

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
            Cuidado integral em todos os detalhes
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
            Serviços que garantem conforto, saúde e qualidade de vida diariamente.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
            width: '1180px',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                padding: '32px',
                gap: '24px',
                background: '#FFFFFF',
                border: '1px solid #E3E8F5',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
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
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #1D3364 0%, #2E7B7F 100%)',
                  borderRadius: '12px',
                  flexShrink: 0,
                }}
              >
                <service.icon size={24} style={{ color: '#FFFFFF' }} />
              </div>

              {/* Content Container */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  flex: 1,
                }}
              >
                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '28px',
                    color: '#1A2745',
                    margin: 0,
                  }}
                >
                  {service.title}
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
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
