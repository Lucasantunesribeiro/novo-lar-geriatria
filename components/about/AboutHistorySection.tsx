import { Heart } from 'lucide-react'

import { cx, classeTexto, estiloDeTexto, styleBloco } from '@/lib/cms/estilo'
import type { PaginaHistoria } from '@/types/cms-blocos'

/**
 * "Nossa história" — os quatro paragrafos da fundacao mais os quatro numeros
 * ao lado.
 *
 * Veio da pagina /sobre/a-novo-lar, que foi mesclada em /sobre a pedido do
 * cliente ("no rodape, o Sobre a Novo Lar tem que ser a mesma coisa que Sobre
 * Nos"). O desenho e o mesmo de la, linha por linha: o que muda e que agora e
 * um bloco que a /sobre sabe montar, em vez de layout preso numa pagina so.
 *
 * Nada aqui estava dito em /sobre: nem o ano de 1994, nem os 40 anos dos
 * socios, nem os nomes dos bairros. Por isso o texto veio inteiro.
 */
const PARAGRAFOS_PADRAO = [
  'A NOVO LAR — Hospedagem Assistida com Qualidade®, empresa gaúcha fundada em 1994, foi idealizada para proporcionar conforto, tranquilidade e a melhor qualidade de vida na 3ª idade. Nasceu da visão empreendedora de seus sócios, cuja experiência técnica e administrativa de mais de 40 anos na área da saúde e hospitalar garante seriedade e transparência.',
  'Nosso compromisso é dar suporte integral ao idoso e sua família com carinho e respeito. Combinamos hotelaria com assistência médica e de enfermagem 24 horas por dia, funcionando como clínica geriátrica e casa de repouso com equipe multidisciplinar dedicada e experiente.',
  'Na geriatria Novo Lar você encontra hospedagem permanente ou temporária em Porto Alegre. Cada unidade conta com estrutura completa e profissionais focados no atendimento integral ao idoso e suas necessidades, para que o conforto e o bem-estar estejam sempre presentes.',
  "Atualmente, a NOVO LAR — Hospedagem Assistida com Qualidade® dispõe de três estabelecimentos em Porto Alegre, situados nos bairros Moinhos de Vento e Passo d'Areia, integrados ao cotidiano da cidade e próximos aos principais serviços de saúde.",
]

const DESTAQUES_PADRAO = [
  {
    value: '1994',
    label: 'Ano de fundação',
    description: 'Tradição gaúcha em cuidado especializado para idosos.',
  },
  {
    value: '3',
    label: 'Unidades em Porto Alegre',
    description: "Estrutura presencial nos bairros Moinhos de Vento e Passo d'Areia.",
  },
  {
    value: '40+',
    label: 'Anos de experiência',
    description: 'Direção com vivência em gestão hospitalar e assistência à saúde.',
  },
  {
    value: '24h',
    label: 'Suporte de enfermagem',
    description: 'Cuidado integral e monitoramento contínuo para residentes e famílias.',
  },
]

export default function AboutHistorySection(props: PaginaHistoria = {} as PaginaHistoria) {
  const paragrafos =
    props.paragrafos && props.paragrafos.length > 0 ? props.paragrafos : PARAGRAFOS_PADRAO

  const destaques =
    props.destaques && props.destaques.length > 0
      ? props.destaques.map((destaque, i) => ({
          value: destaque.value || DESTAQUES_PADRAO[i]?.value || '',
          label: destaque.label || DESTAQUES_PADRAO[i]?.label || '',
          description: destaque.description || DESTAQUES_PADRAO[i]?.description || '',
        }))
      : DESTAQUES_PADRAO

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white"
      style={styleBloco(props.estilo)}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5 sm:space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7B7F] uppercase tracking-wider">
              <Heart className="h-4 w-4" />
              {props.etiqueta || 'Nossa história'}
            </div>
            {paragrafos.map((paragrafo, i) => (
              <p
                key={i}
                className={cx('text-gray-700', classeTexto(props.estiloDescricao))}
                style={estiloDeTexto(props.estiloDescricao)}
              >
                {paragrafo}
              </p>
            ))}
          </div>

          <div className="grid gap-3 sm:gap-4">
            {destaques.map((item, i) => (
              <div
                key={`${item.label}-${i}`}
                className="group rounded-xl border border-[#2E7B7F]/20 bg-gradient-to-br from-[#2E7B7F]/5 to-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#2C3E6B] group-hover:text-[#2E7B7F] transition-colors">
                  {item.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2E7B7F]">
                  {item.label}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-snug">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
