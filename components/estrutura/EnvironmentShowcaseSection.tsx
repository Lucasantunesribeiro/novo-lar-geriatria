export default function EnvironmentShowcaseSection() {
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
              Nossos ambientes
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
            Espaços pensados para conforto e segurança
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
            Ambientes adaptados, acolhedores e preparados para o cuidado integral dos nossos residentes.
          </p>
        </div>

        {/* Image Grid - 3x3 Masonry */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, auto)',
            gap: '24px',
            width: '1180px',
          }}
        >
          {/* Row 1 - Image 1 */}
          <div
            style={{
              gridColumn: '1',
              gridRow: '1',
              width: '100%',
              height: '280px',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          />

          {/* Row 1 - Image 2 (Tall) */}
          <div
            style={{
              gridColumn: '2',
              gridRow: '1 / 3',
              width: '100%',
              height: '584px',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          />

          {/* Row 1 - Image 3 */}
          <div
            style={{
              gridColumn: '3',
              gridRow: '1',
              width: '100%',
              height: '280px',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          />

          {/* Row 2 - Image 4 */}
          <div
            style={{
              gridColumn: '1',
              gridRow: '2',
              width: '100%',
              height: '280px',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          />

          {/* Row 2 - Image 5 */}
          <div
            style={{
              gridColumn: '3',
              gridRow: '2',
              width: '100%',
              height: '280px',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          />

          {/* Row 3 - Image 6 (Wide) */}
          <div
            style={{
              gridColumn: '1 / 3',
              gridRow: '3',
              width: '100%',
              height: '280px',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          />

          {/* Row 3 - Image 7 */}
          <div
            style={{
              gridColumn: '3',
              gridRow: '3',
              width: '100%',
              height: '280px',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          />
        </div>
      </section>
    </div>
  )
}
