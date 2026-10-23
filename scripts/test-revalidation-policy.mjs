import assert from 'node:assert/strict'
import { build } from 'esbuild'

const result = await build({
  stdin: {
    contents: `export * from './lib/sanity/cache'; export * from './lib/sanity/revalidation'`,
    resolveDir: process.cwd(),
    loader: 'ts',
  },
  bundle: true,
  platform: 'node',
  format: 'esm',
  write: false,
})
const policy = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`)
const plan = (values) => policy.revalidationPlan({_id: 'conteudo-teste', _type: 'page', operation: 'update', ...values})

for (const type of ['lead', 'pageView', 'tipo-desconhecido']) {
  assert.deepEqual(plan({_type: type}), {tags: [], paths: []})
}
for (const id of ['drafts.conteudo', 'versions.release.conteudo']) {
  assert.deepEqual(plan({_id: id}), {tags: [], paths: []})
}
const changed = plan({path: '/nova', previousPath: '/antiga'})
assert.deepEqual(new Set(changed.paths), new Set(['/nova', '/antiga', '/sitemap.xml']))
assert.ok(changed.tags.includes(policy.sanityPageTag('/nova')))
assert.ok(changed.tags.includes(policy.sanityPageTag('/antiga')))
assert.ok(!changed.tags.includes(policy.sanityPageTag('/pagina-sem-alteracao')))
assert.ok(plan({operation: 'delete', previousPath: '/apagada'}).paths.includes('/apagada'))
assert.ok(plan({_type: 'headerConfig'}).tags.includes(policy.sanityTypeTag('headerConfig')))
assert.ok(!plan({_type: 'headerConfig'}).paths.includes('/'))
assert.ok(plan({_type: 'serviceCategory'}).tags.includes(policy.sanityTypeTag('service')))
assert.ok(plan({_type: 'sanity.imageAsset'}).tags.includes(policy.SANITY_ASSET_TAG))
assert.deepEqual(plan({_type: 'sanity.imageAsset', operation: 'create'}), {tags: [], paths: []})
for (const path of ['//externo.com', '/teste?param=1', '/[...slug]', '/x#fragmento', '/x\\y']) {
  assert.deepEqual(plan({path}).paths, ['/sitemap.xml'])
}
assert.ok(policy.sanityPageTag('/' + 'a'.repeat(1000)).length <= 256)
assert.ok(policy.revalidationEventSchema.safeParse({_id: 'x', _type: 'page', operation: 'delete'}).success)
assert.ok(!policy.revalidationEventSchema.safeParse({_id: 'x', _type: 'page'}).success)
console.log('Politica validada: invalidacao seletiva, referencias, exclusao, renomeacao, rascunhos e leads/views ignorados.')
