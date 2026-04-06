import Link from 'next/link'

interface FaqItem {
  _key?: string
  question: string
  answer: string
}

interface FaqSectionData {
  _type: string
  title?: string
  description?: string
  faqs?: FaqItem[]
}

export function FaqSectionRenderer({ data }: { data: FaqSectionData }) {
  if (!data.faqs?.length) return null

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {(data.title || data.description) && (
            <div className="mb-8 text-center">
              {data.title && (
                <h2 className="text-3xl font-bold text-[#2C3E6B]">{data.title}</h2>
              )}
              {data.description && (
                <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">{data.description}</p>
              )}
            </div>
          )}

          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div key={faq._key || i} className="rounded-xl border border-gray-200 bg-[#F9FAFB] p-5">
                <h3 className="mb-2 text-base font-bold text-[#2C3E6B]">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Mais dúvidas?{' '}
            <Link
              href="/perguntas-frequentes"
              className="font-semibold text-[#2C3E6B] hover:text-[#2E7B7F]"
            >
              Veja todas as perguntas frequentes
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
