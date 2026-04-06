import { MapPin } from 'lucide-react'

export function LocationNoticeRenderer({ data }: { data: { text: string } }) {
  return (
    <section className="border-b border-amber-100 bg-amber-50 py-4">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-4xl items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <p className="text-sm leading-relaxed text-amber-800">{data.text}</p>
        </div>
      </div>
    </section>
  )
}
