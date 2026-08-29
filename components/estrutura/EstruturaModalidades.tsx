'use client'

import { Home, Calendar, HeartPulse, CheckCircle2 } from 'lucide-react'

import { icone } from '@/components/cms/icones'
import { cx, classeTexto, estiloDeTexto, styleBloco } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'

export const ETIQUETA_PADRAO = 'Modalidades disponíveis'
export const TITULO_PADRAO = 'Cuidado que acompanha cada fase da família'
export const DESCRICAO_PADRAO =
  'Escolha a modalidade que mais combina com a sua necessidade e conte com nossas equipes para garantir conforto, segurança e autonomia na rotina do idoso.'

/** As tres modalidades como estao no ar hoje. */
const MODALIDADES_PADRAO = [
  {
    icon: Home,
    titulo: 'Hospedagem permanente',
    descricao:
      'Acolhimento contínuo com acompanhamento 24h da equipe de enfermagem, médico geriatra e profissionais de apoio. Ideal para quem busca rotina estável, estímulos diários e convivência em um ambiente seguro.',
    itens: [
      'Planos personalizados que respeitam preferências e histórico clínico',
      'Rotinas com terapias, alimentação supervisionada e estímulos cognitivos',
      'Ambientes aconchegantes que acolhem residentes com diferentes níveis de dependência',
    ],
  },
  {
    icon: Calendar,
    titulo: 'Hospedagem temporária',
    descricao:
      'Períodos flexíveis para famílias que precisam de suporte em viagens, férias ou diante de mudanças na rotina. A equipe garante continuidade dos cuidados e integração com o plano já adotado pelos familiares.',
    itens: [
      'Estadas planejadas com acompanhamento médico e de enfermagem integral',
      'Atividades diárias que estimulam autonomia e socialização',
      'Transição tranquila entre o lar e a clínica, com orientação à família',
    ],
  },
  {
    icon: HeartPulse,
    titulo: 'Cuidados pós-operatórios e reabilitação',
    descricao:
      'Assistência especializada para alta hospitalar, reabilitação de traumas e recuperação funcional. A equipe multidisciplinar acompanha cada etapa para acelerar a retomada das atividades com segurança.',
    itens: [
      'Monitoramento clínico, administração de medicamentos e curativos',
      'Apoio de fisioterapia, terapia ocupacional e musicoterapia conforme indicação',
      'Adequação de cardápio e rotina conforme orientações médicas',
    ],
  },
]

interface EstruturaModalidadesProps {
  etiqueta?: string
  titulo?: string
  descricao?: string
  modalidades?: Array<{
    icone?: string
    titulo?: string
    descricao?: string
    itens?: string[]
  }>
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export default function EstruturaModalidades({
  etiqueta = ETIQUETA_PADRAO,
  titulo = TITULO_PADRAO,
  descricao = DESCRICAO_PADRAO,
  modalidades,
  estiloTitulo,
  estiloDescricao,
  estilo,
}: EstruturaModalidadesProps = {}) {
  const cards =
    modalidades && modalidades.length > 0
      ? modalidades.map((modalidade, i) => ({
          icon: icone(modalidade.icone, MODALIDADES_PADRAO[i]?.icon || Home),
          titulo: modalidade.titulo || MODALIDADES_PADRAO[i]?.titulo || '',
          descricao: modalidade.descricao || MODALIDADES_PADRAO[i]?.descricao || '',
          itens:
            modalidade.itens && modalidade.itens.length > 0
              ? modalidade.itens
              : MODALIDADES_PADRAO[i]?.itens || [],
        }))
      : MODALIDADES_PADRAO

  return (
    <section className="w-full py-20 px-4 sm:px-8 bg-[#F9FAFB]" style={styleBloco(estilo)}>
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <div className="flex items-center px-4 py-2 gap-2 bg-[#2E7B7F]/10 rounded-full">
            <Home className="w-4 h-4 text-[#2C3E6B]" />
            <span className="text-[#2C3E6B] font-bold text-xs tracking-[3.6px] uppercase">
              {etiqueta}
            </span>
          </div>

          <h2
            className={cx('text-[#2C3E6B] font-bold text-4xl md:text-5xl leading-tight max-w-[695px]', classeTexto(estiloTitulo))}
            style={estiloDeTexto(estiloTitulo)}
          >
            {titulo}
          </h2>

          <p
            className={cx('text-[#4A5565] text-lg leading-relaxed max-w-[757px]', classeTexto(estiloDescricao))}
            style={estiloDeTexto(estiloDescricao)}
          >
            {descricao}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icone = card.icon

            return (
              <div
                key={index}
                className="flex flex-col p-8 bg-white rounded-3xl border shadow-sm"
                style={{ borderColor: 'rgba(46, 123, 127, 0.15)' }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-2xl mb-6">
                  <Icone className="w-6 h-6 text-[#2E7B7F]" />
                </div>

                <h3 className="text-[#2C3E6B] font-bold text-2xl leading-8 mb-4">
                  {card.titulo}
                </h3>

                <p className="text-[#4A5565] text-base leading-6 mb-6">{card.descricao}</p>

                <div className="flex flex-col gap-3">
                  {card.itens.map((item, i) => (
                    <div key={i} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-1" />
                      <p className="text-[#4A5565] text-sm leading-5">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
