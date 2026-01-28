import Link from 'next/link'
import { Phone, MessageCircle, Calendar, ArrowRight, MapPin } from 'lucide-react'

export default function FinalCTASection() {
  return (
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '80px 208px',
          width: '100%',
          maxWidth: '1440px',
          height: '662px',
          margin: '0 auto',
        }}
      >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px',
          gap: '40px',
          width: '1156px',
          height: '502px',
          background: 'linear-gradient(135deg, #102041 0%, #1D3364 50%, #2E7B7F 100%)',
          boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
          borderRadius: '24px',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            width: '672px',
            maxWidth: '672px',
            height: '128px',
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
              width: '268px',
              height: '32px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '16777200px',
            }}
          >
            <MapPin size={16} color="rgba(255, 255, 255, 0.8)" />
            <span
              style={{
                fontFamily: 'Arial',
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '16px',
                textAlign: 'center',
                letterSpacing: '3.6px',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              Atendimento próximo
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              width: '582px',
              height: '40px',
              fontFamily: 'Arial',
              fontWeight: 700,
              fontSize: '36px',
              lineHeight: '40px',
              textAlign: 'center',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            Conheça a Novo Lar de perto.
          </h2>

          {/* Subtitle */}
          <p
            style={{
              width: '970px',
              height: '24px',
              fontFamily: 'Arial',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.8)',
              margin: 0,
            }}
          >
            Agende uma visita, converse com nossa equipe e sinta a tranquilidade de encontrar um lugar preparado para cuidar de quem você ama.
          </p>
        </div>

        {/* CTA Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '24px',
            width: '1076px',
            height: '254px',
          }}
        >
          {/* Card 1 - Central Novo Lar */}
          <Link
            href="tel:+555133467668"
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '24px',
              width: '342.67px',
              height: '254px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              textDecoration: 'none',
            }}
          >
            {/* Icon */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '48px',
                height: '48px',
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
              }}
            >
              <Phone size={24} color="#FFFFFF" />
            </div>

            {/* Title */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '20px 0px 0px',
                width: '292.66px',
                height: '48px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                Central Novo Lar
              </h3>
            </div>

            {/* Description */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '12px 0px 0px',
                width: '292.66px',
                height: '72px',
              }}
            >
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
                Converse com nossa equipe e tire todas as dúvidas sobre as modalidades de hospedagem.
              </p>
            </div>

            {/* Link */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '16px 0px 0px',
                width: '292.66px',
                height: '36px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#F5D481',
                  }}
                >
                  Ligar agora
                </span>
                <ArrowRight size={16} color="#F5D481" />
              </div>
            </div>
          </Link>

          {/* Card 2 - WhatsApp 24h */}
          <Link
            href="https://wa.me/555133467668"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '24px',
              width: '342.67px',
              height: '254px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              textDecoration: 'none',
            }}
          >
            {/* Icon */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '48px',
                height: '48px',
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
              }}
            >
              <MessageCircle size={24} color="#FFFFFF" />
            </div>

            {/* Title */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '20px 0px 0px',
                width: '292.66px',
                height: '48px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                WhatsApp 24h
              </h3>
            </div>

            {/* Description */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '12px 0px 0px',
                width: '292.66px',
                height: '72px',
              }}
            >
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
                Envie uma mensagem e receba retorno rápido da equipe de plantão para orientações imediatas.
              </p>
            </div>

            {/* Link */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '16px 0px 0px',
                width: '292.66px',
                height: '36px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#F5D481',
                  }}
                >
                  Abrir conversa
                </span>
                <ArrowRight size={16} color="#F5D481" />
              </div>
            </div>
          </Link>

          {/* Card 3 - Agendar visita guiada */}
          <Link
            href="/contato"
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '24px',
              width: '342.67px',
              height: '254px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              textDecoration: 'none',
            }}
          >
            {/* Icon */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '48px',
                height: '48px',
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
              }}
            >
              <Calendar size={24} color="#FFFFFF" />
            </div>

            {/* Title */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '20px 0px 0px',
                width: '292.66px',
                height: '48px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                Agendar visita guiada
              </h3>
            </div>

            {/* Description */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '12px 0px 0px',
                width: '292.66px',
                height: '72px',
              }}
            >
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
                Escolha a unidade de preferência e conheça pessoalmente nossa estrutura e protocolos de cuidado.
              </p>
            </div>

            {/* Link */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '16px 0px 0px',
                width: '292.66px',
                height: '36px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#F5D481',
                  }}
                >
                  Agendar agora
                </span>
                <ArrowRight size={16} color="#F5D481" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
    </div>
  )
}
