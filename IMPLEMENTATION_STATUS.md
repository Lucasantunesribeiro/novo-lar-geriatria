# Status da Implementação - Design Figma

## ✅ Componentes Implementados

### 1. Hero Section (`HeroSection.tsx`) - ✅ COMPLETO
- Badge dourado com texto exato
- Heading com letter-spacing -1.5px
- Descrição e botão CTA
- 3 cards de features com ícones e background rgba
- Todos os espaçamentos, cores e fontes exatos do Figma

### 2. Why Choose Us (`WhyChooseUs.tsx`) - ✅ COMPLETO
- Header centralizado
- Layout de duas colunas (imagem + cards)
- 5 cards de benefícios com specs exatas
- Gap de 54px entre imagem e cards
- Sombras e borders exatos

### 3. Units Section (`UnitsSection.tsx`) - ✅ COMPLETO
- Grid de 3 cards de unidades
- Badge "Visitas Diárias" com backdrop-filter blur
- Layout completo com endereço, feature e botões
- Botões inline (Agendar Visita outline + WhatsApp solid)
- Botão "Ver detalhes" full width
- Todas as medidas exatas (394.66px width, etc.)

## 🚧 Componentes Pendentes (Com Specs Prontas no FIGMA_SPECS.md)

### 4. Services Section (`ServicesSection.tsx`)
**Referência:** FIGMA_SPECS.md - Seção 4

**Estrutura:**
- Array de serviços com título, descrição e lista de benefícios
- Layout alternado: imagem esquerda/direita (usar `index % 2 === 0` para alternar)
- Card com padding 32px, gap 54px
- Imagem: 523px x 387px
- Conteúdo: 565px width
- Box "Cuidado importante" com background rgba(46, 123, 127, 0.05)

**Dados dos Serviços:**
1. Hospedagem Assistida 24h
2. Enfermagem Especializada
3. Fisioterapia
4. Terapia Ocupacional
5. Nutrição Especializada
6. Acompanhamento Médico
7. Atividades Recreativas
8. Cuidados Especializados

### 5. Structure Showcase (`StructureShowcase.tsx`)
**Referência:** FIGMA_SPECS.md - Seção 5

**Estrutura:**
- Background: `linear-gradient(135deg, rgba(13, 26, 54, 0.95) 0%, rgba(29, 51, 100, 0.9) 50%, rgba(46, 123, 127, 0.85) 100%)`
- Layout: Grid de imagens (312px width) + Card de informação (452px width)
- Imagens com position absolute para criar sobreposição
- Card com backdrop-filter blur(4px)
- Box-shadow forte nas imagens

### 6. Blog Section (`BlogSection.tsx`)
**Referência:** FIGMA_SPECS.md - Seção 6

**Estrutura:**
- Grid de 4 artigos (294px cada)
- Cada card: imagem 192px height + badge de categoria + conteúdo
- Badge: #D4A853, position absolute
- Divisória antes da data
- Link "Ler mais" com seta
- Botão "Acessar Blog" ao final (350px width)

**Artigos:**
1. "Cuidados Essenciais com Idosos no Inverno" - Saúde - 19/01/2025
2. "Alimentação Saudável para a Terceira Idade" - Nutrição - 14/01/2025
3. "Importância dos Exercícios Físicos na Terceira Idade" - Atividades - 09/01/2025
4. "Prevenção de Quedas em Idosos" - Saúde - 04/01/2025

### 7. Experience Section (`ExperienceSection.tsx`)
**Referência:** FIGMA_SPECS.md - Seção 7

**Estrutura:**
- Padding: 80px 208px
- Background: `linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)`
- Align: flex-end (conteúdo à direita)
- Max-width: 522px
- Badge dourado + heading + texto institucional

**Conteúdo:**
- Badge: "CUIDADO ESPECIALIZADO COM MAIS DE 30 ANOS DE EXPERIÊNCIA"
- Heading: "Experiência e Confiança"
- Texto longo sobre a Novo Lar (ver FIGMA_SPECS.md)

### 8. Final CTA (`FinalCTA.tsx`)
**Referência:** FIGMA_SPECS.md - Seção 8

**Estrutura:**
- Padding: 80px 208px
- Background: `linear-gradient(135deg, #102041 0%, #1D3364 50%, #2E7B7F 100%)`
- Border-radius: 24px
- Box-shadow grande

**Conteúdo:**
- Badge com background rgba(255, 255, 255, 0.1)
- Heading: "Estamos prontos para ajudar sua família a tomar a melhor decisão."
- Subtitle
- 3 cards de contato (342.67px cada):
  1. Central Novo Lar (telefone)
  2. WhatsApp 24h
  3. Agendar visita guiada

**Cards de Contato:**
- Background: rgba(255, 255, 255, 0.1)
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Ícone com background rgba(255, 255, 255, 0.15)
- Link com color #F5D481

## 📋 Como Completar

Para cada componente pendente:

1. **Abra o arquivo correspondente** (ex: `ServicesSection.tsx`)
2. **Consulte FIGMA_SPECS.md** na seção correspondente
3. **Siga o padrão dos componentes já feitos**:
   - Use inline styles para medidas exatas
   - Estrutura: `<section>` → `<div container>` → conteúdo
   - Sempre use as cores, fonts e espaçamentos EXATOS do Figma

4. **Template Base:**
```tsx
export default function ComponentName() {
  return (
    <section
      style={{
        padding: 'XXpx YYpx', // Do Figma
        background: '#HEX ou gradient', // Do Figma
        width: '100%',
      }}
    >
      <div
        style={{
          width: 'XXXXpx',
          maxWidth: '100%',
          margin: '0 auto',
          gap: 'XXpx',
        }}
      >
        {/* Conteúdo seguindo FIGMA_SPECS.md */}
      </div>
    </section>
  )
}
```

5. **Para layouts alternados** (ServicesSection):
```tsx
{services.map((service, index) => (
  <div key={service.title} style={{
    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
  }}>
    {/* Conteúdo */}
  </div>
))}
```

6. **Para ícones SVG inline** (quando Lucide não tem):
```tsx
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  {/* Paths do Figma */}
</svg>
```

## 🎨 Cores de Referência Rápida

```css
--primary-blue: #2C3E6B
--gold: #D4A853
--teal: #2E7B7F
--green: #00A63E
--purple: #4A4AAC

--text-primary: #2C3E6B
--text-secondary: #4A5565
--text-tertiary: #364153
--text-muted: #6A7282

--border: #E5E7EB
--border-light: #F3F4F6
```

## 📱 Responsividade

Para mobile/tablet, adicione media queries:

```tsx
<section
  className="responsive-section"
  style={{
    padding: window.innerWidth < 768 ? '40px 20px' : '112px 80px',
    // ...
  }}
>
```

Ou use Tailwind classes para breakpoints:
```tsx
className="px-5 py-10 md:px-20 md:py-28 lg:px-32"
```

## ✅ Checklist de Qualidade

Para cada componente, verifique:

- [ ] Padding exato do Figma
- [ ] Width do container exato
- [ ] Gap entre elementos exato
- [ ] Font-size e line-height corretos
- [ ] Font-weight correto (400 ou 700)
- [ ] Colors exatas (hex codes)
- [ ] Border-radius correto
- [ ] Box-shadow correto
- [ ] Background gradient correto (se aplicável)
- [ ] Letter-spacing correto (se aplicável)
- [ ] Ícones do tamanho correto
- [ ] Hover states (se aplicável)

## 🚀 Próximos Passos

1. Implemente Services Section
2. Implemente Structure Showcase
3. Implemente Blog Section
4. Implemente Experience Section
5. Implemente Final CTA
6. Teste responsividade em mobile/tablet
7. Adicione imagens reais (substituir gradientes)
8. Teste em diferentes navegadores
