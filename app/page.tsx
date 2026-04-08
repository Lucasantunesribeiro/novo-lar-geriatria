import type { Metadata } from 'next'

import BlogSection from '@/components/home/BlogSection'
import ExperienceSection from '@/components/home/ExperienceSection'
import FinalCTA from '@/components/home/FinalCTA'
import FooterLight from '@/components/layout/FooterLight'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import HeroSection from '@/components/home/HeroSection'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import ServicesSection from '@/components/home/ServicesSection'
import StructureShowcase from '@/components/home/StructureShowcase'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import UnitsSection from '@/components/home/UnitsSection'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import { COMPANY_CONTACT, UNITS, SOCIAL_LINKS } from '@/lib/site-data'
import {
  getBlogPostsSection,
  getCtaSection,
  getHeroSection,
  getServicesSection,
  getTestimonialsSection,
  getUnitsSection,
} from '@/lib/cms/legacy-page-content'
import { fetchCmsPage } from '@/lib/cms/page'
import { buildCmsBackedMetadata } from '@/lib/cms/route'
import { withCanonicalPath } from '@/lib/seo/metadata'

const fallbackMetadata: Metadata = withCanonicalPath(
  {
    title: 'Novo Lar Geriatria | Residencial Geriátrico em Porto Alegre',
    description:
      "Cuidados especializados 24h para idosos em Porto Alegre. Residencial geriátrico com médico geriatra, enfermagem, fisioterapia e atividades terapêuticas. 3 unidades em Moinhos de Vento e Passo d'Areia.",
    openGraph: {
      title: 'Novo Lar Geriatria | Residencial Geriátrico em Porto Alegre',
      description:
        'Cuidados especializados 24h para idosos em Porto Alegre. Médico geriatra, enfermagem, nutrição e atividades terapêuticas em 3 unidades.',
      images: [
        {
          url: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/18.jpeg',
          alt: 'Novo Lar Geriatria - Residencial Geriátrico em Porto Alegre',
        },
      ],
    },
  },
  '/'
)

export async function generateMetadata() {
  return buildCmsBackedMetadata('/', fallbackMetadata)
}

interface LegacyHomePageProps {
  hero: {
    eyebrow?: string
    title?: string
    description?: string
    cta?: { label: string; href: string }
    stats?: Array<{ label?: string; value?: string; description?: string }>
  }
  units: {
    title?: string
    description?: string
    units?: NonNullable<NonNullable<ReturnType<typeof getUnitsSection>>['unitsResolved']>
  }
  services: {
    title?: string
    description?: string
    services?: NonNullable<NonNullable<ReturnType<typeof getServicesSection>>['servicesResolved']>
  }
  blog: {
    title?: string
    description?: string
    posts?: NonNullable<NonNullable<ReturnType<typeof getBlogPostsSection>>['postsResolved']>
  }
  testimonials: {
    title?: string
    description?: string
    items?: NonNullable<
      NonNullable<ReturnType<typeof getTestimonialsSection>>['testimonialsResolved']
    >
  }
  cta: {
    title?: string
    description?: string
  }
}

function LegacyHomePage({ hero, units, services, blog, testimonials, cta }: LegacyHomePageProps) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#0B1C3F]">
      <HeaderWrapper />

      <main className="w-full">
        <HeroSection
          eyebrow={hero.eyebrow}
          title={hero.title}
          description={hero.description}
          primaryCta={hero.cta}
          stats={hero.stats}
        />
        <WhyChooseUs />
        <UnitsSection title={units.title} description={units.description} units={units.units} />
        <ServicesSection title={services.title} description={services.description} />
        <StructureShowcase />
        <BlogSection title={blog.title} description={blog.description} articles={blog.posts} />
        <ExperienceSection />
        <TestimonialsSection
          title={testimonials.title}
          description={testimonials.description}
          testimonials={testimonials.items}
        />
        <FinalCTA title={cta.title} description={cta.description} />
      </main>

      <FooterLight
        units={UNITS}
        companyContact={COMPANY_CONTACT}
        socialLinks={{
          facebook: SOCIAL_LINKS.find((s) => s.icon === 'facebook')?.href,
          instagram: SOCIAL_LINKS.find((s) => s.icon === 'instagram')?.href,
        }}
      />

      <WhatsAppButton phoneNumber={COMPANY_CONTACT.whatsappDigits} />

      <MobileBottomBar
        phoneNumber={COMPANY_CONTACT.centralPhoneDigits}
        phoneDisplay={COMPANY_CONTACT.centralPhoneDisplay}
        whatsappNumber={COMPANY_CONTACT.whatsappDigits}
      />
    </div>
  )
}

export default async function HomePage() {
  const cmsPage = await fetchCmsPage('/')
  const heroSection = getHeroSection(cmsPage)
  const unitsSection = getUnitsSection(cmsPage)
  const servicesSection = getServicesSection(cmsPage)
  const blogSection = getBlogPostsSection(cmsPage)
  const testimonialsSection = getTestimonialsSection(cmsPage)
  const ctaSection = getCtaSection(cmsPage)

  return (
    <LegacyHomePage
      hero={{
        eyebrow: heroSection?.eyebrow,
        title: heroSection?.title,
        description: heroSection?.description,
        cta: heroSection?.ctas?.[0],
        stats: heroSection?.stats,
      }}
      units={{
        title: unitsSection?.title,
        description: unitsSection?.description,
        units: unitsSection?.unitsResolved,
      }}
      services={{
        title: servicesSection?.title,
        description: servicesSection?.description,
        services: servicesSection?.servicesResolved,
      }}
      blog={{
        title: blogSection?.title,
        description: blogSection?.description,
        posts: blogSection?.postsResolved,
      }}
      testimonials={{
        title: testimonialsSection?.title,
        description: testimonialsSection?.description,
        items: testimonialsSection?.testimonialsResolved,
      }}
      cta={{
        title: ctaSection?.title,
        description: ctaSection?.description,
      }}
    />
  )
}
