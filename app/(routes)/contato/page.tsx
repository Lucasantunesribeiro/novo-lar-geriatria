import type { ReactNode } from 'react'
import type { Metadata } from 'next'

import ContactForm from '@/components/contato/ContactForm'
import FooterWrapper from '@/components/layout/FooterWrapper'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import { cx, blocoOculto, classeTexto, estiloDeTexto, styleBloco } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'
import { acharBloco } from '@/types/cms-blocos'
import { getTextosGlobais } from '@/lib/sanity/queries'
import type { TextosDoFormulario } from '@/components/contato/ContactForm'
import { getHeroSection } from '@/lib/cms/legacy-page-content'
import { fetchCmsPage } from '@/lib/cms/page'
import { buildCmsBackedMetadata } from '@/lib/cms/route'

const fallbackMetadata: Metadata = {
  title: 'Entre em Contato - Novo Lar Geriatria',
  description:
    'Entre em contato com a Novo Lar Geriatria. Tire suas dúvidas, agende uma visita ou solicite mais informações sobre nossas unidades em Porto Alegre.',
  openGraph: {
    title: 'Entre em Contato - Novo Lar Geriatria',
    description: 'Entre em contato conosco. Estamos prontos para atendê-lo.',
    url: '/contato',
    type: 'website',
  },
  alternates: {
    canonical: '/contato',
  },
}

export async function generateMetadata() {
  return buildCmsBackedMetadata('/contato', fallbackMetadata)
}

interface LegacyContatoPageProps {
  heroEyebrow?: string
  heroTitle?: string
  heroDescription?: string
  heroOculto?: boolean
  formularioOculto?: boolean
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estiloHero?: EstiloBloco
  textosForm?: TextosDoFormulario
}

function LegacyContatoPage({
  heroEyebrow,
  heroTitle,
  heroDescription,
  heroOculto,
  formularioOculto,
  estiloTitulo,
  estiloDescricao,
  estiloHero,
  textosForm,
}: LegacyContatoPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      {!heroOculto && (
        <section
          className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] text-white py-16"
          style={styleBloco(estiloHero)}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-white/80 mb-3">
                {heroEyebrow || 'Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar'}
              </p>
              <h1
                className={cx('text-4xl md:text-5xl font-bold mb-6', classeTexto(estiloTitulo))}
                style={estiloDeTexto(estiloTitulo)}
              >
                {heroTitle || 'Entre em Contato'}
              </h1>
              <p
                className={cx('text-xl text-gray-100', classeTexto(estiloDescricao))}
                style={estiloDeTexto(estiloDescricao)}
              >
                {heroDescription ||
                  'Estamos prontos para atendê-lo. Preencha o formulário abaixo ou entre em contato diretamente com uma de nossas unidades.'}
              </p>
            </div>
          </div>
        </section>
      )}

      {!formularioOculto && <ContactForm textos={textosForm} />}

      <FooterWrapper />
    </div>
  )
}

export default async function ContatoPage() {
  const cmsPage = await fetchCmsPage('/contato')
  const heroSection = getHeroSection(cmsPage)

  const textosForm = (await getTextosGlobais()) as TextosDoFormulario | null
  const blocoHero = acharBloco(cmsPage?.blocos, 'contatoHero')
  const blocoFormulario = acharBloco(cmsPage?.blocos, 'contatoFormulario')

  return (
    <LegacyContatoPage
      heroEyebrow={blocoHero?.eyebrow || heroSection?.eyebrow}
      heroTitle={blocoHero?.titulo || heroSection?.title}
      heroDescription={blocoHero?.descricao || heroSection?.description}
      heroOculto={blocoOculto(blocoHero?.estilo)}
      formularioOculto={blocoOculto(blocoFormulario?.estilo)}
      estiloTitulo={blocoHero?.estiloTitulo}
      estiloDescricao={blocoHero?.estiloDescricao}
      estiloHero={blocoHero?.estilo}
      textosForm={textosForm ?? undefined}
    />
  )
}
