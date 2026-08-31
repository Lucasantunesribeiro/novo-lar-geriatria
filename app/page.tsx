import type { Metadata } from 'next'

import BlogSection from '@/components/home/BlogSection'
import ExperienceSection from '@/components/home/ExperienceSection'
import FinalCTA from '@/components/home/FinalCTA'
import FooterWrapper from '@/components/layout/FooterWrapper'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import HeroSection from '@/components/home/HeroSection'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import ServicesSection from '@/components/home/ServicesSection'
import StructureShowcase from '@/components/home/StructureShowcase'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import UnitsSection from '@/components/home/UnitsSection'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import { COMPANY_CONTACT } from '@/lib/site-data'
import {
  getBlogPostsSection,
  getCtaSection,
  getHeroSection,
  getServicesSection,
  getTestimonialsSection,
  getUnitsSection,
} from '@/lib/cms/legacy-page-content'
import { acharBloco } from '@/types/cms-blocos'
import { blocoOculto } from '@/lib/cms/estilo'
import { fetchCmsPage } from '@/lib/cms/page'
import { getTextosGlobais } from '@/lib/sanity/queries'
import { buildCmsBackedMetadata } from '@/lib/cms/route'
import { withCanonicalPath } from '@/lib/seo/metadata'

const fallbackMetadata: Metadata = withCanonicalPath(
  {
    title: 'Novo Lar Geriatria | Residencial Geriátrico em Porto Alegre',
    description:
      "Cuidados especializados 24h para idosos em Porto Alegre. Residencial geriátrico com médico geriatra, enfermagem, fisioterapia e atividades terapêuticas. 3 unidades em Moinhos de Vento e Passo d'Areia.",
    openGraph: {
      title: 'Novo Lar Geriatria | Residencial Geriátrico em Porto Alegre',
      description:
        'Cuidados especializados 24h para idosos em Porto Alegre. Médico geriatra, enfermagem, nutrição e atividades terapêuticas em 3 unidades.',
      images: [
        {
          url: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/18.jpeg',
          alt: 'Novo Lar Geriatria - Residencial Geriátrico em Porto Alegre',
        },
      ],
    },
  },
  '/'
)

export async function generateMetadata() {
  return buildCmsBackedMetadata('/', fallbackMetadata)
}

interface LegacyHomePageProps {
  hero: {
    eyebrow?: string
    title?: string
    description?: string
    cta?: { label: string; href: string }
    stats?: Array<{ label?: string; value?: string; description?: string }>
    imagemUrl?: string
    imagemAlt?: string
  }
  units: {
    cartoes?: NonNullable<ReturnType<typeof acharBloco<'homeUnidades'>>>['cartoes']
    rotuloVisitas?: string
    rotuloAgendar?: string
    rotuloWhatsapp?: string
    rotuloDetalhes?: string
    title?: string
    description?: string
    units?: NonNullable<NonNullable<ReturnType<typeof getUnitsSection>>['unitsResolved']>
  }
  services: {
    cartoes?: NonNullable<ReturnType<typeof acharBloco<'homeServicos'>>>['cartoes']
    title?: string
    description?: string
    services?: NonNullable<NonNullable<ReturnType<typeof getServicesSection>>['servicesResolved']>
  }
  blog: {
    title?: string
    description?: string
    posts?: NonNullable<NonNullable<ReturnType<typeof getBlogPostsSection>>['postsResolved']>
  }
  testimonials: {
    title?: string
    description?: string
    items?: NonNullable<
      NonNullable<ReturnType<typeof getTestimonialsSection>>['testimonialsResolved']
    >
  }
  cta: {
    title?: string
    description?: string
    etiqueta?: string
    cartoes?: Array<{
      icone?: string
      titulo?: string
      descricao?: string
      href?: string
      label?: string
    }>
    rodape?: string
    linksApoio?: Array<{ label?: string; href?: string }>
  }
  /** Textos do bloco "Por que escolher a Novo Lar" vindos do Studio. */
  porQue?: {
    titulo?: string
    descricaoRica?: unknown[]
    beneficios?: Array<{titulo?: string; descricao?: string}>
  }
  estrutura?: {
    titulo?: string
    descricao?: string
    botaoTexto?: string
    botaoHref?: string
  }
  experiencia?: {
    etiqueta?: string
    titulo?: string
    paragrafo1?: string
    paragrafo2?: string
  }
  /** Blocos que o cliente escondeu no Studio. */
  ocultos?: Record<string, boolean>
  rotulos?: Rotulos
}


/** Rotulos de interface vindos de "Textos do site". */
type Rotulos = {
  rotuloVerServicos?: string
  rotuloBuscaFamilia?: string
  rotuloBeneficios?: string
  rotuloComoAcontece?: string
  rotuloOutrosServicos?: string
  rotuloContatoUnidade?: string
  rotuloAvaliacoesGoogle?: string
  rotuloEtiquetaGoogle?: string
  rotuloAcessarBlog?: string
  rotuloFaleWhatsapp?: string
  artigoCtaTitulo?: string
  artigoCtaDescricao?: string
  obrigadoTitulo?: string
  obrigadoDescricao?: string
}

function LegacyHomePage({
  rotulos,
  hero,
  units,
  services,
  blog,
  testimonials,
  cta,
  porQue,
  estrutura,
  experiencia,
  ocultos,
}: LegacyHomePageProps) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#0B1C3F]">
      <HeaderWrapper />

      <main className="w-full">
        <HeroSection
          eyebrow={hero.eyebrow}
          title={hero.title}
          description={hero.description}
          primaryCta={hero.cta}
          stats={hero.stats}
          imagemUrl={hero.imagemUrl}
          imagemAlt={hero.imagemAlt}
        />
        {!ocultos?.homePorQue && (
          <WhyChooseUs
            titulo={porQue?.titulo}
            descricaoRica={porQue?.descricaoRica as never}
            beneficios={porQue?.beneficios}
          />
        )}
        {!ocultos?.homeUnidades && (
          <UnitsSection
            title={units.title}
            description={units.description}
            cartoes={units.cartoes}
            units={units.units}
            rotuloVisitas={units.rotuloVisitas}
            rotuloAgendar={units.rotuloAgendar}
            rotuloWhatsapp={units.rotuloWhatsapp}
            rotuloDetalhes={units.rotuloDetalhes}
          />
        )}
        {!ocultos?.homeServicos && (
          <ServicesSection
            title={services.title}
            description={services.description}
            cartoes={services.cartoes}
            services={services.services}
            rotuloBotao={rotulos?.rotuloVerServicos}
            rotuloBusca={rotulos?.rotuloBuscaFamilia}
          />
        )}
        {!ocultos?.homeEstrutura && (
          <StructureShowcase
            titulo={estrutura?.titulo}
            descricao={estrutura?.descricao}
            botaoTexto={estrutura?.botaoTexto}
            botaoHref={estrutura?.botaoHref}
          />
        )}
        {!ocultos?.homeBlog && (
          <BlogSection
            title={blog.title}
            description={blog.description}
            articles={blog.posts}
            rotuloAcessarBlog={rotulos?.rotuloAcessarBlog}
          />
        )}
        {!ocultos?.homeExperiencia && (
          <ExperienceSection
            etiqueta={experiencia?.etiqueta}
            titulo={experiencia?.titulo}
            paragrafo1={experiencia?.paragrafo1}
            paragrafo2={experiencia?.paragrafo2}
          />
        )}
        {!ocultos?.homeDepoimentos && (
          <TestimonialsSection
            title={testimonials.title}
            description={testimonials.description}
            testimonials={testimonials.items}
            rotuloAvaliacoes={rotulos?.rotuloAvaliacoesGoogle}
            rotuloEtiqueta={rotulos?.rotuloEtiquetaGoogle}
          />
        )}
        {!ocultos?.homeCtaFinal && (
          <FinalCTA
            title={cta.title}
            description={cta.description}
            etiqueta={cta.etiqueta}
            cartoes={cta.cartoes}
            rodape={cta.rodape}
            linksApoio={cta.linksApoio}
          />
        )}
      </main>

      <FooterWrapper />

      <WhatsAppButton
        phoneNumber={COMPANY_CONTACT.whatsappDigits}
        rotulo={rotulos?.rotuloFaleWhatsapp}
      />

      <MobileBottomBar
        phoneNumber={COMPANY_CONTACT.centralPhoneDigits}
        phoneDisplay={COMPANY_CONTACT.centralPhoneDisplay}
        whatsappNumber={COMPANY_CONTACT.whatsappDigits}
      />
    </div>
  )
}

/**
 * Lista escolhida no bloco do Studio.
 *
 * Devolve `undefined` quando o cliente nao escolheu nada — assim a home cai na
 * lista completa que ela ja usava, e nunca aparece vazia.
 */
function escolhidos<T>(itens: unknown): T[] | undefined {
  return Array.isArray(itens) && itens.length > 0 ? (itens as T[]) : undefined
}

export default async function HomePage() {
  const cmsPage = await fetchCmsPage('/')
  const rotulos = (await getTextosGlobais()) as Rotulos | null
  const heroSection = getHeroSection(cmsPage)
  const unitsSection = getUnitsSection(cmsPage)
  const servicesSection = getServicesSection(cmsPage)
  const blogSection = getBlogPostsSection(cmsPage)
  const testimonialsSection = getTestimonialsSection(cmsPage)
  const ctaSection = getCtaSection(cmsPage)

  // Blocos espelho do Studio. Enquanto nao existirem, tudo cai nos valores de
  // hoje (as `sections` antigas e os padroes dos componentes).
  const bHero = acharBloco(cmsPage?.blocos, 'homeHero')
  const bPorQue = acharBloco(cmsPage?.blocos, 'homePorQue')
  const bUnidades = acharBloco(cmsPage?.blocos, 'homeUnidades')
  const bServicos = acharBloco(cmsPage?.blocos, 'homeServicos')
  const bEstrutura = acharBloco(cmsPage?.blocos, 'homeEstrutura')
  const bBlog = acharBloco(cmsPage?.blocos, 'homeBlog')
  const bExperiencia = acharBloco(cmsPage?.blocos, 'homeExperiencia')
  const bDepoimentos = acharBloco(cmsPage?.blocos, 'homeDepoimentos')
  const bCta = acharBloco(cmsPage?.blocos, 'homeCtaFinal')

  const ocultos = {
    homePorQue: blocoOculto(bPorQue?.estilo),
    homeUnidades: blocoOculto(bUnidades?.estilo),
    homeServicos: blocoOculto(bServicos?.estilo),
    homeEstrutura: blocoOculto(bEstrutura?.estilo),
    homeBlog: blocoOculto(bBlog?.estilo),
    homeExperiencia: blocoOculto(bExperiencia?.estilo),
    homeDepoimentos: blocoOculto(bDepoimentos?.estilo),
    homeCtaFinal: blocoOculto(bCta?.estilo),
  }

  return (
    <LegacyHomePage
      rotulos={rotulos ?? undefined}
      ocultos={ocultos}
      hero={{
        imagemUrl: bHero?.imagem?.url,
        imagemAlt: bHero?.imagem?.alt,
        eyebrow: bHero?.eyebrow || heroSection?.eyebrow,
        title: bHero?.titulo || heroSection?.title,
        description: bHero?.descricao || heroSection?.description,
        cta:
          bHero?.botaoTexto && bHero?.botaoHref
            ? {label: bHero.botaoTexto, href: bHero.botaoHref}
            : heroSection?.ctas?.[0],
        stats:
          bHero?.numeros && bHero.numeros.length > 0
            ? (bHero.numeros as never)
            : heroSection?.stats,
      }}
      porQue={{
        titulo: bPorQue?.titulo,
        descricaoRica: bPorQue?.descricaoRica,
        beneficios: bPorQue?.beneficios,
      }}
      units={{
        title: bUnidades?.titulo || unitsSection?.title,
        description: bUnidades?.descricao || unitsSection?.description,
        // Escolha feita no bloco; senao, a lista que a pagina ja usava.
        units: escolhidos(bUnidades?.itensUnidade) ?? unitsSection?.unitsResolved,
        cartoes: bUnidades?.cartoes,
        rotuloVisitas: bUnidades?.rotuloVisitas,
        rotuloAgendar: bUnidades?.rotuloAgendar,
        rotuloWhatsapp: bUnidades?.rotuloWhatsapp,
        rotuloDetalhes: bUnidades?.rotuloDetalhes,
      }}
      services={{
        title: bServicos?.titulo || servicesSection?.title,
        description: bServicos?.descricao || servicesSection?.description,
        services: escolhidos(bServicos?.itensServico) ?? servicesSection?.servicesResolved,
        cartoes: bServicos?.cartoes,
      }}
      estrutura={{
        titulo: bEstrutura?.titulo,
        descricao: bEstrutura?.descricao,
        botaoTexto: bEstrutura?.botaoTexto,
        botaoHref: bEstrutura?.botaoHref,
      }}
      blog={{
        title: bBlog?.titulo || blogSection?.title,
        description: bBlog?.descricao || blogSection?.description,
        posts: escolhidos(bBlog?.itensArtigo) ?? blogSection?.postsResolved,
      }}
      experiencia={{
        etiqueta: bExperiencia?.etiqueta,
        titulo: bExperiencia?.titulo,
        paragrafo1: bExperiencia?.paragrafo1,
        paragrafo2: bExperiencia?.paragrafo2,
      }}
      testimonials={{
        title: bDepoimentos?.titulo || testimonialsSection?.title,
        description: bDepoimentos?.descricao || testimonialsSection?.description,
        items:
          escolhidos(bDepoimentos?.itensDepoimento) ??
          testimonialsSection?.testimonialsResolved,
      }}
      cta={{
        title: bCta?.titulo || ctaSection?.title,
        description: bCta?.descricao || ctaSection?.description,
        etiqueta: bCta?.etiqueta,
        cartoes: bCta?.cartoes,
        rodape: bCta?.rodape,
        linksApoio: bCta?.linksApoio,
      }}
    />
  )
}
