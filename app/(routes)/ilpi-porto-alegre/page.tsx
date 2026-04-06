import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { BreadcrumbSchema, FAQPageSchema } from '@/components/seo/JsonLd'
import { CheckCircle2, Phone, MessageCircle, ArrowRight, ShieldCheck, ClipboardList } from 'lucide-react'
import { getPageByPath } from '@/lib/sanity/queries'
import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'

const BASE_URL = 'https://novolargeriatria.com.br'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByPath('/ilpi-porto-alegre')
  const seo = page?.seo
  return {
    title: seo?.title || 'ILPI em Porto Alegre — Instituição de Longa Permanência para Idosos | Novo Lar',
    description: seo?.description || 'Procurando uma ILPI em Porto Alegre? A Novo Lar Geriatria é uma Instituição de Longa Permanência para Idosos com 30 anos de experiência, 3 unidades e equipe multidisciplinar 24h.',
    openGraph: {
      title: seo?.title || 'ILPI em Porto Alegre | Novo Lar Geriatria',
      description: seo?.description || 'Instituição de Longa Permanência para Idosos (ILPI) em Porto Alegre com equipe multidisciplinar 24h, 3 unidades e mais de 30 anos de experiência.',
      url: `${BASE_URL}/ilpi-porto-alegre`,
      type: 'website',
      ...(seo?.ogImage?.url && { images: [{ url: seo.ogImage.url }] }),
    },
    alternates: { canonical: `${BASE_URL}/ilpi-porto-alegre` },
  }
}

const CRITERIOS = [
  'Registro e alvará de funcionamento em conformidade com a RDC 283/2005 da ANVISA',
  'Equipe técnica com responsável técnico habilitado (médico ou enfermeiro)',
  'Prontuário individual atualizado para cada residente',
  'Plano de cuidados individualizado revisto periodicamente',
  'Instalações adaptadas: acessibilidade, corrimãos, pisos antiderrapantes, sinalização',
  'Protocolo de emergência e sistema de chamada para os residentes',
  'Alimentação supervisionada por nutricionista com cardápio registrado',
  'Comunicação regular e transparente com os responsáveis legais',
]

const FAQS = [
  {
    question: 'O que é uma ILPI?',
    answer: 'ILPI significa Instituição de Longa Permanência para Idosos. É a denominação técnica e regulatória para residências geriátricas, casas de repouso e lares para idosos que oferecem moradia coletiva e serviços de cuidados a pessoas com 60 anos ou mais. No Brasil, as ILPIs são regulamentadas pela RDC 283/2005 da ANVISA.',
  },
  {
    question: 'Qual a diferença entre ILPI, casa de repouso e residencial geriátrico?',
    answer: 'São termos diferentes para o mesmo tipo de serviço. ILPI é a denominação técnica oficial usada pela ANVISA e pelo Ministério da Saúde. "Casa de repouso" e "residencial geriátrico" são termos populares. Na prática, todas se referem a instituições que oferecem moradia e cuidados contínuos a idosos com diferentes graus de dependência.',
  },
  {
    question: 'O que a ANVISA exige de uma ILPI?',
    answer: 'A RDC 283/2005 da ANVISA estabelece requisitos de infraestrutura (acessibilidade, área mínima por residente, instalações sanitárias), de equipe técnica (responsável técnico habilitado, proporção de cuidadores por residente), de documentação (prontuários, planos de cuidado, registros de ocorrências) e de alimentação (supervisão nutricional, cardápios registrados).',
  },
  {
    question: 'A Novo Lar Geriatria é uma ILPI regularizada?',
    answer: 'Sim. A Novo Lar Geriatria é uma ILPI registrada e em conformidade com as exigências da ANVISA e da vigilância sanitária municipal de Porto Alegre, com mais de 30 anos de operação regular em três unidades na cidade.',
  },
]

export default async function IlpiPortoAlegreePage() {
  const sanityPage = await getPageByPath('/ilpi-porto-alegre')
  if (sanityPage) return <SeoLandingPage data={sanityPage} />

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'ILPI em Porto Alegre', url: `${BASE_URL}/ilpi-porto-alegre` },
        ]}
      />
      <FAQPageSchema faqs={FAQS} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-14 text-white">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              ILPI · Instituição de Longa Permanência para Idosos · Porto Alegre
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              ILPI em Porto Alegre — Novo Lar Geriatria
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85 leading-relaxed">
              A Novo Lar Geriatria é uma Instituição de Longa Permanência para Idosos (ILPI) com
              mais de 30 anos de funcionamento regular em Porto Alegre, com 3 unidades registradas
              e equipe multidisciplinar presente 24 horas.
            </p>
            <div className="mt-6 h-px w-24 bg-[#D4A853]" />
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                <li><Link href="/" className="transition hover:text-white">Home</Link></li>
                <li>/</li>
                <li className="font-medium text-white" aria-current="page">ILPI em Porto Alegre</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* O que é ILPI */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C3E6B]/10">
                  <ClipboardList className="h-6 w-6 text-[#2C3E6B]" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-[#2C3E6B]">O que é uma ILPI?</h2>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  ILPI — Instituição de Longa Permanência para Idosos — é a denominação técnica
                  e regulatória oficial para residências geriátricas, casas de repouso e lares
                  de idosos que oferecem moradia coletiva e cuidados contínuos a pessoas com
                  60 anos ou mais.
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  No Brasil, as ILPIs são regulamentadas pela <strong>RDC 283/2005 da ANVISA</strong>,
                  que estabelece requisitos mínimos de infraestrutura, equipe técnica, documentação,
                  nutrição e segurança. ILPIs também precisam de alvará da vigilância sanitária
                  municipal para funcionar legalmente.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  Ao escolher uma ILPI, é fundamental verificar se a instituição está registrada e
                  em conformidade com essas exigências — isso é garantia de segurança, qualidade
                  e responsabilidade no cuidado do seu familiar.
                </p>
              </div>
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E7B7F]/10">
                  <ShieldCheck className="h-6 w-6 text-[#2E7B7F]" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-[#2C3E6B]">
                  O que verificar ao escolher uma ILPI
                </h2>
                <div className="space-y-2">
                  {CRITERIOS.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2E7B7F]" />
                      <p className="text-sm leading-relaxed text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Novo Lar como ILPI */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A853]">A Novo Lar como ILPI</p>
              <h2 className="text-3xl font-bold text-[#2C3E6B]">
                Por que escolher a Novo Lar Geriatria?
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3 text-center">
              {[
                { value: '1994', label: 'Ano de fundação', desc: 'Mais de 30 anos de operação regular em Porto Alegre' },
                { value: '3', label: 'Unidades registradas', desc: 'Em Moinhos de Vento e Passo d\'Areia' },
                { value: '24h', label: 'Equipe presente', desc: 'Médico geriatra, enfermagem e equipe de apoio' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="text-3xl font-bold text-[#2C3E6B]">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold text-[#2E7B7F]">{item.label}</p>
                  <p className="mt-2 text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/sobre/a-novo-lar"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
              >
                Nossa história <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/porto-alegre"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
              >
                Nossas unidades <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
              >
                Nossos serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#2C3E6B]">
              Perguntas frequentes sobre ILPIs
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div key={index} className="rounded-xl border border-gray-200 bg-[#F9FAFB] p-5">
                  <h3 className="mb-2 text-base font-bold text-[#2C3E6B]">{faq.question}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-gray-500">
              Mais dúvidas?{' '}
              <Link href="/perguntas-frequentes" className="font-semibold text-[#2C3E6B] hover:text-[#2E7B7F]">
                Veja todas as perguntas frequentes
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Conheça a Novo Lar pessoalmente</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/85">
            Oferecemos visitas guiadas gratuitas. Venha conhecer nossas unidades em Porto Alegre
            e entender como funcionamos na prática.
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
