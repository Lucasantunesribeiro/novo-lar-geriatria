/**
 * Gera `lib/cms/rotas-do-sistema.ts` a partir dos arquivos reais de app/(routes).
 *
 * Rode sempre que criar ou apagar uma pasta com `page.tsx` dentro de app/(routes):
 *   node scripts/gerar-rotas-do-sistema.mjs
 *
 * Por que existe: o Next sempre serve o arquivo antes da rota curinga
 * `app/(routes)/[...slug]`. Sem essa lista, um documento do Sanity apontando
 * para um endereco que ja tem arquivo cria uma pagina fantasma — dois enderecos
 * no ar, com conteudos diferentes.
 */
import fs from 'node:fs'
import path from 'node:path'

const RAIZ = path.resolve(process.cwd(), 'app/(routes)')
const DESTINO = path.resolve(process.cwd(), 'lib/cms/rotas-do-sistema.ts')

/** Caminhos encontrados no disco (ignora rotas dinamicas `[slug]`). */
function varrer(dir, segmentos, encontrados) {
  for (const entrada of fs.readdirSync(dir, {withFileTypes: true})) {
    if (entrada.isDirectory()) {
      if (entrada.name.startsWith('[')) continue
      varrer(path.join(dir, entrada.name), [...segmentos, entrada.name], encontrados)
    } else if (entrada.name === 'page.tsx') {
      encontrados.push('/' + segmentos.join('/'))
    }
  }
  return encontrados
}

const rotas = varrer(RAIZ, [], []).sort()

const conteudo = `/**
 * ARQUIVO GERADO — nao edite a mao.
 * Regenere com: node scripts/gerar-rotas-do-sistema.mjs
 *
 * Enderecos que ja tem um arquivo proprio em app/(routes)/.
 * O Next.js sempre serve o arquivo; a rota curinga [...slug] nunca os alcanca.
 */

export const ROTAS_COM_ARQUIVO_PROPRIO: readonly string[] = [
  '/',
${rotas.map((r) => `  '${r}',`).join('\n')}
]

const CONJUNTO = new Set(ROTAS_COM_ARQUIVO_PROPRIO)

/** O endereco ja e servido por um arquivo do projeto? */
export function temArquivoProprio(caminho: string): boolean {
  return CONJUNTO.has(normalizarCaminho(caminho))
}

/** Normaliza para a forma usada no Sanity: comeca com /, sem barra final. */
export function normalizarCaminho(caminho: string): string {
  if (!caminho) return '/'
  const comBarra = caminho.startsWith('/') ? caminho : \`/\${caminho}\`
  if (comBarra === '/') return '/'
  return comBarra.replace(/\\/+$/, '')
}
`

fs.writeFileSync(DESTINO, conteudo, 'utf8')
console.log(`OK — ${rotas.length + 1} rotas escritas em lib/cms/rotas-do-sistema.ts`)
