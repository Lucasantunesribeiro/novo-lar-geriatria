# Novo Lar Geriatria - Site Institucional

Site institucional mobile-first para rede de 3 clínicas geriátricas em Porto Alegre, desenvolvido com Next.js 15 e Sanity CMS.

## 📋 Visão Geral

Projeto completo de redesign do site institucional, alinhado às melhores práticas de UI/UX (inspiradas em MedSênior e Familiar), com foco em conversão, acessibilidade WCAG 2.1 AA e SEO técnico.

**Status atual:** Marco 2 completo (80% do projeto)

---

## ✨ Features Implementadas

### 🎨 UI/UX
- ✅ Hero Section otimizada (1 CTA principal)
- ✅ Header no estilo MedSênior (navegação simplificada)
- ✅ WhatsApp Button flutuante (aparece após scroll de 300px)
- ✅ Mobile Bottom Bar fixa (3 ações: Ligar, WhatsApp, Formulário)
- ✅ Seção "Por que escolher a Novo Lar?" com ícones
- ✅ Galeria de fotos "Veja nossa estrutura"
- ✅ Google Reviews com carrossel
- ✅ Formulário de contato robusto (React Hook Form + Zod)
- ✅ Página Obrigado dinâmica (personalizada por unidade)

### 🔒 Segurança e Validação
- ✅ Honeypot anti-spam (campo oculto "website")
- ✅ Validação client-side e server-side (Zod schemas)
- ✅ InputMask para formatação de telefone
- ✅ Proteção contra dados sensíveis em logs
- ✅ Rate limiting preparado para implementação

### ♿ Acessibilidade (WCAG 2.1 AA)
- ✅ Contraste de cores adequado (12.8:1 para texto principal)
- ✅ Navegação por teclado completa
- ✅ ARIA labels e landmarks
- ✅ Focus management em modais e dropdowns
- ✅ Alt text descritivo em imagens
- ✅ Hierarquia de headings semântica
- ✅ Documentação completa em [ACESSIBILIDADE.md](./ACESSIBILIDADE.md)

### 🔍 SEO
- ✅ Schema.org / JSON-LD (LocalBusiness, WebSite, Organization)
- ✅ Metadatas OpenGraph e Twitter Cards
- ✅ Metadata dinâmica por página
- ✅ Sitemap.xml preparado
- ✅ Robots.txt preparado

### 📊 Analytics
- ✅ Google Tag Manager integrado
- ✅ Eventos implementados:
  - `click_tel` (cliques em telefone)
  - `click_whatsapp` (cliques em WhatsApp)
  - `lead_submit` (envios de formulário)
- ✅ Documentação completa em [ANALYTICS.md](./ANALYTICS.md)

---

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 15.1.4 (App Router)
- **Linguagem**: TypeScript 5
- **Runtime**: React 19.2.0
- **Estilização**: Tailwind CSS 4
- **CMS**: Sanity.io v3 (headless)
- **Formulários**: React Hook Form 7.54 + Zod 3.24
- **UI Components**: Radix UI (Accordion, Dialog, Dropdown, Select)
- **Animações**: Framer Motion 11.15
- **Ícones**: Lucide React 0.468
- **Máscaras**: React Input Mask 2.0
- **Lightbox**: Yet Another React Lightbox 3.21
- **Confetti**: Canvas Confetti 1.9

---

## 📁 Estrutura do Projeto

```
novo-lar-geriatria/
├── app/
│   ├── (routes)/
│   │   ├── unidades/[slug]/page.tsx    # Páginas dinâmicas de unidades
│   │   ├── servicos/page.tsx
│   │   ├── sobre/page.tsx
│   │   ├── contato/page.tsx
│   │   └── obrigado/page.tsx           # Página de agradecimento dinâmica
│   ├── api/
│   │   └── contact/route.ts            # API de formulário com validação
│   ├── layout.tsx                      # Layout global + GTM + SEO schemas
│   ├── page.tsx                        # Homepage
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Header.tsx                  # Header com navegação simplificada
│   │   └── Footer.tsx                  # Footer com 3 colunas
│   ├── ui/
│   │   ├── WhatsAppButton.tsx          # Botão flutuante do WhatsApp
│   │   └── MobileBottomBar.tsx         # Barra fixa mobile (3 ações)
│   ├── sections/
│   │   └── GoogleReviews.tsx           # Carrossel de reviews
│   ├── forms/
│   │   └── ContactForm.tsx             # Formulário com validação completa
│   └── seo/
│       └── JsonLd.tsx                  # Componentes Schema.org
├── lib/
│   ├── site-data.ts                    # Dados estáticos (unidades, contatos)
│   └── utils.ts                        # Utilitários gerais
├── sanity/
│   ├── schemas/                        # Schemas do CMS
│   ├── lib/
│   └── sanity.config.ts
├── public/
│   ├── Novo-Lar-Logo-7.png
│   ├── banner-home.jpg
│   ├── fotos-sobre/                    # Galeria de fotos
│   └── favicon-geriatria-novo-lar.png
├── ACESSIBILIDADE.md                   # Documentação de acessibilidade
├── ANALYTICS.md                        # Documentação de analytics/eventos
├── PROGRESSO.md                        # Status do projeto
└── README.md                           # Este arquivo
```

---

## 🚀 Instalação e Setup

### 1. Pré-requisitos

- Node.js 22.x ou superior
- npm 10.x ou superior
- Conta Sanity.io (gratuita)
- Conta Google Cloud (para reCAPTCHA e Google Places API)

### 2. Clonar e Instalar

```bash
# Clonar repositório
git clone <url-do-repositorio>
cd novo-lar-geriatria

# Instalar dependências
npm install
```

### 3. Configurar Variáveis de Ambiente

Crie o arquivo `.env.local` na raiz do projeto:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=seu_token_aqui

# Google Services
RECAPTCHA_SECRET_KEY=sua_chave_recaptcha
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Places API (opcional - para reviews ao vivo)
GOOGLE_PLACES_API_KEY=sua_api_key
GOOGLE_PLACE_ID=ChIJXXXXXXXXXXXXXX
```

**Para obter credenciais Sanity:**
1. Acesse [sanity.io/manage](https://www.sanity.io/manage)
2. Crie um novo projeto
3. Vá em **API** → **Tokens** → **Add API Token**
4. Permissions: **Editor**

### 4. Configurar Sanity Studio (Opcional)

```bash
# Inicializar Sanity (se ainda não fez)
npx sanity init

# Deploy do Studio (painel admin)
cd sanity
npx sanity deploy
```

### 5. Executar em Desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### 6. Build de Produção

```bash
npm run build
npm start
```

---

## 🧩 Componentes Principais

### WhatsAppButton (`components/ui/WhatsAppButton.tsx`)

Botão flutuante do WhatsApp com:
- Aparece após scroll de 300px
- Animação de fade-in
- Pulso para chamar atenção
- Analytics integrado (`click_whatsapp`)

**Props:**
```typescript
{
  phoneNumber: string        // Ex: "5551999999999"
  message?: string           // Mensagem pré-preenchida
  ariaLabel?: string         // Para acessibilidade
}
```

### MobileBottomBar (`components/ui/MobileBottomBar.tsx`)

Barra fixa no rodapé mobile com 3 ações:
- **Ligar**: Abre discador com número
- **WhatsApp**: Abre conversa no WhatsApp
- **Solicitar informações**: Scroll suave até formulário

Aparece apenas em telas < 768px.

### ContactForm (`components/forms/ContactForm.tsx`)

Formulário completo com:
- Validação client-side (Zod)
- Honeypot anti-spam
- InputMask para telefone
- Loading states
- Error handling com ARIA
- Redirect para /obrigado com parâmetro de unidade

**Schema de validação:**
```typescript
{
  name: string (3-100 chars)
  email: string (email válido)
  phone: string (mínimo 10 dígitos)
  unit: string (slug da unidade)
  message?: string (opcional)
  website: string (honeypot - deve estar vazio)
}
```

### GoogleReviews (`components/sections/GoogleReviews.tsx`)

Carrossel de avaliações do Google com:
- Nota média e total de avaliações
- Navegação por setas
- Star rating visual
- Foto do avaliador
- Data formatada

**Status:** Usando mock data. Para integração real, adicione:
- `GOOGLE_PLACES_API_KEY`
- `GOOGLE_PLACE_ID`

---

## 📊 Analytics e Eventos

### Eventos Implementados

| Evento | Descrição | Parâmetros |
|--------|-----------|------------|
| `click_tel` | Clique em telefone | `button_location`, `phone_number` |
| `click_whatsapp` | Clique em WhatsApp | `button_location`, `phone_number` |
| `lead_submit` | Envio de formulário | `form_location`, `unit_selected` |

**Documentação completa:** [ANALYTICS.md](./ANALYTICS.md)

### Configuração no GTM

1. Crie variáveis do dataLayer
2. Configure acionadores (triggers)
3. Crie tags GA4 para cada evento
4. Teste em Preview Mode

Guia passo a passo em [ANALYTICS.md](./ANALYTICS.md#configuração-no-google-tag-manager).

---

## ♿ Acessibilidade

Projeto totalmente compatível com **WCAG 2.1 Level AA**:

- ✅ Contraste de cores: 12.8:1 (texto principal)
- ✅ Navegação por teclado completa
- ✅ ARIA labels em todos os elementos interativos
- ✅ Foco visível (`focus:ring`)
- ✅ Ordem lógica de tab
- ✅ Landmarks semânticos
- ✅ Alt text descritivo
- ✅ Hierarquia de headings correta
- ✅ Formulários com labels explícitos
- ✅ Error messages vinculados via `aria-describedby`

**Documentação completa:** [ACESSIBILIDADE.md](./ACESSIBILIDADE.md)

**Testado com:**
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)
- Lighthouse Accessibility Score

---

## 🎨 Paleta de Cores

### Cores Principais

```css
/* Azul marinho - Confiança e profissionalismo */
--primary-navy: #2C3E6B;
--primary-navy-dark: #1a2745;

/* Dourado - Cuidado premium e calor humano */
--primary-gold: #D4A853;
--primary-gold-hover: #A67C2F;

/* Verde-azulado - Saúde e bem-estar */
--accent-teal: #2E7B7F;
--accent-teal-hover: #3d8387;

/* Textos */
--text-dark: #1a2745;
--text-secondary: #4B5563;
--text-muted: #6B7280;
```

### Contraste de Cores (WCAG AA)

| Combinação | Contraste | Status |
|------------|-----------|--------|
| #1a2745 / branco | 12.8:1 | ✅ AAA |
| #4B5563 / branco | 7.3:1 | ✅ AAA |
| #D4A853 + #1a2745 | 6.1:1 | ✅ AA |
| #2E7B7F / branco | 4.9:1 | ✅ AA |

---

## 📝 Documentação Disponível

| Arquivo | Descrição |
|---------|-----------|
| [ACESSIBILIDADE.md](./ACESSIBILIDADE.md) | Documentação completa de acessibilidade WCAG 2.1 AA |
| [ANALYTICS.md](./ANALYTICS.md) | Guia de eventos, GTM e GA4 |
| [PROGRESSO.md](./PROGRESSO.md) | Status do projeto e tarefas pendentes |
| [INSTALL.md](./INSTALL.md) | Instruções detalhadas de instalação |
| [alteracoes.md](./alteracoes.md) | Especificação completa do redesign |

---

## 🔄 Próximos Passos

### Integrações Pendentes (Cliente)

1. **Google Places API**
   - Configurar Place ID para reviews ao vivo
   - Adicionar API Key ao `.env.local`
   - Substituir mock data em `GoogleReviews.tsx`

2. **Sanity CMS**
   - Popular unidades com dados reais
   - Adicionar posts do blog
   - Configurar equipe
   - Adicionar depoimentos

3. **Email Service**
   - Integrar SendGrid ou Resend
   - Configurar templates de email
   - Descomentar código em `app/api/contact/route.ts`

4. **Google Analytics 4**
   - Criar propriedade GA4
   - Configurar conversões
   - Integrar com Google Ads

### Melhorias Futuras

- [ ] Blog completo (listagem + detalhe)
- [ ] Página de busca
- [ ] Chat online (Tawk.to ou similar)
- [ ] Tour virtual 360° (quando disponível)
- [ ] Modo de alto contraste
- [ ] Tradução para Libras
- [ ] PWA (Progressive Web App)
- [ ] Sitemap XML dinâmico
- [ ] Robots.txt dinâmico

---

## 🧪 Testes

### Testes Manuais

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build
npm start

# Lint
npm run lint
```

### Checklist de Testes

- [ ] Navegação por teclado (Tab, Enter, Esc)
- [ ] Formulário de contato (validações, envio)
- [ ] WhatsApp Button (aparece após scroll)
- [ ] Mobile Bottom Bar (< 768px)
- [ ] Google Reviews (carrossel funciona)
- [ ] Eventos analytics (verificar no GTM Preview)
- [ ] Links de telefone (abre discador)
- [ ] Links de WhatsApp (abre app)
- [ ] Responsividade (mobile, tablet, desktop)
- [ ] Lighthouse (Performance, Acessibilidade, SEO)

### Lighthouse Targets

- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 90
- SEO: ≥ 95

---

## 🐛 Troubleshooting

### Build Errors

**Erro:** `Type 'Promise<any>' is not assignable to type...`
**Solução:** Next.js 15 requer `async` params em páginas dinâmicas:

```tsx
// ❌ Antes
export default function Page({ params }: { params: { slug: string } })

// ✅ Depois
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
}
```

**Erro:** `Cannot find module '@sanity/vision'`
**Solução:**
```bash
npm install @sanity/vision --save-dev
```

### Analytics não funciona

**Problema:** Eventos não aparecem no GTM
**Verificar:**
1. `NEXT_PUBLIC_GTM_ID` está configurado?
2. GTM container está publicado?
3. Navegador está com bloqueador de ads desabilitado?
4. Use `console.log(window.dataLayer)` para debug

### WhatsApp Button não aparece

**Problema:** Botão flutuante não fica visível
**Verificar:**
1. Scroll da página > 300px?
2. Z-index está correto? (deve ser alto, ex: 50)
3. Mobile: não há conflito com MobileBottomBar?

---

## 📄 Licença

Este projeto foi desenvolvido sob contrato por **Lucas Antunes Ferreira** para **Novo Lar Geriatria**.

Após quitação integral, a Contratante recebe a titularidade do código específico do projeto. Frameworks e bibliotecas de terceiros permanecem sob suas licenças originais.

---

## 👤 Contato

**Desenvolvedor:** Lucas Antunes Ferreira

- 📱 WhatsApp: [(21) 99680-5944](https://wa.me/5521996805944)
- 📧 Email: lucas.afvr@gmail.com
- 🔗 LinkedIn: [linkedin.com/in/lucasantunes](https://linkedin.com/in/lucasantunes)

**Cliente:** Novo Lar Geriatria

- 📱 Central: [(51) 3346.7620](tel:+555133467620)
- 📧 Email: contato@novolargeriatria.com.br
- 🌐 Site: [novolargeriatria.com.br](https://novolargeriatria.com.br)

---

**Última Atualização:** 2025-01-29
**Versão:** 1.0.0
**Status:** Marco 2 Completo (80%)


