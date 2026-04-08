# SEO Expansão — 70 Novas Páginas

Documentação da expansão de SEO realizada em abril/2026.
Stack: Next.js 16 App Router + Sanity CMS.

---

## Visão Geral

| Onda | Tema | Páginas |
|------|------|---------|
| Onda 1 | Condição clínica | 12 |
| Onda 1 | Intenção comercial | 8 |
| Onda 1 | Blog (alto valor) | 10 |
| Onda 2 | Cidades da região | 8 |
| Onda 2 | Termos técnicos | 6 |
| Onda 2 | FAQ/Decisão | 6 |
| Onda 3 | Bairro × condição | 6 |
| Onda 3 | Cidade + ILPI | 6 |
| Onda 3 | Comparativos | 8 |
| **Total** | | **70** |

---

## Onda 1 — Condição Clínica (12 páginas)

| Rota | Keyword alvo | Diferencial de cuidado |
|------|-------------|----------------------|
| `/cuidados-parkinson` | cuidados parkinson idoso | Fisioterapia anti-freezing, suporte mobilidade |
| `/cuidados-alzheimer` ¹ | residencial alzheimer Porto Alegre | Rotina estruturada, segurança cognitiva |
| `/cuidados-demencia` ¹ | cuidados demência em ILPI | Estimulação cognitiva diária |
| `/cuidados-fragilidade-do-idoso` | síndrome da fragilidade idoso | Programa de reabilitação funcional |
| `/cuidados-idosos-acamados` | cuidados idosos acamados | Prevenção escaras, fisioterapia passiva |
| `/cuidados-mobilidade-reduzida` | idoso mobilidade reduzida | Adaptações físicas + fisioterapia |
| `/cuidados-pacientes-cronicos` | pacientes crônicos em ILPI | Monitorização médica contínua |
| `/cuidados-pacientes-neurologicos` | idoso com doença neurológica | Equipe neurológica + fonoaudiologia |
| `/cuidados-pacientes-oncologicos` | idoso com câncer em ILPI | Suporte paliativo e conforto |
| `/cuidados-paliativos-idosos` | cuidados paliativos idoso Porto Alegre | Dignidade, controle de dor |
| `/cuidados-perda-cognitiva` | perda cognitiva leve idoso | Estimulação precoce + psicólogo |
| `/cuidados-pos-avc` | cuidados pós-AVC idoso | Reabilitação neuromotora intensiva |
| `/cuidados-pos-cirurgicos-idosos` | recuperação cirúrgica idoso | Enfermagem pós-operatória 24h |
| `/cuidados-reabilitacao-geriatrica` | reabilitação geriátrica Porto Alegre | Fisio + TO + fono multidisciplinar |

¹ Já existiam antes da expansão.

---

## Onda 1 — Intenção Comercial (8 páginas)

| Rota | Keyword alvo | Ângulo diferenciador |
|------|-------------|---------------------|
| `/hospedagem-temporaria-idosos-porto-alegre` | hospedagem temporária idoso POA | Respiro familiar, pós-cirúrgico |
| `/casa-de-repouso-em-porto-alegre` | casa de repouso Porto Alegre | Termo popular — custo, estrutura, comparativo |
| `/ilpi-em-porto-alegre` | ILPI em Porto Alegre | Guia técnico: o que é, como escolher |
| `/residencial-geriatrico-em-porto-alegre` | residencial geriátrico POA | Diferença entre ILPI, residencial, casa de repouso |
| `/residencia-para-idosos-porto-alegre` | residência para idosos POA | Foco na adaptação e conforto |
| `/lar-para-idosos-em-porto-alegre` | lar de idosos Porto Alegre | Termo afetivo — humanização e vínculo |
| `/clinica-geriatrica-porto-alegre` | clínica geriátrica POA | Diferença clínica x ILPI; quando cada um |
| `/acolhimento-pos-alta-hospitalar-idosos` | alta hospitalar idoso POA | Transição hospital → ILPI sem risco |

---

## Onda 1 — Blog Posts (10 novos artigos)

Adicionados ao array `BLOG_POSTS` em `lib/blog-data.ts`.
Sem seed Sanity necessário — rota `/blog/[slug]` usa `generateStaticParams` estático.

| Slug | Título |
|------|--------|
| `quando-procurar-uma-ilpi` | Quando Procurar uma ILPI: 7 Sinais de que é Hora de Buscar Ajuda |
| `sinais-de-que-o-idoso-precisa-de-cuidados-24h` | Sinais de que o Idoso Precisa de Cuidados 24h |
| `diferenca-entre-ilpi-casa-de-repouso-e-residencial-geriatrico` | Diferença entre ILPI, Casa de Repouso e Residencial Geriátrico |
| `como-escolher-casa-de-repouso-em-porto-alegre` | Como Escolher uma Casa de Repouso em Porto Alegre |
| `alzheimer-quando-a-familia-nao-consegue-cuidar-sozinha` | Alzheimer: Quando a Família Não Consegue Cuidar Sozinha |
| `demencia-senil-cuidados-e-sinais-de-alerta` | Demência Senil: Cuidados e Sinais de Alerta |
| `parkinson-em-idosos-cuidados-diarios` | Parkinson em Idosos: Cuidados no Dia a Dia |
| `cuidados-paliativos-idosos-como-funciona` | Cuidados Paliativos para Idosos: Como Funciona |
| `idoso-pos-avc-quais-cuidados-sao-necessarios` | Idoso Pós-AVC: Quais Cuidados São Necessários |
| `hospedagem-temporaria-para-idosos-como-funciona` | Hospedagem Temporária para Idosos: Como Funciona |

---

## Onda 2 — Cidades da Região Metropolitana (8 páginas)

| Rota | Cidade | Abordagem |
|------|--------|-----------|
| `/gravatai` | Gravataí | Famílias de Gravataí atendidas nas unidades de POA |
| `/cachoeirinha` | Cachoeirinha | Idem |
| `/esteio` | Esteio | Idem |
| `/sapucaia-do-sul` | Sapucaí do Sul | Idem |
| `/alvorada` | Alvorada | Idem |
| `/viamao` | Viamão | Idem |
| `/vale-do-sinos` | Vale do Sinos | Cobre Novo Hamburgo + São Leopoldo + entorno |
| `/zona-norte-porto-alegre` | Zona Norte POA | Referência à unidade Passo da Areia |

**Regra anti-greenwashing:** Nenhuma dessas páginas afirma presença física local. Todas indicam claramente que as unidades estão em Porto Alegre e que atendemos famílias dessas cidades.

---

## Onda 2 — Termos Técnicos (6 páginas)

| Rota | Diferencial vs páginas existentes |
|------|----------------------------------|
| `/clinica-para-idosos-em-porto-alegre` | vs `/clinica-geriatrica-porto-alegre` — foco em modelo assistencial, não marca |
| `/cuidado-integral-ao-idoso-em-porto-alegre` | Conceito de cuidado completo: médico + social + psico |
| `/residencia-assistida-porto-alegre` | Explica modalidade "residência assistida" como sinônimo de ILPI de médio porte |
| `/internacao-geriatrica-porto-alegre` | Quando o idoso precisa de internação × quando ILPI é suficiente |
| `/internacao-para-pacientes-cronicos-porto-alegre` | Pacientes com doenças crônicas complexas |
| `/internacao-para-pacientes-neurologicos-porto-alegre` | AVC, Parkinson, demência com dependência alta |

---

## Onda 2 — FAQ/Decisão — Rota Dinâmica `/perguntas/[slug]` (6 páginas)

Arquivo: `app/(routes)/perguntas/[slug]/page.tsx`

| Slug | Pergunta |
|------|---------|
| `casa-de-repouso-quanto-custa` | Casa de repouso: quanto custa em Porto Alegre? |
| `visitas-em-ilpi-como-funciona` | Visitas em ILPI: como funciona? |
| `idoso-com-alzheimer-quando-internar` | Idoso com Alzheimer: quando considerar uma ILPI? |
| `ilpi-ou-cuidador-particular` | ILPI ou cuidador particular: qual escolher? |
| `o-que-levar-na-admissao-do-idoso` | O que levar na admissão do idoso na ILPI |
| `como-funciona-a-adaptacao-na-ilpi` | Como funciona a adaptação do idoso na ILPI? |

---

## Onda 3 — Bairro × Condição (6 páginas)

| Rota | Alvo |
|------|------|
| `/porto-alegre/moinhos-de-vento/cuidados-demencia` | Demência + bairro Moinhos |
| `/porto-alegre/moinhos-de-vento/cuidados-paliativos` | Paliativos + bairro Moinhos |
| `/porto-alegre/moinhos-de-vento/cuidados-parkinson` | Parkinson + bairro Moinhos |
| `/porto-alegre/passo-dareia/cuidados-demencia` | Demência + unidade Passo da Areia |
| `/porto-alegre/passo-dareia/cuidados-parkinson` | Parkinson + unidade Passo da Areia |
| `/porto-alegre/passo-dareia/idosos-acamados` | Acamados + unidade Passo da Areia |

---

## Onda 3 — Cidade + ILPI — Rota Dinâmica `/[cidade]/ilpi-em-porto-alegre` (6 páginas)

Arquivos individuais em `app/(routes)/[cidade]/ilpi-em-porto-alegre/page.tsx`

| Rota | Cidade origem |
|------|--------------|
| `/canoas/ilpi-em-porto-alegre` | Canoas |
| `/sao-leopoldo/ilpi-em-porto-alegre` | São Leopoldo |
| `/novo-hamburgo/ilpi-em-porto-alegre` | Novo Hamburgo |
| `/gravatai/ilpi-em-porto-alegre` | Gravataí |
| `/cachoeirinha/ilpi-em-porto-alegre` | Cachoeirinha |
| `/viamao/ilpi-em-porto-alegre` | Viamão |

---

## Onda 3 — Comparativos — Rota Dinâmica `/comparativos/[slug]` (8 páginas)

Arquivo: `app/(routes)/comparativos/[slug]/page.tsx`

| Slug | Comparação |
|------|-----------|
| `ilpi-ou-home-care` | ILPI vs home care |
| `ilpi-ou-cuidador-24h` | ILPI vs cuidador domiciliar 24h |
| `ilpi-ou-residencia-assistida` | ILPI vs residência assistida |
| `ilpi-ou-hospedagem-temporaria` | ILPI vs hospedagem temporária |
| `casa-de-repouso-ou-residencial-geriatrico` | Casa de repouso vs residencial geriátrico |
| `alzheimer-em-casa-ou-ilpi` | Alzheimer em casa vs ILPI |
| `demencia-em-casa-ou-ilpi` | Demência em casa vs ILPI |
| `parkinson-em-casa-ou-ilpi` | Parkinson em casa vs ILPI |

---

## Arquitetura Técnica

### Factory Pattern

Todas as páginas estáticas (exceto dinâmicas e blog) usam `lib/utils/seoPageFactory.tsx`:

```tsx
import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/rota', {
  title: 'Título fallback',
  description: 'Descrição fallback',
})

export { generateMetadata }
export default PageComponent
```

- Metadados vêm do Sanity se documento existir; caso contrário usa fallback.
- Renderiza `<SeoLandingPage>` com dados do Sanity.
- Retorna 404 se documento Sanity ausente (seed obrigatório).

### Rotas Dinâmicas

| Rota | Arquivo | Slugs controlados por |
|------|---------|----------------------|
| `/perguntas/[slug]` | `app/(routes)/perguntas/[slug]/page.tsx` | `PERGUNTAS_SLUGS` array exportado |
| `/comparativos/[slug]` | `app/(routes)/comparativos/[slug]/page.tsx` | `COMPARATIVOS_SLUGS` array exportado |

### Seed Sanity

Seed completo em `lib/sanity/seed/seo-expansion-70-pages.ts`.

```bash
npx tsx lib/sanity/seed/seo-expansion-70-pages.ts
```

Requer env vars: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_TOKEN`.

Cobre: 60 documentos Sanity (todos exceto os 10 blog posts, que são estáticos).

---

## Anti-Canonicalização

Nenhum par de páginas targeta a mesma keyword principal:

| Par | `/ilpi-porto-alegre` | `/ilpi-em-porto-alegre` |
|-----|---------------------|------------------------|
| Keyword alvo | "ILPI Porto Alegre" (landing comercial) | "ILPI em Porto Alegre" (guia de como escolher) |
| Ângulo | Apresentação da Novo Lar | Educativo — o que é ILPI, como avaliar |

| Par | `/residencial-geriatrico-porto-alegre` | `/residencial-geriatrico-em-porto-alegre` |
|-----|---------------------------------------|------------------------------------------|
| Keyword alvo | "residencial geriátrico POA" (landing) | Guia comparativo de termos |
| Ângulo | Landing da Novo Lar | Explica diferenças entre modalidades |

| Par | `/porto-alegre` | `/casa-de-repouso-em-porto-alegre` |
|-----|----------------|------------------------------------|
| Keyword alvo | Brand landing + região | "casa de repouso Porto Alegre" (termo popular) |

Todas as 70 novas páginas têm H1 único, estrutura de conteúdo distinta e canonical apontando para si mesmas.

---

## Sitemap

Arquivo `app/sitemap.ts` atualizado. Importa `PERGUNTAS_SLUGS` e `COMPARATIVOS_SLUGS` das respectivas page.tsx para manter lista de slugs em fonte única.

Build produz 123 rotas estáticas + dinâmicas.

---

## Checklist de Publicação

- [x] Build sem erros (123 páginas compiladas)
- [x] Sitemap atualizado com todas as 70+ rotas
- [x] Seed script criado (`seo-expansion-70-pages.ts`)
- [x] Blog posts adicionados ao `lib/blog-data.ts`
- [x] Rotas dinâmicas `/perguntas/[slug]` e `/comparativos/[slug]` com `generateStaticParams`
- [x] Todos os page.tsx com metadados fallback únicos
- [x] Nenhuma afirmação de presença física falsa nas páginas de cidade
- [ ] Executar seed: `npx tsx lib/sanity/seed/seo-expansion-70-pages.ts`
- [ ] Validar páginas no Rich Results Test (schema JSON-LD)
- [ ] Submeter sitemap no Google Search Console após deploy
