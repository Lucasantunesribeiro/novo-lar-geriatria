# Plano de Migração Completa para Sanity CMS

## Data: 2025-11-11
## Objetivo: Tornar 100% do site editável via Sanity CMS sem alterar o design

---

## 1. ANÁLISE DA ESTRUTURA ATUAL

### 1.1 Páginas do Site (19 páginas)
✅ = Schema existe | ❌ = Schema faltando

1. ✅ `/` - Home (homePage)
2. ✅ `/blog` - Blog Index (blogIndexPage)
3. ✅ `/blog/[slug]` - Post Individual (blogPost)
4. ✅ `/contato` - Contato (contactPage)
5. ✅ `/depoimentos` - Depoimentos (testimonialsPage)
6. ❌ `/fotos` - Fotos (conflito: /sobre/fotos existe)
7. ✅ `/obrigado` - Obrigado (thankYouPage)
8. ✅ `/perguntas-frequentes` - FAQ (faqPage)
9. ✅ `/politica-de-privacidade` - Privacidade (privacyPolicy)
10. ✅ `/servicos` - Serviços Index (servicesIndexPage)
11. ✅ `/servicos/[slug]` - Serviço Individual (service)
12. ✅ `/sobre` - Sobre (aboutPage)
13. ✅ `/sobre/a-novo-lar` - A Novo Lar (aboutNovoLarPage)
14. ✅ `/sobre/atividades` - Atividades (activitiesPage)
15. ✅ `/sobre/equipe` - Equipe (teamPage)
16. ✅ `/sobre/estrutura` - Estrutura (structurePage)
17. ✅ `/sobre/fotos` - Fotos (photosPage)
18. ✅ `/sobre/localizacao` - Localização (locationPage)
19. ✅ `/termos-de-uso` - Termos (termsOfService)
20. ✅ `/unidades/[slug]` - Unidades (unit)

### 1.2 Componentes com Dados Hardcoded

#### Header (components/layout/Header.tsx)
**Dados hardcoded:**
- TOP_HEADER_LINKS (Tour, Fotos, Notícias, Fale Conosco)
- DESKTOP_CONTACT_LINKS (Telefone Central)
- SERVICE_NAV_ITEMS (Menu de serviços)
- UNITS (Dropdown de unidades)
- COMPANY_CONTACT (telefone, whatsapp)

**Fonte:** `lib/site-data.ts` e `lib/services-data.ts`

#### Footer (components/layout/Footer.tsx)
**Dados hardcoded:**
- UNITS (coluna Atendimento)
- COMPANY_CONTACT (email, telefone)
- SOCIAL_LINKS (Facebook, Instagram)
- Links hardcoded:
  - Serviços
  - Sobre nós
  - Links úteis
  - Contato

**Fonte:** `lib/site-data.ts`

### 1.3 Arquivo: lib/site-data.ts
**Dados a migrar:**
```typescript
- UNITS[] (3 unidades)
- UNIT_CONTACT_GROUPS[] (2 grupos)
- COMPANY_CONTACT (telefones, email, city)
- NAV_LINKS[] (6 links principais)
- SOCIAL_LINKS[] (Facebook, Instagram)
```

---

## 2. SCHEMAS NECESSÁRIOS

### 2.1 Expandir siteSettings.ts ✅ (já existe parcialmente)
**Adicionar campos:**
```typescript
- headerConfig {
  - logo (imagem)
  - topBarLinks (array)
  - mainNavigation (array com dropdowns)
  - contactButtons {
    - phoneButton
    - whatsappButton
  }
  - mobileMenu (configuração)
}

- footerConfig {
  - logo (imagem)
  - columns (array de colunas)
  - socialLinks (array)
  - copyrightText (string)
  - bottomLinks (array)
}

- units (array) {
  - referência para unit documents
}
```

### 2.2 Verificar Schema de Fotos ⚠️
- Existe `/fotos` E `/sobre/fotos`
- Resolver conflito ou criar dois schemas diferentes

---

## 3. PLANO DE EXECUÇÃO

### FASE 1: Schemas e Estrutura
1. ✅ Analisar estrutura atual
2. 🔄 Expandir schema `siteSettings`
3. 🔄 Criar schema `headerConfig`
4. 🔄 Criar schema `footerConfig`
5. 🔄 Verificar schema de todas as páginas
6. 🔄 Resolver conflito `/fotos` vs `/sobre/fotos`

### FASE 2: Queries Sanity
1. 🔄 Criar query para headerConfig
2. 🔄 Criar query para footerConfig
3. 🔄 Criar query para units
4. 🔄 Criar query para siteSettings global

### FASE 3: Migração de Componentes
1. 🔄 Atualizar Header.tsx para usar Sanity
2. 🔄 Atualizar Footer.tsx para usar Sanity
3. 🔄 Remover/depreciar lib/site-data.ts
4. 🔄 Remover/depreciar lib/services-data.ts

### FASE 4: Migração de Dados
1. 🔄 Popular siteSettings no Sanity Studio
2. 🔄 Popular headerConfig no Sanity Studio
3. 🔄 Popular footerConfig no Sanity Studio
4. 🔄 Verificar todas as unidades
5. 🔄 Verificar todos os serviços

### FASE 5: Testes e Validação
1. 🔄 Testar Header em todas as resoluções
2. 🔄 Testar Footer em todas as páginas
3. 🔄 Testar navegação mobile
4. 🔄 Testar dropdowns de serviços
5. 🔄 Testar links de contato
6. 🔄 Validar SEO (não alterar)
7. 🔄 Validar acessibilidade (não alterar)
8. 🔄 Validar design (não alterar)

---

## 4. ESTRUTURA PROPOSTA PARA SCHEMAS

### 4.1 siteSettings (expandido)
```typescript
{
  // Global
  siteName: string
  siteUrl: string

  // SEO
  defaultMetaDescription: string
  defaultMetaKeywords: array<string>
  defaultOgImage: image

  // Branding
  logo: image
  favicon: image
  primaryColor: color
  secondaryColor: color

  // Contact
  contactInfo: {
    centralPhoneDisplay: string
    centralPhoneDigits: string
    whatsappDigits: string
    email: string
    visitation: string
    city: string
  }

  // Social
  socialLinks: array<{
    platform: string
    url: string
    icon: string
  }>

  // Header
  headerConfig: reference<headerConfig>

  // Footer
  footerConfig: reference<footerConfig>
}
```

### 4.2 headerConfig (novo)
```typescript
{
  name: 'headerConfig'
  title: 'Configuração do Header'

  fields: [
    // Top Bar
    showTopBar: boolean
    topBarText: string
    topBarLinks: array<{
      label: string
      href: string
    }>

    // Main Navigation
    mainNavigation: array<{
      type: 'link' | 'dropdown'
      label: string
      href?: string
      items?: array<reference<service>>
    }>

    // Contact Buttons
    showPhoneButton: boolean
    phoneButtonLabel: string
    showWhatsappButton: boolean
    whatsappButtonLabel: string

    // Units Dropdown
    showUnitsDropdown: boolean
    unitsDropdownLabel: string
  ]
}
```

### 4.3 footerConfig (novo)
```typescript
{
  name: 'footerConfig'
  title: 'Configuração do Footer'

  fields: [
    logo: image

    columns: array<{
      title: string
      type: 'links' | 'contact' | 'social'

      // Se type = 'links'
      links?: array<{
        label: string
        href: string
      }>

      // Se type = 'contact'
      showUnits?: boolean
      showEmail?: boolean
      showPhone?: boolean

      // Se type = 'social'
      socialPlatforms?: array<string>
    }>

    bottomSection: {
      copyrightText: string
      bottomLinks: array<{
        label: string
        href: string
      }>
    }
  ]
}
```

---

## 5. QUERIES NECESSÁRIAS

### 5.1 Header Query
```typescript
// lib/sanity/queries.ts

export async function getHeaderConfig() {
  return client.fetch(`
    *[_type == "siteSettings"][0]{
      contactInfo,
      socialLinks,
      headerConfig->{
        showTopBar,
        topBarText,
        topBarLinks,
        mainNavigation[]{
          ...,
          items[]->
        },
        showPhoneButton,
        phoneButtonLabel,
        showWhatsappButton,
        whatsappButtonLabel,
        showUnitsDropdown,
        unitsDropdownLabel
      }
    }
  `)
}

export async function getUnits() {
  return client.fetch(`
    *[_type == "unit"] | order(name asc){
      _id,
      slug,
      name,
      title,
      address,
      phoneDisplay,
      phoneDigits,
      whatsapp
    }
  `)
}
```

### 5.2 Footer Query
```typescript
export async function getFooterConfig() {
  return client.fetch(`
    *[_type == "siteSettings"][0]{
      contactInfo,
      socialLinks,
      footerConfig->{
        logo,
        columns[]{
          ...,
          links[],
          socialPlatforms[]
        },
        bottomSection
      }
    }
  `)
}
```

---

## 6. CHECKLIST DE VALIDAÇÃO

### Design e Layout
- [ ] Header desktop mantém layout atual
- [ ] Header mobile mantém layout atual
- [ ] Footer desktop mantém layout atual
- [ ] Footer mobile mantém layout atual
- [ ] Cores mantidas (#2C3E6B, #8B6914, #25D366)
- [ ] Tipografia mantida
- [ ] Espaçamentos mantidos
- [ ] Animações mantidas

### Funcionalidades
- [ ] Dropdown de unidades funciona
- [ ] Dropdown de serviços funciona
- [ ] Links de telefone funcionam
- [ ] Links de WhatsApp funcionam
- [ ] Links de redes sociais funcionam
- [ ] Navegação mobile funciona
- [ ] Top bar mostra/esconde no scroll

### SEO e Acessibilidade
- [ ] Atributos alt mantidos
- [ ] ARIA labels mantidos
- [ ] Estrutura semântica mantida
- [ ] Links acessíveis (min 48px touch target)
- [ ] Contraste de cores mantido

### Performance
- [ ] Images com loading lazy
- [ ] Images com priority adequado
- [ ] Sem console errors
- [ ] Sem hydration errors

---

## 7. DISTRIBUIÇÃO DE TAREFAS PARA AGENTES

### Backend Specialist
1. Criar/expandir schemas do Sanity
2. Criar queries otimizadas
3. Configurar validações dos schemas
4. Testar integridade dos dados

### Frontend Specialist
1. Atualizar componente Header
2. Atualizar componente Footer
3. Criar hooks para dados do Sanity
4. Testar responsividade

### Arquiteto Software
1. Revisar estrutura de schemas
2. Validar arquitetura de queries
3. Sugerir otimizações
4. Documentar padrões

---

## 8. RESOLUÇÃO DE CONFLITOS

### Conflito: /fotos vs /sobre/fotos
**Situação:**
- Existe rota `/fotos` (app/(routes)/fotos/page.tsx)
- Existe rota `/sobre/fotos` (app/(routes)/sobre/fotos/page.tsx)
- Schema `photosPage` já existe

**Opções:**
1. Manter ambas com schemas diferentes
2. Unificar em uma só página
3. Fazer `/fotos` redirecionar para `/sobre/fotos`

**Decisão:** ⚠️ A definir com o usuário

---

## 9. CRONOGRAMA ESTIMADO

- **Fase 1:** Schemas e Estrutura - 2h
- **Fase 2:** Queries Sanity - 1h
- **Fase 3:** Migração de Componentes - 3h
- **Fase 4:** Migração de Dados - 1h
- **Fase 5:** Testes e Validação - 2h

**Total:** ~9 horas de desenvolvimento

---

## 10. PRÓXIMOS PASSOS IMEDIATOS

1. ✅ Documento de análise criado
2. 🔄 Criar schema `headerConfig`
3. 🔄 Criar schema `footerConfig`
4. 🔄 Expandir schema `siteSettings`
5. 🔄 Criar queries necessárias
6. 🔄 Atualizar Header.tsx
7. 🔄 Atualizar Footer.tsx
8. 🔄 Popular dados no Sanity Studio
9. 🔄 Testes completos

---

**Status Atual:** Análise completa ✅
**Próxima Ação:** Criar schemas (Backend Specialist)
