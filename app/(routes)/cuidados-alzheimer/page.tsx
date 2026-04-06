import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { BreadcrumbSchema, ServiceSchema } from '@/components/seo/JsonLd'
import { CheckCircle2, Phone, MessageCircle, ArrowRight, Brain, HeartHandshake, Shield } from 'lucide-react'
import { getPageByPath } from '@/lib/sanity/queries'
import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'

const BASE_URL = 'https://novolargeriatria.com.br'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByPath('/cuidados-alzheimer')
  const seo = page?.seo
  return {
    title: seo?.title || 'Cuidados para Alzheimer em Porto Alegre | Novo Lar Geriatria',
    description: seo?.description || 'Residencial geriátrico especializado no cuidado de idosos com Alzheimer em Porto Alegre. Equipe treinada 24h, ambiente seguro, estimulação cognitiva e suporte à família.',
    openGraph: {
      title: seo?.title || 'Cuidados para Alzheimer em Porto Alegre | Novo Lar Geriatria',
      description: seo?.description || 'Atendimento humanizado e especializado para idosos com Alzheimer em Porto Alegre. Equipe multidisciplinar treinada, ambiente seguro e rotina estruturada.',
      url: `${BASE_URL}/cuidados-alzheimer`,
      type: 'website',
      ...(seo?.ogImage?.url && { images: [{ url: seo.ogImage.url }] }),
    },
    alternates: { canonical: `${BASE_URL}/cuidados-alzheimer` },
  }
}

const CUIDADOS = [
  'Equipe treinada especificamente para o manejo de sintomas cognitivos e comportamentais do Alzheimer',
  'Ambiente físico seguro com controle de acesso, pisos antiderrapantes e sinalização adaptada',
  'Rotina estruturada e previsível que reduz a ansiedade e a agitação dos residentes',
  'Estimulação cognitiva com musicoterapia, reminiscência e atividades sensoriais adaptadas',
  'Monitoramento contínuo de sinais vitais e evolução clínica com prontuário eletrônico',
  'Comunicação transparente com a família e orientações sobre como lidar com a doença',
  'Administração rigorosa de medicamentos com sistema de checklist duplo',
  'Fisioterapia e terapia ocupacional para preservar a autonomia funcional pelo maior tempo possível',
]

const FASES = [
  {
    fase: 'Fase leve',
    descricao: 'Esquecimentos frequentes, dificuldade de concentração e leve desorientação. O residente mantém boa parte da autonomia com supervisão.',
  },
  {
    fase: 'Fase moderada',
    descricao: 'Confusão aumentada, dificuldade em reconhecer familiares e alterações comportamentais. Requer supervisão constante e rotina bem estruturada.',
  },
  {
    fase: 'Fase avançada',
    descricao: 'Dependência total para atividades básicas. Exige cuidados intensivos de enfermagem, prevenção de complicações e cuidados paliativos integrados.',
  },
]

export default async function CuidadosAlzheimerPage() {
  const sanityPage = await getPageByPath('/cuidados-alzheimer')
  if (sanityPage) return <SeoLandingPage data={sanityPage} />

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Cuidados para Alzheimer', url: `${BASE_URL}/cuidados-alzheimer` },
        ]}
      />
      <ServiceSchema
        name="Cuidados Especializados para Alzheimer"
        description="Residencial geriátrico especializado no cuidado de idosos com Alzheimer em Porto Alegre, com equipe treinada 24h, ambiente seguro e estimulação cognitiva."
        url={`${BASE_URL}/cuidados-alzheimer`}
        areaServed="Porto Alegre"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-14 text-white">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Residencial Geriátrico Especializado · Porto Alegre
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Cuidados para Idosos com Alzheimer
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85 leading-relaxed">
              A Novo Lar Geriatria oferece atendimento especializado para idosos com Alzheimer em Porto Alegre,
              com equipe treinada, ambiente seguro e rotina estruturada que preserva a dignidade e
              o bem-estar do seu familiar.
            </p>
            <div className="mt-6 h-px w-24 bg-[#D4A853]" />
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                <li><Link href="/" className="transition hover:text-white">Home</Link></li>
                <li>/</li>
                <li className="font-medium text-white" aria-current="page">Cuidados para Alzheimer</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* O que é Alzheimer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C3E6B]/10">
                  <Brain className="h-6 w-6 text-[#2C3E6B]" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-[#2C3E6B]">
                  O Alzheimer exige cuidado especializado
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  A doença de Alzheimer é a forma mais comum de demência, responsável por 60 a 80% dos casos.
                  É progressiva, irreversível e afeta memória, raciocínio, comportamento e a capacidade de
                  realizar atividades básicas do dia a dia.
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Com o avanço da doença, o idoso passa a exigir supervisão constante e cuidados cada vez
                  mais especializados. Familiares que assumem esse cuidado sozinhos enfrentam exaustão física
                  e emocional significativa — e o idoso frequentemente recebe cuidados abaixo do ideal.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  Na Novo Lar Geriatria, nossa equipe é treinada especificamente para o manejo do Alzheimer
                  em todas as suas fases, garantindo segurança, conforto e qualidade de vida mesmo nos
                  estágios mais avançados.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#2C3E6B]">Cuidado em cada fase da doença</h3>
                {FASES.map((item) => (
                  <div
                    key={item.fase}
                    className="rounded-xl border border-gray-200 bg-[#F9FAFB] p-4"
                  >
                    <p className="mb-1 text-sm font-bold text-[#2E7B7F]">{item.fase}</p>
                    <p className="text-sm leading-relaxed text-gray-700">{item.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como cuidamos */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A853]">Nosso protocolo</p>
              <h2 className="text-3xl font-bold text-[#2C3E6B]">Como cuidamos de idosos com Alzheimer</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {CUIDADOS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2E7B7F]" />
                  <p className="text-sm leading-relaxed text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipe e serviços relacionados */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E7B7F]/10">
                  <HeartHandshake className="h-6 w-6 text-[#2E7B7F]" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-[#2C3E6B]">
                  Equipe multidisciplinar presente 24h
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  O cuidado com Alzheimer exige colaboração entre diferentes especialidades. Nossa equipe
                  inclui médico geriatra, enfermeiros técnicos, fisioterapeutas, terapeutas ocupacionais,
                  nutricionistas e psicólogos — todos presentes de forma integrada.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  Cada residente com Alzheimer tem um plano de cuidado individualizado, revisado
                  periodicamente, com metas claras e compartilhado com a família de forma transparente.
                </p>
              </div>
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4A853]/10">
                  <Shield className="h-6 w-6 text-[#D4A853]" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-[#2C3E6B]">
                  Suporte completo à família
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Sabemos que a família também sofre com o diagnóstico de Alzheimer. Por isso, oferecemos
                  orientações regulares, comunicação aberta sobre a evolução do residente e visitas
                  diárias liberadas para que o vínculo familiar se mantenha forte.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  Nossa equipe está disponível para esclarecer dúvidas, alinhar expectativas e oferecer
                  suporte emocional às famílias em momentos difíceis.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-lg font-bold text-[#2C3E6B]">Serviços relacionados</h3>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {[
                  { label: 'Terapia Ocupacional', href: '/servicos/terapia-ocupacional' },
                  { label: 'Musicoterapia', href: '/servicos/musicoterapia-socializacao' },
                  { label: 'Enfermagem 24h', href: '/servicos/enfermagem-medico-24h' },
                  { label: 'Hospedagem Assistida', href: '/servicos/hospedagem-assistida-24h' },
                  { label: 'Nutrição Individualizada', href: '/servicos/nutricao-individualizada' },
                  { label: 'Ver todos os serviços', href: '/servicos' },
                ].map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center justify-between rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-sm font-semibold text-[#2C3E6B] transition hover:border-[#2E7B7F]/40 hover:bg-white hover:text-[#2E7B7F]"
                  >
                    {s.label}
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-[#D4A853]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Fale com nossa equipe especializada</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/85">
            Tem dúvidas sobre como cuidar de um familiar com Alzheimer? Nossa equipe está
            pronta para orientá-lo e, se for o momento certo, apresentar nossas unidades
            em Porto Alegre.
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
