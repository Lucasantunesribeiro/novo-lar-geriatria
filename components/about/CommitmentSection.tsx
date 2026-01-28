export default function CommitmentSection() {
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
          height: '553px',
          margin: '0 auto',
        }}
      >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '0px',
          gap: '144px',
          width: '1200px',
          height: '313px',
          margin: '0 auto',
        }}
      >
        {/* Content */}
        <div
          style={{
            width: '523px',
            maxWidth: '672px',
            height: '313px',
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
              width: '523px',
              height: '311px',
              left: '0px',
              top: '0px',
            }}
          >
            {/* Heading */}
            <h2
              style={{
                width: '523px',
                height: '52px',
                fontFamily: 'Arial',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '52px',
                letterSpacing: '-1.5px',
                color: '#2C3E6B',
                margin: 0,
              }}
            >
              Nosso compromisso
            </h2>

            {/* Description */}
            <p
              style={{
                width: '511px',
                height: '234px',
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '29px',
                color: '#4A5565',
                margin: 0,
              }}
            >
              Na Novo Lar, cuidar vai além de atender necessidades clínicas. É sobre preservar dignidade, promover conforto e oferecer qualidade de vida, mesmo nos momentos mais delicados. Seguimos firmes no compromisso de acolher cada pessoa com respeito, responsabilidade e humanidade — como gostaríamos que alguém que amamos fosse cuidado.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
