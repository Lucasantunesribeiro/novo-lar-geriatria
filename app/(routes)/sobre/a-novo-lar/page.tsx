import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1b37] via-[#1d2f5f] to-[#4A9B9F] py-24 text-white">
        <Image
          src="/fotos-sobre/sobre-1.jpg"
          alt="Cuidado especializado para idosos - Novo Lar Geriatria"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1b37]/95 via-[#1d2f5f]/90 to-[#4A9B9F]/85"></div>
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>

        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                <Sparkles className="h-4 w-4 text-[#C49943]" />
                Desde 1994
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                A Novo Lar Geriatria
              </h1>
              <p className="mt-6 text-lg text-white/85 sm:text-xl">
                Tradição e excelência em hospedagem assistida para idosos em Porto Alegre desde 1994.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C49943] px-8 py-4 text-lg font-semibold text-[#1a2745] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#c49943]"
                >
                  Agendar visita
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr]">
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              {HISTORY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph} className="text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid gap-4">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#4A9B9F]/20 bg-[#4A9B9F]/5 p-6 shadow-sm"
                >
                  <div className="text-3xl font-bold text-[#2C3E6B]">{item.value}</div>
                  <div className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#4A9B9F]">
                    {item.label}
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missão, visão e valores */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#2C3E6B] sm:text-5xl">Nossos pilares</h2>
            <p className="mt-4 text-lg text-gray-600">Princípios que orientam cada cuidado prestado às famílias</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#4A9B9F]/10 text-[#4A9B9F]">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#2C3E6B]">Missão</h3>
              <p className="mt-4 text-gray-600">
                Garantir e trabalhar com excelência, prestando serviços de assistência de enfermagem 24h aos residentes,
                oferecendo conforto e tranquilidade também aos familiares.
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#C49943]/10 text-[#C49943]">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#2C3E6B]">Visão</h3>
              <p className="mt-4 text-gray-600">
                Ser a melhor empresa do segmento e referência pela excelência em serviços de hospedagem assistida para
                idosos em Porto Alegre e região.
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#2C3E6B]/10 text-[#2C3E6B]">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#2C3E6B]">Valores</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                {VALUE_ITEMS.map((value) => (
                  <li key={value} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#4A9B9F]" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] to-[#4A9B9F] py-20 text-white">
        <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-10"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Conheça nossa estrutura</h2>
            <p className="mt-4 text-lg text-white/85">
              Explore nossos ambientes preparados para oferecer conforto, segurança e qualidade de vida.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/sobre/estrutura"
                className="inline-flex items-center gap-2 rounded-xl bg-[#C49943] px-8 py-4 text-lg font-semibold text-[#1a2745] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#c49943]"
              >
                Ver estrutura das unidades
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/fotos"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                <Users className="h-5 w-5" />
                Ver galeria de fotos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
