# Schemas Header & Footer - Sanity CMS

## ✅ Status: Schemas Criados com Sucesso

**Data:** 2025-11-11
**Build Status:** ✅ Passou sem erros

---

## Arquivos Criados

### 1. `/sanity/schemas/headerConfig.ts`
**Tipo:** Singleton Document
**Propósito:** Configuração completa do header do site

#### Campos Principais:

**Top Bar (Barra Superior)**
- `showTopBar` (boolean) - Exibir/ocultar barra superior
- `topBarText` (string) - Texto opcional da barra
- `topBarLinks` (array) - Links da barra (Tour, Fotos, Notícias, etc.)
- `topBarBusinessHours` (string) - Horário de funcionamento

**Navegação Principal**
- `mainNavigation` (array) - Menu principal com suporte a:
  - Link Simples (href direto)
  - Dropdown de Serviços (referência a serviceCategory)
  - Dropdown de Unidades (automático)
  - Dropdown Customizado (links manuais)

**Botões de Contato**
- `showPhoneButton` (boolean) + `phoneButtonLabel` (string)
- `showWhatsappButton` (boolean) + `whatsappButtonLabel` (string)
- `whatsappDefaultMessage` (text) - Mensagem pré-preenchida

**Unidades**
- `showUnitsDropdown` (boolean)
- `unitsDropdownLabel` (string)

**Adicionais**
- `logo` (image) - Logo customizado (opcional)
- `mobileMenuTitle` (string) - Título do menu mobile

---

### 2. `/sanity/schemas/footerConfig.ts`
**Tipo:** Singleton Document
**Propósito:** Configuração modular e flexível do footer

#### Campos Principais:

**Logo**
- `logo` (image) - Logo customizado para o footer

**Colunas (Estrutura Modular)**
- `columns` (array) - Máximo 5 colunas recomendado
- Tipos de coluna disponíveis:
  1. **Links Customizados** (`type: 'links'`)
     - Array de links com label e href

  2. **Informações de Contato** (`type: 'contact'`)
     - `showEmail` - Email de siteSettings
     - `showPhone` - Telefone de siteSettings
     - `showAddress` + `customAddress` - Endereço customizado
     - `showBusinessHours` + `businessHours` - Horário de funcionamento

  3. **Unidades** (`type: 'units'`)
     - `showAllUnits` - Exibir todas automaticamente
     - `selectedUnits` - Seleção manual de unidades
     - `showUnitPhone` - Telefone de cada unidade
     - `showUnitAddress` - Endereço de cada unidade

  4. **Redes Sociais** (`type: 'social'`)
     - `socialPlatforms` - Array de plataformas (facebook, instagram, linkedin, youtube, twitter)
     - `socialTitle` - Título da seção
     - `socialLayout` - horizontal ou vertical

**Seção Inferior (Bottom Section)**
- `copyrightText` (string) - Texto de copyright
- `showYear` (boolean) - Atualizar ano automaticamente
- `bottomLinks` (array) - Links legais (Privacidade, Termos)
- `showDeveloperCredit` (boolean) + `developerName` + `developerUrl`

**Customização de Cores**
- `backgroundColor` - Cor de fundo (padrão: #2C3E6B)
- `textColor` - Cor do texto (padrão: white)
- `accentColor` - Cor de destaques (padrão: #8B6914)

---

### 3. `/sanity/schemas/siteSettings.ts` (Expandido)
**Tipo:** Singleton Document
**Mudanças:** Adicionados campos de referência e SEO

#### Novos Campos:

**SEO & Branding**
- `siteName` (string) - Nome do site
- `siteUrl` (url) - URL principal
- `defaultMetaDescription` (text) - Meta description padrão

**Referências para Header & Footer**
- `headerConfig` (reference) → Referência para headerConfig
- `footerConfig` (reference) → Referência para footerConfig

**Tracking & Analytics**
- `googleAnalyticsId` (string) - ID do Google Analytics
- `googleTagManagerId` (string) - ID do Google Tag Manager
- `facebookPixelId` (string) - ID do Facebook Pixel

**Campos Mantidos:**
- `globalPhone`, `globalWhatsapp`, `globalEmail`
- `socialLinks` (facebook, instagram, linkedin, youtube)
- `topLinks` (array)
- `footerLinks` (array)
- `contactInfo` (objeto)
- `logo`, `favicon`, `defaultOgImage`

---

## Atualização do Index

### `/sanity/schemas/index.ts`
**Mudanças:**
```typescript
// Imports adicionados
import headerConfig from './headerConfig'
import footerConfig from './footerConfig'

// Adicionados ao schemaTypes
export const schemaTypes = [
  // ...
  siteSettings,
  headerConfig,    // ✅ NOVO
  footerConfig,    // ✅ NOVO
  // ...
]
```

---

## Estrutura de Dados Recomendada

### Exemplo de headerConfig no Sanity Studio:

```json
{
  "showTopBar": true,
  "topBarLinks": [
    { "label": "Tour e Contato", "href": "/sobre" },
    { "label": "Fotos", "href": "/fotos" },
    { "label": "Notícias", "href": "/blog" },
    { "label": "Fale Conosco", "href": "/contato" }
  ],
  "mainNavigation": [
    {
      "type": "servicesDropdown",
      "id": "servicos",
      "label": "Serviços",
      "description": "Conheça nossos serviços especializados",
      "serviceGroups": [
        { "_ref": "serviceCategory-1" },
        { "_ref": "serviceCategory-2" }
      ]
    },
    {
      "type": "link",
      "id": "fotos",
      "label": "Fotos",
      "href": "/fotos"
    },
    {
      "type": "unitsDropdown",
      "id": "unidades",
      "label": "Unidades"
    }
  ],
  "showPhoneButton": true,
  "phoneButtonLabel": "Central Novo Lar",
  "showWhatsappButton": true,
  "whatsappButtonLabel": "Fale Conosco",
  "whatsappDefaultMessage": "Olá! Gostaria de saber mais informações sobre a Novo Lar Geriatria."
}
```

### Exemplo de footerConfig no Sanity Studio:

```json
{
  "columns": [
    {
      "title": "Atendimento",
      "type": "units",
      "showAllUnits": true,
      "showUnitPhone": true,
      "showUnitAddress": false
    },
    {
      "title": "Acessos",
      "type": "links",
      "links": [
        { "label": "Início", "href": "/" },
        { "label": "Unidades", "href": "/unidades" },
        { "label": "Serviços", "href": "/servicos" },
        { "label": "Sobre Nós", "href": "/sobre" },
        { "label": "Notícias", "href": "/blog" }
      ]
    },
    {
      "title": "Serviços",
      "type": "links",
      "links": [
        { "label": "Hospedagem 24h", "href": "/servicos/hospedagem-assistida-24h" },
        { "label": "Enfermagem e Médico", "href": "/servicos/enfermagem-medico-24h" },
        { "label": "Nutrição", "href": "/servicos/nutricao-individualizada" }
      ]
    },
    {
      "title": "Sobre Nós",
      "type": "links",
      "links": [
        { "label": "A Novo Lar", "href": "/sobre/a-novo-lar" },
        { "label": "Estrutura", "href": "/sobre/estrutura" },
        { "label": "Equipe", "href": "/sobre/equipe" },
        { "label": "Atividades", "href": "/sobre/atividades" }
      ]
    },
    {
      "title": "Contato",
      "type": "contact",
      "showEmail": true,
      "showPhone": true,
      "showAddress": false
    }
  ],
  "bottomSection": {
    "copyrightText": "© 2024 Novo Lar Geriatria. Todos os direitos reservados.",
    "showYear": true,
    "bottomLinks": [
      { "label": "Política de Privacidade", "href": "/politica-de-privacidade" },
      { "label": "Termos de Uso", "href": "/termos-de-uso" }
    ]
  }
}
```

---

## Próximos Passos

### Fase 2: Queries Sanity
1. Criar query `getHeaderConfig()` em `/lib/sanity/queries.ts`
2. Criar query `getFooterConfig()` em `/lib/sanity/queries.ts`
3. Criar query `getUnits()` (se não existir)
4. Criar query `getSiteSettings()` completa

### Fase 3: Migração de Componentes
1. Atualizar `/components/layout/Header.tsx` para usar queries
2. Atualizar `/components/layout/Footer.tsx` para usar queries
3. Remover dependências de `/lib/site-data.ts` e `/lib/services-data.ts`

### Fase 4: Popular Dados no Sanity Studio
1. Criar documento `headerConfig` no Sanity
2. Criar documento `footerConfig` no Sanity
3. Atualizar `siteSettings` com referências
4. Validar dados no preview

---

## Validações Implementadas

✅ Build passa sem erros de TypeScript
✅ Schemas registrados corretamente no index
✅ Singletons configurados (`__experimental_singleton`)
✅ Validações de campos obrigatórios
✅ Preview functions para UX no Studio
✅ Conditional fields (hidden) para UX limpa
✅ Máximo de 5 colunas no footer (warning)
✅ References para serviceCategory e unit

---

## Notas Técnicas

### Singleton Pattern
Os schemas `headerConfig`, `footerConfig` e `siteSettings` são singletons, ou seja, só pode existir UM documento de cada no Sanity.

### Performance
- Images com `hotspot: true` para recorte inteligente
- References para serviceCategory e unit evitam duplicação
- Estrutura modular permite cache granular

### Flexibilidade
- Footer totalmente modular (4 tipos de coluna)
- Header suporta múltiplos tipos de navegação
- Cores customizáveis mantendo padrões
- Logo opcional (fallback para padrão)

### Segurança
- Validação de email em siteSettings
- Validação de URL em social links
- Campos obrigatórios onde necessário
- Max 160 caracteres em meta description

---

## Conclusão

✅ **Schemas completos e funcionais**
✅ **Build passa sem erros**
✅ **Estrutura modular e escalável**
✅ **Pronto para popular dados no Sanity Studio**
✅ **Pronto para criar queries na Fase 2**

**Próxima tarefa:** Criar queries GROQ em `/lib/sanity/queries.ts`
