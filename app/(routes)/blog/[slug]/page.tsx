import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Calendar, User, ArrowLeft, BookOpen, Clock } from 'lucide-react'
import { BLOG_POSTS, getBlogPostBySlug, type BlogPost } from '@/lib/blog-data'
import {
  getAllBlogPostSlugs as getSanityBlogPostSlugs,
  getBlogPostBySlug as getSanityBlogPostBySlug,
} from '@/lib/sanity/queries'
import ViewTracker from '@/components/blog/ViewTracker'
import ShareArticleButton from '@/components/blog/ShareArticleButton'
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/JsonLd'
import { withCanonicalPath, SITE_URL } from '@/lib/seo/metadata'

interface PageProps {
  params: Promise<{ slug: string }>
}

type CmsBlogPost = {
  title: string
  slug: { current: string }
  excerpt: string
  category?: string
  publishedAt?: string
  readTime?: string
  content?: any[]
  coverImage?: { url?: string; alt?: string }
  author?: { name?: string }
  seo?: { metaTitle?: string; metaDescription?: string; title?: string; description?: string }
}

type NormalizedBlogPost = {
  slug: string
  title: string
  category: string
  excerpt: string
  date: string
  author: string
  readTime: string
  image: { src: string; alt: string }
  content: any[]
  seo?: { metaTitle?: string; metaDescription?: string; title?: string; description?: string }
  isCms: boolean
}

const BLOG_CATEGORY_LABELS: Record<string, string> = {
  cuidados: 'Cuidados',
  saude: 'Saúde',
  atividades: 'Atividades',
  noticias: 'Notícias',
  dicas: 'Dicas',
}

function getBlogCategoryLabel(category?: string) {
  if (!category) return 'Blog'
  return BLOG_CATEGORY_LABELS[category] || category
}

function isCmsBlogPost(post: CmsBlogPost | BlogPost): post is CmsBlogPost {
  return typeof post.slug === 'object'
}

function normalizeBlogPost(post: CmsBlogPost | BlogPost | null | undefined): NormalizedBlogPost | null {
  if (!post) return null

  if (isCmsBlogPost(post)) {
    return {
      slug: post.slug.current,
      title: post.title,
      category: getBlogCategoryLabel(post.category),
      excerpt: post.excerpt,
      date: post.publishedAt || new Date().toISOString(),
      author: post.author?.name || 'Equipe Novo Lar',
      readTime: post.readTime || '5 min',
      image: {
        src: post.coverImage?.url || '/Novo-Lar-Logo-7.png',
        alt: post.coverImage?.alt || post.title,
      },
      content: post.content || [],
      seo: post.seo,
      isCms: true as const,
    }
  }

  return {
    slug: post.slug,
    title: post.title,
    category: getBlogCategoryLabel(post.category),
    excerpt: post.excerpt,
    date: post.date,
    author: post.author,
    readTime: post.readTime,
    image: post.image,
    content: post.content,
    seo: undefined,
    isCms: false as const,
  }
}

export async function generateStaticParams() {
  const cmsSlugs = await getSanityBlogPostSlugs()
  const slugs = new Set([
    ...BLOG_POSTS.map((post) => post.slug),
    ...cmsSlugs.map((post) => post.slug),
  ])

  return Array.from(slugs).map((slug) => ({ slug }))
}

export const dynamicParams = true

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const sanityPost = await getSanityBlogPostBySlug(slug)
  const post = normalizeBlogPost(sanityPost) || normalizeBlogPost(getBlogPostBySlug(slug))

  if (!post) {
    return {
      title: 'Artigo não encontrado | Blog Novo Lar',
    }
  }

  const description = post.excerpt

  return withCanonicalPath({
    title: post.seo?.metaTitle || post.seo?.title || `${post.title} | Blog Novo Lar Geriatria`,
    description: post.seo?.metaDescription || post.seo?.description || description,
    openGraph: {
      title: post.seo?.metaTitle || post.seo?.title || `${post.title} | Blog Novo Lar Geriatria`,
      description: post.seo?.metaDescription || post.seo?.description || description,
      type: 'article',
      images: [{ url: post.image.src, alt: post.image.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [post.image.src],
    },
  }, `/blog/${post.slug}`)
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const sanityPost = await getSanityBlogPostBySlug(slug)
  const post = normalizeBlogPost(sanityPost) || normalizeBlogPost(getBlogPostBySlug(slug))

  if (!post) {
    notFound()
  }

  const currentPost = post

  const baseUrl = SITE_URL

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />
      <ArticleSchema
        title={currentPost.title}
        description={currentPost.excerpt}
        url={`${baseUrl}/blog/${currentPost.slug}`}
        imageUrl={currentPost.image.src}
        datePublished={currentPost.date}
        author={currentPost.author}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'Blog', url: `${baseUrl}/blog` },
          { name: currentPost.title, url: `${baseUrl}/blog/${currentPost.slug}` },
        ]}
      />
      <ViewTracker slug={currentPost.slug} />

      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#2E7B7F] hover:text-[#2C3E6B] transition-colors mb-8 font-semibold"
          >
            <ArrowLeft size={20} />
            Voltar ao Blog
          </Link>

          <div className="mb-10">
            <span className="inline-block px-4 py-2 bg-[#D4A853] text-white text-sm font-bold rounded-full mb-5">
              {currentPost.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E6B] mb-6 leading-tight">
              {currentPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-base">
              <div className="flex items-center gap-2">
                <User size={20} className="text-[#2E7B7F]" />
                <span className="font-semibold">{currentPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-[#2E7B7F]" />
                {new Date(currentPost.date).toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-[#2E7B7F]" />
                {currentPost.readTime} de leitura
              </div>
            </div>
          </div>

          <div className="relative h-[420px] w-full overflow-hidden rounded-3xl mb-12">
            <Image
              src={currentPost.image.src}
              alt={currentPost.image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 70vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>

          <div className="space-y-8 text-xl leading-relaxed text-gray-800">
            {currentPost.isCms ? (
              <PortableText
                value={currentPost.content}
                components={{
                  block: {
                    normal: ({ children }) => <p className="text-[#2C3E6B]/90">{children}</p>,
                    h2: ({ children }) => (
                      <h2 className="mt-6 text-3xl font-bold text-[#2C3E6B]">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="mt-4 text-2xl font-bold text-[#2C3E6B]">{children}</h3>
                    ),
                  },
                }}
              />
            ) : (
              currentPost.content.map((block, index) => {
                if (block.type === 'heading') {
                  return (
                    <h2 key={index} className="mt-6 text-3xl font-bold text-[#2C3E6B]">
                      {block.text}
                    </h2>
                  )
                }

                return (
                  <p
                    key={index}
                    className="text-[#2C3E6B]/90"
                    dangerouslySetInnerHTML={{ __html: block.text }}
                  />
                )
              })
            )}
          </div>

          <div className="mt-14 rounded-2xl border-2 border-[#2E7B7F]/20 bg-gradient-to-br from-[#2E7B7F]/10 to-[#2C3E6B]/5 p-9 shadow-sm">
            <div className="flex items-start gap-5">
              <BookOpen className="w-12 h-12 text-[#2E7B7F] flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-bold text-[#2C3E6B] mb-4">
                  Tem dúvidas sobre cuidados geriátricos?
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Nossa equipe multidisciplinar está pronta para ajudar você e sua família com orientações especializadas.
                </p>
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 bg-[#D4A853] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#D4A853] transition-all shadow-lg hover:shadow-xl"
                >
                  Falar com Especialista
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <ShareArticleButton
              title={currentPost.title}
              text={currentPost.excerpt}
              url={`${baseUrl}/blog/${currentPost.slug}`}
            />
          </div>
        </div>
      </article>

      <FooterWrapper />
    </div>
  )
}
