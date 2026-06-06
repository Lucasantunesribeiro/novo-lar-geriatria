import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

export default function AboutPageFooter() {
  return (
    <footer
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px 80px',
        width: '100%',
        background: '#2C3E6B',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '48px 32px',
          gap: '32px',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* Main Footer Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '32px',
            width: '100%',
          }}
        >
          {/* Column 1 - Logo and Description */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              width: '280px',
            }}
          >
            {/* Logo */}
            <div
              style={{
                width: '163.96px',
                height: '56px',
                background: 'linear-gradient(135deg, #F5D481 0%, #D4A853 100%)',
                borderRadius: '8px',
              }}
            />

            {/* Description */}
            <p
              style={{
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '23px',
                color: '#99A1AF',
                margin: 0,
              }}
            >
              Cuidado humanizado e especializado para idosos em Porto Alegre, com mais de 20 anos de experiência e dedicação.
            </p>
          </div>

          {/* Column 2 - Institucional */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              width: '280px',
            }}
          >
            <h3
              style={{
                fontFamily: 'Arial',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0.7px',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                margin: 0,
              }}
            >
              Institucional
            </h3>

            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '8px',
              }}
            >
              <Link
                href="/sobre"
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#99A1AF',
                  textDecoration: 'none',
                  padding: '3px 0px 1px',
                }}
              >
                Sobre Nós
              </Link>
              <Link
                href="/servicos"
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#99A1AF',
                  textDecoration: 'none',
                  padding: '3px 0px 1px',
                }}
              >
                Serviços
              </Link>
              <Link
                href="/unidades"
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#99A1AF',
                  textDecoration: 'none',
                  padding: '3px 0px 1px',
                }}
              >
                Unidades
              </Link>
              <Link
                href="/politica-de-privacidade"
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#99A1AF',
                  textDecoration: 'none',
                  padding: '3px 0px 1px',
                }}
              >
                Política de Privacidade
              </Link>
            </nav>
          </div>

          {/* Column 3 - Contato */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              width: '280px',
            }}
          >
            <h3
              style={{
                fontFamily: 'Arial',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0.7px',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                margin: 0,
              }}
            >
              Contato
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '12px',
              }}
            >
              {/* Phone 1 */}
              <Link
                href="tel:+555127970901"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                }}
              >
                <Phone size={16} color="#99A1AF" />
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#99A1AF',
                  }}
                >
                  (51) 2797.0901
                </span>
              </Link>

              {/* Phone 2 */}
              <Link
                href="tel:+555133769462"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                }}
              >
                <Phone size={16} color="#99A1AF" />
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#99A1AF',
                  }}
                >
                  (51) 3376-9462
                </span>
              </Link>

              {/* Email */}
              <Link
                href="mailto:contato@novolargeriatria.com.br"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                }}
              >
                <Mail size={16} color="#99A1AF" />
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#99A1AF',
                  }}
                >
                  contato@novolargeriatria.com.br
                </span>
              </Link>
            </div>
          </div>

          {/* Column 4 - Redes Sociais */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              width: '280px',
            }}
          >
            <h3
              style={{
                fontFamily: 'Arial',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0.7px',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                margin: 0,
              }}
            >
              Redes Sociais
            </h3>

            {/* Social Icons */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: '12px',
              }}
            >
              {/* Facebook */}
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M11.67 6.67V4.17C11.67 3.25 12.42 2.5 13.34 2.5H15V0H11.67C9.09 0 7 2.09 7 4.67V6.67H4.17V9.17H7V17.5H10.84V9.17H13.34L15 6.67H11.67Z" fill="#FFFFFF"/>
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="1.67" y="1.67" width="16.66" height="16.66" rx="4" stroke="#FFFFFF" strokeWidth="1.67"/>
                  <circle cx="10" cy="10" r="3.33" stroke="#FFFFFF" strokeWidth="1.67"/>
                  <circle cx="15.42" cy="4.58" r="0.83" fill="#FFFFFF"/>
                </svg>
              </Link>
            </div>

            <p
              style={{
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '16px',
                color: '#6A7282',
                margin: 0,
              }}
            >
              Acompanhe nosso dia a dia e novidades
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '24px 0px 0px',
            width: '100%',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <p
            style={{
              fontFamily: 'Arial',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#6A7282',
              textAlign: 'center',
              width: '100%',
              margin: 0,
            }}
          >
            © 2025 Novo Lar Geriatria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
