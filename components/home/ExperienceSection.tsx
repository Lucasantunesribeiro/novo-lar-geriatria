import { cx, classeTexto, estiloDeTexto, styleBloco } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'

export const ETIQUETA_PADRAO =
  'Cuidado especializado com mais de 30 anos de experiência'
export const TITULO_PADRAO = 'Experiência e Confiança'
export const PARAGRAFO1_PADRAO =
  'A Novo Lar nasceu da vontade de oferecer um lar verdadeiramente acolhedor para idosos que precisam de cuidados especializados. Com mais de três décadas de experiência, construímos unidades que combinam infraestrutura moderna, equipe multidisciplinar e um olhar humanizado sobre o envelhecimento.'
export const PARAGRAFO2_PADRAO =
  'Cada residente é acompanhado de forma individualizada, com rotina personalizada e atenção constante. A família participa ativamente e tem acesso transparente a tudo que acontece no dia a dia. Aqui, o cuidado vai além do técnico — é sobre respeito, dignidade e qualidade de vida.'

interface ExperienceSectionProps {
  etiqueta?: string
  titulo?: string
  paragrafo1?: string
  paragrafo2?: string
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export default function ExperienceSection({
  etiqueta = ETIQUETA_PADRAO,
  titulo = TITULO_PADRAO,
  paragrafo1 = PARAGRAFO1_PADRAO,
  paragrafo2 = PARAGRAFO2_PADRAO,
  estiloTitulo,
  estiloDescricao,
  estilo,
}: ExperienceSectionProps = {}) {
  return (
    <section
      className="flex flex-col items-start lg:items-end px-5 py-10 lg:px-[208px] lg:py-[80px]"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
        width: '100%',
        ...styleBloco(estilo),
      }}
    >
      <div
        className="flex flex-col items-start gap-5 lg:gap-[24px] w-full lg:w-auto"
        style={{
          maxWidth: '522px',
        }}
      >
        {/* Badge */}
        <span
          className="text-xs lg:text-[14px]"
          style={{
            fontFamily: 'Arial',
            fontWeight: 700,
            lineHeight: '1.4',
            letterSpacing: '0.7px',
            textTransform: 'uppercase',
            color: '#D4A853',
          }}
        >
          {etiqueta}
        </span>

        {/* Heading */}
        <h2
          className={cx('text-3xl lg:text-[36px]', classeTexto(estiloTitulo))}
          style={{
            fontFamily: 'Arial',
            fontWeight: 700,
            lineHeight: '1.1',
            color: '#2C3E6B',
            ...estiloDeTexto(estiloTitulo),
          }}
        >
          {titulo}
        </h2>

        {/* Texto Institucional */}
        <p
          className={cx('text-base lg:text-[18px]', classeTexto(estiloDescricao))}
          style={{
            fontFamily: 'Arial',
            fontWeight: 400,
            lineHeight: '1.6',
            color: '#364153',
            ...estiloDeTexto(estiloDescricao),
          }}
        >
          {paragrafo1}
        </p>

        <p
          className={cx('text-base lg:text-[18px]', classeTexto(estiloDescricao))}
          style={{
            fontFamily: 'Arial',
            fontWeight: 400,
            lineHeight: '1.6',
            color: '#364153',
            ...estiloDeTexto(estiloDescricao),
          }}
        >
          {paragrafo2}
        </p>
      </div>
    </section>
  )
}
