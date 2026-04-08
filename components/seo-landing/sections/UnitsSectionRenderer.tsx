import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'

type UnitsData = {
  title?: string
  description?: string
  unitsResolved?: Array<{
    _id: string
    name?: string
    slug?: { current?: string } | string
    phone?: string
    address?: string
    neighborhood?: string
  }>
}

function resolveSlug(slug?: { current?: string } | string) {
  if (typeof slug === 'string') {
    return slug
  }

  return slug?.current || ''
}

export function UnitsSectionRenderer({ data }: { data: UnitsData }) {
  if (!data.unitsResolved?.length) {
    return null
  }

  return (
    <section className="bg-[#F9FAFB] py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {data.title ? <h2 className="text-center text-3xl font-bold text-[#2C3E6B] sm:text-4xl">{data.title}</h2> : null}
          {data.description ? <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-gray-600 sm:text-lg">{data.description}</p> : null}

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {data.unitsResolved.map((unit) => {
              const slug = resolveSlug(unit.slug)
              return (
                <div key={unit._id} className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#2C3E6B]">{unit.name}</h3>
                  <p className="mt-4 flex flex-1 items-start gap-2 text-sm text-gray-600">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2E7B7F]" />
                    <span>{[unit.address, unit.neighborhood].filter(Boolean).join(' - ')}</span>
                  </p>

                  <div className="mt-6 space-y-3">
                    {slug ? (
                      <Link
                        href={`/unidades/${slug}`}
                        className="block rounded-xl bg-[#2C3E6B] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#203055]"
                      >
                        Ver detalhes da unidade
                      </Link>
                    ) : null}
                    {unit.phone ? (
                      <a
                        href={`tel:${unit.phone.replace(/\D/g, '')}`}
                        className="flex items-center justify-center gap-2 rounded-xl border border-[#2E7B7F]/20 px-4 py-3 text-sm font-semibold text-[#2E7B7F] transition hover:bg-[#2E7B7F]/5"
                      >
                        <Phone className="h-4 w-4" />
                        {unit.phone}
                      </a>
                    ) : null}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
