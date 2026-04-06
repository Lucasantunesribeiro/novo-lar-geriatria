import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'

interface CardItem {
  _key?: string
  title: string
  description?: string
  icon?: string
  linkLabel?: string
  href?: string
}

interface CardsSectionData {
  _type: string
  eyebrow?: string
  title?: string
  description?: string
  cards?: CardItem[]
  columns?: number
}

export function CardsSectionRenderer({ data }: { data: CardsSectionData }) {
  if (!data.cards?.length) return null

  const cols = data.columns || 3
  const colsClass =
    cols === 4
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : cols === 3
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        : cols === 2
          ? 'grid-cols-1 sm:grid-cols-2'
          : 'grid-cols-1'

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {(data.eyebrow || data.title || data.description) && (
            <div className="mb-10 text-center">
              {data.eyebrow && (
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A853]">
                  {data.eyebrow}
                </p>
              )}
              {data.title && (
                <h2 className="text-3xl font-bold text-[#2C3E6B]">{data.title}</h2>
              )}
              {data.description && (
                <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">{data.description}</p>
              )}
            </div>
          )}

          <div className={`grid gap-6 ${colsClass}`}>
            {data.cards.map((card, i) => {
              const IconComponent = card.icon
                ? (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[card.icon]
                : null

              return (
                <div
                  key={card._key || i}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-[#F9FAFB] p-6 shadow-sm transition hover:shadow-md"
                >
                  {IconComponent && (
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#2C3E6B]/10">
                      <IconComponent className="h-5 w-5 text-[#2C3E6B]" />
                    </div>
                  )}
                  <h3 className="mb-2 text-base font-bold text-[#2C3E6B]">{card.title}</h3>
                  {card.description && (
                    <p className="flex-1 text-sm leading-relaxed text-gray-600">{card.description}</p>
                  )}
                  {card.href && (
                    <Link
                      href={card.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
                    >
                      {card.linkLabel || 'Saiba mais'} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
