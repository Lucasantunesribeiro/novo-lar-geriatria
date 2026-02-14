export default function AboutStructureShowcase() {
  return (
    <div
      className="about-structure"
      style={{
        width: '100%',
        background: 'linear-gradient(135deg, rgba(13, 26, 54, 0.95) 0%, rgba(29, 51, 100, 0.9) 50%, rgba(46, 123, 127, 0.85) 100%)',
      }}
    >
      <section
        className="about-structure__section"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '120px 112px',
          gap: '48px',
          width: '100%',
          maxWidth: '1440px',
          height: '562px',
          margin: '0 auto',
        }}
      >
      {/* Image Grid - Group 2 */}
      <div
        className="about-structure__grid"
        style={{
          width: '484px',
          height: '454px',
          position: 'relative',
        }}
      >
        {/* Área comum - Moinhos de Vento */}
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

        {/* Sala de estar */}
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

        {/* Recepção - Passo d'Areia */}
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

        {/* Área externa - Moinhos de Vento */}
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

      {/* Card Content */}
      <div
        className="about-structure__content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0px 32px',
          width: '516px',
          height: '322px',
        }}
      >
        <div
          className="about-structure__card"
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '32px',
            gap: '16px',
            width: '452px',
            height: '322px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(4px)',
            borderRadius: '24px',
          }}
        >
          {/* Heading */}
          <h2
            className="about-structure__title"
            style={{
              width: '386px',
              height: '76px',
              fontFamily: 'Arial',
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '38px',
              letterSpacing: '-1.2px',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            Cuidar de pessoas sempre foi a nossa essência
          </h2>

          {/* Description */}
          <div
            className="about-structure__description"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '4px 0px 0px',
              width: '386px',
              height: '164px',
            }}
          >
            <p
              className="about-structure__description-text"
              style={{
                width: '386px',
                height: '160px',
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: 'rgba(255, 255, 255, 0.8)',
                margin: 0,
              }}
            >
              Escolher um lar para um pai ou uma mãe é uma das decisões mais sensíveis que uma família pode enfrentar. Envolve amor, responsabilidade e, acima de tudo, confiança. A Novo Lar Geriatria nasceu com um propósito claro: oferecer cuidado humano, seguro e especializado para idosos, respeitando histórias de vida, individualidades e necessidades específicas de cada residente.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
