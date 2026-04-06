# SEO — Atualizações realizadas

## 1. Páginas SEO criadas (12 páginas novas)

| Rota | Foco |
|------|------|
| `/porto-alegre` | Termo principal — casa de repouso em Porto Alegre |
| `/cuidados-alzheimer` | Condição — Alzheimer |
| `/cuidados-demencia` | Condição — Demência |
| `/ilpi-porto-alegre` | Termo institucional — ILPI |
| `/residencial-geriatrico-porto-alegre` | Termo alternativo — residencial geriátrico |
| `/porto-alegre/moinhos-de-vento` | Bairro — Moinhos de Vento |
| `/porto-alegre/passo-dareia` | Bairro — Passo d'Areia |
| `/regiao-metropolitana` | Região — Grande Porto Alegre |
| `/canoas` | Cidade — Canoas |
| `/sao-leopoldo` | Cidade — São Leopoldo |
| `/novo-hamburgo` | Cidade — Novo Hamburgo |
| `/porto-alegre/moinhos-de-vento/cuidados-alzheimer` | Combinação bairro + condição |

---

## 2. SEO on-page (por página)

Cada uma das 12 páginas tem:

- **`<title>` único** com palavra-chave principal + nome da marca
- **`meta description`** com até 160 caracteres, focada em conversão
- **H1 único** alinhado ao termo-alvo
- **Links internos** entre páginas relacionadas (bairros → cidade, condição → serviço)
- **Seção FAQ** com perguntas reais do segmento (residenciais, cuidados, custos)
- **Canonical** definido via `alternates.canonical` em `generateMetadata`
- **Open Graph** com título, descrição e imagem quando disponível via Sanity

---

## 3. Schema JSON-LD adicionado

- **ServiceSchema** — nas páginas de condição e cidade com `name`, `description`, `areaServed`
- **FAQPageSchema** — gerado automaticamente a partir das seções FAQ de cada página
- **BreadcrumbSchema** — gerado a partir dos breadcrumbs definidos no hero de cada página
- Schemas renderizados pelo componente `SeoLandingPage` sem necessidade de edição manual

---

## 4. Sitemap

Arquivo: `app/sitemap.ts`

Adicionado:
- As 12 páginas SEO com `priority` entre 0.7 e 0.9
- `/sobre/a-novo-lar` (estava faltando)
- `/perguntas-frequentes` (estava faltando)
- `/termos-de-uso` (estava faltando)
- Todos os 6 posts do blog via `BLOG_POSTS.map` (antes só 3 estavam indexados)
- Datas dos posts lidas diretamente de `lib/blog-data.ts` (antes eram hardcoded)

---

## 5. Canibalização — o que foi feito

- Cada página tem H1 e `<title>` com termo distinto
- Páginas de bairro (`/porto-alegre/moinhos-de-vento`) apontam para a cidade (`/porto-alegre`) via link interno, não competem
- Páginas de condição (`/cuidados-alzheimer`) linkam para `/servicos/` e não duplicam o conteúdo de serviço
- Página combinada (`/porto-alegre/moinhos-de-vento/cuidados-alzheimer`) tem copy diferenciado das duas páginas-pai
- `/ilpi-porto-alegre` e `/residencial-geriatrico-porto-alegre` tratam termos distintos e linkam entre si como "saiba mais"

---

## 6. Integração com Sanity CMS

Arquitetura implementada:

```
Sanity Studio → getPageByPath(path) → SeoLandingPage → SectionRenderer → renderers
```

Tipos de seção suportados no CMS:

| `_type` | Componente |
|---------|-----------|
| `seoHeroSection` | `SeoHero` |
| `twoColumnSection` | `TwoColumnSectionRenderer` |
| `checklistSection` | `ChecklistSectionRenderer` |
| `featureCardsSection` | `CardsSectionRenderer` |
| `faqSection` | `FaqSectionRenderer` |
| `statsSection` | `StatsSectionRenderer` |
| `locationNoticeSection` | `LocationNoticeRenderer` |
| `relatedLinksSection` | `RelatedLinksRenderer` |
| `ctaSection` | `CtaSectionRenderer` |

Campos SEO editáveis por página no Studio: `seo.title`, `seo.description`, `seo.ogImage`.

Seed: `lib/sanity/seed/seo-landing-pages.ts` — popula as 12 páginas com:
```bash
npx tsx lib/sanity/seed/seo-landing-pages.ts
```

---

## 7. Páginas editáveis pelo CMS

Todas as 12 páginas acima são 100% editáveis pelo Sanity Studio após o seed.

Cada página tem **fallback estático**: se o documento não existir no Sanity, o site renderiza o conteúdo original. Nada quebra sem o CMS.

---

## 8. O que depende de variável de ambiente

| Variável | Para que serve | Status |
|----------|---------------|--------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Ativar leitura do CMS | Configurada |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset Sanity | Configurada |
| `SANITY_API_TOKEN` | Seed + salvar leads | Configurada |
| `RESEND_API_KEY` | Enviar email com cada lead | **Ausente — configurar antes do deploy** |
| `RESEND_TO_EMAIL` | Destinatário dos leads | Usa `contato@novolargeriatria.com.br` como padrão se ausente |

Sem `RESEND_API_KEY`: leads são salvos no Sanity Studio mas **não chegam por email**.

---

## 9. Pronto para publicação

- [x] 12 páginas SEO com fallback estático
- [x] Build passando sem erros (`npm run build`)
- [x] Seed executado — 12 documentos no Sanity
- [x] Sitemap completo (todas as rotas indexadas)
- [x] Schema JSON-LD (Service, FAQ, Breadcrumb) em todas as páginas
- [x] Metadata único por página (`generateMetadata`)
- [x] Leads salvos no Sanity (`writeClient.create` em `app/api/contact/route.ts`)

---

## 10. Limitações e riscos residuais

| Item | Risco | Observação |
|------|-------|-----------|
| `RESEND_API_KEY` ausente | Médio | Leads chegam só no Studio, não por email. Configurar antes de ir ao ar. |
| Domínio Resend não verificado | Médio | `from: noreply@novolargeriatria.com.br` exige verificação de domínio no painel Resend. |
| Schema `lead` no Sanity | Baixo | Se o schema `lead` não estiver publicado no Studio, `writeClient.create` falha silenciosamente (não quebra o form). |
| Imagens das páginas SEO | Baixo | Seções sem imagem usam layout texto. Adicionar `seo.ogImage` no Studio melhora compartilhamento social. |
| Rich Results Test | Baixo | Validar pelo menos 1 página em [search.google.com/test/rich-results](https://search.google.com/test/rich-results) após o deploy. |
