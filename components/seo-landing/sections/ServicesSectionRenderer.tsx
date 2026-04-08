import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type ServicesData = {
  title?: string
  description?: string
  servicesResolved?: Array<{
    _id: string
    title?: string
    slug?: { current?: string } | string
    description?: string
  }>
}

function resolveSlug(slug?: { current?: string } | string) {
  if (typeof slug === 'string') {
    return slug
  }

  return slug?.current || ''
}

export function ServicesSectionRenderer({ data }: { data: ServicesData }) {
  if (!data.servicesResolved?.length) {
    return null
  }

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {data.title ? <h2 className="text-center text-3xl font-bold text-[#2C3E6B] sm:text-4xl">{data.title}</h2> : null}
          {data.description ? <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-gray-600 sm:text-lg">{data.description}</p> : null}

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.servicesResolved.map((service) => {
              const slug = resolveSlug(service.slug)
              return (
                <div key={service._id} className="rounded-2xl border border-gray-100 bg-[#F9FAFB] p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-[#2C3E6B]">{service.title}</h3>
                  {service.description ? <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.description}</p> : null}
                  {slug ? (
                    <Link
                      href={`/servicos/${slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:gap-3"
                    >
                      Ver serviço
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
