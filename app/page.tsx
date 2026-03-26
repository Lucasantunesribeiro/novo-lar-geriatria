import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import FooterLight from '@/components/layout/FooterLight'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import HeroSection from '@/components/home/HeroSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import UnitsSection from '@/components/home/UnitsSection'
import ServicesSection from '@/components/home/ServicesSection'
import StructureShowcase from '@/components/home/StructureShowcase'
import BlogSection from '@/components/home/BlogSection'
import ExperienceSection from '@/components/home/ExperienceSection'
import FinalCTA from '@/components/home/FinalCTA'
import { COMPANY_CONTACT, UNITS, SOCIAL_LINKS } from '@/lib/site-data'
import { AggregateRatingSchema } from '@/components/seo/JsonLd'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#0B1C3F]">
      <HeaderWrapper />

      <AggregateRatingSchema ratingValue={4.8} reviewCount={50} />

      <main className="w-full">
        <HeroSection />
        <WhyChooseUs />
        <UnitsSection />
        <ServicesSection />
        <StructureShowcase />
        <BlogSection />
        <ExperienceSection />
        <FinalCTA />
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
