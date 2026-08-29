import Image from 'next/image'

import { cx, classeTexto, estiloDeTexto, styleBloco, styleImagem } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'
import type { ImagemBloco } from '@/types/cms-blocos'

export const TITULO_PADRAO = 'Mais de três décadas de experiência em cuidado geriátrico'
export const DESCRICAO_PADRAO =
  'Com mais de 30 anos de atuação em Porto Alegre, a Novo Lar construiu uma trajetória baseada em ética, profissionalismo e dedicação contínua ao cuidado com a pessoa idosa. Ao longo desse tempo, acompanhamos de perto as transformações do envelhecimento, da medicina e das necessidades das famílias, evoluindo constantemente nossos processos, estrutura e equipe para oferecer um atendimento cada vez mais completo. Hoje, somos referência em hospedagem assistida, cuidados especializados, reabilitação e cuidados paliativos, atendendo idosos com diferentes graus de dependência.'

interface AboutExperienceSectionProps {
  titulo?: string
  descricao?: string
  mostrarEstrelas?: boolean
  cartoes?: Array<{ titulo?: string; descricao?: string }>
  imagem1?: ImagemBloco
  imagem2?: ImagemBloco
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export default function AboutExperienceSection({
  titulo = TITULO_PADRAO,
  descricao = DESCRICAO_PADRAO,
  mostrarEstrelas = true,
  cartoes,
  imagem1,
  imagem2,
  estiloTitulo,
  estiloDescricao,
  estilo,
}: AboutExperienceSectionProps = {}) {
  const cardsPadrao = [
    { title: 'Cuidado humanizado', desc: 'Atenção individual e respeito à história de cada residente' },
    { title: 'Equipe multidisciplinar 24h', desc: 'Médicos, enfermagem e terapeutas sempre presentes' },
    { title: 'Estrutura acolhedora e segura', desc: 'Ambientes adaptados, confortáveis e acessíveis' },
    { title: 'Rotina ativa e terapêutica', desc: 'Estímulo físico, cognitivo e emocional' },
    { title: 'Alimentação saudável e balanceada', desc: 'Planos nutricionais individualizados' },
  ]

  const cards =
    cartoes && cartoes.length > 0
      ? cartoes.map((cartao, i) => ({
          title: cartao.titulo || cardsPadrao[i]?.title || '',
          desc: cartao.descricao || cardsPadrao[i]?.desc || '',
        }))
      : cardsPadrao

  return (
    <div
      className="w-full bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] flex justify-center py-16 lg:py-[120px] px-4 sm:px-8"
      style={styleBloco(estilo)}
    >
      <section className="flex flex-col items-center w-full max-w-[1180px] gap-16 lg:gap-32">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-6 text-center w-full max-w-[1156px] mx-auto">
          {/* Stars */}
          {mostrarEstrelas && (
          <div className="flex justify-center items-center gap-2 w-full mx-auto">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0L21.96 12.6H35.28L24.48 20.52L28.44 32.76L18 25.2L7.56 32.76L11.52 20.52L0.72 12.6H14.04L18 0Z" fill="#FFC800"/>
              </svg>
            ))}
          </div>
          )}

          <h2
            className={cx('text-[#2C3E6B] font-bold text-3xl md:text-4xl lg:text-[48px] lg:leading-[48px] m-0 mx-auto max-w-[1156px]', classeTexto(estiloTitulo))}
            style={estiloDeTexto(estiloTitulo)}
          >
            {titulo}
          </h2>
        </div>

        {/* First Row: View 1 (Image left, Text right) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center w-full gap-8 lg:gap-[54px] justify-center">
          <div className="relative w-full aspect-square max-w-[454px] rounded-2xl overflow-hidden shrink-0 shadow-lg">
            <Image
              src={imagem1?.url || '/sobre-decadas/1.jpg'}
              alt={imagem1?.alt || 'Experiência em cuidado geriátrico'}
              fill
              className="object-cover scale-x-[-1]"
              style={styleImagem(imagem1?.estilo)}
            />
          </div>
          <p
            className={cx('text-[#4A5565] text-lg lg:text-[20px] leading-relaxed m-0 text-center lg:text-left max-w-full lg:max-w-[449px]', classeTexto(estiloDescricao))}
            style={estiloDeTexto(estiloDescricao)}
          >
            {descricao}
          </p>
        </div>

        {/* Second Row: View 2 (Cards left, Image right) */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center w-full gap-8 lg:gap-[54px] justify-center lg:justify-between max-w-[922px]">
          <div className="flex flex-col gap-4 w-full max-w-[406px] shrink-0">
            {cards.map((card, index) => (
              <div 
                key={index}
                className="flex flex-col p-4 px-6 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-[#2C3E6B] font-bold text-lg leading-tight m-0 mb-1">{card.title}</h3>
                <p className="text-[#4A5565] text-sm leading-tight m-0">{card.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="relative w-full aspect-square max-w-[462px] rounded-2xl overflow-hidden shrink-0 shadow-lg">
            <Image
              src={imagem2?.url || '/sobre-decadas/2.jpg'}
              alt={imagem2?.alt || 'Nossa estrutura'}
              fill
              className="object-cover"
              style={styleImagem(imagem2?.estilo)}
            />
          </div>
        </div>

      </section>
    </div>
  )
}
