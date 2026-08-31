import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import { COMPANY_CONTACT, getUnitPath } from '@/lib/site-data'
import { BreadcrumbSchema, ServiceSchema } from '@/components/seo/JsonLd'
import { CheckCircle2, Phone, MessageCircle, ArrowRight, Brain, MapPin, Heart } from 'lucide-react'
import { getPageByPath } from '@/lib/sanity/queries'
import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://novo-lar-geriatria.netlify.app'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByPath('/porto-alegre/moinhos-de-vento/cuidados-alzheimer')
  const seo = page?.seo
  return {
    title: seo?.title || 'Cuidados para Alzheimer em Moinhos de Vento, Porto Alegre | Novo Lar Geriatria',
    description: seo?.description || 'Cuidado especializado para idosos com Alzheimer no bairro Moinhos de Vento, Porto Alegre. 2 unidades da Novo Lar no bairro, a 5 minutos do Hospital Moinhos de Vento.',
    openGraph: {
      title: seo?.title || 'Cuidados para Alzheimer em Moinhos de Vento | Novo Lar Geriatria',
      description: seo?.description || 'Residencial especializado em Alzheimer no bairro Moinhos de Vento. Equipe treinada para demências, ambiente adaptado e proximidade com o Hospital Moinhos de Vento.',
      url: `${BASE_URL}/porto-alegre/moinhos-de-vento/cuidados-alzheimer`,
      type: 'website',
      ...(seo?.ogImage?.url && { images: [{ url: seo.ogImage.url }] }),
    },
    alternates: { canonical: `${BASE_URL}/porto-alegre/moinhos-de-vento/cuidados-alzheimer` },
  }
}

const PROTOCOLOS_ALZHEIMER = [
  {
    titulo: 'Ambiente estruturado e previsível',
    desc: 'Rotinas fixas e ambientes sinalizados reduzem a desorientação e a agitação — fundamentais para qualquer fase do Alzheimer.',
  },
  {
    titulo: 'Equipe treinada em demências',
    desc: 'Técnicas de comunicação não verbal, manejo de comportamentos desafiadores e protocolos de segurança para deambulação.',
  },
  {
    titulo: 'Estimulação cognitiva adaptada',
    desc: 'Atividades de reminiscência, musicoterapia e terapia ocupacional adaptadas à capacidade funcional atual do residente.',
  },
  {
    titulo: 'Monitoramento contínuo 24h',
    desc: 'Enfermagem presente em plantão contínuo para monitorar alterações de humor, sono, alimentação e segurança.',
  },
  {
    titulo: 'Nutrição para disfagia',
    desc: 'Cardápios adaptados por nutricionista para residentes com dificuldades de deglutição, frequentes em fases avançadas.',
  },
  {
    titulo: 'Suporte integral à família',
    desc: 'Orientação periódica ao familiar sobre a evolução da doença, como comunicar-se com o residente e o que esperar de cada fase.',
  },
]

const VANTAGENS_BAIRRO = [
  'Moinhos de Vento é um bairro tranquilo e arborizado — ambiente calmo reduz a agitação em pacientes com Alzheimer',
  'Proximidade com o Hospital Moinhos de Vento (referência em neurologia no RS) para consultas e emergências',
  'Bairro central com fácil acesso para famílias de qualquer parte de Porto Alegre e da Grande POA',
  'Infraestrutura completa de saúde no entorno: clínicas, laboratórios, farmácias 24h',
  '2 unidades no mesmo bairro — se uma estiver com capacidade plena, a outra pode estar disponível',
]

export default async function MoinhosAlzheimerPage() {
  const sanityPage = await getPageByPath('/porto-alegre/moinhos-de-vento/cuidados-alzheimer')
  if (sanityPage) return <SeoLandingPage data={sanityPage} />
  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Porto Alegre', url: `${BASE_URL}/porto-alegre` },
          { name: 'Moinhos de Vento', url: `${BASE_URL}/porto-alegre/moinhos-de-vento` },
          { name: 'Cuidados Alzheimer', url: `${BASE_URL}/porto-alegre/moinhos-de-vento/cuidados-alzheimer` },
        ]}
      />
      <ServiceSchema
        name="Cuidados para Alzheimer no bairro Moinhos de Vento, Porto Alegre"
        description="Residencial geriátrico especializado em Alzheimer no bairro Moinhos de Vento, Porto Alegre, com 2 unidades, equipe treinada em demências e proximidade com o Hospital Moinhos de Vento."
        url={`${BASE_URL}/porto-alegre/moinhos-de-vento/cuidados-alzheimer`}
        areaServed="Moinhos de Vento, Porto Alegre"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-14 text-white">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Alzheimer · Bairro Moinhos de Vento · Porto Alegre, RS
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Cuidados para Alzheimer em Moinhos de Vento
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85 leading-relaxed">
              A Novo Lar Geriatria tem 2 unidades no bairro Moinhos de Vento especializadas no
              cuidado de idosos com Alzheimer e outras demências — em um bairro tranquilo de Porto
              Alegre, a minutos do Hospital Moinhos de Vento, referência em neurologia no Rio
              Grande do Sul.
            </p>
            <div className="mt-6 h-px w-24 bg-[#D4A853]" />
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                <li><Link href="/" className="transition hover:text-white">Home</Link></li>
                <li>/</li>
                <li><Link href="/porto-alegre" className="transition hover:text-white">Porto Alegre</Link></li>
                <li>/</li>
                <li><Link href="/porto-alegre/moinhos-de-vento" className="transition hover:text-white">Moinhos de Vento</Link></li>
                <li>/</li>
                <li className="font-medium text-white" aria-current="page">Cuidados Alzheimer</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Por que Moinhos de Vento para Alzheimer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C3E6B]/10">
                  <Brain className="h-6 w-6 text-[#2C3E6B]" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-[#2C3E6B]">
                  Por que Moinhos de Vento é um bairro ideal para idosos com Alzheimer
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Para idosos com Alzheimer, o ambiente onde vivem importa tanto quanto o cuidado
                  que recebem. O bairro Moinhos de Vento oferece condições únicas: é um dos bairros
                  mais tranquilos de Porto Alegre — silencioso, arborizado, sem o caos de tráfego
                  de bairros comerciais. Esse ambiente calmo contribui diretamente para a redução
                  de episódios de agitação e confusão.
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Além do ambiente, a localização estratégica do bairro oferece um diferencial
                  crítico para famílias de idosos com Alzheimer: a proximidade com o{' '}
                  <strong>Hospital Moinhos de Vento</strong>, referência em neurologia e geriatria
                  no Rio Grande do Sul. Em caso de consultas com neurologistas ou situações de
                  emergência clínica, a distância é mínima.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  Com 2 unidades no mesmo bairro, a Novo Lar pode oferecer alternativas de acomodação
                  dentro da mesma localização, facilitando o acompanhamento familiar independente
                  de qual unidade o residente esteja.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold text-[#2C3E6B]">
                  Vantagens do bairro para o cuidado com Alzheimer
                </h3>
                <div className="space-y-3">
                  {VANTAGENS_BAIRRO.map((item, index) => (
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

      {/* Protocolos de cuidado para Alzheimer */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E7B7F]/10">
                <Heart className="h-6 w-6 text-[#2E7B7F]" />
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A853]">Cuidado especializado</p>
              <h2 className="text-3xl font-bold text-[#2C3E6B]">
                Como cuidamos de idosos com Alzheimer
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
                Protocolos desenvolvidos ao longo de 30 anos, adaptados a cada fase da doença
                e às necessidades individuais de cada residente.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {PROTOCOLOS_ALZHEIMER.map((item) => (
                <div key={item.titulo} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="mb-2 text-sm font-bold text-[#2C3E6B]">{item.titulo}</p>
                  <p className="text-xs leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* As duas unidades no bairro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A853]">Unidades no bairro</p>
              <h2 className="text-3xl font-bold text-[#2C3E6B]">
                2 unidades em Moinhos de Vento
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
                Ambas com equipe treinada para demências, estrutura adaptada e o mesmo padrão
                de cuidado especializado.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  slug: 'moinhos-luciana-de-abreu',
                  title: 'Unidade Luciana de Abreu',
                  address: 'Rua Luciana de Abreu, 151 — Moinhos de Vento, Porto Alegre',
                  detail: 'Estrutura com quartos individuais e coletivos e sala de convivência ampla para atividades terapêuticas em grupo.',
                },
                {
                  slug: 'moinhos-barao-de-santo-angelo',
                  title: 'Unidade Barão de Santo Ângelo',
                  address: 'Rua Barão de Santo Ângelo, 406 — Moinhos de Vento, Porto Alegre',
                  detail: 'Ambiente acolhedor e acessível, com programação diária de atividades de estimulação cognitiva e equipe multidisciplinar presente 24h.',
                },
              ].map((unit) => (
                <div
                  key={unit.slug}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-[#F9FAFB] p-6"
                >
                  <p className="mb-2 text-lg font-bold text-[#2C3E6B]">{unit.title}</p>
                  <div className="mb-3 flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2E7B7F]" />
                    <p className="text-sm text-gray-600">{unit.address}</p>
                  </div>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">{unit.detail}</p>
                  <Link
                    href={getUnitPath(unit.slug)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
                  >
                    Ver detalhes completos <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Links de contexto */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/cuidados-alzheimer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
              >
                Sobre Alzheimer e nossos cuidados <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/porto-alegre/moinhos-de-vento"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
              >
                Sobre o bairro Moinhos de Vento <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
              >
                Todos os serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Avaliação gratuita para idosos com Alzheimer</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/85">
            Nossa equipe pode orientá-lo sobre o estágio da doença, o nível de cuidado necessário
            e como funciona a acomodação nas unidades do Moinhos de Vento.
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

