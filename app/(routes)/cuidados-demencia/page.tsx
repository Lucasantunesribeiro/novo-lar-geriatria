import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { BreadcrumbSchema, ServiceSchema } from '@/components/seo/JsonLd'
import { CheckCircle2, Phone, MessageCircle, ArrowRight, Brain, HeartHandshake } from 'lucide-react'
import { getPageByPath } from '@/lib/sanity/queries'
import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'

const BASE_URL = 'https://novolargeriatria.com.br'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByPath('/cuidados-demencia')
  const seo = page?.seo
  return {
    title: seo?.title || 'Cuidados para Demência em Idosos | Novo Lar Geriatria Porto Alegre',
    description: seo?.description || 'Residencial geriátrico especializado no cuidado de idosos com demência em Porto Alegre. Equipe treinada para demência vascular, senil, Lewy body e outras formas. Ambiente seguro 24h.',
    openGraph: {
      title: seo?.title || 'Cuidados para Demência em Idosos | Novo Lar Geriatria Porto Alegre',
      description: seo?.description || 'Cuidados especializados para idosos com demência em Porto Alegre. Equipe multidisciplinar 24h, ambiente seguro, rotina estruturada e suporte à família.',
      url: `${BASE_URL}/cuidados-demencia`,
      type: 'website',
      ...(seo?.ogImage?.url && { images: [{ url: seo.ogImage.url }] }),
    },
    alternates: { canonical: `${BASE_URL}/cuidados-demencia` },
  }
}

const TIPOS_DEMENCIA = [
  {
    tipo: 'Demência de Alzheimer',
    descricao: 'A mais prevalente, com início gradual de perda de memória, desorientação e dificuldade de raciocínio. Progressiva e sem cura.',
    link: '/cuidados-alzheimer',
  },
  {
    tipo: 'Demência Vascular',
    descricao: 'Causada por eventos cerebrovasculares (AVCs ou microAVCs). Progressão em degraus, com sintomas que variam conforme a área afetada.',
    link: null,
  },
  {
    tipo: 'Demência com Corpos de Lewy',
    descricao: 'Caracterizada por alucinações visuais, parkinsonismo e flutuações cognitivas. Exige manejo cuidadoso de medicamentos.',
    link: null,
  },
  {
    tipo: 'Demência Frontotemporal',
    descricao: 'Afeta principalmente comportamento, linguagem e personalidade. Mais comum em pessoas entre 45 e 65 anos.',
    link: null,
  },
]

const CUIDADOS = [
  'Ambiente físico seguro com protocolos de prevenção de quedas e controle de acesso',
  'Rotina diária estruturada e previsível para reduzir desorientação e agitação',
  'Estimulação cognitiva com atividades adaptadas ao grau de comprometimento',
  'Musicoterapia e reminiscência para resgate afetivo e bem-estar emocional',
  'Monitoramento neurológico e ajuste de medicamentos com médico geriatra presente',
  'Fisioterapia e terapia ocupacional para preservar mobilidade e autonomia funcional',
  'Nutrição adaptada com texturas modificadas quando necessário',
  'Suporte psicológico ao residente e orientações regulares à família',
]

export default async function CuidadosDemenciaPage() {
  const sanityPage = await getPageByPath('/cuidados-demencia')
  if (sanityPage) return <SeoLandingPage data={sanityPage} />

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Cuidados para Demência', url: `${BASE_URL}/cuidados-demencia` },
        ]}
      />
      <ServiceSchema
        name="Cuidados Especializados para Demência em Idosos"
        description="Residencial geriátrico especializado no cuidado de idosos com demência em Porto Alegre, com equipe treinada para diferentes tipos de demência, ambiente seguro 24h e rotina estruturada."
        url={`${BASE_URL}/cuidados-demencia`}
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
              Cuidados para Idosos com Demência
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85 leading-relaxed">
              A Novo Lar Geriatria oferece atendimento especializado para idosos com diferentes tipos
              de demência em Porto Alegre — com equipe treinada, ambiente seguro e rotina estruturada
              que promove qualidade de vida e dignidade em cada fase da doença.
            </p>
            <div className="mt-6 h-px w-24 bg-[#D4A853]" />
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                <li><Link href="/" className="transition hover:text-white">Home</Link></li>
                <li>/</li>
                <li className="font-medium text-white" aria-current="page">Cuidados para Demência</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* O que é demência */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C3E6B]/10">
                  <Brain className="h-6 w-6 text-[#2C3E6B]" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-[#2C3E6B]">
                  O que é demência e por que exige cuidado especializado?
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Demência é um termo amplo que descreve um conjunto de sintomas que afetam memória,
                  raciocínio, orientação, linguagem e comportamento. Não é uma doença única, mas sim
                  a manifestação de diversas condições neurológicas — a mais comum delas é o Alzheimer.
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  A progressão da demência torna o idoso progressivamente dependente de cuidadores
                  especializados. O ambiente precisa ser adaptado, a rotina estruturada e a equipe
                  preparada para lidar com as alterações comportamentais, cognitivas e físicas que
                  acompanham a doença.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  Na Novo Lar Geriatria, nosso protocolo de cuidados para demência é desenvolvido
                  por nossa equipe multidisciplinar e adaptado individualmente a cada residente,
                  considerando o tipo de demência, a fase e o histórico de vida da pessoa.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold text-[#2C3E6B]">
                  Principais tipos de demência que atendemos
                </h3>
                <div className="space-y-4">
                  {TIPOS_DEMENCIA.map((item) => (
                    <div
                      key={item.tipo}
                      className="rounded-xl border border-gray-200 bg-[#F9FAFB] p-4"
                    >
                      <p className="mb-1 text-sm font-bold text-[#2E7B7F]">{item.tipo}</p>
                      <p className="text-sm leading-relaxed text-gray-700">{item.descricao}</p>
                      {item.link && (
                        <Link
                          href={item.link}
                          className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#2C3E6B] transition hover:text-[#2E7B7F]"
                        >
                          Saiba mais <ArrowRight className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
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
              <h2 className="text-3xl font-bold text-[#2C3E6B]">
                Como cuidamos de idosos com demência
              </h2>
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

      {/* Família e equipe */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E7B7F]/10">
                  <HeartHandshake className="h-6 w-6 text-[#2E7B7F]" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-[#2C3E6B]">
                  Suporte integral à família
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Cuidar de um familiar com demência é uma jornada longa e emocionalmente exigente.
                  Na Novo Lar, não cuidamos apenas do residente — cuidamos também de quem o ama.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  Oferecemos comunicação transparente, visitas diárias liberadas, orientações
                  regulares sobre a evolução da doença e canais diretos de contato com nossa equipe
                  para qualquer necessidade.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold text-[#2C3E6B]">Serviços relacionados</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Terapia Ocupacional', href: '/servicos/terapia-ocupacional' },
                    { label: 'Musicoterapia e Socialização', href: '/servicos/musicoterapia-socializacao' },
                    { label: 'Médico e Enfermagem 24h', href: '/servicos/enfermagem-medico-24h' },
                    { label: 'Hospedagem Assistida 24h', href: '/servicos/hospedagem-assistida-24h' },
                    { label: 'Cuidados para Alzheimer', href: '/cuidados-alzheimer' },
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Fale com nossa equipe especializada</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/85">
            Tem dúvidas sobre como cuidar de um idoso com demência? Nossa equipe está disponível
            para orientá-lo e apresentar nossas unidades em Porto Alegre.
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
