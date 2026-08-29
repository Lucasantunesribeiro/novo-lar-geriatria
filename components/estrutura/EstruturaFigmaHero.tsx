'use client'

import { cx, classeTexto, estiloDeTexto, styleBloco } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'

interface EstruturaFigmaHeroProps {
  eyebrow?: string
  title?: string
  description?: string
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export default function EstruturaFigmaHero({
  eyebrow = 'Hospedagem assistida em Porto Alegre',
  title = 'Estrutura completa para cuidar com segurança, conforto e tranquilidade',
  description = 'Conheça os ambientes e a organização da Novo Lar, planejados para oferecer segurança, acessibilidade e acolhimento em todas as fases do envelhecimento. Aqui, a estrutura faz parte do cuidado, promovendo bem-estar ao residente e tranquilidade à família todos os dias.',
  estiloTitulo,
  estiloDescricao,
  estilo,
}: EstruturaFigmaHeroProps) {
  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] flex justify-center z-0 border-b border-gray-200"
      style={styleBloco(estilo)}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#F8F9FA]/90 to-[#E9ECEF]/95 lg:from-[#F8F9FA]/80 lg:to-[#E9ECEF]/90" />

      <div
        className="absolute inset-0 z-0 mix-blend-soft-light opacity-15 bg-center bg-cover"
        style={{ backgroundImage: 'url(/placeholders/pattern-overlay.png)' }}
      />

      <section className="relative z-10 flex flex-col items-center w-full px-4 py-16 sm:px-8 md:py-20 lg:py-24 max-w-[1440px]">
        <div className="flex flex-col items-center justify-center w-full max-w-[800px] text-center gap-6 lg:gap-8">
          <div className="inline-flex items-center px-4 py-2 gap-2 bg-[#2C3E6B]/10 rounded-full">
            <span className="font-bold text-[10px] md:text-sm tracking-[1.5px] md:tracking-[3px] uppercase text-[#2C3E6B]/80 text-center whitespace-nowrap">
              {eyebrow}
            </span>
          </div>

          <h1
            className={cx('font-bold text-4xl md:text-5xl lg:text-[56px] lg:leading-[64px] text-[#2C3E6B]', classeTexto(estiloTitulo))}
            style={estiloDeTexto(estiloTitulo)}
          >
            {title}
          </h1>

          <p
            className={cx('font-normal text-lg md:text-xl lg:text-[20px] lg:leading-[28px] text-[#2C3E6B]/80', classeTexto(estiloDescricao))}
            style={estiloDeTexto(estiloDescricao)}
          >
            {description}
          </p>
        </div>
      </section>
    </div>
  )
}
