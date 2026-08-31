'use client'

import { useEffect, useState } from 'react'

/**
 * Faz os links de telefone funcionarem no computador.
 *
 * O problema: `<a href="tel:5133769462">` so faz alguma coisa em aparelho com
 * app de telefone registrado. No Windows o Chrome nao abre nada e nao mostra
 * erro nenhum — o clique morre em silencio. Foi o que o cliente relatou como
 * "botao nao direciona a nada" no cartao Central Novo Lar da home e no botao
 * Ligar Agora da pagina de contato. Os dois tinham href certo o tempo todo.
 *
 * Por que um ouvinte unico no lugar de trocar cada botao: existem 31 links
 * `tel:` espalhados pelo site, e parte deles e escrita no Sanity, entao nao
 * daria para trocar um por um sem deixar sobra.
 *
 * O que faz: no celular nao mexe em nada, o discador abre normalmente. No
 * computador, copia o numero e mostra um aviso curto no canto da tela.
 *
 * A deteccao usa `matchMedia('(hover: hover) and (pointer: fine)')` — mouse
 * da verdadeiro, dedo da falso. E mais confiavel que olhar a largura da
 * janela, porque celular deitado continua sendo celular.
 */
export default function TelefoneNoComputador() {
  const [numeroCopiado, setNumeroCopiado] = useState<string | null>(null)

  useEffect(() => {
    const temMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!temMouse) return

    let apagar: number | undefined

    async function aoClicar(evento: MouseEvent) {
      const alvo = evento.target as HTMLElement | null
      const link = alvo?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null
      if (!link) return

      // Deixa passar quando a pessoa quer abrir em outra aba de proposito.
      if (evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.button !== 0) return

      evento.preventDefault()

      const digitos = link.getAttribute('href')!.replace(/^tel:/, '')
      // Prefere o numero como esta escrito na tela; se o botao nao mostrar
      // numero nenhum, cai nos digitos do proprio link.
      const escrito = (link.textContent || '').match(/\(?\d{2}\)?[\s.-]*\d{4,5}[\s.-]?\d{4}/)
      const numero = escrito ? escrito[0].trim() : digitos

      try {
        await navigator.clipboard.writeText(numero)
      } catch {
        // Sem permissao de area de transferencia so resta mostrar o numero,
        // que e o que o aviso abaixo ja faz.
      }

      setNumeroCopiado(numero)
      window.clearTimeout(apagar)
      apagar = window.setTimeout(() => setNumeroCopiado(null), 3000)
    }

    document.addEventListener('click', aoClicar)
    return () => {
      document.removeEventListener('click', aoClicar)
      window.clearTimeout(apagar)
    }
  }, [])

  if (!numeroCopiado) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-full bg-[#2C3E6B] px-5 py-3 text-sm font-semibold text-white shadow-xl"
    >
      Número copiado: {numeroCopiado}
    </div>
  )
}
