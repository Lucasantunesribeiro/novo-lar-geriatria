import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'

import type { UnitsSectionData } from '@/types/cms'

type CmsUnit = NonNullable<UnitsSectionData['unitsResolved']>[number]

/** Cartao escrito a mao no bloco do Studio, com os textos proprios da home. */
export interface CartaoUnidadeHome {
  titulo?: string
  endereco?: string
  caracteristica?: string
  imagem?: { url?: string; alt?: string }
  whatsapp?: string
  linkDetalhes?: string
}

interface UnitsSectionProps {
  title?: string
  description?: string
  /** Cartoes escritos no bloco. Tem preferencia sobre o cadastro de unidades. */
  cartoes?: CartaoUnidadeHome[]
  units?: CmsUnit[]
  rotuloVisitas?: string
  rotuloAgendar?: string
  rotuloWhatsapp?: string
  rotuloDetalhes?: string
}

const LEGACY_SECTION_TITLE = 'Nossas Unidades'
const LEGACY_SECTION_DESCRIPTION =
  'Unidades estrategicamente localizadas em Porto Alegre, pensadas para facilitar o acesso da família e oferecer ambientes tranquilos, seguros e acolhedores. Cada unidade possui características próprias, mas todas seguem o mesmo padrão de cuidado, qualidade e atenção individual.'

const LEGACY_UNIT_CARDS = [
  {
    title: 'Moinhos de Vento',
    address: 'Rua Luciana de Abreu, 231 - Bairro Moinhos de Vento',
    feature: 'Estrutura premium',
    imageSrc: encodeURI('/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/10.jpeg'),
    whatsapp: '555127970901',
    detailsHref: '/unidade-luciana-de-abreu',
  },
  {
    title: "Passo d'Areia",
    address: "Rua Paquetá Oliveira Neto, 770 - Bairro Passo D'Areia",
    feature: 'Ampla área de convivência e fisioterapia',
    imageSrc: encodeURI('/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/6.jpeg'),
    whatsapp: '5551920011523',
    detailsHref: '/unidade-novo-lar-geriatria',
  },
  {
    title: 'Moinhos de Vento  R. Barão de Santo Ângelo, 406',
    address: 'Rua Barão de Santo Ângelo, 406  Porto Alegre - RS',
    feature: 'Estrutura moderna em região central',
    imageSrc: encodeURI('/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg'),
    whatsapp: '555127970901',
    detailsHref: '/unidade-barao-sto-angelo',
  },
] as const

export default function UnitsSection({
  title,
  description,
  cartoes,
  units,
  rotuloVisitas,
  rotuloAgendar,
  rotuloWhatsapp,
  rotuloDetalhes,
}: UnitsSectionProps) {
  // Preferencia: cartoes escritos no bloco > cadastro de unidades > o que a
  // pagina ja mostrava. Campo em branco cai no texto de hoje, um por um.
  const cartoesEscritos = (cartoes || []).map((cartao, i) => ({
    title: cartao.titulo || LEGACY_UNIT_CARDS[i]?.title || '',
    address: cartao.endereco || LEGACY_UNIT_CARDS[i]?.address || '',
    feature: cartao.caracteristica || LEGACY_UNIT_CARDS[i]?.feature || '',
    imageSrc: cartao.imagem?.url || LEGACY_UNIT_CARDS[i]?.imageSrc || '',
    whatsapp: cartao.whatsapp || LEGACY_UNIT_CARDS[i]?.whatsapp || '',
    detailsHref: cartao.linkDetalhes || LEGACY_UNIT_CARDS[i]?.detailsHref || '#',
  }))

  const doCadastro = (units || []).map((unidade, i) => ({
    title: unidade.name || '',
    address: [unidade.address, unidade.neighborhood].filter(Boolean).join(' - '),
    feature: LEGACY_UNIT_CARDS[i]?.feature || '',
    imageSrc: unidade.image || LEGACY_UNIT_CARDS[i]?.imageSrc || '',
    whatsapp: (unidade.whatsapp || '').replace(/\D/g, ''),
    detailsHref: unidade.slug?.current ? `/unidades/${unidade.slug.current}` : '#',
  }))

  const cartoesNaTela =
    cartoesEscritos.length > 0
      ? cartoesEscritos
      : doCadastro.length > 0
      ? doCadastro
      : (LEGACY_UNIT_CARDS as unknown as typeof cartoesEscritos)

  return (
    <section
      id="unidades"
      className="scroll-mt-28 flex flex-col items-start px-5 py-10 lg:scroll-mt-32 lg:px-[80px] lg:py-[112px]"
      style={{
        background: '#F9FAFB',
        width: '100%',
      }}
    >
      <div
        className="flex w-full flex-col items-start gap-8 lg:w-[1280px] lg:gap-[48px]"
        style={{
          padding: '0px 16px',
          maxWidth: '100%',
          margin: '0 auto',
        }}
      >
        <div
          className="flex flex-col items-center gap-4 lg:gap-[16px]"
          style={{
            width: '100%',
          }}
        >
          <h2
            className="text-3xl lg:text-[48px]"
            style={{
              fontFamily: 'Arial',
              fontWeight: 700,
              lineHeight: '1',
              color: '#2C3E6B',
              textAlign: 'center',
              width: '100%',
            }}
          >
            {title || LEGACY_SECTION_TITLE}
          </h2>

          <p
            className="text-base lg:text-[18px]"
            style={{
              fontFamily: 'Arial',
              fontWeight: 400,
              lineHeight: '1.6',
              color: '#4A5565',
              textAlign: 'center',
              maxWidth: '884px',
            }}
          >
            {description || LEGACY_SECTION_DESCRIPTION}
          </p>
        </div>

        <div
          className="flex flex-col justify-center gap-6 lg:flex-row lg:items-stretch lg:gap-[32px]"
          style={{
            width: '100%',
            flexWrap: 'wrap',
          }}
        >
          {cartoesNaTela.map((unit) => (
            <div
              key={unit.detailsHref}
              className="flex w-full flex-col items-start lg:w-[394.66px]"
              style={{
                background: '#FFFFFF',
                border: '1px solid #F3F4F6',
                boxShadow:
                  '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '245.41px',
                  background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
                  position: 'relative',
                }}
              >
                <Image src={unit.imageSrc} alt={unit.title} fill className="object-cover" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    right: '15.83px',
                    top: '16px',
                    padding: '11.25px 12px 8.75px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(4px)',
                    borderRadius: '999px',
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Arial',
                      fontWeight: 700,
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#4A4AAC',
                    }}
                  >
                    {rotuloVisitas || 'Visitas Diárias'}
                  </span>
                </div>
              </div>

              <div
                className="flex flex-1 flex-col items-start"
                style={{
                  padding: '24px',
                  width: '100%',
                }}
              >
                <div style={{ marginBottom: '4px' }}>
                  <h3
                    style={{
                      fontFamily: 'Arial',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: '#2C3E6B',
                    }}
                  >
                    {unit.title}
                  </h3>
                </div>

                <div
                  className="flex flex-row items-start"
                  style={{
                    gap: '8px',
                    padding: '16px 0px 12px',
                  }}
                >
                  <div style={{ paddingTop: '2px' }}>
                    <MapPin size={18} color="#4A4AAC" strokeWidth={1.5} />
                  </div>
                  <p
                    style={{
                      fontFamily: 'Arial',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '23px',
                      color: '#4A5565',
                    }}
                  >
                    {unit.address}
                  </p>
                </div>

                <div
                  className="flex flex-row items-center"
                  style={{
                    gap: '8px',
                    paddingBottom: '24px',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7.5" stroke="#00A63E" strokeWidth="1.5" />
                    <path
                      d="M6 9L8 11L12 7"
                      stroke="#00A63E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p
                    style={{
                      fontFamily: 'Arial',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: '#364153',
                    }}
                  >
                    {unit.feature}
                  </p>
                </div>

                <div
                  className="mt-auto"
                  style={{
                    borderTop: '1px solid #F3F4F6',
                    width: '100%',
                    paddingTop: '16px',
                  }}
                >
                  <div
                    className="flex flex-row items-center"
                    style={{
                      gap: '12px',
                      marginBottom: '12px',
                    }}
                  >
                    <Link
                      href="/contato"
                      className="flex min-w-[140px] flex-1 flex-row items-center justify-center"
                      style={{
                        padding: '10px 8px',
                        border: '1px solid #4A4AAC',
                        borderRadius: '12px',
                      }}
                    >
                      <div className="mr-2 shrink-0">
                        <Phone size={16} color="#4A4AAC" />
                      </div>
                      <span
                        className="text-center"
                        style={{
                          fontFamily: 'Arial',
                          fontWeight: 400,
                          fontSize: '15px',
                          lineHeight: '1.2',
                          color: '#4A4AAC',
                        }}
                      >
                        {rotuloAgendar || 'Agendar Visita'}
                      </span>
                    </Link>

                    <a
                      href={`https://wa.me/${unit.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-w-[140px] flex-1 flex-row items-center justify-center"
                      style={{
                        padding: '11px 8px',
                        background: '#00A63E',
                        borderRadius: '12px',
                      }}
                    >
                      <div className="mr-2 shrink-0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M13.5 2.5C12.1 1.1 10.2 0.333333 8.16667 0.333333C4 0.333333 0.666667 3.66667 0.666667 7.83333C0.666667 9.16667 1 10.5 1.66667 11.6667L0.666667 15.6667L4.83333 14.6667C5.83333 15.3333 7 15.6667 8.16667 15.6667C12.3333 15.6667 15.6667 12.3333 15.6667 8.16667C15.6667 6 14.9 4.16667 13.5 2.5Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <span
                        className="text-center"
                        style={{
                          fontFamily: 'Arial',
                          fontWeight: 400,
                          fontSize: '15px',
                          lineHeight: '1.2',
                          color: '#FFFFFF',
                        }}
                      >
                        {rotuloWhatsapp || 'WhatsApp'}
                      </span>
                    </a>
                  </div>

                  <Link
                    href={unit.detailsHref}
                    className="flex flex-row items-center justify-center"
                    style={{
                      padding: '14px 0px',
                      width: '100%',
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
                      {rotuloDetalhes || 'Ver detalhes da unidade'}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
