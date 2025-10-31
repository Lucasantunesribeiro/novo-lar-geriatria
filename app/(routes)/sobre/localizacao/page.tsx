import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import { COMPANY_CONTACT, UNITS } from '@/lib/site-data'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Building, TreePine, Hospital, Phone } from 'lucide-react'

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

export const metadata = {
  title: 'Localização Privilegiada | Novo Lar Geriatria',
  description: 'Nossas unidades estão localizadas em bairros nobres de Porto Alegre, próximas a parques e com fácil acesso.',
}

export default function LocalizacaoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative h-[60vh] min-h-[400px] mt-20 lg:mt-24">
        <Image src={LOCATION_IMAGES[0]} alt="Localização Novo Lar" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16 w-full">
            <p className="text-[#D4A853] font-semibold text-sm uppercase tracking-widest mb-3">
              Residencial Geriátrico em Porto Alegre - Familiar
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Localização Privilegiada
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Unidades em bairros nobres de Porto Alegre, próximas a parques e com fácil acesso
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {ADVANTAGES.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-[#4A9B9F] to-[#2C3E6B] p-6 rounded-2xl text-white text-center shadow-xl hover:scale-105 transition-transform duration-300">
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
                  <MapPin className="w-4 h-4 text-[#4A9B9F] flex-shrink-0 mt-0.5" />
                  <span>{unit.address}</span>
                </p>
                <a href={`tel:${unit.phoneDigits}`} className="flex items-center justify-center gap-2 w-full bg-[#4A9B9F] text-white py-3 rounded-lg hover:bg-[#3a8b8f] transition-all font-semibold">
                  <Phone className="w-4 h-4" />
                  {unit.phoneDisplay}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#2C3E6B] to-[#1f2d4f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Visite Nossas Unidades
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Venha conhecer nossa localização privilegiada e veja como nossos bairros oferecem qualidade de vida
          </p>
          <Link href="/contato" className="inline-flex items-center gap-3 bg-[#D4A853] text-[#2C3E6B] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c49943] transition-all shadow-xl hover:scale-105">
            Agendar Visita
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber={COMPANY_CONTACT.whatsappDigits} />
      <MobileBottomBar phoneNumber={COMPANY_CONTACT.centralPhoneDigits} phoneDisplay={COMPANY_CONTACT.centralPhoneDisplay} whatsappNumber={COMPANY_CONTACT.whatsappDigits} />
    </div>
  )
}
