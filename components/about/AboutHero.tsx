export default function AboutHero() {
  return (
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)',
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '120px',
          width: '100%',
          maxWidth: '1440px',
          height: '780px',
          margin: '0 auto',
        }}
      >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0px',
          gap: '144px',
          width: '1200px',
          height: '540px',
          margin: '0 auto',
        }}
      >
        {/* Content Container */}
        <div
          style={{
            width: '672px',
            maxWidth: '672px',
            height: '540px',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '25px',
              position: 'absolute',
              width: '672px',
              height: '541px',
              left: '0px',
              top: '0px',
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '8px 16px',
                width: '117px',
                height: '36px',
                background: '#D4A853',
                borderRadius: '16777200px',
              }}
            >
              <span
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#FFFFFF',
                }}
              >
                SOBRE NÓS
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                width: '523px',
                height: '104px',
                fontFamily: 'Arial',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '52px',
                letterSpacing: '-1.5px',
                color: '#2C3E6B',
                margin: 0,
              }}
            >
              Gestão profissional a serviço do cuidado
            </h1>

            {/* Description */}
            <p
              style={{
                width: '627px',
                height: '351px',
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '29px',
                color: '#4A5565',
                margin: 0,
              }}
            >
              Por trás do cuidado humanizado da Novo Lar existe uma gestão administrativa sólida, ética e profissional, responsável por garantir que cada detalhe funcione com excelência. A administração é conduzida por especialistas com formação em saúde, gestão e finanças, unindo conhecimento técnico, visão estratégica e experiência no setor da saúde. Essa estrutura de gestão permite que a Novo Lar atue com organização, transparência e responsabilidade, assegurando estabilidade operacional e criando um ambiente seguro tanto para os residentes quanto para suas famílias.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
