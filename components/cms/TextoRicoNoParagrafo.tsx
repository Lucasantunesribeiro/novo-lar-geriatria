'use client'

import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

/**
 * Texto rico que entra DENTRO de um <p> que ja existe na pagina.
 *
 * Por isso o paragrafo nao pode gerar outro <p>, e a quebra de linha sai
 * como no site de hoje: visivel so em tela grande.
 *
 * Precisa ser um componente de cliente: as funcoes abaixo nao atravessam a
 * fronteira entre servidor e cliente, e seriam ignoradas em silencio se
 * fossem passadas de fora.
 */
const COMO_NO_SITE: PortableTextComponents = {
  block: {
    normal: ({ children }) => <>{children}</>,
  },
  hardBreak: () => <br className="hidden lg:block" />,
}

export default function TextoRicoNoParagrafo({
  value,
}: {
  value: PortableTextBlock[]
}) {
  return <PortableText value={value} components={COMO_NO_SITE} />
}
