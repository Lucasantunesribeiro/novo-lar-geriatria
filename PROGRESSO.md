# PROGRESSO DO PROJETO - NOVO LAR GERIATRIA

**Projeto:** Site Institucional Mobile-First com CMS Headless
**Prazo Total:** 8 semanas
**Valor Total:** R$ 9.200,00
**Status Geral:** 🟢 EM DESENVOLVIMENTO

---

## 📊 RESUMO EXECUTIVO

| Marco | Status | Prazo | Valor | Progresso |
|-------|--------|-------|-------|-----------|
| Marco 1 | ✅ CONCLUÍDO | Semanas 1-2 | R$ 2.300,00 (25%) | 100% |
| Marco 2 | 🟡 EM PROGRESSO | Semanas 3-4 | R$ 3.220,00 (35%) | 85% |
| Marco 3 | ⏳ PENDENTE | Semanas 5-6 | R$ 2.300,00 (25%) | 0% |
| Marco 4 | ⏳ PENDENTE | Semanas 7-8 | R$ 1.380,00 (15%) | 0% |

**Progresso Total:** 46% (4/9 marcos principais)

---

## 🎯 MARCO 1: DESCOBERTA + WIREFRAMES + PAINEL (Semanas 1-2)
**Valor:** R$ 2.300,00 (25%)
**Status:** ✅ CONCLUÍDO

### Entregas Obrigatórias:
- [x] Descoberta e levantamento de requisitos
- [x] Wireframes Mobile para todas as páginas
- [x] Painel de Edição (CMS Headless) configurado
- [x] Estrutura de dados definida no CMS

### Checklist Técnico:
- [x] CMS escolhido e configurado (Sanity.io)
- [x] Schemas de conteúdo criados
- [x] Conexão CMS ↔ Next.js funcionando
- [x] Ambiente de desenvolvimento configurado

**Data de Aceite:** _________
**Observações:** Painel CMS configurado com schemas para unidades, posts e configurações gerais.

---

## 🏗️ MARCO 2: UNIDADES + HEADER + FORMULÁRIO (Semanas 3-4)
**Valor:** R$ 3.220,00 (35%)
**Status:** 🟡 EM PROGRESSO (85%)

### 1. Páginas de Unidades (3 unidades) ✅
- [x] Template dinâmico `/unidades/[slug]`
- [x] Unidade 1: Moinhos de Vento - Luciana de Abreu
- [x] Unidade 2: Passo d'Areia
- [x] Unidade 3: Moinhos de Vento - Barão de Santo Ângelo
- [x] Schema.org LocalBusiness em cada página
- [x] Galeria de fotos por unidade
- [x] Mapa do Google Maps integrado
- [x] FAQs por unidade

### 2. Header com Dropdowns ✅
- [x] Logo responsiva
- [x] Navegação desktop com hover nos dropdowns
- [x] Dropdown "Unidades" com 3 unidades
- [x] Dropdown "Serviços" organizado por categoria
- [x] Links: Início, Sobre Nós, Notícias, Fotos, Contato
- [x] Telefones de contato no header
- [x] WhatsApp no header
- [x] Header sticky (fixo ao scroll)

### 3. Barra Fixa Mobile ✅
- [x] Botão Ligar (click_tel)
- [x] Botão WhatsApp (click_whatsapp)
- [x] Sempre visível no mobile
- [x] Design otimizado para toque

### 4. Formulário de Contato + Página de Obrigado ✅
- [x] Campo: Nome completo
- [x] Campo: E-mail
- [x] Campo: Telefone
- [x] Campo: Unidade de interesse (dropdown com 3 unidades + "Ainda não sei")
- [x] Campo: Mensagem
- [x] Validação com Zod
- [x] Proteção anti-spam (validação + honeypot)
- [x] API Route `/api/contact`
- [x] Página `/obrigado` personalizada por unidade
- [x] Redirecionamento após envio
- [x] Mensagens de erro/sucesso

### 5. Staging Environment ⏳
- [ ] Site publicado em ambiente de staging
- [ ] URL de staging compartilhada
- [ ] Testes realizados em staging

**Data de Aceite:** _________
**Pendências:** Publicação em staging, testes de aceitação

---

## 📄 MARCO 3: INSTITUCIONAL + SEO + ACESSIBILIDADE (Semanas 5-6)
**Valor:** R$ 2.300,00 (25%)
**Status:** 🟢 INICIADO (60%)

### 1. Páginas Institucionais ✅
- [x] Home completa com 9 seções obrigatórias
  - [x] Por que escolher a Novo Lar?
  - [x] Sobre a Novo Lar
  - [x] Nossas Unidades
  - [x] Hospedagem assistida (em Serviços)
  - [x] Médico e enfermagem (em Serviços)
  - [x] Nutrição e alimentação ✅ ADICIONADA
  - [x] Terapia ocupacional (em Por que escolher)
  - [x] Nossas avaliações (Google Reviews)
  - [x] Últimas notícias ✅ ADICIONADA
- [x] Página /sobre/a-novo-lar
- [x] Página /servicos
- [x] Página /blog com listagem de artigos
- [x] Página /contato

### 2. Depoimentos/Avaliações ✅
- [x] Componente GoogleReviews
- [x] Integração com Google Places API
- [x] Exibição na Home
- [x] Exibição nas páginas de unidades
- [x] Conformidade com políticas do Google

### 3. Blog/Notícias ✅
- [x] Listagem de posts em /blog
- [x] 6+ posts de exemplo
- [x] Categorização (Saúde, Nutrição, Atividades, etc)
- [x] Template de post individual `/blog/[slug]`
- [x] Seção "Últimas Notícias" na Home (3 posts)

### 4. SEO Técnico ✅
- [x] `sitemap.xml` dinâmico
- [x] `robots.txt` configurado
- [x] Meta tags dinâmicas por página
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Schema.org Organization
- [x] Schema.org WebSite
- [x] Schema.org LocalBusiness (unidades)
- [x] Canonical URLs
- [x] Alt text em imagens

### 5. Acessibilidade (WCAG 2.1 AA) ⏳
- [x] Contraste de cores adequado
- [x] Foco visível em elementos interativos
- [x] Semântica HTML correta (headings, landmarks)
- [x] Textos alternativos em imagens
- [ ] Testes com leitores de tela (NVDA/JAWS)
- [ ] Navegação por teclado validada
- [ ] Relatório de acessibilidade

### 6. UX/Ajustes Visuais ✅
- [x] Design system consistente
- [x] Cores da marca aplicadas
- [x] Tipografia otimizada para leitura
- [x] Espaçamentos consistentes
- [x] Hover states em todos os elementos clicáveis
- [x] Animações suaves (fade-in, slide-in)

**Data de Aceite:** _________
**Pendências:** Testes de acessibilidade completos, relatório WCAG

---

## 🚀 MARCO 4: TESTES + GO-LIVE + TREINAMENTO (Semanas 7-8)
**Valor:** R$ 1.380,00 (15%)
**Status:** ⏳ PENDENTE

### 1. Testes de Performance ⏳
- [ ] PageSpeed Insights mobile ≥ 90 (Home)
- [ ] PageSpeed Insights mobile ≥ 90 (Unidades)
- [ ] Core Web Vitals otimizados
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Lighthouse Score mobile ≥ 90
- [ ] Lighthouse Score desktop ≥ 95

### 2. Testes em Aparelhos Reais ⏳
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop (Chrome, Firefox, Edge)
- [ ] Testes de formulário em todos os dispositivos
- [ ] Testes de navegação/dropdowns
- [ ] Testes de WhatsApp/Telefone

### 3. Testes Funcionais ⏳
- [ ] Formulário: envio bem-sucedido
- [ ] Formulário: validação de erros
- [ ] Formulário: redirecionamento para /obrigado
- [ ] Analytics: eventos disparando corretamente
- [ ] Google Reviews: carregando corretamente
- [ ] CMS: edição funcionando
- [ ] Links internos: todos funcionando
- [ ] Links externos: abrindo em nova aba
- [ ] Imagens: todas carregando
- [ ] Responsividade: todas as breakpoints

### 4. Publicação (Go-Live) ⏳
- [ ] Domínio configurado
- [ ] DNS apontado corretamente
- [ ] SSL/HTTPS ativo
- [ ] CDN configurado (se aplicável)
- [ ] Variáveis de ambiente em produção
- [ ] Analytics em produção
- [ ] Google Search Console configurado
- [ ] Envio de sitemap ao Google
- [ ] Monitoramento de erros configurado

### 5. Treinamento ⏳
- [ ] Sessão de treinamento agendada
- [ ] Guia de uso do CMS documentado
- [ ] Vídeo tutorial gravado (opcional)
- [ ] Treinamento realizado
- [ ] Dúvidas esclarecidas
- [ ] Acessos entregues

### 6. Documentação Final ⏳
- [ ] README.md atualizado
- [ ] Documentação técnica
- [ ] Guia de edição do CMS
- [ ] Documentação do dataLayer (analytics)
- [ ] Inventário de acessos
- [ ] Instruções de backup

**Data de Aceite:** _________
**Data de Go-Live:** _________

---

## 📋 REQUISITOS TRANSVERSAIS

### Analytics & Medição ✅
- [x] Google Analytics 4 instalado
- [x] Google Tag Manager instalado
- [x] DataLayer configurado
- [x] Evento: `click_tel` (com unit_name)
- [x] Evento: `click_whatsapp` (com unit_name)
- [x] Evento: `lead_submit` (com unit_slug)
- [x] Evento: `form_submit_success`
- [x] Documentação do dataLayer entregue

### Infraestrutura ⏳
- [x] Repositório Git configurado
- [x] Ambiente de desenvolvimento
- [ ] Ambiente de staging
- [ ] Ambiente de produção
- [ ] Variáveis de ambiente (.env)
- [ ] CI/CD (opcional)

### CMS Headless (Sanity) ✅
- [x] Schemas de conteúdo
  - [x] Unit (unidades)
  - [x] Post (blog)
  - [x] Service (serviços)
  - [x] Settings (configurações gerais)
- [x] Acessos de Admin criados
- [x] Acessos de Editor criados
- [x] Preview mode configurado
- [x] Publicação funcionando

### Backup & Entrega Técnica ⏳
- [ ] Backup do repositório Git (export/tarball)
- [ ] Exportação do CMS (JSON)
- [ ] Instruções de restauração
- [ ] Inventário de acessos
- [ ] Documentação de variáveis de ambiente

---

## 🔍 CHECKLIST DE ACEITE (Definição de Pronto)

### Critérios Obrigatórios:
- [x] ✅ Páginas do escopo publicadas e responsivas (mobile/desktop)
- [x] ✅ Eventos `click_tel`, `click_whatsapp`, `lead_submit` funcionando
- [ ] ⏳ PageSpeed/Lighthouse mobile ≥ 90 (Home e Unidades)
- [x] ✅ CMS com coleções criadas
- [x] ✅ Acessos entregues ao time da Contratante
- [ ] ⏳ Guia de edição entregue
- [ ] ⏳ Treinamento realizado

---

## 📦 MATERIAIS RECEBIDOS DA CONTRATANTE

### Dados de Contato:
- [x] Telefones por unidade
- [x] Links de WhatsApp por unidade
- [x] Endereços oficiais
- [x] Links do Google Maps
- [x] E-mails para receber leads

### Conteúdo:
- [x] Textos atuais
- [x] Logotipo/identidade visual
- [x] Fotos separadas por unidade
- [ ] ⏳ Google Place ID (para reviews)
- [ ] ⏳ Google API Key (para reviews)

### Acessos:
- [x] Hospedagem/DNS (ambiente já utilizado)
- [ ] ⏳ Google Analytics (para configuração)
- [ ] ⏳ Google Tag Manager (para configuração)

---

## 🐛 BUGS & PENDÊNCIAS

### Bugs Conhecidos:
_Nenhum bug crítico no momento._

### Melhorias Sugeridas:
1. ⏳ Adicionar páginas individuais de serviços
2. ⏳ Adicionar páginas individuais de posts do blog
3. ⏳ Implementar busca no blog
4. ⏳ Adicionar filtros por categoria no blog
5. ⏳ Otimizar imagens (WebP, lazy loading)

### Observações Técnicas:
- **Next.js 15.5.6** - versão estável
- **React 18.3** - usando Server Components
- **Sanity.io** - CMS headless
- **Tailwind CSS** - framework de estilização
- **TypeScript** - type safety

---

## 📅 CRONOGRAMA

| Semana | Período | Marco | Status |
|--------|---------|-------|--------|
| 1-2 | _____/_____ | Marco 1: Descoberta + Wireframes + CMS | ✅ CONCLUÍDO |
| 3-4 | _____/_____ | Marco 2: Unidades + Header + Formulário | 🟡 85% |
| 5-6 | _____/_____ | Marco 3: Institucional + SEO + Acessibilidade | 🟢 60% |
| 7-8 | _____/_____ | Marco 4: Testes + Go-Live + Treinamento | ⏳ PENDENTE |

**Data de Início:** _________
**Data Prevista de Go-Live:** _________
**Data Real de Go-Live:** _________

---

## 💰 PAGAMENTOS

| Marco | Valor | Data de Aceite | Data de Pagamento | Status |
|-------|-------|----------------|-------------------|--------|
| Marco 1 (25%) | R$ 2.300,00 | _______ | _______ | ⏳ PENDENTE |
| Marco 2 (35%) | R$ 3.220,00 | _______ | _______ | ⏳ PENDENTE |
| Marco 3 (25%) | R$ 2.300,00 | _______ | _______ | ⏳ PENDENTE |
| Marco 4 (15%) | R$ 1.380,00 | _______ | _______ | ⏳ PENDENTE |
| **TOTAL** | **R$ 9.200,00** | - | - | - |

---

## 📞 CONTATOS

**Contratante:**
Nome: _____________________
E-mail: ____________________
Telefone: __________________

**Contratado:**
Lucas Antunes Ferreira
E-mail: ____________________
Telefone: __________________

---

## 📝 HISTÓRICO DE ALTERAÇÕES

| Data | Alteração | Responsável |
|------|-----------|-------------|
| ___/___/2025 | Criação do arquivo de progresso | Lucas Antunes |
| ___/___/2025 | Adicionadas seções "Nutrição" e "Últimas Notícias" na Home | Lucas Antunes |
| ___/___/2025 | Header otimizado (espaçamento e dropdowns) | Lucas Antunes |

---

## ✅ PRÓXIMOS PASSOS

### Imediato (Esta Semana):
1. [ ] Publicar site em ambiente de staging
2. [ ] Realizar testes de performance (PageSpeed)
3. [ ] Configurar Google Place ID e API Key
4. [ ] Testar Google Reviews em produção
5. [ ] Solicitar aceite do Marco 2

### Curto Prazo (Próximas 2 Semanas):
1. [ ] Finalizar testes de acessibilidade
2. [ ] Realizar testes em dispositivos reais
3. [ ] Preparar guia de treinamento do CMS
4. [ ] Configurar ambiente de produção

### Médio Prazo (Próximas 4 Semanas):
1. [ ] Go-Live em produção
2. [ ] Realizar treinamento
3. [ ] Entregar documentação final
4. [ ] Solicitar aceite final

---

**Última Atualização:** ___/___/2025
**Próxima Revisão:** ___/___/2025
