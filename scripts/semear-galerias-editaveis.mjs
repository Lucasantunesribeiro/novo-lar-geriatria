/**
 * Torna trocaveis no Studio as fotos que hoje estao presas no codigo.
 *
 *   node scripts/semear-galerias-editaveis.mjs --dry
 *   node scripts/semear-galerias-editaveis.mjs
 *
 * O problema, apontado pelos dois clientes: as paginas Equipe, Atividades e
 * Localizacao mostram fotos das casas, que nao tem nada a ver com o assunto
 * delas. As paginas ja sabem ler uma galeria do Studio — mas o bloco de
 * galeria nao existe nos documentos, entao elas caem na lista escrita no
 * codigo e nao ha o que trocar pelo Studio.
 *
 * O que este script faz: sobe as fotos de hoje para o Sanity e cria o bloco
 * "Galeria de fotos" ja preenchido com elas. Dai o cliente abre o Studio, ve
 * cada foto na ordem em que aparece na pagina, e troca arrastando a nova por
 * cima. Nada muda visualmente enquanto ninguem trocar nada.
 *
 * Idempotente: se a pagina ja tiver galeria, nao mexe.
 */
import fs from 'node:fs'
import path from 'node:path'

const raiz = process.cwd()
const envPath = path.resolve(raiz, '.env.local')
if (fs.existsSync(envPath)) {
  for (const linha of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = linha.match(/^([A-Z0-9_]+)=(.*)$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-11-04'
const dry = process.argv.includes('--dry')

if (!projectId || (!dry && !token)) {
  console.error('Falta NEXT_PUBLIC_SANITY_PROJECT_ID ou SANITY_API_TOKEN')
  process.exit(1)
}

const base = `https://${projectId}.api.sanity.io/v${apiVersion}`

async function consultar(query) {
  const r = await fetch(`${base}/data/query/${dataset}?query=${encodeURIComponent(query)}`)
  const corpo = await r.json()
  if (corpo.error) throw new Error(JSON.stringify(corpo.error))
  return corpo.result
}

/** Sobe um arquivo de public/ e devolve o _id do asset no Sanity. */
async function subirImagem(caminhoPublico) {
  const arquivo = path.join(raiz, 'public', decodeURIComponent(caminhoPublico).replace(/^\//, ''))
  if (!fs.existsSync(arquivo)) throw new Error(`arquivo nao existe: ${arquivo}`)

  const nome = path.basename(arquivo)
  const bytes = fs.readFileSync(arquivo)
  const tipo = nome.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg'

  const r = await fetch(
    `${base}/assets/images/${dataset}?filename=${encodeURIComponent(nome)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': tipo, Authorization: `Bearer ${token}` },
      body: bytes,
    }
  )
  const corpo = await r.json()
  if (!r.ok) throw new Error(`upload falhou (${nome}): ${JSON.stringify(corpo)}`)
  return corpo.document._id
}

function chave() {
  return Math.random().toString(36).slice(2, 14)
}

// ── o que cada pagina mostra hoje, na ordem em que aparece ───────
// As listas sao as mesmas que estao no codigo das paginas. Cada texto de
// "alt" diz onde aquela foto aparece, para o cliente saber qual e qual.
const PAGINAS = [
  {
    id: 'page-sobre-equipe',
    titulo: 'Fotos da página Equipe',
    descricao:
      'As fotos abaixo aparecem na página "Equipe multidisciplinar", na ordem em que estão aqui. Hoje são fotos das casas — troque por fotos da equipe arrastando a nova por cima da atual.',
    fotos: [
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/2.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/5.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/8.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/3.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/10.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/11.jpeg',
    ],
  },
  {
    id: 'page-sobre-atividades',
    titulo: 'Fotos da página Atividades',
    descricao:
      'As fotos abaixo aparecem na página "Atividades", na ordem em que estão aqui. Hoje são fotos das casas — troque por fotos das atividades arrastando a nova por cima da atual.',
    fotos: [
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/5.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/8.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/3.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/11.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/13.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/14.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/15.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/16.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/5.jpeg',
    ],
  },
  {
    id: 'page-sobre-localizacao',
    titulo: 'Fotos da página Localização',
    descricao:
      'As fotos abaixo aparecem na página "Localização", na ordem em que estão aqui. Troque arrastando a nova por cima da atual.',
    fotos: [
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
      '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/3.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/2.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/6.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/7.jpeg',
      '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/4.jpeg',
      '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/9.jpeg',
    ],
  },
]

// ── executar ─────────────────────────────────────────────────────
const ids = PAGINAS.map((p) => p.id)
const docs = await consultar(`*[_id in ${JSON.stringify(ids)}]{_id, blocos}`)

const mutations = []

for (const pagina of PAGINAS) {
  const doc = docs.find((d) => d._id === pagina.id)
  if (!doc) {
    console.log(`— ${pagina.id}: documento nao existe, pulando`)
    continue
  }

  const jaTem = (doc.blocos || []).some((b) => b._type === 'paginaGaleria')
  if (jaTem) {
    console.log(`— ${pagina.id}: ja tem galeria, nao mexo`)
    continue
  }

  console.log(`+ ${pagina.id}: ${pagina.fotos.length} fotos a subir`)

  if (dry) continue

  const imagens = []
  for (const [i, caminho] of pagina.fotos.entries()) {
    const assetId = await subirImagem(caminho)
    imagens.push({
      _key: chave(),
      _type: 'foto',
      arquivo: { _type: 'image', asset: { _type: 'reference', _ref: assetId } },
      alt: `${pagina.titulo} — posição ${i + 1}`,
    })
    process.stdout.write(`  ${i + 1}/${pagina.fotos.length}\r`)
  }
  console.log('')

  mutations.push({
    patch: {
      id: doc._id,
      insert: {
        after: 'blocos[-1]',
        items: [
          {
            _key: chave(),
            _type: 'paginaGaleria',
            titulo: pagina.titulo,
            descricao: pagina.descricao,
            imagens,
          },
        ],
      },
    },
  })
}

if (dry) {
  console.log('\n--dry: nada foi enviado.')
  process.exit(0)
}

if (mutations.length === 0) {
  console.log('\nNada a fazer.')
  process.exit(0)
}

const r = await fetch(`${base}/data/mutate/${dataset}?returnIds=true`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  body: JSON.stringify({ mutations }),
})
const corpo = await r.json()
if (!r.ok) {
  console.error('Falhou:', JSON.stringify(corpo, null, 2))
  process.exit(1)
}

console.log(`\nOK — galeria criada em ${(corpo.results || []).length} pagina(s).`)
