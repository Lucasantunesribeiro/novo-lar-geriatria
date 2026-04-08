'use client'

import { useState } from 'react'
import { Share2 } from 'lucide-react'

type ShareArticleButtonProps = {
  title: string
  text: string
  url: string
}

export default function ShareArticleButton({
  title,
  text,
  url,
}: ShareArticleButtonProps) {
  const [feedback, setFeedback] = useState<string | null>(null)

  const showFeedback = (message: string) => {
    setFeedback(message)
    window.setTimeout(() => setFeedback(null), 2500)
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url })
        showFeedback('Artigo compartilhado')
        return
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url)
        showFeedback('Link copiado')
        return
      }

      showFeedback('Não foi possível compartilhar')
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return
      }

      showFeedback('Não foi possível compartilhar')
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={handleShare}
        className="flex items-center gap-2 text-lg font-semibold text-[#2E7B7F] transition-colors hover:text-[#2C3E6B]"
      >
        <Share2 size={20} />
        Compartilhar este artigo
      </button>
      {feedback && (
        <span className="text-sm font-medium text-gray-500" aria-live="polite">
          {feedback}
        </span>
      )}
    </div>
  )
}
