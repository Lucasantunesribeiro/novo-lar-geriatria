import Link from 'next/link'
import { MapPin, Phone, ArrowRight } from 'lucide-react'

export default function UnitsSection() {
  const units = [
    {
      name: 'Novo Lar Moinhos - Luciana',
      address: 'Rua Luciana de Abreu, 151',
      neighborhood: 'Moinhos de Vento',
      phone: '(51) 2797.0901',
      phoneHref: 'tel:+555127970901',
    },
    {
      name: 'Novo Lar Passo d\'Areia',
      address: 'Rua Brigadeiro Oliveira Neri, 175',
      neighborhood: 'Passo d\'Areia',
      phone: '(51) 3376.9462',
      phoneHref: 'tel:+555133769462',
    },
    {
      name: 'Novo Lar Moinhos - Barão',
      address: 'Rua Barão de Santo Ângelo, 406',
      neighborhood: 'Moinhos de Vento',
      phone: '(51) 2797.0901',
      phoneHref: 'tel:+555127970901',
    },
  ]

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
            <MapPin size={16} style={{ color: '#1D3364' }} />
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
              Nossas unidades
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
            Três endereços em Porto Alegre
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
            Escolha a unidade mais próxima e agende uma visita para conhecer nossa estrutura pessoalmente.
          </p>
        </div>

        {/* Units Cards Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '24px',
            width: '1180px',
          }}
        >
          {units.map((unit, index) => (
            <div
              key={index}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '32px',
                width: '377.33px',
                background: '#FFFFFF',
                border: '1px solid #E3E8F5',
                boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #1D3364 0%, #2E7B7F 100%)',
                  borderRadius: '12px',
                  marginBottom: '24px',
                }}
              >
                <MapPin size={24} style={{ color: '#FFFFFF' }} />
              </div>

              {/* Unit Name */}
              <h3
                style={{
                  width: '100%',
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#1A2745',
                  margin: '0 0 16px 0',
                }}
              >
                {unit.name}
              </h3>

              {/* Address Container */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  marginBottom: '16px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#4A5565',
                    margin: 0,
                  }}
                >
                  {unit.address}
                </p>
                <p
                  style={{
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#4A5565',
                    margin: 0,
                  }}
                >
                  {unit.neighborhood} - Porto Alegre/RS
                </p>
              </div>

              {/* Phone Link */}
              <Link
                href={unit.phoneHref}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '12px 16px',
                  gap: '8px',
                  width: '100%',
                  background: 'rgba(29, 51, 100, 0.05)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  marginBottom: '16px',
                  boxSizing: 'border-box',
                }}
              >
                <Phone size={16} style={{ color: '#1D3364' }} />
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#1D3364',
                  }}
                >
                  {unit.phone}
                </span>
              </Link>

              {/* CTA Link */}
              <Link
                href="/contato"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '8px',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#2E7B7F',
                  }}
                >
                  Agendar visita
                </span>
                <ArrowRight size={16} style={{ color: '#2E7B7F' }} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
