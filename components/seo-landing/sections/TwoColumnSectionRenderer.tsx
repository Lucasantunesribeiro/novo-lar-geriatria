import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'

interface CardItem {
  title: string
  text: string
  link?: string
  linkLabel?: string
}

interface DistanceRow {
  city: string
  time: string
  via?: string
}

interface TwoColumnData {
  eyebrow?: string
  sectionHeading?: string
  background?: 'white' | 'gray'
  leftEyebrow?: string
  leftHeading: string
  leftIcon?: string
  leftParagraphs?: string[]
  rightHeading: string
  rightType?: 'checklist' | 'cards' | 'distanceTable'
  checklistItems?: string[]
  cardItems?: CardItem[]
  distanceRows?: DistanceRow[]
}

function RightContent({ data }: { data: TwoColumnData }) {
  if (data.rightType === 'cards' || !data.rightType) {
    if (data.cardItems?.length) {
      return (
        <div className="space-y-4">
          {data.cardItems.map((card, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-[#F9FAFB] p-4">
              <p className="mb-1 text-sm font-bold text-[#2E7B7F]">{card.title}</p>
              <p className="text-sm leading-relaxed text-gray-700">{card.text}</p>
              {card.link && (
                <Link
                  href={card.link}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#2C3E6B] transition hover:text-[#2E7B7F]"
                >
                  {card.linkLabel || 'Saiba mais'} <ArrowRight className="h-3 w-3" />
                </Link>
              )}
            </div>
          ))}
        </div>
      )
    }
  }

  if (data.rightType === 'distanceTable' && data.distanceRows?.length) {
    return (
      <div className="space-y-2">
        {data.distanceRows.map((row, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-[#2C3E6B]">{row.city}</p>
              {row.via && <p className="text-xs text-gray-500">{row.via}</p>}
            </div>
            <p className="text-sm font-bold text-[#2E7B7F]">{row.time}</p>
          </div>
        ))}
      </div>
    )
  }

  // Default: checklist (strings)
  if (data.checklistItems?.length) {
    return (
      <div className="space-y-3">
        {data.checklistItems.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2E7B7F]" />
            <p className="text-sm leading-relaxed text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    )
  }

  return null
}

export function TwoColumnSectionRenderer({ data }: { data: TwoColumnData }) {
  const bgClass = data.background === 'gray' ? 'bg-[#F9FAFB]' : 'bg-white'

  // Dynamic icon resolution
  const IconComponent = data.leftIcon
    ? (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[data.leftIcon]
    : null

  return (
    <section className={`${bgClass} py-16`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {data.sectionHeading && (
            <div className="mb-10 text-center">
              {data.eyebrow && (
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A853]">
                  {data.eyebrow}
                </p>
              )}
              <h2 className="text-3xl font-bold text-[#2C3E6B]">{data.sectionHeading}</h2>
            </div>
          )}

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Left column */}
            <div>
              {data.leftEyebrow && !data.sectionHeading && (
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#D4A853]">
                  {data.leftEyebrow}
                </p>
              )}
              {IconComponent && (
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C3E6B]/10">
                  <IconComponent className="h-6 w-6 text-[#2C3E6B]" />
                </div>
              )}
              <h2 className="mb-4 text-2xl font-bold text-[#2C3E6B] sm:text-3xl">
                {data.leftHeading}
              </h2>
              {data.leftParagraphs?.map((para, i) => (
                <p key={i} className="mb-4 text-base leading-relaxed text-gray-700">
                  {para}
                </p>
              ))}
            </div>

            {/* Right column */}
            <div>
              {data.rightHeading && (
                <h3 className="mb-4 text-lg font-bold text-[#2C3E6B]">{data.rightHeading}</h3>
              )}
              <RightContent data={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
