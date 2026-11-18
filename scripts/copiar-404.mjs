// Roda depois do `next build` (script "postbuild" do package.json).
//
// Copia a página 404 que o Next acabou de gerar para public/404.html.
// O plugin do Netlify copia a pasta public para a CDN depois do comando de
// build, então esse arquivo passa a ser servido direto da CDN, sem função.
// O netlify.toml usa esse arquivo nas regras de 404 forçado para caminhos de
// robô (/wp-*, /xmlrpc.php, /.env...), que antes acordavam a função do Next.
//
// O arquivo é gerado, não versionado (.gitignore): ele aponta para os
// arquivos /_next/static com hash daquele build.
import {copyFileSync, existsSync} from 'node:fs'

const origem = '.next/server/app/_not-found.html'
const destino = 'public/404.html'

if (!existsSync(origem)) {
  console.error(`copiar-404: ${origem} não existe; o build gerou a 404 em outro lugar.`)
  process.exit(1)
}

copyFileSync(origem, destino)
console.log(`copiar-404: ${origem} -> ${destino}`)
