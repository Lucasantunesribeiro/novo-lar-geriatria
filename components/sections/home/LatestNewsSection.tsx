'use client'

import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

const LATEST_NEWS = [
  {
    slug: 'cuidados-inverno',
    title: 'Cuidados Essenciais com Idosos no Inverno',
    category: 'Saúde',
    excerpt: 'O inverno requer atenção especial com a saúde dos idosos. Veja as principais recomendações para manter o bem-estar durante a estação mais fria do ano.',
    date: '2025-01-20',
  },
  {
    slug: 'alimentacao-saudavel',
    title: 'Alimentação Saudável para a Terceira Idade',
    category: 'Nutrição',
    excerpt: 'Dicas essenciais de nutrição adequada para manter a saúde e qualidade de vida dos idosos, com cardápio balanceado e ingredientes nutritivos.',
    date: '2025-01-15',
  },
  {
    slug: 'exercicios-fisicos',
    title: 'Importância dos Exercícios Físicos na Terceira Idade',
    category: 'Atividades',
    excerpt: 'Entenda como a atividade física regular contribui para o bem-estar físico e mental, fortalecendo corpo e mente na terceira idade.',
    date: '2025-01-10',
  },
  {
    slug: 'prevencao-quedas',
    title: 'Prevenção de Quedas em Idosos',
    category: 'Saúde',
    excerpt: 'Estratégias eficazes para prevenir quedas e acidentes domésticos, garantindo maior segurança e independência no dia a dia.',
    date: '2025-01-05',
  },
]

export default function LatestNewsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E6B] mb-4">
            Últimas Notícias
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fique informado sobre cuidados, saúde e bem-estar na terceira idade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LATEST_NEWS.map((news) => (
            <article
              key={news.slug}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              {/* Imagem de destaque - Placeholder gradiente */}
              <div className="h-48 bg-gradient-to-br from-gray-100 via-gray-50 to-white relative overflow-hidden">
                {/* Badge de categoria */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3 py-1.5 bg-[#D4A853] text-white text-xs font-bold rounded-full shadow-md">
                    {news.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Título */}
                <h3 className="font-bold text-lg text-[#2C3E6B] mb-3 group-hover:text-[#4a4aac] transition-colors line-clamp-2">
                  {news.title}
                </h3>

                {/* Descrição */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {news.excerpt}
                </p>

                {/* Data de publicação */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 pb-4 border-t border-gray-100 pt-4">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={news.date}>
                    {new Date(news.date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                </div>

                {/* Link "Ler mais" */}
                <Link
                  href={`/blog/${news.slug}`}
                  className="inline-flex items-center gap-2 text-[#4a4aac] font-semibold text-sm hover:gap-3 transition-all mt-auto"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
