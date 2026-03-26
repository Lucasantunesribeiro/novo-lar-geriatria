'use client'

import Image from 'next/image'
import { Maximize, Bath, Armchair, Utensils, BedDouble } from 'lucide-react'

export default function EstruturaConfortoDetalhe() {
  const items = [
    {
      icon: <Maximize className="w-6 h-6 text-[#2E7B7F]" />,
      title: 'Ambientes amplos e acolhedores'
    },
    {
      icon: <Bath className="w-6 h-6 text-[#2E7B7F]" />,
      title: 'Banheiros adaptados e seguros'
    },
    {
      icon: <Armchair className="w-6 h-6 text-[#2E7B7F]" />,
      title: 'Salas de convivência confortáveis'
    },
    {
      icon: <Utensils className="w-6 h-6 text-[#2E7B7F]" />,
      title: 'Refeitórios climatizados'
    },
    {
      icon: <BedDouble className="w-6 h-6 text-[#2E7B7F]" />,
      title: 'Quartos individuais e compartilhados'
    }
  ]

  return (
    <section className="py-16 px-8 md:px-28" style={{ background: 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)' }}>
      <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Image */}
        <div className="relative w-full lg:w-[584px] h-[500px] rounded-3xl overflow-hidden shadow-2xl flex-shrink-0">
          <Image 
            src="/estrutura/estrutura-conforto/aa25998eb255b1e07cbfe3c33d191a09dc02c3f7.png" 
            alt="Detalhe da estrutura" 
            fill 
            className="object-cover" 
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 w-full lg:w-[584px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#2C3E6B] font-bold text-4xl leading-[40px]">
              Conforto e Segurança em Cada Detalhe
            </h2>
            <p className="text-[#4A5565] text-lg leading-[29px]">
              Cada ambiente foi cuidadosamente planejado para proporcionar segurança, acessibilidade e conforto aos nossos residentes.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            {items.map((item, index) => (
              <div 
                key={index}
                className="flex flex-row items-center p-4 gap-4 bg-white border border-[#F3F4F6] shadow-sm rounded-xl"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-[16px] flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-[#364153] text-[16px] leading-[24px]">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
