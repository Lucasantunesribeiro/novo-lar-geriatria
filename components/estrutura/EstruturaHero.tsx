import Link from 'next/link'
import { Home, MapPin } from 'lucide-react'

export default function EstruturaHero() {
  return (
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(135deg, rgba(13, 26, 54, 0.95) 0%, rgba(29, 51, 100, 0.9) 50%, rgba(46, 123, 127, 0.85) 100%)',
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '80px 142px',
          isolation: 'isolate',
          width: '100%',
          maxWidth: '1440px',
          height: '777px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '48px',
            width: '1156px',
            height: '617px',
            position: 'relative',
            zIndex: 3,
          }}
        >
          {/* Left Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '24px',
              width: '723px',
              height: '617px',
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
                width: '522px',
                height: '36px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '16777200px',
              }}
            >
              <Home size={16} color="rgba(212, 168, 83, 1)" />
              <span
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '4.2px',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                Hospedagem assistida em Porto Alegre
              </span>
            </div>

            {/* Heading */}
            <div
              style={{
                width: '723px',
                height: '156px',
              }}
            >
              <h1
                style={{
                  width: '601px',
                  fontFamily: 'Arial',
                  fontWeight: 700,
                  fontSize: '48px',
                  lineHeight: '52px',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                Estrutura completa para cuidar com segurança, conforto e tranquilidade
              </h1>
            </div>

            {/* Description */}
            <div
              style={{
                width: '723px',
                height: '112px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  margin: 0,
                }}
              >
                Conheça os ambientes e a organização da Novo Lar, planejados para oferecer segurança, acessibilidade e acolhimento em todas as fases do envelhecimento. Aqui, a estrutura faz parte do cuidado, promovendo bem-estar ao residente e tranquilidade à família todos os dias.
              </p>
            </div>

            {/* Service Tags */}
            <div
              style={{
                width: '723px',
                height: '146px',
                position: 'relative',
              }}
            >
              {/* Row 1 */}
              <Link
                href="#hospedagem"
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  position: 'absolute',
                  width: '214px',
                  left: '0px',
                  top: '0px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16777200px',
                  textDecoration: 'none',
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
                  Hospedagem assistida 24h
                </span>
              </Link>

              <Link
                href="#enfermagem"
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  position: 'absolute',
                  width: '212px',
                  left: '225.74px',
                  top: '0px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16777200px',
                  textDecoration: 'none',
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
                  Enfermagem e médico 24h
                </span>
              </Link>

              <Link
                href="#nutricao"
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  position: 'absolute',
                  width: '196px',
                  left: '449.15px',
                  top: '0px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16777200px',
                  textDecoration: 'none',
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
                  Nutrição individualizada
                </span>
              </Link>

              {/* Row 2 */}
              <div
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  position: 'absolute',
                  width: '169px',
                  left: '0px',
                  top: '50px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
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
                  Terapia ocupacional
                </span>
              </div>

              <div
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  position: 'absolute',
                  width: '227px',
                  left: '180.34px',
                  top: '50px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
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
                  Musicoterapia e socialização
                </span>
              </div>

              <div
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  position: 'absolute',
                  width: '186px',
                  left: '418.53px',
                  top: '50px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
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
                  Serviços de lavanderia
                </span>
              </div>

              {/* Row 3 */}
              <div
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  position: 'absolute',
                  width: '193px',
                  left: '0px',
                  top: '100px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
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
                  Convênio com farmácia
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                padding: '16px 0px 0px',
                gap: '16px',
                width: '558px',
                height: '64px',
              }}
            >
              <Link
                href="/contato"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '14px 0px',
                  width: '224px',
                  height: '48px',
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    textAlign: 'center',
                    color: '#2C3E6B',
                  }}
                >
                  Agendar Visita Guiada
                </span>
              </Link>

              <Link
                href="https://wa.me/555133467668"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '11px 20px',
                  width: '318px',
                  height: '48px',
                  background: '#00A63E',
                  borderRadius: '12px',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    textAlign: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  Falar com nossa equipe no WhatsApp
                </span>
              </Link>
            </div>
          </div>

          {/* Right Stats Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '16px',
              width: '320px',
              height: '617px',
            }}
          >
            {/* Card 1 - Unidades */}
            <div
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '24px',
                gap: '4px',
                width: '379px',
                height: '195px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(4px)',
                borderRadius: '24px',
              }}
            >
              <div style={{ width: '270px', height: '36px' }}>
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '30px',
                    lineHeight: '36px',
                    color: '#FFFFFF',
                  }}
                >
                  3
                </span>
              </div>
              <div style={{ width: '270px', height: '20px' }}>
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '3.5px',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  Unidades em Porto Alegre
                </span>
              </div>
              <div style={{ padding: '4px 0px 0px', width: '270px', height: '44px' }}>
                <p
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    margin: 0,
                  }}
                >
                  Localizadas nos bairros Moinhos de Vento e Passo d&apos;Areia
                </p>
              </div>
            </div>

            {/* Card 2 - Equipe 24h */}
            <div
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '24px',
                gap: '4px',
                width: '379px',
                height: '195px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(4px)',
                borderRadius: '24px',
              }}
            >
              <div style={{ width: '270px', height: '36px' }}>
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '30px',
                    lineHeight: '36px',
                    color: '#FFFFFF',
                  }}
                >
                  24h
                </span>
              </div>
              <div style={{ width: '270px', height: '20px' }}>
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '3.5px',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  Equipe de enfermagem
                </span>
              </div>
              <div style={{ padding: '4px 0px 0px', width: '270px', height: '44px' }}>
                <p
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    margin: 0,
                  }}
                >
                  Profissionais habilitados acompanhando todos os residentes
                </p>
              </div>
            </div>

            {/* Card 3 - Refeições */}
            <div
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '24px',
                gap: '4px',
                width: '379px',
                height: '195px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(4px)',
                borderRadius: '24px',
              }}
            >
              <div style={{ width: '270px', height: '36px' }}>
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '30px',
                    lineHeight: '36px',
                    color: '#FFFFFF',
                  }}
                >
                  6
                </span>
              </div>
              <div style={{ width: '270px', height: '20px' }}>
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '3.5px',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  Refeições diárias
                </span>
              </div>
              <div style={{ padding: '4px 0px 0px', width: '270px', height: '44px' }}>
                <p
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    margin: 0,
                  }}
                >
                  Cardápio supervisionado por nutricionista com ajustes individuais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
