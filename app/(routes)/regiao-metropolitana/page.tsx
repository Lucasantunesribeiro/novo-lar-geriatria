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
  const page = await getPageByPath('/regiao-metropolitana')
  const seo = page?.seo
  return {
    title: seo?.title || 'Casa de Repouso para Idosos — Região Metropolitana de Porto Alegre | Novo Lar',
    description: seo?.description || 'Procurando casa de repouso na Grande Porto Alegre? A Novo Lar Geriatria tem 3 unidades em Porto Alegre, acessíveis para famílias de toda a região metropolitana.',
    openGraph: {
      title: seo?.title || 'Casa de Repouso — Região Metropolitana de Porto Alegre | Novo Lar Geriatria',
      description: seo?.description || 'Residencial geriátrico em Porto Alegre atendendo famílias de toda a Grande Porto Alegre. Equipe multidisciplinar 24h, 3 unidades e mais de 30 anos de experiência.',
      url: `${BASE_URL}/regiao-metropolitana`,
      type: 'website',
      ...(seo?.ogImage?.url && { images: [{ url: seo.ogImage.url }] }),
    },
    alternates: { canonical: `${BASE_URL}/regiao-metropolitana` },
  }
}

const CIDADES_METRO = [
  { cidade: 'Canoas', tempo: '20–30 min', via: 'BR-116 / RS-020' },
  { cidade: 'São Leopoldo', tempo: '35–45 min', via: 'BR-116' },
  { cidade: 'Novo Hamburgo', tempo: '45–60 min', via: 'BR-116' },
  { cidade: 'Sapucaia do Sul', tempo: '25–35 min', via: 'BR-116' },
  { cidade: 'Cachoeirinha', tempo: '20–30 min', via: 'RS-020' },
  { cidade: 'Gravataí', tempo: '30–40 min', via: 'RS-020 / RS-010' },
  { cidade: 'Alvorada', tempo: '25–35 min', via: 'RS-130' },
  { cidade: 'Viamão', tempo: '30–40 min', via: 'RS-040' },
]

const MOTIVOS = [
  'Porto Alegre concentra os melhores hospitais e clínicas especializadas em geriatria do Rio Grande do Sul',
  'Infraestrutura de saúde completa para casos que exigem encaminhamentos ou internações',
  'Acesso facilitado pela BR-116 e principais vias de interligação metropolitana',
  'Ambiente urbano seguro e familiar, com serviços próximos às unidades',
  'Possibilidade de visitas frequentes — as unidades ficam em bairros de fácil acesso',
]

export default async function RegiaoMetropolitanaPage() {
  const sanityPage = await getPageByPath('/regiao-metropolitana')
  if (sanityPage) return <SeoLandingPage data={sanityPage} />

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Região Metropolitana', url: `${BASE_URL}/regiao-metropolitana` },
        ]}
      />
      <ServiceSchema
        name="Casa de Repouso para idosos da Região Metropolitana de Porto Alegre"
        description="Residencial geriátrico em Porto Alegre atendendo famílias de toda a Grande Porto Alegre com cuidados especializados 24h."
        url={`${BASE_URL}/regiao-metropolitana`}
        areaServed="Região Metropolitana de Porto Alegre"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-14 text-white">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Grande Porto Alegre · Região Metropolitana, RS
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Casa de Repouso para a Grande Porto Alegre
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85 leading-relaxed">
              A Novo Lar Geriatria fica em Porto Alegre e atende famílias de toda a região metropolitana.
              Com 3 unidades bem localizadas, famílias de Canoas, São Leopoldo, Novo Hamburgo e outros
              municípios conseguem visitar seus familiares com regularidade.
            </p>
            <div className="mt-6 h-px w-24 bg-[#D4A853]" />
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                <li><Link href="/" className="transition hover:text-white">Home</Link></li>
                <li>/</li>
                <li className="font-medium text-white" aria-current="page">Região Metropolitana</li>
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
              <strong>As unidades da Novo Lar Geriatria ficam em Porto Alegre</strong> — nos bairros
              Moinhos de Vento (2 unidades) e Passo d'Areia (1 unidade). Não temos unidades em outras
              cidades da região metropolitana.
            </p>
          </div>
        </div>
      </section>

      {/* Por que Porto Alegre */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#D4A853]">
                  Por que famílias da Grande POA escolhem Porto Alegre
                </p>
                <h2 className="mb-5 text-3xl font-bold text-[#2C3E6B] sm:text-4xl">
                  A referência em cuidado geriátrico está na capital
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Para famílias da Grande Porto Alegre, a decisão de buscar um residencial geriátrico
                  em Porto Alegre vai além da proximidade. A capital concentra a maior e melhor
                  infraestrutura de saúde do estado — hospitais de referência, especialistas em
                  geriatria, clínicas neurológicas e serviços de suporte que fazem diferença quando
                  o idoso tem condições clínicas complexas.
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Muitas famílias que residem ou trabalham em municípios como Canoas, São Leopoldo
                  ou Novo Hamburgo optam por uma ILPI em Porto Alegre justamente pela qualidade
                  do atendimento especializado e pela facilidade de locomoção pela BR-116 e demais
                  vias metropolitanas.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  As unidades da Novo Lar em Moinhos de Vento ficam próximas ao Hospital Moinhos
                  de Vento — referência no RS — e a unidade do Passo d'Areia tem fácil acesso
                  para quem vem da zona norte e do eixo norte metropolitano.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold text-[#2C3E6B]">
                  Por que Porto Alegre para famílias da Grande POA
                </h3>
                <div className="space-y-3">
                  {MOTIVOS.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2E7B7F]" />
                      <p className="text-sm leading-relaxed text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tempos de deslocamento */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C3E6B]/10">
                <Clock className="h-6 w-6 text-[#2C3E6B]" />
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A853]">Deslocamento</p>
              <h2 className="text-3xl font-bold text-[#2C3E6B]">
                Distância das principais cidades metropolitanas
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
                Tempos estimados até as unidades da Novo Lar em Porto Alegre, em condições normais de trânsito.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {CIDADES_METRO.map((item) => (
                <div
                  key={item.cidade}
                  className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm"
                >
                  <p className="font-bold text-[#2C3E6B]">{item.cidade}</p>
                  <p className="mt-1 text-2xl font-bold text-[#2E7B7F]">{item.tempo}</p>
                  <p className="mt-1 text-xs text-gray-500">{item.via}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-gray-400">
              Tempos aproximados em condições normais de tráfego. Podem variar no horário de pico.
            </p>
          </div>
        </div>
      </section>

      {/* Nossas unidades */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A853]">Localização</p>
              <h2 className="text-3xl font-bold text-[#2C3E6B]">
                Nossas 3 unidades em Porto Alegre
              </h2>
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
                <div key={unit.unidade} className="rounded-xl border border-gray-200 bg-[#F9FAFB] p-5">
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Agende uma visita — venha conhecer pessoalmente</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/85">
            Nosso time orienta famílias de toda a Grande Porto Alegre. Fale conosco para entender
            qual unidade é mais conveniente para a rotina da sua família.
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

