/**
 * Confere se todo campo que aponta para uma aba ("group") pertence a um tipo
 * que declara essa aba ("groups").
 *
 *   npm run validar:studio
 *
 * Rode antes de publicar qualquer mexida em schema. NAO esta amarrado ao
 * `build` de proposito: depende do esbuild, que aqui vem junto do pacote
 * `sanity` e nao e uma dependencia declarada — prender o build a ele
 * arriscaria derrubar o deploy num ambiente que instale so o essencial.
 *
 * Por que existe: o Sanity so reclama disso quando o painel abre, no navegador.
 * Nem `next build` nem `sanity schema validate` pegam — o Studio simplesmente
 * quebra com "Field group 'x' is not defined in schema for type 'Y'".
 * Este script carrega os schemas de verdade e faz a checagem antes do deploy.
 */
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import {pathToFileURL} from 'node:url'
import {build} from 'esbuild'

const RAIZ = process.cwd()
const ENTRADA = path.join(RAIZ, 'sanity/schemas/index.ts')
const SAIDA = path.join(os.tmpdir(), `schemas-novolar-${Date.now()}.mjs`)

await build({
  entryPoints: [ENTRADA],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: SAIDA,
  logLevel: 'silent',
  // `sanity` so serve os helpers defineField/defineType, que devolvem o objeto
  // como veio — trocamos por versoes locais para nao carregar o pacote inteiro.
  plugins: [
    {
      name: 'sanity-leve',
      setup(construtor) {
        construtor.onResolve({filter: /^sanity$/}, () => ({
          path: 'sanity',
          namespace: 'sanity-leve',
        }))
        construtor.onLoad({filter: /.*/, namespace: 'sanity-leve'}, () => ({
          contents: `
            export const defineField = (f) => f
            export const defineType = (t) => t
            export const defineArrayMember = (m) => m
          `,
          loader: 'js',
        }))
      },
    },
  ],
})

const {schemaTypes} = await import(pathToFileURL(SAIDA).href)
fs.unlinkSync(SAIDA)

const problemas = []

/** Percorre um tipo e seus campos aninhados conferindo as abas. */
function conferir(tipo, caminho) {
  if (!tipo || typeof tipo !== 'object') return

  const abas = new Set((tipo.groups || []).map((g) => g.name))
  const nome = tipo.name || '(sem nome)'
  const onde = caminho ? `${caminho} > ${nome}` : nome

  for (const campo of tipo.fields || []) {
    if (campo?.group && !abas.has(campo.group)) {
      problemas.push({
        tipo: onde,
        campo: campo.name,
        aba: campo.group,
        abasDoTipo: [...abas],
      })
    }
    conferir(campo, onde)
    for (const item of campo?.of || []) conferir(item, `${onde} > ${campo.name}[]`)
  }

  for (const item of tipo.of || []) conferir(item, `${onde}[]`)
}

for (const tipo of schemaTypes) conferir(tipo, '')

if (problemas.length === 0) {
  console.log(`OK — ${schemaTypes.length} tipos conferidos, nenhuma aba solta.`)
  process.exit(0)
}

console.error(`${problemas.length} campo(s) apontando para uma aba que o tipo nao declara:\n`)
for (const p of problemas) {
  console.error(`  tipo  : ${p.tipo}`)
  console.error(`  campo : ${p.campo}`)
  console.error(`  aba   : '${p.aba}'`)
  console.error(
    `  o tipo declara: ${p.abasDoTipo.length ? p.abasDoTipo.join(', ') : '(nenhuma aba)'}\n`
  )
}
process.exit(1)
