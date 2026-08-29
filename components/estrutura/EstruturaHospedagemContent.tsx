'use client'

import { CheckCircle2, List } from 'lucide-react'
import Image from 'next/image'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

import { cx, classeTexto, estiloDeTexto, styleBloco, styleImagem } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'
import type { ImagemBloco } from '@/types/cms-blocos'

export const PARAGRAFO1_PADRAO =
  'A hospedagem assistida 24 horas é muito mais do que um espaço de moradia: trata-se de um modelo de cuidado integral que combina assistência médica, enfermagem especializada, suporte nutricional, atividades terapêuticas e acolhimento humanizado. Na Novo Lar Geriatria, proporcionamos um ambiente preparado para atender idosos em diferentes graus de dependência, desde aqueles que buscam autonomia e convivência social até pacientes que necessitam de cuidados intensivos e monitoramento contínuo.'

export const TITULO_LISTA_PADRAO = 'Cuidado que se adapta a cada família'

export const ITENS_PADRAO = [
  'Planos permanentes ou temporários totalmente personalizados conforme perfil clínico e necessidades de cada família',
  'Equipe multidisciplinar completa presente 24h: médico geriatra, enfermeiros, fisioterapeutas, nutricionistas, psicólogos e terapeutas ocupacionais',
  'Ambientes totalmente acessíveis com pisos antiderrapantes, corrimãos, áreas verdes arborizadas e salas de convivência climatizadas',
  'Quartos individuais ou compartilhados com camas hospitalares, climatização, banheiros adaptados e sistema de chamada de emergência',
  'Programação diária supervisionada: atividades terapêuticas, recreativas, culturais, fisioterapia em grupo e celebrações especiais',
  'Alimentação balanceada com seis refeições diárias elaboradas por nutricionistas especializados em geriatria',
  'Administração controlada de medicamentos com checklist de enfermagem, controle de horários e integração com farmácias parceiras',
  'Monitoramento contínuo de sinais vitais, glicemia, pressão arterial e demais parâmetros clínicos conforme necessidade individual',
]

const FOTOS_PADRAO = [
  {
    url: '/estrutura-cuidado/1.png',
    alt: 'Área externa arborizada da Novo Lar com moradores em atividade',
  },
  {
    url: '/estrutura-cuidado/2.png',
    alt: 'Equipe de enfermagem acompanhando residente durante a rotina diária',
  },
  {
    url: '/estrutura-cuidado/3.png',
    alt: 'Suíte climatizada e acessível da Novo Lar Geriatria',
  },
  {
    url: '/estrutura-cuidado/4.png',
    alt: 'Ambiente acolhedor com equipe multidisciplinar presente',
  },
]

interface EstruturaHospedagemContentProps {
  paragrafo1?: string
  paragrafo2?: PortableTextBlock[]
  imagem1?: ImagemBloco
  imagem2?: ImagemBloco
  imagem3?: ImagemBloco
  imagem4?: ImagemBloco
  tituloLista?: string
  itens?: string[]
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

/** O negrito escrito no Studio sai com a mesma classe do texto fixo. */
const NEGRITO_COMO_NO_SITE: PortableTextComponents = {
  marks: {
    strong: ({children}) => <strong className="font-bold">{children}</strong>,
  },
}

/** O segundo paragrafo como esta hoje, com os trechos em negrito. */
function Paragrafo2Padrao() {
  return (
    <p>
      Diferente do cuidado domiciliar, a hospedagem assistida oferece{' '}
      <strong className="font-bold">
        infraestrutura completa, equipe multidisciplinar integrada e protocolos de segurança
      </strong>{' '}
      que garantem resposta imediata a qualquer necessidade. Cada residente recebe um{' '}
      <strong className="font-bold">plano de cuidado personalizado</strong>, elaborado com base
      em avaliação clínica detalhada, histórico de saúde, preferências pessoais e orientações da
      família. Esse plano é constantemente revisado pela equipe, assegurando evolução e bem-estar
      em cada etapa do envelhecimento.
    </p>
  )
}

export default function EstruturaHospedagemContent({
  paragrafo1 = PARAGRAFO1_PADRAO,
  paragrafo2,
  imagem1,
  imagem2,
  imagem3,
  imagem4,
  tituloLista = TITULO_LISTA_PADRAO,
  itens,
  estiloDescricao,
  estilo,
}: EstruturaHospedagemContentProps = {}) {
  const fotos = [imagem1, imagem2, imagem3, imagem4].map((imagem, i) => ({
    url: imagem?.url || FOTOS_PADRAO[i].url,
    alt: imagem?.alt || FOTOS_PADRAO[i].alt,
    estilo: imagem?.estilo,
  }))

  const lista = itens && itens.length > 0 ? itens : ITENS_PADRAO

  return (
    <section className="py-20 px-8 md:px-24 lg:px-36" style={styleBloco(estilo)}>
      <div className="max-w-[1156px] mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-[682px]">
          <div className="flex flex-col gap-8">
            {/* First Paragraph */}
            <p
              className={cx('text-[#364153] text-base leading-relaxed', classeTexto(estiloDescricao))}
              style={estiloDeTexto(estiloDescricao)}
            >
              {paragrafo1}
            </p>

            {/* Second Paragraph with Bold Text */}
            <div
              className={cx('text-[#364153] text-base leading-relaxed', classeTexto(estiloDescricao))}
              style={estiloDeTexto(estiloDescricao)}
            >
              {paragrafo2 && paragrafo2.length > 0 ? (
                <PortableText value={paragrafo2} components={NEGRITO_COMO_NO_SITE} />
              ) : (
                <Paragrafo2Padrao />
              )}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {fotos.map((foto, i) => (
                <div
                  key={i}
                  className="aspect-[3/2] rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm relative"
                >
                  <Image
                    src={foto.url}
                    alt={foto.alt}
                    fill
                    className="object-cover"
                    style={styleImagem(foto.estilo)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div
          className="w-full lg:w-[426px] p-8 flex flex-col gap-4 rounded-3xl border"
          style={{
            background: 'rgba(46, 123, 127, 0.05)',
            borderColor: 'rgba(46, 123, 127, 0.2)',
            boxShadow:
              '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3">
            <List className="w-6 h-6 text-[#2C3E6B]" />
            <h3 className="text-[#2C3E6B] font-bold text-sm tracking-[4.2px] uppercase">
              {tituloLista}
            </h3>
          </div>

          {/* List Items */}
          <div className="flex flex-col gap-3">
            {lista.map((item, i) => (
              <div key={i} className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
                <p className="text-[#364153] text-sm leading-5">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
