import assert from 'node:assert/strict'

// Use com `npm run start -- -p 3100`. Somente leituras e envios invalidos:
// nao cria leads, nao manda emails e nao incrementa visualizacoes no CMS.
const origin = process.argv[2] || 'http://localhost:3100'
assert.ok(['localhost', '127.0.0.1'].includes(new URL(origin).hostname), 'Use um servidor local')

const sitemapResponse = await fetch(`${origin}/sitemap.xml`)
assert.equal(sitemapResponse.status, 200)
assert.match(sitemapResponse.headers.get('netlify-cdn-cache-control') || '', /s-maxage=3600/)
const xml = await sitemapResponse.text()
const paths = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname)
assert.ok(paths.length > 0, 'Sitemap vazio')

let cursor = 0
await Promise.all(Array.from({length: 6}, async () => {
  while (cursor < paths.length) {
    const path = paths[cursor++]
    const response = await fetch(`${origin}${path}`)
    const html = await response.text()
    assert.equal(response.status, 200, path)
    assert.match(html, /<title>.+?<\/title>/, `${path}: titulo ausente`)
    assert.match(html, /<link[^>]*rel="canonical"[^>]*>/, `${path}: canonical ausente`)
    const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    assert.ok(schemas.length, `${path}: JSON-LD ausente`)
    for (const [, schema] of schemas) JSON.parse(schema)
  }
}))

for (const path of ['/', '/contato', '/sobre/equipe']) {
  const response = await fetch(`${origin}${path}`)
  assert.match(response.headers.get('cache-control') || '', /s-maxage=3600/, path)
  await response.text()
}

for (const path of ['/endereco-inexistente-auditoria', '/wp-login.php', '/blog/artigo-inexistente-auditoria']) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const response = await fetch(`${origin}${path}`)
    assert.equal(response.status, 404, path)
    assert.match(response.headers.get('cache-control') || '', /s-maxage=3600/, path)
    if (attempt === 1) assert.equal(response.headers.get('x-nextjs-cache'), 'HIT', path)
    await response.text()
  }
}

for (const path of ['/api/contact', '/api/views']) {
  const response = await fetch(`${origin}${path}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: '{}',
  })
  assert.equal(response.status, 400, `${path}: dados invalidos devem ser rejeitados`)
  await response.text()
}

const reviewsResponse = await fetch(`${origin}/api/reviews`)
assert.equal(reviewsResponse.status, 200)
const reviews = await reviewsResponse.json()
assert.ok(reviews.reviews.length > 0)
assert.ok(reviews.reviews.every((review) => review.rating >= 5))

const redirect = await fetch(`${origin}/sobre/a-novo-lar`, {redirect: 'manual'})
assert.equal(redirect.status, 308)
assert.equal(new URL(redirect.headers.get('location'), origin).pathname, '/sobre')

for (const path of ['/unidade-novo-lar-geriatria', '/unidade-barao-sto-angelo', '/unidade-luciana-de-abreu']) {
  const response = await fetch(`${origin}${path}`)
  assert.equal(response.status, 200, `${path}: rewrite da unidade`)
  await response.text()
}

console.log(`HTTP validado: ${paths.length} URLs do sitemap, SEO/JSON-LD, cache, 404s, APIs, redirect e 3 aliases de unidades.`)
