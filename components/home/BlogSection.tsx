import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

import type { BlogPostsSectionData } from '@/types/cms'

const ARTICLES = [
  {
    title: 'Cuidados Essenciais com Idosos no Inverno',
    category: 'Saúde',
    excerpt: 'Dicas práticas para manter o conforto e a saúde durante os dias mais frios do ano.',
    date: '19/01/2025',
    href: '/blog/cuidados-inverno',
  },
  {
    title: 'Alimentação Saudável para a Terceira Idade',
    category: 'Nutrição',
    excerpt: 'Orientações nutricionais para uma dieta equilibrada e adaptada às necessidades dos idosos.',
    date: '14/01/2025',
    href: '/blog/alimentacao-saudavel',
  },
  {
    title: 'Importância dos Exercícios Físicos na Terceira Idade',
    category: 'Atividades',
    excerpt: 'Como a atividade física regular contribui para a qualidade de vida e autonomia.',
    date: '09/01/2025',
    href: '/blog/exercicios-fisicos',
  },
  {
    title: 'Saúde Mental: Cuidando do Emocional',
    category: 'Psicologia',
    excerpt: 'O cuidado emocional constante previne depressão, ansiedade e fortalece laços familiares durante o envelhecimento.',
    date: '05/01/2025',
    href: '/blog/saude-mental',
  },
]

type CmsArticle = NonNullable<BlogPostsSectionData['postsResolved']>[number]

interface BlogSectionProps {
  title?: string
  description?: string
  articles?: CmsArticle[]
}

function formatArticleDate(date?: string) {
  if (!date) {
    return ''
  }

  return new Date(date).toLocaleDateString('pt-BR')
}

export default function BlogSection({
  title = 'Conteúdos e Orientações',
  description = 'Artigos e dicas para ajudar a família a cuidar melhor de quem mais importa.',
  articles,
}: BlogSectionProps) {
  const contentArticles =
    articles && articles.length > 0
      ? articles.slice(0, 4).map((article) => ({
          title: article.title,
          category: article.category || 'Conteúdo',
          excerpt: article.excerpt || '',
          date: formatArticleDate(article.publishedAt),
          href: `/blog/${article.slug.current}`,
        }))
      : ARTICLES

  return (
    <section
      className="flex flex-col items-center px-5 py-10 lg:px-[80px] lg:py-[112px]"
      style={{
        background: '#FFFFFF',
        width: '100%',
      }}
    >
      <div
        className="flex w-full flex-col items-center gap-8 lg:w-[1280px] lg:gap-[48px]"
        style={{
          maxWidth: '100%',
        }}
      >
        <div
          className="flex w-full flex-col items-center gap-4 lg:gap-[16px]"
          style={{
            width: '100%',
          }}
        >
          <h2
            className="text-3xl lg:text-[48px]"
            style={{
              fontFamily: 'Arial',
              fontWeight: 700,
              lineHeight: '1',
              color: '#2C3E6B',
              textAlign: 'center',
              width: '100%',
            }}
          >
            {title}
          </h2>

          <p
            className="text-base lg:text-[18px]"
            style={{
              fontFamily: 'Arial',
              fontWeight: 400,
              lineHeight: '1.6',
              color: '#4A5565',
              textAlign: 'center',
              maxWidth: '672px',
            }}
          >
            {description}
          </p>
        </div>

        <div
          className="flex flex-col items-start gap-6 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-[24px]"
          style={{
            width: '100%',
          }}
        >
          {contentArticles.map((article) => (
            <article
              key={article.href}
              className="flex w-full flex-col items-start lg:w-[294px]"
              style={{
                background: '#FFFFFF',
                border: '1px solid #F3F4F6',
                boxShadow:
                  '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              <div
                className="h-[180px] lg:h-[192px]"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '16px',
                    background: '#D4A853',
                    boxShadow:
                      '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Arial',
                      fontWeight: 700,
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#FFFFFF',
                    }}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              <div
                className="flex w-full flex-col items-start gap-3 p-5 lg:gap-[16px] lg:p-[24px]"
                style={{
                  width: '100%',
                }}
              >
                <h3
                  className="text-base lg:text-[18px]"
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 700,
                    lineHeight: '1.5',
                    color: '#2C3E6B',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  <Link href={article.href}>{article.title}</Link>
                </h3>

                <p
                  className="text-sm lg:text-[14px]"
                  style={{
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    lineHeight: '1.6',
                    color: '#4A5565',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {article.excerpt}
                </p>

                <div
                  style={{
                    borderTop: '1px solid #F3F4F6',
                    width: '100%',
                  }}
                />

                <div
                  className="flex flex-row items-center justify-between"
                  style={{
                    width: '100%',
                  }}
                >
                  <div className="flex flex-row items-center" style={{ gap: '8px' }}>
                    <Calendar size={16} color="#6A7282" />
                    <span
                      style={{
                        fontFamily: 'Arial',
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '16px',
                        color: '#6A7282',
                      }}
                    >
                      {article.date}
                    </span>
                  </div>

                  <Link
                    href={article.href}
                    className="flex flex-row items-center"
                    style={{
                      gap: '8px',
                      textDecoration: 'none',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Arial',
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#4A4AAC',
                      }}
                    >
                      Ler artigo
                    </span>
                    <ArrowRight size={16} color="#4A4AAC" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/blog"
          className="flex w-full flex-row items-center justify-center lg:w-[350px]"
          style={{
            padding: '14px 0px',
            background: '#2C3E6B',
            borderRadius: '12px',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'Arial',
              fontWeight: 700,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#FFFFFF',
              textAlign: 'center',
              width: '100%',
            }}
          >
            Acessar Blog
          </span>
        </Link>
      </div>
    </section>
  )
}
