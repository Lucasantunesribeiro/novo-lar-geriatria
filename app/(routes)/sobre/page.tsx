import type { Metadata } from 'next'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import AboutHero from '@/components/about/AboutHero'
import AboutStructureShowcase from '@/components/about/AboutStructureShowcase'
import AboutExperienceSection from '@/components/about/AboutExperienceSection'
import ThreePillarsSection from '@/components/about/ThreePillarsSection'
import EnvironmentShowcaseSection from '@/components/about/EnvironmentShowcaseSection'
import ProcessStepsSection from '@/components/about/ProcessStepsSection'
import CommitmentSection from '@/components/about/CommitmentSection'
import FinalCTASection from '@/components/about/FinalCTASection'

export const metadata: Metadata = {
  title: 'Sobre Nós | Novo Lar Geriatria',
  description:
    'Conheça a Novo Lar Geriatria: residencial geriátrico com mais de uma década de experiência em Porto Alegre, equipe multidisciplinar completa e estrutura acessível em 3 unidades.',
  openGraph: {
    title: 'Sobre a Novo Lar Geriatria',
    description:
      'História, equipe, estrutura e valores de uma das principais casas de repouso de Porto Alegre.',
  },
}

export default function AboutPage() {
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
      {/* Header */}
      <HeaderWrapper />

      {/* Hero Section */}
      <AboutHero />

      {/* Structure Showcase */}
      <AboutStructureShowcase />

      {/* Experience Section with 5 Stars */}
      <AboutExperienceSection />

      {/* Three Pillars */}
      <ThreePillarsSection />

      {/* Environment Showcase with 6 Images */}
      <EnvironmentShowcaseSection />

      {/* Process Steps */}
      <ProcessStepsSection />

      {/* Commitment */}
      <CommitmentSection />

      {/* Final CTA */}
      <FinalCTASection />

      {/* Footer */}
      <FooterWrapper />
    </div>
  )
}
