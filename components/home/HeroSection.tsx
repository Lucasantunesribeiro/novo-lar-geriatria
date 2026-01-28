import Link from 'next/link'
import { Calendar, MapPin, Users } from 'lucide-react'

export default function HeroSection() {
  return (
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)',
      }}
    >
      <section
        className="flex flex-col justify-center items-start px-5 py-10 lg:px-[120px] lg:py-[120px]"
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
      <div
        className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[144px] w-full"
        style={{
          maxWidth: '1200px',
        }}
      >
        {/* Coluna Esquerda - Conteúdo */}
        <div
          className="flex flex-col items-start gap-5 lg:gap-[25px] w-full lg:w-[672px] lg:max-w-[672px]"
        >
          {/* Badge Dourado */}
          <div
            className="flex flex-row items-center px-3 py-2 lg:px-4 lg:py-2"
            style={{
              background: '#D4A853',
              borderRadius: '999px',
            }}
          >
            <p
              className="text-xs lg:text-sm"
              style={{
                fontFamily: 'Arial',
                fontWeight: 700,
                lineHeight: '20px',
                color: '#FFFFFF',
              }}
            >
              +30 anos sendo referência em cuidado humanizado
            </p>
          </div>

          {/* Heading Principal */}
          <h1
            className="text-3xl lg:text-[48px] lg:leading-[52px]"
            style={{
              fontFamily: 'Arial',
              fontWeight: 700,
              letterSpacing: '-1.5px',
              color: '#2C3E6B',
              maxWidth: '523px',
            }}
          >
            Um lar seguro, humano e acolhedor para quem você mais ama
          </h1>

          {/* Descrição */}
          <p
            className="text-base lg:text-lg lg:leading-[29px]"
            style={{
              fontFamily: 'Arial',
              fontWeight: 400,
              color: '#4A5565',
              maxWidth: '627px',
            }}
          >
            Cuidamos de idosos com diferentes graus de dependência, oferecendo atenção individual, equipe multidisciplinar 24 horas e ambientes preparados para promover bem-estar, segurança e tranquilidade às famílias.
          </p>

          {/* Botão CTA */}
          <Link
            href="/contato"
            className="flex flex-row justify-center items-center w-full lg:w-[251px] px-4 py-3 lg:px-0 lg:py-[14px]"
            style={{
              background: '#2C3E6B',
              borderRadius: '12px',
            }}
          >
            <span
              style={{
                fontFamily: 'Arial',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#FFFFFF',
                textAlign: 'center',
                width: '100%',
              }}
            >
              Fale Conosco
            </span>
          </Link>

          {/* Cards de Features */}
          <div
            className="flex flex-col lg:flex-row justify-center items-start gap-4 lg:gap-4 w-full"
          >
            {/* Card 1 */}
            <div
              className="flex flex-col items-start w-full lg:w-[220px] p-5 lg:p-6"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
              }}
            >
              <div
                className="flex flex-col items-start"
                style={{ gap: '12px' }}
              >
                {/* Icon */}
                <div
                  className="flex flex-row justify-center items-center"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(44, 62, 107, 0.1)',
                    borderRadius: '12px',
                  }}
                >
                  <Calendar size={24} color="#2C3E6B" strokeWidth={2} />
                </div>

                {/* Texto */}
                <p
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#2C3E6B',
                  }}
                >
                  +30 anos de experiência em cuidado geriátrico
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="flex flex-col items-start w-full lg:w-[220px] p-5 lg:p-6"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
              }}
            >
              <div
                className="flex flex-col items-start"
                style={{ gap: '12px' }}
              >
                {/* Icon */}
                <div
                  className="flex flex-row justify-center items-center"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(44, 62, 107, 0.1)',
                    borderRadius: '12px',
                  }}
                >
                  <MapPin size={24} color="#2C3E6B" strokeWidth={2} />
                </div>

                {/* Texto */}
                <p
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#4A5565',
                  }}
                >
                  Unidades em bairros nobres de Porto Alegre
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="flex flex-col items-start w-full lg:w-[220px] p-5 lg:p-6"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
              }}
            >
              <div
                className="flex flex-col items-start"
                style={{ gap: '12px' }}
              >
                {/* Icon */}
                <div
                  className="flex flex-row justify-center items-center"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(44, 62, 107, 0.1)',
                    borderRadius: '12px',
                  }}
                >
                  <Users size={24} color="#2C3E6B" strokeWidth={2} />
                </div>

                {/* Texto */}
                <p
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#2C3E6B',
                  }}
                >
                  Equipe multidisciplinar 24 horas por dia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
