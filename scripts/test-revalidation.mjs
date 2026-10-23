import assert from 'node:assert/strict'
import { createHmac, randomBytes } from 'node:crypto'
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import net from 'node:net'
import os from 'node:os'
import path from 'node:path'
import { once } from 'node:events'

// Testa o Next de producao e sua assinatura/cache reais. So a leitura do CMS
// para caminhos exclusivos do teste e simulada; nenhum dado externo e escrito.
const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'novo-lar-revalidate-'))
const fixtureFile = path.join(dir, 'fixture.json')
const statsFile = path.join(dir, 'stats.json')
const preload = path.join(dir, 'cms.cjs')
const workingSitemap = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8')
const project = path.join(dir, 'project')
fs.mkdirSync(project)
// O teste nao pode deixar paginas ou respostas simuladas no build de trabalho.
fs.cpSync('.next', path.join(project, '.next'), {
  recursive: true,
  filter: (source) => !path.relative('.next', source).split(path.sep).includes('cache'),
})
fs.copyFileSync('package.json', path.join(project, 'package.json'))
fs.copyFileSync('next.config.ts', path.join(project, 'next.config.ts'))
fs.symlinkSync(path.resolve('node_modules'), path.join(project, 'node_modules'), 'junction')
const secret = randomBytes(32).toString('hex')
const nonce = randomBytes(8).toString('hex')
const originalPath = `/auditoria-cms-${nonce}`
const renamedPath = `${originalPath}-novo`
const untouchedPath = `${originalPath}-inalterado`
const doc = (route, title) => ({
  _id: `seo-auditoria-${route.slice(1)}`, _type: 'page', path: route,
  title, published: true, indexable: true, seo: {title},
  sections: [{_key: 'texto', _type: 'richTextSection', title}],
})
const state = {pages: {[originalPath]: null, [untouchedPath]: doc(untouchedPath, 'CONTROLE_INALTERADO')}, posts: [], services: []}
const save = () => fs.writeFileSync(fixtureFile, JSON.stringify(state))
save()
fs.writeFileSync(statsFile, '{}')
fs.writeFileSync(preload, `
const fs = require('node:fs');
const originalFetch = globalThis.fetch;
globalThis.fetch = async function(input, init) {
  const url = new URL(typeof input === 'string' || input instanceof URL ? input : input.url);
  if (!url.hostname.endsWith('.sanity.io') || !url.pathname.includes('/data/query/')) return originalFetch(input, init);
  let params = url.searchParams;
  if ((init?.method || (input instanceof Request ? input.method : 'GET')) === 'POST') {
    const body = JSON.parse(init?.body || await input.clone().text());
    params = new URLSearchParams({query:body.query, ...Object.fromEntries(Object.entries(body.params || {}).map(([k,v])=>['$'+k,JSON.stringify(v)]))});
  }
  const state = JSON.parse(fs.readFileSync(process.env.NOVOLAR_CMS_FIXTURE, 'utf8'));
  const raw = params.get('$path'); const route = raw ? JSON.parse(raw) : null;
  if (route && route.startsWith('/auditoria-cms-')) {
    const stats = JSON.parse(fs.readFileSync(process.env.NOVOLAR_CMS_STATS, 'utf8'));
    stats[route] = (stats[route] || 0) + 1;
    fs.writeFileSync(process.env.NOVOLAR_CMS_STATS, JSON.stringify(stats));
    return new Response(JSON.stringify({result:state.pages[route] || null}), {headers:{'content-type':'application/json'}});
  }
  const response = await originalFetch(input, init);
  if (params.get('query')?.includes('indexable != false')) {
    const body = await response.json();
    body.result.push(...Object.values(state.pages).filter(Boolean).map(p=>({path:p.path})));
    return new Response(JSON.stringify(body), {status:response.status,headers:{'content-type':'application/json'}});
  }
  if (params.get('query')?.includes('*[_type == "blogPost" && defined(slug.current)]') || params.get('query') === '*[_type == "service"]{slug}') {
    const body = await response.json();
    body.result.push(...(params.get('query').includes('blogPost') ? state.posts : state.services));
    return new Response(JSON.stringify(body), {status:response.status,headers:{'content-type':'application/json'}});
  }
  return response;
};
`)

const socket = net.createServer()
socket.listen(0, '127.0.0.1')
await once(socket, 'listening')
const port = socket.address().port
await new Promise((resolve) => socket.close(resolve))
const origin = `http://127.0.0.1:${port}`
let child
let logs = ''

async function start(value) {
  child = spawn(process.execPath, ['--require', preload, path.resolve('node_modules/next/dist/bin/next'), 'start', '.', '-p', String(port)], {
    cwd: project,
    env: {...process.env, SANITY_REVALIDATE_SECRET: value, NOVOLAR_CMS_FIXTURE: fixtureFile, NOVOLAR_CMS_STATS: statsFile},
    stdio: ['ignore', 'pipe', 'pipe'],
    windowsHide: true,
  })
  child.stdout.on('data', (data) => {logs += data})
  child.stderr.on('data', (data) => {logs += data})
  const deadline = Date.now() + 30000
  while (Date.now() < deadline) {
    if (child.exitCode !== null) throw new Error('Servidor encerrou antes do teste')
    try {const r = await fetch(`${origin}/robots.txt`); await r.text(); return} catch { /* iniciando */ }
    await new Promise((resolve) => setTimeout(resolve, 200))
  }
  throw new Error('Servidor nao iniciou no prazo')
}

async function stop() {
  if (child && child.exitCode === null) {
    const ended = once(child, 'exit')
    child.kill()
    await ended
  }
}

async function read(route, status, marker) {
  const response = await fetch(origin + route)
  const html = await response.text()
  assert.equal(response.status, status, route)
  if (marker) assert.ok(html.includes(marker), `${route}: conteudo esperado ausente`)
  return response
}

async function webhook(payload, key = secret) {
  const body = typeof payload === 'string' ? payload : JSON.stringify(payload)
  const timestamp = Date.now()
  const digest = createHmac('sha256', key).update(`${timestamp}.${body}`).digest('base64url')
  return fetch(`${origin}/api/revalidate`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'sanity-webhook-signature': `t=${timestamp},v1=${digest}`},
    body,
  })
}
const event = (values) => ({_id: 'seo-auditoria', _type: 'page', operation: 'update', ...values})
async function publish(values) {
  const response = await webhook(event(values))
  assert.equal(response.status, 200)
  assert.equal((await response.json()).revalidated, true)
}

try {
  await start(secret)
  const unsigned = await fetch(`${origin}/api/revalidate`, {method: 'POST', body: '{}'})
  assert.equal(unsigned.status, 401)
  assert.equal((await webhook(event({path: originalPath}), 'senha-incorreta')).status, 401)
  assert.equal((await webhook('JSON invalido')).status, 400)
  assert.equal((await webhook({_id: 'incompleto', _type: 'page'})).status, 400)

  await read(originalPath, 404)
  await read(untouchedPath, 200, 'CONTROLE_INALTERADO')
  const controlReads = JSON.parse(fs.readFileSync(statsFile))[untouchedPath]
  assert.ok(controlReads > 0, 'A leitura de controle deve passar pelo CMS simulado')
  state.pages[originalPath] = doc(originalPath, 'PUBLICACAO_V1')
  save()
  await read(originalPath, 404) // Sem aviso, o 404 continua guardado.
  await publish({operation: 'create', path: originalPath})
  await read(originalPath, 200, 'PUBLICACAO_V1')
  assert.equal((await read(untouchedPath, 200)).headers.get('x-nextjs-cache'), 'HIT')
  assert.equal(JSON.parse(fs.readFileSync(statsFile))[untouchedPath], controlReads)

  state.pages[originalPath] = doc(originalPath, 'EDICAO_V2')
  save()
  await read(originalPath, 200, 'PUBLICACAO_V1')
  for (const ignored of [{_type: 'pageView'}, {_type: 'lead'}, {_id: 'drafts.teste'}, {_id: 'versions.release.teste'}]) {
    const response = await webhook(event({path: originalPath, ...ignored}))
    assert.equal(response.status, 200)
    assert.equal((await response.json()).ignored, true)
  }
  await read(originalPath, 200, 'PUBLICACAO_V1')
  await publish({path: originalPath})
  await read(originalPath, 200, 'EDICAO_V2')

  state.pages[originalPath] = null
  state.pages[renamedPath] = doc(renamedPath, 'RENOMEADO_V3')
  save()
  await publish({path: renamedPath, previousPath: originalPath})
  await read(originalPath, 404)
  await read(renamedPath, 200, 'RENOMEADO_V3')
  let sitemap = await (await fetch(`${origin}/sitemap.xml`)).text()
  assert.ok(sitemap.includes(renamedPath))
  assert.ok(!sitemap.includes(`${originalPath}</loc>`))

  state.pages[renamedPath] = null
  save()
  await publish({operation: 'delete', previousPath: renamedPath})
  await read(renamedPath, 404)
  sitemap = await (await fetch(`${origin}/sitemap.xml`)).text()
  assert.ok(!sitemap.includes(renamedPath))
  const postSlug = `auditoria-artigo-${nonce}`
  const serviceSlug = `auditoria-servico-${nonce}`
  state.posts = [{slug: postSlug}]
  state.services = [{slug: {current: serviceSlug}}]
  save()
  await publish({_type: 'blogPost', operation: 'create'})
  await publish({_type: 'service', operation: 'create'})
  sitemap = await (await fetch(`${origin}/sitemap.xml`)).text()
  assert.ok(sitemap.includes(`/blog/${postSlug}`), 'Artigo novo deve entrar no sitemap')
  assert.ok(sitemap.includes(`/servicos/${serviceSlug}`), 'Servico novo deve entrar no sitemap')
  console.log('Integracao OK: assinatura, publicacao sobre 404, edicao no primeiro acesso, renomeacao, exclusao, sitemap e pagina nao afetada preservada em cache.')

  await stop()
  await start('')
  assert.equal((await webhook(event({path: originalPath}))).status, 503)
  console.log('Protecao OK: segredo ausente bloqueia a revalidacao; leads, views e rascunhos nao invalidam cache.')
} catch (error) {
  // Nao despejar logs do servidor: eles podem conter URLs ou dados do CMS.
  console.error(error)
  const reasons = logs.split('\n').filter((line) => /Error:|ENOENT|Cannot find|ERR_|Failed to/.test(line)).slice(-3)
  for (const reason of reasons) console.error(reason.replaceAll(secret, '<secret>').replace(/https?:\/\/\S+/g, '<url>'))
  if (logs.includes('EADDRINUSE')) console.error('Porta local ocupada')
  process.exitCode = 1
} finally {
  await stop()
  fs.rmSync(dir, {recursive: true, force: true})
  assert.equal(fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8'), workingSitemap, 'O teste nao deve alterar o sitemap do build de trabalho')
}
