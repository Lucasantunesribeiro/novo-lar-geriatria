import { PortableText } from '@portabletext/react'

type RichTextData = {
  title?: string
  alignment?: 'left' | 'center'
  body?: any[]
}

export function RichTextSectionRenderer({ data }: { data: RichTextData }) {
  const centered = data.alignment === 'center'

  if (!data.title && !data.body?.length) {
    return null
  }

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`mx-auto max-w-4xl ${centered ? 'text-center' : ''}`}>
          {data.title ? (
            <h2 className="mb-6 text-3xl font-bold text-[#2C3E6B] sm:text-4xl">{data.title}</h2>
          ) : null}

          {data.body?.length ? (
            <div className="prose prose-lg max-w-none text-[#2C3E6B]/90 prose-headings:text-[#2C3E6B] prose-p:leading-relaxed">
              <PortableText value={data.body} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
