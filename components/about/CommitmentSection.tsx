import Image from 'next/image'

import { cx, classeTexto, estiloDeTexto, styleBloco, styleImagem } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'
import type { ImagemBloco } from '@/types/cms-blocos'

export const TITULO_PADRAO = 'Nosso compromisso'
export const DESCRICAO_PADRAO =
  'Na Novo Lar, cuidar vai além de atender necessidades clínicas. É sobre preservar dignidade, promover conforto e oferecer qualidade de vida, mesmo nos momentos mais delicados. Seguimos firmes no compromisso de acolher cada pessoa com respeito, responsabilidade e humanidade — como gostaríamos que alguém que amamos fosse cuidado.'

const IMAGEM_PADRAO =
  '/sobre-compromisso/16fa7dd728567a90b7bbcdfd675c479937c6c28f.jpg'

interface CommitmentSectionProps {
  titulo?: string
  descricao?: string
  imagem?: ImagemBloco
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export default function CommitmentSection({
  titulo = TITULO_PADRAO,
  descricao = DESCRICAO_PADRAO,
  imagem,
  estiloTitulo,
  estiloDescricao,
  estilo,
}: CommitmentSectionProps = {}) {
  return (
    <div
      className="w-full bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] flex justify-center py-16 lg:py-[120px] px-4 sm:px-8"
      style={styleBloco(estilo)}
    >
      <section className="flex flex-col items-center justify-center w-full max-w-[1440px]">
        {/* Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-[1001px] gap-10 lg:gap-[54px]">
          
          {/* Image */}
          <div className="relative w-full max-w-[500px] aspect-[4/3] lg:w-[424px] lg:h-[308px] shrink-0 rounded-2xl overflow-hidden shadow-lg mx-auto lg:mx-0">
            <Image
              src={imagem?.url || IMAGEM_PADRAO}
              alt={imagem?.alt || 'Nosso compromisso'}
              fill
              className="object-cover"
              style={styleImagem(imagem?.estilo)}
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 w-full max-w-[523px] text-center lg:text-left mx-auto lg:mx-0">
            <h2
              className={cx('text-[#2C3E6B] font-bold text-3xl md:text-4xl lg:text-[48px] lg:leading-[52px] tracking-tight lg:tracking-[-1.5px] m-0', classeTexto(estiloTitulo))}
              style={estiloDeTexto(estiloTitulo)}
            >
              {titulo}
            </h2>
            <p
              className={cx('text-[#4A5565] text-base lg:text-[18px] leading-relaxed m-0', classeTexto(estiloDescricao))}
              style={estiloDeTexto(estiloDescricao)}
            >
              {descricao}
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
