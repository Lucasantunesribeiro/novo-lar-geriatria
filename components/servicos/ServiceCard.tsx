import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  tag: string
  tagIcon?: React.ReactNode
  title: string
  description: string | React.ReactNode
  benefits: string[]
  images: {
    src: string
    alt: string
  }[]
  link?: string
  reverse?: boolean
}

export default function ServiceCard({
  tag,
  tagIcon,
  title,
  description,
  benefits,
  images,
  link,
  reverse = false,
}: ServiceCardProps) {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        background: '#FFFFFF',
        border: '1px solid #E5E7EB',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '1156px',
        overflow: 'hidden',
      }}
    >
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
        {/* Container de imagens */}
        <div
          style={{
            order: reverse ? 2 : 1,
            flex: '1',
            minWidth: '0',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto auto',
              gap: '16px',
              padding: '8px',
              width: '100%',
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  width: '100%',
                  height: '0',
                  paddingBottom: '75%', // Aspect ratio 4:3
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Container de conteúdo */}
        <div
          style={{
            order: reverse ? 1 : 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '32px',
            gap: '16px',
            flex: '1',
            minWidth: '0',
          }}
        >
          {/* Tag/Overlay */}
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '8px 16px',
              gap: '8px',
              background: 'rgba(46, 123, 127, 0.1)',
              borderRadius: '100px',
              flexShrink: 0,
            }}
          >
            {tagIcon && <div style={{ width: '16px', height: '16px', flexShrink: 0 }}>{tagIcon}</div>}
            <span
              style={{
                fontFamily: 'Arial',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '3.6px',
                textTransform: 'uppercase',
                color: '#2E7B7F',
              }}
            >
              {tag}
            </span>
          </div>

          {/* Título */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              width: '100%',
            }}
          >
            <h3
              style={{
                fontFamily: 'Arial',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '30px',
                lineHeight: '36px',
                color: '#2C3E6B',
                margin: 0,
                width: '100%',
              }}
            >
              {title}
            </h3>
          </div>

          {/* Descrição */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '8px 0px 0px',
              width: '100%',
            }}
          >
            <div
              style={{
                fontFamily: 'Arial',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '26px',
                color: '#364153',
                width: '100%',
              }}
            >
              {description}
            </div>
          </div>

          {/* Box de benefícios */}
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '32px 24px 24px',
              gap: '12px',
              background: 'rgba(46, 123, 127, 0.05)',
              border: '1px solid rgba(46, 123, 127, 0.15)',
              borderRadius: '16px',
              width: '100%',
            }}
          >
            {/* Heading 4 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
              }}
            >
              <span
                style={{
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '3.6px',
                  textTransform: 'uppercase',
                  color: '#2C3E6B',
                }}
              >
                Principais benefícios
              </span>
            </div>

            {/* Lista */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '8px',
                width: '100%',
              }}
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '8px',
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: '2px 0px 0px',
                      width: '16px',
                      height: '18px',
                      flexShrink: 0,
                    }}
                  >
                    <CheckCircle2
                      style={{
                        width: '16px',
                        height: '16px',
                        color: '#2E7B7F',
                        flexShrink: 0,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      flex: '1',
                      minWidth: '0',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Arial',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#364153',
                        width: '100%',
                      }}
                    >
                      {benefit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Link */}
          {link && (
            <Link
              href={link}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '7.75px 0px 0px',
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
                Ver detalhes completos
              </span>
              <ArrowRight
                style={{
                  width: '16px',
                  height: '16px',
                  color: '#2E7B7F',
                  flexShrink: 0,
                }}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
