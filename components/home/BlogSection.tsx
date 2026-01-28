import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

const ARTICLES = [
  {
    title: 'Cuidados Essenciais com Idosos no Inverno',
    category: 'Saúde',
    excerpt: 'Dicas práticas para manter o conforto e a saúde durante os dias mais frios do ano.',
    date: '19/01/2025',
  },
  {
    title: 'Alimentação Saudável para a Terceira Idade',
    category: 'Nutrição',
    excerpt: 'Orientações nutricionais para uma dieta equilibrada e adaptada às necessidades dos idosos.',
    date: '14/01/2025',
  },
  {
    title: 'Importância dos Exercícios Físicos na Terceira Idade',
    category: 'Atividades',
    excerpt: 'Como a atividade física regular contribui para a qualidade de vida e autonomia.',
    date: '09/01/2025',
  },
  {
    title: 'Prevenção de Quedas em Idosos',
    category: 'Saúde',
    excerpt: 'Estratégias e adaptações do ambiente para reduzir riscos e aumentar a segurança.',
    date: '04/01/2025',
  },
]

export default function BlogSection() {
  return (
    <section
      className="flex flex-col items-center px-5 py-10 lg:px-[80px] lg:py-[112px]"
      style={{
        background: '#FFFFFF',
        width: '100%',
      }}
    >
      <div
        className="flex flex-col items-center gap-8 lg:gap-[48px] w-full lg:w-[1280px]"
        style={{
          maxWidth: '100%',
        }}
      >
        {/* Header */}
        <div
          className="flex flex-col items-center gap-4 lg:gap-[16px]"
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
            Conteúdos e Orientações
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
            Artigos e dicas para ajudar a família a cuidar melhor de quem mais importa.
          </p>
        </div>

        {/* Grid de Artigos */}
        <div
          className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-[24px]"
          style={{
            width: '100%',
            flexWrap: 'wrap',
          }}
        >
          {ARTICLES.map((article) => (
            <article
              key={article.title}
              className="flex flex-col items-start w-full lg:w-[294px]"
              style={{
                background: '#FFFFFF',
                border: '1px solid #F3F4F6',
                boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              {/* Imagem do Topo com Badge */}
              <div
                className="h-[180px] lg:h-[192px]"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
                  position: 'relative',
                }}
              >
                {/* Badge de Categoria */}
                <div
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '16px',
                    background: '#D4A853',
                    boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
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

              {/* Conteúdo do Card */}
              <div
                className="flex flex-col items-start p-5 lg:p-[24px] gap-3 lg:gap-[16px]"
                style={{
                  width: '100%',
                }}
              >
                {/* Título do Artigo */}
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
                  {article.title}
                </h3>

                {/* Excerpt */}
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

                {/* Divisória */}
                <div
                  style={{
                    borderTop: '1px solid #F3F4F6',
                    width: '100%',
                  }}
                />

                {/* Footer: Data e Link */}
                <div
                  className="flex flex-row justify-between items-center"
                  style={{
                    width: '100%',
                  }}
                >
                  {/* Data */}
                  <div
                    className="flex flex-row items-center"
                    style={{ gap: '8px' }}
                  >
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

                  {/* Link "Ler mais" */}
                  <Link
                    href="/blog"
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
                      Ler mais
                    </span>
                    <ArrowRight size={16} color="#4A4AAC" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Botão "Acessar Blog" */}
        <Link
          href="/blog"
          className="flex flex-row justify-center items-center w-full lg:w-[350px]"
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
