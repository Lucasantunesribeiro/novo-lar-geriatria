import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import GoogleReviews from '@/components/sections/GoogleReviews'
import GalleryClient from '@/components/sections/GalleryClient'
import { renderCmsBackedPage } from '@/lib/cms/route'
import { acharBloco } from '@/types/cms-blocos'
import { cx, classeTexto, estiloDeTexto, styleImagem } from '@/lib/cms/estilo'
import { fetchCmsPage } from '@/lib/cms/page'
import type { PaginaGaleria, PaginaHero } from '@/types/cms-blocos'
import Image from 'next/image'
import Link from 'next/link'

interface LegacyFotosPageProps {
  hero?: PaginaHero
  galeria?: PaginaGaleria
}

function LegacyFotosPage({ hero, galeria }: LegacyFotosPageProps = {}) {

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      {/* Subheader */}
      <section
        className="relative w-full overflow-hidden py-12 md:py-20 flex items-center"
        style={{
          background: 'linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)',
          minHeight: '400px',
        }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={hero?.imagem?.url || '/fotos-sobre/sobre-1.jpg'}
            alt={hero?.imagem?.alt || 'Galeria de fotos - Novo Lar Geriatria'}
            fill
            priority
            className="object-cover object-center lg:object-right"
            sizes="100vw"
            style={styleImagem(hero?.imagem?.estilo)}
          />
          {/* Overlay branco no mobile para o texto ficar legivel */}
          <div className="absolute inset-0 bg-white/85 lg:bg-transparent" />
          {/* Um degradê suave no desktop para o texto à esquerda */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent w-full md:w-[65%]" />
        </div>

        <div className="container relative z-10 mx-auto px-5 lg:px-[120px]" style={{ maxWidth: '1440px' }}>
          <div className="mx-auto lg:mx-0 max-w-[800px] flex flex-col items-start gap-4">
            <div
              className="flex flex-row items-center px-4 py-2 shadow-sm"
              style={{
                background: '#D4A853',
                borderRadius: '999px',
                minHeight: '36px',
              }}
            >
              <p className="text-sm font-bold leading-[20px] text-white font-arial tracking-wide">
                {hero?.etiqueta ||
                  'Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar'}
              </p>
            </div>

            <h1
              className={cx('text-4xl lg:text-[48px] lg:leading-[52px] font-bold text-[#2C3E6B] font-arial', classeTexto(hero?.estiloTitulo))}
              style={{ letterSpacing: '-1.5px', ...estiloDeTexto(hero?.estiloTitulo) }}
            >
              {hero?.titulo || 'Galeria de Fotos'}
            </h1>

            <div className="h-px w-24 bg-[#D4A853] mt-2 opacity-60"></div>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="w-full">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-[#4A5565]">
                <li className="flex items-center gap-2">
                  <Link href="/" className="font-medium hover:text-[#2C3E6B] transition">
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">/</span>
                  <Link href="/sobre" className="font-medium hover:text-[#2C3E6B] transition">
                    Sobre
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">/</span>
                  <span className="font-bold text-[#2C3E6B]" aria-current="page">
                    Galeria de Fotos
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Galeria interativa */}
      <GalleryClient introducao={galeria?.descricao} />

      {/* Avaliações do Google */}
      <GoogleReviews />

      <FooterWrapper />
    </div>
  )
}

export default async function FotosPage() {
  const cmsPage = await fetchCmsPage('/sobre/fotos')

  return renderCmsBackedPage(
    '/sobre/fotos',
    <LegacyFotosPage
      hero={acharBloco(cmsPage?.blocos, 'paginaHero')}
      galeria={acharBloco(cmsPage?.blocos, 'paginaGaleria')}
    />
  )
}



