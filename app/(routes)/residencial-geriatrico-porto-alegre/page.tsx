import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { BreadcrumbSchema, ServiceSchema } from '@/components/seo/JsonLd'
import { CheckCircle2, Phone, MessageCircle, ArrowRight, Stethoscope, Users } from 'lucide-react'
import { getPageByPath } from '@/lib/sanity/queries'
import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'

const BASE_URL = 'https://novolargeriatria.com.br'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByPath('/residencial-geriatrico-porto-alegre')
  const seo = page?.seo
  return {
    title: seo?.title || 'Residencial Geriátrico em Porto Alegre | Novo Lar Geriatria',
    description: seo?.description || 'Residencial geriátrico em Porto Alegre com equipe clínica completa: médico geriatra, enfermagem 24h, fisioterapia, nutrição e terapia ocupacional.',
    openGraph: {
      title: seo?.title || 'Residencial Geriátrico em Porto Alegre | Novo Lar Geriatria',
      description: seo?.description || 'Atendimento clínico especializado em residencial geriátrico de Porto Alegre. Médico geriatra, equipe multidisciplinar 24h e protocolos individualizados.',
      url: `${BASE_URL}/residencial-geriatrico-porto-alegre`,
      type: 'website',
      ...(seo?.ogImage?.url && { images: [{ url: seo.ogImage.url }] }),
    },
    alternates: { canonical: `${BASE_URL}/residencial-geriatrico-porto-alegre` },
  }
}

const PERFIS_ATENDIDOS = [
  {
    perfil: 'Idosos com alta dependência funcional',
    desc: 'Residentes que precisam de auxílio total para atividades básicas (higiene, alimentação, mobilidade) com monitoramento clínico contínuo.',
  },
  {
    perfil: 'Idosos com doenças neurológicas',
    desc: 'Alzheimer, demência vascular, Parkinson, sequelas de AVC — condições que exigem equipe treinada, ambiente adaptado e rotina estruturada.',
  },
  {
    perfil: 'Idosos em recuperação pós-hospitalar',
    desc: 'Período de convalescença após cirurgias ou internações, com fisioterapia intensiva, reabilitação e acompanhamento médico.',
  },
  {
    perfil: 'Idosos com dependência parcial',
    desc: 'Residentes que mantêm autonomia parcial e buscam segurança, convivência social e supervisão clínica sem abrir mão da independência.',
  },
]

const EQUIPE = [
  { cargo: 'Médico Geriatra', desc: 'Avaliações periódicas, ajuste de prescrições e acompanhamento clínico contínuo.' },
  { cargo: 'Enfermagem 24h', desc: 'Técnicos de enfermagem em plantão contínuo para monitoramento e cuidados de rotina.' },
  { cargo: 'Fisioterapeuta', desc: 'Sessões individuais e em grupo para reabilitação, prevenção de quedas e mobilidade.' },
  { cargo: 'Nutricionista', desc: 'Plano alimentar individualizado com 6 refeições diárias adaptadas às condições clínicas.' },
  { cargo: 'Terapeuta Ocupacional', desc: 'Estimulação cognitiva, preservação da autonomia funcional e adaptações ao ambiente.' },
  { cargo: 'Psicólogo', desc: 'Suporte emocional ao residente e orientação às famílias durante todas as fases.' },
]

export default async function ResidencialGeriatricoPage() {
  const sanityPage = await getPageByPath('/residencial-geriatrico-porto-alegre')
  if (sanityPage) return <SeoLandingPage data={sanityPage} />
  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Residencial Geriátrico Porto Alegre', url: `${BASE_URL}/residencial-geriatrico-porto-alegre` },
        ]}
      />
      <ServiceSchema
        name="Residencial Geriátrico em Porto Alegre"
        description="Atendimento clínico especializado em residencial geriátrico em Porto Alegre com médico geriatra, enfermagem 24h, fisioterapia, nutrição e terapia ocupacional."
        url={`${BASE_URL}/residencial-geriatrico-porto-alegre`}
        areaServed="Porto Alegre"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-14 text-white">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Cuidados Clínicos Especializados · Porto Alegre, RS
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Residencial Geriátrico em Porto Alegre
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85 leading-relaxed">
              A Novo Lar Geriatria é um residencial geriátrico especializado em Porto Alegre que combina
              a qualidade de vida de uma residência com a assistência clínica de uma instituição de saúde —
              médico geriatra, equipe multidisciplinar 24h e protocolos individualizados para cada residente.
            </p>
            <div className="mt-6 h-px w-24 bg-[#D4A853]" />
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                <li><Link href="/" className="transition hover:text-white">Home</Link></li>
                <li>/</li>
                <li className="font-medium text-white" aria-current="page">Residencial Geriátrico Porto Alegre</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* O que é residencial geriátrico */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C3E6B]/10">
                  <Stethoscope className="h-6 w-6 text-[#2C3E6B]" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-[#2C3E6B]">
                  O que diferencia um residencial geriátrico?
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Um residencial geriátrico vai além da hospedagem assistida comum. O foco é
                  a atenção clínica especializada ao idoso: avaliação geriátrica contínua,
                  diagnóstico preciso de condições de saúde, manejo de doenças crônicas e
                  ajuste constante do plano de cuidados conforme a evolução clínica.
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Na Novo Lar Geriatria, cada residente é avaliado por um médico geriatra
                  e recebe um plano de cuidados individualizado que orienta toda a equipe
                  multidisciplinar — desde a alimentação e fisioterapia até as atividades
                  terapêuticas e o suporte psicológico.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  Esse modelo permite que idosos com condições clínicas complexas — demências,
                  doenças neurológicas, alta dependência funcional — recebam o nível de cuidado
                  que precisam sem precisar estar em um hospital ou clínica de internação.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold text-[#2C3E6B]">
                  Perfis de idosos que atendemos
                </h3>
                <div className="space-y-4">
                  {PERFIS_ATENDIDOS.map((item) => (
                    <div key={item.perfil} className="rounded-xl border border-gray-200 bg-[#F9FAFB] p-4">
                      <p className="mb-1 text-sm font-bold text-[#2E7B7F]">{item.perfil}</p>
                      <p className="text-sm leading-relaxed text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E7B7F]/10">
                <Users className="h-6 w-6 text-[#2E7B7F]" />
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A853]">Equipe clínica</p>
              <h2 className="text-3xl font-bold text-[#2C3E6B]">
                Profissionais presentes 24 horas por dia
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
                Cada especialidade atua de forma integrada, com comunicação constante sobre
                a evolução de cada residente.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {EQUIPE.map((item) => (
                <div key={item.cargo} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="mb-2 text-sm font-bold text-[#2C3E6B]">{item.cargo}</p>
                  <p className="text-xs leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial vs outras opções */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-[#2C3E6B]">
              Por que um residencial geriátrico é diferente de um hospital?
            </h2>
            <div className="rounded-2xl border border-gray-200 bg-[#F9FAFB] p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-3 text-sm font-bold text-[#2E7B7F]">Residencial Geriátrico</p>
                  {[
                    'Ambiente de moradia, não hospitalar',
                    'Rotina personalizada e familiar',
                    'Convivência social e atividades diárias',
                    'Visitação aberta e livre',
                    'Cuidado contínuo de longa duração',
                    'Foco em qualidade de vida e autonomia',
                  ].map((item, i) => (
                    <div key={i} className="mb-1.5 flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2E7B7F]" />
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="mb-3 text-sm font-bold text-gray-400">Hospital / Internação</p>
                  {[
                    'Ambiente clínico e impessoal',
                    'Rotina hospitalar padronizada',
                    'Isolamento social frequente',
                    'Visitas restritas por horário',
                    'Foco em tratamento agudo',
                    'Não indicado para permanência longa',
                  ].map((item, i) => (
                    <div key={i} className="mb-1.5 flex items-start gap-2">
                      <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-gray-200" />
                      <p className="text-sm text-gray-500">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
              >
                Ver todos os serviços <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ilpi-porto-alegre"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
              >
                O que é uma ILPI? <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/porto-alegre"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
              >
                Nossas unidades em Porto Alegre <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Avaliação gratuita para o seu familiar</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/85">
            Nossa equipe pode orientá-lo sobre o nível de cuidado adequado ao seu familiar
            e apresentar as unidades da Novo Lar Geriatria em Porto Alegre.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#10B981] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#059669]"
            >
              <MessageCircle className="h-4 w-4" />
              Falar por WhatsApp
            </a>
            <a
              href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {COMPANY_CONTACT.centralPhoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <FooterWrapper />
    </div>
  )
}
