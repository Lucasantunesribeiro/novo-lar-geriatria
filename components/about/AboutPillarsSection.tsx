import { CheckCircle2, Eye, Heart, Target } from 'lucide-react'

import { cx, classeTexto, estiloDeTexto, styleBloco } from '@/lib/cms/estilo'
import type { PaginaPilares } from '@/types/cms-blocos'

/**
 * "Nossos pilares" — Missão, Visão e Valores.
 *
 * Veio da pagina /sobre/a-novo-lar, mesclada em /sobre a pedido do cliente.
 * Nao confundir com o bloco "sobreTresPilares" que a /sobre ja tinha: aquele
 * fala de hospedagem, equipe e familias; este e missao, visao e valores. Sao
 * conteudos diferentes, por isso os dois ficam.
 */
const VALORES_PADRAO = [
  'Garantir a satisfação e a confiança de nossos clientes.',
  'Trabalhar com dignidade, transparência e ética.',
  'Manter uma equipe sinérgica com foco em excelência.',
  'Praticar a sustentabilidade social, econômica e ambiental.',
]

export default function AboutPillarsSection(props: PaginaPilares = {} as PaginaPilares) {
  const valores = props.valores && props.valores.length > 0 ? props.valores : VALORES_PADRAO

  return (
    // Mesmo molde das outras secoes de /sobre: faixa inteira que centraliza,
    // e dentro um miolo de 1180px. Antes isto usava `container` do Tailwind,
    // que tem largura propria por tamanho de tela (1536px numa tela de 1920) —
    // a secao ficava mais larga e mais a esquerda que a pagina inteira.
    <div
      className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 flex justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8"
      style={styleBloco(props.estilo)}
    >
      <section className="flex flex-col w-full max-w-[1180px]">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className={cx(
              'text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E6B]',
              classeTexto(props.estiloTitulo)
            )}
            style={estiloDeTexto(props.estiloTitulo)}
          >
            {props.titulo || 'Nossos pilares'}
          </h2>
          <p
            className={cx(
              'mt-3 sm:mt-4 text-base sm:text-lg text-gray-600',
              classeTexto(props.estiloDescricao)
            )}
            style={estiloDeTexto(props.estiloDescricao)}
          >
            {props.descricao || 'Princípios que orientam cada cuidado prestado às famílias'}
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
          <div className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#2E7B7F]/10 text-[#2E7B7F] group-hover:bg-[#2E7B7F] group-hover:text-white transition-colors">
              <Target className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-[#2C3E6B]">
              {props.tituloMissao || 'Missão'}
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              {props.textoMissao ||
                'Garantir e trabalhar com excelência, prestando serviços de assistência de enfermagem 24h aos residentes, oferecendo conforto e tranquilidade também aos familiares.'}
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#D4A853]/10 text-[#D4A853] group-hover:bg-[#D4A853] group-hover:text-white transition-colors">
              <Eye className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-[#2C3E6B]">
              {props.tituloVisao || 'Visão'}
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              {props.textoVisao ||
                'Ser a melhor empresa do segmento e referência pela excelência em serviços de hospedagem assistida para idosos em Porto Alegre e região.'}
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#2C3E6B]/10 text-[#2C3E6B] group-hover:bg-[#2C3E6B] group-hover:text-white transition-colors">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-[#2C3E6B]">
              {props.tituloValores || 'Valores'}
            </h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
              {valores.map((valor, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2E7B7F]" />
                  <span className="leading-relaxed">{valor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
