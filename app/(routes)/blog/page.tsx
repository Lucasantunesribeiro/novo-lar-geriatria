import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GoogleReviews from '@/components/sections/GoogleReviews'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowRight, Sparkles, BookOpen, TrendingUp } from 'lucide-react'
import { FEATURED_BLOG_POSTS, REGULAR_BLOG_POSTS } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog - Dicas e Informações sobre Cuidados com Idosos | Novo Lar Geriatria',
  description: 'Artigos especializados sobre geriatria, nutrição, atividades físicas, saúde mental e cuidados com idosos. Informação de qualidade para familiares e cuidadores.',
  keywords: ['blog geriatria', 'cuidados com idosos', 'dicas terceira idade', 'saúde do idoso', 'nutrição geriátrica', 'atividades para idosos', 'como escolher casa de repouso'],
  openGraph: {
    title: 'Blog - Dicas e Informações sobre Cuidados com Idosos | Novo Lar Geriatria',
    description: 'Artigos especializados sobre geriatria, nutrição, atividades físicas, saúde mental e cuidados com idosos.',
    url: 'https://novolargeriatria.com.br/blog',
    type: 'website',
    images: [
      {
        url: 'https://novolargeriatria.com.br/Novo-Lar-Logo-7.png',
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
    images: ['https://novolargeriatria.com.br/Novo-Lar-Logo-7.png'],
  },
  alternates: {
    canonical: 'https://novolargeriatria.com.br/blog',
  },
}

export default function BlogPage() {
  const featuredPosts = FEATURED_BLOG_POSTS
  const regularPosts = REGULAR_BLOG_POSTS

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2C3E6B] via-[#3d5285] to-[#2E7B7F] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-white/80 mb-3">
              Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Blog Novo Lar
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Dicas, cuidados e informações especializadas sobre geriatria e bem-estar na terceira idade
            </p>
          </div>
        </div>
      </section>

      {/* Artigos em Destaque */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="w-8 h-8 text-[#2E7B7F]" />
            <h2 className="text-4xl font-bold text-[#2C3E6B]">Artigos em Destaque</h2>
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
                  <span className="inline-block px-3 py-1 bg-[#B8842F] text-white text-xs font-bold rounded-full mb-3">
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

          {/* Outros Artigos */}
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

      {/* Avaliações do Google */}
      <GoogleReviews />

      <Footer />
    </div>
  )
}


