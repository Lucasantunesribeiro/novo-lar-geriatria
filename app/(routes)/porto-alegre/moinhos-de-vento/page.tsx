import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import { COMPANY_CONTACT, getUnitPath } from '@/lib/site-data'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import { MapPin, Phone, MessageCircle, ArrowRight, CheckCircle2, Building2 } from 'lucide-react'
import { getPageByPath } from '@/lib/sanity/queries'
import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://novo-lar-geriatria.netlify.app'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByPath('/porto-alegre/moinhos-de-vento')
  const seo = page?.seo
  return {
    title: seo?.title || 'Casa de Repouso em Moinhos de Vento, Porto Alegre | Novo Lar Geriatria',
    description: seo?.description || 'Residencial geriátrico no bairro Moinhos de Vento em Porto Alegre. A Novo Lar Geriatria tem 2 unidades neste bairro nobre, próximas ao Hospital Moinhos de Vento.',
    openGraph: {
      title: seo?.title || 'Casa de Repouso em Moinhos de Vento | Novo Lar Geriatria',
      description: seo?.description || '2 unidades da Novo Lar Geriatria no bairro Moinhos de Vento, Porto Alegre. Atendimento 24h com equipe multidisciplinar em localização privilegiada.',
      url: `${BASE_URL}/porto-alegre/moinhos-de-vento`,
      type: 'website',
      ...(seo?.ogImage?.url && { images: [{ url: seo.ogImage.url }] }),
    },
    alternates: { canonical: `${BASE_URL}/porto-alegre/moinhos-de-vento` },
  }
}

const UNIDADES_MOINHOS = [
  {
    slug: 'moinhos-luciana-de-abreu',
    address: 'Rua Luciana de Abreu, 151',
    title: 'Unidade Luciana de Abreu',
    detail: 'Estrutura completa com quartos individuais e coletivos e sala de convivência.',
  },
  {
    slug: 'moinhos-barao-de-santo-angelo',
    address: 'Rua Barão de Santo Ângelo, 406',
    title: 'Unidade Barão de Santo Ângelo',
    detail: 'Ambiente acolhedor e acessível com equipe multidisciplinar 24h e programação diária de atividades.',
  },
]

const SOBRE_BAIRRO = [
  'Bairro residencial nobre, tranquilo e arborizado — ideal para o bem-estar de idosos',
  'Localização central com fácil acesso de qualquer região de Porto Alegre',
  'Próximo ao Hospital Moinhos de Vento, referência em saúde no Rio Grande do Sul',
  'Bem servido por transporte público e com infraestrutura urbana completa',
  'Vizinhança segura, com praças e áreas de lazer próximas às unidades',
  'Próximo a farmácias, clínicas especializadas e serviços de apoio à saúde',
]

export default async function MoinhosDeVentoPage() {
  const sanityPage = await getPageByPath('/porto-alegre/moinhos-de-vento')
  if (sanityPage) return <SeoLandingPage data={sanityPage} />

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Porto Alegre', url: `${BASE_URL}/porto-alegre` },
          { name: 'Moinhos de Vento', url: `${BASE_URL}/porto-alegre/moinhos-de-vento` },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-14 text-white">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Bairro Moinhos de Vento · Porto Alegre, RS
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Casa de Repouso no Moinhos de Vento
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85 leading-relaxed">
              A Novo Lar Geriatria está presente no bairro Moinhos de Vento com duas unidades de
              hospedagem assistida — em localização privilegiada, próximas ao Hospital Moinhos de
              Vento e à infraestrutura de saúde da zona norte de Porto Alegre.
            </p>
            <div className="mt-6 h-px w-24 bg-[#D4A853]" />
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                <li><Link href="/" className="transition hover:text-white">Home</Link></li>
                <li>/</li>
                <li><Link href="/porto-alegre" className="transition hover:text-white">Porto Alegre</Link></li>
                <li>/</li>
                <li className="font-medium text-white" aria-current="page">Moinhos de Vento</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Sobre o bairro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#D4A853]">
                  Por que Moinhos de Vento?
                </p>
                <h2 className="mb-5 text-3xl font-bold text-[#2C3E6B] sm:text-4xl">
                  Um dos bairros mais valorizados de Porto Alegre
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Moinhos de Vento é conhecido por sua qualidade de vida, tranquilidade e excelente
                  infraestrutura urbana. Para famílias que buscam um residencial geriátrico em Porto
                  Alegre, o bairro oferece o que é mais importante: segurança, proximidade com
                  referências de saúde de alto nível e um ambiente agradável para o dia a dia.
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  A presença de duas unidades da Novo Lar neste bairro permite que famílias que
                  residem ou trabalham na região tenham acesso facilitado para visitar seus familiares
                  diariamente — algo que valorizamos e incentivamos ativamente.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  Cada unidade mantém a mesma filosofia de cuidado da Novo Lar: equipe
                  multidisciplinar presente 24h, rotina individualizada e comunicação transparente
                  com as famílias.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold text-[#2C3E6B]">
                  Vantagens desta localização
                </h3>
                <div className="space-y-3">
                  {SOBRE_BAIRRO.map((item, index) => (
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

      {/* As 2 unidades no bairro */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A853]">
                Nossas unidades neste bairro
              </p>
              <h2 className="text-3xl font-bold text-[#2C3E6B]">
                2 unidades em Moinhos de Vento
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
                Escolha a unidade mais conveniente para sua família. Ambas seguem o mesmo padrão
                de cuidado e contam com equipe completa presente 24 horas.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {UNIDADES_MOINHOS.map((unit) => (
                <div
                  key={unit.slug}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#2C3E6B]/10">
                    <Building2 className="h-5 w-5 text-[#2C3E6B]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[#2C3E6B]">{unit.title}</h3>
                  <div className="mb-3 flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2E7B7F]" />
                    <p className="text-sm text-gray-600">{unit.address} — Moinhos de Vento, Porto Alegre</p>
                  </div>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">{unit.detail}</p>
                  <Link
                    href={getUnitPath(unit.slug)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
                  >
                    Ver detalhes da unidade <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-gray-500">
              Não sabe qual unidade escolher?{' '}
              <Link href="/contato" className="font-semibold text-[#2C3E6B] transition hover:text-[#2E7B7F]">
                Fale conosco
              </Link>{' '}
              e nossa equipe orienta você.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Agende uma visita em Moinhos de Vento</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/85">
            Conheça pessoalmente nossas unidades no bairro e veja como podemos cuidar
            do seu familiar com segurança, conforto e atenção integral.
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
          <p className="mt-6 text-sm text-white/70">
            Também temos unidade no{' '}
            <Link href="/porto-alegre/passo-dareia" className="font-semibold text-white underline-offset-2 hover:underline">
              Passo d'Areia
            </Link>
            {' '}e atendemos famílias de toda Porto Alegre.
          </p>
        </div>
      </section>

      <FooterWrapper />
    </div>
  )
}

