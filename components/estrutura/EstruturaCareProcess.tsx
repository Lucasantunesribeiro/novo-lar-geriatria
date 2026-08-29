'use client'

import { ClipboardList, Users, Heart, MessageCircle } from 'lucide-react'

import { icone } from '@/components/cms/icones'
import { cx, classeTexto, estiloDeTexto, styleBloco } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'

export const ETIQUETA_PADRAO = 'Como cuidamos'
export const TITULO_PADRAO = 'Processo acolhedor do primeiro contato ao dia a dia'
export const DESCRICAO_PADRAO =
  'Transparência e proximidade com a família em todas as etapas. Nossa metodologia foi desenhada para garantir transições suaves e acompanhamento frequente.'

/** As quatro etapas que estao no ar hoje. */
const ETAPAS_PADRAO = [
  {
    icon: ClipboardList,
    title: 'Avaliação completa',
    description:
      'Reunião inicial com família e residente para entender histórico de saúde, preferências, expectativas e necessidades específicas.',
  },
  {
    icon: Users,
    title: 'Plano individualizado',
    description:
      'Construção conjunta do plano de cuidados com definição de terapias, alimentação, acompanhamento médico e rotinas personalizadas.',
  },
  {
    icon: Heart,
    title: 'Cuidado multidisciplinar',
    description:
      'Equipe de enfermagem 24h, médico geriatra, terapeuta ocupacional, nutricionista e musicoterapeuta atuando em sincronia.',
  },
  {
    icon: MessageCircle,
    title: 'Acompanhamento e diálogo',
    description:
      'Monitoramento contínuo com atualizações à família, ajustes de protocolos e acolhimento para dúvidas a qualquer momento.',
  },
]

interface EstruturaCareProcessProps {
  etiqueta?: string
  titulo?: string
  descricao?: string
  cartoes?: Array<{ icone?: string; titulo?: string; descricao?: string }>
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export default function EstruturaCareProcess({
  etiqueta = ETIQUETA_PADRAO,
  titulo = TITULO_PADRAO,
  descricao = DESCRICAO_PADRAO,
  cartoes,
  estiloTitulo,
  estiloDescricao,
  estilo,
}: EstruturaCareProcessProps = {}) {
  const etapas =
    cartoes && cartoes.length > 0
      ? cartoes.map((cartao, i) => ({
          icon: icone(cartao.icone, ETAPAS_PADRAO[i]?.icon || ClipboardList),
          title: cartao.titulo || ETAPAS_PADRAO[i]?.title || '',
          description: cartao.descricao || ETAPAS_PADRAO[i]?.description || '',
        }))
      : ETAPAS_PADRAO

  return (
    <section
      className="py-20 px-8 md:px-24 lg:px-36"
      style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 50%, #FFFFFF 100%)',
        ...styleBloco(estilo),
      }}
    >
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <div className="flex items-center px-4 py-2 gap-2 bg-[#2C3E6B]/10 rounded-full">
            <ClipboardList className="w-4 h-4 text-[#2C3E6B]" />
            <span className="text-[#2C3E6B] font-bold text-xs tracking-[3.6px] uppercase">
              {etiqueta}
            </span>
          </div>

          <h2
            className={cx('text-[#2C3E6B] font-bold text-4xl md:text-5xl leading-tight max-w-[655px]', classeTexto(estiloTitulo))}
            style={estiloDeTexto(estiloTitulo)}
          >
            {titulo}
          </h2>

          <p
            className={cx('text-[#4A5565] text-lg leading-relaxed max-w-[672px]', classeTexto(estiloDescricao))}
            style={estiloDeTexto(estiloDescricao)}
          >
            {descricao}
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {etapas.map((etapa, index) => {
            const Icone = etapa.icon

            return (
              <div
                key={index}
                className="flex flex-col p-8 bg-white rounded-3xl border border-[#E5E7EB] shadow-sm"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-2xl mb-6">
                  <Icone className="w-6 h-6 text-[#2E7B7F]" />
                </div>

                <h3 className="text-[#2C3E6B] font-bold text-xl leading-7 mb-4">
                  {etapa.title}
                </h3>

                <p className="text-[#4A5565] text-sm leading-5">{etapa.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
