import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Sparkles, BookOpen, TrendingUp } from 'lucide-react'

const BLOG_POSTS = [
  {
    slug: 'cuidados-inverno',
    title: 'Cuidados Essenciais com Idosos no Inverno',
    category: 'Saúde',
    excerpt: 'O inverno requer atenção especial com a saúde dos idosos. Veja as principais recomendações para manter o bem-estar nesta estação.',
    date: '2025-01-20',
    author: 'Dra. Maria Santos',
    featured: true
  },
  {
    slug: 'alimentacao-saudavel',
    title: 'Alimentação Saudável para a Terceira Idade',
    category: 'Nutrição',
    excerpt: 'Dicas essenciais de nutrição adequada para manter a saúde e qualidade de vida dos idosos com uma dieta balanceada.',
    date: '2025-01-15',
    author: 'Nutricionista Ana Costa',
    featured: true
  },
  {
    slug: 'exercicios-fisicos',
    title: 'Importância dos Exercícios Físicos na Terceira Idade',
    category: 'Atividades',
    excerpt: 'Entenda como a atividade física regular contribui para o bem-estar físico e mental dos idosos.',
    date: '2025-01-10',
    author: 'Fisioterapeuta Carlos Silva',
    featured: false
  },
  {
    slug: 'saude-mental',
    title: 'Saúde Mental: Cuidando do Emocional',
    category: 'Psicologia',
    excerpt: 'A importância do acompanhamento psicológico para idosos e suas famílias no processo de envelhecimento.',
    date: '2025-01-05',
    author: 'Psicóloga Patricia Lima',
    featured: false
  },
  {
    slug: 'escolher-clinica',
    title: 'Como Escolher uma Clínica Geriátrica',
    category: 'Orientações',
    excerpt: 'Guia completo para escolher o melhor lugar para cuidar do seu ente querido com segurança e qualidade.',
    date: '2024-12-28',
    author: 'Equipe Novo Lar',
    featured: false
  },
  {
    slug: 'atividades-cognitivas',
    title: 'Atividades Cognitivas para Estimular a Mente',
    category: 'Atividades',
    excerpt: 'Jogos e exercícios mentais que ajudam a manter a mente ativa, saudável e prevenir o declínio cognitivo.',
    date: '2024-12-20',
    author: 'Terapeuta Ocupacional João Oliveira',
    featured: false
  },
]

const CATEGORIES = ['Todos', 'Saúde', 'Nutrição', 'Atividades', 'Psicologia', 'Orientações']

export default function BlogPage() {
  const featuredPosts = BLOG_POSTS.filter(p => p.featured)
  const regularPosts = BLOG_POSTS.filter(p => !p.featured)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2C3E6B] via-[#3d5285] to-[#4A9B9F] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-[#D4A853]" />
              <span className="text-sm font-semibold">Conhecimento e informação de qualidade</span>
            </div>

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
            <TrendingUp className="w-8 h-8 text-[#4A9B9F]" />
            <h2 className="text-4xl font-bold text-[#2C3E6B]">Artigos em Destaque</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="h-64 bg-gradient-to-br from-[#4A9B9F] to-[#2C3E6B] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-20"></div>
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#D4A853] text-white text-xs font-bold rounded-full mb-3">
                    {post.category}
                  </span>

                  <h3 className="text-2xl font-bold text-[#2C3E6B] mb-3 group-hover:text-[#4A9B9F] transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

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
                    className="inline-flex items-center gap-2 text-[#4A9B9F] font-semibold hover:gap-3 transition-all"
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
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="h-48 bg-gradient-to-br from-[#4A9B9F] to-[#2C3E6B]"></div>

                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-[#2C3E6B] text-xs font-semibold rounded mb-3">
                    {post.category}
                  </span>

                  <h3 className="text-lg font-bold text-[#2C3E6B] mb-2 hover:text-[#4A9B9F] transition">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-[#4A9B9F] text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Ler mais
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2C3E6B] to-[#4A9B9F] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quer Conhecer Nossos Serviços?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Agende uma visita e conheça de perto como cuidamos dos nossos residentes
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-[#D4A853] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#c49943] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Falar Conosco
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
