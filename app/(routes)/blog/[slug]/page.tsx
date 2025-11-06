import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Calendar, User, ArrowLeft, Share2, BookOpen, Clock } from 'lucide-react'
import { BLOG_POSTS, getBlogPostBySlug } from '@/lib/blog-data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Artigo não encontrado | Blog Novo Lar',
    }
  }

  const description = post.excerpt

  return {
    title: `${post.title} | Blog Novo Lar Geriatria`,
    description,
    openGraph: {
      title: `${post.title} | Blog Novo Lar Geriatria`,
      description,
      type: 'article',
      images: [{ url: post.image.src, alt: post.image.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [post.image.src],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const currentPost = post

  return (
    <div className="min-h-screen bg-white">
      <Header />

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
            <span className="inline-block px-4 py-2 bg-[#A67C2F] text-white text-sm font-bold rounded-full mb-5">
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
            {currentPost.content.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-3xl font-bold text-[#2C3E6B] mt-6">
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
            })}
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
                  className="inline-flex items-center gap-2 bg-[#A67C2F] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#A67C2F] transition-all shadow-lg hover:shadow-xl"
                >
                  Falar com Especialista
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <button className="flex items-center gap-2 text-[#2E7B7F] hover:text-[#2C3E6B] text-lg font-semibold transition-colors">
              <Share2 size={20} />
              Compartilhar este artigo
            </button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}



