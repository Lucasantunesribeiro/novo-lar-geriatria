'use client'

import { Phone, MessageCircle, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

import { icone } from '@/components/cms/icones'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { cx, classeTexto, estiloDeTexto, styleBloco } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'

export const ETIQUETA_PADRAO = 'Atendimento próximo'
export const TITULO_PADRAO =
  'Estamos prontos para planejar a melhor solução para a sua família'
export const DESCRICAO_PADRAO =
  'Escolha o canal que preferir para falar com nossa equipe. Responderemos rapidamente para orientar sobre vagas, documentação, valores e visitas.'

/** Os tres cartoes de contato como estao no ar. */
const CARTOES_PADRAO = [
  {
    icon: Phone,
    titulo: 'Central Novo Lar',
    descricao:
      'Converse com nossa equipe e tire todas as dúvidas sobre as modalidades de hospedagem.',
    href: `tel:${COMPANY_CONTACT.centralPhoneDigits}`,
    label: 'Ligar agora',
  },
  {
    icon: MessageCircle,
    titulo: 'WhatsApp 24h',
    descricao:
      'Envie uma mensagem e receba retorno rápido da equipe de plantão para orientações imediatas.',
    href: `https://wa.me/${COMPANY_CONTACT.whatsappDigits}`,
    label: 'Abrir conversa',
  },
  {
    icon: Calendar,
    titulo: 'Agendar visita guiada',
    descricao:
      'Escolha a unidade de preferência e conheça pessoalmente nossa estrutura e protocolos de cuidado.',
    href: '/contato',
    label: 'Agendar agora',
  },
]

interface EstruturaCareCTAProps {
  etiqueta?: string
  titulo?: string
  descricao?: string
  cartoes?: Array<{
    icone?: string
    titulo?: string
    descricao?: string
    href?: string
    label?: string
  }>
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export default function EstruturaCareCTA({
  etiqueta = ETIQUETA_PADRAO,
  titulo = TITULO_PADRAO,
  descricao = DESCRICAO_PADRAO,
  cartoes,
  estiloTitulo,
  estiloDescricao,
  estilo,
}: EstruturaCareCTAProps = {}) {
  const cards =
    cartoes && cartoes.length > 0
      ? cartoes.map((cartao, i) => ({
          icon: icone(cartao.icone, CARTOES_PADRAO[i]?.icon || Phone),
          titulo: cartao.titulo || CARTOES_PADRAO[i]?.titulo || '',
          descricao: cartao.descricao || CARTOES_PADRAO[i]?.descricao || '',
          href: cartao.href || CARTOES_PADRAO[i]?.href || '#',
          label: cartao.label || CARTOES_PADRAO[i]?.label || '',
        }))
      : CARTOES_PADRAO

  return (
    <section className="py-20 px-8 md:px-24 lg:px-36" style={styleBloco(estilo)}>
      <div className="max-w-[1156px] mx-auto">
        <div
          className="flex flex-col items-center gap-10 p-10 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #102041 0%, #1D3364 50%, #2E7B7F 100%)',
            boxShadow:
              '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center max-w-[672px]">
            <div className="flex items-center px-4 py-2 gap-2 bg-white/10 rounded-full">
              <Sparkles className="w-4 h-4 text-white/80" />
              <span className="text-white/80 font-bold text-xs tracking-[3.6px] uppercase">
                {etiqueta}
              </span>
            </div>

            <h2
              className={cx('text-white font-bold text-3xl md:text-4xl leading-tight', classeTexto(estiloTitulo))}
              style={estiloDeTexto(estiloTitulo)}
            >
              {titulo}
            </h2>

            <p
              className={cx('text-white/80 text-base leading-6', classeTexto(estiloDescricao))}
              style={estiloDeTexto(estiloDescricao)}
            >
              {descricao}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 w-full">
            {cards.map((card, index) => {
              const Icone = card.icon
              const externo = card.href.startsWith('http') || card.href.startsWith('tel:')

              const conteudo = (
                <>
                  <div className="w-12 h-12 flex items-center justify-center bg-white/15 rounded-2xl mb-5">
                    <Icone className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-white font-bold text-xl leading-7 mb-3">
                    {card.titulo}
                  </h3>

                  <p className="text-white/80 text-sm leading-5 mb-6 flex-grow">
                    {card.descricao}
                  </p>

                  <div className="flex items-center gap-2 text-[#F5D481] font-bold text-sm">
                    <span>{card.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </>
              )

              const classe =
                'flex flex-col p-6 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 transition-colors'

              if (externo) {
                return (
                  <a
                    key={index}
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={classe}
                  >
                    {conteudo}
                  </a>
                )
              }

              return (
                <Link key={index} href={card.href} className={classe}>
                  {conteudo}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
