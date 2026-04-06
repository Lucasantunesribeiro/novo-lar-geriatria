interface StatItem {
  _key?: string
  value: string
  label?: string
  description?: string
}

interface StatsSectionData {
  _type: string
  eyebrow?: string
  title?: string
  description?: string
  stats?: StatItem[]
}

export function StatsSectionRenderer({ data }: { data: StatsSectionData }) {
  if (!data.stats?.length) return null

  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
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

          <div
            className={`grid gap-6 text-center ${
              data.stats.length <= 2
                ? 'grid-cols-2'
                : data.stats.length === 3
                  ? 'grid-cols-2 sm:grid-cols-3'
                  : 'grid-cols-2 sm:grid-cols-4'
            }`}
          >
            {data.stats.map((stat, i) => (
              <div
                key={stat._key || i}
                className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-5"
              >
                <span className="text-3xl font-bold text-[#2C3E6B]">{stat.value}</span>
                {stat.label && (
                  <span className="mt-1 text-sm font-semibold text-[#2E7B7F]">{stat.label}</span>
                )}
                {stat.description && (
                  <span className="mt-1 text-xs text-gray-500">{stat.description}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
