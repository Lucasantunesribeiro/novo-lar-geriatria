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
