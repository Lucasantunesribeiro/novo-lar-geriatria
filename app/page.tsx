import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import HeroCarousel from '@/components/sections/HeroCarousel'
import SectionCollage from '@/components/sections/SectionCollage'
import StructureGallery from '@/components/sections/StructureGallery'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { AggregateRatingSchema } from '@/components/seo/JsonLd'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import SectionSkeleton from '@/components/sections/home/SectionSkeleton'
import { Phone, CheckCircle2, ArrowRight, MapPin, MessageCircle } from 'lucide-react'

const ServicesSection = dynamic(() => import('@/components/sections/home/ServicesSection'), {
  loading: () => <SectionSkeleton />,
})

const BlogSection = dynamic(() => import('@/components/sections/home/BlogSection'), {
  loading: () => <SectionSkeleton />,
})

const TestimonialsSection = dynamic(() => import('@/components/sections/GoogleReviews'), {
  loading: () => <SectionSkeleton />,
})

const UNITS = [
  {
    name: 'Moinhos de Vento - Luciana de Abreu',
    slug: 'moinhos-luciana-de-abreu',
    phone: '(51) 3346.7620',
    whatsapp: '555133467620',
    image: '/images/unidade-moinhos-luciana.jpg',
    features: ['Rua Luciana de Abreu, 151', 'Bairro Moinhos de Vento', 'Ambiente com jardim central'],
  },
  {
    name: 'Passo d\'Areia',
    slug: 'passo-dareia',
    phone: '(51) 3376.9462',
    whatsapp: '555133769462',
    image: '/images/unidade-passo-dareia.jpg',
    features: ['Rua Brigadeiro Oliveira Neri, 175', 'Bairro Passo d\'Areia', 'Vizinho ao Parque Germânia'],
  },
  {
    name: 'Moinhos de Vento - Barão de Santo Ângelo',
    slug: 'moinhos-barao-de-santo-angelo',
    phone: '(51) 3346.7620',
    whatsapp: '555133467620',
    image: '/images/unidade-moinhos-barao.jpg',
    features: ['R. Barão de Santo Ângelo, 406', 'Bairro Moinhos de Vento', 'Próximo ao Parcão'],
  },
]


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <AggregateRatingSchema ratingValue={4.8} reviewCount={50} />

      {/* Hero Section com Carrossel */}
      <HeroCarousel />

      {/* Por que escolher a Novo Lar? */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#8B6914] mb-3">
              Residencial Geriátrico em Porto Alegre - Novo Lar
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E6B] mb-4">
              Por que escolher a Novo Lar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cuidado humanizado com a experiência de quem está no mercado há mais de 20 anos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                image: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg',
                title: 'Estrutura Moderna e Acolhedora',
                desc: 'Instalações amplas, seguras e preparadas para oferecer conforto e bem-estar',
                link: '/sobre/estrutura',
              },
              {
                image: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg',
                title: 'Equipe Multidisciplinar 24h',
                desc: 'Médicos, enfermeiros, fisioterapeutas e nutricionistas dedicados ao cuidado integral',
                link: '/sobre/equipe',
              },
              {
                image: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
                title: 'Localização Privilegiada',
                desc: 'Unidades em bairros nobres de Porto Alegre, próximas a parques e com fácil acesso',
                link: '/sobre/localizacao',
              },
              {
                image: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
                title: 'Atividades e Terapia Ocupacional',
                desc: 'Programação diária com estímulos cognitivos, sociais e atividades recreativas',
                link: '/sobre/atividades',
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
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

                  <div className="flex items-center gap-2 text-[#8B6914] font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    Saiba mais
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#8B6914]/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowRight className="w-6 h-6 text-[#8B6914]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Unidades */}
      <section id="unidades" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#8B6914] mb-3">
              Residencial Geriátrico em Porto Alegre - Novo Lar
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E6B] mb-4">
              Nossas Unidades
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha a unidade mais próxima e conheça nossa estrutura completa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {UNITS.map((unit) => (
              <div
                key={unit.slug}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={`/fotos-sobre/${
                      unit.slug === 'moinhos-luciana-de-abreu'
                        ? 'Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg'
                        : unit.slug === 'passo-dareia'
                        ? 'Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg'
                        : 'Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg'
                    }`}
                    alt={`Unidade ${unit.name}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#2C3E6B] group-hover:text-[#2E7B7F] transition-colors">
                    Unidade {unit.name}
                  </h3>

                  <div className="space-y-2 mb-5">
                    {unit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#2E7B7F]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 mb-4">
                    <a
                      href={`tel:${unit.phone.replace(/\D/g, '')}`}
                      className="flex-1 bg-[#2C3E6B] text-white py-3 rounded-lg hover:bg-[#1f2d4f] transition-all flex items-center justify-center gap-2 font-semibold text-sm"
                    >
                      <Phone size={16} />
                      Ligar
                    </a>
                    <a
                      href={`https://wa.me/${unit.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#25D366] text-white py-3 rounded-lg hover:bg-[#22c55e] transition-all flex items-center justify-center gap-2 font-semibold text-sm"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp
                    </a>
                  </div>

                  <Link
                    href={`/unidades/${unit.slug}`}
                    className="group/link flex items-center justify-center gap-2 text-[#2E7B7F] font-semibold hover:text-[#2C3E6B] transition-colors"
                  >
                    Conheça a Unidade
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
      </Suspense>

      {/* Veja nossa estrutura */}
      <StructureGallery />

      <Suspense fallback={<SectionSkeleton />}>
        <BlogSection />
      </Suspense>

      {/* Sobre o Residencial - SEO Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#8B6914] mb-3">
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

      {/* Avaliações do Google */}
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>

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

      <Footer />

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



