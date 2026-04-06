import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface RelatedLink {
  _key?: string
  label: string
  href: string
}

interface RelatedLinksData {
  _type: string
  heading?: string
  links?: RelatedLink[]
  background?: 'white' | 'gray'
}

export function RelatedLinksRenderer({ data }: { data: RelatedLinksData }) {
  if (!data.links?.length) return null
  const bgClass = data.background === 'gray' ? 'bg-[#F9FAFB]' : 'bg-white'

  return (
    <section className={`${bgClass} border-t border-gray-100 py-10`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {data.heading && (
            <p className="mb-4 text-sm font-bold text-gray-500">{data.heading}</p>
          )}
          <div className="flex flex-wrap gap-3">
            {data.links.map((link, i) => (
              <Link
                key={link._key || i}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#2C3E6B] transition hover:border-[#2E7B7F]/40 hover:text-[#2E7B7F] hover:shadow-sm"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
