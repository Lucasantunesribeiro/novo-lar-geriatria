'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

/**
 * Carrossel com as avaliacoes reais do Google.
 *
 * O cliente pediu isso duas vezes: na home e na pagina de Depoimentos. A
 * queixa foi que a vitrine parecia sempre a mesma e por isso nao passava
 * confianca. Entao aqui nada e escrito a mao: as avaliacoes vem de
 * /api/reviews, que consulta o Google e guarda o resultado por uma hora. Cada
 * avaliacao nova no Google aparece sozinha na hora seguinte.
 *
 * De onde vem a lista de casas: a propria rota descobre, lendo o campo
 * "Google Place ID" de cada unidade no Studio. Nao ha nada para configurar
 * aqui dentro.
 *
 * Se nao houver Place ID ou chave do Google, o componente nao mostra nada —
 * como fazia antes — em vez de deixar uma caixa vazia ou uma mensagem de erro
 * na cara do visitante.
 */

type Avaliacao = {
  id: string
  author: string
  rating: number
  text: string
  date: string
  relativeTime?: string
  profilePhoto?: string
  unidade?: string
}

type Resposta = {
  averageRating?: number
  totalReviews?: number
  reviews?: Avaliacao[]
  source?: string
}

interface GoogleReviewsProps {
  /** Mostrar apenas uma casa. Vazio = todas as unidades cadastradas. */
  placeId?: string
  className?: string
  titulo?: string
}

/** Quantas aparecem juntas em cada largura de tela. */
function porVez(largura: number) {
  if (largura >= 1024) return 3
  if (largura >= 640) return 2
  return 1
}

export default function GoogleReviews({
  placeId,
  className = '',
  titulo = 'O que as famílias dizem no Google',
}: GoogleReviewsProps) {
  const [dados, setDados] = useState<Resposta | null>(null)
  const [carregando, setCarregando] = useState(true)
  const [inicio, setInicio] = useState(0)
  const [visiveis, setVisiveis] = useState(3)

  useEffect(() => {
    let cancelado = false
    const url = placeId ? `/api/reviews?placeId=${encodeURIComponent(placeId)}` : '/api/reviews'

    fetch(url)
      .then((r) => r.json())
      .then((corpo: Resposta) => {
        if (!cancelado) setDados(corpo)
      })
      .catch(() => {
        // Falha de rede nao pode aparecer para o visitante: a secao some.
        if (!cancelado) setDados(null)
      })
      .finally(() => {
        if (!cancelado) setCarregando(false)
      })

    return () => {
      cancelado = true
    }
  }, [placeId])

  useEffect(() => {
    const ajustar = () => setVisiveis(porVez(window.innerWidth))
    ajustar()
    window.addEventListener('resize', ajustar)
    return () => window.removeEventListener('resize', ajustar)
  }, [])

  const avaliacoes = dados?.reviews || []
  const total = avaliacoes.length

  const avancar = useCallback(() => {
    if (total === 0) return
    setInicio((i) => (i + 1) % total)
  }, [total])

  const voltar = useCallback(() => {
    if (total === 0) return
    setInicio((i) => (i - 1 + total) % total)
  }, [total])

  // Anda sozinho, para a vitrine nao parecer parada. Para quando a pessoa
  // passa o mouse por cima — controlado pelo estado `pausado` abaixo.
  const [pausado, setPausado] = useState(false)
  useEffect(() => {
    if (pausado || total <= visiveis) return
    const t = window.setInterval(avancar, 6000)
    return () => window.clearInterval(t)
  }, [pausado, total, visiveis, avancar])

  if (carregando || total === 0) return null

  const janela = Array.from({ length: Math.min(visiveis, total) }, (_, k) => avaliacoes[(inicio + k) % total])

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-bold text-[#2C3E6B]">{titulo}</h2>

          {dados?.averageRating ? (
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    className={`h-5 w-5 ${
                      n <= Math.round(dados.averageRating!)
                        ? 'fill-[#D4A853] text-[#D4A853]'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </span>
              <strong className="text-[#2C3E6B]">{dados.averageRating.toFixed(1)}</strong>
              <span>
                em {dados.totalReviews} avaliações no Google
              </span>
            </div>
          ) : null}
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {janela.map((a) => (
              <article
                key={a.id}
                className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className={`h-4 w-4 ${
                        n <= a.rating ? 'fill-[#D4A853] text-[#D4A853]' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <p className="flex-1 text-sm italic leading-relaxed text-gray-700">
                  &ldquo;{a.text}&rdquo;
                </p>

                <div className="mt-4 border-t border-gray-200 pt-3">
                  <p className="font-bold text-[#2C3E6B]">{a.author}</p>
                  <p className="text-xs text-gray-500">
                    {a.relativeTime}
                    {a.unidade ? ` · ${a.unidade}` : ''}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {total > visiveis && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={voltar}
                aria-label="Avaliação anterior"
                className="rounded-full border border-gray-300 p-2 text-[#2C3E6B] transition hover:bg-[#2C3E6B] hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-sm text-gray-500">
                {inicio + 1} de {total}
              </span>
              <button
                type="button"
                onClick={avancar}
                aria-label="Próxima avaliação"
                className="rounded-full border border-gray-300 p-2 text-[#2C3E6B] transition hover:bg-[#2C3E6B] hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
