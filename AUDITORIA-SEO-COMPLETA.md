# AUDITORIA SEO COMPLETA

Data da auditoria: 2026-04-07  
Escopo: repo atual + runtime local em `localhost:3000` + dataset ativo do Sanity

## Resumo executivo

**Nota SEO atual: 71/100**

Julgamento executivo: o projeto esta **bom tecnicamente**, mas **longe de excelencia operacional**. A camada de indexacao, metadata e renderizacao esta muito melhor do que em estados anteriores do projeto, porem a arquitetura de descoberta interna, a governanca do Sanity e algumas regressões recentes na home impedem o dominio de operar em nivel 85+.

### Problemas mais graves encontrados

1. **A home publica dados errados de unidades e aponta para uma rota inexistente.**  
   Evidencia: `components/home/UnitsSection.tsx` usa enderecos divergentes de `lib/site-data.ts` e o CTA "Ver detalhes da unidade" aponta para `/unidades`, que hoje responde `404`.

2. **O grafo interno principal nao expõe grande parte da expansão SEO.**  
   Evidencia: crawl local saindo de `/` encontrou apenas **62** URLs; o sitemap tem **113** URLs. Resultado: **53 URLs estao no sitemap, mas nao sao alcancaveis por navegacao interna a partir da home**.

3. **A governanca editorial do Sanity esta fraca para um projeto com 72 paginas SEO publicadas.**  
   Evidencia: no dataset atual existem **72 documentos `page` publicados**, com **0** preenchimentos de `primaryIntent`, **0** de `cluster`, **0** de `lastReviewedAt` e **0** paginas com `indexable=false`.

4. **Existem links internos quebrados e schema com alvo inexistente.**  
   Evidencia: `/servicos/fisioterapia-geriatrica` responde `404` mas segue linkado em `app/(routes)/porto-alegre/page.tsx`; `app/layout.tsx` injeta `WebSiteSchema` com SearchAction para `/search`, rota que hoje responde `404`.

### O que esta realmente bom

- `build`, `lint` e `typecheck` passam no estado atual.
- O sitemap atual esta tecnicamente consistente: **113/113 URLs do sitemap responderam `200` no runtime local**, com canonical presente e exatamente um `H1`.
- O projeto usa App Router, metadata por rota, JSON-LD em templates relevantes, unit pages reais e um conjunto amplo de paginas SEO.
- As paginas locais amostradas (`/canoas`, `/gravatai`, `/cachoeirinha/ilpi-em-porto-alegre`) estao honestas no texto renderizado: deixam claro que as unidades ficam em Porto Alegre.

### O que mais limita o crescimento organico hoje

- Baixa exposicao interna dos clusters SEO.
- Regressões recentes na home, justamente a pagina de maior autoridade interna.
- Governanca editorial insuficiente para escalar 72 paginas com seguranca semantica.

## Metodologia

### Leitura e inventario

Foram lidos e comparados:

- `package.json`
- `next.config.ts`
- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- rotas principais em `app/(routes)`
- rotas dinamicas de `blog`, `servicos`, `comparativos`, `perguntas` e `unidades`
- `lib/sanity/client.ts`
- `lib/sanity/queries.ts`
- `lib/cms/page.ts`
- `lib/utils/seoPageFactory.tsx`
- `sanity/schemas/page.ts`
- `types/cms.ts`
- `components/seo/JsonLd.tsx`
- `components/seo/LocalBusinessSchema.tsx`
- `components/seo-landing/SeoLandingPage.tsx`
- `components/seo-landing/SectionRenderer.tsx`
- `components/home/UnitsSection.tsx`
- `components/home/ServicesSection.tsx`
- `components/home/BlogSection.tsx`
- `components/home/TestimonialsSection.tsx`
- `components/layout/Header.tsx`
- `components/layout/FooterLight.tsx`
- `app/(routes)/sobre/localizacao/page.tsx`
- `app/(routes)/contato/page.tsx`
- `app/(routes)/depoimentos/page.tsx`
- `SEO-ATUALIZACOES.md`
- `SEO-EXPANSAO-70-PAGINAS.md`

### Validacao tecnica executada

- `npx tsc --noEmit` -> passou
- `npm run lint` -> passou
- `npm run build` -> passou
- crawl local de todas as URLs do sitemap
- consultas diretas no dataset do Sanity ativo

### Itens que exigem validacao em producao

- Google Search Console: cobertura, exclusoes e canibalizacao real
- Core Web Vitals reais
- Rich Results Test
- comportamento do dominio final em CDN, cache e bots reais

## Score 0 a 100

| Categoria | Peso | Nota |
| --- | ---: | ---: |
| Crawl/indexacao | 15 | **14/15** |
| SEO tecnico on-page | 20 | **15/20** |
| Arquitetura de informacao | 15 | **11/15** |
| Conteudo/intencao/diferenciacao | 20 | **14/20** |
| Internal linking e clusterizacao | 10 | **5/10** |
| Local SEO e honestidade semantica | 10 | **7/10** |
| Performance/UX com impacto em SEO | 5 | **3/5** |
| Governanca via Sanity e escalabilidade saudavel | 5 | **2/5** |
| **TOTAL** | **100** | **71/100** |

## Inventario de paginas e clusters

### Inventario publico atual

- URLs publicas no sitemap: **113**
- rotas compiladas no build: **123**
- documentos `page` publicados no Sanity: **72**
- posts de blog: **16**
- hub do blog: **1**
- comparativos: **8**
- perguntas long-tail: **6**
- hub FAQ: **1**
- paginas de servico detalhadas: **7**
- paginas de unidade real: **3**
- paginas de condicao: **21**
  - 14 gerais
  - 7 bairro/condicao
- paginas locais: **28**
  - 13 locais base/hub
  - 6 cidade -> `ilpi-em-porto-alegre`
  - 2 hubs de bairro
  - 7 bairro/condicao

### Clusters identificados

1. **Institucional**
   - `/sobre`
   - `/sobre/a-novo-lar`
   - `/sobre/equipe`
   - `/sobre/atividades`
   - `/sobre/estrutura`
   - `/sobre/fotos`
   - `/sobre/localizacao`
   - `/contato`
   - `/depoimentos`

2. **Comercial principal**
   - `/porto-alegre`
   - `/casa-de-repouso-em-porto-alegre`
   - `/residencial-geriatrico-porto-alegre`
   - `/residencial-geriatrico-em-porto-alegre`
   - `/residencia-assistida-porto-alegre`
   - `/residencia-para-idosos-porto-alegre`
   - `/clinica-geriatrica-porto-alegre`
   - `/ilpi-porto-alegre`
   - `/ilpi-em-porto-alegre`

3. **Condicao clinica**
   - `/cuidados-alzheimer`
   - `/cuidados-demencia`
   - `/cuidados-parkinson`
   - `/cuidados-paliativos-idosos`
   - `/cuidados-pacientes-cronicos`
   - `/cuidados-pacientes-neurologicos`
   - `/cuidados-pacientes-oncologicos`
   - `/cuidados-idosos-acamados`
   - `/cuidados-pos-avc`
   - `/cuidados-pos-cirurgicos-idosos`
   - `/cuidados-fragilidade-do-idoso`
   - `/cuidados-perda-cognitiva`
   - `/cuidados-mobilidade-reduzida`
   - `/cuidados-reabilitacao-geriatrica`

4. **Servicos**
   - `/servicos`
   - `/servicos/hospedagem-assistida-24h`
   - `/servicos/enfermagem-medico-24h`
   - `/servicos/nutricao-individualizada`
   - `/servicos/terapia-ocupacional`
   - `/servicos/musicoterapia-socializacao`
   - `/servicos/convenio-farmacia`
   - `/servicos/servicos-lavanderia`

5. **Local SEO**
   - cidades e regioes: `/canoas`, `/novo-hamburgo`, `/sao-leopoldo`, `/gravatai`, `/cachoeirinha`, `/esteio`, `/sapucaia-do-sul`, `/alvorada`, `/viamao`, `/vale-do-sinos`, `/regiao-metropolitana`, `/zona-norte-porto-alegre`
   - hubs de bairro: `/porto-alegre/moinhos-de-vento`, `/porto-alegre/passo-dareia`
   - cidade -> ILPI: `/canoas/ilpi-em-porto-alegre` etc.
   - bairro -> condicao: `/porto-alegre/moinhos-de-vento/cuidados-alzheimer` etc.

6. **FAQ / decisao**
   - `/perguntas-frequentes`
   - `/perguntas/*`

7. **Comparativos**
   - `/comparativos/*`

8. **Blog**
   - `/blog`
   - 16 artigos em `/blog/[slug]`

## Stack e arquitetura atual

### Stack

- Framework: **Next.js 16.1.6**
- Router: **App Router**
- UI: React 19
- CMS: **Sanity**
- build mode predominante: estatico/ISR com `revalidate 1m`

### Como o Sanity esta integrado

- cliente de leitura: `lib/sanity/client.ts`
- queries: `lib/sanity/queries.ts`
- schema de pagina SEO: `sanity/schemas/page.ts`
- adaptador CMS -> metadata: `lib/cms/page.ts`
- fabrica de pagina SEO: `lib/utils/seoPageFactory.tsx`
- renderer de pagina SEO: `components/seo-landing/SeoLandingPage.tsx`

### Como as paginas SEO estao sendo renderizadas

- a maior parte das landing pages usa `makeSeoPage(...)` em `lib/utils/seoPageFactory.tsx`
- o renderer final e `SeoLandingPage`, com `SectionRenderer`
- o metadata vem de `buildPageMetadata(...)` em `lib/cms/page.ts`, aplicado com `withCanonicalPath(...)`

### Ponto importante de arquitetura

Os documentos antigos do projeto falam em **fallback estatico** se o documento nao existir no Sanity. Isso **nao e mais verdade para o estado atual** das paginas feitas com `seoPageFactory`. Hoje, se o documento do CMS faltar, a rota tende a virar `404`.

## Diagnostico tecnico

### O que esta bom

- `app/sitemap.ts` esta bem melhor do que o padrao comum de projetos content-heavy:
  - agrega rotas estaticas, dinamicas, blog, units e pages do Sanity
  - usa canonical absoluto coerente com `SITE_URL`
  - deduplica URLs
- `app/robots.ts` esta consistente e publica `sitemap` e `host`
- `buildPageMetadata` respeita `indexable=false`
- `withCanonicalPath` padroniza canonical por rota
- blog post usa `ArticleSchema`
- FAQ usa `FAQPageSchema`
- unit pages usam schema de `NursingHome`

### Evidencias concretas

- **113/113 URLs do sitemap responderam `200`**
- **0 URLs do sitemap sem canonical**
- **0 URLs do sitemap sem exatamente 1 `H1`**
- **0 titulos duplicados no conjunto crawleado**
- **0 canonicals duplicados no conjunto crawleado**
- **0 grupos de `path` duplicado no dataset Sanity**

### O que esta ruim ou incompleto

1. **SearchAction aponta para rota inexistente**
   - `app/layout.tsx` injeta `<WebSiteSchema searchUrl="https://novolargeriatria.com.br/search" />`
   - nao existe rota `/search`
   - runtime local confirma `404`

2. **Schema `Service` esta semanticamente errado em alguns casos**
   - `components/seo/JsonLd.tsx` sempre serializa `areaServed` como `@type: City`
   - algumas paginas passam strings como:
     - `"Canoas e Grande Porto Alegre"`
     - `"Novo Hamburgo e Vale do Sinos"`
     - `"Regiao Metropolitana de Porto Alegre"`
   - isso nao deveria virar `City` unico com Wikidata fixo de Porto Alegre

3. **Existem duas implementacoes de LocalBusiness**
   - `components/seo/JsonLd.tsx` usa `MedicalClinic`
   - `components/seo/LocalBusinessSchema.tsx` usa `NursingHome`
   - isso aumenta o risco de divergencia de modelagem

4. **Footer polui a hierarquia de headings**
   - `components/layout/FooterLight.tsx` usa tres `h2` globais: "Institucional", "Explore", "Unidades"
   - isso nao quebra indexacao, mas piora a hierarquia on-page

5. **A rota `/fotos` redireciona com 307, nao 308**
   - runtime local: `/fotos` -> `307` -> `/sobre/fotos`
   - se a intencao e alias legado permanente, deveria ser redirect permanente

## Crawl e indexacao

### Nota: 14/15

### Por que a nota e alta

- o sitemap esta consistente com o runtime atual
- nao encontrei 404 dentro do sitemap
- canonical e `H1` estao sob controle no conjunto crawleado
- o Sanity nao tem paths duplicados
- `/obrigado` entrega `noindex, nofollow`
- `/studio` existe, mas no runtime local entrega meta robots `noindex`

### O que impediu nota maior

- links internos importantes ainda levam a `404` fora do sitemap
- o SearchAction global aponta para `/search`, que nao existe
- o principal gargalo de descoberta nao e de sitemap, e sim de navegacao interna

## SEO tecnico on-page

### Nota: 15/20

### Pontos fortes

- self-canonical bem aplicado
- metadata por rota
- Open Graph/Twitter presentes nos templates principais
- `ArticleSchema`, `BreadcrumbSchema`, `FAQPageSchema` e `ServiceSchema` ja existem

### Pontos fracos

1. `FooterLight` usa `h2` em todas as paginas
2. `ServiceSchema.areaServed` esta super-simplificado e semanticamente incorreto para regioes
3. SearchAction invalido em `WebSiteSchema`
4. prova social publica esta parcialmente hardcoded:
   - `components/home/TestimonialsSection.tsx` mostra "5,0 · 26 avaliacoes no Google"
   - `components/sections/GoogleReviews.tsx` esta desligado e retorna `null`
   - `app/(routes)/depoimentos/page.tsx` tambem depende de depoimentos hardcoded

### O que impede nota maior

- falta de consistencia semantica entre schema e rotas reais
- prova social nao conectada a fonte verificavel no front
- pequenas incoerencias estruturais no layout global

## Arquitetura de informacao

### Nota: 11/15

### O que esta bom

- existe separacao clara entre:
  - institucional
  - comercial
  - servicos
  - condicoes
  - local
  - comparativos
  - perguntas
  - blog
- as versoes bairro/condicao amostradas estao mais defensaveis do que uma doorway page rasa:
  - `/porto-alegre/moinhos-de-vento/cuidados-alzheimer`
  - `/porto-alegre/passo-dareia/cuidados-parkinson`

### O que esta ruim

- nao existe hub `/unidades`, embora a home ainda linke para ele
- a home foi revertida para sections antigas e hoje nao funciona mais como bom hub de discovery
- o cluster comercial tem sobreposicoes fortes de keyword

### O que impede nota maior

- IA boa no papel, mas nao suficientemente operacionalizada em hubs e navegacao real

## Conteudo, intencao e diferenciacao

### Nota: 14/20

### Evidencias de que o conteudo nao esta totalmente generico

- amostra comercial:
  - `/residencial-geriatrico-porto-alegre` tem proposta mais transacional
  - `/residencial-geriatrico-em-porto-alegre` esta mais orientada a guia / definicao
- amostra local:
  - `/canoas` explicita deslocamento e unidades em Porto Alegre
  - `/gravatai` explicita atendimento em unidades de Porto Alegre
- amostra bairro/condicao:
  - usa referencias locais concretas como Moinhos de Vento e Passo d'Areia

### Problemas de conteudo encontrados

1. **A home desatualizada distorce a mensagem de marca**
   - a section de unidades esta com nomes e enderecos errados
   - a section de servicos esta generica e nao reflete a malha real de 7 paginas de servico
   - a section de blog so mostra 4 posts antigos, enquanto o blog publicado tem 16

2. **Prova social esta forte em copy, mas fraca em verificabilidade**
   - widget de reviews desligado
   - rating numerico hardcoded

3. **Governanca editorial nao ajuda a diferenciar intencao**
   - 72/72 paginas sem `primaryIntent`
   - 72/72 paginas sem `cluster`
   - 72/72 paginas sem `lastReviewedAt`

### O que impede nota maior

- muito conteudo bom, mas pouco governado
- sections-chave da home regrediram para uma versao menos precisa

## Internal linking e clusterizacao

### Nota: 5/10

### Evidencia principal

Crawl BFS saindo de `/` e seguindo links internos:

- URLs encontradas a partir da home: **62**
- URLs publicas no sitemap: **113**
- URLs do sitemap que ficaram fora do grafo iniciado na home: **53**

### Exemplos de URLs que ficaram fora do grafo principal

- `/regiao-metropolitana`
- `/canoas`
- `/sao-leopoldo`
- `/novo-hamburgo`
- `/residencial-geriatrico-em-porto-alegre`
- `/residencia-para-idosos-porto-alegre`
- `/lar-para-idosos-em-porto-alegre`
- `/clinica-geriatrica-porto-alegre`
- varias `/cuidados-*`
- varias `/comparativos/*`
- varias `/perguntas/*`

### Diagnostico

O problema hoje **nao e indexacao basica**. O problema e **descoberta interna e distribuicao de autoridade**.

Mesmo com `relatedLinksSection` presente em **70/72** docs do Sanity, o grafo principal ainda nao traz essas paginas para dentro da navegacao do site. Ou seja: existe cluster interno no CMS, mas a descoberta a partir dos hubs com mais autoridade ainda esta fraca.

### O que impede nota maior

- home nao funciona como hub
- footer expõe poucos links estrategicos
- falta hub de unidades
- servicos e blog nao linkam fundo suficiente

## Local SEO e honestidade semantica

### Nota: 7/10

### O que esta bom

- o negocio tem **3 unidades reais** em `lib/site-data.ts`
- unit pages sao reais e usam schema `NursingHome`
- amostra de paginas locais esta honesta:
  - `/canoas`
  - `/gravatai`
  - `/cachoeirinha/ilpi-em-porto-alegre`
  - todas deixam claro que o atendimento acontece em Porto Alegre

### O que esta ruim

1. **A home contradiz a fonte oficial de dados**
   - `components/home/UnitsSection.tsx` diverge de `lib/site-data.ts`
   - isso e grave em Local SEO e em confianca

2. **A honestidade local nao esta formalmente garantida pelo schema**
   - apenas **4** paginas do CMS usam `locationNoticeSection`
   - isso nao prova engano nas demais, mas prova que a modelagem nao protege esse requisito

3. **Nome/titulo de unidade malformado na home**
   - "Moinhos de Vento · R. Barao de Santo Angelo, 406"

### O que impede nota maior

- dados da home estao incorretos
- a politica anti-greenwashing existe na documentacao, mas nao esta fortemente institucionalizada no modelo editorial

## Performance e UX com impacto em SEO

### Nota: 3/5

### Sinais positivos

- build static/ISR predominante
- Next Image em larga escala
- App Router
- apenas **2** arquivos `app/*` sao client
- a home em si usa majoritariamente server components

### Riscos arquiteturais provaveis

- existem **56** client components em `components/*`
- sections da home revertidas usam `Image fill` sem `sizes` em pontos importantes
- a home tem muitas areas visuais pesadas, com grids grandes e imagens grandes
- CTAs quebrados impactam UX, conversao e navegacao
- header sticky client-side + componentes mobile adicionais aumentam hidratacao em layout global

### O que impede nota maior

- risco de desperdicio de bytes nas imagens da home
- UX da home perdeu qualidade informacional e consistencia

## Governanca via Sanity e escalabilidade saudavel

### Nota: 2/5

### Evidencias concretas do dataset atual

- documentos `page`: **72**
- publicados: **72**
- `indexable=false`: **0**
- `primaryIntent` preenchido: **0**
- `cluster` preenchido: **0**
- `lastReviewedAt` preenchido: **0**
- com `serviceSchema`: **29**
- com `faqSection`: **30**
- com `relatedLinksSection`: **70**
- com `locationNoticeSection`: **4**

### Diagnostico

O projeto escalou o volume de paginas mais rapido do que a maturidade editorial do CMS.

Hoje o Sanity ja consegue publicar muito conteudo, mas ainda **nao governa** bem:

- intencao primaria
- cluster
- data de revisao
- politica de noindex
- obrigatoriedade de aviso geografico em paginas sensiveis

### Drift entre plano e implementacao

- `SEO-EXPANSAO-70-PAGINAS.md` fala em **70 novas paginas**
- o dataset real hoje tem **72 docs `page`**
- os docs falam em fallback estatico para as paginas SEO
- a implementacao atual via `seoPageFactory` nao opera mais nesse modelo de fallback para boa parte dessas rotas

### O que impede nota maior

- schema sem validacoes editoriais fortes
- documentacao e seeds nao representam perfeitamente o estado atual do CMS
- parte importante da home continua hardcoded e descolada da fonte oficial

## Consistencia da expansao SEO

### O que o plano prometia

`SEO-EXPANSAO-70-PAGINAS.md` registra:

- 70 novas paginas
- 60 documentos no Sanity + 10 posts de blog estaticos
- anti-greenwashing nas paginas de cidade
- page factory com fallback

### O que a implementacao real mostra hoje

- sitemap publico com **113 URLs**
- blog com **16 posts**
- dataset Sanity com **72** documentos `page`
- a malha existe e esta indexavel
- o fallback descrito nos docs nao representa mais fielmente o comportamento de boa parte das paginas SEO

### Julgamento

A expansao **nao esta perigosa por estar quebrada tecnicamente**. Essa fase foi superada.  
A expansao esta **perigosa por governanca fraca e distribuicao interna insuficiente**.

## Matriz de problemas

| Problema | Gravidade | Impacto em SEO | Impacto em conversao | Risco tecnico | Paginas afetadas | Arquivos afetados | Como corrigir | Esforco | Prioridade |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Home mostra enderecos errados e CTA para `/unidades` inexistente | Critico | Alto em Local SEO, confianca e CTR interno | Alto | Baixo | `/` | `components/home/UnitsSection.tsx`, `lib/site-data.ts` | trocar para fonte unica `UNITS` e linkar para `/unidades/[slug]` | Baixo | P0 |
| 53 URLs do sitemap estao fora do grafo iniciado na home | Alto | Alto em descoberta, prioridade interna e fluxo de autoridade | Medio | Medio | 53 URLs SEO | `components/home/*`, `components/layout/FooterLight.tsx`, hubs em `app/(routes)` | reforcar hubs, footer, sections da home e links contextuais | Medio | P0 |
| Link quebrado para `/servicos/fisioterapia-geriatrica` | Alto | Medio | Medio | Baixo | `/porto-alegre` | `app/(routes)/porto-alegre/page.tsx` | apontar para slug real ou remover CTA | Baixo | P0 |
| SearchAction aponta para `/search` inexistente | Medio | Medio | Baixo | Baixo | global | `app/layout.tsx`, `components/seo/JsonLd.tsx` | remover SearchAction ou criar rota real | Baixo | P1 |
| Section de servicos da home nao linka para as 7 paginas de servico | Alto | Alto em linking e clusterizacao | Medio | Baixo | `/` | `components/home/ServicesSection.tsx` | restaurar deep links ou redesenhar como hub real | Medio | P1 |
| Section de blog da home mostra so 4 posts, enquanto o blog tem 16 | Medio | Medio | Medio | Baixo | `/` | `components/home/BlogSection.tsx`, `lib/blog-data.ts` | usar posts reais ou feed curado atualizado | Baixo | P1 |
| GoogleReviews desativado e ratings hardcoded | Medio | Medio | Medio | Baixo | `/`, `/depoimentos`, `/sobre/localizacao` | `components/sections/GoogleReviews.tsx`, `components/home/TestimonialsSection.tsx`, `app/(routes)/depoimentos/page.tsx` | usar prova social verificavel ou reduzir claims numericos | Baixo | P1 |
| `ServiceSchema.areaServed` modelado como `City` mesmo para regiao/cidade composta | Medio | Medio | Baixo | Medio | locais e service pages | `components/seo/JsonLd.tsx` | ajustar modelagem de `areaServed` por tipo correto | Medio | P1 |
| Footer usa `h2` globais e polui heading hierarchy | Baixo | Baixo a medio | Baixo | Baixo | praticamente todas as paginas | `components/layout/FooterLight.tsx` | trocar por `p`/`span` com estilo | Baixo | P2 |
| Campos de governanca no Sanity estao vazios em 72/72 paginas | Alto | Alto para escala, QA e pruning | Medio | Medio | cluster SEO inteiro | `sanity/schemas/page.ts`, dataset Sanity, docs/seed | preencher e tornar obrigatorio `primaryIntent`, `cluster`, `lastReviewedAt`, politicas de indexacao | Medio | P0 |
| Politica anti-greenwashing nao esta garantida no schema | Medio | Medio | Medio | Medio | paginas locais | `sanity/schemas/page.ts`, sections locais | tornar aviso geografico obrigatorio onde aplicavel | Medio | P1 |
| `/fotos` redireciona com 307 para `/sobre/fotos` | Baixo | Baixo | Baixo | Baixo | `/fotos` | rota correspondente | se alias legado, usar 308 permanente | Baixo | P3 |

## Matriz de canibalizacao e risco de escala

| Caso | Quais paginas competem | Por que competem | Risco real ou teorico | Pagina principal | Pagina de apoio | O que diferenciar melhor |
| --- | --- | --- | --- | --- | --- | --- |
| Comercial sinonimos de residencial | `/residencial-geriatrico-porto-alegre` vs `/residencial-geriatrico-em-porto-alegre` | keyword muito proxima; uma transacional e outra guia | Real | `/residencial-geriatrico-porto-alegre` | `/residencial-geriatrico-em-porto-alegre` | deixar a principal comercial e a secundaria educacional, com linking explicito entre ambas |
| ILPI guia vs ILPI comercial | `/ilpi-porto-alegre` vs `/ilpi-em-porto-alegre` | ambas batem em "ILPI em Porto Alegre" | Real | `/ilpi-porto-alegre` | `/ilpi-em-porto-alegre` | uma precisa vender a solucao; a outra precisa ser guia, regulacao e checklist |
| Porto Alegre local hub vs casa de repouso | `/porto-alegre` vs `/casa-de-repouso-em-porto-alegre` | a rota local ja usa SEO title de casa de repouso em Porto Alegre | Real | `/casa-de-repouso-em-porto-alegre` | `/porto-alegre` | transformar `/porto-alegre` em hub local amplo, nao em duplicata comercial |
| Moradia assistida vs residencia para idosos | `/residencia-assistida-porto-alegre` vs `/residencia-para-idosos-porto-alegre` | ambas disputam intencao de moradia com suporte | Medio | `/residencia-assistida-porto-alegre` para autonomia parcial | `/residencia-para-idosos-porto-alegre` | diferenciar por grau de autonomia, elegibilidade e rotina |
| Clinica geriatrica vs residencial geriatrico | `/clinica-geriatrica-porto-alegre` vs `/residencial-geriatrico-porto-alegre` | mesma SERP tende a aproximar solucao clinica e residencial | Medio | `/residencial-geriatrico-porto-alegre` | `/clinica-geriatrica-porto-alegre` | elevar componente clinico e criterios de indicacao |
| Pergunta vs comparativo | `/perguntas/ilpi-ou-cuidador-particular` vs `/comparativos/ilpi-ou-cuidador-24h` | pergunta curta e comparativo longo disputam a mesma decisao | Real | `/comparativos/ilpi-ou-cuidador-24h` | `/perguntas/ilpi-ou-cuidador-particular` | pergunta deve resumir e apontar para comparativo, nao competir |
| Comparativos proximos | `/comparativos/ilpi-ou-home-care` vs `/comparativos/ilpi-ou-cuidador-24h` | ambas orbitam cuidado domiciliar versus institucional | Medio | depende da query | uma apoia a outra | diferenciar por escopo: estrutura de equipe, custo, risco operacional e cobertura 24h |
| Condicao geral vs bairro-condicao | `/cuidados-alzheimer` vs `/porto-alegre/moinhos-de-vento/cuidados-alzheimer` | compartilham condicao, mudando so o recorte local | Teorico a medio | `/cuidados-alzheimer` | a local | a local precisa ancorar acessibilidade, unidade e contexto de bairro |
| Cidades da regiao metropolitana | `/canoas`, `/novo-hamburgo`, `/gravatai`, `/sao-leopoldo`, etc. | mesma oferta central, mudando cidade de origem | Teorico, mas exige vigilancia | cada pagina local deve apoiar `/porto-alegre` e unidades | hubs locais | diferenciar por deslocamento, objecoes da familia, eixo viario e unidade recomendada |

## Quick wins (ate 24h)

1. Corrigir `components/home/UnitsSection.tsx` para usar `lib/site-data.ts`.
2. Trocar o CTA quebrado da home para `/unidades/[slug]` ou criar o hub `/unidades`.
3. Corrigir o link quebrado em `app/(routes)/porto-alegre/page.tsx`.
4. Remover o SearchAction de `app/layout.tsx` ou criar a rota `/search`.
5. Voltar a home a um papel de hub:
   - servicos com deep links reais
   - blog com posts reais
6. Trocar `h2` do footer por elementos nao-heading.

## Proximos 7 dias

1. Criar um hub de unidades real (`/unidades`) ou reorganizar todos os CTAs para unit pages reais.
2. Reforcar o grafo interno:
   - home
   - footer
   - hubs comerciais
   - hubs locais
   - ligacoes entre comparativos, perguntas e paginas comerciais
3. Unificar schema helpers:
   - um LocalBusiness
   - um ServiceSchema correto para area servida
4. Preencher no Sanity:
   - `primaryIntent`
   - `cluster`
   - `lastReviewedAt`
5. Revisar os pares comerciais com maior sobreposicao.

## Proximos 30 dias

1. Transformar o Sanity em sistema de governanca de SEO, nao apenas CMS de publicacao.
2. Atualizar schema `page` com validacoes editoriais e politicas por cluster.
3. Sincronizar docs, seeds e dataset real.
4. Implantar smoke tests de SEO no CI:
   - sitemap
   - status code
   - canonical
   - `H1`
   - links internos criticos
5. Revisar comparativos, perguntas e cidades mais proximas para pruning, merge ou noindex seletivo caso necessario.

## O que nao fazer

1. Nao criar mais paginas locais antes de consertar o grafo interno e a governanca.
2. Nao manter dados de unidade hardcoded em mais de um lugar.
3. Nao usar `AggregateRating` ou claims numericos sem fonte validavel no front.
4. Nao colapsar todas as paginas comerciais em uma so sem olhar a SERP; parte da diferenciacao atual e valida.
5. Nao transformar todas as cidades em doorway raso so trocando nome de municipio.

## Conclusao

### Nota final e julgamento executivo

- **Nota SEO atual: 71/100**
- Classificacao: **bom, mas longe de excelente**
- Maior risco atual: **distribuicao interna fraca + regressões na home + governanca editorial insuficiente**
- Maior ponto forte atual: **sitemap/indexacao/canonical/H1 estao tecnicamente bem controlados**
- O que mais limita o crescimento organico hoje: **o site nao esta distribuindo bem sua autoridade para a malha SEO que ja publicou**
- O que mais faria a nota subir rapido: **corrigir a home, links quebrados e hubs internos**

### O que precisa para chegar em 85+

- home coerente com a fonte real
- graph interno bem mais forte
- SearchAction e links quebrados corrigidos
- governanca minima no Sanity

### O que precisa para chegar em 90+

- pruning semantico fino dos pares comerciais
- controles editoriais reais no CMS
- prova social verificavel
- validacao em producao de cobertura, CWV e rich results

### Veredito final

Hoje o site **nao esta fraco**. A base tecnica esta acima da media e a indexacao atual esta saudavel.  
Mas o projeto ainda **nao opera como um sistema SEO maduro**. O maior gargalo nao e mais "estar indexavel"; e **estar bem orquestrado, bem governado e bem distribuido internamente**.
