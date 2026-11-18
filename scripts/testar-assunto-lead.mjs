// Teste local do assunto do e-mail de lead. Não envia e-mail nem chama API.
// Uso: npm run test:assunto
import assert from 'node:assert/strict'
import { assuntoDoLead, nomeDaUnidade, rotuloDaUnidade } from '../lib/assunto-lead.ts'

const casos = [
  [{ unit: 'moinhos-luciana-de-abreu' }, 'Novo Lead — Unidade Luciana de Abreu'],
  [{ unit: 'unidade-luciana-de-abreu' }, 'Novo Lead — Unidade Luciana de Abreu'],
  [{ unit: 'moinhos-barao-de-santo-angelo' }, 'Novo Lead — Unidade Barão de Santo Ângelo'],
  [{ unit: 'passo-dareia' }, "Novo Lead — Unidade Passo d'Areia"],
  [{ unit: 'slug-que-nao-existe' }, 'Novo Lead — Site'],
  [{ service: 'Fisioterapia' }, 'Novo Lead — Serviço Fisioterapia'],
  [{}, 'Novo Lead — Site'],
]

for (const [dados, esperado] of casos) {
  const assunto = assuntoDoLead(dados)
  console.log(`${JSON.stringify(dados).padEnd(42)} -> ${assunto}`)
  assert.equal(assunto, esperado)
}
assert.equal(nomeDaUnidade(undefined), 'Site')

// Linha "Unidade" do corpo do e-mail: nome curto, ou o valor original.
const corpo = [
  ['moinhos-luciana-de-abreu', 'Luciana de Abreu'],
  ['unidade-barao-sto-angelo', 'Barão de Santo Ângelo'],
  ['passo-dareia', "Passo d'Areia"],
  ['slug-que-nao-existe', 'slug-que-nao-existe'],
]
for (const [slug, esperado] of corpo) {
  const rotulo = rotuloDaUnidade(slug)
  console.log(`corpo Unidade: ${slug.padEnd(28)} -> ${rotulo}`)
  assert.equal(rotulo, esperado)
}

console.log(`Assunto validado: ${casos.length} casos. Corpo validado: ${corpo.length} casos.`)
