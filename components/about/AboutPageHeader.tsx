import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle, ChevronDown } from 'lucide-react'

export default function AboutPageHeader() {
  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        width: '100%',
        background: '#FFFFFF',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px 112px',
          width: '100%',
          height: '40px',
          background: '#2C3E6B',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px',
            width: '100%',
            maxWidth: '1216px',
            height: '40px',
            margin: '0 auto',
          }}
        >
          {/* Left - Schedule */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0px',
              gap: '8px',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1.17" y="1.17" width="11.66" height="11.66" rx="1" stroke="#FFFFFF" strokeWidth="1.17"/>
              <line x1="7" y1="3.5" x2="7" y2="7" stroke="#FFFFFF" strokeWidth="1.17"/>
              <line x1="7" y1="7" x2="9.33" y2="7" stroke="#FFFFFF" strokeWidth="1.17"/>
            </svg>
            <span
              style={{
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '16px',
                color: '#FFFFFF',
              }}
            >
              Atendimento Comercial das 9h às 19h · Equipe 24h
            </span>
          </div>

          {/* Center - Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '0 auto',
            }}
          >
            <span
              style={{
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '11.8px',
                lineHeight: '16px',
                color: '#FFFFFF',
                textAlign: 'center',
              }}
            >
              Residencial Geriátrico em Porto Alegre - Novo Lar
            </span>
          </div>

          {/* Right - Links */}
          <nav
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <Link
              href="/contato"
              style={{
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '16px',
                color: '#FFFFFF',
                textDecoration: 'none',
              }}
            >
              Contato
            </Link>
            <Link
              href="/fotos"
              style={{
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '16px',
                color: '#FFFFFF',
                textDecoration: 'none',
              }}
            >
              Fotos
            </Link>
            <Link
              href="/blog"
              style={{
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '16px',
                color: '#FFFFFF',
                textDecoration: 'none',
              }}
            >
              Blog
            </Link>
            <Link
              href="/contato"
              style={{
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '16px',
                color: '#FFFFFF',
                textDecoration: 'none',
              }}
            >
              Fale Conosco
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px 112px',
          width: '100%',
          height: '81px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px',
            width: '100%',
            maxWidth: '1216px',
            height: '80px',
            margin: '0 auto',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              width: '140.54px',
              height: '48px',
              textDecoration: 'none',
            }}
          >
            <Image
              src="/Novo-Lar-Logo-7.png"
              alt="Novo Lar Geriatria"
              width={140.54}
              height={48}
              style={{
                objectFit: 'contain',
              }}
            />
          </Link>

          {/* Navigation Links */}
          <nav
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0px',
              gap: '0px',
            }}
          >
            <Link
              href="/sobre"
              style={{
                padding: '0px 32px 0px 0px',
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#364153',
                textDecoration: 'none',
              }}
            >
              Sobre Nós
            </Link>
            <Link
              href="/servicos"
              style={{
                padding: '0px 32px 0px 0px',
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#364153',
                textDecoration: 'none',
              }}
            >
              Serviços
            </Link>
            <Link
              href="/sobre/estrutura"
              style={{
                padding: '0px 32px 0px 0px',
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#364153',
                textDecoration: 'none',
              }}
            >
              Estrutura
            </Link>
            <Link
              href="/blog"
              style={{
                padding: '0px 32px 0px 0px',
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#364153',
                textDecoration: 'none',
              }}
            >
              Notícias
            </Link>
            <Link
              href="/contato"
              style={{
                padding: '0px 32px 0px 0px',
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#364153',
                textDecoration: 'none',
              }}
            >
              Contato
            </Link>
            <button
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0px',
                gap: '4px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Arial',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#364153',
              }}
            >
              Unidades
              <ChevronDown size={16} color="#364153" />
            </button>
          </nav>

          {/* Contact Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            {/* Phone Link */}
            <Link
              href="tel:+555133467668"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '8px 16px',
                gap: '8px',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              <Phone size={16} color="#364153" />
              <span
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#364153',
                }}
              >
                (51) 3346-7668
              </span>
            </Link>

            {/* WhatsApp Button */}
            <Link
              href="https://wa.me/555133467668"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '10px 20px',
                gap: '8px',
                background: '#10B981',
                boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              <MessageCircle size={16} color="#FFFFFF" />
              <span
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#FFFFFF',
                }}
              >
                WhatsApp
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
