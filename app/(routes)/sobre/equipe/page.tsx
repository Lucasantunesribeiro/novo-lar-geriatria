import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import GoogleReviews from '@/components/sections/GoogleReviews'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { buildCmsBackedMetadata, renderCmsBackedPage } from '@/lib/cms/route'
import { acharBloco } from '@/types/cms-blocos'
import { cx, classeTexto, estiloDeTexto } from '@/lib/cms/estilo'
import { fetchCmsPage } from '@/lib/cms/page'
import type {
  PaginaCartoes,
  PaginaGaleria,
  PaginaHero,
  PaginaHistoria,
} from '@/types/cms-blocos'
import Image from 'next/image'
import Link from 'next/link'
import { Stethoscope, Heart, Activity, Users, Brain, Apple, Phone } from 'lucide-react'

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

import type { Metadata } from 'next'

const fallbackMetadata: Metadata = {
  title: 'Equipe Multidisciplinar 24h - Profissionais Especializados | Novo Lar Geriatria',
  description: 'Equipe multidisciplinar 24 horas com médicos geriatras, enfermeiros, fisioterapeutas, nutricionistas e psicólogos dedicados ao cuidado integral de idosos em Porto Alegre.',
  keywords: ['equipe geriátrica porto alegre', 'médicos geriatras', 'enfermagem 24 horas', 'fisioterapia idosos', 'nutricionista geriátrico', 'psicólogo terceira idade', 'equipe multidisciplinar'],
  openGraph: {
    title: 'Equipe Multidisciplinar 24h - Profissionais Especializados | Novo Lar Geriatria',
    description: 'Equipe multidisciplinar 24 horas com médicos geriatras, enfermeiros, fisioterapeutas, nutricionistas e psicólogos dedicados ao cuidado integral de idosos em Porto Alegre.',
    url: '/sobre/equipe',
    type: 'website',
    images: [
      {
        url: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg',
        width: 1200,
        height: 630,
        alt: 'Equipe multidisciplinar Novo Lar Geriatria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equipe Multidisciplinar 24h | Novo Lar Geriatria',
    description: 'Profissionais especializados em geriatria dedicados ao cuidado integral de idosos em Porto Alegre.',
    images: ['/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg'],
  },
  alternates: {
    canonical: '/sobre/equipe',
  },
}

export async function generateMetadata() {
  return buildCmsBackedMetadata('/sobre/equipe', fallbackMetadata)
}

interface LegacyEquipePageProps {
  hero?: PaginaHero
  especialistas?: PaginaCartoes
  diferencial?: PaginaHistoria
  galeria?: PaginaGaleria
}

function LegacyEquipePage({
  hero,
  especialistas,
  diferencial,
  galeria,
}: LegacyEquipePageProps = {}) {
  // Fotos por posicao: vazio numa posicao = a foto de hoje.
  const foto = (i: number) => galeria?.imagens?.[i]?.url || TEAM_IMAGES[i]
  const fotoAlt = (i: number, padrao: string) => galeria?.imagens?.[i]?.alt || padrao
  // Textos do Studio; vazio = os textos que ja estavam aqui.
  const cartoes =
    especialistas?.cartoes && especialistas.cartoes.length > 0
      ? especialistas.cartoes.map((cartao, i) => ({
          icon: SPECIALISTS[i]?.icon || SPECIALISTS[0].icon,
          title: cartao.titulo || SPECIALISTS[i]?.title || '',
          desc: cartao.descricao || SPECIALISTS[i]?.desc || '',
        }))
      : SPECIALISTS

  const paragrafosDiferencial =
    diferencial?.paragrafos && diferencial.paragrafos.length > 0
      ? diferencial.paragrafos
      : [
          'Nossa equipe multidisciplinar está presente 24 horas por dia, trabalhando de forma integrada para proporcionar o melhor cuidado aos nossos residentes.',
          'Cada profissional é cuidadosamente selecionado e capacitado para oferecer um atendimento personalizado, respeitando as necessidades individuais de cada residente.',
        ]

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      {/* Subheader */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-12 text-white">
        <Image
          src={foto(0)}
          alt={fotoAlt(0, 'Equipe Multidisciplinar - Novo Lar Geriatria')}
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
              {hero?.etiqueta ||
                'Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar'}
            </p>
            <h1
              className={cx('mt-3 text-4xl font-bold text-white md:text-5xl', classeTexto(hero?.estiloTitulo))}
              style={estiloDeTexto(hero?.estiloTitulo)}
            >
              {hero?.titulo || 'Equipe Multidisciplinar 24h'}
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
                  Equipe Multidisciplinar
                </li>
              </ol>
            </nav>

            <div className="mt-6 h-px w-24 bg-[#D4A853]"></div>
          </div>
        </div>
      </section>

      {/* Apresentação da Equipe */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className={cx('text-3xl md:text-4xl font-bold text-[#2C3E6B] mb-4', classeTexto(especialistas?.estiloTitulo))}
              style={estiloDeTexto(especialistas?.estiloTitulo)}
            >
              {especialistas?.titulo || 'Profissionais Qualificados e Dedicados'}
            </h2>
            <p
              className={cx('text-lg text-gray-600 max-w-3xl mx-auto', classeTexto(especialistas?.estiloDescricao))}
              style={estiloDeTexto(especialistas?.estiloDescricao)}
            >
              {especialistas?.descricao ||
                'Nossa equipe multidisciplinar trabalha de forma integrada para garantir o melhor cuidado'}
            </p>
          </div>

          {/* Grid de Especialistas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cartoes.map((specialist, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] p-8 rounded-2xl text-white shadow-xl hover:scale-105 transition-transform duration-300"
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
                  src={foto(1)}
                  alt={fotoAlt(1, 'Atendimento da equipe')}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={foto(2)}
                  alt={fotoAlt(2, 'Cuidado profissional')}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Linha 2: 1 imagem grande */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src={foto(3)}
                alt={fotoAlt(3, 'Equipe em ação')}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Linha 3: 3 imagens */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={foto(4)}
                  alt={fotoAlt(4, 'Cuidado especializado')}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={foto(5)}
                  alt={fotoAlt(5, 'Acompanhamento médico')}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={foto(6)}
                  alt={fotoAlt(6, 'Fisioterapia')}
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
                  src={foto(7)}
                  alt={fotoAlt(7, 'Profissionais cuidando')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={foto(8)}
                  alt={fotoAlt(8, 'Equipe dedicada')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2
                className={cx('text-3xl md:text-4xl font-bold text-[#2C3E6B] mb-6', classeTexto(diferencial?.estiloDescricao))}
                style={estiloDeTexto(diferencial?.estiloDescricao)}
              >
                {diferencial?.etiqueta || 'Cuidado Humanizado e Profissional'}
              </h2>
              {paragrafosDiferencial.map((paragrafo, i) => (
                <p
                  key={i}
                  className={cx(
                    'text-lg text-gray-600',
                    i === paragrafosDiferencial.length - 1 ? 'mb-8' : 'mb-6',
                    'leading-relaxed',
                    classeTexto(diferencial?.estiloDescricao)
                  )}
                  style={estiloDeTexto(diferencial?.estiloDescricao)}
                >
                  {paragrafo}
                </p>
              ))}

              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#2E7B7F]">
                <h3 className="text-xl font-bold text-[#2C3E6B] mb-3">
                  {diferencial?.destaques?.[0]?.label || 'Atendimento 24 Horas'}
                </h3>
                <p className="text-gray-600">
                  {diferencial?.destaques?.[0]?.description ||
                    'Nossa equipe está sempre disponível para garantir segurança, conforto e bem-estar em tempo integral.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações do Google */}
      <GoogleReviews />

      <FooterWrapper />
      <WhatsAppButton phoneNumber={COMPANY_CONTACT.whatsappDigits} />
      <MobileBottomBar
        phoneNumber={COMPANY_CONTACT.centralPhoneDigits}
        phoneDisplay={COMPANY_CONTACT.centralPhoneDisplay}
        whatsappNumber={COMPANY_CONTACT.whatsappDigits}
      />
    </div>
  )
}

export default async function EquipePage() {
  const cmsPage = await fetchCmsPage('/sobre/equipe')

  return renderCmsBackedPage(
    '/sobre/equipe',
    <LegacyEquipePage
      hero={acharBloco(cmsPage?.blocos, 'paginaHero')}
      especialistas={acharBloco(cmsPage?.blocos, 'paginaCartoes')}
      diferencial={acharBloco(cmsPage?.blocos, 'paginaHistoria')}
      galeria={acharBloco(cmsPage?.blocos, 'paginaGaleria')}
    />
  )
}



