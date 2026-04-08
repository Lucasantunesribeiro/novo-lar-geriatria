import { Star } from 'lucide-react'
import GoogleReviews from '@/components/sections/GoogleReviews'

type TestimonialsData = {
  title?: string
  description?: string
  mode?: 'manual' | 'google'
  testimonialsResolved?: Array<{
    _id: string
    name?: string
    role?: string
    text?: string
    rating?: number
  }>
}

export function TestimonialsSectionRenderer({ data }: { data: TestimonialsData }) {
  if (data.mode === 'google') {
    return <GoogleReviews />
  }

  if (!data.testimonialsResolved?.length) {
    return null
  }

  return (
    <section className="bg-[#F9FAFB] py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {data.title ? <h2 className="text-center text-3xl font-bold text-[#2C3E6B] sm:text-4xl">{data.title}</h2> : null}
          {data.description ? <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-gray-600 sm:text-lg">{data.description}</p> : null}

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.testimonialsResolved.map((item) => (
              <div key={item._id} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                <div className="flex gap-1">
                  {Array.from({ length: item.rating || 5 }).map((_, index) => (
                    <Star key={`${item._id}-${index}`} className="h-4 w-4 fill-[#D4A853] text-[#D4A853]" />
                  ))}
                </div>
                {item.text ? <p className="mt-4 text-sm leading-relaxed text-gray-700">&ldquo;{item.text}&rdquo;</p> : null}
                <div className="mt-5 border-t border-gray-100 pt-4">
                  {item.name ? <div className="font-semibold text-[#2C3E6B]">{item.name}</div> : null}
                  {item.role ? <div className="text-sm text-gray-500">{item.role}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
