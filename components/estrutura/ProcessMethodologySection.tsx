import { ClipboardList, FileText, Users, BarChart } from 'lucide-react'

export default function ProcessMethodologySection() {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Avaliação completa',
      description: 'Avaliação médica, nutricional e funcional para entender o estado de saúde e necessidades específicas.',
    },
    {
      icon: FileText,
      title: 'Plano individualizado',
      description: 'Criação de plano de cuidados personalizado com rotinas, medicamentos e atividades adequadas.',
    },
    {
      icon: Users,
      title: 'Cuidado multidisciplinar',
      description: 'Equipe integrada com enfermeiros, médicos, nutricionistas, fisioterapeutas e cuidadores.',
    },
    {
      icon: BarChart,
      title: 'Acompanhamento',
      description: 'Monitoramento contínuo com ajustes no plano e relatórios periódicos compartilhados com a família.',
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
        background: 'linear-gradient(135deg, rgba(13, 26, 54, 0.95) 0%, rgba(29, 51, 100, 0.9) 50%, rgba(46, 123, 127, 0.85) 100%)',
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '80px 130px',
          width: '1440px',
          height: '598px',
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
              background: 'rgba(255, 255, 255, 0.1)',
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
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              Nossa metodologia
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
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            Processo estruturado de cuidado
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
              color: 'rgba(255, 255, 255, 0.8)',
              margin: 0,
            }}
          >
            Cada residente recebe atendimento personalizado seguindo protocolo rigoroso de qualidade.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '24px',
            width: '1180px',
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '32px',
                width: '272px',
                height: '274px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(4px)',
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
                  background: 'rgba(245, 212, 129, 0.15)',
                  borderRadius: '12px',
                  marginBottom: '20px',
                }}
              >
                <step.icon size={24} style={{ color: '#F5D481' }} />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#FFFFFF',
                  margin: '0 0 12px 0',
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
