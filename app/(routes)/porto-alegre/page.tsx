import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import { COMPANY_CONTACT, UNITS } from '@/lib/site-data'
import { BreadcrumbSchema, ServiceSchema } from '@/components/seo/JsonLd'
import { MapPin, Phone, MessageCircle, CheckCircle2, ArrowRight, Clock, Users } from 'lucide-react'
import { getPageByPath } from '@/lib/sanity/queries'
import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'

const BASE_URL = 'https://novolargeriatria.com.br'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByPath('/porto-alegre')
  const seo = page?.seo
  return {
    title: seo?.title || 'Casa de Repouso em Porto Alegre | Novo Lar Geriatria',
    description: seo?.description || 'Residencial geriátrico e ILPI em Porto Alegre com cuidados 24h, médico geriatra e equipe multidisciplinar. 3 unidades em Moinhos de Vento e Passo d\'Areia. Hospedagem permanente e temporária.',
    openGraph: {
      title: seo?.title || 'Casa de Repouso em Porto Alegre | Novo Lar Geriatria',
      description: seo?.description || 'ILPI em Porto Alegre com atendimento 24h, médico geriatra, enfermagem, fisioterapia e atividades terapêuticas. 3 unidades em bairros nobres de Porto Alegre.',
      url: `${BASE_URL}/porto-alegre`,
      type: 'website',
      ...(seo?.ogImage?.url && { images: [{ url: seo.ogImage.url }] }),
    },
    alternates: { canonical: `${BASE_URL}/porto-alegre` },
  }
}

const DIFERENCIAIS = [
  'Equipe multidisciplinar 24h: médico geriatra, enfermeiros, fisioterapeutas e terapeutas',
  'Hospedagem permanente ou temporária com plano individualizado',
  'Estrutura completa: quartos acessíveis, áreas verdes e sala de convivência',
  'Nutrição especializada em geriatria com 6 refeições diárias',
  'Atividades terapêuticas, cognitivas e recreativas diárias',
  'Comunicação transparente e visitas diárias com a família',
]

const UNIT_IMAGES = [
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/18.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Barão de Santo Ângelo, 406/19.jpeg',
  '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/11.jpeg',
]

export default async function PortoAlegreePage() {
  const sanityPage = await getPageByPath('/porto-alegre')
  if (sanityPage) return <SeoLandingPage data={sanityPage} />

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Porto Alegre', url: `${BASE_URL}/porto-alegre` },
        ]}
      />
      <ServiceSchema
        name="Residencial Geriátrico em Porto Alegre"
        description="Cuidados especializados 24h para idosos em Porto Alegre, com médico geriatra, enfermagem, fisioterapia e atividades terapêuticas em 3 unidades."
        url={`${BASE_URL}/porto-alegre`}
        areaServed="Porto Alegre"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-14 text-white">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              ILPI · Residencial Geriátrico · Casa de Repouso
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Casa de Repouso em Porto Alegre
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85 leading-relaxed">
              A Novo Lar Geriatria oferece cuidados especializados 24 horas para idosos em Porto Alegre,
              com equipe multidisciplinar completa e três unidades em Moinhos de Vento e Passo d'Areia.
            </p>
            <div className="mt-6 h-px w-24 bg-[#D4A853]" />
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#10B981] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#059669]"
              >
                <MessageCircle className="h-4 w-4" />
                Falar por WhatsApp
              </a>
              <a
                href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                {COMPANY_CONTACT.centralPhoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#D4A853]">
                  Referência em Porto Alegre desde 1994
                </p>
                <h2 className="mb-5 text-3xl font-bold text-[#2C3E6B] sm:text-4xl">
                  O cuidado integral que o seu familiar merece
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  A Novo Lar é uma das ILPIs (Instituições de Longa Permanência para Idosos) mais experientes de
                  Porto Alegre, com mais de 30 anos dedicados ao cuidado humanizado de idosos em diferentes
                  graus de dependência.
                </p>
                <p className="mb-6 text-base leading-relaxed text-gray-700">
                  Nossas três unidades funcionam como residências geriátricas completas — combinando hotelaria
                  de qualidade, assistência médica e de enfermagem 24 horas, fisioterapia, nutrição
                  individualizada e atividades terapêuticas diárias.
                </p>
                <div className="flex items-center gap-3 rounded-xl border border-[#D4A853]/30 bg-[#D4A853]/5 px-5 py-4">
                  <Clock className="h-5 w-5 flex-shrink-0 text-[#D4A853]" />
                  <p className="text-sm font-medium text-[#2C3E6B]">
                    Atendimento comercial das 9h às 19h · Equipe clínica presente 24h por dia
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '30+', label: 'anos de experiência' },
                  { value: '3', label: 'unidades em Porto Alegre' },
                  { value: '24h', label: 'equipe clínica presente' },
                  { value: '5,0', label: 'estrelas no Google' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-[#F9FAFB] p-5 text-center"
                  >
                    <span className="text-3xl font-bold text-[#2C3E6B]">{item.value}</span>
                    <span className="mt-1 text-xs text-gray-500">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossas unidades */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A853]">Localização</p>
              <h2 className="text-3xl font-bold text-[#2C3E6B] sm:text-4xl">
                3 unidades em Porto Alegre
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
                Presentes em dois bairros tradicionais da zona norte de Porto Alegre, próximos a hospitais
                e serviços de saúde de referência.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {UNITS.map((unit, index) => (
                <div
                  key={unit.slug}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={UNIT_IMAGES[index]}
                      alt={`Unidade Novo Lar Geriatria — ${unit.neighborhood}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2E7B7F]" />
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {unit.neighborhood}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-[#2C3E6B]">{unit.address}</p>
                    <Link
                      href={`/unidades/${unit.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
                    >
                      Ver unidade <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A853]">Por que escolher</p>
              <h2 className="text-3xl font-bold text-[#2C3E6B] sm:text-4xl">
                O que diferencia a Novo Lar
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {DIFERENCIAIS.map((item, index) => (
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

      {/* Serviços */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-[#2C3E6B]">Serviços incluídos</h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
                Todos os cuidados sob o mesmo teto, sem necessidade de contratações externas.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {[
                { label: 'Hospedagem assistida 24h', href: '/servicos/hospedagem-assistida-24h' },
                { label: 'Médico e enfermagem 24h', href: '/servicos/enfermagem-medico-24h' },
                { label: 'Nutrição individualizada', href: '/servicos/nutricao-individualizada' },
                { label: 'Fisioterapia', href: '/servicos/fisioterapia-geriatrica' },
                { label: 'Terapia ocupacional', href: '/servicos/terapia-ocupacional' },
                { label: 'Musicoterapia', href: '/servicos/musicoterapia-socializacao' },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-[#2C3E6B] transition hover:border-[#2E7B7F]/40 hover:text-[#2E7B7F] hover:shadow-sm"
                >
                  {s.label}
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-[#D4A853]" />
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] transition hover:text-[#2C3E6B]"
              >
                Ver todos os serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Users className="mx-auto mb-4 h-10 w-10 text-[#D4A853]" />
          <h2 className="text-3xl font-bold">Agende uma visita gratuita</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/85">
            Conheça pessoalmente nossas unidades em Porto Alegre e entenda como podemos cuidar
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
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Agendar pelo formulário
            </Link>
          </div>
        </div>
      </section>

      <FooterWrapper />
    </div>
  )
}
