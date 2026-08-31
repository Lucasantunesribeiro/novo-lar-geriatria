import TextoRico from '@/components/cms/TextoRico'

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
    <section className="bg-[#F9FAFB] py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/*
          Cartao branco sobre fundo claro, como as outras secoes desta pagina.
          Antes era texto solto no branco, sem moldura e — por causa do `prose`
          morto, ver components/cms/TextoRico.tsx — sem espaco entre paragrafos.
        */}
        <div
          className={`mx-auto max-w-4xl rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-sm sm:p-10 ${
            centered ? 'text-center' : ''
          }`}
        >
          {data.title ? (
            <>
              <h2 className="text-3xl font-bold text-[#2C3E6B] sm:text-4xl">{data.title}</h2>
              <div
                className={`mt-4 mb-7 h-px w-24 bg-[#D4A853] ${centered ? 'mx-auto' : ''}`}
              />
            </>
          ) : null}

          {data.body?.length ? <TextoRico value={data.body} /> : null}
        </div>
      </div>
    </section>
  )
}
