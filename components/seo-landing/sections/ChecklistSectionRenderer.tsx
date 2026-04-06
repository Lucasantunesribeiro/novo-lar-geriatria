import { CheckCircle2 } from 'lucide-react'

interface ChecklistItem {
  _key?: string
  title?: string
  text: string
}

interface ChecklistSectionData {
  _type: string
  eyebrow?: string
  heading?: string
  description?: string
  items?: ChecklistItem[]
  columns?: 1 | 2 | 3
  background?: 'white' | 'gray'
}

export function ChecklistSectionRenderer({ data }: { data: ChecklistSectionData }) {
  const bgClass = data.background === 'gray' ? 'bg-[#F9FAFB]' : 'bg-white'
  const colsClass =
    data.columns === 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : data.columns === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : 'grid-cols-1'

  return (
    <section className={`${bgClass} py-16`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {(data.eyebrow || data.heading || data.description) && (
            <div className="mb-10 text-center">
              {data.eyebrow && (
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A853]">
                  {data.eyebrow}
                </p>
              )}
              {data.heading && (
                <h2 className="text-3xl font-bold text-[#2C3E6B]">{data.heading}</h2>
              )}
              {data.description && (
                <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">{data.description}</p>
              )}
            </div>
          )}

          {data.items && data.items.length > 0 && (
            <div className={`grid gap-4 ${colsClass}`}>
              {data.items.map((item, i) => (
                <div
                  key={item._key || i}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2E7B7F]" />
                  <div>
                    {item.title && (
                      <p className="mb-1 text-sm font-bold text-[#2C3E6B]">{item.title}</p>
                    )}
                    <p className="text-sm leading-relaxed text-gray-700">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
