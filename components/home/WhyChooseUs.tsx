import Image from "next/image";
import { MessageCircleHeart, UsersRound } from "lucide-react";
import type { PortableTextBlock } from '@portabletext/types'

import TextoRicoNoParagrafo from '@/components/cms/TextoRicoNoParagrafo'

import { cx, classeTexto, estiloDeTexto, styleBloco } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'

export const TITULO_PADRAO = 'Por que escolher a Novo Lar?'

interface WhyChooseUsProps {
  titulo?: string
  descricaoRica?: PortableTextBlock[]
  beneficios?: Array<{ titulo?: string; descricao?: string }>
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export default function WhyChooseUs({
  titulo = TITULO_PADRAO,
  descricaoRica,
  beneficios,
  estiloTitulo,
  estiloDescricao,
  estilo,
}: WhyChooseUsProps = {}) {
  const benefitsPadrao = [
    { 
      title: 'Cuidado humanizado', 
      description: 'Atenção individual e respeito à história de cada residente', 
      icon: '/icons/hero-page/enfermeira.png',
      width: 54,
      height: 59
    },
    { 
      title: 'Equipe multidisciplinar 24h', 
      description: 'Médicos, enfermagem e terapeutas sempre presentes', 
      icon: '/icons/hero-page/horario.png',
      width: 70,
      height: 59
    },
    { 
      title: 'Estrutura acolhedora e segura', 
      description: 'Ambientes adaptados, confortáveis e acessíveis', 
      icon: '/icons/hero-page/casa.png',
      width: 67,
      height: 59
    },
    { 
      title: 'Rotina ativa e terapêutica', 
      description: 'Estímulo físico, cognitivo e emocional', 
      icon: '/icons/hero-page/academia.png',
      width: 69,
      height: 59
    },
    { 
      title: 'Alimentação saudável e balanceada', 
      description: 'Comida prazerosa, afetiva e adaptada a dietas restritivas.', 
      icon: '/icons/hero-page/prato.png',
      width: 81,
      height: 59
    },
    { 
      title: 'Comunicação Estruturada com a Família', 
      description: 'Boletins, retorno proativo, fotos autorizadas, atualização de intercorrências, canais de contato, e muito mais.', 
      lucideIcon: MessageCircleHeart,
    },
    { 
      title: 'Combate ao Isolamento Social', 
      description: 'Buscamos promover a redução do sentimento de solidão estimulando a interação entre os residentes e familiares.', 
      lucideIcon: UsersRound,
    },
  ]

  const benefits =
    beneficios && beneficios.length > 0
      ? beneficios.map((beneficio, i) => ({
          ...benefitsPadrao[i],
          title: beneficio.titulo || benefitsPadrao[i]?.title || '',
          description: beneficio.descricao || benefitsPadrao[i]?.description || '',
        }))
      : benefitsPadrao

  return (
    <section
      className="flex w-full flex-col items-center px-5 py-12 lg:px-[130px] lg:py-[80px]"
      style={{
        background: 'linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)',
        ...styleBloco(estilo),
      }}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-10 lg:gap-[64px]">
        {/* Container Header */}
        <div className="flex w-full max-w-[1156px] flex-col items-center gap-4">
          <h2
            className={cx('text-center font-bold text-[#2C3E6B] text-[32px] leading-[40px] lg:text-[48px] lg:leading-[48px]', classeTexto(estiloTitulo))}
            style={{ fontFamily: 'Arial', ...estiloDeTexto(estiloTitulo) }}
          >
            {titulo}
          </h2>

          <p
            className={cx('w-full max-w-[990px] text-center text-[#4A5565]', classeTexto(estiloDescricao))}
            style={{
              fontFamily: 'Arial',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '28px',
              ...estiloDeTexto(estiloDescricao),
            }}
          >
            {descricaoRica && descricaoRica.length > 0 ? (
              <TextoRicoNoParagrafo value={descricaoRica} />
            ) : (
              <>
                Escolher um residencial para um pai ou uma mãe é uma decisão delicada que envolve <strong>confiança, responsabilidade e o cuidado</strong> com cada detalhe.<br className="hidden lg:block" />
                Na Novo Lar, unimos experiência, cuidado humano e estrutura especializada para que <strong>sua família tenha tranquilidade todos os dias</strong>, sabendo que quem você ama está bem cuidado.
              </>
            )}
          </p>
        </div>

        {/* Content Layout - Cards 2 Columns */}
        <div className="grid w-full max-w-[1020px] grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex w-full items-center gap-4 rounded-[16px] border border-[#E5E7EB] bg-white px-6 py-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] ${
                index === benefits.length - 1 && benefits.length % 2 !== 0 ? 'lg:col-span-2 lg:w-[487px] lg:mx-auto' : ''
              }`}
              style={{ minHeight: '93px' }}
            >
              <div
                className="flex shrink-0 items-center justify-center"
                style={{ width: '81px' }}
              >
                {benefit.icon ? (
                  <Image 
                    src={benefit.icon} 
                    alt={benefit.title} 
                    width={benefit.width} 
                    height={benefit.height}
                    className="object-contain"
                  />
                ) : benefit.lucideIcon && (
                  <benefit.lucideIcon size={46} color="#2C3E6B" strokeWidth={1.5} />
                )}
              </div>
              
              <div className="flex flex-col items-start gap-1">
                <h3
                  className="font-bold text-[#2C3E6B]"
                  style={{
                    fontFamily: 'Arial',
                    fontSize: '18px',
                    lineHeight: '20px',
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-[#4A5565]"
                  style={{
                    fontFamily: 'Arial',
                    fontSize: '14px',
                    lineHeight: '20px',
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
