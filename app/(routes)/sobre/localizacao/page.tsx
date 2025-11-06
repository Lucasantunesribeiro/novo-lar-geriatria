import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GoogleReviews from '@/components/sections/GoogleReviews'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import { COMPANY_CONTACT, UNITS } from '@/lib/site-data'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Building, TreePine, Hospital, Phone } from 'lucide-react'

const LOCATION_IMAGES = [
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg',
  '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
  '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/3.jpeg',
  '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/2.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/6.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/7.jpeg',
  '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/4.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/9.jpeg',
]

const ADVANTAGES = [
  { icon: Building, text: 'Bairros nobres e seguros' },
  { icon: TreePine, text: 'Próximo a parques e áreas verdes' },
  { icon: Hospital, text: 'Acesso rápido a hospitais' },
  { icon: MapPin, text: 'Fácil acesso para visitantes' },
]

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Localização Privilegiada em Porto Alegre - Moinhos de Vento e Passo d\'Areia | Novo Lar Geriatria',
  description: 'Unidades localizadas nos bairros Moinhos de Vento e Passo d\'Areia em Porto Alegre, próximas ao Parcão, Parque Germânia e principais hospitais. Fácil acesso para familiares.',
  keywords: ['residencial geriátrico moinhos de vento', 'casa de repouso passo d\'areia', 'hospedagem idosos porto alegre', 'localização privilegiada', 'próximo parcão', 'próximo parque germânia'],
  openGraph: {
    title: 'Localização Privilegiada em Porto Alegre - Moinhos de Vento e Passo d\'Areia',
    description: 'Unidades localizadas nos bairros Moinhos de Vento e Passo d\'Areia, próximas a parques e principais hospitais de Porto Alegre.',
    url: 'https://novolargeriatria.com.br/sobre/localizacao',
    type: 'website',
    images: [
      {
        url: 'https://novolargeriatria.com.br/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Localização privilegiada Novo Lar Geriatria Porto Alegre',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Localização Privilegiada em Porto Alegre | Novo Lar Geriatria',
    description: 'Unidades em Moinhos de Vento e Passo d\'Areia, próximas a parques e hospitais.',
    images: ['https://novolargeriatria.com.br/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg'],
  },
  alternates: {
    canonical: 'https://novolargeriatria.com.br/sobre/localizacao',
  },
}

export default function LocalizacaoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Subheader */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-12 text-white">
        <Image
          src={LOCATION_IMAGES[0]}
          alt="Localização Privilegiada - Novo Lar Geriatria"
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E6B]/95 via-[#1d3364]/90 to-[#2E7B7F]/85"></div>
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-wider text-white/80">
              Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Localização Privilegiada
            </h1>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm">
                <li>
                  <Link href="/" className="text-white/80 transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li className="text-white/50">/</li>
                <li>
                  <Link href="/sobre" className="text-white/80 transition hover:text-white">
                    Sobre
                  </Link>
                </li>
                <li className="text-white/50">/</li>
                <li className="font-medium text-white" aria-current="page">
                  Localização
                </li>
              </ol>
            </nav>

            <div className="mt-6 h-px w-24 bg-[#8B6914]"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {ADVANTAGES.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-[#2E7B7F] to-[#2C3E6B] p-6 rounded-2xl text-white text-center shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8" />
                </div>
                <p className="font-semibold">{advantage.text}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={LOCATION_IMAGES[1]} alt="Vista externa Moinhos de Vento" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={LOCATION_IMAGES[2]} alt="Vista externa Passo d'Areia" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={LOCATION_IMAGES[3]} alt="Fachada da unidade" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={LOCATION_IMAGES[4]} alt="Entrada da unidade" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={LOCATION_IMAGES[5]} alt="Área externa" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={LOCATION_IMAGES[6]} alt="Vista da região" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={LOCATION_IMAGES[7]} alt="Localização privilegiada" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
            <Image src={LOCATION_IMAGES[8]} alt="Vista panorâmica" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E6B] mb-12 text-center">
            Entre em Contato com Nossas Unidades
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {UNITS.map((unit) => (
              <div key={unit.slug} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#2C3E6B] mb-3">{unit.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
                  <span>{unit.address}</span>
                </p>
                <a href={`tel:${unit.phoneDigits}`} className="flex items-center justify-center gap-2 w-full bg-[#2E7B7F] text-white py-3 rounded-lg hover:bg-[#3a8b8f] transition-all font-semibold">
                  <Phone className="w-4 h-4" />
                  {unit.phoneDisplay}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações do Google */}
      <GoogleReviews />

      <Footer />
      <WhatsAppButton phoneNumber={COMPANY_CONTACT.whatsappDigits} />
      <MobileBottomBar phoneNumber={COMPANY_CONTACT.centralPhoneDigits} phoneDisplay={COMPANY_CONTACT.centralPhoneDisplay} whatsappNumber={COMPANY_CONTACT.whatsappDigits} />
    </div>
  )
}




