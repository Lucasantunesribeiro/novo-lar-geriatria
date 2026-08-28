import type { Metadata } from 'next'

import ContactForm from '@/components/contato/ContactForm'
import FooterWrapper from '@/components/layout/FooterWrapper'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import { getHeroSection } from '@/lib/cms/legacy-page-content'
import { fetchCmsPage } from '@/lib/cms/page'
import { buildCmsBackedMetadata } from '@/lib/cms/route'

const fallbackMetadata: Metadata = {
  title: 'Entre em Contato - Novo Lar Geriatria',
  description:
    'Entre em contato com a Novo Lar Geriatria. Tire suas dúvidas, agende uma visita ou solicite mais informações sobre nossas unidades em Porto Alegre.',
  openGraph: {
    title: 'Entre em Contato - Novo Lar Geriatria',
    description: 'Entre em contato conosco. Estamos prontos para atendê-lo.',
    url: '/contato',
    type: 'website',
  },
  alternates: {
    canonical: '/contato',
  },
}

export async function generateMetadata() {
  return buildCmsBackedMetadata('/contato', fallbackMetadata)
}

interface LegacyContatoPageProps {
  heroEyebrow?: string
  heroTitle?: string
  heroDescription?: string
}

function LegacyContatoPage({
  heroEyebrow,
  heroTitle,
  heroDescription,
}: LegacyContatoPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      <section className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-white/80 mb-3">
              {heroEyebrow || 'Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar'}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {heroTitle || 'Entre em Contato'}
            </h1>
            <p className="text-xl text-gray-100">
              {heroDescription ||
                'Estamos prontos para atendê-lo. Preencha o formulário abaixo ou entre em contato diretamente com uma de nossas unidades.'}
            </p>
          </div>
        </div>
      </section>

      <ContactForm />

      <FooterWrapper />
    </div>
  )
}

import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'

export default async function ContatoPage() {
  const cmsPage = await fetchCmsPage('/contato')

  if (cmsPage && cmsPage.sections && cmsPage.sections.length > 0) {
    return <SeoLandingPage data={cmsPage} />
  }

  const heroSection = getHeroSection(cmsPage)

  return (
    <LegacyContatoPage
      heroEyebrow={heroSection?.eyebrow}
      heroTitle={heroSection?.title}
      heroDescription={heroSection?.description}
    />
  )
}
