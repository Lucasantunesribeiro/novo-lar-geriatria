import Image from 'next/image'
import Link from 'next/link'

const photos = [
  { src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg', alt: 'Área externa - Moinhos de Vento' },
  { src: "/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg", alt: "Recepção - Passo d'Areia" },
  { src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg', alt: 'Área comum - Moinhos de Vento' },
  { src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg', alt: 'Sala de estar' },
]

export default function StructureGallery() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-[22%] bottom-[22%] left-[16%] right-[16%] bg-[#2C3E6B] rounded-[60px] lg:rounded-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-12">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-[180px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={photos[1].src}
                  alt={photos[1].alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-[170px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={photos[2].src}
                  alt={photos[2].alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={photos[3].src}
                  alt={photos[3].alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>

          <div className="text-white flex flex-col justify-center px-4 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Veja Nossa Estrutura
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed opacity-90 mb-8">
              Ambientes amplos, acolhedores e preparados para promover conforto, segurança e qualidade de vida dos nossos residentes.
            </p>
            <Link
              href="/fotos"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-[#C49943] text-[#2C3E6B] font-semibold text-lg hover:bg-[#c49943] transition-all duration-300 w-fit"
            >
              Conheça as unidades
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
