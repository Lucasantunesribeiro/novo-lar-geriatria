import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import HeroSection from '@/components/sections/home/HeroSection'
import SectionCollage from '@/components/sections/SectionCollage'
import StructureGallery from '@/components/sections/StructureGallery'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { AggregateRatingSchema } from '@/components/seo/JsonLd'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import SectionSkeleton from '@/components/sections/home/SectionSkeleton'
import { Phone, CheckCircle2, ArrowRight, MapPin, MessageCircle, Heart, Users, Home, Activity, UtensilsCrossed } from 'lucide-react'

const ServicesSection = dynamic(() => import('@/components/sections/home/ServicesSection'), {
  loading: () => <SectionSkeleton />,
})

const BlogSection = dynamic(() => import('@/components/sections/home/BlogSection'), {
  loading: () => <SectionSkeleton />,
})

const TestimonialsSection = dynamic(() => import('@/components/sections/GoogleReviews'), {
  loading: () => <SectionSkeleton />,
})

const UnitsSection = dynamic(() => import('@/components/sections/home/UnitsSection'), {
  loading: () => <SectionSkeleton />,
})

const LatestNewsSection = dynamic(() => import('@/components/sections/home/LatestNewsSection'), {
  loading: () => <SectionSkeleton />,
})


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      <AggregateRatingSchema ratingValue={4.8} reviewCount={50} />

      {/* Hero Section */}
      <HeroSection />

      {/* Por que escolher a Novo Lar? */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E6B] mb-4">
              Por que escolher a Novo Lar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cuidado humanizado, guiado pela experiência de quem já cuidou de + 500 vidas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                image: '/cards/cuidadora-mao.jpg',
                title: 'Cuidado Humanizado',
                desc: 'Atenção personalizada com carinho e respeito. Nossa equipe trata cada residente como parte da família, valorizando sua história e individualidade.',
              },
              {
                image: '/cards/enfermeira_cuidadora.JPG',
                title: 'Equipe Multidisciplinar 24h',
                desc: 'Médicos, enfermeiros, fisioterapeutas, nutricionistas e cuidadores trabalhando juntos. Atendimento integral e especializado 24 horas por dia.',
              },
              {
                image: '/cards/quarto-decorado.jpeg',
                title: 'Estrutura Acolhedora e Segura',
                desc: 'Ambientes amplos, bem iluminados e adaptados. Quartos confortáveis, áreas de convivência e espaços terapêuticos pensados para o bem-estar.',
              },
              {
                image: '/cards/Fisioterapia-idoso.jpg',
                title: 'Rotina Ativa e Terapêutica',
                desc: 'Fisioterapia, terapia ocupacional, atividades recreativas e estímulo cognitivo. Mantemos corpo e mente ativos com programação diária personalizada.',
              },
              {
                image: '/cards/nutricionista-idoso.webp',
                title: 'Alimentação Saudável e Balanceada',
                desc: 'Cardápio elaborado por nutricionista, respeitando restrições e preferências. Refeições nutritivas, saborosas e preparadas com ingredientes frescos.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-80"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={85}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1530]/95 via-[#0b1530]/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/90 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    {item.desc}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#D4A853]/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A853]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossas Unidades */}
      <Suspense fallback={<SectionSkeleton />}>
        <UnitsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
      </Suspense>

      {/* Avaliações do Google */}
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>

      {/* Veja nossa estrutura */}
      <StructureGallery />

      {/* Últimas Notícias */}
      <Suspense fallback={<SectionSkeleton />}>
        <LatestNewsSection />
      </Suspense>

      {/* Sobre o Residencial - SEO Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#D4A853] mb-3">
                Residencial Geriátrico em Porto Alegre - Novo Lar
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E6B] mb-6">
                Cuidado Especializado com Mais de 20 Anos de Experiência
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                A <strong>Novo Lar Geriatria</strong> é referência em <strong>residencial geriátrico em Porto Alegre</strong>,
                oferecendo uma solução completa e humanizada para o cuidado de idosos. Com três unidades estrategicamente
                localizadas nos bairros <strong>Moinhos de Vento</strong> e <strong>Passo d&rsquo;Areia</strong>, proporcionamos
                ambientes acolhedores, seguros e preparados para promover o bem-estar e a qualidade de vida de cada residente.
              </p>

              <p className="text-lg">
                Nossa equipe multidisciplinar é composta por <strong>médicos geriátras, enfermeiros, fisioterapeutas,
                nutricionistas, terapeutas ocupacionais e psicólogos</strong>, que trabalham de forma integrada para
                garantir um atendimento personalizado e de excelência. Oferecemos <strong>hospedagem 24 horas</strong> com
                acompanhamento contínuo, <strong>enfermagem especializada</strong>, <strong>medicação controlada</strong>,
                <strong>fisioterapia</strong>, <strong>acompanhamento médico regular</strong> e uma programação completa de
                <strong>atividades sociais e terapia ocupacional</strong>.
              </p>

              <p className="text-lg">
                Com mais de <strong>20 anos de experiência no mercado</strong>, a Novo Lar se destaca pelo
                <strong> cuidado humanizado e familiar</strong>, onde cada residente é tratado com carinho, respeito e
                atenção individualizada. Nossas instalações modernas e adaptadas oferecem conforto, segurança e todas as
                comodidades necessárias para que seu familiar receba o melhor cuidado possível.
              </p>

              <p className="text-lg">
                Se você busca um <strong>residencial geriátrico em Porto Alegre</strong> que ofereça cuidado integral,
                ambiente familiar e equipe qualificada, a <strong>Novo Lar Geriatria</strong> é a escolha ideal.
                Estamos localizados em regiões nobres da cidade, próximos ao <strong>Parcão</strong>,
                <strong> Parque Germânia</strong> e principais hospitais de Porto Alegre.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Seção SEO - Texto institucional */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs leading-relaxed text-gray-600">
              O Residencial Geriátrico e Assistência Domiciliar oferece uma solução completa e personalizada para o cuidado de idosos, combinando a expertise de uma residência especializada com a conveniência e conforto dos cuidados domiciliares. Na Novo Lar Geriatria, proporcionamos um atendimento humanizado e de alta qualidade, com uma equipe multidisciplinar composta por médicos geriátras, enfermeiros, fisioterapeutas, nutricionistas, psicólogos e terapeutas ocupacionais, que trabalham de forma integrada para garantir o bem-estar e a saúde de cada residente, seja em nossa unidade ou no conforto de sua casa. Para aqueles que optam pela assistência domiciliar, oferecemos um atendimento contínuo e especializado, com planos de cuidados adaptados às necessidades individuais do paciente, promovendo sua recuperação, autonomia e qualidade de vida. Com mais de 20 anos de experiência no mercado, a Novo Lar se destaca pelo cuidado humanizado e familiar, onde cada residente é tratado com carinho, respeito e atenção individualizada. Nossas instalações modernas e adaptadas oferecem conforto, segurança e todas as comodidades necessárias para que seu familiar receba o melhor cuidado possível. Se você busca um cuidado integral, seja em nossa residência ou com a assistência em casa, a Novo Lar Geriatria é a escolha ideal. Oferecemos conforto, segurança e um ambiente acolhedor para garantir que seu ente querido receba o melhor cuidado possível. Estamos localizados em regiões nobres de Porto Alegre, nos bairros Moinhos de Vento e Passo d&rsquo;Areia, próximos ao Parcão, Parque Germânia e principais hospitais de Porto Alegre. Agende uma visita e descubra como podemos ajudar a melhorar a qualidade de vida e o bem-estar do seu familiar, seja em nossa residência ou com assistência domiciliar especializada!
            </p>
          </div>
        </div>
      </section>

      <FooterWrapper />

      {/* WhatsApp Flutuante */}
      <WhatsAppButton phoneNumber={COMPANY_CONTACT.whatsappDigits} />

      {/* Barra Fixa Mobile */}
      <MobileBottomBar
        phoneNumber={COMPANY_CONTACT.centralPhoneDigits}
        phoneDisplay={COMPANY_CONTACT.centralPhoneDisplay}
        whatsappNumber={COMPANY_CONTACT.whatsappDigits}
      />
    </div>
  )
}



