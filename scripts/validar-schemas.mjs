/**
 * Checagens do schema que o Studio so acusa no navegador.
 *
 *   npm run validar:studio
 *
 * Confere:
 *   1. campo apontando para uma aba que o tipo nao declara;
 *   2. dois tipos registrados com o mesmo nome;
 *   3. tipo usado num array (`of`) que nao esta registrado.
 *
 * Nao esta amarrado ao `build` de proposito: depende do esbuild, que aqui vem
 * junto do pacote `sanity` e nao e dependencia declarada.
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
const registrados = new Set(schemaTypes.map((t) => t?.name).filter(Boolean))

// ── 1. abas ──────────────────────────────────────────────────────
function conferirAbas(tipo, caminho) {
  if (!tipo || typeof tipo !== 'object') return

  const abas = new Set((tipo.groups || []).map((g) => g.name))
  const onde = caminho ? `${caminho} > ${tipo.name || '(anônimo)'}` : tipo.name

  for (const campo of tipo.fields || []) {
    if (campo?.group && !abas.has(campo.group)) {
      problemas.push(
        `aba inexistente: ${onde} > ${campo.name} aponta para '${campo.group}' ` +
          `(o tipo declara: ${[...abas].join(', ') || 'nenhuma'})`
      )
    }
    conferirAbas(campo, onde)
    for (const item of campo?.of || []) conferirAbas(item, `${onde} > ${campo.name}[]`)
  }
  for (const item of tipo.of || []) conferirAbas(item, `${onde}[]`)
}

// ── 2. nomes repetidos ───────────────────────────────────────────
const vistos = new Map()
for (const tipo of schemaTypes) {
  if (!tipo?.name) continue
  vistos.set(tipo.name, (vistos.get(tipo.name) || 0) + 1)
}
for (const [nome, quantas] of vistos) {
  if (quantas > 1) problemas.push(`nome repetido: '${nome}' registrado ${quantas}x`)
}

// ── 3. tipo usado num array mas nao registrado ───────────────────
const BUILTIN = new Set([
  'string', 'text', 'number', 'boolean', 'image', 'file', 'array', 'object',
  'reference', 'block', 'slug', 'date', 'datetime', 'url', 'geopoint', 'crossDatasetReference',
])

function conferirReferenciasDeTipo(tipo, onde) {
  if (!tipo || typeof tipo !== 'object') return
  for (const campo of tipo.fields || []) {
    for (const item of campo?.of || []) {
      const t = item?.type
      if (t && !BUILTIN.has(t) && !registrados.has(t) && !item.fields) {
        problemas.push(
          `tipo não registrado: ${onde} > ${campo.name}[] usa '${t}', que não está em schemaTypes`
        )
      }
      conferirReferenciasDeTipo(item, `${onde} > ${campo.name}[]`)
    }
    conferirReferenciasDeTipo(campo, `${onde} > ${campo.name}`)
  }
}

for (const tipo of schemaTypes) {
  conferirAbas(tipo, '')
  conferirReferenciasDeTipo(tipo, tipo.name)
}

if (problemas.length === 0) {
  console.log(`OK — ${schemaTypes.length} tipos conferidos, nenhum problema.`)
  process.exit(0)
}

console.error(`${problemas.length} problema(s):\n`)
for (const p of problemas) console.error('  ' + p)
process.exit(1)
