import type { Metadata } from 'next'

import EstruturaAmbientesMasonry from '@/components/estrutura/EstruturaAmbientesMasonry'
import EstruturaCareCTA from '@/components/estrutura/EstruturaCareCTA'
import EstruturaCareProcess from '@/components/estrutura/EstruturaCareProcess'
import EstruturaConfortoDetalhe from '@/components/estrutura/EstruturaConfortoDetalhe'
import EstruturaFamilyFeatures from '@/components/estrutura/EstruturaFamilyFeatures'
import EstruturaFigmaHero from '@/components/estrutura/EstruturaFigmaHero'
import EstruturaFinalCTA from '@/components/estrutura/EstruturaFinalCTA'
import EstruturaGaleriaFinal from '@/components/estrutura/EstruturaGaleriaFinal'
import EstruturaHospedagemContent from '@/components/estrutura/EstruturaHospedagemContent'
import EstruturaUnitsShowcase from '@/components/estrutura/EstruturaUnitsShowcase'
import FooterWrapper from '@/components/layout/FooterWrapper'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { getCtaSection, getHeroSection } from '@/lib/cms/legacy-page-content'
import { fetchCmsPage } from '@/lib/cms/page'
import { buildCmsBackedMetadata } from '@/lib/cms/route'
import { COMPANY_CONTACT } from '@/lib/site-data'

const fallbackMetadata: Metadata = {
  title: 'Estrutura Completa - Hospedagem Assistida 24h | Novo Lar Geriatria',
  description:
    'Conheça nossa estrutura multidisciplinar construída para oferecer segurança, autonomia e acolhimento em todas as etapas da jornada do idoso em Porto Alegre.',
  keywords: [
    'estrutura geriatrica',
    'hospedagem assistida',
    'cuidados 24h',
    'unidades porto alegre',
    'equipe multidisciplinar',
  ],
  openGraph: {
    title: 'Estrutura Completa - Hospedagem Assistida 24h | Novo Lar Geriatria',
    description: 'Estrutura multidisciplinar para o cuidado integral de quem você ama.',
    url: 'https://novolargeriatria.com.br/sobre/estrutura',
    type: 'website',
  },
  alternates: {
    canonical: 'https://novolargeriatria.com.br/sobre/estrutura',
  },
}

export async function generateMetadata() {
  return buildCmsBackedMetadata('/sobre/estrutura', fallbackMetadata)
}

interface LegacyEstruturaPageProps {
  heroEyebrow?: string
  heroTitle?: string
  heroDescription?: string
  ctaTitle?: string
  ctaDescription?: string
  ctaHref?: string
  ctaLabel?: string
}

function LegacyEstruturaPage({
  heroEyebrow,
  heroTitle,
  heroDescription,
  ctaTitle,
  ctaDescription,
  ctaHref,
  ctaLabel,
}: LegacyEstruturaPageProps) {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <HeaderWrapper />

      <EstruturaFigmaHero
        eyebrow={heroEyebrow}
        title={heroTitle}
        description={heroDescription}
      />
      <EstruturaHospedagemContent />
      <EstruturaCareProcess />
      <EstruturaFamilyFeatures />
      <EstruturaAmbientesMasonry />
      <EstruturaConfortoDetalhe />
      <EstruturaGaleriaFinal />
      <EstruturaUnitsShowcase />
      <EstruturaCareCTA />
      <EstruturaFinalCTA
        title={ctaTitle}
        description={ctaDescription}
        whatsappHref={ctaHref}
        buttonLabel={ctaLabel}
      />

      <FooterWrapper />
      <WhatsAppButton phoneNumber={COMPANY_CONTACT.whatsappDigits} />
      <MobileBottomBar
        phoneNumber={COMPANY_CONTACT.centralPhoneDigits}
        phoneDisplay={COMPANY_CONTACT.centralPhoneDisplay}
        whatsappNumber={COMPANY_CONTACT.whatsappDigits}
      />
    </div>
  )
}

export default async function EstruturaPage() {
  const cmsPage = await fetchCmsPage('/sobre/estrutura')
  const heroSection = getHeroSection(cmsPage)
  const ctaSection = getCtaSection(cmsPage)

  return (
    <LegacyEstruturaPage
      heroEyebrow={heroSection?.eyebrow}
      heroTitle={heroSection?.title}
      heroDescription={heroSection?.description}
      ctaTitle={ctaSection?.title}
      ctaDescription={ctaSection?.description}
      ctaHref={ctaSection?.ctas?.[0]?.href}
      ctaLabel={ctaSection?.ctas?.[0]?.label}
    />
  )
}
