// Teste local do assunto do e-mail de lead. Não envia e-mail nem chama API.
// Uso: npm run test:assunto
import assert from 'node:assert/strict'
import { assuntoDoLead, nomeDaUnidade } from '../lib/assunto-lead.ts'

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

console.log(`Assunto validado: ${casos.length} casos.`)
