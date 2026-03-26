import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import { COMPANY_CONTACT } from '@/lib/site-data'

import EstruturaFigmaHero from '@/components/estrutura/EstruturaFigmaHero'
import EstruturaHospedagemContent from '@/components/estrutura/EstruturaHospedagemContent'
import EstruturaModalidades from '@/components/estrutura/EstruturaModalidades'
import EstruturaCareCTA from '@/components/estrutura/EstruturaCareCTA'
import EstruturaCareProcess from '@/components/estrutura/EstruturaCareProcess'
import EstruturaUnitsShowcase from '@/components/estrutura/EstruturaUnitsShowcase'
import EstruturaFamilyFeatures from '@/components/estrutura/EstruturaFamilyFeatures'
import EstruturaAmbientesMasonry from '@/components/estrutura/EstruturaAmbientesMasonry'
import EstruturaConfortoDetalhe from '@/components/estrutura/EstruturaConfortoDetalhe'
import EstruturaGaleriaFinal from '@/components/estrutura/EstruturaGaleriaFinal'
import EstruturaFinalCTA from '@/components/estrutura/EstruturaFinalCTA'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estrutura Completa - Hospedagem Assistida 24h | Novo Lar Geriatria',
  description: 'Conheça nossa estrutura multidisciplinar construída para oferecer segurança, autonomia e acolhimento em todas as etapas da jornada do idoso em Porto Alegre.',
  keywords: ['estrutura geriátrica', 'hospedagem assistida', 'cuidados 24h', 'unidades porto alegre', 'equipe multidisciplinar'],
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

export default function EstruturaPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <HeaderWrapper />

      <EstruturaFigmaHero />
      <EstruturaHospedagemContent />
      <EstruturaModalidades />
      <EstruturaCareProcess />
      <EstruturaFamilyFeatures />
      <EstruturaAmbientesMasonry />
      <EstruturaConfortoDetalhe />
      <EstruturaGaleriaFinal />
      <EstruturaUnitsShowcase />
      <EstruturaCareCTA />
      <EstruturaFinalCTA />

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
