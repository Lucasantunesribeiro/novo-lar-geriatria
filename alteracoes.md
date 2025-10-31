# Alterações do Site – Novo Lar Geriatria

> Diretrizes de UI/UX e SEO alinhadas às referências: MedSênior (header/navegação) e Familiar (SEO/estrutura de conteúdo). As cores e tipografia permanecem da marca Novo Lar.

## 1) Resumo executivo
- Tornar as fotos e a estrutura das unidades o foco principal (mobile-first).
- Header no estilo MedSênior (navegação clara, CTA visível, ícone do WhatsApp no header + botão flutuante).
- Substituir a seção "Contato" por uma seção de Fotos/Infra (“Veja nossa estrutura”).
- Depoimentos integrados automaticamente do Google (sem scraping), com Place ID.
- Blog fora do header; permanece uma seção “Últimas notícias” na Home.
- Remover os 2 botões do Hero; manter 1 CTA principal “Solicite mais informações”.
- Páginas por Unidade com dados estruturados (LocalBusiness), telefones/WhatsApp próprios e FAQ.

## 2) Mudanças de UI/UX (inspiradas na MedSênior)
- Header fixo (desktop e mobile) com itens: Conheça a Novo Lar, Unidades, Notícias, Fale conosco.
- CTA prioritário: “Solicite mais informações” e ícone do WhatsApp (no header e flutuante).
- Barra fixa mobile (inferior) com 3 ações: Ligar, WhatsApp, Solicitar informações.
- Hero section enxuto: 1 CTA apenas (sem dois botões), copy objetiva e imagem focada em pessoas/cuidados.
- Seção “Veja nossa estrutura” substitui “Contato” na Home, com galeria responsiva e destaque de fotos nítidas.
- Módulo “Nossas avaliações” com carrossel de reviews do Google.
- Seção “Por que escolher a Novo Lar?” com ícones e microprovas (equipe 24h, alimentação, terapia, etc.).
- Acessibilidade: foco visível, navegação por teclado, labels/ARIA, contraste WCAG 2.1 AA.

## 3) SEO/Conteúdo (inspirados na Familiar)
- Títulos H1/H2 hierárquicos por página; metatags dinâmicas via CMS.
- Conteúdos de Unidades com: endereço completo, telefones/WhatsApp, horário, mapa, fotos, FAQ e depoimentos.
- Dados estruturados Schema.org: LocalBusiness nas páginas de Unidade; WebSite + SearchAction no root.
- Sitemap, robots, canonical, OpenGraph/Twitter Cards, imagem de compartilhamento por página.
- Conteúdo de blog mantido apenas na Home (cards de 3–6 posts), rota Notícias acessível na navbar.

## 4) Estrutura de páginas e sessões
- Home
  - Hero (1 CTA “Solicite mais informações”, sem botões duplicados)
  - Por que escolher a Novo Lar?
  - Sobre a Novo Lar
  - Veja nossa estrutura (galeria de fotos; substitui “Contato”)
  - Serviços (Hospedagem assistida, Médico e Enfermagem, Nutrição, Terapia Ocupacional)
  - Nossas Unidades (cards + CTA)
  - Nossas avaliações (Google Reviews)
  - Últimas notícias (cards do blog)
- Unidades (3 páginas)
  - Conteúdo local, fotos, mapa, contatos, FAQ, dados estruturados
- Conheça a Novo Lar (institucional)
- Notícias (listagem) e Post (detalhe)
- Fale conosco (formulário + telefones/WhatsApp)
- Página de Obrigado (dinâmica por unidade)

## 5) Header e CTAs
- Itens: Conheça a Novo Lar, Unidades, Notícias, Fale conosco.
- CTA no header: “Solicite mais informações”.
- Ícone do WhatsApp no header (abre link wa.me/unidade) e botão flutuante no viewport.
- Remover “Blog” do header; manter como “Notícias”.

## 6) Hero Section
- Remover os 2 botões atuais.
- Manter 1 CTA primário: “Solicite mais informações”.
- Mensagem curta orientada a benefício; foto com foco humano e alta nitidez.

## 7) Seção de Fotos (substitui Contato)
- Grid responsivo (3–6 imagens principais) com lightbox.
- Título: “Veja nossa estrutura”. Subtítulo enfatizando conforto, equipe e segurança.
- CTA secundário: “Ver mais fotos da unidade”.

## 8) Depoimentos do Google
- Fonte: Google Places API; requer Place ID e API Key fornecidos pela Contratante.
- Exibição: nome, rating, trecho do review, data, selo Google.
- Carrossel com 8–12 últimas avaliações (respeitando quotas/termos Google).
- Sem edição de conteúdo de terceiros; sem scraping.

## 9) Blog / Notícias
- Remover item “Blog” do header. Manter “Notícias”.
- Home mostra cartões de últimas notícias com título, resumo e data.
- Página de listagem com filtros/categorias e paginação.

## 10) Formulários e captação
- Campo “Unidade de interesse”.
- Proteções: honeypot e reCAPTCHA (quando aplicável).
- Página de Obrigado com mensagem personalizada por unidade.
- Encaminhamento de leads para e-mails configurados; logs essenciais sem dados sensíveis.

## 11) CMS Headless (conteúdos)
- Coleções: Global (SEO padrão, telefones globais), Unidades (dados, fotos, FAQ), Serviços, Notícias, Depoimentos (fonte externa), Configurações (links WhatsApp, mapas).
- Campos: títulos, descrições, imagens, telefones/WhatsApp, endereços, ordem de itens, SEO (title/description/og:image).
- Layout/estilo permanece em código (design system da marca).

## 12) Acessibilidade
- Semântica HTML, labels e ARIA.
- Foco visível e ordem lógica de tab.
- Contraste AA; texto alternativo descritivo nas imagens.

## 13) Performance
- Imagens em WebP com sizes/srcset e lazy-loading.
- Split de código, prefetch leve das rotas, cache adequado.
- Meta-alvo: Lighthouse Mobile ≥ 90 (Home/Unidades).

## 14) Analytics e eventos
- Eventos: click_tel, click_whatsapp, lead_submit (com unidade).
- Documentar dataLayer para time de analytics (GA4/Tag Manager/ADS pela Contratante).

## 15) Infraestrutura inicial
- Publicação em ambiente já utilizado pela Contratante; DNS/SSL/CDN quando aplicável.
- Ambientes: staging e produção; variáveis de ambiente seguras (.env).

## 16) Cronograma (8 semanas)
- Marco 1 (Semanas 1–2): Descoberta + Wireframes Mobile + CMS configurado.
- Marco 2 (Semanas 3–4): Unidades (3) + Header/Popover + Barra Fixa Mobile + Formulário + Obrigado.
- Marco 3 (Semanas 5–6): Institucional/Serviços/Sobre/Depoimentos/Notícias + UX + SEO/A11y básicos.
- Marco 4 (Semanas 7–8): Testes reais + Go‑live + Treinamento.

## 17) Critérios de aceite
- Páginas do escopo publicadas e responsivas.
- Eventos click_tel, click_whatsapp, lead_submit ativos + documentação dataLayer.
- Lighthouse Mobile ≥ 90 (Home e Unidades) considerando variações.
- CMS com coleções publicadas e acessos entregues.

## 18) Referências
- Site Familiar Home Care (estrutura/SEO)
- Site MedSênior (header/navegação)
- Site Cuidando em Casa (benchmark secundário)

---

# Contrato (numeração revisada)

CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE DESENVOLVIMENTO DE SITE INSTITUCIONAL

Contratante: ______________________________________________, CNPJ nº ____________________, com sede à _______________________________________________, neste ato representada por seu(s) representante(s) legal(is).

Contratado: Lucas Antunes Ferreira, CPF nº ____________________, e-mail: ____________________, telefone: ____________________.

Objeto: desenvolvimento e entrega de site institucional mobile‑first com painel de edição (CMS headless), páginas por Unidade (3), captação de contatos (Ligar/WhatsApp/Formulário), SEO/Acessibilidade essenciais e documentação/treinamento, conforme este contrato e anexos.

## 1. ESCOPO (ENTREGÁVEIS)
1.1 Site institucional responsivo (prioridade mobile) com as seguintes seções/rotas:
- Home com as sessões: Por que escolher a Novo Lar?; Sobre a Novo Lar; Nossas Unidades; Hospedagem assistida; Médico e enfermagem; Nutrição e alimentação; Terapia ocupacional; Nossas avaliações (exibição automática do Google); Últimas notícias.
- Rotas de navegação (header): Conheça a Novo Lar; Unidades; Notícias; Fale conosco.
- Inclui Página de Obrigado pós‑formulário.

1.2 Painel de edição (CMS headless): estrutura de conteúdo para edição de textos, imagens, telefones/WhatsApp, endereços, FAQs, ordem de itens e SEO básico (título/descrição/imagem de compartilhamento). O layout/estilo (componentes/cores) permanece em código.

1.3 Captação e formulário: campo “Unidade de interesse”, proteção anti‑spam (honeypot e reCAPTCHA, quando aplicável), Página de Obrigado personalizada por unidade, logs essenciais (sem dados sensíveis) e encaminhamento dos leads para e‑mail indicado pela Contratante.

1.4 SEO técnico & Acessibilidade (essenciais): sitemap, robots, metas dinâmicas, dados estruturados schema.org (LocalBusiness) nas páginas de unidade; boas práticas WCAG 2.1 AA (contraste, foco visível, semântica e textos alternativos).

1.5 Medição/Analytics: implementação de eventos (click_tel, click_whatsapp, lead_submit com identificação da unidade) e documentação do dataLayer para integração pela equipe de analytics da Contratante (configuração em GA4/Tag Manager/ADS pela Contratante).

1.6 Infraestrutura inicial: configuração técnica inicial no ambiente/plataformas já utilizados pela Contratante, incluindo publicação, DNS/SSL/CDN quando aplicável, ambientes de staging e produção, e variáveis de ambiente/segurança.

1.7 Avaliações do Google (exibição): bloco na Home “Nossas avaliações” com reviews do Google da(s) unidade(s) da Contratante, via Google Places API (ou recurso equivalente do ambiente atual). Requisitos: fornecimento de Place ID e chave de API; exibição conforme políticas/termos e limites de uso; sem scraping/edição de conteúdo de terceiros; sujeita a quotas/disponibilidade. Custos de API, se houver, como custo de terceiro (Cláusula 8).

1.8 O projeto apenas exibe avaliações disponibilizadas pela API; não inclui edição, remoção, moderação ou resposta (atividade do Perfil da Empresa no Google).

## 2. CRONOGRAMA (8 SEMANAS) E MARCOS (ANEXO A)
2.1 O projeto terá prazo estimado de 8 (oito) semanas, contadas da data de início (recebimento dos acessos e materiais listados no Anexo C).

2.2 Marcos de entrega e pagamento (valores no Anexo A) — pagamento após aceite de cada marco.

2.3 Datas exatas serão definidas no Kickoff e anexadas ao cronograma.

## 3. PREÇO, CONDIÇÕES E ACEITE
3.1 Preço total fixo: R$ 9.200,00 (nove mil e duzentos reais).

3.2 Pagamento por marcos (Anexo A): após envio do link e checklist de aceite do marco, a Contratante terá até 3 (três) dias úteis para efetuar o pagamento via PIX/transferência.

3.3 Critérios de aceite (Definição de Pronto): Páginas do escopo publicadas e responsivas (mobile/desktop). Eventos click_tel, click_whatsapp, lead_submit ativos e documentados. PageSpeed/Lighthouse (mobile) ≥ 90 em Home e Unidades (com variação aceitável de rede/aparelho). CMS com coleções publicadas e acessos entregues ao time da Contratante.

3.4 Atrasos de pagamento: multa 2%, juros 1% a.m. e correção monetária (IPCA) pro rata die.

## 4. OBRIGAÇÕES DAS PARTES
4.1 Contratante: (a) Fornecer logotipo, identidade, textos, fotos, telefones/WhatsApp por unidade, informações de contato, políticas e acessos (hospedagem/DNS/analytics). (b) Indicar responsáveis por conteúdo e aprovações em cada marco. (c) Realizar os pagamentos nos prazos.

4.2 Contratado: (a) Executar o projeto conforme escopo e cronograma. (b) Entregar documentação e realizar treinamento. (c) Manter confidencialidade e boas práticas de segurança; não registrar dados sensíveis em logs. (d) Comunicar riscos/impedimentos/dependências relevantes.

## 5. SUPORTE, GARANTIA E MANUTENÇÃO
5.1 Garantia de 30 (trinta) dias após o go‑live para correções de bugs dentro do escopo, sem custo.

5.2 Alterações/evoluções de escopo após o aceite seguem Change Request (Cláusula 7).

5.3 Plano opcional de manutenção (não incluso): suporte leve mensal para pequenos ajustes, atualizações e acompanhamento — mediante orçamento/contrato separado.

## 6. MUDANÇAS DE ESCOPO (CHANGE REQUEST)
6.1 Demandas fora do escopo serão orçadas à parte, por preço fechado ou por hora técnica (R$ 120,00/h), com impacto de prazo e custo previamente aprovados por e‑mail.

6.2 Alterações que afetem marcos exigirão ajuste do cronograma.

## 7. CUSTOS DE TERCEIROS
7.1 Custos de terceiros (domínio, hospedagem, CDN, provedores de e‑mail, licenças de plugins/temas ou upgrades de plano do CMS) são de responsabilidade da Contratante e somente serão contratados mediante aprovação prévia.

7.2 O projeto será implementado nas plataformas/ambiente já utilizados pela Contratante, preservando compatibilidade e acesso administrativo da Contratante.

## 8. PROPRIEDADE INTELECTUAL E PORTFÓLIO
8.1 Após a quitação integral, a Contratante recebe a titularidade do código específico do projeto (frontend/integrações sob encomenda) e do conteúdo publicado. Frameworks/bibliotecas/componentes de terceiros permanecem sob suas licenças.

8.2 O Contratado poderá mencionar o projeto em portfólio (prints e descrição), sem expor dados sensíveis.

## 9. PRIVACIDADE, LGPD E SEGURANÇA
9.1 As partes comprometem‑se a observar a LGPD (Lei 13.709/2018).

9.2 O formulário coletará apenas dados necessários para contato/comercial; dados sensíveis não serão solicitados.

9.3 Medidas: HTTPS/SSL, cabeçalhos de segurança (ex.: HSTS, CSP básica), proteção anti‑spam e segregação de segredos (.env).

9.4 A Contratante é Controladora dos dados; o Contratado atua como Operador no âmbito deste projeto.

## 10. RESCISÃO
10.1 O contrato poderá ser rescindido por qualquer parte, sem ônus, mediante aviso prévio de 10 (dez) dias.

10.2 Em caso de rescisão, permanecem devidos os valores dos marcos concluídos e dos serviços proporcionais executados até a data; o Contratado entregará os materiais produzidos até então.

## 11. LIMITAÇÃO DE RESPONSABILIDADE
11.1 A responsabilidade do Contratado, por quaisquer danos, fica limitada ao valor total deste contrato, excluídos danos indiretos, lucros cessantes e indisponibilidades de terceiros.

## 12. DISPOSIÇÕES FINAIS
12.1 Comunicados e aprovações poderão ocorrer por e‑mail indicado pelas partes.

12.2 Este contrato obriga as partes e seus sucessores. Alterações somente por aditivo escrito.

12.3 Foro: Comarca de Porto Alegre/RS.

### ANEXO A — MARCOS, PRAZOS E VALORES
- Marco 1 (Semanas 1–2): Descoberta + Wireframes Mobile + CMS configurado — R$ 2.300,00 (25%).
- Marco 2 (Semanas 3–4): Unidades (3) + Header/Popover + Barra Fixa Mobile + Formulário + Página de Obrigado reformulada — R$ 3.220,00 (35%).
- Marco 3 (Semanas 5–6): Institucional (Serviços/Sobre/Depoimentos/Notícias) + UX + SEO/Acessibilidade básicos — R$ 2.300,00 (25%).
- Marco 4 (Semanas 7–8): Testes (performance + aparelhos reais) + Go‑live + Treinamento — R$ 1.380,00 (15%).
- Prazo total estimado: 8 (oito) semanas a partir do Kickoff e do recebimento dos materiais e acessos do Anexo C.

### ANEXO B — CRITÉRIOS DE ACEITE (DEFINIÇÃO DE PRONTO)
- Páginas do escopo publicadas e responsivas (mobile/desktop).
- Eventos click_tel, click_whatsapp, lead_submit funcionando; documentação do dataLayer entregue.
- PageSpeed/Lighthouse (mobile) ≥ 90 em Home e Unidades (considerando variação de rede/aparelho).
- CMS com coleções criadas e acessos entregues (Admin/Editor para a Contratante).
- Guia de edição e treinamento realizados.

### ANEXO C — MATERIAIS/ACESSOS NECESSÁRIOS PARA INÍCIO
- Telefones e links de WhatsApp por unidade; endereços oficiais e links do Google Maps.
- Textos atuais e logotipo/identidade (se houver).
- Fotos separadas por unidade (quando disponíveis).
- E‑mails que receberão os leads do formulário.
- Acessos/convites de colaborador à hospedagem/DNS/analytics já utilizados pela Contratante.

Assinaturas

Contratante: __________________________________________
Nome: _________________________________________________
Cargo: _________________________________________________
Data: ____/____/______

Contratado: Lucas Antunes Ferreira
CPF: _________________________________________________
Data: ____/____/______
