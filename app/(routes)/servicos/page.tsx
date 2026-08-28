import type { Metadata } from 'next'

import EstruturaModalidades from '@/components/estrutura/EstruturaModalidades'
import FooterWrapper from '@/components/layout/FooterWrapper'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import ServiceCard from '@/components/servicos/ServiceCard'
import { getHeroSection, getServicesSection } from '@/lib/cms/legacy-page-content'
import { fetchCmsPage } from '@/lib/cms/page'
import { buildCmsBackedMetadata } from '@/lib/cms/route'
import { withCanonicalPath } from '@/lib/seo/metadata'
import { getAllServices } from '@/lib/sanity/queries'

const fallbackMetadata: Metadata = withCanonicalPath(
  {
    title: 'Serviços | Novo Lar Geriatria',
    description:
      'Hospedagem assistida 24h, enfermagem e médico geriatra, nutrição individualizada, fisioterapia, terapia ocupacional, musicoterapia e mais. Serviços especializados em cuidados para idosos em Porto Alegre.',
    openGraph: {
      title: 'Serviços Especializados | Novo Lar Geriatria',
      description:
        'Atendimento multidisciplinar com protocolos exclusivos para promover segurança, autonomia e qualidade de vida aos idosos em Porto Alegre.',
    },
  },
  '/servicos'
)

export async function generateMetadata() {
  return buildCmsBackedMetadata('/servicos', fallbackMetadata)
}

interface ServiceDoc {
  title: string
  slug: { current: string }
  description?: string
  summary?: string
  subtitle?: string
  highlights?: string[]
  heroImageUrl?: string
  heroImageAlt?: string
  gallery?: Array<{ _key: string; src?: string; alt?: string }>
}

function normalizeServiceImages(service: ServiceDoc) {
  const galleryImages =
    service.gallery
      ?.filter((image) => image.src)
      .slice(0, 4)
      .map((image) => ({
        src: image.src as string,
        alt: image.alt || service.title,
      })) || []

  if (galleryImages.length === 4) {
    return galleryImages
  }

  const fallbackImage = service.heroImageUrl || '/placeholders/hero-home.jpg'
  const fallbackAlt = service.heroImageAlt || service.title

  while (galleryImages.length < 4) {
    galleryImages.push({
      src: fallbackImage,
      alt: fallbackAlt,
    })
  }

  return galleryImages
}

interface LegacyServicesPageProps {
  title?: string
  description?: string
  services: ServiceDoc[]
}

function LegacyServicesPage({ title, description, services }: LegacyServicesPageProps) {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <HeaderWrapper />

      <EstruturaModalidades />

      <section className="flex flex-col items-center w-full bg-[#F9FAFB] py-16 lg:py-[80px] px-4 sm:px-8">
        <div className="flex flex-col items-center w-full max-w-[1180px] gap-12 lg:gap-[48px]">
          <div className="flex flex-col items-center w-full gap-4 text-center">
            <h1 className="font-bold text-4xl lg:text-[48px] lg:leading-[48px] text-[#2C3E6B]">
              {title || 'Serviços especializados'}
            </h1>
            <p className="font-normal text-base md:text-lg text-[#4A5565] max-w-[912px]">
              {description ||
                'Atendimento multidisciplinar com protocolos exclusivos para promover segurança, autonomia e qualidade de vida.'}
            </p>
          </div>

          <div className="flex flex-col items-center w-full gap-12 lg:gap-[48px]">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug.current}
                tag={service.subtitle || 'Cuidado especializado'}
                title={service.title}
                description={service.summary || service.description || ''}
                benefits={
                  service.highlights && service.highlights.length > 0
                    ? service.highlights
                    : ['Rotina assistida', 'Acompanhamento profissional', 'Plano individualizado']
                }
                images={normalizeServiceImages(service)}
                link={`/servicos/${service.slug.current}`}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <FooterWrapper />
    </div>
  )
}

import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'

export default async function ServicesPage() {
  const cmsPage = await fetchCmsPage('/servicos')

  if (cmsPage && cmsPage.sections && cmsPage.sections.length > 0) {
    return <SeoLandingPage data={cmsPage} />
  }

  const heroSection = getHeroSection(cmsPage)
  const servicesSection = getServicesSection(cmsPage)
  const allServices = (await getAllServices()) as ServiceDoc[]

  const selectedSlugs = servicesSection?.servicesResolved?.map((service) => service.slug.current) || []

  const orderedServices =
    selectedSlugs.length > 0
      ? selectedSlugs
          .map((slug) => allServices.find((service) => service.slug?.current === slug))
          .filter(Boolean) as ServiceDoc[]
      : allServices

  return (
    <LegacyServicesPage
      title={heroSection?.title}
      description={heroSection?.description}
      services={orderedServices}
    />
  )
}
