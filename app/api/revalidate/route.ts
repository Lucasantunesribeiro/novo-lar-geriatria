import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'
import { revalidationEventSchema, revalidationPlan } from '@/lib/sanity/revalidation'

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET?.trim()
  if (!secret) {
    return NextResponse.json({ error: 'Revalidacao nao configurada' }, { status: 503 })
  }

  try {
    // A biblioteca valida a assinatura do corpo original. A espera ocorre
    // so apos rejeitarmos eventos que nao devem invalidar conteudo.
    const { body, isValidSignature } = await parseBody(request, secret, false)
    if (!isValidSignature) {
      return NextResponse.json({ error: 'Assinatura invalida' }, { status: 401 })
    }

    const event = revalidationEventSchema.safeParse(body)
    if (!event.success) {
      return NextResponse.json({ error: 'Evento invalido' }, { status: 400 })
    }
    const { tags, paths } = revalidationPlan(event.data)
    if (tags.length === 0) {
      return NextResponse.json({ revalidated: false, ignored: true })
    }

    // Mesma margem de consistencia usada por next-sanity/webhook: nao guardar
    // no cache o estado anterior enquanto o Content Lake termina a atualizacao.
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000))
      for (const tag of tags) revalidateTag(tag, { expire: 0 })
      for (const path of paths) revalidatePath(path)
      return NextResponse.json({ revalidated: true })
    } catch {
      // Falha transitoria deve permitir que o Sanity tente entregar de novo.
      return NextResponse.json({ error: 'Falha ao invalidar cache' }, { status: 500 })
    }
  } catch {
    return NextResponse.json({ error: 'Nao foi possivel revalidar' }, { status: 400 })
  }
}
