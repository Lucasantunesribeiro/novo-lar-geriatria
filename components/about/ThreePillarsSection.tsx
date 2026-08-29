import Image from 'next/image'

import { cx, classeTexto, estiloDeTexto, styleBloco, styleImagem } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'
import type { ImagemBloco } from '@/types/cms-blocos'

export const TITULO_PADRAO = 'Cuidado humanizado, com base técnica sólida'
export const DESCRICAO_PADRAO =
  'Conheça os pilares que fazem da Novo Lar referência em hospedagem assistida, reabilitação para idosos e residentes de alta complexidade.'

type Pilar = {
  titulo?: string
  descricao?: string
  imagem?: ImagemBloco
}

interface ThreePillarsSectionProps {
  titulo?: string
  descricao?: string
  pilares?: Pilar[]
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export default function ThreePillarsSection({
  titulo = TITULO_PADRAO,
  descricao = DESCRICAO_PADRAO,
  pilares,
  estiloTitulo,
  estiloDescricao,
  estilo,
}: ThreePillarsSectionProps = {}) {
  const pillarsPadrao = [
    {
      title: 'Hospedagem acolhedora',
      description: 'Suítes amplas, áreas externas arborizadas e ambientes personalizados para acolher diferentes níveis de dependência.',
      image: '/sobre-cuidado/1.png'
    },
    {
      title: 'Equipe multidisciplinar 24h',
      description: 'Médicos geriatras, enfermeiros, fisioterapeutas, terapeutas ocupacionais e musicoterapeutas atuam em regime integral.',
      image: '/sobre-cuidado/2.png'
    },
    {
      title: 'Famílias próximas',
      description: 'Processos transparentes, visitas guiadas frequentes e acompanhamento das rotinas para deixar a família sempre por perto.',
      image: '/sobre-cuidado/3.png'
    },
  ]

  // O que o cliente cadastrou; senao, os cartoes que ja estao no ar.
  const pillars =
    pilares && pilares.length > 0
      ? pilares.map((pilar, i) => ({
          title: pilar.titulo || pillarsPadrao[i]?.title || '',
          description: pilar.descricao || pillarsPadrao[i]?.description || '',
          image: pilar.imagem?.url || pillarsPadrao[i]?.image || '',
          alt: pilar.imagem?.alt,
          estiloImagem: pilar.imagem?.estilo,
        }))
      : pillarsPadrao.map((pilar) => ({
          title: pilar.title,
          description: pilar.description,
          image: pilar.image,
          alt: undefined as string | undefined,
          estiloImagem: undefined,
        }))

  return (
    <div
      className="w-full bg-white flex justify-center py-16 lg:py-[80px] px-4 sm:px-8"
      style={styleBloco(estilo)}
    >
      <section className="flex flex-col items-center w-full max-w-[1180px] gap-10">
        
        {/* Header Container */}
        <div className="flex flex-col items-start gap-4 w-full max-w-[768px] mx-auto text-center lg:text-left lg:mr-auto lg:ml-0">
          <h2
            className={cx('text-[#1A2745] font-bold text-3xl md:text-4xl lg:text-[36px] lg:leading-[40px] m-0', classeTexto(estiloTitulo))}
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

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1156px] mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col w-full bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image Container */}
              <div className="relative w-full h-[240px] sm:h-[300px] md:h-[220px] lg:h-[192px]">
                <Image
                  src={pillar.image}
                  alt={pillar.alt || pillar.title}
                  fill
                  className="object-cover"
                  style={styleImagem(pillar.estiloImagem)}
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col items-start p-6 flex-grow">
                <h3 className="text-[#1A2745] font-bold text-lg leading-tight mb-3 m-0">
                  {pillar.title}
                </h3>
                <p className="text-[#4A5565] text-sm leading-relaxed m-0">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </section>
    </div>
  )
}
