import assert from 'node:assert/strict'
import fs from 'node:fs'

// Verifica a saida real de `next build`, nao apenas as opcoes no codigo.
const prerender = JSON.parse(fs.readFileSync('.next/prerender-manifest.json', 'utf8'))
const appPaths = JSON.parse(fs.readFileSync('.next/server/app-paths-manifest.json', 'utf8'))
const minimum = 3600

for (const [route, entry] of Object.entries(prerender.routes)) {
  assert.ok(
    entry.initialRevalidateSeconds === false || entry.initialRevalidateSeconds >= minimum,
    `${route}: cache de ${entry.initialRevalidateSeconds}s; esperado ao menos ${minimum}s`,
  )
}

// Toda pagina de caminho fixo deve ter HTML pronto (inclui home e metadados).
for (const route of Object.keys(appPaths)) {
  if (!route.endsWith('/page') || route.includes('[') || route.startsWith('/_')) continue
  const path = route.replace('/(routes)', '').replace(/\/page$/, '') || '/'
  assert.ok(prerender.routes[path], `${path}: pagina ausente da geracao estatica`)
}

assert.ok(prerender.dynamicRoutes['/[...slug]'], 'CMS sem geracao estatica de parametros')
// Novas publicacoes continuam disponiveis sem rebuild.
for (const route of ['/[...slug]', '/blog/[slug]', '/servicos/[slug]', '/unidades/[slug]']) {
  assert.ok(prerender.dynamicRoutes[route], `${route}: configuracao dinamica ausente`)
  assert.notEqual(prerender.dynamicRoutes[route]?.fallback, false, `${route}: novas paginas bloqueadas`)
}

assert.ok(appPaths['/api/revalidate/route'], 'Receptor de revalidacao do CMS ausente')

const carousel = fs.readFileSync('components/reviews/ReviewsCarousel.tsx', 'utf8')
assert.ok(!carousel.includes('fetch('), 'O carrossel voltou a fazer chamadas HTTP')
assert.ok(!carousel.includes('/api/reviews'), 'O carrossel voltou a consumir a API')

console.log(`Cache validado: ${Object.keys(prerender.routes).length} rotas prontas, TTL >= ${minimum}s, CMS com geracao estatica e carrossel sem API.`)
