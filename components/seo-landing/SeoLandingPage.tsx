import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import { BreadcrumbSchema, FAQPageSchema, ServiceSchema } from '@/components/seo/JsonLd'
import { SectionRenderer } from './SectionRenderer'

const BASE_URL = 'https://novolargeriatria.com.br'

interface SeoData {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: { url: string }
}

interface ServiceSchemaData {
  name?: string
  description?: string
  areaServed?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SectionData = Record<string, any>

interface SanityPageData {
  _id: string
  title: string
  path: string
  seo?: SeoData
  serviceSchema?: ServiceSchemaData
  sections?: SectionData[]
}

export async function SeoLandingPage({ data }: { data: SanityPageData }) {
  const sections = data.sections || []

  // Extract breadcrumbs from first seoHeroSection
  const heroSection = sections.find((s) => s._type === 'seoHeroSection')
  const breadcrumbs: Array<{ label: string; href?: string }> = heroSection?.breadcrumbs || []

  const breadcrumbItems = breadcrumbs.map((crumb: { label: string; href?: string }) => ({
    name: crumb.label,
    url: crumb.href ? `${BASE_URL}${crumb.href}` : `${BASE_URL}${data.path}`,
  }))

  // If no breadcrumbs from hero, build a minimal one
  if (breadcrumbItems.length === 0) {
    breadcrumbItems.push(
      { name: 'Home', url: BASE_URL },
      { name: data.title, url: `${BASE_URL}${data.path}` }
    )
  }

  // Extract FAQs from faqSection(s)
  const faqSections = sections.filter((s) => s._type === 'faqSection')
  const allFaqs = faqSections.flatMap(
    (s) => (s.faqs as Array<{ question: string; answer: string }>) || []
  )

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      {/* JSON-LD schemas */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {allFaqs.length > 0 && <FAQPageSchema faqs={allFaqs} />}

      {data.serviceSchema?.name && (
        <ServiceSchema
          name={data.serviceSchema.name}
          description={data.serviceSchema.description || ''}
          areaServed={data.serviceSchema.areaServed || 'Porto Alegre'}
          url={`${BASE_URL}${data.path}`}
        />
      )}

      {/* Render all sections */}
      {sections.map((section, i) => (
        <SectionRenderer key={section._key || i} section={section} />
      ))}

      <FooterWrapper />
    </div>
  )
}
