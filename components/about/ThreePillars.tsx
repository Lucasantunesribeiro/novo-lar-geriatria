const PILLARS = [
  {
    title: 'Hospedagem',
    description: 'Suítes amplas, áreas externas arborizadas e ambientes personalizados para acolher diferentes níveis de dependência.',
  },
  {
    title: 'Equipe',
    description: 'Médicos geriatras, enfermeiros, fisioterapeutas, terapeutas ocupacionais e musicoterapeutas atuam em regime integral.',
  },
  {
    title: 'Famílias',
    description: 'Processos transparentes, visitas guiadas frequentes e acompanhamento das rotinas para deixar a família sempre por perto.',
  },
]

export default function ThreePillars() {
  return (
    <section
      className="flex flex-col items-center px-5 py-10 lg:px-[130px] lg:py-[80px]"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
        width: '100%',
      }}
    >
      <div
        className="flex flex-col items-center gap-8 lg:gap-[48px] w-full"
        style={{
          maxWidth: '1180px',
        }}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-4 w-full">
          <h2
            className="text-2xl lg:text-[36px] lg:leading-[40px] text-center"
            style={{
              fontFamily: 'Arial',
              fontWeight: 700,
              color: '#2C3E6B',
            }}
          >
            Cuidamos de cada detalhe da experiência
          </h2>

          <p
            className="text-base lg:text-[18px] lg:leading-[29px] text-center"
            style={{
              fontFamily: 'Arial',
              fontWeight: 400,
              color: '#4A5565',
              maxWidth: '800px',
            }}
          >
            Conheça os pilares que fazem da Novo Lar referência em hospedagem assistida, reabilitação e home care para idosos e pacientes de alta complexidade.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[24px] w-full">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-start p-6 lg:p-[32px]"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                gap: '16px',
              }}
            >
              {/* Image Placeholder */}
              <div
                className="w-full h-40 lg:h-[180px]"
                style={{
                  background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
                  borderRadius: '12px',
                }}
              />

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '28px',
                    color: '#2C3E6B',
                  }}
                >
                  {pillar.title}
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
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
