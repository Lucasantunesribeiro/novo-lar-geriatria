'use client'

import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

/**
 * Texto rico do CMS, com o espacamento e as cores do site.
 *
 * Por que existe: o projeto usava as classes `prose` do plugin
 * @tailwindcss/typography, que NAO esta instalado. Sem o plugin, `prose` nao
 * faz nada: os paragrafos saiam colados uns nos outros, sem margem, sem lista
 * com marcador e sem hierarquia de titulo. Era isso que deixava a secao de
 * texto com cara de bloco unico.
 *
 * A escolha por estilo explicito em vez de instalar o plugin foi de proposito:
 * ligar o `prose` mudaria de uma vez a aparencia dos artigos do blog, das
 * paginas de unidade, da politica de privacidade e dos termos, e essas
 * paginas precisam continuar como estao ate alguem decidir o contrario.
 *
 * Precisa ser componente de cliente: as funcoes abaixo nao atravessam a
 * fronteira entre servidor e cliente e seriam ignoradas em silencio.
 */
const ESTILO: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-base leading-relaxed text-[#4A5565] last:mb-0 lg:text-lg lg:leading-8">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 text-2xl font-bold text-[#2C3E6B] first:mt-0 lg:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-xl font-bold text-[#2C3E6B] first:mt-0 lg:text-2xl">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-6 text-lg font-bold text-[#2C3E6B] first:mt-0">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mb-5 border-l-4 border-[#D4A853] pl-5 text-base italic leading-relaxed text-[#4A5565] lg:text-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-[#4A5565] lg:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-2 pl-6 text-base leading-relaxed text-[#4A5565] lg:text-lg">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-[#2C3E6B]">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="font-semibold text-[#2E7B7F] underline underline-offset-2 hover:text-[#2C3E6B]"
      >
        {children}
      </a>
    ),
  },
}

export default function TextoRico({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={ESTILO} />
}
