import Image from 'next/image'
import Link from 'next/link'

type HeroData = {
  eyebrow?: string
  title?: string
  highlight?: string
  description?: string
  slides?: Array<{ _key?: string; url?: string; alt?: string }>
  ctas?: Array<{ label?: string; href?: string; variant?: 'primary' | 'secondary' | 'ghost' }>
  stats?: Array<{ _key?: string; label?: string; value?: string; description?: string }>
}

function ctaClass(variant?: string) {
  if (variant === 'secondary') {
    return 'border-2 border-[#2C3E6B] bg-transparent text-[#2C3E6B] hover:bg-[#2C3E6B]/5'
  }

  if (variant === 'ghost') {
    return 'border border-transparent bg-transparent text-[#2C3E6B] hover:bg-gray-100'
  }

  // Primary
  return 'bg-[#2C3E6B] text-white hover:bg-[#1f2b4b] hover:shadow-[0_8px_20px_-6px_rgba(44,62,107,0.5)]'
}

export function HeroSectionRenderer({ data }: { data: HeroData }) {
  const heroImage = data.slides?.[0]

  return (
    <section 
      className="relative w-full overflow-hidden py-16 md:py-20 lg:py-28 flex items-center"
      style={{
        background: 'linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)',
        minHeight: '400px',
      }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/herosection.png"
          alt={data.title || 'Novo Lar Geriatria'}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />
        {/* Overlay branco no mobile para o texto ficar legivel */}
        <div className="absolute inset-0 bg-white/85 lg:bg-transparent" />
        {/* Um degradê suave no desktop para o texto à esquerda */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent w-full md:w-[75%]" />
      </div>

      <div className="container relative z-10 mx-auto px-5 lg:px-[120px]" style={{ maxWidth: '1440px' }}>
        <div className="mx-auto lg:mx-0 max-w-[800px] flex flex-col items-start gap-4">
          {data.eyebrow ? (
            <div
              className="flex flex-row items-center px-4 py-2 shadow-sm"
              style={{
                background: '#D4A853',
                borderRadius: '999px',
                minHeight: '36px',
              }}
            >
              <p className="text-sm font-bold leading-[20px] text-white font-arial tracking-wide">
                {data.eyebrow}
              </p>
            </div>
          ) : null}

          {data.title ? (
            <h1 
              className="text-4xl lg:text-[56px] lg:leading-[60px] font-bold text-[#2C3E6B] font-arial mt-2"
              style={{ letterSpacing: '-1.5px' }}
            >
              {data.title}
              {data.highlight ? <span className="block text-[#D4A853] mt-1">{data.highlight}</span> : null}
            </h1>
          ) : null}

          {data.description ? (
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#4A5565] sm:mt-6 sm:text-lg lg:text-xl">
              {data.description}
            </p>
          ) : null}

          {data.ctas?.length ? (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap w-full">
              {data.ctas.map((cta, index) =>
                cta?.label && cta?.href ? (
                  <Link
                    key={cta.href || index}
                    href={cta.href}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold transition-all hover:-translate-y-1 h-[54px] w-full sm:w-auto ${ctaClass(
                      cta.variant,
                    )}`}
                  >
                    {cta.label}
                  </Link>
                ) : null,
              )}
            </div>
          ) : null}

          {data.stats?.length ? (
            <div className="mt-10 grid gap-4 w-full sm:grid-cols-2 lg:grid-cols-4">
              {data.stats.map((stat, index) => (
                <div
                  key={stat._key || index}
                  className="flex flex-col items-start p-5 bg-white/70 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[20px] transition-transform hover:-translate-y-1"
                >
                  {stat.value ? <div className="text-3xl font-extrabold text-[#D4A853] drop-shadow-sm leading-none mb-2">{stat.value}</div> : null}
                  {stat.label ? <div className="text-sm font-bold text-[#2C3E6B] leading-snug">{stat.label}</div> : null}
                  {stat.description ? <p className="mt-2 text-xs text-[#4A5565] font-medium">{stat.description}</p> : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

