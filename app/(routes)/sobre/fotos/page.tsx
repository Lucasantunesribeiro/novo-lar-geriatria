import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import GoogleReviews from '@/components/sections/GoogleReviews'
import GalleryClient from '@/components/sections/GalleryClient'
import Image from 'next/image'
import Link from 'next/link'

export default function FotosPage() {

  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      {/* Subheader */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-12 text-white">
        <Image
          src="/fotos-sobre/sobre-1.jpg"
          alt="Galeria de fotos - Novo Lar Geriatria"
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
              Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Galeria de Fotos
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
                  Galeria de Fotos
                </li>
              </ol>
            </nav>

            <div className="mt-6 h-px w-24 bg-[#8B6914]"></div>
          </div>
        </div>
      </section>

      {/* Galeria interativa */}
      <GalleryClient />

      {/* Avaliações do Google */}
      <GoogleReviews />

      <FooterWrapper />
    </div>
  )
}




