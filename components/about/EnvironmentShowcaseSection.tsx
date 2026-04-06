import Link from 'next/link'
import Image from 'next/image'

export default function EnvironmentShowcaseSection() {
  const images = Array.from({ length: 6 }, (_, i) => i + 1)

  return (
    <div className="w-full bg-white flex justify-center py-16 lg:py-[80px] px-4 sm:px-8">
      <section className="flex flex-col items-center w-full max-w-[1180px] gap-10 lg:gap-14">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 w-full max-w-[1156px] mx-auto">
          <div className="flex flex-col gap-4 w-full max-w-[672px] text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="text-[#1A2745] font-bold text-3xl md:text-4xl lg:text-[36px] lg:leading-[40px] m-0">
              Ambientes pensados para acolher famílias inteiras
            </h2>
            <p className="text-[#4A5565] text-base lg:text-[18px] leading-relaxed m-0">
              As unidades da Novo Lar possuem quartos privativos, suítes e quartos semi privativos. Espaços de convivência banhados por luz natural, jardins, salas de convívio e estrutura completa para atender os residentes, reabilitar e promover cuidados clínicos.
            </p>
          </div>
          
          <div className="shrink-0 w-full lg:w-auto flex justify-center">
            <Link
              href="/sobre/fotos"
              className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-[#1D3364] rounded-full text-[#1D3364] font-bold text-sm hover:bg-[#1D3364] hover:text-white transition-colors"
            >
              Ver tour completo
            </Link>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full max-w-[1156px] mx-auto">
          {images.map((id) => (
            <div 
              key={id} 
              className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:h-[224px] rounded-2xl overflow-hidden group shadow-md"
            >
              <Image 
                src={`/sobre-ambientes/${id}.png`} 
                alt={`Ambiente Novo Lar ${id}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

      </section>
    </div>
  )
}
