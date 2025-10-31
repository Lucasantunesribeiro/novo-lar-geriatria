import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Share2, BookOpen, Clock } from 'lucide-react'

const MOCK_POST = {
  title: 'Cuidados Essenciais com Idosos no Inverno',
  category: 'Saúde',
  date: '2025-01-20',
  author: 'Dra. Maria Santos',
  readTime: '5 min',
  content: `
O inverno é uma estação que requer atenção especial com os idosos, pois as baixas temperaturas podem afetar significativamente sua saúde e bem-estar. Neste artigo, vamos abordar os principais cuidados que devem ser tomados durante os meses mais frios do ano.

## Temperatura Ambiente

Manter a temperatura interna adequada é fundamental. O ideal é que o ambiente fique entre 20°C e 22°C. Evite mudanças bruscas de temperatura, que podem causar choque térmico e comprometer o sistema imunológico.

## Hidratação

Mesmo no frio, a hidratação continua sendo essencial. Idosos tendem a sentir menos sede, mas o corpo continua necessitando de água. Ofereça líquidos regularmente, como água, chás quentes e sopas nutritivas.

## Vestuário Adequado

Vista o idoso em camadas, permitindo que a roupa seja ajustada conforme a temperatura. Dê atenção especial às extremidades: mãos, pés e cabeça, que perdem calor mais rapidamente.

## Alimentação Reforçada

No inverno, o corpo precisa de mais energia para manter a temperatura corporal. Inclua alimentos nutritivos e calóricos na dieta, priorizando sopas, caldos, legumes cozidos e proteínas.

## Vacinação

Mantenha a carteira de vacinação em dia, especialmente contra gripe e pneumonia, doenças mais comuns no inverno e que podem ser graves para idosos.

## Exercícios e Mobilidade

Mesmo com frio, é importante manter alguma atividade física. Exercícios leves dentro de casa ajudam a manter a circulação e o aquecimento corporal.

## Conclusão

Com esses cuidados simples, é possível garantir que o idoso passe pelo inverno com conforto e segurança. Na Novo Lar Geriatria, nossa equipe está sempre atenta a todos esses detalhes para proporcionar o melhor cuidado aos nossos residentes.
  `,
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#4A9B9F] hover:text-[#2C3E6B] transition-colors mb-8 font-semibold"
          >
            <ArrowLeft size={20} />
            Voltar ao Blog
          </Link>

          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-[#D4A853] text-white text-sm font-bold rounded-full mb-4">
              {MOCK_POST.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E6B] mb-6 leading-tight">
              {MOCK_POST.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User size={20} className="text-[#4A9B9F]" />
                <span className="font-semibold">{MOCK_POST.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-[#4A9B9F]" />
                {new Date(MOCK_POST.date).toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-[#4A9B9F]" />
                {MOCK_POST.readTime} de leitura
              </div>
            </div>
          </div>

          <div className="h-96 bg-gradient-to-br from-[#4A9B9F] to-[#2C3E6B] rounded-2xl mb-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-20"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            {MOCK_POST.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={i} className="text-3xl font-bold text-[#2C3E6B] mt-10 mb-4">
                    {paragraph.replace('##', '').trim()}
                  </h2>
                )
              }
              return (
                <p key={i} className="text-gray-700 text-lg leading-relaxed mb-6">
                  {paragraph.trim()}
                </p>
              )
            })}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-[#4A9B9F]/5 to-[#2C3E6B]/5 rounded-2xl border-2 border-[#4A9B9F]/20">
            <div className="flex items-start gap-4">
              <BookOpen className="w-12 h-12 text-[#4A9B9F] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-[#2C3E6B] mb-3">
                  Tem dúvidas sobre cuidados geriátricos?
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Nossa equipe multidisciplinar está pronta para ajudar você e sua família com orientações especializadas
                </p>
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 bg-[#D4A853] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#c49943] transition-all shadow-lg hover:shadow-xl"
                >
                  Falar com Especialista
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <button className="flex items-center gap-2 text-[#4A9B9F] hover:text-[#2C3E6B] font-semibold transition-colors">
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
