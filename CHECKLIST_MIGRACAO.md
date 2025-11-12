# Checklist de Migração Sanity CMS

Use este checklist para acompanhar o progresso da migração.

## 🏗️ Infraestrutura (100% ✅)

- [x] Schemas criados em `/sanity/schemas/`
- [x] Queries criadas em `/lib/sanity/queries.ts`
- [x] Documentação criada (`GUIA_MIGRACAO_SANITY.md`)
- [x] Script de seed criado (`scripts/seed-sanity.ts`)
- [x] Exemplo completo (página FAQ)

## 📄 Páginas para Migrar

### 1. Perguntas Frequentes (✅ CONCLUÍDA)

- [x] Migrar arquivo page.tsx
- [x] Implementar busca Sanity
- [x] Criar FALLBACK_DATA
- [x] Implementar generateMetadata()
- [x] Testar sem Sanity (fallback)
- [x] Popular dados no Studio
- [x] Testar com Sanity
- [x] Validar SEO

### 2. Contato (⏳ PENDENTE)

**Arquivo:** `/app/(routes)/contato/page.tsx`

- [ ] Migrar arquivo page.tsx
- [ ] Usar `getContactPage()` query
- [ ] Criar FALLBACK_DATA com formulário
- [ ] Implementar generateMetadata()
- [ ] Preservar lógica do formulário
- [ ] Testar sem Sanity (fallback)
- [ ] Popular dados no Studio
- [ ] Testar com Sanity
- [ ] Validar envio de formulário
- [ ] Validar SEO

**Complexidade:** Média (tem formulário React Hook Form)

### 3. Depoimentos (⏳ PENDENTE)

**Arquivo:** `/app/(routes)/depoimentos/page.tsx`

- [ ] Migrar arquivo page.tsx
- [ ] Usar `getTestimonialsPage()` query
- [ ] Criar FALLBACK_DATA
- [ ] Implementar generateMetadata()
- [ ] Integrar com `getTestimonials()` existente
- [ ] Testar sem Sanity (fallback)
- [ ] Popular dados no Studio
- [ ] Testar com Sanity
- [ ] Validar Google Reviews
- [ ] Validar SEO

**Complexidade:** Fácil

### 4. Obrigado (⏳ PENDENTE)

**Arquivo:** `/app/(routes)/obrigado/page.tsx`

- [ ] Migrar arquivo page.tsx
- [ ] Usar `getThankYouPage()` query
- [ ] Criar FALLBACK_DATA
- [ ] Implementar generateMetadata()
- [ ] Testar sem Sanity (fallback)
- [ ] Popular dados no Studio
- [ ] Testar com Sanity
- [ ] Validar links de ação rápida
- [ ] Validar SEO

**Complexidade:** Fácil

### 5. Política de Privacidade (⏳ PENDENTE)

**Arquivo:** `/app/(routes)/politica-de-privacidade/page.tsx`

- [ ] Migrar arquivo page.tsx
- [ ] Usar `getPrivacyPolicy()` query
- [ ] Criar FALLBACK_DATA com seções
- [ ] Implementar generateMetadata()
- [ ] Configurar rich text renderer (se necessário)
- [ ] Testar sem Sanity (fallback)
- [ ] Popular dados no Studio
- [ ] Testar com Sanity
- [ ] Validar formatação de seções
- [ ] Validar SEO

**Complexidade:** Média (conteúdo extenso)

### 6. Termos de Uso (⏳ PENDENTE)

**Arquivo:** `/app/(routes)/termos-de-uso/page.tsx`

- [ ] Migrar arquivo page.tsx
- [ ] Usar `getTermsOfService()` query
- [ ] Criar FALLBACK_DATA com seções
- [ ] Implementar generateMetadata()
- [ ] Configurar rich text renderer (se necessário)
- [ ] Testar sem Sanity (fallback)
- [ ] Popular dados no Studio
- [ ] Testar com Sanity
- [ ] Validar formatação de seções
- [ ] Validar SEO

**Complexidade:** Média (conteúdo extenso)

### 7. Atividades (⏳ PENDENTE)

**Arquivo:** `/app/(routes)/sobre/atividades/page.tsx`

- [ ] Migrar arquivo page.tsx
- [ ] Usar `getActivitiesPage()` query
- [ ] Criar FALLBACK_DATA com tipos de atividades
- [ ] Implementar generateMetadata()
- [ ] Mapear ícones corretamente
- [ ] Testar sem Sanity (fallback)
- [ ] Popular dados no Studio
- [ ] Testar com Sanity
- [ ] Validar exibição de ícones
- [ ] Validar SEO

**Complexidade:** Fácil

### 8. Equipe (⏳ PENDENTE)

**Arquivo:** `/app/(routes)/sobre/equipe/page.tsx`

- [ ] Migrar arquivo page.tsx
- [ ] Usar `getTeamPage()` query
- [ ] Criar FALLBACK_DATA com especialidades
- [ ] Implementar generateMetadata()
- [ ] Mapear ícones corretamente
- [ ] Testar sem Sanity (fallback)
- [ ] Popular dados no Studio
- [ ] Testar com Sanity
- [ ] Validar exibição de ícones
- [ ] Validar SEO

**Complexidade:** Fácil

### 9. Estrutura (⏳ PENDENTE)

**Arquivo:** `/app/(routes)/sobre/estrutura/page.tsx`

- [ ] Migrar arquivo page.tsx
- [ ] Usar `getStructurePage()` query
- [ ] Criar FALLBACK_DATA com features
- [ ] Implementar generateMetadata()
- [ ] Mapear ícones corretamente
- [ ] Testar sem Sanity (fallback)
- [ ] Popular dados no Studio
- [ ] Testar com Sanity
- [ ] Validar exibição de ícones
- [ ] Validar SEO

**Complexidade:** Fácil

## 🎨 Sanity Studio

### Configurar Token de API

- [ ] Acessar https://www.sanity.io/manage
- [ ] Ir em API > Tokens
- [ ] Criar token com permissão de Editor
- [ ] Adicionar `SANITY_API_TOKEN` no `.env`

### Popular Dados Iniciais

Opção 1: Script Automático
- [ ] Rodar `npx tsx scripts/seed-sanity.ts`

Opção 2: Manual no Studio
- [ ] Rodar `npm run sanity:dev`
- [ ] Acessar http://localhost:3333
- [ ] Criar documento "Página · Perguntas Frequentes"
- [ ] Criar documento "Página · Contato"
- [ ] Criar documento "Página · Depoimentos"
- [ ] Criar documento "Página · Obrigado"
- [ ] Criar documento "Política de Privacidade"
- [ ] Criar documento "Termos de Uso"
- [ ] Criar documento "Página · Atividades"
- [ ] Criar documento "Página · Equipe"
- [ ] Criar documento "Página · Estrutura"

## ✅ Testes Finais

### Cada Página

- [ ] Página carrega sem erros
- [ ] Conteúdo é exibido corretamente
- [ ] Formatação está preservada
- [ ] Links funcionam
- [ ] SEO tags estão corretas
- [ ] Open Graph funciona
- [ ] Fallback funciona (teste desligando Sanity)

### Sanity Studio

- [ ] Todos os campos são editáveis
- [ ] Validações funcionam
- [ ] Preview funciona (se configurado)
- [ ] Publicação funciona
- [ ] Alterações refletem no site

## 📊 Resumo de Progresso

```
Total de Páginas:     9
Migradas:             1  ███░░░░░░░░░░░░░░░░░ 11%
Pendentes:            8  ░░░░░░░░░░░░░░░░░░░░░ 89%

Schemas:              9  ████████████████████ 100%
Queries:              9  ████████████████████ 100%
Documentação:         3  ████████████████████ 100%
```

## ⏱️ Estimativa de Tempo

| Tarefa | Tempo Estimado |
|--------|----------------|
| Migração de cada página fácil | 15 min |
| Migração de cada página média | 25 min |
| Popular dados no Studio (manual) | 10 min/página |
| Testes | 5 min/página |
| **TOTAL** | **~3.5 horas** |

## 🚦 Status Geral

- 🟢 **Infraestrutura:** Completa
- 🟡 **Migração:** 11% concluída
- 🔴 **População de Dados:** Não iniciada
- 🔴 **Testes:** Não iniciados

---

## 📝 Notas

- Use a página FAQ como referência para todas as migrações
- Sempre teste com e sem Sanity
- Mantenha fallbacks para garantir que o site funcione sempre
- Copie textos exatamente como estão (não altere conteúdo)

**Última atualização:** 2025-11-10
