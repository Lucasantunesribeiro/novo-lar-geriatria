/**
 * Ajustes de SEO que moram no Studio (Sanity), não no código.
 *
 *   node scripts/aplicar-ajustes-seo-cms.mjs            # só mostra o que mudaria
 *   node scripts/aplicar-ajustes-seo-cms.mjs --aplicar  # grava (precisa de SANITY_API_TOKEN)
 *
 * 1. Descrição da página inicial: a atual cita só Moinhos de Vento e Passo
 *    d'Areia. A nova cita as 3 casas pelo nome da rua.
 * 2. Bloco "Notícias" da home: a migração para blocos copiou para lá a lista
 *    antiga de artigos (janeiro de 2025). Esvaziar a lista faz a home mostrar
 *    os artigos mais recentes, como o próprio Studio promete ("Vazio = os
 *    artigos mais recentes").
 *
 * Sem --aplicar o script lê a API pública (CDN) e não toca em .env.local.
 * Com --aplicar ele lê .env.local para achar o token e grava usando
 * ifRevisionID: se alguém editou a página no meio do caminho, nada é gravado.
 */
import fs from 'node:fs'
import path from 'node:path'

const aplicar = process.argv.includes('--aplicar')

if (aplicar) {
  const envPath = path.resolve(process.cwd(), '.env.local')
  if (fs.existsSync(envPath)) {
    for (const linha of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
      const m = linha.match(/^([A-Z0-9_]+)=(.*)$/)
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
    }
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'h3afqywn'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'
const token = process.env.SANITY_API_TOKEN

if (aplicar && !token) {
  console.error('Falta SANITY_API_TOKEN para gravar. Nada foi alterado.')
  process.exit(1)
}

const DOC_ID = 'page-inicio'
const NOVA_DESCRICAO =
  'Hospedagem assistida 24h para idosos em Porto Alegre, com 3 unidades: Luciana de Abreu e Barão de Santo Ângelo (Moinhos de Vento) e Passo d’Areia.'

if (NOVA_DESCRICAO.length > 160) {
  console.error(`Descrição com ${NOVA_DESCRICAO.length} caracteres; o limite é 160.`)
  process.exit(1)
}

const host = aplicar ? 'api.sanity.io' : 'apicdn.sanity.io'
const base = `https://${projectId}.${host}/v${apiVersion}/data`
const headers = token && aplicar ? {Authorization: `Bearer ${token}`} : {}

async function consultar(query) {
  const url = `${base}/query/${dataset}?query=${encodeURIComponent(query)}`
  const res = await fetch(url, {headers})
  if (!res.ok) throw new Error(`Consulta falhou: HTTP ${res.status}`)
  return (await res.json()).result
}

const ids = aplicar ? [DOC_ID, `drafts.${DOC_ID}`] : [DOC_ID]
const docs = await consultar(
  `*[_id in ${JSON.stringify(ids)}]{_id, _rev, "descricao": seo.description, "blog": blocos[_type == "homeBlog"]{_key, "qtd": count(itens)}}`
)

if (!docs || docs.length === 0) {
  console.error(`Documento ${DOC_ID} não encontrado. Nada foi alterado.`)
  process.exit(1)
}

const mutations = []
for (const doc of docs) {
  console.log(`\n${doc._id}`)
  console.log(`  descrição atual (${(doc.descricao || '').length}): ${doc.descricao || '(vazia)'}`)
  console.log(`  descrição nova  (${NOVA_DESCRICAO.length}): ${NOVA_DESCRICAO}`)

  const unset = []
  for (const bloco of doc.blog || []) {
    console.log(`  bloco Notícias ${bloco._key}: ${bloco.qtd ?? 0} artigos escolhidos -> 0 (mais recentes)`)
    if (bloco.qtd) unset.push(`blocos[_key=="${bloco._key}"].itens`)
  }

  const patch = {id: doc._id, ifRevisionID: doc._rev}
  if (doc.descricao !== NOVA_DESCRICAO) patch.set = {'seo.description': NOVA_DESCRICAO}
  if (unset.length > 0) patch.unset = unset
  if (patch.set || patch.unset) mutations.push({patch})
}

if (mutations.length === 0) {
  console.log('\nNada a mudar.')
  process.exit(0)
}

if (!aplicar) {
  console.log(`\nSimulação: ${mutations.length} documento(s) mudariam. Rode com --aplicar para gravar.`)
  process.exit(0)
}

const res = await fetch(`${base}/mutate/${dataset}?returnIds=true`, {
  method: 'POST',
  headers: {...headers, 'Content-Type': 'application/json'},
  body: JSON.stringify({mutations}),
})

if (!res.ok) {
  console.error(`Gravação recusada: HTTP ${res.status}. Nada foi alterado.`)
  console.error(await res.text())
  process.exit(1)
}

console.log(`\nGravado em ${mutations.length} documento(s). O webhook de revalidação atualiza o site.`)
