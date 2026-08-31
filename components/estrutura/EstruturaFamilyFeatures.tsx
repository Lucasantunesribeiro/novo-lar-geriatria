'use client'

import { Users, Heart, CheckCircle2, Building } from 'lucide-react'

import { icone } from '@/components/cms/icones'
import { cx, classeTexto, estiloDeTexto, styleBloco } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'

export const TITULO_PADRAO = 'Estrutura que acolhe famílias inteiras'
export const DESCRICAO_PADRAO =
  'A combinação entre ambiente planejado, equipe próxima e rotinas humanizadas garante tranquilidade para o idoso e para quem acompanha de perto.'

/** Os quatro cartoes que estao no ar hoje. */
const CARTOES_PADRAO = [
  {
    icon: Users,
    title: 'Equipe multidisciplinar',
    description:
      'Médicos, enfermeiros, nutricionistas, terapeutas ocupacionais, musicoterapeutas e cuidadores atuando de forma integrada.',
  },
  {
    icon: Heart,
    title: 'Rotinas acolhedoras',
    description:
      'Programações que estimulam autonomia, socialização e bem-estar emocional em um ambiente familiar e seguro.',
  },
  {
    icon: CheckCircle2,
    title: 'Planos personalizados',
    description:
      'Planos de cuidados construídos com cada família, respeitando históricos clínicos, preferências e objetivos individuais.',
  },
  {
    icon: Building,
    title: 'Estruturas completas',
    description:
      'Unidades com acessibilidade total, salas de convivência, elevadores e espaços terapêuticos preparados para diferentes perfis.',
  },
]

interface EstruturaFamilyFeaturesProps {
  titulo?: string
  descricao?: string
  cartoes?: Array<{ icone?: string; titulo?: string; descricao?: string }>
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export default function EstruturaFamilyFeatures({
  titulo = TITULO_PADRAO,
  descricao = DESCRICAO_PADRAO,
  cartoes,
  estiloTitulo,
  estiloDescricao,
  estilo,
}: EstruturaFamilyFeaturesProps = {}) {
  const itens =
    cartoes && cartoes.length > 0
      ? cartoes.map((cartao, i) => ({
          icon: icone(cartao.icone, CARTOES_PADRAO[i]?.icon || Users),
          title: cartao.titulo || CARTOES_PADRAO[i]?.title || '',
          description: cartao.descricao || CARTOES_PADRAO[i]?.description || '',
        }))
      : CARTOES_PADRAO

  return (
    <section className="py-20 px-8 md:px-24 lg:px-36" style={styleBloco(estilo)}>
      <div className="max-w-[1156px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <h2
            className={cx('text-[#2C3E6B] font-bold text-4xl md:text-5xl leading-tight', classeTexto(estiloTitulo))}
            style={estiloDeTexto(estiloTitulo)}
          >
            {titulo}
          </h2>

          <p
            className={cx('text-[#4A5565] text-lg leading-relaxed max-w-[1150px]', classeTexto(estiloDescricao))}
            style={estiloDeTexto(estiloDescricao)}
          >
            {descricao}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {itens.map((item, index) => {
            const Icone = item.icon

            return (
              <div
                key={index}
                className="flex flex-col p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-xl mb-6">
                  <Icone className="w-6 h-6 text-[#2E7B7F]" />
                </div>

                <h3 className="text-[#2C3E6B] font-bold text-lg leading-7 mb-4">
                  {item.title}
                </h3>

                <p className="text-[#4A5565] text-sm leading-5">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
