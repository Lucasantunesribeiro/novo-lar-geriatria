import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, TrendingUp, User } from 'lucide-react'

import FooterWrapper from '@/components/layout/FooterWrapper'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import UnidadesCTA from '@/components/unidades/UnidadesCTA'
import { getBlogPostsSection, getHeroSection } from '@/lib/cms/legacy-page-content'
import { fetchCmsPage } from '@/lib/cms/page'
import { acharBloco } from '@/types/cms-blocos'
import { buildCmsBackedMetadata } from '@/lib/cms/route'
import { BLOG_POSTS } from '@/lib/blog-data'
import { getPageViewsDictionary } from '@/lib/sanity/queries'

const fallbackMetadata: Metadata = {
  title: 'Blog - Dicas e Informações sobre Cuidados com Idosos | Novo Lar Geriatria',
  description:
    'Artigos especializados sobre geriatria, nutrição, atividades físicas, saúde mental e cuidados com idosos. Informação de qualidade para familiares e cuidadores.',
  keywords: [
    'blog geriatria',
    'cuidados com idosos',
    'dicas terceira idade',
    'saúde do idoso',
    'nutrição geriátrica',
    'atividades para idosos',
    'como escolher casa de repouso',
  ],
  openGraph: {
    title: 'Blog - Dicas e Informacoes sobre Cuidados com Idosos | Novo Lar Geriatria',
    description:
      'Artigos especializados sobre geriatria, nutrição, atividades físicas, saúde mental e cuidados com idosos.',
    url: '/blog',
    type: 'website',
    images: [
      {
        url: '/Novo-Lar-Logo-7.png',
        width: 1200,
        height: 630,
        alt: 'Blog Novo Lar Geriatria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Dicas sobre Cuidados com Idosos | Novo Lar Geriatria',
    description: 'Artigos especializados sobre geriatria e cuidados com idosos.',
    images: ['/Novo-Lar-Logo-7.png'],
  },
  alternates: {
    canonical: '/blog',
  },
}

export async function generateMetadata() {
  return buildCmsBackedMetadata('/blog', fallbackMetadata)
}

type CmsBlogPost = NonNullable<
  NonNullable<ReturnType<typeof getBlogPostsSection>>['postsResolved']
>[number]

type BlogCard = {
  slug: string
  title: string
  category: string
  excerptHtml: string
  date: string
  author: string
  image: {
    src: string
    alt: string
  }
}

function normalizeCmsPost(post: CmsBlogPost): BlogCard {
  return {
    slug: post.slug.current,
    title: post.title,
    category: post.category || 'Conteudo',
    excerptHtml: post.excerpt || '',
    date: post.publishedAt || '',
    author: post.author?.name || 'Equipe Novo Lar',
    image: {
      src: post.coverImage?.url || '/placeholders/hero-home.jpg',
      alt: post.coverImage?.alt || post.title,
    },
  }
}

async function LegacyBlogPage({
  heroEyebrow,
  heroTitle,
  heroDescription,
  posts,
}: {
  heroEyebrow?: string
  heroTitle?: string
  heroDescription?: string
  posts: BlogCard[]
}) {
  const viewsDict = await getPageViewsDictionary()

  const sortedPosts = [...posts].sort((a, b) => {
    const viewsA = viewsDict[a.slug] || 0
    const viewsB = viewsDict[b.slug] || 0
    return viewsB - viewsA
  })

  const featuredPosts = sortedPosts.slice(0, 2)
  const regularPosts = sortedPosts.slice(2)

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] flex justify-center z-0">
        <div
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url(/placeholders/hero-home.jpg)' }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#F8F9FA]/90 to-[#E9ECEF]/95 lg:from-[#F8F9FA]/80 lg:to-[#E9ECEF]/90" />
        <div
          className="absolute inset-0 z-0 mix-blend-soft-light opacity-15 bg-center bg-cover"
          style={{ backgroundImage: 'url(/placeholders/pattern-overlay.png)' }}
        />

        <div className="relative z-10 flex flex-col items-center w-full px-4 py-16 sm:px-8 md:py-20 lg:py-24 max-w-[1440px]">
          <div className="flex flex-col items-center justify-center w-full max-w-[800px] text-center gap-6 lg:gap-8">
            <div className="flex flex-wrap items-center justify-center px-4 py-2 gap-2 bg-[#2C3E6B]/10 rounded-full">
              <span className="font-bold text-xs md:text-sm tracking-[3px] uppercase text-[#2C3E6B]/80 text-center">
                {heroEyebrow || 'Residencial Geriátrico e Hospedagem Assistida'}
              </span>
            </div>

            <h1 className="font-bold text-4xl md:text-5xl lg:text-[56px] lg:leading-[64px] text-[#2C3E6B]">
              {heroTitle || 'Blog Novo Lar'}
            </h1>

            <p className="font-normal text-lg md:text-xl lg:text-[20px] lg:leading-[28px] text-[#2C3E6B]/80">
              {heroDescription ||
                'Dicas, cuidados e informações especializadas sobre geriatria e bem-estar na terceira idade'}
            </p>

          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="w-8 h-8 text-[#2E7B7F]" />
            <h2 className="text-4xl font-bold text-[#2C3E6B]">Artigos mais vistos</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 45vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#D4A853] text-white text-xs font-bold rounded-full mb-3">
                    {post.category}
                  </span>

                  <h3 className="text-3xl font-bold text-[#2C3E6B] mb-4 group-hover:text-[#2E7B7F] transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p
                    className="text-lg text-gray-700 leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{ __html: post.excerptHtml }}
                  />

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      {post.author}
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#2E7B7F] font-semibold text-lg hover:gap-3 transition-all"
                  >
                    Ler artigo completo
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-[#2C3E6B] mb-8">Mais Artigos</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 30vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>

                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-[#2C3E6B] text-xs font-semibold rounded mb-3">
                    {post.category}
                  </span>

                  <h3 className="text-2xl font-bold text-[#2C3E6B] mb-3 hover:text-[#2E7B7F] transition">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p
                    className="text-base text-gray-700 leading-relaxed mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerptHtml }}
                  />

                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#2E7B7F] text-base font-semibold hover:gap-3 transition-all"
                  >
                    Ler mais
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <UnidadesCTA />

      <FooterWrapper />
    </div>
  )
}

export default async function BlogPage() {
  const cmsPage = await fetchCmsPage('/blog')
  // Bloco espelho tem prioridade; sem ele, a secao antiga; sem ela, o padrao.
  const hero = acharBloco(cmsPage?.blocos, 'paginaHero')
  const heroSection = getHeroSection(cmsPage)
  const postsSection = getBlogPostsSection(cmsPage)

  const blocoLista = acharBloco(cmsPage?.blocos, 'paginaListaBlog')
  const artigosDoBloco = (blocoLista?.itensArtigo ?? []) as Parameters<
    typeof normalizeCmsPost
  >[0][]

  const posts =
    artigosDoBloco.length > 0
      ? artigosDoBloco.map(normalizeCmsPost)
      : postsSection?.postsResolved && postsSection.postsResolved.length > 0
      ? postsSection.postsResolved.map(normalizeCmsPost)
      : BLOG_POSTS.map((post) => ({
          slug: post.slug,
          title: post.title,
          category: post.category,
          excerptHtml: post.excerptHtml,
          date: post.date,
          author: post.author,
          image: post.image,
        }))

  return LegacyBlogPage({
    heroEyebrow: hero?.etiqueta || heroSection?.eyebrow,
    heroTitle: hero?.titulo || heroSection?.title,
    heroDescription: hero?.descricao || heroSection?.description,
    posts,
  })
}
