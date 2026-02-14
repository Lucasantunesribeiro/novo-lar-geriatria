import Link from 'next/link'

export default function EnvironmentShowcaseSection() {
  return (
    <div
      className="about-environment"
      style={{
        width: '100%',
        background: '#FFFFFF',
      }}
    >
      <section
        className="about-environment__section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '80px 130px',
          width: '100%',
          maxWidth: '1440px',
          height: '844px',
          margin: '0 auto',
        }}
      >
      <div
        className="about-environment__content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px 12px',
          gap: '40px',
          width: '1180px',
          maxWidth: '1180px',
          height: '684px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          className="about-environment__header"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px',
            gap: '322.97px',
            width: '1156px',
            height: '180px',
          }}
        >
          {/* Left - Text */}
          <div
            className="about-environment__text"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              margin: '0 auto',
              width: '672px',
              maxWidth: '672px',
              height: '180px',
            }}
          >
            <h2
              style={{
                width: '587px',
                height: '80px',
                fontFamily: 'Arial',
                fontWeight: 700,
                fontSize: '36px',
                lineHeight: '40px',
                color: '#1A2745',
                margin: 0,
              }}
            >
              Ambientes pensados para acolher famílias inteiras
            </h2>

            <p
              style={{
                width: '672px',
                height: '84px',
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '28px',
                color: '#4A5565',
                margin: 0,
              }}
            >
              As unidades Novo Lar possuem suítes individuais e duplas, espaços de convivência banhados por luz natural, jardins, salas terapêuticas e estruturas completas para reabilitação e cuidados clínicos.
            </p>
          </div>

          {/* Right - Button */}
          <div
            className="about-environment__cta"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              margin: '0 auto',
              width: '162px',
              height: '180px',
            }}
          >
            <Link
              href="/sobre/fotos"
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '8px 20px',
                width: '162px',
                height: '38px',
                border: '1px solid #1D3364',
                borderRadius: '33554400px',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#1D3364',
                }}
              >
                Ver tour completo
              </span>
            </Link>
          </div>
        </div>

        {/* Image Grid - 3x2 */}
        <div
          className="about-environment__grid"
          style={{
            position: 'relative',
            width: '1156px',
            height: '464px',
          }}
        >
          {/* Row 1 */}
          {/* Image 1 */}
          <div
            className="about-environment__item"
            style={{
              position: 'absolute',
              height: '224px',
              left: '0px',
              right: '781.34px',
              top: '0px',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
                background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)',
                opacity: 0,
              }}
            />
          </div>

          {/* Image 2 */}
          <div
            className="about-environment__item"
            style={{
              position: 'absolute',
              height: '224px',
              left: '390.66px',
              right: '390.67px',
              top: '0px',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
                background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)',
                opacity: 0,
              }}
            />
          </div>

          {/* Image 3 */}
          <div
            className="about-environment__item"
            style={{
              position: 'absolute',
              height: '224px',
              left: '781.33px',
              right: '0.01px',
              top: '0px',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
                background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)',
                opacity: 0,
              }}
            />
          </div>

          {/* Row 2 */}
          {/* Image 4 */}
          <div
            className="about-environment__item"
            style={{
              position: 'absolute',
              height: '224px',
              left: '0px',
              right: '781.34px',
              top: '240px',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
                background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)',
                opacity: 0,
              }}
            />
          </div>

          {/* Image 5 */}
          <div
            className="about-environment__item"
            style={{
              position: 'absolute',
              height: '224px',
              left: '390.66px',
              right: '390.67px',
              top: '240px',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
                background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)',
                opacity: 0,
              }}
            />
          </div>

          {/* Image 6 */}
          <div
            className="about-environment__item"
            style={{
              position: 'absolute',
              height: '224px',
              left: '781.33px',
              right: '0.01px',
              top: '240px',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
                background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)',
                opacity: 0,
              }}
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
