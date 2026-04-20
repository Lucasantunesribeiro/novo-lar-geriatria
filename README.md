# Novo Lar Geriatria

Site institucional e plataforma de conteudo da Novo Lar Geriatria, com foco em SEO local, paginas de servicos, paginas de unidades, blog, formularios de lead e edicao de conteudo via Sanity Studio.

O projeto usa Next.js App Router como aplicacao principal e Sanity como CMS. A maior parte das paginas de autoridade e das paginas comerciais ja esta estruturada no repositorio, com suporte a metadados, sitemap, robots, JSON-LD, integracoes Google e captura de leads.

## Status atual

Ultima auditoria local registrada nesta documentacao: `2026-04-09`.

- TypeScript: `npx tsc --noEmit --incremental false` passou na auditoria.
- Lint: `npm run lint` ficou sem resultado final por timeout durante a auditoria.
- Testes automatizados: nao foi detectada uma suite dedicada de testes.
- Sanity: o dataset `production` esta em uso e contem paginas, unidades, servicos, posts, depoimentos e configuracoes parciais.
- SEO: ha sitemap, robots, manifesto, metadados dinamicos, canonicals e dados estruturados em varias rotas.
- Area administrativa: o Studio esta disponivel em `/studio`.

Relatorios detalhados:

- [AUDITORIA-SANITY-STATUS-2026-04-09.md](./AUDITORIA-SANITY-STATUS-2026-04-09.md)
- [AUDITORIA-SEO-STATUS-2026-04-09.md](./AUDITORIA-SEO-STATUS-2026-04-09.md)
- [GUIA_CLIENTE_EDICAO_PAGINAS_SANITY.md](./GUIA_CLIENTE_EDICAO_PAGINAS_SANITY.md)
- [URLS_FALTANTES_ACESSO_COMPLETO_CLIENTE.md](./URLS_FALTANTES_ACESSO_COMPLETO_CLIENTE.md)

## Stack

- Next.js `^16.1.6`
- React `19.2.0`
- TypeScript `^5`
- Tailwind CSS 4
- Sanity `^4.13.0`
- next-sanity `^11.6.4`
- @sanity/client `^6.22.8`
- React Hook Form
- Zod
- Resend
- Radix UI
- Framer Motion
- Lucide React

## Funcionalidades principais

- Paginas institucionais da marca, sobre, estrutura, equipe, fotos e contato.
- Paginas de unidades em Porto Alegre e paginas locais por regiao/cidade.
- Paginas de servicos e condicoes de cuidado geriatrico.
- Blog com rota dinamica por slug.
- FAQ e paginas de perguntas.
- Comparativos comerciais por slug.
- Formularios de contato com validacao por Zod, honeypot anti-spam e gravacao de lead no Sanity.
- Envio opcional de email de lead via Resend.
- Reviews via Google Places API.
- Google Analytics 4 e Google Tag Manager.
- Sanity Studio embutido em `/studio`.
- Sitemap dinamico em `/sitemap.xml`.
- Robots em `/robots.txt`.
- Manifesto PWA em `/manifest.webmanifest`.

## Estrutura do projeto

```text
novo-lar-geriatria/
+-- app/
|   +-- (routes)/              # Rotas publicas do site
|   +-- api/                   # APIs de contato, reviews e page views
|   +-- studio/[[...tool]]/    # Sanity Studio embarcado
|   +-- layout.tsx             # Layout global
|   +-- page.tsx               # Home
|   +-- sitemap.ts             # Sitemap XML
|   +-- robots.ts              # Robots.txt
|   +-- manifest.ts            # Manifesto
+-- components/                # Componentes de UI, layout, secoes e forms
+-- lib/
|   +-- cms/                   # Resolucao/renderizacao de paginas CMS
|   +-- sanity/                # Cliente e queries Sanity
|   +-- seo/                   # Metadados e dados estruturados
|   +-- utils/                 # Utilitarios
+-- sanity/
|   +-- schemas/               # Schemas do CMS
+-- docs/                      # Guias tecnicos de queries Sanity
+-- public/                    # Imagens e assets estaticos
+-- scripts/                   # Scripts de auditoria/migracao
+-- types/                     # Tipos compartilhados
```

## Requisitos

- Node.js 20 ou superior. Node.js 22 e recomendado para manter paridade com a auditoria local mais recente.
- npm 10 ou superior.
- Projeto Sanity com dataset configurado.
- Token Sanity com permissao de escrita para formularios, page views e tarefas administrativas.
- Chaves Google somente se reviews, Analytics ou GTM forem usados em producao.
- Chave Resend somente se o envio de email do formulario estiver habilitado.

## Instalar e rodar

```bash
npm install
npm run dev
```

Acesse:

- Site: `http://localhost:3000`
- Sanity Studio: `http://localhost:3000/studio`

No Windows, para criar o arquivo local de ambiente:

```powershell
Copy-Item .env.example .env.local
```

Em macOS/Linux:

```bash
cp .env.example .env.local
```

Depois preencha `.env.local` com os valores reais.

## Variaveis de ambiente

| Variavel | Uso |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ID publico do projeto Sanity. |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset Sanity, normalmente `production`. |
| `NEXT_PUBLIC_SANITY_USE_CDN` | Define uso de CDN do Sanity para leituras publicas. |
| `SANITY_API_TOKEN` | Token privado usado para escrita de leads, page views e operacoes administrativas. |
| `NEXT_PUBLIC_SITE_URL` | Dominio canonico usado em SEO, sitemap e URLs absolutas. |
| `GOOGLE_PLACES_API_KEY` | Chave server-side para buscar reviews no Google Places. |
| `NEXT_PUBLIC_GOOGLE_PLACE_ID` | Place ID principal. |
| `NEXT_PUBLIC_GOOGLE_PLACE_ID_MOINHOS_LUCIANA` | Place ID da unidade Moinhos Luciana. |
| `NEXT_PUBLIC_GOOGLE_PLACE_ID_MOINHOS_BARAO` | Place ID da unidade Moinhos Barao. |
| `NEXT_PUBLIC_GOOGLE_PLACE_ID_PASSO_DAREIA` | Place ID da unidade Passo d'Areia. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ID do Google Analytics 4. |
| `NEXT_PUBLIC_GTM_ID` | ID do Google Tag Manager. |
| `RESEND_API_KEY` | Chave privada para envio de emails pelo Resend. |
| `RESEND_TO_EMAIL` | Email de destino dos leads enviados pelo Resend. |
| `CONTACT_EMAIL` | Variavel presente no exemplo; atualmente a API de contato usa `RESEND_TO_EMAIL` ou fallback interno. |

Nunca commite `.env.local`.

## Scripts

| Comando | Descricao |
| --- | --- |
| `npm run dev` | Sobe o ambiente local com Next.js. |
| `npm run build` | Gera build de producao. |
| `npm run start` | Executa o build de producao. |
| `npm run lint` | Executa ESLint. |
| `npm run analyze` | Executa build com bundle analyzer via `ANALYZE=true`. |

Comandos Sanity podem ser executados via CLI:

```bash
npx sanity dev
npx sanity deploy
```

O Studio tambem esta embarcado diretamente no Next.js em `/studio`.

## CMS e edicao de conteudo

O cliente deve editar conteudo pelo Sanity Studio em `/studio`. Para acessar, o usuario precisa ter conta Sanity e permissao no projeto correto.

Tipos principais de conteudo:

- Pagina
- Unidade
- Servico
- Categoria de servico
- Post do blog
- Depoimento
- Membro da equipe
- FAQ
- Configuracoes do site
- Header
- Footer
- Lead
- Page view

Para o passo a passo de edicao, use:

- [GUIA_CLIENTE_EDICAO_PAGINAS_SANITY.md](./GUIA_CLIENTE_EDICAO_PAGINAS_SANITY.md)

Para entender quais URLs ainda nao estao totalmente cobertas por controle do cliente:

- [URLS_FALTANTES_ACESSO_COMPLETO_CLIENTE.md](./URLS_FALTANTES_ACESSO_COMPLETO_CLIENTE.md)

## SEO e URLs

O SEO tecnico esta distribuido principalmente nestes arquivos:

- `app/sitemap.ts`
- `app/robots.ts`
- `app/manifest.ts`
- `lib/seo/metadata.ts`
- `lib/utils/seoPageFactory.tsx`
- `lib/cms/page.ts`
- `lib/cms/route.tsx`

Na auditoria de 2026-04-09 foram detectadas 120 URLs concretas disponiveis no projeto e 113 URLs no sitemap. O relatorio de SEO lista a ordem das URLs, recomendacoes de inclusao/remocao e oportunidades de melhoria.

Use o relatorio completo aqui:

- [AUDITORIA-SEO-STATUS-2026-04-09.md](./AUDITORIA-SEO-STATUS-2026-04-09.md)

## APIs internas

| Rota | Funcao |
| --- | --- |
| `/api/contact` | Recebe leads do formulario, valida dados, grava no Sanity e envia email se Resend estiver configurado. |
| `/api/reviews` | Busca reviews via Google Places API. Em desenvolvimento pode retornar mock se a chave nao estiver configurada. |
| `/api/views` | Registra/incrementa visualizacoes de pagina no Sanity. |

## Build e deploy

Fluxo recomendado antes de publicar:

```bash
npm install
npx tsc --noEmit --incremental false
npm run lint
npm run build
```

Em producao, configure as variaveis de ambiente no painel da hospedagem antes do build. O projeto e adequado para Vercel ou outro host compativel com Next.js App Router.

## Pendencias conhecidas

- `npm run lint` precisa ser executado ate concluir sem timeout.
- Nao ha suite automatizada de testes detectada no repositorio.
- `siteSettings` no Sanity esta incompleto para campos globais como nome do site, URL, GA e GTM.
- `headerConfig` e `footerConfig` estavam vazios na auditoria; o site depende de fallbacks ou configuracao manual.
- Existe slug duplicado em servicos: `cuidados-enfermagem`.
- A API de contato grava `unit` como string e `service` como campo, mas o schema de `lead` precisa estar alinhado com esse contrato.
- `/studio` deve ser revisado na politica de indexacao/protecao. O `robots.ts` bloqueia `/api`, `/_next`, `/admin` e `/obrigado`, mas nao bloqueia explicitamente `/studio`.
- Algumas URLs de servicos estavam disponiveis fora do sitemap na auditoria. Consulte o relatorio de SEO antes de publicar alteracoes.

## Troubleshooting

Se o Studio nao abrir:

- Verifique as variaveis Sanity.
- Confirme se o usuario tem acesso ao projeto Sanity.
- Rode `npm run dev` novamente e acesse `/studio`.

Se reviews nao aparecerem:

- Verifique `GOOGLE_PLACES_API_KEY`.
- Confirme os `NEXT_PUBLIC_GOOGLE_PLACE_ID_*`.
- Confirme se a Places API esta habilitada no Google Cloud.

Se o formulario grava no Sanity, mas nao envia email:

- Verifique `RESEND_API_KEY`.
- Verifique `RESEND_TO_EMAIL`.
- Consulte logs da rota `/api/contact`.

Se uma nova pagina criada no Sanity nao aparece publicamente:

- Confirme se o slug esta correto.
- Confirme se a rota correspondente existe em `app/(routes)` ou se a pagina esta coberta por uma rota dinamica.
- Confirme se a pagina esta publicada e marcada como indexavel quando fizer sentido para SEO.

## Documentacao adicional

- [docs/SANITY_QUERIES_GUIDE.md](./docs/SANITY_QUERIES_GUIDE.md)
- [docs/EXEMPLO_USO_QUERIES.md](./docs/EXEMPLO_USO_QUERIES.md)
- [SANITY_CMS_STATUS.md](./SANITY_CMS_STATUS.md)
- [STATUS_COMPLETO_SANITY.md](./STATUS_COMPLETO_SANITY.md)
- [SEO-ATUALIZACOES.md](./SEO-ATUALIZACOES.md)
- [SITEMAP-URLS-AUTORIDADE.md](./SITEMAP-URLS-AUTORIDADE.md)

## Observacoes de manutencao

- Mantenha novas paginas comerciais sincronizadas entre rota, metadados, sitemap e CMS.
- Toda nova URL indexavel deve ter title, description, canonical, conteudo unico e intencao clara.
- Conteudo local deve evitar duplicacao entre cidades/regioes; priorize informacao especifica por local.
- Ao alterar schemas Sanity, revise tambem queries, componentes consumidores e fluxo de migracao de conteudo.
- Ao alterar formulario ou schema de lead, teste gravacao no Sanity e envio de email no mesmo ciclo.
