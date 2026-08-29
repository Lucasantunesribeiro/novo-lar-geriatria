import type { ReactNode } from 'react'
import type { Metadata } from 'next'

import EstruturaModalidades from '@/components/estrutura/EstruturaModalidades'
import FooterWrapper from '@/components/layout/FooterWrapper'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import ServiceCard from '@/components/servicos/ServiceCard'
import { acharBloco } from '@/types/cms-blocos'
import { renderBloco } from '@/components/cms/BlocosDaPagina'
import { cx, blocoOculto } from '@/lib/cms/estilo'
import { classeTexto, estiloDeTexto, styleBloco } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'
import { getHeroSection, getServicesSection } from '@/lib/cms/legacy-page-content'
import { fetchCmsPage } from '@/lib/cms/page'
import { buildCmsBackedMetadata } from '@/lib/cms/route'
import { withCanonicalPath } from '@/lib/seo/metadata'
import { getAllServices, getTextosGlobais } from '@/lib/sanity/queries'

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
  modalidades?: ReactNode
  listaOculta?: boolean
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estiloLista?: EstiloBloco
  rotuloBeneficios?: string
}

function LegacyServicesPage({
  title,
  description,
  services,
  modalidades,
  listaOculta,
  estiloTitulo,
  estiloDescricao,
  estiloLista,
  rotuloBeneficios,
}: LegacyServicesPageProps) {
  if (listaOculta) {
    return (
      <div className="flex flex-col items-center w-full min-h-screen">
        <HeaderWrapper />
        {modalidades ?? <EstruturaModalidades />}
        <FooterWrapper />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <HeaderWrapper />

      {modalidades ?? <EstruturaModalidades />}

      <section
        className="flex flex-col items-center w-full bg-[#F9FAFB] py-16 lg:py-[80px] px-4 sm:px-8"
        style={styleBloco(estiloLista)}
      >
        <div className="flex flex-col items-center w-full max-w-[1180px] gap-12 lg:gap-[48px]">
          <div className="flex flex-col items-center w-full gap-4 text-center">
            <h1
              className={cx('font-bold text-4xl lg:text-[48px] lg:leading-[48px] text-[#2C3E6B]', classeTexto(estiloTitulo))}
              style={estiloDeTexto(estiloTitulo)}
            >
              {title || 'Serviços especializados'}
            </h1>
            <p
              className={cx('font-normal text-base md:text-lg text-[#4A5565] max-w-[912px]', classeTexto(estiloDescricao))}
              style={estiloDeTexto(estiloDescricao)}
            >
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
                rotuloBeneficios={rotuloBeneficios}
              />
            ))}
          </div>
        </div>
      </section>

      <FooterWrapper />
    </div>
  )
}

export default async function ServicesPage() {
  const cmsPage = await fetchCmsPage('/servicos')
  const heroSection = getHeroSection(cmsPage)
  const servicesSection = getServicesSection(cmsPage)
  const allServices = (await getAllServices()) as ServiceDoc[]
  const rotulos = (await getTextosGlobais()) as {rotuloBeneficios?: string} | null

  const blocoLista = acharBloco(cmsPage?.blocos, 'servicosLista')
  // Escolha feita no bloco do Studio; sem ela, a secao antiga; sem as duas,
  // todos os servicos cadastrados.
  const escolhidosNoBloco = (blocoLista?.itensServico ?? []) as Array<{
    slug?: {current?: string}
  }>
  const selectedSlugs = escolhidosNoBloco.length
    ? escolhidosNoBloco.map((s) => s.slug?.current).filter(Boolean as unknown as (v: unknown) => v is string)
    : servicesSection?.servicesResolved?.map((service) => service.slug.current) || []

  const orderedServices =
    selectedSlugs.length > 0
      ? selectedSlugs
          .map((slug) => allServices.find((service) => service.slug?.current === slug))
          .filter(Boolean) as ServiceDoc[]
      : allServices

  // Blocos espelho do Studio (quando existirem).
  const blocoModalidades = acharBloco(cmsPage?.blocos, 'servicosModalidades')

  const modalidades =
    blocoModalidades && !blocoOculto(blocoModalidades.estilo)
      ? renderBloco(blocoModalidades, 'servicosModalidades')
      : blocoModalidades
        ? null
        : undefined

  return (
    <LegacyServicesPage
      rotuloBeneficios={rotulos?.rotuloBeneficios}
      modalidades={modalidades}
      listaOculta={blocoOculto(blocoLista?.estilo)}
      estiloTitulo={blocoLista?.estiloTitulo}
      estiloDescricao={blocoLista?.estiloDescricao}
      estiloLista={blocoLista?.estilo}
      title={blocoLista?.titulo || heroSection?.title}
      description={blocoLista?.descricao || heroSection?.description}
      services={orderedServices}
    />
  )
}
