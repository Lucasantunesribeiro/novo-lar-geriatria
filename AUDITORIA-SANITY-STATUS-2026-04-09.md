# Auditoria Sanity - Status Completo

Data da auditoria: 2026-04-09  
Projeto: Novo Lar Geriatria  
Escopo: integracao Sanity CMS, schemas, queries, Studio, dados publicados, rotas que dependem do CMS e riscos operacionais.

## Resumo executivo

O projeto tem uma integracao Sanity funcional e em producao, com Studio montado em `/studio`, leitura de paginas genericas por `path`, fallback local para conteudo critico e uso do Sanity tambem para unidades, servicos, blog, depoimentos, leads e page views.

O status geral e bom para leitura publica, mas ainda incompleto para governanca editorial e operacao de producao. Os principais pontos de atencao sao: configuracoes globais incompletas no Sanity, ausencia de documentos `headerConfig` e `footerConfig`, metadados editoriais incompletos em 72 paginas, duplicidade de slug em servico, divergencia entre schema de lead e payload salvo pela API, e scripts operacionais de Sanity ausentes em `package.json`.

## Ambiente e validacao

- Framework: Next.js 16.1.6 com App Router.
- React: 19.2.0.
- Sanity: `sanity` 4.13.0, `next-sanity` 11.6.4, `@sanity/client` 6.22.8.
- Studio: `app/studio/[[...tool]]/page.tsx`, usando `NextStudio`.
- Config principal: `sanity.config.ts`, `sanity/env.ts`, `sanity/schemas/index.ts`.
- Dataset consultado: `production`.
- Variaveis locais detectadas: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_TOKEN`, Google Places, GA, GTM e `NEXT_PUBLIC_SITE_URL`.
- TypeScript: `npx tsc --noEmit --incremental false` passou.
- Lint: `npm run lint` nao concluiu em 124 segundos e foi encerrado por timeout.
- Testes automatizados: nao foram detectados arquivos de teste, Vitest, Jest, Playwright ou Cypress.

## Estado atual dos dados no Sanity

Contagens no dataset `production`:

| Tipo | Quantidade |
|---|---:|
| `page` | 86 |
| `page` publicadas | 86 |
| `page` publicadas e indexaveis | 86 |
| `unit` | 3 |
| `service` | 13 |
| `serviceCategory` | 3 |
| `blogPost` | 16 |
| `testimonial` | 6 |
| `teamMember` | 3 |
| `siteSettings` | 1 |
| `headerConfig` | 0 |
| `footerConfig` | 0 |
| `lead` | 0 |
| `pageView` | 3 |

Qualidade editorial das paginas Sanity:

| Checagem | Quantidade |
|---|---:|
| Paginas sem `seo.title` | 0 |
| Paginas sem `seo.description` | 0 |
| Paginas sem secoes | 0 |
| Paginas sem `indexable` definido explicitamente | 72 |
| Paginas sem `primaryIntent` | 72 |
| Paginas sem `cluster` | 72 |
| Paginas sem `lastReviewedAt` | 72 |

## Conteudo publicado

Unidades publicadas:

- `passo-dareia`: Passo d'Areia - Rua Brigadeiro Oliveira Neri, 175, status `active`, sem `googlePlaceId`.
- `moinhos-barao-de-santo-angelo`: Moinhos de Vento - Rua Barao de Santo Angelo, 406, status `active`, sem `googlePlaceId`.
- `moinhos-luciana-de-abreu`: Moinhos de Vento - Rua Luciana de Abreu, 151, status `active`, sem `googlePlaceId`.

Servicos publicados no Sanity:

- `acompanhamento-medico`
- `alimentacao`
- `atividades-terapeuticas`
- `convenio-farmacia`
- `cuidados-enfermagem` aparece 2 vezes no dataset
- `enfermagem-medico-24h`
- `fisioterapia`
- `hospedagem-assistida-24h`
- `musicoterapia-socializacao`
- `nutricao-individualizada`
- `servicos-lavanderia`
- `terapia-ocupacional`

Posts publicados no Sanity:

- 16 posts encontrados.
- Os posts de 2026 e 2025 estao disponiveis para as rotas dinamicas de `/blog/[slug]`.
- A camada de blog combina Sanity com fallback local de `lib/blog-data.ts`.

## Integracao no codigo

Leitura Sanity:

- `lib/sanity/client.ts` cria `client` de leitura quando `NEXT_PUBLIC_SANITY_PROJECT_ID` existe.
- `lib/sanity/queries.ts` centraliza consultas para unidades, servicos, blog, paginas genericas, singletons, header e footer.
- `lib/cms/page.ts` busca pagina por `path` e monta metadata com fallback.
- `lib/cms/route.tsx` fornece helpers para rotas com fallback e rotas CMS-backed.
- `lib/utils/seoPageFactory.tsx` cria paginas SEO que exigem documento Sanity; se o documento nao existir, retorna `notFound()`.

Escrita Sanity:

- `app/api/contact/route.ts` tenta criar documentos `lead`.
- `app/api/views/route.ts` cria ou incrementa documentos `pageView`.
- Scripts de seed e migracao existem em `scripts/` e `lib/sanity/seed/`, mas nao ha scripts correspondentes em `package.json`.

Fallbacks:

- Unidades, servicos e depoimentos usam mock/fallback quando Sanity nao esta configurado ou falha.
- Header e footer usam fallback local quando `headerConfig` e `footerConfig` nao existem.
- Paginas antigas de SEO misturam fallback estatico e renderizacao Sanity.

## Pontos fortes

- Arquitetura hibrida reduz risco de pagina critica ficar indisponivel quando o Sanity falha.
- Modelo `page` e flexivel e suporta secoes, breadcrumbs, FAQ, CTA, galerias, links relacionados e schema de servico.
- Sitemap inclui paginas Sanity publicadas e indexaveis.
- Metadata de paginas CMS usa canonical via `withCanonicalPath`.
- JSON-LD existe para Organization, WebSite, Breadcrumb, FAQ, Service, Article e unidades.
- O dataset tem conteudo amplo para estrategia local, condicoes, perguntas e comparativos.

## Problemas e riscos

### Criticos

- `lead.unit` no schema e uma referencia para `unit`, mas `app/api/contact/route.ts` envia string. Isso pode quebrar consistencia dos leads ou impedir relatorios confiaveis.
- `app/api/contact/route.ts` envia `service`, mas o schema `lead` nao declara o campo `service`. O dado pode ser aceito como campo extra pelo Sanity, mas nao fica governado pelo Studio nem por validacoes.
- Existe slug duplicado em `service`: `cuidados-enfermagem` aparece duas vezes. Isso torna a rota `/servicos/cuidados-enfermagem` ambigua e pode afetar SEO, sitemap e edicao.

### Altos

- `headerConfig` e `footerConfig` nao existem no dataset, embora `siteSettings` tenha referencias para eles e as queries esperem esses documentos.
- `siteSettings` existe, mas `siteName`, `siteUrl`, `googleAnalyticsId` e `googleTagManagerId` estao nulos.
- As 3 unidades nao possuem `googlePlaceId`, apesar de existirem variaveis de ambiente para Place IDs.
- 72 paginas publicadas nao possuem `primaryIntent`, `cluster`, `lastReviewedAt` e `indexable` definidos explicitamente.
- `sanity/env.ts` usa API version padrao `2025-11-04`, enquanto `lib/sanity/client.ts` usa `2024-01-01`; essa divergencia pode dificultar debug.
- `npm run lint` nao concluiu no tempo observado, entao o status de lint do projeto esta indeterminado.

### Medios

- `package.json` nao tem scripts de Sanity, embora docs internas mencionem comandos como `npm run sanity`.
- `sanity/structure.ts` usa `S.documentTypeListItems()` sem organizar singletons e fluxos editoriais; para 86 paginas, isso tende a ficar pouco governavel.
- O plugin `disableVersionCheckPlugin` altera comportamento interno do Studio e deve ser documentado como decisao tecnica.
- Fallbacks e mocks podem mascarar erro de configuracao em producao se nao houver monitoramento.
- `dist/` esta rastreado no Git, apesar de parecer artefato antigo de build/Studio. Isso aumenta ruido operacional.

## Recomendacoes prioritarias

1. Corrigir o schema e a API de leads: decidir se `unit` sera string ou referencia, adicionar `service` ao schema ou remover do payload, e criar validacao consistente.
2. Resolver a duplicidade de `service` com slug `cuidados-enfermagem`: manter um documento canonico, arquivar ou renomear o outro, e validar referencias.
3. Criar e referenciar `headerConfig` e `footerConfig` no `siteSettingsSingleton`.
4. Completar `siteSettings`: `siteName`, `siteUrl`, GA/GTM se forem gerenciados pelo CMS, logo, favicon e imagem OG padrao.
5. Popular `googlePlaceId` das 3 unidades no Sanity para alinhar unidades, reviews e dados estruturados.
6. Normalizar as 72 paginas sem governanca editorial: preencher `indexable`, `primaryIntent`, `cluster` e `lastReviewedAt`.
7. Unificar `apiVersion` entre Studio, client publico, client de escrita e scripts.
8. Adicionar scripts operacionais no `package.json`, por exemplo `sanity:dev`, `sanity:build`, `sanity:deploy`, `sanity:dataset:list`, `sanity:seed`, com nomes alinhados aos docs.
9. Criar testes ou checagens automatizadas para queries criticas, metadata, sitemap, robots, lead creation e slugs duplicados.
10. Revisar o timeout de lint e garantir que `dist/`, `.next`, `node_modules` e artefatos rastreados nao entrem em analises indevidas.

## Status final

Sanity esta integrado e alimenta a maior parte da estrategia SEO atual, mas o projeto ainda nao esta em estado totalmente governado para operacao editorial continua. O maior risco nao e falta de conteudo; e consistencia entre schema, API, sitemap, singletons e governanca de paginas.
