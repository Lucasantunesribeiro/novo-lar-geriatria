import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import ContactForm from '@/components/contato/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Entre em Contato - Novo Lar Geriatria',
  description: 'Entre em contato com a Novo Lar Geriatria. Tire suas dúvidas, agende uma visita ou solicite mais informações sobre nossas unidades em Porto Alegre.',
  openGraph: {
    title: 'Entre em Contato - Novo Lar Geriatria',
    description: 'Entre em contato conosco. Estamos prontos para atendê-lo.',
    url: 'https://novolargeriatria.com.br/contato',
    type: 'website',
  },
  alternates: {
    canonical: 'https://novolargeriatria.com.br/contato',
  },
}

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-white/80 mb-3">
              Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-gray-100">
              Estamos prontos para atendê-lo. Preencha o formulário abaixo ou entre em contato
              diretamente com uma de nossas unidades.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Component */}
      <ContactForm />

      <FooterWrapper />
    </div>
  )
}
