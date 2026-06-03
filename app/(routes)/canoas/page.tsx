import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { BreadcrumbSchema, ServiceSchema } from '@/components/seo/JsonLd'
import { MapPin, Phone, MessageCircle, ArrowRight, CheckCircle2, Clock } from 'lucide-react'
import { getPageByPath } from '@/lib/sanity/queries'
import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://novo-lar-geriatria.netlify.app'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByPath('/canoas')
  const seo = page?.seo
  return {
    title: seo?.title || 'Casa de Repouso para Idosos de Canoas — Residencial em Porto Alegre | Novo Lar',
    description: seo?.description || 'Família em Canoas buscando casa de repouso? A Novo Lar Geriatria fica em Porto Alegre, a 20–30 minutos de Canoas. 3 unidades com equipe 24h e médico geriatra.',
    openGraph: {
      title: seo?.title || 'Casa de Repouso para Famílias de Canoas | Novo Lar Geriatria — Porto Alegre',
      description: seo?.description || 'Residencial geriátrico em Porto Alegre, a 20–30 minutos de Canoas. Cuidados especializados 24h para idosos de toda a Grande Porto Alegre.',
      url: `${BASE_URL}/canoas`,
      type: 'website',
      ...(seo?.ogImage?.url && { images: [{ url: seo.ogImage.url }] }),
    },
    alternates: { canonical: `${BASE_URL}/canoas` },
  }
}

const DIFERENCIAIS = [
  'Médico geriatra com avaliações periódicas e acompanhamento clínico individualizado',
  'Enfermagem 24h em plantão contínuo para monitoramento e cuidados de rotina',
  'Fisioterapia, nutrição, terapia ocupacional e psicologia na própria unidade',
  'Equipe treinada para demências, Alzheimer, Parkinson e alta dependência funcional',
  'Visitação aberta — famílias de Canoas podem visitar sempre que quiserem',
  'Comunicação transparente e regular com os responsáveis legais',
]

export default async function CanoasPage() {
  const sanityPage = await getPageByPath('/canoas')
  if (sanityPage) return <SeoLandingPage data={sanityPage} />
  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Canoas', url: `${BASE_URL}/canoas` },
        ]}
      />
      <ServiceSchema
        name="Casa de Repouso para idosos de Canoas em Porto Alegre"
        description="Residencial geriátrico em Porto Alegre, próximo a Canoas, com equipe multidisciplinar 24h e médico geriatra."
        url={`${BASE_URL}/canoas`}
        areaServed="Canoas e Grande Porto Alegre"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-14 text-white">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Para famílias de Canoas · Unidades em Porto Alegre, RS
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Casa de Repouso para Idosos de Canoas
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85 leading-relaxed">
              A Novo Lar Geriatria fica em Porto Alegre — a 20 a 30 minutos de Canoas pela BR-116.
              Famílias de Canoas escolhem a Novo Lar pela qualidade do cuidado especializado e pela
              facilidade de manter visitas regulares ao familiar idoso.
            </p>
            <div className="mt-6 h-px w-24 bg-[#D4A853]" />
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                <li><Link href="/" className="transition hover:text-white">Home</Link></li>
                <li>/</li>
                <li className="font-medium text-white" aria-current="page">Canoas</li>
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
              <strong>As unidades da Novo Lar Geriatria ficam em Porto Alegre</strong>, não em Canoas.
              Moinhos de Vento e Passo d'Areia ficam a aproximadamente 20–30 minutos de Canoas pela BR-116.
            </p>
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#D4A853]">
                  Para famílias de Canoas
                </p>
                <h2 className="mb-5 text-3xl font-bold text-[#2C3E6B] sm:text-4xl">
                  Cuidado especializado a 20 minutos de Canoas
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Canoas é uma das cidades mais populosas da região metropolitana de Porto Alegre.
                  Muitas famílias de Canoas buscam uma ILPI (Instituição de Longa Permanência para
                  Idosos) que ofereça atendimento clínico especializado — algo que a Novo Lar
                  Geriatria oferece desde 1994.
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  A distância entre Canoas e nossas unidades em Porto Alegre é facilmente vencida pela
                  BR-116. Isso permite que filhos, netos e outros familiares que moram ou trabalham
                  em Canoas façam visitas com frequência — algo que valorizamos e incentivamos
                  ativamente.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  Além da proximidade, Porto Alegre concentra a melhor infraestrutura de saúde do
                  Rio Grande do Sul. Nossas unidades ficam próximas ao Hospital Moinhos de Vento
                  e a outros hospitais de referência, o que é especialmente importante para idosos
                  com condições clínicas complexas.
                </p>
              </div>
              <div>
                <div className="mb-6 rounded-2xl border border-[#2E7B7F]/20 bg-[#2E7B7F]/5 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2E7B7F]/15">
                      <Clock className="h-5 w-5 text-[#2E7B7F]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#2C3E6B]">Canoas → Porto Alegre</p>
                      <p className="text-xs text-gray-500">Tempo estimado de deslocamento</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-white px-4 py-2.5">
                      <p className="text-sm font-medium text-gray-700">Unidades em Moinhos de Vento</p>
                      <p className="text-sm font-bold text-[#2E7B7F]">~25 min</p>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white px-4 py-2.5">
                      <p className="text-sm font-medium text-gray-700">Unidade Passo d'Areia</p>
                      <p className="text-sm font-bold text-[#2E7B7F]">~20 min</p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-gray-400">Via BR-116. Pode variar no horário de pico.</p>
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

      {/* Unidades */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A853]">Onde ficamos</p>
              <h2 className="text-3xl font-bold text-[#2C3E6B]">
                3 unidades em Porto Alegre
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
                Todas com o mesmo padrão de cuidado, equipe multidisciplinar 24h e visitação aberta.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  bairro: 'Moinhos de Vento',
                  unidade: 'Luciana de Abreu',
                  endereco: 'Rua Luciana de Abreu, 151',
                  href: '/unidade-luciana-de-abreu',
                },
                {
                  bairro: 'Moinhos de Vento',
                  unidade: 'Barão de Santo Ângelo',
                  endereco: 'Rua Barão de Santo Ângelo, 406',
                  href: '/unidade-barao-sto-angelo',
                },
                {
                  bairro: "Passo d'Areia",
                  unidade: "Passo d'Areia",
                  endereco: 'Rua Brigadeiro Oliveira Neri, 175',
                  href: '/unidade-novo-lar-geriatria',
                },
              ].map((unit) => (
                <div key={unit.unidade} className="rounded-xl border border-gray-200 bg-white p-5">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#D4A853]">{unit.bairro}</p>
                  <p className="mb-2 text-base font-bold text-[#2C3E6B]">{unit.unidade}</p>
                  <div className="mb-3 flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2E7B7F]" />
                    <p className="text-xs text-gray-600">{unit.endereco} — Porto Alegre, RS</p>
                  </div>
                  <Link
                    href={unit.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
                  >
                    Ver detalhes <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/porto-alegre"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
              >
                Ver todas as unidades em Porto Alegre <ArrowRight className="h-4 w-4" />
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
          <h2 className="text-3xl font-bold">Fale com nossa equipe — sem compromisso</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/85">
            Atendemos famílias de Canoas e toda a Grande Porto Alegre. Nossa equipe pode orientar
            sobre o nível de cuidado adequado ao seu familiar e agendar uma visita às unidades.
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
