import { Users, Clock, FileCheck, Activity } from 'lucide-react'

export default function StructureBenefitsSection() {
  const benefits = [
    {
      icon: Users,
      title: 'Equipe qualificada',
      description: 'Enfermeiros, técnicos de enfermagem, médicos, nutricionistas, fisioterapeutas e cuidadores treinados para atendimento geriátrico.',
    },
    {
      icon: Clock,
      title: 'Rotinas estruturadas',
      description: 'Horários organizados para medicação, alimentação, higiene, atividades terapêuticas e momentos de lazer e descanso.',
    },
    {
      icon: FileCheck,
      title: 'Planos personalizados',
      description: 'Cada residente possui plano de cuidados individualizado baseado em avaliações clínicas, nutricionais e funcionais.',
    },
    {
      icon: Activity,
      title: 'Monitoramento constante',
      description: 'Acompanhamento 24h com registro de sinais vitais, medicações, intercorrências e relatórios periódicos para a família.',
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
        background: '#F7F9FC',
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
            Por que nossas famílias confiam na estrutura
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
            Organização, transparência e cuidado profissional que trazem segurança para quem você ama.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
            width: '1180px',
          }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '32px',
                gap: '16px',
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
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, #1D3364 0%, #2E7B7F 100%)',
                  borderRadius: '16px',
                }}
              >
                <benefit.icon size={28} style={{ color: '#FFFFFF' }} />
              </div>

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
                {benefit.title}
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
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
