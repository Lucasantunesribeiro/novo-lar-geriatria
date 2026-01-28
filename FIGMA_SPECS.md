# Especificações do Design Figma - Novo Lar Geriatria

## Cores Principais

```css
/* Cores de Brand */
--brand-primary: #2C3E6B; /* Azul escuro principal */
--brand-gold: #D4A853; /* Dourado para badges */
--brand-teal: #2E7B7F; /* Verde-azulado para gradientes */
--brand-green: #00A63E; /* Verde para WhatsApp */
--brand-purple: #4A4AAC; /* Roxo para links e CTAs secundários */

/* Cores de Texto */
--text-primary: #2C3E6B;
--text-secondary: #4A5565;
--text-tertiary: #364153;
--text-muted: #6A7282;
--text-white: #FFFFFF;

/* Backgrounds */
--bg-gradient-cinza: linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%);
--bg-gradient-principal: linear-gradient(135deg, rgba(13, 26, 54, 0.95) 0%, rgba(29, 51, 100, 0.9) 50%, rgba(46, 123, 127, 0.85) 100%);
--bg-white: #FFFFFF;
--bg-gray-light: #F9FAFB;
--bg-gray-medium: #F3F4F6;

/* Borders e Sombras */
--border-light: #E5E7EB;
--border-lighter: #F3F4F6;
--shadow-sm: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-md: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-lg: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1);
```

## Tipografia

```css
/* Font Family */
font-family: 'Arial', sans-serif;

/* Font Sizes */
--text-xs: 12px; /* line-height: 16px */
--text-sm: 14px; /* line-height: 20px ou 23px */
--text-base: 16px; /* line-height: 24px */
--text-lg: 18px; /* line-height: 28px ou 29px */
--text-xl: 20px; /* line-height: 28px */
--text-2xl: 30px; /* line-height: 48px */
--text-3xl: 32px; /* line-height: 38px */
--text-4xl: 36px; /* line-height: 40px */
--text-5xl: 48px; /* line-height: 48px ou 52px */

/* Font Weights */
--font-normal: 400;
--font-bold: 700;
```

## Espaçamentos

```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 12px;
--spacing-lg: 16px;
--spacing-xl: 24px;
--spacing-2xl: 32px;
--spacing-3xl: 48px;
--spacing-4xl: 64px;
--spacing-5xl: 80px;
--spacing-6xl: 112px;
--spacing-7xl: 120px;
```

## Border Radius

```css
--radius-sm: 12px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-full: 999px; /* Pills/badges */
```

## Seção 1: Hero

### Container Principal
- Width: 1440px (max-width: 100%)
- Padding: 120px
- Background: linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)

### Layout
- Flex row com gap: 144px
- Container interno: 1200px width

### Coluna Esquerda (Conteúdo)
- Width: 672px (max-width)
- Gap entre elementos: 25px

#### Badge Dourado
- Background: #D4A853
- Padding: 8px 16px
- Border-radius: 999px
- Font: 700, 14px, line-height 20px
- Color: #FFFFFF
- Text: "+30 anos sendo referência em cuidado humanizado"

#### Heading Principal
- Font: 700, 48px, line-height 52px
- Letter-spacing: -1.5px
- Color: #2C3E6B
- Max-width: 523px
- Text: "Um lar seguro, humano e acolhedor para quem você mais ama"

#### Descrição
- Font: 400, 18px, line-height 29px
- Color: #4A5565
- Max-width: 627px

#### Botão CTA
- Width: 251px
- Padding: 14px 0px
- Background: #2C3E6B
- Border-radius: 12px
- Font: 700, 14px, line-height 20px
- Color: #FFFFFF

#### Cards de Features (3 cards)
- Width: 220px cada
- Padding: 24px
- Gap: 16px entre cards
- Background: #FFFFFF
- Border: 1px solid #E5E7EB
- Box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)
- Border-radius: 16px

##### Ícone dos Cards
- Width/Height: 48px
- Background: rgba(44, 62, 107, 0.1)
- Border-radius: 12px
- Icon color: #2C3E6B
- Icon size: 24px

##### Texto dos Cards
- Título: 700, 14px, color #2C3E6B
- Descrição: 400, 14px, color #4A5565

## Seção 2: Por que escolher a Novo Lar?

### Container Principal
- Padding: 80px 130px
- Background: linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)
- Max-width: 1180px (container interno)

### Header
- H2: 700, 48px, line-height 48px, center, color #2C3E6B
- Paragraph: 400, 18px, line-height 28px, center, color #4A5565, max-width 990px

### Layout Principal
- Gap: 54px entre imagem e cards
- Imagem: 484px x 454px, border-radius 16px
- Cards column: 406px width, gap 16px

### Cards de Benefícios (5 cards)
- Width: 406px
- Padding: 16px 24px
- Background: #FFFFFF
- Border: 1px solid #E5E7EB
- Box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)
- Border-radius: 16px
- Gap interno: 4px

#### Texto dos Cards
- Título: 700, 18px, line-height 20px, color #2C3E6B
- Descrição: 400, 14px, line-height 20px, color #4A5565

## Seção 3: Nossas Unidades

### Container Principal
- Padding: 112px 80px
- Background: #F9FAFB
- Max-width: 1280px

### Header
- H2: 700, 48px, line-height 48px, center, color #2C3E6B
- Paragraph: 400, 18px, line-height 28px, center, max-width 884px, color #4A5565

### Grid de Cards
- Gap: 32px
- Cards: 394.66px width cada

### Card de Unidade

#### Imagem do Topo
- Height: 245.41px
- Background: linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)
- Border-radius: 16px (top)

#### Badge "Visitas Diárias"
- Position: absolute, right 15.83px, top 16px
- Background: rgba(255, 255, 255, 0.95)
- Backdrop-filter: blur(4px)
- Padding: 11.25px 12px 8.75px
- Border-radius: 999px
- Font: 700, 12px, line-height 16px, color #4A4AAC

#### Conteúdo do Card
- Padding: 24px
- Background: #FFFFFF
- Border: 1px solid #F3F4F6
- Box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)
- Border-radius: 16px

##### Nome da Unidade
- Font: 700, 20px, line-height 28px, color #2C3E6B

##### Endereço
- Font: 400, 14px, line-height 23px, color #4A5565
- Icon: 18px, color #4A4AAC
- Gap: 8px

##### Característica Principal
- Font: 400, 14px, line-height 20px, color #364153
- Icon: 18px, color #00A63E
- Gap: 8px

##### Divisória
- Border-top: 1px solid #F3F4F6

##### Botões Inline (2 botões)
- Gap: 12px
- Width: 166.33px cada

###### Botão "Agendar Visita" (Outline)
- Padding: 10px 0px
- Border: 1px solid #4A4AAC
- Border-radius: 12px
- Font: 400, 16px, line-height 24px, color #4A4AAC
- Icon: phone, 16px, color #4A4AAC

###### Botão "WhatsApp" (Solid)
- Padding: 11px 0px
- Background: #00A63E
- Border-radius: 12px
- Font: 400, 16px, line-height 24px, color #FFFFFF
- Icon: WhatsApp, 16px, color #FFFFFF

##### Botão "Ver detalhes da unidade" (Full Width)
- Padding: 14px 0px
- Background: #2C3E6B
- Border-radius: 12px
- Font: 700, 14px, line-height 20px, color #FFFFFF
- Width: 100%

## Seção 4: Nossos Serviços

### Container Principal
- Padding: 80px 100px
- Background: #F9FAFB

### Header
- H2: 700, 48px, line-height 48px, center, color #2C3E6B
- Subtitle: 400, 18px, line-height 28px, center, color #4A5565

### Card de Serviço (Layout Alternado)
- Padding: 32px
- Gap: 54px entre imagem e conteúdo
- Background: #FFFFFF
- Border: 1px solid #E5E7EB
- Border-radius: 16px

#### Imagem
- Width: 523px
- Height: 387px
- Border-radius: 16px
- Background: linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)

#### Conteúdo
- Width: 565px
- Gap: 24px

##### Ícone Check
- Width/Height: 34px
- Background: #2C3E6B (SVG)

##### Título do Serviço
- Font: 700, 30px, line-height 48px, color #2C3E6B

##### Descrição
- Font: 400, 14px, line-height 27px, color #4A5565

##### Box "Cuidado importante"
- Padding: 32px 24px 24px
- Background: rgba(46, 123, 127, 0.05)
- Border: 1px solid rgba(46, 123, 127, 0.15)
- Border-radius: 16px
- Gap: 12px

###### Heading do Box
- Font: 700, 12px, line-height 16px, letter-spacing 3.6px
- Text-transform: uppercase
- Color: #2C3E6B
- Text: "CUIDADO IMPORTANTE QUANDO A FAMÍLIA BUSCA:"

###### Lista de Itens (3 itens)
- Gap: 8px
- Icon: check circle, 16px, color #2E7B7F
- Text: 400, 14px, line-height 20px, color #364153

## Seção 5: Veja Nossa Estrutura

### Container Principal
- Padding: 120px 112px
- Gap: 48px
- Background: linear-gradient(135deg, rgba(13, 26, 54, 0.95) 0%, rgba(29, 51, 100, 0.9) 50%, rgba(46, 123, 127, 0.85) 100%)

### Grid de Imagens
- Position: relative
- 4 imagens sobrepostas usando position absolute
- Box-shadow (imagens): 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)
- Border-radius: 16px

### Card de Informação (com blur)
- Width: 452px
- Padding: 32px
- Background: rgba(255, 255, 255, 0.1)
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)
- Backdrop-filter: blur(4px)
- Border-radius: 24px
- Gap: 16px

#### Título
- Font: 700, 32px, line-height 38px, letter-spacing -1.2px
- Color: #FFFFFF

#### Descrição
- Font: 400, 14px, line-height 27px, color #FFFFFF

## Seção 6: Blog/Conteúdos

### Container Principal
- Padding: 112px 80px
- Background: #FFFFFF

### Header
- H2: 700, 48px, line-height 48px, center, color #2C3E6B
- Subtitle: 400, 18px, line-height 28px, center, max-width 672px, color #4A5565

### Grid de Artigos
- Gap: 24px
- Grid: 4 colunas
- Card width: 294px

### Card de Artigo
- Background: #FFFFFF
- Border: 1px solid #F3F4F6
- Box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)
- Border-radius: 16px

#### Imagem do Topo
- Height: 192px
- Background: linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)

#### Badge de Categoria
- Position: absolute, left 16px, top 16px
- Background: #D4A853
- Box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)
- Padding: 6px 12px
- Border-radius: 999px
- Font: 700, 12px, line-height 16px, color #FFFFFF

#### Conteúdo do Card
- Padding: 24px
- Gap entre elementos: 12px (heading), 16px (outros)

##### Título do Artigo
- Font: 700, 18px, line-height 28px, color #2C3E6B
- Max 2 linhas

##### Excerpt
- Font: 400, 14px, line-height 23px, color #4A5565
- Max 3 linhas

##### Divisória
- Border-top: 1px solid #F3F4F6

##### Data
- Font: 400, 12px, line-height 16px, color #6A7282
- Icon: calendar, 16px, color #6A7282
- Gap: 8px

##### Link "Ler mais"
- Font: 700, 14px, line-height 20px, color #4A4AAC
- Icon: arrow-right, 16px, color #4A4AAC
- Gap: 8px

#### Botão "Acessar Blog"
- Width: 350px
- Padding: 14px 0px
- Background: #2C3E6B
- Border-radius: 12px
- Font: 700, 14px, line-height 20px, color #FFFFFF

## Seção 7: Experiência e Confiança

### Container Principal
- Padding: 80px 208px
- Background: linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)

### Layout
- Align: flex-end (conteúdo à direita)
- Max-width: 522px

### Badge
- Font: 700, 14px, line-height 20px, letter-spacing 0.7px
- Text-transform: uppercase
- Color: #D4A853

### Heading
- Font: 700, 36px, line-height 40px, color #2C3E6B

### Texto Institucional
- Font: 400, 18px, line-height 28px, color #364153

## Seção 8: CTA Final (Contato)

### Container Principal
- Padding: 80px 208px
- Background: linear-gradient(135deg, #102041 0%, #1D3364 50%, #2E7B7F 100%)
- Box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)
- Border-radius: 24px

### Badge
- Background: rgba(255, 255, 255, 0.1)
- Padding: 8px 16px
- Border-radius: 999px
- Font: 700, 12px, line-height 16px, letter-spacing 3.6px
- Text-transform: uppercase
- Color: rgba(255, 255, 255, 0.8)

### Heading
- Font: 700, 36px, line-height 40px, color #FFFFFF, center

### Subtitle
- Font: 400, 16px, line-height 24px, color rgba(255, 255, 255, 0.8), center

### Grid de Cards de Contato
- Gap: 24px
- 3 cards de 342.67px cada

### Card de Contato
- Padding: 24px
- Background: rgba(255, 255, 255, 0.1)
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Border-radius: 16px

#### Ícone
- Width/Height: 48px
- Background: rgba(255, 255, 255, 0.15)
- Border-radius: 16px
- Icon: 24px, color #FFFFFF

#### Título
- Font: 700, 20px, line-height 28px, color #FFFFFF

#### Descrição
- Font: 400, 14px, line-height 20px, color rgba(255, 255, 255, 0.8)

#### Link
- Font: 700, 14px, line-height 20px, color #F5D481
- Icon: arrow-right, 16px, color #F5D481
- Gap: 8px

## Responsividade

### Mobile (< 768px)
- Padding das seções: 40px 20px
- Grid de 3 colunas vira 1 coluna
- Font-sizes reduzidos em ~20%
- Gap entre elementos reduzido

### Tablet (768px - 1024px)
- Padding das seções: 60px 40px
- Grid de 3 colunas vira 2 colunas
- Ajustes proporcionais em font-sizes

### Desktop (> 1024px)
- Layout completo conforme Figma
- Todos os valores exatos como especificado
