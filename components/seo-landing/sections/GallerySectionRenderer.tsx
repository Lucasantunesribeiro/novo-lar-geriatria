import Image from 'next/image'

type GalleryData = {
  title?: string
  description?: string
  layout?: 'collage' | 'grid' | 'carousel'
  images?: Array<{ _key?: string; url?: string; alt?: string; caption?: string }>
}

export function GallerySectionRenderer({ data }: { data: GalleryData }) {
  if (!data.images?.length) {
    return null
  }

  const columnClass =
    data.layout === 'grid' ? 'md:grid-cols-3' : data.layout === 'carousel' ? 'md:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-2 xl:grid-cols-3'

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {data.title ? <h2 className="text-center text-3xl font-bold text-[#2C3E6B] sm:text-4xl">{data.title}</h2> : null}
          {data.description ? <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-gray-600 sm:text-lg">{data.description}</p> : null}

          <div className={`mt-10 grid gap-6 ${columnClass}`}>
            {data.images.map((image, index) =>
              image.url ? (
                <div key={image._key || index} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.url}
                      alt={image.alt || 'Imagem da galeria Novo Lar'}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 45vw, 100vw"
                    />
                  </div>
                  {image.caption ? <div className="p-4 text-sm text-gray-600">{image.caption}</div> : null}
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
