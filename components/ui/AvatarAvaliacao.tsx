import Image from 'next/image'

/**
 * A carinha de quem escreveu a avaliacao.
 *
 * O cliente pediu a foto das pessoas para a vitrine passar mais confianca. A
 * foto vem junto com a avaliacao do Google (`profile_photo_url`), entao ela so
 * existe quando /api/reviews respondeu com `source: "google"` — ou seja,
 * quando GOOGLE_PLACES_API_KEY estiver configurada. Nas 21 avaliacoes
 * copiadas a mao em lib/testimonials-data.ts nao ha foto nenhuma: foram
 * transcritas, nao baixadas.
 *
 * Por isso este componente sempre desenha alguma coisa. Sem foto, a inicial do
 * nome num circulo azul — que e o que a home ja fazia. Com foto, a foto. A
 * troca acontece sozinha, sem mexer em pagina nenhuma.
 *
 * `unoptimized`: sao imagens de terceiro, pequenas e ja no tamanho certo. Nao
 * vale a pena passar pelo otimizador da Netlify (custa e pode falhar quando o
 * Google troca a URL); `referrerPolicy` evita que o Google recuse a entrega.
 */
interface AvatarAvaliacaoProps {
  nome: string
  foto?: string
  /** Lado do quadrado, em pixels. Padrao 40. */
  tamanho?: number
  className?: string
}

export default function AvatarAvaliacao({
  nome,
  foto,
  tamanho = 40,
  className = '',
}: AvatarAvaliacaoProps) {
  const lado = { width: tamanho, height: tamanho }

  if (foto) {
    return (
      <Image
        src={foto}
        alt={`Foto de ${nome} no Google`}
        width={tamanho}
        height={tamanho}
        unoptimized
        referrerPolicy="no-referrer"
        className={`flex-shrink-0 rounded-full object-cover ring-2 ring-white shadow-sm ${className}`}
        style={lado}
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      className={`flex flex-shrink-0 items-center justify-center rounded-full bg-[#2C3E6B] font-bold text-white ${className}`}
      style={{ ...lado, fontSize: Math.round(tamanho * 0.4) }}
    >
      {nome.trim().charAt(0).toUpperCase() || '?'}
    </div>
  )
}
