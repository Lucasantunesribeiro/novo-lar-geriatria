import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import { COMPANY_CONTACT } from '@/lib/site-data'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Stethoscope, Heart, Activity, Users, Brain, Apple } from 'lucide-react'

const TEAM_IMAGES = [
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg',
  '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
  '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/2.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/5.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/8.jpeg',
  '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/3.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/10.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/11.jpeg',
]

const SPECIALISTS = [
  { icon: Stethoscope, title: 'Médicos Geriátras', desc: 'Acompanhamento especializado' },
  { icon: Heart, title: 'Enfermagem 24h', desc: 'Cuidado contínuo e atencioso' },
  { icon: Activity, title: 'Fisioterapeutas', desc: 'Reabilitação e mobilidade' },
  { icon: Apple, title: 'Nutricionistas', desc: 'Alimentação balanceada' },
  { icon: Brain, title: 'Psicólogos', desc: 'Apoio emocional e mental' },
  { icon: Users, title: 'Terapeutas Ocupacionais', desc: 'Atividades e estímulos' },
]

export const metadata = {
  title: 'Equipe Multidisciplinar 24h | Novo Lar Geriatria',
  description: 'Conheça nossa equipe de profissionais qualificados dedicados ao cuidado integral dos nossos residentes.',
}

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] mt-20 lg:mt-24">
        <Image
          src={TEAM_IMAGES[0]}
          alt="Equipe Novo Lar"
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
              Equipe Multidisciplinar 24h
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Médicos, enfermeiros, fisioterapeutas e nutricionistas dedicados ao cuidado integral
            </p>
          </div>
        </div>
      </section>

      {/* Apresentação da Equipe */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E6B] mb-4">
              Profissionais Qualificados e Dedicados
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossa equipe multidisciplinar trabalha de forma integrada para garantir o melhor cuidado
            </p>
          </div>

          {/* Grid de Especialistas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {SPECIALISTS.map((specialist, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#2C3E6B] to-[#4A9B9F] p-8 rounded-2xl text-white shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <specialist.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{specialist.title}</h3>
                <p className="text-white/90">{specialist.desc}</p>
              </div>
            ))}
          </div>

          {/* Galeria de Imagens - Layout Alternado */}
          <div className="space-y-8">
            {/* Linha 1: 2 imagens */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={TEAM_IMAGES[1]}
                  alt="Atendimento da equipe"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={TEAM_IMAGES[2]}
                  alt="Cuidado profissional"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Linha 2: 1 imagem grande */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src={TEAM_IMAGES[3]}
                alt="Equipe em ação"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Linha 3: 3 imagens */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={TEAM_IMAGES[4]}
                  alt="Cuidado especializado"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={TEAM_IMAGES[5]}
                  alt="Acompanhamento médico"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={TEAM_IMAGES[6]}
                  alt="Fisioterapia"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial da Equipe */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={TEAM_IMAGES[7]}
                  alt="Profissionais cuidando"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={TEAM_IMAGES[8]}
                  alt="Equipe dedicada"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E6B] mb-6">
                Cuidado Humanizado e Profissional
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nossa equipe multidisciplinar está presente 24 horas por dia, trabalhando de forma integrada para proporcionar o melhor cuidado aos nossos residentes.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cada profissional é cuidadosamente selecionado e capacitado para oferecer um atendimento personalizado, respeitando as necessidades individuais de cada residente.
              </p>

              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#4A9B9F]">
                <h3 className="text-xl font-bold text-[#2C3E6B] mb-3">
                  Atendimento 24 Horas
                </h3>
                <p className="text-gray-600">
                  Nossa equipe está sempre disponível para garantir segurança, conforto e bem-estar em tempo integral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#2C3E6B] to-[#1f2d4f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Conheça Nossa Equipe Pessoalmente
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agende uma visita e converse com nossos profissionais sobre o cuidado que oferecemos
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
