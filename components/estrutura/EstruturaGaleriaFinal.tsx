'use client'

import Image from 'next/image'

export default function EstruturaGaleriaFinal() {
  return (
    <section className="bg-white py-16 px-8 md:px-28">
      <div className="max-w-[1216px] mx-auto flex flex-col md:flex-row justify-center items-start gap-6">
        <div className="relative w-full md:w-[596px] h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image 
            src="/estrutura/estrutura-sectionsemtexto_abaixo_da_section_de_conforto/1.png" 
            alt="Vista da estrutura" 
            fill 
            className="object-cover" 
          />
        </div>
        <div className="relative w-full md:w-[596px] h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image 
            src="/estrutura/estrutura-sectionsemtexto_abaixo_da_section_de_conforto/2.png" 
            alt="Ambiente acolhedor" 
            fill 
            className="object-cover" 
          />
        </div>
      </div>
    </section>
  )
}
