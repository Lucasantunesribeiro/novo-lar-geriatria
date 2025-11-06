'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, Calendar } from 'lucide-react'

const FEATURED_POSTS = [
  {
    slug: 'cuidados-inverno',
    title: 'Cuidados Essenciais com Idosos no Inverno',
    category: 'Saúde',
    excerpt: 'O inverno requer atenção especial com a saúde dos idosos. Veja as principais recomendações.',
    date: '2025-01-20',
  },
  {
    slug: 'alimentacao-saudavel',
    title: 'Alimentação Saudável para a Terceira Idade',
    category: 'Nutrição',
    excerpt: 'Dicas essenciais de nutrição adequada para manter a saúde e qualidade de vida dos idosos.',
    date: '2025-01-15',
  },
  {
    slug: 'exercicios-fisicos',
    title: 'Importância dos Exercícios Físicos na Terceira Idade',
    category: 'Atividades',
    excerpt: 'Entenda como a atividade física regular contribui para o bem-estar físico e mental.',
    date: '2025-01-10',
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#8B6914] mb-3">Fique Informado</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E6B] mb-6">Últimas Notícias</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dicas, cuidados e informações especializadas sobre geriatria e bem-estar na terceira idade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {FEATURED_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="h-48 bg-gradient-to-br from-[#2E7B7F] to-[#2C3E6B] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.15),_transparent_55%)] opacity-60 mix-blend-screen"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[#8B6914] text-white text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2C3E6B] mb-3 group-hover:text-[#2E7B7F] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#2E7B7F] font-semibold hover:gap-3 transition-all group-hover:text-[#2C3E6B]"
                  >
                    Ler artigo completo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#2C3E6B] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1f2d4f] transition-all shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5" />
              Ver Todos os Artigos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
