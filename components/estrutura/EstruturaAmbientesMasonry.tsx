'use client'

import Image from 'next/image'

export default function EstruturaAmbientesMasonry() {
  return (
    <section className="bg-white py-20 px-8 xl:px-0">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center max-w-[1216px]">
          <h2 className="text-[#2C3E6B] font-bold text-4xl leading-tight">
            Ambientes Preparados para o Seu Conforto
          </h2>
          <p className="text-[#4A5565] text-lg leading-relaxed max-w-[768px]">
            Nossas instalações foram projetadas pensando no bem-estar e na segurança dos nossos residentes
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 w-full lg:w-[389px]">
            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/estrutura/estrutura-ambientes/1.png" alt="Área de convivência" fill className="object-cover" />
            </div>
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/estrutura/estrutura-ambientes/2.png" alt="Sala de estar" fill className="object-cover" />
            </div>
            <div className="relative w-full h-[280px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/estrutura/estrutura-ambientes/3.png" alt="Ambiente interno" fill className="object-cover" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 w-full lg:w-[389px]">
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/estrutura/estrutura-ambientes/4.png" alt="Quarto adaptado" fill className="object-cover" />
            </div>
            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/estrutura/estrutura-ambientes/5.png" alt="Área comum" fill className="object-cover" />
            </div>
            <div className="relative w-full h-[330px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/estrutura/estrutura-ambientes/6.png" alt="Corredor" fill className="object-cover" />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 w-full lg:w-[389px]">
            <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/estrutura/estrutura-ambientes/7.png" alt="Refeitório" fill className="object-cover" />
            </div>
            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/estrutura/estrutura-ambientes/8.png" alt="Área externa" fill className="object-cover" />
            </div>
            <div className="relative w-full h-[280px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/estrutura/estrutura-ambientes/9.png" alt="Sala de atividades" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
