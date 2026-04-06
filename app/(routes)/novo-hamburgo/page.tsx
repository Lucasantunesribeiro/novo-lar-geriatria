import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { BreadcrumbSchema, ServiceSchema } from '@/components/seo/JsonLd'
import { MapPin, Phone, MessageCircle, ArrowRight, CheckCircle2, Clock } from 'lucide-react'
import { getPageByPath } from '@/lib/sanity/queries'
import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'

const BASE_URL = 'https://novolargeriatria.com.br'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByPath('/novo-hamburgo')
  const seo = page?.seo
  return {
    title: seo?.title || 'Casa de Repouso para Idosos de Novo Hamburgo — Residencial em Porto Alegre | Novo Lar',
    description: seo?.description || 'Família em Novo Hamburgo buscando casa de repouso? A Novo Lar Geriatria fica em Porto Alegre, a 45–60 minutos pela BR-116. 3 unidades com médico geriatra e equipe 24h.',
    openGraph: {
      title: seo?.title || 'Casa de Repouso para Famílias de Novo Hamburgo | Novo Lar Geriatria — Porto Alegre',
      description: seo?.description || 'Residencial geriátrico em Porto Alegre para famílias de Novo Hamburgo. Cuidados especializados 24h com médico geriatra e equipe multidisciplinar.',
      url: `${BASE_URL}/novo-hamburgo`,
      type: 'website',
      ...(seo?.ogImage?.url && { images: [{ url: seo.ogImage.url }] }),
    },
    alternates: { canonical: `${BASE_URL}/novo-hamburgo` },
  }
}

const DIFERENCIAIS = [
  'Médico geriatra residente com plano de cuidados individualizado para cada morador',
  'Equipe multidisciplinar: enfermagem 24h, fisioterapia, nutrição, terapia ocupacional e psicologia',
  'Estrutura adaptada para idosos com mobilidade reduzida, demências e alta dependência',
  'Visitação aberta — famílias de Novo Hamburgo podem visitar sem restrição de horário',
  'Comunicação direta com a família: atualizações regulares sobre a evolução do familiar',
  'Atividades terapêuticas diárias para estimulação cognitiva e qualidade de vida',
]

const FAQS_NH = [
  {
    q: 'Vale a pena buscar uma ILPI em Porto Alegre estando em Novo Hamburgo?',
    a: 'Para muitas famílias, sim. Porto Alegre concentra a melhor infraestrutura de saúde do RS — geriatras, neurologistas, hospitais de referência. Para idosos com condições clínicas complexas, essa proximidade com especialistas faz diferença real no cuidado.',
  },
  {
    q: 'A família consegue visitar com frequência mesmo morando em Novo Hamburgo?',
    a: 'Sim. O trajeto Novo Hamburgo–Porto Alegre pela BR-116 é conhecido por muitas famílias que já se deslocam regularmente. Incentivamos visitas frequentes — não temos restrição de horário para familiares.',
  },
  {
    q: 'Qual a diferença entre as unidades em Moinhos de Vento e no Passo d\'Areia?',
    a: "Moinhos de Vento tem 2 unidades no bairro nobre central, mais próximas ao Hospital Moinhos de Vento. Passo d'Areia fica na zona norte e tem acesso mais direto para quem vem pelo eixo da BR-116, o que costuma ser mais conveniente para famílias de Novo Hamburgo e São Leopoldo.",
  },
]

export default async function NovoHamburgoPage() {
  const sanityPage = await getPageByPath('/novo-hamburgo')
  if (sanityPage) return <SeoLandingPage data={sanityPage} />
  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Novo Hamburgo', url: `${BASE_URL}/novo-hamburgo` },
        ]}
      />
      <ServiceSchema
        name="Casa de Repouso para idosos de Novo Hamburgo em Porto Alegre"
        description="Residencial geriátrico em Porto Alegre para famílias de Novo Hamburgo, com médico geriatra e equipe multidisciplinar 24h."
        url={`${BASE_URL}/novo-hamburgo`}
        areaServed="Novo Hamburgo e Vale do Sinos"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-14 text-white">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Para famílias de Novo Hamburgo · Unidades em Porto Alegre, RS
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Casa de Repouso para Idosos de Novo Hamburgo
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85 leading-relaxed">
              A Novo Lar Geriatria fica em Porto Alegre — a cerca de 45 a 60 minutos de Novo Hamburgo
              pela BR-116. Famílias do Vale do Sinos escolhem a Novo Lar quando buscam cuidado
              geriátrico especializado com a qualidade da capital e a possibilidade de visitar
              o familiar com regularidade.
            </p>
            <div className="mt-6 h-px w-24 bg-[#D4A853]" />
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                <li><Link href="/" className="transition hover:text-white">Home</Link></li>
                <li>/</li>
                <li className="font-medium text-white" aria-current="page">Novo Hamburgo</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Aviso de localização */}
      <section className="border-b border-amber-100 bg-amber-50 py-4">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-4xl items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
            <p className="text-sm leading-relaxed text-amber-800">
              <strong>As unidades da Novo Lar Geriatria ficam em Porto Alegre</strong>, não em Novo Hamburgo.
              Nossas unidades em Moinhos de Vento e Passo d'Areia ficam a aproximadamente 45–60 minutos
              de Novo Hamburgo pela BR-116.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#D4A853]">
                  Vale do Sinos e Grande POA
                </p>
                <h2 className="mb-5 text-3xl font-bold text-[#2C3E6B] sm:text-4xl">
                  Por que famílias de Novo Hamburgo escolhem Porto Alegre
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Novo Hamburgo é a maior cidade do Vale do Sinos, com forte conexão histórica e
                  econômica com Porto Alegre. Muitas famílias novo-hamburguenses se deslocam
                  regularmente para a capital — e essa rotina facilita a manutenção de visitas
                  a um familiar em um residencial geriátrico em Porto Alegre.
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  A principal razão para essa escolha é a qualidade do cuidado especializado.
                  Porto Alegre concentra geriatras, neurologistas, hospitais como o Moinhos de
                  Vento, o Santa Casa, o São Lucas — uma rede de saúde que faz diferença real
                  quando o idoso tem demência, Parkinson, sequelas de AVC ou outras condições
                  que exigem acompanhamento multidisciplinar.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  A unidade do Passo d'Areia é especialmente conveniente para famílias que
                  vêm de Novo Hamburgo pela BR-116, por ficar na zona norte de Porto Alegre,
                  no trecho de acesso mais direto para quem vem do Vale do Sinos.
                </p>
              </div>
              <div>
                <div className="mb-6 rounded-2xl border border-[#2E7B7F]/20 bg-[#2E7B7F]/5 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2E7B7F]/15">
                      <Clock className="h-5 w-5 text-[#2E7B7F]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#2C3E6B]">Novo Hamburgo → Porto Alegre</p>
                      <p className="text-xs text-gray-500">Tempo estimado via BR-116</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-white px-4 py-2.5">
                      <p className="text-sm font-medium text-gray-700">Unidade Passo d'Areia</p>
                      <p className="text-sm font-bold text-[#2E7B7F]">~45 min</p>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white px-4 py-2.5">
                      <p className="text-sm font-medium text-gray-700">Unidades Moinhos de Vento</p>
                      <p className="text-sm font-bold text-[#2E7B7F]">~55 min</p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-gray-400">Estimativa. Pode variar no horário de pico.</p>
                </div>
                <h3 className="mb-4 text-lg font-bold text-[#2C3E6B]">O que oferecemos</h3>
                <div className="space-y-2">
                  {DIFERENCIAIS.map((item, index) => (
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

      {/* FAQ específico */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-[#2C3E6B]">
              Perguntas de famílias de Novo Hamburgo
            </h2>
            <div className="space-y-4">
              {FAQS_NH.map((faq, index) => (
                <div key={index} className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="mb-2 text-base font-bold text-[#2C3E6B]">{faq.q}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Links úteis */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-sm font-semibold text-gray-500">Páginas que podem ajudar</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/porto-alegre"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
              >
                Unidades em Porto Alegre <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/porto-alegre/passo-dareia"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
              >
                Unidade Passo d'Areia <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ilpi-porto-alegre"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
              >
                O que é uma ILPI? <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/regiao-metropolitana"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
              >
                Outras cidades da Grande POA <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Fale com quem cuida de idosos há 30 anos</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/85">
            Atendemos famílias de Novo Hamburgo e do Vale do Sinos. Nossa equipe orienta sobre
            o nível de cuidado adequado e qual unidade é mais conveniente para a sua rotina.
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
