import type { Metadata } from 'next'
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
import TestimonialsSection from '@/components/home/TestimonialsSection'
import FinalCTA from '@/components/home/FinalCTA'
import { COMPANY_CONTACT, UNITS, SOCIAL_LINKS } from '@/lib/site-data'
import { AggregateRatingSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Novo Lar Geriatria | Residencial Geriátrico em Porto Alegre',
  description:
    'Cuidados especializados 24h para idosos em Porto Alegre. Residencial geriátrico com médico geriatra, enfermagem, fisioterapia e atividades terapêuticas. 3 unidades em Moinhos de Vento e Passo d\'Areia.',
  openGraph: {
    title: 'Novo Lar Geriatria | Residencial Geriátrico em Porto Alegre',
    description:
      'Cuidados especializados 24h para idosos em Porto Alegre. Médico geriatra, enfermagem, nutrição e atividades terapêuticas em 3 unidades.',
    images: [
      {
        url: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/18.jpeg',
        alt: 'Novo Lar Geriatria — Residencial Geriátrico em Porto Alegre',
      },
    ],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#0B1C3F]">
      <HeaderWrapper />

      <AggregateRatingSchema ratingValue={5.0} reviewCount={26} />

      <main className="w-full">
        <HeroSection />
        <WhyChooseUs />
        <UnitsSection />
        <ServicesSection />
        <StructureShowcase />
        <BlogSection />
        <ExperienceSection />
        <TestimonialsSection />
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
