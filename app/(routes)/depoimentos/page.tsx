import type { Metadata } from 'next'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import AvatarAvaliacao from '@/components/ui/AvatarAvaliacao'
import { avaliacoesParaExibir, type AvaliacaoGoogle } from '@/lib/avaliacoes'
import { buildCmsBackedMetadata, renderCmsBackedPage } from '@/lib/cms/route'
import { acharBloco } from '@/types/cms-blocos'
import { cx, classeTexto, estiloDeTexto } from '@/lib/cms/estilo'
import { fetchCmsPage } from '@/lib/cms/page'
import type { PaginaCartoes, PaginaDepoimentos, PaginaHero } from '@/types/cms-blocos'
import { Star, Quote, Heart } from 'lucide-react'

const fallbackMetadata: Metadata = {
  title: 'Depoimentos de Famílias - Avaliações e Relatos Reais | Novo Lar Geriatria',
  description: 'Leia depoimentos reais de famílias que confiam no cuidado da Novo Lar Geriatria. Histórias de carinho, profissionalismo e dedicação no atendimento aos idosos em Porto Alegre.',
  keywords: ['depoimentos novo lar', 'avaliações residencial geriátrico', 'relatos famílias', 'testemunhos casa de repouso', 'satisfação clientes porto alegre'],
  openGraph: {
    title: 'Depoimentos de Famílias - Avaliações e Relatos Reais | Novo Lar Geriatria',
    description: 'Leia depoimentos reais de famílias que confiam no cuidado da Novo Lar Geriatria. Histórias de carinho e profissionalismo.',
    url: '/depoimentos',
    type: 'website',
    images: [
      {
        url: '/Novo-Lar-Logo-7.png',
        width: 1200,
        height: 630,
        alt: 'Depoimentos Novo Lar Geriatria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Depoimentos de Famílias | Novo Lar Geriatria',
    description: 'Leia relatos reais de famílias que confiam no nosso cuidado.',
    images: ['/Novo-Lar-Logo-7.png'],
  },
  alternates: {
    canonical: '/depoimentos',
  },
}

const TESTIMONIALS = [
  {
    name: 'Jacqueline',
    rating: 5,
    text: 'Aproveito para agradecer-lhe todo o atendimento prestado durante a breve estada dele com vocês, e um agradecimento especial à enfermagem, atendentes e funcionárias da clinica, que tanto carinho tiveram com meu pai. Nossa família é muito grata a todos vocês.',
    highlight: true
  },
  {
    name: 'Erli Lima',
    rating: 5,
    text: 'Excelente Casa de repouso para Idosos em Porto Alegre!',
    highlight: true
  },
  {
    name: 'Leonardo Dutra',
    rating: 5,
    text: 'Casa com excelente estrutura e ótimos profissionais para cuidá-los!',
    highlight: false
  },
  {
    name: 'Matheus Giovani',
    rating: 5,
    text: 'Excelente atendimento. Muito cuidado e carinho dedicado aos idosos. Lugar lindo e higienizado.',
    highlight: false
  },
]

export async function generateMetadata() {
  return buildCmsBackedMetadata('/depoimentos', fallbackMetadata)
}

interface LegacyTestimonialsPageProps {
  hero?: PaginaHero
  destaques?: PaginaCartoes
  outros?: PaginaCartoes
  lista?: PaginaDepoimentos
  /** Avaliacoes reais de 5 estrelas, de lib/avaliacoes.ts. */
  avaliacoes?: AvaliacaoGoogle[]
}

function LegacyTestimonialsPage({
  hero,
  destaques,
  outros,
  lista,
  avaliacoes,
}: LegacyTestimonialsPageProps = {}) {
  // Ordem: o que o cliente escreveu no Studio ganha; depois as avaliacoes
  // reais (Google, ou a lista guardada no repositorio); por ultimo as quatro
  // que estavam presas nesta pagina.
  const todos =
    lista?.depoimentos && lista.depoimentos.length > 0
      ? lista.depoimentos.map((d, i) => ({
          name: d.nome || TESTIMONIALS[i]?.name || '',
          rating: typeof d.nota === 'number' ? d.nota : TESTIMONIALS[i]?.rating ?? 5,
          text: d.texto || TESTIMONIALS[i]?.text || '',
          highlight: d.destaque ?? false,
          foto: undefined as string | undefined,
        }))
      : avaliacoes && avaliacoes.length > 0
        ? // Os dois textos mais longos viram destaque: o cartao de destaque e
          // maior e fica com cara de vazio quando recebe uma frase de dez
          // palavras. O Google nao tem campo de "destaque".
          (() => {
            const porTamanho = [...avaliacoes].sort((a, b) => b.text.length - a.text.length)
            const emDestaque = new Set(porTamanho.slice(0, 2).map((a) => a.id))
            return avaliacoes.map((a) => ({
              name: a.author,
              rating: a.rating,
              text: a.text,
              highlight: emDestaque.has(a.id),
              foto: a.profilePhoto,
            }))
          })()
        : TESTIMONIALS.map((t) => ({ ...t, foto: undefined as string | undefined }))

  const featuredTestimonials = todos.filter(t => t.highlight)
  const regularTestimonials = todos.filter(t => !t.highlight)

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2C3E6B] via-[#3d5285] to-[#2E7B7F] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[#D4A853]" />
              <span className="text-sm font-semibold">
                {hero?.etiqueta || 'Histórias reais de famílias satisfeitas'}
              </span>
            </div>

            <h1
              className={cx('text-4xl md:text-6xl font-bold mb-6 leading-tight', classeTexto(hero?.estiloTitulo))}
              style={estiloDeTexto(hero?.estiloTitulo)}
            >
              {hero?.titulo || 'Depoimentos'}
            </h1>

            <p
              className={cx('text-xl md:text-2xl text-white/90 leading-relaxed', classeTexto(hero?.estiloDescricao))}
              style={estiloDeTexto(hero?.estiloDescricao)}
            >
              {hero?.descricao || 'Veja o que dizem as famílias que confiam em nosso trabalho'}
            </p>

            <div className="mt-8 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} className="text-[#D4A853] fill-[#D4A853]" />
              ))}
              <span className="ml-3 text-2xl font-bold">5.0</span>
            </div>
            <p className="mt-2 text-white/80">Avaliação média de nossos residentes e familiares</p>
          </div>
        </div>
      </section>

      {/* Depoimentos em Destaque */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={cx('text-4xl md:text-5xl font-bold text-[#2C3E6B] mb-4', classeTexto(destaques?.estiloTitulo))}
              style={estiloDeTexto(destaques?.estiloTitulo)}
            >
              {destaques?.titulo || 'Depoimentos em Destaque'}
            </h2>
            <p
              className={cx('text-xl text-gray-600 max-w-2xl mx-auto', classeTexto(destaques?.estiloDescricao))}
              style={estiloDeTexto(destaques?.estiloDescricao)}
            >
              {destaques?.descricao || 'Histórias que nos motivam a continuar'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-[#2E7B7F]/5 to-[#2C3E6B]/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-[#2E7B7F]/20 relative"
              >
                <Quote className="absolute top-6 right-6 text-[#2E7B7F] opacity-10 group-hover:opacity-20 transition-opacity" size={64} />

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={i < testimonial.rating ? 'text-[#D4A853] fill-[#D4A853]' : 'text-gray-300'}
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 border-t-2 border-[#2E7B7F]/20 pt-4">
                  <AvatarAvaliacao nome={testimonial.name} foto={testimonial.foto} tamanho={48} />
                  <div className="min-w-0">
                    <p className="truncate font-bold text-[#2C3E6B] text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">Avaliação no Google</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outros Depoimentos */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={cx('text-4xl md:text-5xl font-bold text-[#2C3E6B] mb-4', classeTexto(outros?.estiloTitulo))}
              style={estiloDeTexto(outros?.estiloTitulo)}
            >
              {outros?.titulo || 'Mais Depoimentos'}
            </h2>
            <p
              className={cx('text-xl text-gray-600 max-w-2xl mx-auto', classeTexto(outros?.estiloDescricao))}
              style={estiloDeTexto(outros?.estiloDescricao)}
            >
              {outros?.descricao || 'Centenas de famílias satisfeitas'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 relative"
              >
                <Quote className="absolute top-4 right-4 text-[#2E7B7F] opacity-10" size={40} />

                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < testimonial.rating ? 'text-[#D4A853] fill-[#D4A853]' : 'text-gray-300'}
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 italic leading-relaxed text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 border-t border-gray-200 pt-3">
                  <AvatarAvaliacao nome={testimonial.name} foto={testimonial.foto} tamanho={40} />
                  <div className="min-w-0">
                    <p className="truncate font-bold text-[#2C3E6B]">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">Avaliação no Google</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
        O carrossel <GoogleReviews /> saiu daqui. Ele lia /api/reviews, que
        agora chama a mesma funcao `avaliacoesParaExibir()` que alimenta as
        duas secoes acima: mesma lista, mesma ordem, mesmo filtro de 5
        estrelas. Ficaria a pagina inteira repetida logo abaixo dela mesma.
        Nas outras paginas — /obrigado, /servicos/[slug], /sobre/* e as
        landings — o carrossel continua, porque la ele nao repete nada.
      */}

      <FooterWrapper />
    </div>
  )
}

export default async function TestimonialsPage() {
  const cmsPage = await fetchCmsPage('/depoimentos')
  const avaliacoes = await avaliacoesParaExibir()
  const cartoes = cmsPage?.blocos?.filter((bloco) => bloco._type === 'paginaCartoes') as
    | PaginaCartoes[]
    | undefined

  return renderCmsBackedPage(
    '/depoimentos',
    <LegacyTestimonialsPage
      hero={acharBloco(cmsPage?.blocos, 'paginaHero')}
      destaques={cartoes?.[0]}
      outros={cartoes?.[1]}
      lista={acharBloco(cmsPage?.blocos, 'paginaDepoimentos')}
      avaliacoes={avaliacoes.avaliacoes}
    />
  )
}



