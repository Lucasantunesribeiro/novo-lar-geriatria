'use client'

import Image from 'next/image'
import { Maximize, Bath, Armchair, Utensils, BedDouble } from 'lucide-react'

import { icone } from '@/components/cms/icones'
import { cx, classeTexto, estiloDeTexto, styleBloco, styleImagem } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'
import type { ImagemBloco } from '@/types/cms-blocos'

export const TITULO_PADRAO = 'Conforto e Segurança em Cada Detalhe'
export const DESCRICAO_PADRAO =
  'Cada ambiente foi cuidadosamente planejado para proporcionar segurança, acessibilidade e conforto aos nossos residentes.'

const IMAGEM_PADRAO =
  '/estrutura/estrutura-conforto/aa25998eb255b1e07cbfe3c33d191a09dc02c3f7.png'

const ITENS_PADRAO = [
  { icon: Maximize, title: 'Ambientes amplos e acolhedores' },
  { icon: Bath, title: 'Banheiros adaptados e seguros' },
  { icon: Armchair, title: 'Salas de convivência confortáveis' },
  { icon: Utensils, title: 'Refeitórios climatizados' },
  { icon: BedDouble, title: 'Quartos individuais e compartilhados' },
]

interface EstruturaConfortoDetalheProps {
  titulo?: string
  descricao?: string
  imagem?: ImagemBloco
  itens?: Array<{ icone?: string; titulo?: string }>
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export default function EstruturaConfortoDetalhe({
  titulo = TITULO_PADRAO,
  descricao = DESCRICAO_PADRAO,
  imagem,
  itens,
  estiloTitulo,
  estiloDescricao,
  estilo,
}: EstruturaConfortoDetalheProps = {}) {
  const items =
    itens && itens.length > 0
      ? itens.map((item, i) => ({
          icon: icone(item.icone, ITENS_PADRAO[i]?.icon || Maximize),
          title: item.titulo || ITENS_PADRAO[i]?.title || '',
        }))
      : ITENS_PADRAO

  return (
    <section
      className="py-16 px-8 md:px-28"
      style={{
        background: 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)',
        ...styleBloco(estilo),
      }}
    >
      <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Image */}
        <div className="relative w-full lg:w-[584px] h-[500px] rounded-3xl overflow-hidden shadow-2xl flex-shrink-0">
          <Image
            src={imagem?.url || IMAGEM_PADRAO}
            alt={imagem?.alt || 'Detalhe da estrutura'}
            fill
            className="object-cover"
            style={styleImagem(imagem?.estilo)}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 w-full lg:w-[584px]">
          <div className="flex flex-col gap-4">
            <h2
              className={cx('text-[#2C3E6B] font-bold text-4xl leading-[40px]', classeTexto(estiloTitulo))}
              style={estiloDeTexto(estiloTitulo)}
            >
              {titulo}
            </h2>
            <p
              className={cx('text-[#4A5565] text-lg leading-[29px]', classeTexto(estiloDescricao))}
              style={estiloDeTexto(estiloDescricao)}
            >
              {descricao}
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            {items.map((item, index) => {
              const Icone = item.icon

              return (
                <div
                  key={index}
                  className="flex flex-row items-center p-4 gap-4 bg-white border border-[#F3F4F6] shadow-sm rounded-xl"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-[16px] flex-shrink-0">
                    <Icone className="w-6 h-6 text-[#2E7B7F]" />
                  </div>
                  <span className="text-[#364153] text-[16px] leading-[24px]">
                    {item.title}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
