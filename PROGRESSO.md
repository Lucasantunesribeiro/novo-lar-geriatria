# PROGRESSO DO PROJETO – NOVO LAR GERIATRIA

**Contrato:** Desenvolvimento de site institucional mobile-first com CMS headless, analytics e infraestrutura inicial  
**Prazo contratual:** 8 semanas a partir do kickoff (ver Anexo A do contrato)  
**Status atual:** Em desenvolvimento  
**Progresso estimado:** ~45% das entregas contratuais (com base em evidências no repositório)

---

## Resumo Executivo

- **Concluído:** estrutura das páginas principais (Home, Serviços com detalhes, Sobre, Unidades, Depoimentos, Blog, Contato e Obrigado), navegação responsiva (desktop/mobile), componentes de CTA (botão WhatsApp, barra fixa mobile) e módulo de avaliações integrado à Google Places API via componente `GoogleReviews`.
- **Em andamento:** integração real com o CMS Sanity (dados ainda hardcoded em `lib/site-data.ts` e `lib/services-data.ts`), finalização do fluxo de leads (salvar/enviar via e-mail e reCAPTCHA), ajustes de SEO/acessibilidade previstos na etapa 3, e parametrização do componente de reviews com Place ID único.
- **Bloqueios:** ausência de credenciais de produção (Google Places API key, Place ID definitivo, GA4/GTM), falta de diretrizes para envio de e-mails/transporte de leads, e nenhum ambiente de staging configurado para validação.
- **Dependências da contratante:** confirmar Place ID e chave de API, disponibilizar GA4/GTM com permissões de edição, definir e-mail/remetente para notificações de lead, liberar infraestrutura (hospedagem/DNS) e aprovar conteúdo definitivo para migração ao CMS Sanity.

## Status dos Marcos (Contrato Anexo A)

| Marco | Entregas-chave | Status | Observações |
| --- | --- | --- | --- |
| Marco 1<br>(Semanas 1-2) | Descoberta, wireframes mobile, CMS configurado | 🟡 Em andamento | Schemas Sanity criados, mas o site consome dados estáticos; não há registro de discovery/wireframes no repositório. |
| Marco 2<br>(Semanas 3-4) | Unidades (3), header/popover, barra mobile, formulário, staging | 🟠 Parcial | UI pronta e formulário funcional, porém sem reCAPTCHA, sem entrega de leads e sem ambiente de staging. |
| Marco 3<br>(Semanas 5-6) | Institucional, SEO básico, acessibilidade | 🟠 Parcial | Páginas montadas e dados estruturados, mas faltam testes PageSpeed/WCAG, revisão de alt texts e integração do blog com o CMS. |
| Marco 4<br>(Semanas 7-8) | Testes finais, publicação, treinamento | 🔴 Não iniciado | Não há evidências de testes formais, preparação de go-live, documentação final ou treinamento. |

## Detalhamento por Marco

### Marco 1 – Descoberta + Wireframes + CMS Headless
- [ ] Relatório de descoberta (personas, jornadas, requisitos priorizados) anexado ao repositório ou pasta compartilhada.
- [ ] Wireframes mobile aprovados (Home, Unidades, Contato, Blog) versionados ou anexados (não encontrados).
- [x] Sanity configurado (`sanity/sanity.config.ts`) com schemas para unidades, serviços, posts, depoimentos e configurações.
- [ ] Site consumindo conteúdo do Sanity (Home, serviços, navegação e contatos ainda utilizam `lib/site-data.ts` e `lib/services-data.ts`).
- [ ] Documentação do CMS (papéis, fluxos de publicação, instruções de acesso) entregue à contratante.

### Marco 2 – Unidades + Header + Formulário + Staging
- [x] Template dinâmico `/unidades/[slug]` com `LocalBusinessSchema` e informações completas.
- [ ] Conteúdo de unidades carregado via CMS (hoje depende de `mockUnits` quando não há credenciais).
- [x] Header responsivo com dropdown de unidades e grupos de serviços.
- [x] Barra fixa mobile com ações de Ligar/WhatsApp/Formulário.
- [x] Formulário `/contato` com validação (React Hook Form + Zod) e honeypot.
- [ ] Implementação de reCAPTCHA/hCaptcha conforme cláusula 1.3 (apenas honeypot disponível).
- [ ] Persistência/envio dos leads (`TODO` em `/api/contact/route.ts` – ainda não envia e-mail nem grava no CMS).
- [x] Página `/obrigado` parametrizada por unidade (via querystring).
- [ ] Ambiente de staging publicado e validado com o cliente.

### Marco 3 – Institucional + SEO + Acessibilidade
- [x] Home com as seções exigidas (Por que escolher, Sobre, Unidades, Serviços/Hospedagem, Médico & enfermagem, Nutrição, Terapia ocupacional, Nossas avaliações, Últimas notícias).
- [x] Páginas institucionais: `/sobre/a-novo-lar`, `/sobre/estrutura`, `/sobre/atividades`, `/sobre/equipe`, `/sobre/fotos`, `/sobre/localizacao`.
- [x] Página `/servicos` e detalhes `/servicos/[slug]`.
- [x] Página `/depoimentos` e componente `GoogleReviews`.
- [x] Blog listagem `/blog` e template `/blog/[slug]` (conteúdo estático em `lib/blog-data.ts`).
- [ ] Blog e seções da Home consumindo posts do CMS Sanity.
- [x] `robots.ts` e `sitemap.ts` implementados.
- [x] Dados estruturados (`JsonLd`, `LocalBusinessSchema`) presentes.
- [ ] PageSpeed/Lighthouse ≥ 90 mobile para Home e Unidades (testes não encontrados).
- [ ] Auditoria de acessibilidade (taborder, leitores de tela) registrada.
- [ ] Revisão final de textos alternativos / `aria-*` com checklist WCAG documentado.
- [ ] Ajustar `GoogleReviews` para utilizar Place ID oficial (component pronto, aguardando variável).

### Marco 4 – Testes, Publicação e Treinamento
- [ ] Testes funcionais end-to-end / smoke tests (formulário, navegação, eventos).
- [ ] Testes cross-browser e cross-device documentados.
- [ ] Plano de roll-out e checklist de go-live definidos.
- [ ] Ambiente de produção configurado (DNS, SSL/CDN, variáveis).
- [ ] Monitoramento (logs/observabilidade) configurado.
- [ ] Sessão de treinamento com equipe da contratante agendada e realizada.
- [ ] Guia do CMS + manual de operação entregues.
- [ ] Termo de aceite / ata de reunião registrada.

## Requisitos Transversais

### CMS Sanity
- [x] Schemas principais (`unit`, `service`, `blogPost`, `testimonial`, `siteSettings`) definidos.
- [ ] Conteúdo sincronizado com o front-end via `getAllUnits`, `getAllServices`, `getBlogPosts`.
- [ ] Função de preview / modo rascunho configurado.
- [ ] Export/backup do CMS documentado.

### Analytics & Medição
- [x] Componente `GoogleAnalytics` e dataLayer inicial (eventos `click_tel`, `click_whatsapp`, `lead_submit`, `form_submit_success`).
- [ ] IDs reais de GA4/GTM configurados (`.env` permanece com placeholders).
- [ ] Documentação do dataLayer (contrato §1.5) – arquivo não encontrado (`ANALYTICS.md` ausente).
- [ ] Eventos adicionais `click_tel`/`click_whatsapp` validados em ambiente real (necessário GA/GTM).

### Infraestrutura & DevOps
- [x] Repositório Git estruturado.
- [ ] Ambiente de staging (preview) configurado.
- [ ] Ambiente de produção configurado.
- [ ] Pipeline CI/CD ou checklists para deploy.
- [ ] Variáveis de ambiente documentadas para produção (além da `.env.example`).

### Documentação & Treinamento
- [ ] README alinhado com o estado real do projeto (atualmente indica artefatos inexistentes).
- [ ] ACESSIBILIDADE.md e ANALYTICS.md (mencionados no README) precisam ser criados.
- [ ] Guia de edição no CMS / manual operacional pendente.
- [ ] Roteiro de treinamento e gravação de sessão (se aplicável) pendentes.

## Dependências da Contratante

- Place ID oficial das unidades e chave da Google Places API.
- Credenciais de GA4 e/ou GTM com permissões para configuração.
- Definição do e-mail/remetente que receberá os leads do formulário.
- Acesso à infraestrutura (DNS/hospedagem) para provisionamento de staging e produção.
- Validação/aprovação de conteúdo a ser migrado para o CMS Sanity.

## Riscos e Observações

- O site depende de dados estáticos; sem integração ao CMS a contratante não conseguirá editar conteúdo como previsto.
- O fluxo de leads não envia mensagens nem salva registros; risco de perda de contatos após go-live.
- Sem credenciais de Google Places/Analytics não é possível validar as integrações obrigatórias.
- Falta de ambiente de staging impede homologação pelo cliente e testes de performance.
- README comunica funcionalidades (documentação de acessibilidade/analytics) que não existem, podendo gerar expectativa indevida.

## Próximas Ações Sugeridas

1. Configurar variáveis de ambiente (Sanity, Google Places, GA4/GTM) e validar que o front-end consome os dados do CMS.
2. Finalizar o fluxo de leads: integrar com Sanity (schema `lead`) e/ou serviço de e-mail, adicionar reCAPTCHA e logs seguros.
3. Criar ambiente de staging (Vercel/Netlify) com build automatizado para testes do cliente.
4. Conectar blog/notícias e seções dinâmicas ao CMS; remover dependências de `lib/site-data.ts` quando possível.
5. Executar auditorias de SEO/acessibilidade/PageSpeed, registrar resultados e aplicar ajustes.
6. Produzir documentação pendente (ACESSIBILIDADE.md, ANALYTICS.md, guia do CMS) e preparar material de treinamento.

## Histórico de Atualizações

| Data | Alteração | Responsável |
| --- | --- | --- |
| 04/11/2025 | Revisão completa do progresso conforme contrato, identificação de pendências e roteiro atualizado | Codex (assistente) |

**Última atualização:** 04/11/2025  
**Próxima revisão sugerida:** 11/11/2025
