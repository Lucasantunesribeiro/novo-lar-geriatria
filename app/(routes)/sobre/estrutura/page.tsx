import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import { COMPANY_CONTACT } from '@/lib/site-data'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, Sofa, Bath, Utensils, Bed } from 'lucide-react'

const STRUCTURE_IMAGES = [
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/3.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/5.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/6.jpeg',
  '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
  '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/2.jpeg',
  '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/7.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/8.jpeg',
  '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/3.jpeg',
]

const FEATURES = [
  { icon: Home, text: 'Ambientes amplos e acolhedores' },
  { icon: Sofa, text: 'Salas de convivência confortáveis' },
  { icon: Bath, text: 'Banheiros adaptados e seguros' },
  { icon: Utensils, text: 'Refeitórios climatizados' },
  { icon: Bed, text: 'Quartos individuais e compartilhados' },
]

export const metadata = {
  title: 'Estrutura Moderna e Acolhedora | Novo Lar Geriatria',
  description: 'Conheça nossa estrutura moderna preparada para oferecer conforto, segurança e bem-estar aos nossos residentes.',
}

export default function EstruturaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] mt-20 lg:mt-24">
        <Image
          src={STRUCTURE_IMAGES[0]}
          alt="Estrutura Novo Lar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16 w-full">
            <p className="text-[#C49943] font-semibold text-sm uppercase tracking-widest mb-3">
              Residencial Geriátrico em Porto Alegre - Familiar
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Estrutura Moderna e Acolhedora
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Instalações amplas, seguras e preparadas para oferecer conforto e bem-estar
            </p>
          </div>
        </div>
      </section>

      {/* Galeria Principal - Grid Masonry */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E6B] mb-4">
              Ambientes Preparados para o Seu Conforto
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossas instalações foram projetadas pensando no bem-estar e na segurança dos nossos residentes
            </p>
          </div>

          {/* Grid de 3 colunas com imagens de alturas variadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Coluna 1 */}
            <div className="space-y-6">
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={STRUCTURE_IMAGES[1]}
                  alt="Área de convivência"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={STRUCTURE_IMAGES[2]}
                  alt="Sala de estar"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={STRUCTURE_IMAGES[3]}
                  alt="Ambiente interno"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Coluna 2 */}
            <div className="space-y-6">
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={STRUCTURE_IMAGES[4]}
                  alt="Quarto adaptado"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={STRUCTURE_IMAGES[5]}
                  alt="Área comum"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[330px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={STRUCTURE_IMAGES[6]}
                  alt="Corredor"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Coluna 3 */}
            <div className="space-y-6">
              <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={STRUCTURE_IMAGES[7]}
                  alt="Refeitório"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={STRUCTURE_IMAGES[8]}
                  alt="Área externa"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={STRUCTURE_IMAGES[9]}
                  alt="Sala de atividades"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques da Estrutura */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={STRUCTURE_IMAGES[10]}
                alt="Detalhe da estrutura"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E6B] mb-6">
                Conforto e Segurança em Cada Detalhe
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cada ambiente foi cuidadosamente planejado para proporcionar segurança, acessibilidade e conforto aos nossos residentes.
              </p>

              <div className="space-y-4">
                {FEATURES.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#4A9B9F]/10 rounded-full flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#4A9B9F]" />
                    </div>
                    <p className="text-gray-700 font-medium">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mais Imagens */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={STRUCTURE_IMAGES[11]}
                alt="Vista da estrutura"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={STRUCTURE_IMAGES[0]}
                alt="Ambiente acolhedor"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#2C3E6B] to-[#1f2d4f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Conheça Pessoalmente Nossa Estrutura
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agende uma visita e veja de perto todos os nossos ambientes preparados para receber seu familiar
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 bg-[#C49943] text-[#2C3E6B] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c49943] transition-all shadow-xl hover:scale-105"
          >
            Agendar Visita
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber={COMPANY_CONTACT.whatsappDigits} />
      <MobileBottomBar
        phoneNumber={COMPANY_CONTACT.centralPhoneDigits}
        phoneDisplay={COMPANY_CONTACT.centralPhoneDisplay}
        whatsappNumber={COMPANY_CONTACT.whatsappDigits}
      />
    </div>
  )
}
