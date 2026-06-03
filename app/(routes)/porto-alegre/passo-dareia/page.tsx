import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import { MapPin, Phone, MessageCircle, ArrowRight, CheckCircle2, Building2 } from 'lucide-react'
import { getPageByPath } from '@/lib/sanity/queries'
import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://novo-lar-geriatria.netlify.app'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByPath('/porto-alegre/passo-dareia')
  const seo = page?.seo
  return {
    title: seo?.title || "Casa de Repouso no Passo d'Areia, Porto Alegre | Novo Lar Geriatria",
    description: seo?.description || "Residencial geriátrico no bairro Passo d'Areia em Porto Alegre. Unidade da Novo Lar Geriatria com atendimento 24h, equipe multidisciplinar e fácil acesso da zona norte.",
    openGraph: {
      title: seo?.title || "Casa de Repouso no Passo d'Areia | Novo Lar Geriatria",
      description: seo?.description || "Unidade Novo Lar Geriatria no Passo d'Areia, Porto Alegre. Hospedagem assistida 24h com equipe completa e ambiente acolhedor na zona norte.",
      url: `${BASE_URL}/porto-alegre/passo-dareia`,
      type: 'website',
      ...(seo?.ogImage?.url && { images: [{ url: seo.ogImage.url }] }),
    },
    alternates: { canonical: `${BASE_URL}/porto-alegre/passo-dareia` },
  }
}

const SOBRE_BAIRRO = [
  "Bairro residencial da zona norte de Porto Alegre, bem servido por transporte público",
  "Localização acessível para famílias das zonas norte, leste e centro de Porto Alegre",
  "Próximo a serviços de saúde, farmácias e infraestrutura urbana completa",
  "Ambiente tranquilo e familiar, propício ao bem-estar dos residentes",
  "Fácil acesso pela Av. Protásio Alves e outras vias de conexão com a cidade",
  "Bairro consolidado com boa oferta de comércio e serviços no entorno",
]

export default async function PassoDareiaPage() {
  const sanityPage = await getPageByPath('/porto-alegre/passo-dareia')
  if (sanityPage) return <SeoLandingPage data={sanityPage} />

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Porto Alegre', url: `${BASE_URL}/porto-alegre` },
          { name: "Passo d'Areia", url: `${BASE_URL}/porto-alegre/passo-dareia` },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-14 text-white">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Bairro Passo d'Areia · Porto Alegre, RS
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Casa de Repouso no Passo d'Areia
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85 leading-relaxed">
              A Novo Lar Geriatria está presente no bairro Passo d'Areia com uma unidade de
              hospedagem assistida — localização acessível para famílias da zona norte de
              Porto Alegre, com o mesmo padrão de cuidado 24h das demais unidades.
            </p>
            <div className="mt-6 h-px w-24 bg-[#D4A853]" />
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                <li><Link href="/" className="transition hover:text-white">Home</Link></li>
                <li>/</li>
                <li><Link href="/porto-alegre" className="transition hover:text-white">Porto Alegre</Link></li>
                <li>/</li>
                <li className="font-medium text-white" aria-current="page">Passo d'Areia</li>
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
                  Por que Passo d'Areia?
                </p>
                <h2 className="mb-5 text-3xl font-bold text-[#2C3E6B] sm:text-4xl">
                  Localização acessível na zona norte de Porto Alegre
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  O bairro Passo d'Areia é uma das escolhas mais práticas para famílias que residem
                  ou trabalham na zona norte de Porto Alegre. Sua localização estratégica permite
                  que filhos, netos e amigos façam visitas frequentes sem enfrentar longas distâncias
                  ou trânsito intenso.
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Para a Novo Lar Geriatria, a presença nesse bairro representa o compromisso de
                  estar próxima das famílias gaúchas que buscam uma alternativa de cuidado
                  especializado na região norte da cidade.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  A unidade do Passo d'Areia segue exatamente o mesmo protocolo de cuidado das
                  unidades em Moinhos de Vento: equipe multidisciplinar 24h, rotina individualizada,
                  atividades terapêuticas diárias e comunicação aberta com as famílias.
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

      {/* A unidade no bairro */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A853]">
                Nossa unidade neste bairro
              </p>
              <h2 className="text-3xl font-bold text-[#2C3E6B]">
                Unidade Passo d'Areia
              </h2>
            </div>
            <div className="mx-auto max-w-lg">
              <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#2C3E6B]/10">
                  <Building2 className="h-5 w-5 text-[#2C3E6B]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#2C3E6B]">Novo Lar Geriatria — Passo d'Areia</h3>
                <div className="mb-3 flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2E7B7F]" />
                  <p className="text-sm text-gray-600">
                    Rua Brigadeiro Oliveira Neri, 175 — Passo d'Areia, Porto Alegre - RS
                  </p>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  Estrutura completa com quartos acessíveis, área de convivência, equipe
                  multidisciplinar 24h e programação diária de atividades terapêuticas e recreativas.
                </p>
                <Link
                  href="/unidade-novo-lar-geriatria"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
                >
                  Ver detalhes completos da unidade <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-gray-500">
              Prefere Moinhos de Vento? Temos{' '}
              <Link href="/porto-alegre/moinhos-de-vento" className="font-semibold text-[#2C3E6B] transition hover:text-[#2E7B7F]">
                2 unidades no bairro
              </Link>
              {' '}com o mesmo padrão de cuidado.
            </p>
          </div>
        </div>
      </section>

      {/* O mesmo padrão nas 3 unidades */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-[#2C3E6B]">
              O mesmo cuidado em todas as unidades de Porto Alegre
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-700">
              Independente de qual unidade o seu familiar esteja, a Novo Lar Geriatria garante
              os mesmos protocolos de cuidado, a mesma qualidade de equipe e o mesmo compromisso
              com a família.
            </p>
            <Link
              href="/porto-alegre"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
            >
              Ver todas as unidades em Porto Alegre <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Agende uma visita no Passo d'Areia</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/85">
            Conheça pessoalmente nossa unidade e entenda como podemos cuidar do seu familiar
            com segurança, conforto e atenção integral.
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

