'use client'

import Image from 'next/image'

import { styleBloco, styleImagem } from '@/lib/cms/estilo'
import type { EstiloBloco } from '@/lib/cms/estilo'
import type { ImagemBloco } from '@/types/cms-blocos'

const IMAGEM1_PADRAO =
  '/estrutura/estrutura-sectionsemtexto_abaixo_da_section_de_conforto/1.png'
const IMAGEM2_PADRAO =
  '/estrutura/estrutura-sectionsemtexto_abaixo_da_section_de_conforto/2.png'

interface EstruturaGaleriaFinalProps {
  imagem1?: ImagemBloco
  imagem2?: ImagemBloco
  estilo?: EstiloBloco
}

export default function EstruturaGaleriaFinal({
  imagem1,
  imagem2,
  estilo,
}: EstruturaGaleriaFinalProps = {}) {
  return (
    <section className="bg-white py-16 px-8 md:px-28" style={styleBloco(estilo)}>
      <div className="max-w-[1216px] mx-auto flex flex-col md:flex-row justify-center items-start gap-6">
        <div className="relative w-full md:w-[596px] h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={imagem1?.url || IMAGEM1_PADRAO}
            alt={imagem1?.alt || 'Vista da estrutura'}
            fill
            className="object-cover"
            style={styleImagem(imagem1?.estilo)}
          />
        </div>
        <div className="relative w-full md:w-[596px] h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={imagem2?.url || IMAGEM2_PADRAO}
            alt={imagem2?.alt || 'Ambiente acolhedor'}
            fill
            className="object-cover"
            style={styleImagem(imagem2?.estilo)}
          />
        </div>
      </div>
    </section>
  )
}
