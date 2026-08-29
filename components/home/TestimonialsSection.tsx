import { Star } from 'lucide-react'

import { FEATURED_TESTIMONIALS } from '@/lib/testimonials-data'
import type { TestimonialsSectionData } from '@/types/cms'

type CmsTestimonial = NonNullable<TestimonialsSectionData['testimonialsResolved']>[number]

interface TestimonialsSectionProps {
  title?: string
  description?: string
  testimonials?: CmsTestimonial[]
  rotuloAvaliacoes?: string
}

export default function TestimonialsSection({
  rotuloAvaliacoes,
  title = 'O que dizem as famílias',
  description,
  testimonials,
}: TestimonialsSectionProps) {
  const contentTestimonials =
    testimonials && testimonials.length > 0
      ? testimonials.map((testimonial) => ({
          id: testimonial._id,
          author: testimonial.name || 'Família Novo Lar',
          text: testimonial.text || '',
          rating: testimonial.rating || 5,
        }))
      : FEATURED_TESTIMONIALS.slice(0, 9)

  return (
    <section className="w-full bg-[#F9FAFB] py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#D4A853]">
            Avaliações no Google
          </p>
          <h2 className="text-3xl font-bold text-[#2C3E6B] sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-sm leading-7 text-gray-500">{description}</p> : null}
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-[#D4A853] text-[#D4A853]" />
              ))}
            </div>
            <span className="text-lg font-bold text-[#2C3E6B]">5,0</span>
            <span className="text-sm text-gray-500">
              {rotuloAvaliacoes || '· 26 avaliações no Google'}
            </span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contentTestimonials.slice(0, 9).map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#D4A853] text-[#D4A853]" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-gray-700">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-2 border-t border-gray-100 pt-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2C3E6B] text-xs font-bold text-white">
                  {testimonial.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2C3E6B]">{testimonial.author}</p>
                  <p className="text-xs text-gray-400">Google</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
