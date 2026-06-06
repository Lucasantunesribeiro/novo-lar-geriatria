import Link from 'next/link'
import { Phone, MessageCircle, Calendar, MapPin } from 'lucide-react'

export default function FinalCTASection() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 384px 96px',
        width: '1440px',
        height: '678px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
        flex: 'none',
        order: 9,
        alignSelf: 'stretch',
        flexGrow: 0,
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
          flex: 'none',
          order: 0,
          flexGrow: 0,
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
            width: '672px',
            maxWidth: '672px',
            height: '128px',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          {/* Badge Overlay */}
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
              flex: 'none',
              order: 0,
              flexGrow: 0,
            }}
          >
            <MapPin size={16} style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
            <span
              style={{
                width: '212px',
                height: '16px',
                fontFamily: 'Arial',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '16px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                letterSpacing: '3.6px',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.8)',
                flex: 'none',
                order: 1,
                flexGrow: 0,
              }}
            >
              Atendimento próximo
            </span>
          </div>

          {/* Heading 2 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              width: '672px',
              height: '40px',
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            <h2
              style={{
                width: '767px',
                height: '40px',
                fontFamily: 'Arial',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '36px',
                lineHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: '#FFFFFF',
                flex: 'none',
                order: 0,
                flexGrow: 0,
                margin: 0,
              }}
            >
              Conheça a Novo Lar de perto.
            </h2>
          </div>

          {/* Description Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              width: '672px',
              height: '24px',
              flex: 'none',
              order: 2,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            <p
              style={{
                width: '780px',
                height: '24px',
                fontFamily: 'Arial',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.8)',
                flex: 'none',
                order: 0,
                flexGrow: 0,
                margin: 0,
              }}
            >
              Agende uma visita, converse com nossa equipe e sinta a tranquilidade de encontrar um lugar preparado para cuidar de quem você ama.
            </p>
          </div>
        </div>

        {/* CTA Cards Container */}
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
            flex: 'none',
            order: 1,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          {/* Card 1 - Phone */}
          <Link
            href="tel:+555133769462"
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
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 1,
              textDecoration: 'none',
            }}
          >
            {/* Icon Overlay */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                width: '48px',
                height: '48px',
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                flex: 'none',
                order: 0,
                flexGrow: 0,
              }}
            >
              <Phone size={24} style={{ color: '#FFFFFF' }} />
            </div>

            {/* Title Margin */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '20px 0px 0px',
                width: '292.66px',
                height: '48px',
                flex: 'none',
                order: 1,
                flexGrow: 0,
              }}
            >
              <h3
                style={{
                  width: '292.66px',
                  height: '28px',
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                Central Novo Lar
              </h3>
            </div>

            {/* Description Margin */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '12px 0px 0px',
                width: '292.66px',
                height: '72px',
                flex: 'none',
                order: 2,
                flexGrow: 1,
              }}
            >
              <p
                style={{
                  width: '292.66px',
                  height: '60px',
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  margin: 0,
                }}
              >
                Converse com nossa equipe e tire todas as dúvidas sobre as modalidades de hospedagem.
              </p>
            </div>

            {/* Link Margin */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '16px 0px 0px',
                width: '292.66px',
                height: '36px',
                flex: 'none',
                order: 3,
                flexGrow: 0,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '8px',
                  width: '292.66px',
                  height: '20px',
                }}
              >
                <span
                  style={{
                    width: '99px',
                    height: '20px',
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#F5D481',
                  }}
                >
                  Ligar agora
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2 - WhatsApp */}
          <Link
            href="https://wa.me/5551920011523"
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
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 1,
              textDecoration: 'none',
            }}
          >
            {/* Icon Overlay */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                width: '48px',
                height: '48px',
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                flex: 'none',
                order: 0,
                flexGrow: 0,
              }}
            >
              <MessageCircle size={24} style={{ color: '#FFFFFF' }} />
            </div>

            {/* Title Margin */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '20px 0px 0px',
                width: '292.66px',
                height: '48px',
                flex: 'none',
                order: 1,
                flexGrow: 0,
              }}
            >
              <h3
                style={{
                  width: '292.66px',
                  height: '28px',
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                WhatsApp 24h
              </h3>
            </div>

            {/* Description Margin */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '12px 0px 0px',
                width: '292.66px',
                height: '72px',
                flex: 'none',
                order: 2,
                flexGrow: 1,
              }}
            >
              <p
                style={{
                  width: '292.66px',
                  height: '60px',
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  margin: 0,
                }}
              >
                Envie uma mensagem e receba retorno rápido da equipe de plantão para orientações imediatas.
              </p>
            </div>

            {/* Link Margin */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '16px 0px 0px',
                width: '292.66px',
                height: '36px',
                flex: 'none',
                order: 3,
                flexGrow: 0,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '8px',
                  width: '292.66px',
                  height: '20px',
                }}
              >
                <span
                  style={{
                    width: '99px',
                    height: '20px',
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#F5D481',
                  }}
                >
                  Abrir conversa
                </span>
              </div>
            </div>
          </Link>

          {/* Card 3 - Calendar */}
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
              flex: 'none',
              order: 2,
              alignSelf: 'stretch',
              flexGrow: 1,
              textDecoration: 'none',
            }}
          >
            {/* Icon Overlay */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                width: '48px',
                height: '48px',
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                flex: 'none',
                order: 0,
                flexGrow: 0,
              }}
            >
              <Calendar size={24} style={{ color: '#FFFFFF' }} />
            </div>

            {/* Title Margin */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '20px 0px 0px',
                width: '292.66px',
                height: '48px',
                flex: 'none',
                order: 1,
                flexGrow: 0,
              }}
            >
              <h3
                style={{
                  width: '292.66px',
                  height: '28px',
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                Agendar visita guiada
              </h3>
            </div>

            {/* Description Margin */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '12px 0px 0px',
                width: '292.66px',
                height: '72px',
                flex: 'none',
                order: 2,
                flexGrow: 1,
              }}
            >
              <p
                style={{
                  width: '292.66px',
                  height: '60px',
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  margin: 0,
                }}
              >
                Escolha a unidade de preferência e conheça pessoalmente nossa estrutura e protocolos de cuidado.
              </p>
            </div>

            {/* Link Margin */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '16px 0px 0px',
                width: '292.66px',
                height: '36px',
                flex: 'none',
                order: 3,
                flexGrow: 0,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '8px',
                  width: '292.66px',
                  height: '20px',
                }}
              >
                <span
                  style={{
                    width: '99px',
                    height: '20px',
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#F5D481',
                  }}
                >
                  Agendar agora
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
