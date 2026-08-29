import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BookOpen,
  Heart,
  Music,
  Palette,
  Phone,
  Smile,
  Users,
} from 'lucide-react'

import FooterWrapper from '@/components/layout/FooterWrapper'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import GoogleReviews from '@/components/sections/GoogleReviews'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { buildCmsBackedMetadata, renderCmsBackedPage } from '@/lib/cms/route'
import { acharBloco } from '@/types/cms-blocos'
import { cx, classeTexto, estiloDeTexto } from '@/lib/cms/estilo'
import { fetchCmsPage } from '@/lib/cms/page'
import { blocosDoTipo } from '@/types/cms-blocos'
import { icone } from '@/components/cms/icones'
import type {
  PaginaCartoes,
  PaginaCta,
  PaginaGaleria,
  PaginaHero,
} from '@/types/cms-blocos'
import { COMPANY_CONTACT } from '@/lib/site-data'

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
  {
    icon: Music,
    title: 'Musicoterapia',
    desc: 'Sessões com música, ritmo e canto para estimular memória, humor e conexão emocional.',
  },
  {
    icon: Palette,
    title: 'Artes e expressão',
    desc: 'Pintura, desenho e trabalhos manuais que reforçam coordenação, concentração e autoestima.',
  },
  {
    icon: BookOpen,
    title: 'Leitura e jogos cognitivos',
    desc: 'Atividades adaptadas para atenção, memória, linguagem e raciocínio no ritmo de cada residente.',
  },
  {
    icon: Users,
    title: 'Convivência social',
    desc: 'Rodas de conversa, comemorações e encontros que fortalecem vínculos e senso de pertencimento.',
  },
  {
    icon: Heart,
    title: 'Movimento assistido',
    desc: 'Alongamentos, exercícios leves e estímulos motores integrados à rotina com segurança.',
  },
  {
    icon: Smile,
    title: 'Lazer e bem-estar',
    desc: 'Momentos prazerosos que aliviam a rotina, reduzem ociosidade e ampliam a participação.',
  },
]

const PROGRAM_HIGHLIGHTS = [
  {
    title: 'Planejamento individual',
    description:
      'A equipe considera cognição, mobilidade, humor, repertório pessoal e condição clínica antes de propor qualquer atividade.',
    border: 'border-[#2E7B7F]',
  },
  {
    title: 'Participação respeitosa',
    description:
      'Ninguém é exposto ou forçado. O objetivo é estimular sem desorganizar a rotina e sem desrespeitar limites.',
    border: 'border-[#D4A853]',
  },
  {
    title: 'Constância que gera resultado',
    description:
      'A repetição organizada ajuda a manter engajamento, previsibilidade e mais estabilidade emocional no dia a dia.',
    border: 'border-[#2C3E6B]',
  },
]

const FAMILY_OUTCOMES = [
  {
    title: 'Mais engajamento no dia a dia',
    description:
      'A rotina deixa de ser apenas assistencial e passa a ter momentos significativos de participação, vínculo e estímulo.',
  },
  {
    title: 'Menos apatia e mais convivência',
    description:
      'Atividades bem conduzidas favorecem interação social, reduzem isolamento e tornam o ambiente mais leve para o residente.',
  },
  {
    title: 'Autonomia preservada por mais tempo',
    description:
      'Mesmo quando há limitações, o trabalho contínuo ajuda a manter capacidades funcionais e a sensação de utilidade.',
  },
]

const fallbackMetadata: Metadata = {
  title: 'Atividades e Terapia Ocupacional para Idosos | Novo Lar Geriatria',
  description:
    'Entenda como a rotina terapêutica da Novo Lar combina terapia ocupacional, estímulo cognitivo, socialização e atividades adaptadas para preservar autonomia e bem-estar dos residentes.',
  keywords: [
    'atividades para idosos',
    'terapia ocupacional porto alegre',
    'musicoterapia terceira idade',
    'estimulação cognitiva idosos',
    'atividades em casa geriátrica',
    'rotina terapêutica para idosos',
  ],
  openGraph: {
    title: 'Atividades e Terapia Ocupacional para Idosos | Novo Lar Geriatria',
    description:
      'Veja como a rotina terapêutica da Novo Lar estimula cognição, mobilidade, socialização e bem-estar emocional.',
    url: '/sobre/atividades',
    type: 'website',
    images: [
      {
        url: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg',
        width: 1200,
        height: 630,
        alt: 'Atividades terapêuticas na Novo Lar Geriatria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atividades e Terapia Ocupacional | Novo Lar Geriatria',
    description:
      'Rotina terapêutica com estímulos cognitivos, sociais e funcionais para promover qualidade de vida.',
    images: [
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg',
    ],
  },
  alternates: {
    canonical: '/sobre/atividades',
  },
}

export async function generateMetadata() {
  return buildCmsBackedMetadata('/sobre/atividades', fallbackMetadata)
}

interface LegacyAtividadesPageProps {
  hero?: PaginaHero
  rotina?: PaginaCartoes
  metodo?: PaginaCartoes
  familia?: PaginaCartoes
  galeria?: PaginaGaleria
  cta?: PaginaCta
}

function LegacyAtividadesPage({
  hero,
  rotina,
  metodo,
  familia,
  galeria,
  cta,
}: LegacyAtividadesPageProps = {}) {
  // Cada lista abaixo: o que o cliente cadastrou; vazio = o que ja estava aqui.
  const tiposDeAtividade =
    rotina?.cartoes && rotina.cartoes.length > 0
      ? rotina.cartoes.map((cartao, i) => ({
          icon: icone(cartao.icone, ACTIVITY_TYPES[i]?.icon || Music),
          title: cartao.titulo || ACTIVITY_TYPES[i]?.title || '',
          desc: cartao.descricao || ACTIVITY_TYPES[i]?.desc || '',
        }))
      : ACTIVITY_TYPES

  const destaquesDoPrograma =
    metodo?.cartoes && metodo.cartoes.length > 0
      ? metodo.cartoes.map((cartao, i) => ({
          title: cartao.titulo || PROGRAM_HIGHLIGHTS[i]?.title || '',
          description: cartao.descricao || PROGRAM_HIGHLIGHTS[i]?.description || '',
          border: PROGRAM_HIGHLIGHTS[i]?.border || PROGRAM_HIGHLIGHTS[0].border,
        }))
      : PROGRAM_HIGHLIGHTS

  const resultadosParaFamilia =
    familia?.cartoes && familia.cartoes.length > 0
      ? familia.cartoes.map((cartao, i) => ({
          title: cartao.titulo || FAMILY_OUTCOMES[i]?.title || '',
          description: cartao.descricao || FAMILY_OUTCOMES[i]?.description || '',
        }))
      : FAMILY_OUTCOMES

  // Fotos: a posicao manda. Vazio numa posicao = a foto de hoje.
  const foto = (i: number) => galeria?.imagens?.[i]?.url || ACTIVITIES_IMAGES[i]
  const fotoAlt = (i: number, padrao: string) => galeria?.imagens?.[i]?.alt || padrao
  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-12 text-white">
        <Image
          src={foto(0)}
          alt={fotoAlt(0, 'Atividades e terapia ocupacional na Novo Lar Geriatria')}
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E6B]/95 via-[#1d3364]/90 to-[#2E7B7F]/85" />
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
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
              {hero?.titulo || 'Atividades e Terapia Ocupacional'}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/90">
              Na Novo Lar, atividades terapêuticas não são ocupação de tempo. Elas fazem parte do
              cuidado diário e ajudam a preservar autonomia, cognição, humor e vínculos sociais de
              forma respeitosa e adaptada a cada residente.
            </p>

            <nav aria-label="Breadcrumb" className="mt-6">
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

            <div className="mt-6 h-px w-24 bg-[#D4A853]" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2
              className={cx('mb-4 text-3xl font-bold text-[#2C3E6B] md:text-4xl', classeTexto(rotina?.estiloTitulo))}
              style={estiloDeTexto(rotina?.estiloTitulo)}
            >
              {rotina?.titulo || 'Uma rotina que estimula corpo, mente e convivência'}
            </h2>
            <p className="mx-auto max-w-4xl text-lg leading-8 text-gray-600">
              A programação diária é pensada para dar mais sentido à rotina, reduzir ociosidade,
              estimular participação e reforçar aquilo que ainda faz bem para o residente no seu
              estágio atual de autonomia.
            </p>
          </div>

          <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tiposDeAtividade.map((activity) => (
              <div
                key={activity.title}
                className="rounded-2xl bg-gradient-to-br from-[#2E7B7F] to-[#2C3E6B] p-6 text-white shadow-xl transition-transform duration-300 hover:scale-105"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                  <activity.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{activity.title}</h3>
                <p className="text-white/90">{activity.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="group relative h-[350px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={foto(1)}
                  alt={fotoAlt(1, 'Atividade em grupo com residentes')}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="group relative h-[350px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={foto(2)}
                  alt={fotoAlt(2, 'Terapia ocupacional com acompanhamento')}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="group relative h-[350px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={foto(3)}
                  alt={fotoAlt(3, 'Momento recreativo com residente')}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="group relative h-[450px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={foto(4)}
                  alt={fotoAlt(4, 'Atividade de bem-estar na rotina da unidade')}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="group relative h-[450px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={foto(5)}
                  alt={fotoAlt(5, 'Convivência social entre residentes')}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                className={cx(
                  'mb-6 text-3xl font-bold text-[#2C3E6B] md:text-4xl',
                  classeTexto(metodo?.estiloTitulo)
                )}
                style={estiloDeTexto(metodo?.estiloTitulo)}
              >
                {metodo?.titulo || 'Atividades não são passatempo. São parte do cuidado.'}
              </h2>
              <p className="mb-5 text-lg leading-8 text-gray-600">
                Na Novo Lar, terapia ocupacional e atividades terapêuticas são organizadas conforme
                condição clínica, mobilidade, cognição e interesses pessoais. O objetivo é manter o
                residente engajado sem desrespeitar limites, ritmo ou preferências.
              </p>
              <p className="mb-6 text-lg leading-8 text-gray-600">
                Quando bem conduzida, a programação ajuda a preservar funcionalidade, favorece
                vínculo com a equipe e com outros residentes e torna a rotina assistida mais leve
                também para a família.
              </p>

              <div className="space-y-4">
                {destaquesDoPrograma.map((highlight) => (
                  <div
                    key={highlight.title}
                    className={`rounded-xl border-l-4 bg-white p-5 shadow-lg ${highlight.border}`}
                  >
                    <h3 className="mb-2 font-bold text-[#2C3E6B]">{highlight.title}</h3>
                    <p className="text-sm leading-6 text-gray-600">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-[350px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={foto(7)}
                  alt={fotoAlt(7, 'Atividade cognitiva acompanhada por profissional')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[350px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={foto(8)}
                  alt={fotoAlt(8, 'Atividade recreativa na rotina da unidade')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="group relative h-[280px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={foto(9)}
                alt={fotoAlt(9, 'Momento de lazer assistido')}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="group relative h-[280px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={foto(10)}
                alt={fotoAlt(10, 'Atividade em grupo com foco em convivência')}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="group relative h-[280px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={foto(11)}
                alt={fotoAlt(11, 'Recreação e estímulo funcional')}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="group relative h-[280px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={foto(0)}
                alt={fotoAlt(0, 'Convivência e participação dos residentes')}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-4xl">
            <h2
              className={cx(
                'mb-4 text-3xl font-bold text-[#2C3E6B] md:text-4xl',
                classeTexto(familia?.estiloTitulo)
              )}
              style={estiloDeTexto(familia?.estiloTitulo)}
            >
              {familia?.titulo || 'O que a família percebe na prática'}
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Uma rotina terapêutica consistente não substitui cuidado clínico. Ela complementa o
              cuidado, ajuda a tornar os dias mais significativos e contribui para uma experiência
              mais humana dentro da unidade.
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {resultadosParaFamilia.map((outcome) => (
              <div
                key={outcome.title}
                className="rounded-2xl border border-gray-100 bg-[#F9FAFB] p-6 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-bold text-[#2C3E6B]">{outcome.title}</h3>
                <p className="text-base leading-7 text-gray-600">{outcome.description}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="group relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={foto(4)}
                alt={fotoAlt(4, 'Atividades sociais na Novo Lar')}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="group relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={foto(6)}
                alt={fotoAlt(6, 'Terapia em grupo com residentes')}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#2C3E6B] to-[#2E7B7F] p-8 text-white shadow-xl md:p-10">
            <div className="max-w-4xl">
              <h2
                className={cx('text-3xl font-bold md:text-4xl', classeTexto(cta?.estiloTitulo))}
                style={estiloDeTexto(cta?.estiloTitulo)}
              >
                {cta?.titulo ||
                  'Quer entender como essa rotina se encaixa no perfil do seu familiar?'}
              </h2>
              <p
                className={cx('mt-4 text-lg leading-8 text-white/85', classeTexto(cta?.estiloDescricao))}
                style={estiloDeTexto(cta?.estiloDescricao)}
              >
                {cta?.descricao ||
                  'Nossa equipe pode explicar como a programação terapêutica se integra ao cuidado diário, ao acompanhamento clínico e à adaptação de cada residente.'}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={cta?.botao1Href || '/contato'}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#2C3E6B] transition hover:bg-[#F3F4F6]"
                >
                  {cta?.botao1Texto || 'Agendar visita'}
                </Link>
                <a
                  href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  Falar com a equipe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default async function AtividadesPage() {
  const cmsPage = await fetchCmsPage('/sobre/atividades')
  const cartoes = blocosDoTipo(cmsPage?.blocos, 'paginaCartoes')

  return renderCmsBackedPage(
    '/sobre/atividades',
    <LegacyAtividadesPage
      hero={acharBloco(cmsPage?.blocos, 'paginaHero')}
      rotina={cartoes[0]}
      metodo={cartoes[1]}
      familia={cartoes[2]}
      galeria={acharBloco(cmsPage?.blocos, 'paginaGaleria')}
      cta={acharBloco(cmsPage?.blocos, 'paginaCta')}
    />
  )
}
