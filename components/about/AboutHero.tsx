interface AboutHeroProps {
  eyebrow?: string
  title?: string
  description?: string
}

export default function AboutHero({
  eyebrow = 'SOBRE NÓS',
  title = 'Gestão profissional a serviço do cuidado',
  description = 'Por trás do cuidado humanizado da Novo Lar existe uma gestão administrativa sólida, ética e profissional, responsável por garantir que cada detalhe funcione com excelência. A administração é conduzida por especialistas com formação em saúde, gestão e finanças, unindo conhecimento técnico, visão estratégica e experiência no setor da saúde. Essa estrutura de gestão permite que a Novo Lar atue com organização, transparência e responsabilidade, assegurando estabilidade operacional e criando um ambiente seguro tanto para os residentes quanto para suas famílias.',
}: AboutHeroProps) {
  return (
    <div
      className="about-hero"
      style={{
        width: '100%',
        background: 'linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)',
      }}
    >
      <section
        className="about-hero__section"
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
          className="about-hero__row"
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
          <div
            className="about-hero__content"
            style={{
              width: '672px',
              maxWidth: '672px',
              height: '540px',
              position: 'relative',
            }}
          >
            <div
              className="about-hero__content-inner"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '25px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '8px 16px',
                  minHeight: '36px',
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
                  {eyebrow}
                </span>
              </div>

              <h1
                className="about-hero__title"
                style={{
                  width: '523px',
                  minHeight: '104px',
                  fontFamily: 'Arial',
                  fontWeight: 700,
                  fontSize: '48px',
                  lineHeight: '52px',
                  letterSpacing: '-1.5px',
                  color: '#2C3E6B',
                  margin: 0,
                }}
              >
                {title}
              </h1>

              <p
                className="about-hero__description"
                style={{
                  width: '627px',
                  minHeight: '351px',
                  fontFamily: 'Arial',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '29px',
                  color: '#4A5565',
                  margin: 0,
                }}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
