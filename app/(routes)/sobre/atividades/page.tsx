import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import { COMPANY_CONTACT } from '@/lib/site-data'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Music, Palette, BookOpen, Users, Heart, Smile } from 'lucide-react'

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

export const metadata = {
  title: 'Atividades e Terapia Ocupacional | Novo Lar Geriatria',
  description: 'Programação diária com estímulos cognitivos, sociais e atividades recreativas para promover qualidade de vida.',
}

export default function AtividadesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative h-[60vh] min-h-[400px] mt-20 lg:mt-24">
        <Image src={ACTIVITIES_IMAGES[0]} alt="Atividades Novo Lar" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16 w-full">
            <p className="text-[#D4A853] font-semibold text-sm uppercase tracking-widest mb-3">
              Residencial Geriátrico em Porto Alegre - Familiar
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Atividades e Terapia Ocupacional
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Programação diária com estímulos cognitivos, sociais e atividades recreativas
            </p>
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
              <div key={index} className="bg-gradient-to-br from-[#4A9B9F] to-[#2C3E6B] p-6 rounded-2xl text-white shadow-xl hover:scale-105 transition-transform duration-300">
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
                <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-[#4A9B9F]">
                  <h3 className="font-bold text-[#2C3E6B] mb-2">Programação Diária</h3>
                  <p className="text-gray-600 text-sm">Atividades todos os dias da semana com horários flexíveis e adaptados</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-[#D4A853]">
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

      <section className="py-20 bg-gradient-to-b from-[#2C3E6B] to-[#1f2d4f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Venha Conhecer Nossa Programação
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agende uma visita e veja como nossas atividades promovem qualidade de vida e bem-estar
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
