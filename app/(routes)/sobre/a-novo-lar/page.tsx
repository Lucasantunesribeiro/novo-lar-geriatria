import type { Metadata } from 'next'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import GoogleReviews from '@/components/sections/GoogleReviews'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { buildCmsBackedMetadata, renderCmsBackedPage } from '@/lib/cms/route'
import { acharBloco } from '@/types/cms-blocos'
import { cx, classeTexto, estiloDeTexto } from '@/lib/cms/estilo'
import { fetchCmsPage } from '@/lib/cms/page'
import type { PaginaHero, PaginaHistoria, PaginaPilares } from '@/types/cms-blocos'
import Image from 'next/image'
import Link from 'next/link'
import { withCanonicalPath } from '@/lib/seo/metadata'

const fallbackMetadata: Metadata = withCanonicalPath({
  title: 'A Novo Lar: Nossa História e Missão | Novo Lar Geriatria',
  description:
    'Conheça a história da Novo Lar Geriatria: fundada em 1994, mais de 30 anos cuidando de idosos em Porto Alegre com equipe multidisciplinar, estrutura completa e atendimento humanizado.',
  openGraph: {
    title: 'A Novo Lar: Nossa História e Missão',
    description:
      'Desde 1994 oferecemos cuidados especializados e humanizados para idosos em Porto Alegre. Conheça nossa história, missão e valores.',
  },
}, '/sobre/a-novo-lar')
import {
  Sparkles,
  Target,
  Eye,
  Heart,
  Users,
  CheckCircle2,
  HandHeart,
  ArrowRight,
  Phone,
} from 'lucide-react'

const HISTORY_PARAGRAPHS = [
  'A NOVO LAR — Hospedagem Assistida com Qualidade®, empresa gaúcha fundada em 1994, foi idealizada para proporcionar conforto, tranquilidade e a melhor qualidade de vida na 3ª idade. Nasceu da visão empreendedora de seus sócios, cuja experiência técnica e administrativa de mais de 40 anos na área da saúde e hospitalar garante seriedade e transparência.',
  'Nosso compromisso é dar suporte integral ao idoso e sua família com carinho e respeito. Combinamos hotelaria com assistência médica e de enfermagem 24 horas por dia, funcionando como clínica geriátrica e casa de repouso com equipe multidisciplinar dedicada e experiente.',
  'Na geriatria Novo Lar você encontra hospedagem permanente ou temporária em Porto Alegre. Cada unidade conta com estrutura completa e profissionais focados no atendimento integral ao idoso e suas necessidades, para que o conforto e o bem-estar estejam sempre presentes.',
  "Atualmente, a NOVO LAR — Hospedagem Assistida com Qualidade® dispõe de três estabelecimentos em Porto Alegre, situados nos bairros Moinhos de Vento e Passo d'Areia, integrados ao cotidiano da cidade e próximos aos principais serviços de saúde.",
]

const VALUE_ITEMS = [
  'Garantir a satisfação e a confiança de nossos clientes.',
  'Trabalhar com dignidade, transparência e ética.',
  'Manter uma equipe sinérgica com foco em excelência.',
  'Praticar a sustentabilidade social, econômica e ambiental.',
]

const HIGHLIGHTS = [
  {
    value: '1994',
    label: 'Ano de fundação',
    description: 'Tradição gaúcha em cuidado especializado para idosos.',
  },
  {
    value: '3',
    label: 'Unidades em Porto Alegre',
    description: 'Estrutura presencial nos bairros Moinhos de Vento e Passo d\'Areia.',
  },
  {
    value: '40+',
    label: 'Anos de experiência',
    description: 'Direção com vivência em gestão hospitalar e assistência à saúde.',
  },
  {
    value: '24h',
    label: 'Suporte de enfermagem',
    description: 'Cuidado integral e monitoramento contínuo para residentes e famílias.',
  },
]

export async function generateMetadata() {
  return buildCmsBackedMetadata('/sobre/a-novo-lar', fallbackMetadata)
}

interface LegacyAboutNovolarPageProps {
  hero?: PaginaHero
  historia?: PaginaHistoria
  pilares?: PaginaPilares
}

function LegacyAboutNovolarPage({
  hero,
  historia,
  pilares,
}: LegacyAboutNovolarPageProps = {}) {
  // Textos do Studio; vazio = os textos que ja estavam aqui.
  const paragrafos =
    historia?.paragrafos && historia.paragrafos.length > 0
      ? historia.paragrafos
      : HISTORY_PARAGRAPHS
  const destaques =
    historia?.destaques && historia.destaques.length > 0
      ? historia.destaques.map((destaque, i) => ({
          value: destaque.value || HIGHLIGHTS[i]?.value || '',
          label: destaque.label || HIGHLIGHTS[i]?.label || '',
          description: destaque.description || HIGHLIGHTS[i]?.description || '',
        }))
      : HIGHLIGHTS
  const valores =
    pilares?.valores && pilares.valores.length > 0 ? pilares.valores : VALUE_ITEMS

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb
            items={[
              { name: 'Sobre', url: '/sobre' },
              { name: 'A Novo Lar', url: '/sobre/a-novo-lar' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1b37] via-[#1d2f5f] to-[#2E7B7F] py-16 sm:py-20 lg:py-28 text-white">
        <Image
          src={hero?.imagem?.url || '/fotos-sobre/sobre-1.jpg'}
          alt={hero?.imagem?.alt || 'Cuidado especializado para idosos - Novo Lar Geriatria'}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1b37]/95 via-[#1d2f5f]/90 to-[#2E7B7F]/85"></div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/90 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#D4A853]" />
                {hero?.etiqueta || 'Desde 1994'}
              </div>
              <h1
                className={cx('mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl', classeTexto(hero?.estiloTitulo))}
                style={estiloDeTexto(hero?.estiloTitulo)}
              >
                {hero?.titulo || 'A Novo Lar Geriatria'}
              </h1>
              <p
                className={cx('mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl', classeTexto(hero?.estiloDescricao))}
                style={estiloDeTexto(hero?.estiloDescricao)}
              >
                {hero?.descricao ||
                  'Tradição e excelência em hospedagem assistida para idosos em Porto Alegre desde 1994.'}
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href={hero?.botao1Href || '/contato'}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4A853] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-[#1a2745] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#d4a84f]"
                >
                  {hero?.botao1Texto || 'Agendar visita'}
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={hero?.botao2Href || `tel:${COMPANY_CONTACT.centralPhoneDigits}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 backdrop-blur-sm px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
                >
                  <HandHeart className="h-5 w-5" />
                  {hero?.botao2Texto || 'Falar com especialista'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* História e destaques */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.5fr_1fr]">
            {/* História */}
            <div className="space-y-5 sm:space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] uppercase tracking-wider">
                <Heart className="h-4 w-4" />
                {historia?.etiqueta || 'Nossa história'}
              </div>
              {paragrafos.map((paragraph, index) => (
                <p key={index} className="text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Destaques */}
            <div className="grid gap-3 sm:gap-4">
              {destaques.map((item) => (
                <div
                  key={item.label}
                  className="group rounded-xl border border-[#2E7B7F]/20 bg-gradient-to-br from-[#2E7B7F]/5 to-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#2C3E6B] group-hover:text-[#2E7B7F] transition-colors">{item.value}</div>
                  <div className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2E7B7F]">
                    {item.label}
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-snug">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missão, visão e valores */}
      <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className={cx('text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E6B]', classeTexto(pilares?.estiloTitulo))}
              style={estiloDeTexto(pilares?.estiloTitulo)}
            >
              {pilares?.titulo || 'Nossos pilares'}
            </h2>
            <p
              className={cx('mt-3 sm:mt-4 text-base sm:text-lg text-gray-600', classeTexto(pilares?.estiloDescricao))}
              style={estiloDeTexto(pilares?.estiloDescricao)}
            >
              {pilares?.descricao ||
                'Princípios que orientam cada cuidado prestado às famílias'}
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#2E7B7F]/10 text-[#2E7B7F] group-hover:bg-[#2E7B7F] group-hover:text-white transition-colors">
                <Target className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-[#2C3E6B]">
                {pilares?.tituloMissao || 'Missão'}
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                {pilares?.textoMissao ||
                  'Garantir e trabalhar com excelência, prestando serviços de assistência de enfermagem 24h aos residentes, oferecendo conforto e tranquilidade também aos familiares.'}
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#D4A853]/10 text-[#D4A853] group-hover:bg-[#D4A853] group-hover:text-white transition-colors">
                <Eye className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-[#2C3E6B]">
                {pilares?.tituloVisao || 'Visão'}
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                {pilares?.textoVisao ||
                  'Ser a melhor empresa do segmento e referência pela excelência em serviços de hospedagem assistida para idosos em Porto Alegre e região.'}
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#2C3E6B]/10 text-[#2C3E6B] group-hover:bg-[#2C3E6B] group-hover:text-white transition-colors">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-[#2C3E6B]">
                {pilares?.tituloValores || 'Valores'}
              </h3>
              <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                {valores.map((value, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2E7B7F]" />
                    <span className="leading-relaxed">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações do Google */}
      <GoogleReviews />

      <FooterWrapper />
    </div>
  )
}

export default async function AboutNovolarPage() {
  const cmsPage = await fetchCmsPage('/sobre/a-novo-lar')

  return renderCmsBackedPage(
    '/sobre/a-novo-lar',
    <LegacyAboutNovolarPage
      hero={acharBloco(cmsPage?.blocos, 'paginaHero')}
      historia={acharBloco(cmsPage?.blocos, 'paginaHistoria')}
      pilares={acharBloco(cmsPage?.blocos, 'paginaPilares')}
    />
  )
}


