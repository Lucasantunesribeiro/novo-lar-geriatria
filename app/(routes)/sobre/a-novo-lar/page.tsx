import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GoogleReviews from '@/components/sections/GoogleReviews'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { COMPANY_CONTACT } from '@/lib/site-data'
import Image from 'next/image'
import Link from 'next/link'
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

export default function AboutNovolarPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb
            items={[
              { name: 'Sobre', url: '/sobre' },
              { name: 'A Novo Lar', url: '/sobre' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1b37] via-[#1d2f5f] to-[#2E7B7F] py-16 sm:py-20 lg:py-28 text-white">
        <Image
          src="/fotos-sobre/sobre-1.jpg"
          alt="Cuidado especializado para idosos - Novo Lar Geriatria"
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
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#B8842F]" />
                Desde 1994
              </div>
              <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
                A Novo Lar Geriatria
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                Tradição e excelência em hospedagem assistida para idosos em Porto Alegre desde 1994.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8842F] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-[#1a2745] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#d4a84f]"
                >
                  Agendar visita
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 backdrop-blur-sm px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
                >
                  <HandHeart className="h-5 w-5" />
                  Falar com especialista
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
                Nossa história
              </div>
              {HISTORY_PARAGRAPHS.map((paragraph, index) => (
                <p key={index} className="text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Destaques */}
            <div className="grid gap-3 sm:gap-4">
              {HIGHLIGHTS.map((item) => (
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E6B]">Nossos pilares</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">Princípios que orientam cada cuidado prestado às famílias</p>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#2E7B7F]/10 text-[#2E7B7F] group-hover:bg-[#2E7B7F] group-hover:text-white transition-colors">
                <Target className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-[#2C3E6B]">Missão</h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                Garantir e trabalhar com excelência, prestando serviços de assistência de enfermagem 24h aos residentes,
                oferecendo conforto e tranquilidade também aos familiares.
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#B8842F]/10 text-[#B8842F] group-hover:bg-[#B8842F] group-hover:text-white transition-colors">
                <Eye className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-[#2C3E6B]">Visão</h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                Ser a melhor empresa do segmento e referência pela excelência em serviços de hospedagem assistida para
                idosos em Porto Alegre e região.
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#2C3E6B]/10 text-[#2C3E6B] group-hover:bg-[#2C3E6B] group-hover:text-white transition-colors">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-[#2C3E6B]">Valores</h3>
              <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                {VALUE_ITEMS.map((value, index) => (
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

      <Footer />
    </div>
  )
}


