'use client'

import { MessageCircle } from 'lucide-react'

import { COMPANY_CONTACT } from '@/lib/site-data'
import { cx, classeTexto, estiloDeTexto, styleBloco } from '@/lib/cms/estilo'
import type { EstiloBloco, EstiloTexto } from '@/lib/cms/estilo'

interface EstruturaFinalCTAProps {
  title?: string
  description?: string
  whatsappHref?: string
  buttonLabel?: string
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export default function EstruturaFinalCTA({
  title = 'Pronto para conhecer a Novo Lar pessoalmente?',
  description = 'Nossa equipe está disponível para apresentar cada unidade, compartilhar o plano de cuidados e orientar sua família na escolha ideal.',
  whatsappHref = `https://wa.me/${COMPANY_CONTACT.whatsappDigits}`,
  buttonLabel = 'Conversar pelo WhatsApp',
  estiloTitulo,
  estiloDescricao,
  estilo,
}: EstruturaFinalCTAProps) {
  return (
    <section
      className="relative py-20 px-8 md:px-24 lg:px-36"
      style={{
        background: 'linear-gradient(135deg, #2C3E6B 0%, #2E7B7F 100%)',
        ...styleBloco(estilo),
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/placeholders/pattern-overlay.png)',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative max-w-[1156px] mx-auto flex flex-col items-center gap-4 text-center">
        <h2
          className={cx('text-white font-bold text-3xl md:text-4xl leading-tight max-w-[841px]', classeTexto(estiloTitulo))}
          style={estiloDeTexto(estiloTitulo)}
        >
          {title}
        </h2>

        <p
          className={cx('text-white/85 text-lg leading-relaxed max-w-[1070px]', classeTexto(estiloDescricao))}
          style={estiloDeTexto(estiloDescricao)}
        >
          {description}
        </p>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-7 py-4 border border-white/30 rounded-xl text-white font-bold text-sm hover:bg-white/10 transition-colors mt-4"
        >
          <MessageCircle className="w-4 h-4" />
          {buttonLabel}
        </a>
      </div>
    </section>
  )
}
