import type { Metadata } from 'next'

import AboutExperienceSection from '@/components/about/AboutExperienceSection'
import AboutHero from '@/components/about/AboutHero'
import AboutStructureShowcase from '@/components/about/AboutStructureShowcase'
import CommitmentSection from '@/components/about/CommitmentSection'
import EnvironmentShowcaseSection from '@/components/about/EnvironmentShowcaseSection'
import FinalCTASection from '@/components/about/FinalCTASection'
import FooterWrapper from '@/components/layout/FooterWrapper'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import ProcessStepsSection from '@/components/about/ProcessStepsSection'
import ThreePillarsSection from '@/components/about/ThreePillarsSection'
import { getCtaSection, getHeroSection } from '@/lib/cms/legacy-page-content'
import { fetchCmsPage } from '@/lib/cms/page'
import { buildCmsBackedMetadata } from '@/lib/cms/route'
import { withCanonicalPath } from '@/lib/seo/metadata'

const fallbackMetadata: Metadata = withCanonicalPath(
  {
    title: 'Sobre Nós | Novo Lar Geriatria',
    description:
      'Conheça a Novo Lar Geriatria: residencial geriátrico com mais de 30 anos de experiência em Porto Alegre, equipe multidisciplinar completa e estrutura acessível em 3 unidades.',
    openGraph: {
      title: 'Sobre a Novo Lar Geriatria',
      description:
        'História, equipe, estrutura e valores de uma das principais casas de repouso de Porto Alegre.',
    },
  },
  '/sobre'
)

export async function generateMetadata() {
  return buildCmsBackedMetadata('/sobre', fallbackMetadata)
}

interface LegacyAboutPageProps {
  heroEyebrow?: string
  heroTitle?: string
  heroDescription?: string
  ctaTitle?: string
  ctaDescription?: string
}

function LegacyAboutPage({
  heroEyebrow,
  heroTitle,
  heroDescription,
  ctaTitle,
  ctaDescription,
}: LegacyAboutPageProps) {
  return (
    <div
      className="about-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        width: '100%',
      }}
    >
      <HeaderWrapper />
      <AboutHero eyebrow={heroEyebrow} title={heroTitle} description={heroDescription} />
      <AboutStructureShowcase />
      <AboutExperienceSection />
      <ThreePillarsSection />
      <EnvironmentShowcaseSection />
      <ProcessStepsSection />
      <CommitmentSection />
      <FinalCTASection title={ctaTitle} description={ctaDescription} />
      <FooterWrapper />
    </div>
  )
}

import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'

export default async function AboutPage() {
  const cmsPage = await fetchCmsPage('/sobre')

  if (cmsPage && cmsPage.sections && cmsPage.sections.length > 0) {
    return <SeoLandingPage data={cmsPage} />
  }

  const heroSection = getHeroSection(cmsPage)
  const ctaSection = getCtaSection(cmsPage)

  return (
    <LegacyAboutPage
      heroEyebrow={heroSection?.eyebrow}
      heroTitle={heroSection?.title}
      heroDescription={heroSection?.description}
      ctaTitle={ctaSection?.title}
      ctaDescription={ctaSection?.description}
    />
  )
}
