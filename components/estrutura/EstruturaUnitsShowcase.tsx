'use client'

import { MapPin, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { cx, classeTexto, estiloDeTexto, styleBloco, styleImagem } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'
import type { ImagemBloco } from '@/types/cms-blocos'

export const TITULO_PADRAO = 'Unidades Novo Lar Geriatria'
export const DESCRICAO_PADRAO =
  'Escolha a unidade mais próxima para conhecer de perto nossa estrutura e os ambientes preparados para acolher o seu familiar.'

type Unidade = {
  titulo?: string
  endereco?: string
  destaques?: string[]
  href?: string
  telefone?: string
  cidade?: string
  imagem?: ImagemBloco
  imagemPadrao?: string
}

/** As tres unidades como estao no ar hoje. */
const UNIDADES_PADRAO: Required<Omit<Unidade, 'imagem'>>[] = [
  {
    titulo: 'Moinhos de Vento · Rua Luciana de Abreu, 151',
    endereco: 'Rua Luciana de Abreu, 151 · Porto Alegre - RS',
    destaques: [
      'Ambiente arborizado e acolhedor',
      'Suítes individuais e duplas',
      'Próximo aos serviços do bairro Moinhos',
    ],
    href: '/unidade-luciana-de-abreu',
    telefone: '(51) 2797.0901',
    cidade: 'Porto Alegre',
    imagemPadrao: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/10.jpeg',
  },
  {
    titulo: "Passo d'Areia · Rua Brigadeiro Oliveira Neri, 175",
    endereco: 'Rua Brigadeiro Oliveira Neri, 175 · Porto Alegre - RS',
    destaques: [
      'Espaços amplos e iluminados',
      'Fácil acesso pelas principais vias da zona norte',
      'Rotina integrada de terapias e atividades',
    ],
    href: '/unidade-novo-lar-geriatria',
    telefone: '(51) 3376.9462',
    cidade: 'Porto Alegre',
    imagemPadrao: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/6.jpeg',
  },
  {
    titulo: 'Moinhos de Vento · R. Barão de Santo Ângelo, 406',
    endereco: 'Rua Barão de Santo Ângelo, 406 · Porto Alegre - RS',
    // "moderna" e "jardins" saem a pedido do cliente: a casa da Barao de
    // Santo Angelo e antiga e nao tem jardim integrado.
    destaques: [
      'Casa tradicional em região central',
      'Áreas de convivência amplas',
      'Equipe de referência em reabilitação e acolhimento',
    ],
    href: '/unidade-barao-sto-angelo',
    telefone: '(51) 2797.0901',
    cidade: 'Porto Alegre',
    imagemPadrao: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
  },
]

interface EstruturaUnitsShowcaseProps {
  titulo?: string
  descricao?: string
  unidades?: Unidade[]
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export default function EstruturaUnitsShowcase({
  titulo = TITULO_PADRAO,
  descricao = DESCRICAO_PADRAO,
  unidades,
  estiloTitulo,
  estiloDescricao,
  estilo,
}: EstruturaUnitsShowcaseProps = {}) {
  const cards =
    unidades && unidades.length > 0
      ? unidades.map((unidade, i) => {
          const padrao = UNIDADES_PADRAO[i]

          return {
            titulo: unidade.titulo || padrao?.titulo || '',
            endereco: unidade.endereco || padrao?.endereco || '',
            destaques:
              unidade.destaques && unidade.destaques.length > 0
                ? unidade.destaques
                : padrao?.destaques || [],
            href: unidade.href || padrao?.href || '#',
            telefone: unidade.telefone || padrao?.telefone || '',
            cidade: unidade.cidade || padrao?.cidade || 'Porto Alegre',
            imagemUrl: unidade.imagem?.url || padrao?.imagemPadrao || '',
            imagemAlt: unidade.imagem?.alt || unidade.titulo || padrao?.titulo || '',
            estiloImagem: unidade.imagem?.estilo,
          }
        })
      : UNIDADES_PADRAO.map((padrao) => ({
          titulo: padrao.titulo,
          endereco: padrao.endereco,
          destaques: padrao.destaques,
          href: padrao.href,
          telefone: padrao.telefone,
          cidade: padrao.cidade,
          imagemUrl: padrao.imagemPadrao,
          imagemAlt: padrao.titulo,
          estiloImagem: undefined,
        }))

  return (
    <section
      className="py-20 px-8 md:px-24 lg:px-36"
      style={{
        background: 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)',
        ...styleBloco(estilo),
      }}
    >
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <h2
            className={cx('text-[#2C3E6B] font-bold text-4xl md:text-5xl leading-tight', classeTexto(estiloTitulo))}
            style={estiloDeTexto(estiloTitulo)}
          >
            {titulo}
          </h2>

          <p
            className={cx('text-[#4A5565] text-lg leading-relaxed max-w-[1026px]', classeTexto(estiloDescricao))}
            style={estiloDeTexto(estiloDescricao)}
          >
            {descricao}
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-3xl border border-[#E5E7EB] shadow-sm overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56">
                <Image
                  src={card.imagemUrl}
                  alt={card.imagemAlt}
                  fill
                  className="object-cover"
                  style={styleImagem(card.estiloImagem)}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)',
                  }}
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 bg-white/90 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-[#2C3E6B]" />
                  <span className="text-[#2C3E6B] font-bold text-xs tracking-[3.6px] uppercase">
                    {card.cidade}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-[#2C3E6B] font-bold text-xl leading-7">{card.titulo}</h3>

                <p className="text-[#4A5565] text-sm leading-5">{card.endereco}</p>

                {/* Features List */}
                <div className="flex flex-col gap-2">
                  {card.destaques.map((destaque, i) => (
                    <div key={i} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4A5565] text-sm">{destaque}</p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
                  <span className="text-[#2C3E6B] font-bold text-sm">{card.telefone}</span>
                  <Link
                    href={card.href}
                    className="text-[#2E7B7F] font-bold text-sm hover:underline"
                  >
                    Ver unidade
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
