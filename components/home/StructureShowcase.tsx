import Link from 'next/link'

import { cx, classeTexto, estiloDeTexto, styleBloco } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'
import type { ImagemBloco } from '@/types/cms-blocos'

/**
 * Uma das quatro caixas da grade.
 *
 * Sem foto no Studio, repetimos o que o site ja fazia: declarar
 * `backgroundImage` e logo depois o atalho `background`, que vence — por isso
 * essas caixas aparecem cinzas hoje. Com foto do cliente, a foto entra.
 */
function Foto({ imagem }: { imagem?: ImagemBloco }) {
  const temFoto = Boolean(imagem?.url)

  return (
    <div
      className="w-full h-full bg-cover bg-center"
      role={imagem?.alt ? 'img' : undefined}
      aria-label={imagem?.alt || undefined}
      style={
        temFoto
          ? { backgroundImage: `url('${imagem?.url}')` }
          : {
              backgroundImage: "url('/placeholder-image.jpg')",
              background:
                'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 50%, #D1D5DB 100%)',
            }
      }
    />
  )
}

export const TITULO_PADRAO = 'Veja Nossa Estrutura'
export const DESCRICAO_PADRAO =
  'Ambientes amplos, seguros e preparados para oferecer conforto, acessibilidade e bem-estar no dia a dia. Cada espaço foi pensado para que o residente se sinta em casa e para que a família tenha a tranquilidade de saber que tudo foi cuidadosamente planejado.'
export const BOTAO_PADRAO = 'Conheça nossa estrutura'
export const BOTAO_HREF_PADRAO = '/sobre/estrutura'

interface StructureShowcaseProps {
  imagem1?: ImagemBloco
  imagem2?: ImagemBloco
  imagem3?: ImagemBloco
  imagem4?: ImagemBloco
  titulo?: string
  descricao?: string
  botaoTexto?: string
  botaoHref?: string
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export default function StructureShowcase({
  imagem1,
  imagem2,
  imagem3,
  imagem4,
  titulo = TITULO_PADRAO,
  descricao = DESCRICAO_PADRAO,
  botaoTexto = BOTAO_PADRAO,
  botaoHref = BOTAO_HREF_PADRAO,
  estiloTitulo,
  estiloDescricao,
  estilo,
}: StructureShowcaseProps = {}) {
  return (
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(135deg, rgba(13, 26, 54, 0.95) 0%, rgba(29, 51, 100, 0.9) 50%, rgba(46, 123, 127, 0.85) 100%)',
        ...styleBloco(estilo),
      }}
    >
      <section
        className="flex flex-col lg:flex-row justify-center items-center px-5 py-10 lg:px-[112px] lg:py-[120px] gap-8 lg:gap-[48px]"
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        {/* Group 2 - Grid de Imagens */}
        <div
          className="flex flex-row gap-[16px] w-[312px] h-[300px]"
          style={{
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          {/* Coluna 1 (Esquerda) */}
          <div className="flex flex-col gap-[16px] w-[148px]">
            {/* Área comum - Moinhos de Vento */}
            <div
              className="w-full h-[89px] rounded-2xl shadow-xl overflow-hidden"
              style={{ background: '#E5E7EB' }}
            >
              <Foto imagem={imagem1} />
            </div>

            {/* Sala de estar */}
            <div
              className="w-full h-[195px] rounded-2xl shadow-xl overflow-hidden"
              style={{ background: '#E5E7EB' }}
            >
              <Foto imagem={imagem2} />
            </div>
          </div>

          {/* Coluna 2 (Direita) */}
          <div className="flex flex-col gap-[16px] w-[148px]">
            {/* Área externa - Moinhos de Vento */}
            <div
              className="w-full h-[189px] rounded-2xl shadow-xl overflow-hidden"
              style={{ background: '#E5E7EB' }}
            >
              <Foto imagem={imagem3} />
            </div>

            {/* Recepção - Passo d'Areia */}
            <div
              className="w-full h-[95px] rounded-2xl shadow-xl overflow-hidden"
              style={{ background: '#E5E7EB' }}
            >
              <Foto imagem={imagem4} />
            </div>
          </div>
        </div>

        {/* Card de Informação */}
        <div className="w-full lg:w-auto">
          <div
            className="w-full lg:w-[452px] p-6 lg:p-[32px]"
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(4px)',
              borderRadius: '24px',
            }}
          >
            {/* Veja Nossa Estrutura */}
            <h2
              className={cx('text-2xl lg:text-[32px]', classeTexto(estiloTitulo))}
              style={{
                fontFamily: 'Arial',
                fontWeight: 700,
                lineHeight: '1.2',
                letterSpacing: '-1.2px',
                color: '#FFFFFF',
                ...estiloDeTexto(estiloTitulo),
              }}
            >
              {titulo}
            </h2>

            {/* Texto descritivo */}
            <p
              className={cx('text-sm lg:text-[14px]', classeTexto(estiloDescricao))}
              style={{
                fontFamily: 'Arial',
                fontWeight: 400,
                lineHeight: '1.8',
                color: '#FFFFFF',
                ...estiloDeTexto(estiloDescricao),
              }}
            >
              {descricao}
            </p>

            {/* Botão CTA */}
            <Link
              href={botaoHref}
              className="flex flex-row justify-center items-center w-full lg:w-[350px] transition-all duration-300 hover:bg-white hover:text-[#2C3E6B] hover:shadow-lg active:scale-95 group"
              style={{
                padding: '14px 0px',
                background: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '12px',
                textDecoration: 'none',
              }}
            >
              <span
                className="group-hover:text-[#2C3E6B] transition-colors duration-300"
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                {botaoTexto}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
