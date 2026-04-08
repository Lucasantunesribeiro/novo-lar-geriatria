import Link from 'next/link'
import Image from 'next/image'

type BlogPostsData = {
  title?: string
  description?: string
  postsResolved?: Array<{
    _id: string
    title?: string
    slug?: { current?: string } | string
    excerpt?: string
    category?: string
    publishedAt?: string
    coverImage?: { url?: string; alt?: string }
    author?: { name?: string }
  }>
}

const BLOG_CATEGORY_LABELS: Record<string, string> = {
  cuidados: 'Cuidados',
  saude: 'Saúde',
  atividades: 'Atividades',
  noticias: 'Notícias',
  dicas: 'Dicas',
}

function resolveSlug(slug?: { current?: string } | string) {
  if (typeof slug === 'string') {
    return slug
  }

  return slug?.current || ''
}

function getCategoryLabel(category?: string) {
  if (!category) return ''
  return BLOG_CATEGORY_LABELS[category] || category
}

export function BlogPostsSectionRenderer({ data }: { data: BlogPostsData }) {
  if (!data.postsResolved?.length) {
    return null
  }

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {data.title ? <h2 className="text-center text-3xl font-bold text-[#2C3E6B] sm:text-4xl">{data.title}</h2> : null}
          {data.description ? <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-gray-600 sm:text-lg">{data.description}</p> : null}

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.postsResolved.map((post) => {
              const slug = resolveSlug(post.slug)
              return (
                <article key={post._id} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
                  {post.coverImage?.url ? (
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={post.coverImage.url}
                        alt={post.coverImage.alt || post.title || 'Imagem do artigo'}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 45vw, 100vw"
                      />
                    </div>
                  ) : null}
                  <div className="p-6">
                    {post.category ? <div className="text-xs font-semibold uppercase tracking-wide text-[#2E7B7F]">{getCategoryLabel(post.category)}</div> : null}
                    {post.title ? <h3 className="mt-3 text-xl font-bold text-[#2C3E6B]">{post.title}</h3> : null}
                    {post.excerpt ? <p className="mt-3 text-sm leading-relaxed text-gray-600">{post.excerpt}</p> : null}
                    <div className="mt-4 text-xs text-gray-500">
                      {[post.author?.name, post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('pt-BR') : null]
                        .filter(Boolean)
                        .join(' · ')}
                    </div>
                    {slug ? (
                      <Link href={`/blog/${slug}`} className="mt-5 inline-flex text-sm font-semibold text-[#2E7B7F] hover:underline">
                        Ler artigo
                      </Link>
                    ) : null}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
