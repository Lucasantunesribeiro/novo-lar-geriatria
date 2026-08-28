import './loadEnv'
import { writeClient } from '../lib/sanity/client'

if (!writeClient) {
  console.error('No write client configured')
  process.exit(1)
}

const client = writeClient

const CANONICAL_MAP: Record<string, string> = {
  'page-home': '/',
  'page-sobre': '/sobre',
  'page-sobre-a-novo-lar': '/sobre/a-novo-lar',
  'page-sobre-atividades': '/sobre/atividades',
  'page-sobre-equipe': '/sobre/equipe',
  'page-sobre-estrutura': '/sobre/estrutura',
  'page-sobre-fotos': '/sobre/fotos',
  'page-sobre-localizacao': '/sobre/localizacao',
  'page-servicos': '/servicos',
  'page-contato': '/contato',
  'page-blog': '/blog',
  'page-depoimentos': '/depoimentos',
  'page-unidades': '/unidades',
  'page-fotos': '/fotos',
  'page-obrigado': '/obrigado',
  'page-politica-de-privacidade': '/politica-de-privacidade',
  'page-termos-de-uso': '/termos-de-uso',
}

async function main() {
  console.log('Verificando e restaurando paths de páginas do sistema...')
  for (const [docId, expectedPath] of Object.entries(CANONICAL_MAP)) {
    const doc = await client.fetch<{ _id: string; path?: string } | null>(
      `*[_id == $docId || _id == $draftDocId][0]{_id, path}`,
      { docId, draftDocId: `drafts.${docId}` }
    )

    if (doc) {
      if (doc.path !== expectedPath) {
        console.log(` Restaurando ${doc._id}: "${doc.path}" -> "${expectedPath}"`)
        await client.patch(doc._id).set({ path: expectedPath }).commit()
      } else {
        console.log(` OK ${doc._id}: "${doc.path}"`)
      }
    } else {
      console.log(` Documento ${docId} não encontrado no Sanity.`)
    }
  }
  console.log('Concluído!')
}

main().catch(console.error)
