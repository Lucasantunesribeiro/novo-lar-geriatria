# Analytics & Eventos - Novo Lar Geriatria

Este documento descreve todos os eventos implementados no site para rastreamento com Google Analytics 4 (GA4) e Google Tag Manager (GTM).

## Setup Inicial

### 1. Google Tag Manager

O GTM já está configurado no projeto via `app/layout.tsx`:

```tsx
{process.env.NEXT_PUBLIC_GTM_ID && (
  <>
    <Script id="gtm-script" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`}
    </Script>
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  </>
)}
```

**Variável de ambiente necessária:**
```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### 2. Configurar GTM Container

1. Acesse [Google Tag Manager](https://tagmanager.google.com)
2. Crie um novo container (ou use existente)
3. Anote o Container ID (formato: `GTM-XXXXXXX`)
4. Configure o ID no `.env.local`

---

## Eventos Implementados

### 1. `click_tel` - Clique em Telefone

**Disparado quando:** Usuário clica em qualquer botão/link para fazer ligação telefônica.

**Locais de implementação:**
- Header (botão "Ligar")
- Mobile Bottom Bar (botão "Ligar")
- Página de Unidade (botão de contato)
- Página Obrigado (links de telefone)
- Footer (links de contato)

**Estrutura do evento:**
```javascript
window.dataLayer.push({
  event: 'click_tel',
  button_location: 'header' | 'mobile_bottom_bar' | 'unit_page' | 'footer',
  phone_number: '+555133467620'
})
```

**Parâmetros:**
- `event` (string): Nome do evento - sempre `'click_tel'`
- `button_location` (string): Localização do botão clicado
- `phone_number` (string): Número de telefone no formato internacional

**Exemplo de implementação (Header):**
```tsx
const handlePhoneClick = () => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'click_tel',
      button_location: 'header',
      phone_number: '+555133467620',
    })
  }
}

<a
  href="tel:+555133467620"
  onClick={handlePhoneClick}
>
  (51) 3346.7620
</a>
```

---

### 2. `click_whatsapp` - Clique em WhatsApp

**Disparado quando:** Usuário clica em qualquer botão/link do WhatsApp.

**Locais de implementação:**
- Header (ícone do WhatsApp)
- WhatsApp Button flutuante
- Mobile Bottom Bar (botão WhatsApp)
- Página de Unidade (botão WhatsApp)
- Página Obrigado (links WhatsApp)
- Footer (link WhatsApp)

**Estrutura do evento:**
```javascript
window.dataLayer.push({
  event: 'click_whatsapp',
  button_location: 'header' | 'floating' | 'mobile_bottom_bar' | 'unit_page' | 'footer',
  phone_number: '5551999999999'
})
```

**Parâmetros:**
- `event` (string): Nome do evento - sempre `'click_whatsapp'`
- `button_location` (string): Localização do botão clicado
- `phone_number` (string): Número do WhatsApp (apenas dígitos com código do país)

**Exemplo de implementação (WhatsAppButton flutuante):**
```tsx
const handleClick = () => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'click_whatsapp',
      button_location: 'floating',
      phone_number: phoneNumber,
    })
  }
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
}
```

---

### 3. `lead_submit` - Envio de Formulário de Contato

**Disparado quando:** Usuário envia o formulário de contato com sucesso.

**Locais de implementação:**
- ContactForm (formulário principal)
- Formulário nas páginas de Unidade
- Formulário na página Fale Conosco

**Estrutura do evento:**
```javascript
window.dataLayer.push({
  event: 'lead_submit',
  form_location: 'contact_form' | 'unit_page' | 'contact_page',
  unit_selected: 'moinhos-de-vento' | 'vila-jardim' | 'camaqua' | 'nao-sei'
})
```

**Parâmetros:**
- `event` (string): Nome do evento - sempre `'lead_submit'`
- `form_location` (string): Localização do formulário
- `unit_selected` (string): Slug da unidade selecionada ou "nao-sei"

**Exemplo de implementação (ContactForm):**
```tsx
const onSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true)

  // Analytics event
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'lead_submit',
      form_location: 'contact_form',
      unit_selected: data.unit,
    })
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      router.push(`/obrigado?unit=${data.unit}`)
    }
  } catch (error) {
    // Error handling
  }
}
```

---

## Configuração no Google Tag Manager

### Passo 1: Criar Variáveis Personalizadas

No GTM, vá em **Variáveis** → **Nova** e crie as seguintes variáveis do tipo "Variável da camada de dados":

1. **dlv - button_location**
   - Tipo: Variável da camada de dados
   - Nome da variável: `button_location`

2. **dlv - phone_number**
   - Tipo: Variável da camada de dados
   - Nome da variável: `phone_number`

3. **dlv - form_location**
   - Tipo: Variável da camada de dados
   - Nome da variável: `form_location`

4. **dlv - unit_selected**
   - Tipo: Variável da camada de dados
   - Nome da variável: `unit_selected`

### Passo 2: Criar Acionadores (Triggers)

#### Acionador: click_tel

- **Tipo**: Evento personalizado
- **Nome do evento**: `click_tel`
- **Este acionador será disparado em**: Alguns eventos personalizados
- **O evento será disparado quando**: Event equals `click_tel`

#### Acionador: click_whatsapp

- **Tipo**: Evento personalizado
- **Nome do evento**: `click_whatsapp`
- **Este acionador será disparado em**: Alguns eventos personalizados
- **O evento será disparado quando**: Event equals `click_whatsapp`

#### Acionador: lead_submit

- **Tipo**: Evento personalizado
- **Nome do evento**: `lead_submit`
- **Este acionador será disparado em**: Alguns eventos personalizados
- **O evento será disparado quando**: Event equals `lead_submit`

### Passo 3: Criar Tags GA4

#### Tag: GA4 Event - Click Tel

- **Tipo de tag**: Evento do Google Analytics: GA4
- **Tag de configuração**: Selecione sua tag de configuração GA4
- **Nome do evento**: `click_tel`
- **Parâmetros do evento**:
  - `button_location`: `{{dlv - button_location}}`
  - `phone_number`: `{{dlv - phone_number}}`
- **Acionamento**: `click_tel` (acionador criado acima)

#### Tag: GA4 Event - Click WhatsApp

- **Tipo de tag**: Evento do Google Analytics: GA4
- **Tag de configuração**: Selecione sua tag de configuração GA4
- **Nome do evento**: `click_whatsapp`
- **Parâmetros do evento**:
  - `button_location`: `{{dlv - button_location}}`
  - `phone_number`: `{{dlv - phone_number}}`
- **Acionamento**: `click_whatsapp`

#### Tag: GA4 Event - Lead Submit

- **Tipo de tag**: Evento do Google Analytics: GA4
- **Tag de configuração**: Selecione sua tag de configuração GA4
- **Nome do evento**: `lead_submit`
- **Parâmetros do evento**:
  - `form_location`: `{{dlv - form_location}}`
  - `unit_selected`: `{{dlv - unit_selected}}`
- **Acionamento**: `lead_submit`

### Passo 4: Publicar Container

1. Clique em **Enviar** no canto superior direito
2. Adicione um nome de versão (ex: "v1.0 - Eventos iniciais")
3. Clique em **Publicar**

---

## Testes e Debug

### Modo de Visualização (Preview) do GTM

1. No GTM, clique em **Visualizar** no canto superior direito
2. Digite a URL do site: `http://localhost:3000` (dev) ou URL de produção
3. Clique em **Connect**
4. Uma nova aba será aberta com o site + painel de debug do GTM

### Testar Eventos

#### Teste 1: click_tel
1. Abra o site com Preview Mode ativo
2. Clique em qualquer botão de telefone
3. No painel GTM Debug, verifique:
   - Evento `click_tel` foi disparado
   - Variáveis `button_location` e `phone_number` foram capturadas
   - Tag GA4 foi disparada

#### Teste 2: click_whatsapp
1. Clique em qualquer botão do WhatsApp
2. Verifique no GTM Debug:
   - Evento `click_whatsapp` foi disparado
   - Variáveis corretas foram capturadas

#### Teste 3: lead_submit
1. Preencha e envie o formulário de contato
2. Verifique no GTM Debug:
   - Evento `lead_submit` foi disparado
   - `form_location` e `unit_selected` foram capturadas corretamente

### Verificar no GA4

1. Acesse Google Analytics 4
2. Vá em **Relatórios** → **Realtime** → **Evento por nome do evento**
3. Realize ações no site e verifique eventos aparecendo em tempo real

---

## Relatórios Recomendados no GA4

### Relatório 1: Performance de CTAs de Telefone

**Métrica**: Contagem de eventos `click_tel`
**Dimensão**: `button_location`

**O que analisar:**
- Qual localização de botão de telefone tem mais cliques?
- Desktop vs Mobile: qual converte mais?
- Comparar header vs mobile_bottom_bar

### Relatório 2: Engajamento WhatsApp

**Métrica**: Contagem de eventos `click_whatsapp`
**Dimensão**: `button_location`

**O que analisar:**
- Efetividade do botão flutuante vs header
- Taxa de clique por página
- Horários de maior engajamento

### Relatório 3: Conversão de Leads

**Métrica**: Contagem de eventos `lead_submit`
**Dimensões**:
- `unit_selected` (qual unidade tem mais interesse?)
- `form_location` (qual página converte mais?)

**O que analisar:**
- Unidade com maior interesse
- Taxa de conversão por página
- Funnel: page_view → click_tel/whatsapp → lead_submit

### Relatório 4: Funil de Conversão

**Etapas:**
1. `page_view` (Home)
2. `click_tel` ou `click_whatsapp` (Engajamento)
3. `lead_submit` (Conversão)

**Configurar em GA4:**
1. Vá em **Admin** → **Eventos** → **Criar evento**
2. Crie eventos combinados se necessário
3. Configure o funil em **Explorar** → **Análise de funil**

---

## Eventos Futuros (Expansão)

### Eventos sugeridos para implementação futura:

1. **scroll_depth** - Porcentagem de scroll da página
   ```javascript
   { event: 'scroll_depth', depth: 25 | 50 | 75 | 100 }
   ```

2. **unit_view** - Visualização de página de unidade
   ```javascript
   { event: 'unit_view', unit_slug: 'moinhos-de-vento' }
   ```

3. **service_view** - Visualização de serviço
   ```javascript
   { event: 'service_view', service_name: 'hospedagem-assistida' }
   ```

4. **gallery_open** - Abertura de galeria de fotos
   ```javascript
   { event: 'gallery_open', gallery_location: 'unit_page' | 'home' }
   ```

5. **faq_expand** - Expansão de FAQ
   ```javascript
   { event: 'faq_expand', question: 'Quais são os valores?' }
   ```

6. **video_play** - Reprodução de vídeo (quando implementado)
   ```javascript
   { event: 'video_play', video_title: 'Tour Virtual Unidade' }
   ```

---

## Integração com Google Ads

### Conversões Recomendadas

Configure as seguintes ações de conversão no Google Ads:

1. **Lead - Telefone** (baseado em `click_tel`)
   - Valor: R$ 50
   - Categoria: Lead
   - Método de contagem: Todas

2. **Lead - WhatsApp** (baseado em `click_whatsapp`)
   - Valor: R$ 50
   - Categoria: Lead
   - Método de contagem: Todas

3. **Lead - Formulário** (baseado em `lead_submit`)
   - Valor: R$ 100
   - Categoria: Lead
   - Método de contagem: Uma

### Como Configurar

1. Acesse Google Ads → **Ferramentas e Configurações** → **Conversões**
2. Clique em **+ Nova ação de conversão**
3. Selecione **Website**
4. Escolha **Importar do Google Analytics 4**
5. Selecione os eventos customizados criados
6. Configure valores e categorias

---

## Troubleshooting

### Evento não está disparando

**Verificar:**
1. Console do navegador: `console.log(window.dataLayer)` para ver eventos
2. GTM Preview Mode: verifique se o evento aparece
3. Verifique se `NEXT_PUBLIC_GTM_ID` está configurado
4. Limpe cache do navegador

**Exemplo de debug:**
```javascript
// Adicione temporariamente antes do push
console.log('Disparando evento:', {
  event: 'click_tel',
  button_location: 'header',
  phone_number: '+555133467620'
})

window.dataLayer.push({ ... })
```

### Eventos duplicados

**Causa comum:** Listener de evento sendo registrado múltiplas vezes em componentes React.

**Solução:** Use `useEffect` com cleanup:
```tsx
useEffect(() => {
  const handleClick = () => {
    // Push do evento
  }

  element.addEventListener('click', handleClick)

  return () => {
    element.removeEventListener('click', handleClick)
  }
}, [])
```

### GTM não está carregando

**Verificar:**
1. Variável de ambiente `NEXT_PUBLIC_GTM_ID` está definida?
2. Formato correto: `GTM-XXXXXXX`
3. Container está publicado no GTM?
4. Bloqueadores de anúncios desabilitados?

---

## Conformidade e Privacidade

### LGPD

Os eventos implementados **NÃO coletam dados pessoais identificáveis**:
- ✅ Apenas rastreiam ações (cliques, envios)
- ✅ Não incluem nomes, e-mails ou dados sensíveis
- ✅ `phone_number` nos eventos é o número da empresa, não do usuário

### Consentimento de Cookies

Para conformidade total com LGPD:
1. Implemente banner de cookies (ex: OneTrust, CookieBot)
2. Configure GTM para disparar apenas após consentimento
3. Use Consent Mode v2 do Google

**Exemplo de implementação:**
```javascript
// Esperar consentimento antes de carregar GTM
window.gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied'
})

// Após usuário aceitar cookies
window.gtag('consent', 'update', {
  'ad_storage': 'granted',
  'analytics_storage': 'granted'
})
```

---

## Contato

Para dúvidas sobre implementação de analytics:

**Desenvolvedor**: Lucas Antunes Ferreira
- WhatsApp: (21) 99680-5944
- Email: lucas.afvr@gmail.com

---

**Última Atualização:** 2025-01-29
**Versão:** 1.0
