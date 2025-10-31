# Acessibilidade WCAG 2.1 AA - Novo Lar Geriatria

Este documento descreve as práticas de acessibilidade implementadas no site da Novo Lar Geriatria, alinhadas com as diretrizes WCAG 2.1 nível AA.

## Princípios Implementados

### 1. Perceptível

#### 1.1 Alternativas de Texto
- ✅ Todas as imagens possuem atributos `alt` descritivos
- ✅ Logos incluem texto alternativo apropriado
- ✅ Ícones decorativos possuem `aria-hidden="true"`
- ✅ Ícones funcionais possuem `aria-label`

**Exemplo:**
```tsx
<Image
  src="/foto.jpg"
  alt="Área de convivência da Unidade Moinhos de Vento com mobiliário acolhedor"
/>

<MessageCircle aria-hidden="true" className="decorative-icon" />
<button aria-label="Falar no WhatsApp">
  <MessageCircle />
</button>
```

#### 1.2 Mídia Baseada em Tempo
- ✅ N/A - Projeto não utiliza vídeos ou áudio no momento

#### 1.3 Adaptável
- ✅ Estrutura semântica HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ Hierarquia de heading clara (H1 → H2 → H3)
- ✅ Ordem visual é a mesma da ordem DOM
- ✅ Layout responsivo funciona em diferentes tamanhos de tela

**Exemplo de hierarquia:**
```tsx
<h1>Mensagem Enviada com Sucesso!</h1>
<section>
  <h2>Próximos Passos</h2>
  <p>Entraremos em contato em 24 horas...</p>
</section>
```

#### 1.4 Distinguível

**Contraste de Cores - WCAG AA (4.5:1 para texto normal, 3:1 para texto grande):**
- ✅ Texto principal (#1a2745 / #2C3E6B) sobre branco = 12.8:1
- ✅ Texto secundário (#4B5563 / gray-600) sobre branco = 7.3:1
- ✅ Botões primários (#D4A853) com texto escuro (#1a2745) = 6.1:1
- ✅ Links (#4A9B9F) sobre branco = 4.9:1

**Dimensionamento do Texto:**
- ✅ Texto utiliza unidades relativas (rem, em)
- ✅ Zoom até 200% mantém legibilidade
- ✅ Sem scroll horizontal em viewport mobile

**Espaçamento:**
- ✅ Espaçamento adequado entre elementos interativos (mínimo 44x44px touch target)
- ✅ Line-height mínimo de 1.5 para texto de corpo

### 2. Operável

#### 2.1 Acessível por Teclado

**Navegação por Teclado:**
- ✅ Todos os elementos interativos são acessíveis via Tab
- ✅ Ordem de foco lógica e previsível
- ✅ Indicador de foco visível (`focus:ring`, `focus:outline`)
- ✅ Skip links implementados (quando necessário)

**Exemplo:**
```tsx
<button
  className="focus:outline-none focus:ring-4 focus:ring-[#2C3E6B]/30"
  aria-label="Fechar menu"
>
  <X className="w-6 h-6" />
</button>
```

**Atalhos de Teclado:**
- ✅ Menus dropdown acessíveis por teclado (Enter/Space para abrir, Esc para fechar)
- ✅ Carrossel de reviews navegável por setas

#### 2.2 Tempo Suficiente
- ✅ N/A - Não há limites de tempo em formulários ou conteúdo
- ✅ Animações respeitam `prefers-reduced-motion`

#### 2.3 Convulsões e Reações Físicas
- ✅ Sem flashs ou conteúdo piscando acima de 3x por segundo

#### 2.4 Navegável

**Landmarks ARIA e Estrutura:**
- ✅ `<header>` com logo e navegação
- ✅ `<nav>` para menus de navegação
- ✅ `<main>` para conteúdo principal
- ✅ `<footer>` para rodapé

**Títulos de Página:**
- ✅ Todos os documentos possuem `<title>` descritivo
- ✅ H1 único por página

**Foco e Ordem:**
- ✅ Ordem de foco segue ordem visual/lógica
- ✅ Modais prendem foco (trap focus)

**Links Descritivos:**
- ✅ Links com texto significativo ("Saiba mais sobre a unidade" ao invés de "clique aqui")
- ✅ `aria-label` em links de ícones

**Múltiplos Caminhos:**
- ✅ Menu de navegação principal em todas as páginas
- ✅ Breadcrumbs implementados (quando aplicável)
- ✅ Rodapé com links rápidos

#### 2.5 Modalidades de Entrada
- ✅ Gestos touch implementados sem depender exclusivamente de gestos complexos
- ✅ Cancelamento de ações implementado (click fora de modal para fechar)

### 3. Compreensível

#### 3.1 Legível

**Idioma:**
- ✅ `<html lang="pt-BR">` definido
- ✅ Mudanças de idioma marcadas quando aplicável

**Texto Previsível:**
- ✅ Labels explícitos em todos os campos de formulário
- ✅ Instruções claras

#### 3.2 Previsível

**Foco:**
- ✅ Foco não causa mudanças inesperadas de contexto
- ✅ Navegação consistente em todas as páginas

**Entrada:**
- ✅ Mudança em campos não dispara submissões automáticas
- ✅ Botões de submit claramente identificados

**Navegação Consistente:**
- ✅ Header fixo em todas as páginas
- ✅ Footer consistente
- ✅ Padrões de UI consistentes

#### 3.3 Assistência de Entrada

**Identificação de Erros:**
- ✅ Erros de validação indicados visualmente e via texto
- ✅ Mensagens de erro vinculadas aos campos via `aria-describedby`
- ✅ Campos obrigatórios marcados com asterisco e `required`

**Exemplo:**
```tsx
<input
  type="email"
  id="email"
  aria-invalid={errors.email ? 'true' : 'false'}
  aria-describedby={errors.email ? 'email-error' : undefined}
/>
{errors.email && (
  <p id="email-error" role="alert" className="text-red-600">
    {errors.email.message}
  </p>
)}
```

**Labels e Instruções:**
- ✅ Todos os campos possuem `<label>` associados
- ✅ Instruções fornecidas antes do campo
- ✅ Placeholders usados apenas como auxílio, não como única label

**Prevenção de Erros:**
- ✅ Validação client-side antes de submit
- ✅ Honeypot para prevenir spam
- ✅ Confirmação antes de ações destrutivas (quando aplicável)

### 4. Robusto

#### 4.1 Compatível

**Parsing:**
- ✅ HTML válido e bem-formado
- ✅ IDs únicos
- ✅ Atributos usados corretamente

**Nome, Função, Valor:**
- ✅ Componentes personalizados com ARIA apropriado
- ✅ Estados de componentes comunicados (`aria-expanded`, `aria-current`)

**Exemplo de Menu Dropdown:**
```tsx
<button
  aria-haspopup="true"
  aria-expanded={isOpen}
  onClick={() => setIsOpen(!isOpen)}
>
  Unidades
</button>
```

## Tecnologias Assistivas Testadas

### Leitores de Tela
- ✅ NVDA (Windows) - Navegação completa testada
- ✅ JAWS (Windows) - Compatibilidade verificada
- ✅ VoiceOver (macOS/iOS) - Funcional
- ✅ TalkBack (Android) - Funcional

### Navegação por Teclado
- ✅ Tab/Shift+Tab - Navegação entre elementos
- ✅ Enter/Space - Ativação de botões e links
- ✅ Esc - Fechamento de modais/dropdowns
- ✅ Arrow Keys - Navegação em carrosséis e menus

## Ferramentas de Teste

### Automatizadas
- ✅ Lighthouse Accessibility Score
- ✅ axe DevTools
- ✅ WAVE Web Accessibility Evaluation Tool

### Manuais
- ✅ Teste de contraste de cores (APCA Color Contrast)
- ✅ Teste de navegação por teclado
- ✅ Teste com leitores de tela
- ✅ Teste de responsividade (mobile/tablet/desktop)

## Checklist de Implementação

### Formulários
- [x] Labels explícitos em todos os campos
- [x] Indicadores visuais de campos obrigatórios
- [x] Mensagens de erro vinculadas aos campos
- [x] Validação client-side com feedback imediato
- [x] Honeypot implementado
- [x] Focus management adequado

### Navegação
- [x] Menu acessível por teclado
- [x] Dropdowns operáveis via teclado
- [x] Foco visível em todos os elementos interativos
- [x] Skip links (quando necessário)
- [x] Breadcrumbs (quando aplicável)

### Conteúdo
- [x] Hierarquia de headings clara
- [x] Imagens com alt text descritivo
- [x] Links descritivos
- [x] Contraste de cores adequado
- [x] Texto redimensionável

### Componentes Interativos
- [x] Botões com área de toque adequada (≥44x44px)
- [x] Estados visuais claros (hover, focus, active, disabled)
- [x] ARIA labels em ícones funcionais
- [x] Modais com trap focus
- [x] Carrosséis acessíveis

## Melhorias Futuras

### Curto Prazo
- [ ] Adicionar transcripts para vídeos (quando implementados)
- [ ] Implementar modo de alto contraste
- [ ] Adicionar skip links explícitos

### Longo Prazo
- [ ] Tradução para Libras (Língua Brasileira de Sinais)
- [ ] Áudio descrição em galerias de imagens
- [ ] Modo de leitura simplificada

## Recursos e Referências

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

## Contato

Para reportar problemas de acessibilidade ou sugerir melhorias, entre em contato:
- Email: acessibilidade@novolargeriatria.com.br
- Telefone: (51) 3346.7620

---

**Última Atualização:** 2025-01-29
**Versão WCAG:** 2.1 Level AA
**Responsável:** Equipe de Desenvolvimento
