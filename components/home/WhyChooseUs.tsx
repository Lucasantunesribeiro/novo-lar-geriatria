export default function WhyChooseUs() {
  const benefits = [
    { title: 'Cuidado humanizado', description: 'Atenção individual e respeito à história de cada residente' },
    { title: 'Equipe multidisciplinar 24h', description: 'Médicos, enfermagem e terapeutas sempre presentes' },
    { title: 'Estrutura acolhedora e segura', description: 'Ambientes adaptados, confortáveis e acessíveis' },
    { title: 'Rotina ativa e terapêutica', description: 'Estímulo físico, cognitivo e emocional' },
    { title: 'Alimentação saudável e balanceada', description: 'Planos nutricionais individualizados' },
  ]

  return (
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)',
      }}
    >
      <section
        className="flex flex-col items-start px-5 py-10 lg:px-[130px] lg:py-20"
        style={{
          width: '100%',
        }}
      >
      <div
        className="flex flex-col items-center gap-8 lg:gap-16 w-full mx-auto"
        style={{
          maxWidth: '1180px',
        }}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-4 w-full">
          <h2
            className="text-3xl lg:text-[48px] lg:leading-[48px] text-center"
            style={{
              fontFamily: 'Arial',
              fontWeight: 700,
              color: '#2C3E6B',
            }}
          >
            Por que escolher a Novo Lar?
          </h2>

          <p
            className="text-base lg:text-lg lg:leading-7 text-center max-w-[990px]"
            style={{
              fontFamily: 'Arial',
              fontWeight: 400,
              color: '#4A5565',
            }}
          >
            Escolher um residencial para um pai ou uma mãe é uma decisão delicada que envolve confiança, responsabilidade e o cuidado com cada detalhe. Na Novo Lar, unimos experiência, cuidado humano e estrutura especializada para que sua família tenha tranquilidade todos os dias, sabendo que quem você ama está bem cuidado.
          </p>
        </div>

        {/* Layout: Imagem + Cards */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[54px] w-full justify-center">
          {/* Imagem */}
          <div
            className="w-full lg:w-[484px] h-64 lg:h-[454px]"
            style={{
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
            }}
          />

          {/* Cards de Benefícios */}
          <div className="flex flex-col items-start gap-4 w-full lg:w-[406px]">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-4 lg:px-6 lg:py-4 w-full"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                  borderRadius: '16px',
                  gap: '4px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '20px',
                    color: '#2C3E6B',
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#4A5565',
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
