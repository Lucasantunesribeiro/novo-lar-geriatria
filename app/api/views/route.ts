import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'

// Usamos um client dedicado configurado com o token para ter permissões de escrita
const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { slug } = body

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
    }

    // Usamos um ID determinístico no Sanity baseado no slug: "pageview-meu-slug"
    const docId = `pageview-${slug}`

    // Em uma única transação, garantimos que o documento existe, e depois somamos +1 aos views
    await writeClient
      .transaction()
      .createIfNotExists({ _id: docId, _type: 'pageView', slug, views: 0 })
      .patch(docId, (patch) => patch.inc({ views: 1 }))
      .commit()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro ao registrar view:', error)
    return NextResponse.json({ error: 'Erro ao registrar view' }, { status: 500 })
  }
}
