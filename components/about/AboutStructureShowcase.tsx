import { cx, classeTexto, estiloDeTexto, styleBloco } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'
import type { ImagemBloco } from '@/types/cms-blocos'

export const TITULO_PADRAO = 'Cuidar de pessoas sempre foi a nossa essência'
export const DESCRICAO_PADRAO =
  'Escolher um lar para um pai ou uma mãe é uma das decisões mais sensíveis que uma família pode enfrentar. Envolve amor, responsabilidade e, acima de tudo, confiança. A Novo Lar Geriatria nasceu com um propósito claro: oferecer cuidado humano, seguro e especializado para idosos, respeitando histórias de vida, individualidades e necessidades específicas de cada residente.'

interface AboutStructureShowcaseProps {
  titulo?: string
  descricao?: string
  imagem1?: ImagemBloco
  imagem2?: ImagemBloco
  imagem3?: ImagemBloco
  imagem4?: ImagemBloco
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

/**
 * Uma das quatro fotos da grade, com a altura fixa que ela ja tinha.
 *
 * Atencao ao historico: o codigo original declarava `backgroundImage` e logo
 * abaixo `background` (atalho), que apaga o anterior — ou seja, no site no ar
 * essas quatro caixas mostram apenas o degrade cinza, nunca as fotos de
 * /nossos-servicos. Mantemos esse visual quando nada foi definido no Studio, e
 * so trocamos pelo arquivo real quando o cliente sobe uma imagem — senao o
 * campo de imagem seria um botao que nao faz nada.
 */
function Foto({
  imagem,
  padrao,
  classeAltura,
}: {
  imagem?: ImagemBloco
  padrao: string
  classeAltura: string
}) {
  const temImagemDoCliente = Boolean(imagem?.url)

  return (
    <div
      className={`w-full ${classeAltura} rounded-2xl shadow-xl overflow-hidden bg-gray-200`}
    >
      <div
        className="w-full h-full bg-cover bg-center"
        role={imagem?.alt ? 'img' : undefined}
        aria-label={imagem?.alt || undefined}
        style={{
          // Sem imagem no Studio, repetimos exatamente o que o site ja fazia:
          // declarar backgroundImage e logo depois o atalho `background`, que
          // vence — por isso essas caixas aparecem como degrade cinza.
          // Com imagem do cliente, so o backgroundImage entra, e ela aparece.
          ...(temImagemDoCliente
            ? { backgroundImage: `url('${imagem?.url}')` }
            : {
                backgroundImage: `url('${padrao}')`,
                background:
                  'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 50%, #D1D5DB 100%)',
              }),
          ...(imagem?.estilo?.arredondamento
            ? { borderRadius: `${imagem.estilo.arredondamento}px` }
            : {}),
        }}
      />
    </div>
  )
}

export default function AboutStructureShowcase({
  titulo = TITULO_PADRAO,
  descricao = DESCRICAO_PADRAO,
  imagem1,
  imagem2,
  imagem3,
  imagem4,
  estiloTitulo,
  estiloDescricao,
  estilo,
}: AboutStructureShowcaseProps = {}) {
  return (
    <div
      className="about-structure"
      style={{
        width: '100%',
        background:
          'linear-gradient(135deg, rgba(13, 26, 54, 0.95) 0%, rgba(29, 51, 100, 0.9) 50%, rgba(46, 123, 127, 0.85) 100%)',
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
        {/* Grid de Imagens */}
        <div
          className="flex flex-row gap-[16px] w-[312px] h-[300px]"
          style={{
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          <div className="flex flex-col gap-[16px] w-[148px]">
            <Foto imagem={imagem1} padrao="/nossos-servicos/1.jpg" classeAltura="h-[89px]" />
            <Foto imagem={imagem2} padrao="/nossos-servicos/2.jpg" classeAltura="h-[195px]" />
          </div>

          <div className="flex flex-col gap-[16px] w-[148px]">
            <Foto imagem={imagem3} padrao="/nossos-servicos/3.jpg" classeAltura="h-[189px]" />
            <Foto imagem={imagem4} padrao="/nossos-servicos/4.jpg" classeAltura="h-[95px]" />
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
              boxShadow:
                '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(4px)',
              borderRadius: '24px',
            }}
          >
            <h2
              className={cx('text-2xl lg:text-[32px]', classeTexto(estiloTitulo))}
              style={{
                fontFamily: 'Arial',
                fontWeight: 700,
                lineHeight: '1.2',
                letterSpacing: '-1.2px',
                color: '#FFFFFF',
                margin: 0,
                ...estiloDeTexto(estiloTitulo),
              }}
            >
              {titulo}
            </h2>

            <p
              className={cx('text-sm lg:text-[14px]', classeTexto(estiloDescricao))}
              style={{
                fontFamily: 'Arial',
                fontWeight: 400,
                lineHeight: '1.8',
                color: 'rgba(255, 255, 255, 0.8)',
                margin: 0,
                ...estiloDeTexto(estiloDescricao),
              }}
            >
              {descricao}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
