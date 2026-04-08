import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Users } from 'lucide-react'

type HeroStat = {
  label?: string
  value?: string
  description?: string
}

interface HeroSectionProps {
  eyebrow?: string
  title?: string
  description?: string
  primaryCta?: {
    label: string
    href: string
  }
  stats?: HeroStat[]
}

const DEFAULT_STATS: HeroStat[] = [
  { description: '+30 anos de experiência em cuidado geriátrico' },
  { description: 'Unidades em bairros nobres de Porto Alegre' },
  { description: 'Equipe multidisciplinar 24 horas por dia' },
]

function getStatLabel(stat?: HeroStat) {
  if (!stat) {
    return ''
  }

  if (stat.description) {
    return stat.description
  }

  return [stat.value, stat.label].filter(Boolean).join(' ').trim()
}

export default function HeroSection({
  eyebrow = '+30 anos sendo referência em cuidado humanizado',
  title = 'Um lar seguro, humano e acolhedor para quem você mais ama',
  description = 'Cuidamos de idosos com diferentes graus de dependência, oferecendo atenção individual, equipe multidisciplinar 24 horas e ambientes preparados para promover bem-estar, segurança e tranquilidade às famílias.',
  primaryCta = { label: 'Fale Conosco', href: '/contato' },
  stats = DEFAULT_STATS,
}: HeroSectionProps) {
  const heroStats = stats.length > 0 ? stats.slice(0, 3) : DEFAULT_STATS

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)',
      }}
    >
      <Image
        src="/herosection.png"
        alt="Background Hero Novo Lar"
        fill
        className="absolute object-cover object-center lg:object-right top-[121px] lg:top-0"
        priority
      />

      <div className="absolute inset-0 bg-white/60 lg:bg-transparent lg:hidden" />

      <section
        className="relative z-10 flex flex-col justify-center items-start px-5 py-10 lg:px-[120px] lg:py-[120px]"
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          minHeight: '821px',
        }}
      >
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[144px] w-full"
          style={{
            maxWidth: '1200px',
          }}
        >
          <div className="flex flex-col items-start gap-5 lg:gap-[25px] w-full lg:w-[672px] lg:max-w-[672px]">
            <div
              className="flex flex-row items-center px-4 py-2"
              style={{
                background: '#D4A853',
                borderRadius: '999px',
                minHeight: '36px',
              }}
            >
              <p
                className="text-sm"
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 700,
                  lineHeight: '20px',
                  color: '#FFFFFF',
                }}
              >
                {eyebrow}
              </p>
            </div>

            <h1
              className="text-4xl lg:text-[48px] lg:leading-[52px]"
              style={{
                fontFamily: 'Arial',
                fontWeight: 700,
                letterSpacing: '-1.5px',
                color: '#2C3E6B',
                maxWidth: '523px',
              }}
            >
              {title}
            </h1>

            <p
              className="text-base lg:text-[18px] lg:leading-[29px]"
              style={{
                fontFamily: 'Arial',
                fontWeight: 400,
                color: '#4A5565',
                maxWidth: '627px',
              }}
            >
              {description}
            </p>

            <Link
              href={primaryCta.href}
              className="flex flex-row justify-center items-center w-full lg:w-[251px] px-4 py-[14px]"
              style={{
                background: '#2C3E6B',
                borderRadius: '12px',
                height: '48px',
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
                {primaryCta.label}
              </span>
            </Link>

            <div className="flex flex-col lg:flex-row justify-center items-start gap-4 lg:gap-[16px] w-full lg:w-[672px] lg:h-[150px]">
              <div
                className="flex flex-col items-start w-full lg:w-[220px] p-[24px]"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                  borderRadius: '16px',
                  height: '150px',
                }}
              >
                <div className="flex flex-col items-start" style={{ gap: '12px' }}>
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

                  <p
                    style={{
                      fontFamily: 'Arial',
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: '#2C3E6B',
                      maxWidth: '165px',
                    }}
                  >
                    {getStatLabel(heroStats[0] ?? DEFAULT_STATS[0])}
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col items-start w-full lg:w-[220px] p-[24px]"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                  borderRadius: '16px',
                  height: '150px',
                }}
              >
                <div className="flex flex-col items-start" style={{ gap: '12px' }}>
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

                  <p
                    style={{
                      fontFamily: 'Arial',
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: '#2C3E6B',
                      maxWidth: '165px',
                    }}
                  >
                    {getStatLabel(heroStats[1] ?? DEFAULT_STATS[1])}
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col items-start w-full lg:w-[220px] p-[24px]"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                  borderRadius: '16px',
                  height: '150px',
                }}
              >
                <div className="flex flex-col items-start" style={{ gap: '12px' }}>
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

                  <p
                    style={{
                      fontFamily: 'Arial',
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: '#2C3E6B',
                      maxWidth: '165px',
                    }}
                  >
                    {getStatLabel(heroStats[2] ?? DEFAULT_STATS[2])}
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
