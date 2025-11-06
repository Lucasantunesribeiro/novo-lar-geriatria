import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GoogleReviews from '@/components/sections/GoogleReviews'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import { COMPANY_CONTACT } from '@/lib/site-data'
import Image from 'next/image'
import Link from 'next/link'
import { Music, Palette, BookOpen, Users, Heart, Smile, Phone } from 'lucide-react'

const ACTIVITIES_IMAGES = [
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg',
  '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
  '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/5.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/8.jpeg',
  '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/3.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/11.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/13.jpeg',
  '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/5.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/14.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/15.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/16.jpeg',
]

const ACTIVITY_TYPES = [
  { icon: Music, title: 'Musicoterapia', desc: 'Sessões de música e canto' },
  { icon: Palette, title: 'Artes e Artesanato', desc: 'Pintura, desenho e trabalhos manuais' },
  { icon: BookOpen, title: 'Leitura e Jogos', desc: 'Estímulo cognitivo e memória' },
  { icon: Users, title: 'Atividades Sociais', desc: 'Confraternizações e interação' },
  { icon: Heart, title: 'Exercícios Físicos', desc: 'Alongamentos e movimentação' },
  { icon: Smile, title: 'Lazer e Recreação', desc: 'Passeios e momentos de diversão' },
]

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atividades e Terapia Ocupacional - Programação Diária | Novo Lar Geriatria',
  description: 'Programação diária completa com musicoterapia, artes, exercícios físicos, atividades sociais e estímulos cognitivos para promover qualidade de vida e bem-estar dos idosos.',
  keywords: ['atividades para idosos', 'terapia ocupacional porto alegre', 'musicoterapia terceira idade', 'estimulação cognitiva idosos', 'exercícios físicos terceira idade', 'lazer para idosos'],
  openGraph: {
    title: 'Atividades e Terapia Ocupacional - Programação Diária | Novo Lar Geriatria',
    description: 'Programação diária completa com musicoterapia, artes, exercícios físicos e atividades sociais para promover qualidade de vida dos idosos.',
    url: 'https://novolargeriatria.com.br/sobre/atividades',
    type: 'website',
    images: [
      {
        url: 'https://novolargeriatria.com.br/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg',
        width: 1200,
        height: 630,
        alt: 'Atividades terapêuticas Novo Lar Geriatria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atividades e Terapia Ocupacional | Novo Lar Geriatria',
    description: 'Programação diária com estímulos cognitivos, sociais e atividades recreativas para idosos.',
    images: ['https://novolargeriatria.com.br/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg'],
  },
  alternates: {
    canonical: 'https://novolargeriatria.com.br/sobre/atividades',
  },
}

export default function AtividadesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Subheader */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-12 text-white">
        <Image
          src={ACTIVITIES_IMAGES[0]}
          alt="Atividades e Terapia Ocupacional - Novo Lar Geriatria"
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
              Atividades e Terapia Ocupacional
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
                  Atividades
                </li>
              </ol>
            </nav>

            <div className="mt-6 h-px w-24 bg-[#8B6914]"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E6B] mb-4">
              Programação Diversificada e Estimulante
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla variedade de atividades pensadas para promover bem-estar e qualidade de vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ACTIVITY_TYPES.map((activity, index) => (
              <div key={index} className="bg-gradient-to-br from-[#2E7B7F] to-[#2C3E6B] p-6 rounded-2xl text-white shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <activity.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-white/90">{activity.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl group">
                <Image src={ACTIVITIES_IMAGES[1]} alt="Atividade em grupo" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl group">
                <Image src={ACTIVITIES_IMAGES[2]} alt="Terapia ocupacional" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl group">
                <Image src={ACTIVITIES_IMAGES[3]} alt="Atividade recreativa" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl group">
                <Image src={ACTIVITIES_IMAGES[4]} alt="Momento de lazer" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl group">
                <Image src={ACTIVITIES_IMAGES[5]} alt="Atividade social" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={ACTIVITIES_IMAGES[6]} alt="Atividades em grupo" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E6B] mb-6">
                Estímulo Cognitivo e Social
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nossas atividades são cuidadosamente planejadas por terapeutas ocupacionais para estimular a cognição, memória, socialização e autonomia dos residentes.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-[#2E7B7F]">
                  <h3 className="font-bold text-[#2C3E6B] mb-2">Programação Diária</h3>
                  <p className="text-gray-600 text-sm">Atividades todos os dias da semana com horários flexíveis e adaptados</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-[#8B6914]">
                  <h3 className="font-bold text-[#2C3E6B] mb-2">Acompanhamento Individual</h3>
                  <p className="text-gray-600 text-sm">Cada residente participa de acordo com suas capacidades e preferências</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl">
                <Image src={ACTIVITIES_IMAGES[7]} alt="Terapia ocupacional" fill className="object-cover" />
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl">
                <Image src={ACTIVITIES_IMAGES[8]} alt="Atividades recreativas" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={ACTIVITIES_IMAGES[9]} alt="Momento de lazer" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={ACTIVITIES_IMAGES[10]} alt="Atividade em grupo" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={ACTIVITIES_IMAGES[11]} alt="Recreação" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={ACTIVITIES_IMAGES[0]} alt="Convivência" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={ACTIVITIES_IMAGES[4]} alt="Atividades sociais" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={ACTIVITIES_IMAGES[6]} alt="Terapia em grupo" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
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




