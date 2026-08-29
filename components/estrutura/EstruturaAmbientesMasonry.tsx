'use client'

import Image from 'next/image'

import { cx, classeTexto, estiloDeTexto, styleBloco } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'

export const TITULO_PADRAO = 'Ambientes Preparados para o Seu Conforto'
export const DESCRICAO_PADRAO =
  'Nossas instalações foram projetadas pensando no bem-estar e na segurança dos nossos residentes'

type Foto = { url?: string; alt?: string }

/** As nove fotos que estao no ar, com a altura de cada uma no mosaico. */
const FOTOS_PADRAO: Array<Foto & { classeAltura: string }> = [
  { url: '/estrutura/estrutura-ambientes/1.png', alt: 'Área de convivência', classeAltura: 'h-[300px]' },
  { url: '/estrutura/estrutura-ambientes/2.png', alt: 'Sala de estar', classeAltura: 'h-[400px]' },
  { url: '/estrutura/estrutura-ambientes/3.png', alt: 'Ambiente interno', classeAltura: 'h-[280px]' },
  { url: '/estrutura/estrutura-ambientes/4.png', alt: 'Quarto adaptado', classeAltura: 'h-[350px]' },
  { url: '/estrutura/estrutura-ambientes/5.png', alt: 'Área comum', classeAltura: 'h-[300px]' },
  { url: '/estrutura/estrutura-ambientes/6.png', alt: 'Corredor', classeAltura: 'h-[330px]' },
  { url: '/estrutura/estrutura-ambientes/7.png', alt: 'Refeitório', classeAltura: 'h-[380px]' },
  { url: '/estrutura/estrutura-ambientes/8.png', alt: 'Área externa', classeAltura: 'h-[320px]' },
  { url: '/estrutura/estrutura-ambientes/9.png', alt: 'Sala de atividades', classeAltura: 'h-[280px]' },
]

interface EstruturaAmbientesMasonryProps {
  titulo?: string
  descricao?: string
  imagens?: Foto[]
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export default function EstruturaAmbientesMasonry({
  titulo = TITULO_PADRAO,
  descricao = DESCRICAO_PADRAO,
  imagens,
  estiloTitulo,
  estiloDescricao,
  estilo,
}: EstruturaAmbientesMasonryProps = {}) {
  // As alturas do mosaico sao fixas por posicao; so a foto e o texto mudam.
  const fotos = FOTOS_PADRAO.map((padrao, i) => ({
    url: imagens?.[i]?.url || padrao.url,
    alt: imagens?.[i]?.alt || padrao.alt,
    classeAltura: padrao.classeAltura,
  }))

  const colunas = [fotos.slice(0, 3), fotos.slice(3, 6), fotos.slice(6, 9)]

  return (
    <section className="bg-white py-20 px-8 xl:px-0" style={styleBloco(estilo)}>
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center max-w-[1216px]">
          <h2
            className={cx('text-[#2C3E6B] font-bold text-4xl leading-tight', classeTexto(estiloTitulo))}
            style={estiloDeTexto(estiloTitulo)}
          >
            {titulo}
          </h2>
          <p
            className={cx('text-[#4A5565] text-lg leading-relaxed max-w-[768px]', classeTexto(estiloDescricao))}
            style={estiloDeTexto(estiloDescricao)}
          >
            {descricao}
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-6">
          {colunas.map((coluna, indiceColuna) => (
            <div key={indiceColuna} className="flex flex-col gap-6 w-full lg:w-[389px]">
              {coluna.map((foto, i) => (
                <div
                  key={`${indiceColuna}-${i}`}
                  className={`relative w-full ${foto.classeAltura} rounded-2xl overflow-hidden shadow-xl`}
                >
                  <Image
                    src={foto.url || ''}
                    alt={foto.alt || ''}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
