# Status da Migração para Sanity CMS

## 🎯 Objetivo

Tornar **100% do conteúdo textual** de todas as páginas editável via Sanity CMS, sem alterar o design ou funcionalidade do site.

## ✅ O que foi implementado

### 1. Schemas Criados (9 páginas singleton)

Todos os schemas foram criados em `/sanity/schemas/`:

| Schema | Arquivo | Status |
|--------|---------|--------|
| FAQ | `faqPage.ts` | ✅ Completo |
| Contato | `contactPage.ts` | ✅ Completo |
| Depoimentos | `testimonialsPage.ts` | ✅ Completo |
| Obrigado | `thankYouPage.ts` | ✅ Completo |
| Política de Privacidade | `privacyPolicy.ts` | ✅ Completo |
| Termos de Uso | `termsOfService.ts` | ✅ Completo |
| Atividades | `activitiesPage.ts` | ✅ Completo |
| Equipe | `teamPage.ts` | ✅ Completo |
| Estrutura | `structurePage.ts` | ✅ Completo |

### 2. Queries Criadas

Todas as 9 queries implementadas em `/lib/sanity/queries.ts`:

- `getFaqPage()`
- `getContactPage()`
- `getTestimonialsPage()`
- `getThankYouPage()`
- `getPrivacyPolicy()`
- `getTermsOfService()`
- `getActivitiesPage()`
- `getTeamPage()`
- `getStructurePage()`

### 3. Página Migrada (Exemplo Completo)

✅ **FAQ** - `/app/(routes)/perguntas-frequentes/page.tsx`
  - Busca dados do Sanity
  - Tem fallback completo
  - SEO dinâmico
  - Funciona com e sem Sanity

### 4. Documentação Criada

| Arquivo | Descrição |
|---------|-----------|
| `GUIA_MIGRACAO_SANITY.md` | Guia completo de como migrar as páginas restantes |
| `scripts/seed-sanity.ts` | Script para popular dados automaticamente |
| `SANITY_CMS_STATUS.md` | Este arquivo - status geral |

## 🔄 O que falta fazer

### Páginas a Migrar (8 restantes)

1. `/contato` - Usar modelo da FAQ + `getContactPage()`
2. `/depoimentos` - Usar modelo da FAQ + `getTestimonialsPage()`
3. `/obrigado` - Usar modelo da FAQ + `getThankYouPage()`
4. `/politica-de-privacidade` - Usar modelo da FAQ + `getPrivacyPolicy()`
5. `/termos-de-uso` - Usar modelo da FAQ + `getTermsOfService()`
6. `/sobre/atividades` - Usar modelo da FAQ + `getActivitiesPage()`
7. `/sobre/equipe` - Usar modelo da FAQ + `getTeamPage()`
8. `/sobre/estrutura` - Usar modelo da FAQ + `getStructurePage()`

### Popular Sanity Studio

Após migrar cada página, criar o documento no Studio:

```bash
# 1. Rodar o Studio
npm run sanity:dev

# 2. Acessar http://localhost:3333

# 3. Criar cada documento singleton manualmente
# OU usar o script de seed (quando tiver token):
npx tsx scripts/seed-sanity.ts
```

## 🚀 Como Continuar

### Opção 1: Migração Manual (Recomendado para aprender)

1. **Escolha uma página** da lista acima
2. **Abra o arquivo** da página (ex: `/app/(routes)/contato/page.tsx`)
3. **Siga o padrão** da página FAQ migrada
4. **Crie fallback** com conteúdo atual
5. **Implemente async** component e metadata
6. **Teste sem Sanity** (deve usar fallback)
7. **Popule no Studio**
8. **Teste com Sanity**

**Tempo estimado:** 15-20min por página = ~2.5h total

### Opção 2: Automação com IA

Continue pedindo ao Claude para migrar as páginas restantes usando o mesmo padrão.

### Opção 3: Script de Seed Completo

Expanda `/scripts/seed-sanity.ts` para incluir todas as páginas e rode uma vez só.

## 📊 Progresso

```
Páginas Migradas:    1/9  (11%)  ███░░░░░░░░░░░░░░░░░░░
Schemas Criados:     9/9  (100%) ████████████████████
Queries Criadas:     9/9  (100%) ████████████████████
```

## 💡 Padrão de Migração

Todas as páginas seguem este padrão (exemplo com FAQ):

```tsx
// 1. Import da query
import { getFaqPage } from '@/lib/sanity/queries'

// 2. Fallback com dados atuais
const FALLBACK_DATA = { /* dados hardcoded atuais */ }

// 3. Metadata dinâmica
export async function generateMetadata(): Promise<Metadata> {
  const data = await getFaqPage() || FALLBACK_DATA
  return { /* SEO usando data */ }
}

// 4. Component async
export default async function Page() {
  const data = await getFaqPage() || FALLBACK_DATA
  return <div>{data.hero.title}</div>
}
```

## 🎁 Benefícios Após Conclusão

- ✅ Cliente edita textos sem desenvolvedor
- ✅ Preview antes de publicar
- ✅ Versionamento de conteúdo
- ✅ Edição simultânea por múltiplos usuários
- ✅ Site funciona mesmo se Sanity cair (fallback)
- ✅ SEO 100% editável
- ✅ Zero alteração visual

## 🛠️ Stack de Schemas

### Páginas Simples (Texto + CTA)
- FAQ ✅
- Atividades ⏳
- Equipe ⏳
- Estrutura ⏳

### Páginas com Formulário
- Contato ⏳
- Obrigado ⏳

### Páginas com Conteúdo Rico
- Política de Privacidade ⏳
- Termos de Uso ⏳

### Páginas com Dados Externos
- Depoimentos ⏳ (usa schema `testimonial`)

## 📞 Próximo Passo Imediato

**Migrar a página de Contato:**

1. Abrir `/app/(routes)/contato/page.tsx`
2. Copiar estrutura da FAQ migrada
3. Ajustar para usar `getContactPage()`
4. Testar
5. Popular no Studio

Tempo: ~15 minutos

---

**Dúvidas?** Consulte `GUIA_MIGRACAO_SANITY.md` para detalhes.
