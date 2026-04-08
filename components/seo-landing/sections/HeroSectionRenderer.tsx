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
    return 'border border-white/30 bg-white/10 text-white hover:bg-white/20'
  }

  if (variant === 'ghost') {
    return 'border border-transparent bg-transparent text-white hover:bg-white/10'
  }

  return 'bg-[#D4A853] text-[#1a2745] hover:bg-[#ddb667]'
}

export function HeroSectionRenderer({ data }: { data: HeroData }) {
  const heroImage = data.slides?.[0]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1b37] via-[#1d2f5f] to-[#2E7B7F] py-16 text-white sm:py-20 lg:py-28">
      {heroImage?.url ? (
        <Image
          src={heroImage.url}
          alt={heroImage.alt || data.title || 'Novo Lar Geriatria'}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1b37]/95 via-[#1d2f5f]/90 to-[#2E7B7F]/85" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl">
            {data.eyebrow ? (
              <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm sm:text-sm">
                {data.eyebrow}
              </div>
            ) : null}

            {data.title ? (
              <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
                {data.title}
                {data.highlight ? <span className="block text-[#D4A853]">{data.highlight}</span> : null}
              </h1>
            ) : null}

            {data.description ? (
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg lg:text-xl">
                {data.description}
              </p>
            ) : null}

            {data.ctas?.length ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {data.ctas.map((cta, index) =>
                  cta?.label && cta?.href ? (
                    <Link
                      key={cta.href || index}
                      href={cta.href}
                      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold shadow-xl transition hover:-translate-y-0.5 ${ctaClass(
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
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {data.stats.map((stat, index) => (
                  <div
                    key={stat._key || index}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
                  >
                    {stat.value ? <div className="text-2xl font-bold text-[#D4A853]">{stat.value}</div> : null}
                    {stat.label ? <div className="mt-1 text-sm font-semibold uppercase tracking-wider">{stat.label}</div> : null}
                    {stat.description ? <p className="mt-2 text-sm text-white/80">{stat.description}</p> : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
