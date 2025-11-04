# Progresso – Roteiro para Conclusão do Projeto

Este roteiro traduz as pendências identificadas no `PROGRESSO.md` e nas obrigações do Contrato.md. Execute as etapas na ordem sugerida (cada conjunto depende do anterior).

---

## 1. Preparação de credenciais e ambiente
1. Solicitar à contratante:
   - Place ID oficial (único) e Google Places API key.
   - ID de medição GA4 e container GTM.
   - Endereço de e-mail institucional para recebimento dos leads.
   - Acesso ao provedor de hospedagem/DNS.
2. Atualizar `.env.local` e os ambientes remotos com:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_TOKEN`.
   - `NEXT_PUBLIC_GOOGLE_PLACE_ID`, `GOOGLE_PLACES_API_KEY`.
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_GTM_ID`.
   - `NEXT_PUBLIC_SITE_URL`, `CONTACT_EMAIL`.
3. Validar que `GoogleReviews` renderiza reviews reais (ajustar mensagens de fallback e monitorar limites/quota da API).

## 2. Integração completa com o Sanity CMS
1. Reescrever `lib/site-data.ts`, `lib/services-data.ts` e `lib/blog-data.ts` para buscar dados via `lib/sanity/queries.ts`.
2. Popular os schemas no Sanity com conteúdo aprovado (unidades, serviços, posts, depoimentos, configurações gerais).
3. Implementar suporte a preview (`draftMode`) com rota `/api/preview` e toggles no Studio.
4. Criar rotina de backup (`npx sanity dataset export`) e registrar localização/periodicidade.
5. Ajustar componentes que utilizam `mock-data.ts` para emitir aviso quando o CMS não estiver configurado (evitar divergências silenciosas).

## 3. Fluxo de captação de leads
1. Integrar reCAPTCHA (ou hCaptcha) no formulário:
   - Componente client-side.
   - Validação server-side em `/api/contact`.
2. Persistir leads:
   - Criar documento `lead` no Sanity ou integrar com serviço de e-mail (Resend/Mailgun).
   - Registrar metadata (unidade, origem, timestamp, user-agent).
3. Enviar notificação para `CONTACT_EMAIL` com template HTML e fallback de texto.
4. Registrar falhas em observabilidade (console + serviço externo, se disponível).
5. Atualizar mensagens de feedback e `dataLayer` com status do envio (sucesso/erro).

## 4. SEO, acessibilidade e analytics
1. Executar Lighthouse/PageSpeed (mobile e desktop) para Home e `/unidades/[slug]`, registrar métricas e prints.
2. Corrigir problemas apontados (carregamento de imagens, CLS, uso de `next/script`, tamanhos de fonte, etc.).
3. Rodar auditoria WCAG com axe DevTools e navegação por teclado; documentar correções aplicadas.
4. Revisar alt text e atributos `aria-*` em galerias, botões e componentes interativos.
5. Criar `ANALYTICS.md` detalhando eventos do dataLayer (nome, parâmetros, gatilhos).
6. Criar `ACESSIBILIDADE.md` com checklist das diretrizes atendidas.
7. Configurar GTM/GA4 com os eventos `click_tel`, `click_whatsapp`, `lead_submit`, `form_submit_success` e validar pelo debug view.

## 5. Infraestrutura e deploy
1. Provisionar ambiente de staging (ex.: Vercel):
   - Conectar repositório Git.
   - Definir variáveis de ambiente com credenciais reais.
   - Habilitar previews para cada PR.
2. Provisionar ambiente de produção:
   - Configurar domínio, DNS, SSL/CDN.
   - Ajustar headers de segurança (se aplicável).
3. Definir pipeline (CI/CD ou checklist manual) para build e deploy.
4. Configurar monitoramento básico (Vercel Analytics, Sentry ou similar) e alertas de erro.
5. Documentar o processo em `docs/deploy.md` ou seção dedicada do README.

## 6. Documentação e treinamento
1. Atualizar o `README` para refletir o estado atual (remover seções não implementadas e incluir novos passos).
2. Criar manual do CMS (estrutura de coleções, fluxo de publicação, permissões).
3. Preparar apresentação/roteiro de treinamento e agendar sessão com a equipe da contratante.
4. Registrar perguntas frequentes e respostas (FAQ interno) para suporte pós-entrega.
5. Entregar inventário de acessos (CMS, hosting, analytics) com níveis de permissão.

## 7. Checklist de encerramento
1. Executar smoke tests pós-deploy (formulário, navegação, conteúdos dinâmicos, eventos analytics).
2. Validar `robots` e `sitemap` em produção e enviar ao Google Search Console.
3. Confirmar que o componente `GoogleReviews` exibe avaliações reais e trata respostas de erro/limite.
4. Obter aceite formal do cliente (e-mail, ata ou formulário de aceite).
5. Arquivar relatório final e links relevantes na pasta de entrega.

---

Seguir este roteiro encerra as obrigações contratuais (cláusulas 1.1 a 1.7, métricas/analytics, infraestrutura inicial, testes e treinamento). Atualize os itens conforme avançar e reporte andamento no `PROGRESSO.md`.
