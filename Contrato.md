# CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE DESENVOLVIMENTO DE SITE INSTITUCIONAL

**Contratante:** ______________________________________________, CNPJ nº ____________________, com sede à _______________________________________________, neste ato representada por seu(s) representante(s) legal(is).
**Contratado:** **Lucas Antunes Ferreira**, CPF nº ____________________, e-mail: ____________________, telefone: ____________________.

**Objeto:** desenvolvimento e entrega de **site institucional mobile‑first** com **painel de edição (CMS headless)**, páginas por **Unidade (3)**, captação de contatos (Ligar/WhatsApp/Formulário), SEO/Acessibilidade essenciais e documentação/treinamento, conforme este contrato e anexos.

---

## 1. ESCOPO (ENTREGÁVEIS)

1.1 **Site institucional** responsivo (prioridade mobile) com as seguintes seções/rotas:

* **Home** com as sessões:

  * **Por que escolher a Novo Lar?**
  * **Sobre a Novo Lar**
  * **Nossas Unidades**
  * **Hospedagem assistida**
  * **Médico e enfermagem**
  * **Nutrição e alimentação**
  * **Terapia ocupacional**
  * **Nossas avaliações** (exibição automática de avaliações **diretamente do Google**)
  * **Últimas notícias**

* **Rotas de navegação (header):** **Conheça a Novo Lar**, **Unidades**, **Notícias**, **Fale conosco**.

Inclui ainda: **Página de Obrigado** pós‑formulário.

1.2 **Painel de edição (CMS headless):** estrutura de conteúdo para edição de textos, imagens, telefones/WhatsApp, endereços, FAQs, ordem de itens e SEO básico (título/descrição/imagem de compartilhamento). O layout/estilo (componentes/cores) permanece em código.

1.3 **Captação e formulário:** campo “Unidade de interesse”, proteção anti‑spam (honeypot e reCAPTCHA, quando aplicável), **Página de Obrigado** personalizada por unidade, logs essenciais (sem dados sensíveis) e encaminhamento dos leads para e‑mail indicado pela Contratante.

1.4 **SEO técnico & Acessibilidade (essenciais):** `sitemap`, `robots`, metas dinâmicas, dados estruturados **schema.org (LocalBusiness)** nas páginas de unidade; boas práticas **WCAG 2.1 AA** (contraste, foco visível, semântica e textos alternativos).

1.5 **Medição/Analytics:** implementação de eventos no site (**`click_tel`**, **`click_whatsapp`**, **`lead_submit`** com identificação da unidade) e **documentação do dataLayer** para integração pela equipe de analytics da Contratante (configuração em GA4/Tag Manager/ADS pela Contratante).

1.6 **Infraestrutura inicial:** configuração técnica inicial **no ambiente/plataformas já utilizados pela Contratante**, incluindo publicação, DNS/SSL/CDN quando aplicável, ambientes de *staging* e produção, e variáveis de ambiente/segurança.

1.7 **Avaliações do Google (exibição):** implementação do bloco na Home “**Nossas avaliações**” com **reviews do Google** da(s) unidade(s) da Contratante, obtidas via **Google Places API** (ou recurso equivalente do ambiente atual). Requisitos: fornecimento de **Place ID** e **chave de API** da Contratante; exibição em conformidade com políticas/termos e limites de uso do Google; **sem scraping** e **sem edição** de conteúdo de terceiros; sujeita a variações de disponibilidade/quotas. Caso haja custo de API, será tratado como **custo de terceiro** (Cláusula 6).

1.8 Edição, remoção, moderação ou resposta a **avaliações do Google** (atividade do Perfil da Empresa no Google); o projeto apenas **exibe** avaliações disponibilizadas pela API.

## 2. CRONOGRAMA (8 SEMANAS) E MARCOS (ANEXO A)

2.1 O projeto terá **prazo estimado de 8 (oito) semanas**, contadas da **data de início** (recebimento dos acessos e materiais listados no Anexo C).
2.2 **Marcos de entrega e pagamento** (valores no Anexo A) — pagamento após aceite de cada marco:

* **Marco 1 (Semanas 1–2):** Descoberta + Wireframes Mobile + Painel de Edição configurado.
* **Marco 2 (Semanas 3–4):** Unidades (3) + Header/Popover + Barra Fixa Mobile + Formulário + Página de Obrigado reformulada (ambiente de *staging*).
* **Marco 3 (Semanas 5–6):** Institucional (Serviços/Sobre/Depoimentos/Notícias) + ajustes de UX + SEO/Acessibilidade básicos.
* **Marco 4 (Semanas 7–8):** Testes (performance + aparelhos reais) + Publicação (*go‑live*) + Treinamento.

2.3 Datas exatas serão definidas no **Kickoff** e anexadas ao cronograma.

2.4 **Penalidades por atraso na entrega:** em caso de **atraso injustificado** (isto é, não causado por dependências da Contratante, terceiros, indisponibilidade de plataformas/serviços externos ou eventos de força maior), incidirá **multa de 2% (dois por cento) do valor total do contrato**, acrescida de **1% (um por cento) por semana de atraso**, limitada a **10%** do valor total. Reprogramações formais aprovadas por e-mail afastam a penalidade.

---

## 3. PREÇO, CONDIÇÕES E ACEITE

4.1 **Preço total fixo:** **R$ 9.200,00** (nove mil e duzentos reais).
4.2 **Pagamento por marcos** (Anexo A): após envio do link e checklist de aceite do marco, a Contratante terá até **3 (três) dias úteis** para efetuar o pagamento via PIX/transferência.
4.3 **Critérios de aceite (Definição de Pronto):**

* Páginas do escopo publicadas e responsivas (mobile/desktop).
* Eventos `click_tel`, `click_whatsapp`, `lead_submit` ativos e documentados.
* **PageSpeed/Lighthouse (mobile) ≥ 90** em Home e Unidades (com variação aceitável de rede/aparelho).
* CMS com coleções publicadas e acessos entregues ao time da Contratante.

4.4 **Atrasos de pagamento:** multa **2%**, juros **1% a.m.** e correção monetária (IPCA) pro rata die.

---

## 4. OBRIGAÇÕES DAS PARTES

**Contratante:**
(a) Fornecer logotipo, paleta tipográfica/visual (se houver), textos atuais, **fotos** (quando disponíveis), telefones/WhatsApp por unidade, informações de contato, políticas e **acessos** (hospedagem/DNS/analytics).
(b) Indicar responsáveis por **conteúdo** e **aprovações** em cada marco.
(c) Realizar os **pagamentos** nos prazos.

**Contratado:**
(a) Executar o projeto conforme o escopo e cronograma.
(b) Entregar documentação e realizar treinamento.
(c) Manter confidencialidade e boas práticas de segurança; não registrar dados sensíveis em logs.
(d) Comunicar riscos, impedimentos e dependências relevantes.

---

## 5. SUPORTE, GARANTIA E MANUTENÇÃO

6.1 **Garantia de 90 (noventa) dias** após o *go‑live* para **correções de bugs** dentro do escopo, sem custo.
6.2 Alterações/evoluções de escopo após o aceite seguem **processo de Change Request** (Cláusula 6).
6.3 **Plano opcional de manutenção** (não incluso): suporte leve mensal para pequenos ajustes, atualizações e acompanhamento — mediante orçamento/contrato separado.

6.4 **Backup e entrega técnica:** ao término do contrato (ou na rescisão), o Contratado entregará: **(i)** backup completo do **repositório Git** (export/tarball com a última release), **(ii)** **exportação final do CMS** (conteúdo em formato aberto, ex.: JSON), **(iii)** instruções de restauração e **inventário de acessos** e variáveis sensíveis (sem expor segredos em claro).

---

## 6. MUDANÇAS DE ESCOPO (CHANGE REQUEST)

7.1 Demandas fora do escopo serão orçadas à parte, por preço fechado ou por hora técnica (**R$ 120,00/h**), com impacto de prazo e custo previamente aprovados por e‑mail.
7.2 Qualquer alteração que afete marcos exigirá ajuste do cronograma.

---

## 7. CUSTOS DE TERCEIROS

8.1 **Custos de terceiros** (ex.: domínio, hospedagem, serviços de CDN, provedores de e‑mail, licenças de plugins/temas ou eventuais **upgrades de plano do CMS**) são de responsabilidade da **Contratante** e somente serão contratados **mediante aprovação prévia**.
8.2 O projeto será implementado **nas plataformas/ambiente já utilizados pela Contratante**, preservando compatibilidade e acesso administrativo da Contratante.

---

## 8. PROPRIEDADE INTELECTUAL E PORTFÓLIO

9.1 Após a **quitação integral**, a Contratante recebe a **titularidade integral** de **todo o código-fonte**, **documentação**, **assets** (imagens/ícones/arquivos entregues no projeto) e **instância/banco de dados** criados e desenvolvidos no âmbito deste contrato, bem como do **conteúdo publicado**. O Contratado assegurará **acesso pleno** ao repositório GitHub (ou equivalente) e ao painel do CMS. Frameworks, bibliotecas e componentes de terceiros permanecem sob suas licenças próprias.
9.2 O Contratado poderá mencionar o projeto em **portfólio** (prints e descrição), sem expor dados sensíveis.

---

## 9. PRIVACIDADE, LGPD E SEGURANÇA

10.1 As partes comprometem‑se a observar a **LGPD (Lei 13.709/2018)**.
10.2 O formulário coletará apenas dados necessários para contato/comercial; dados sensíveis não serão solicitados.
10.3 Serão adotadas medidas como **HTTPS/SSL**, cabeçalhos de segurança (ex.: HSTS, CSP básica), proteção anti‑spam e **segregação de segredos (.env)**.
10.4 A Contratante é **Controladora** dos dados; o Contratado atua como **Operador** no âmbito deste projeto.

---

## 10. RESCISÃO

11.1 O presente contrato poderá ser rescindido por qualquer parte, sem ônus, mediante **aviso prévio de 10 (dez) dias**.
11.2 Em caso de rescisão, permanecem devidos os valores dos **marcos concluídos** e dos serviços proporcionais executados até a data; o Contratado entregará os materiais produzidos até então.

11.3 **Restituição proporcional (quando houver valores pagos antecipadamente):**

* **Antes do início:** restituição de **100%**;
* **Após início e antes do Wireframe:** **80%**;
* **Após Wireframe:** **60%**;
* **Após Front pronto:** **40%**;
* **Após CMS integrado:** **20%**;
* **Após Go-live:** **0%**.

---

## 11. LIMITAÇÃO DE RESPONSABILIDADE

12.1 A responsabilidade do Contratado, por quaisquer danos, fica limitada ao **valor total** deste contrato, excluídos danos indiretos, lucros cessantes e indisponibilidades de terceiros (provedores/serviços externos).

---

## 12. DISPOSIÇÕES FINAIS

13.1 Comunicados e aprovações poderão ocorrer por **e‑mail** indicado pelas partes.
13.2 Este contrato obriga as partes e seus sucessores. Alterações somente por aditivo escrito.
13.3 **Foro:** fica eleito o foro da **Comarca de Porto Alegre/RS**, com renúncia a qualquer outro, por mais privilegiado que seja.

---

## 13. SIGILO, CONFIDENCIALIDADE E EXCLUSIVIDADE

14.1 As partes obrigam‑se a manter **sigilo** sobre informações técnicas, comerciais e dados pessoais recebidos em razão deste contrato.
14.2 **Exclusividade setorial (não concorrência):** pelo prazo de **24 (vinte e quatro) meses** contados do *go‑live*, o Contratado **não reproduzirá o mesmo modelo técnico e estrutural** desenvolvido neste projeto **para concorrentes diretos** do setor de **residenciais geriátricos/geriatrias/ILPIs**. Esta cláusula **não** impede o Contratado de utilizar **conhecimentos gerais**, **boas práticas** e **componentes de código aberto**, nem de atuar para clientes de **outros setores**. Mediante autorização **por escrito** da Contratante, o Contratado poderá excepcionar esta exclusividade.

---

### ANEXO A — MARCOS, PRAZOS E VALORES

* **Marco 1 (Semanas 1–2):** Descoberta + Wireframes Mobile + Painel de Edição configurado — **R$ 2.300,00** (25%).
* **Marco 2 (Semanas 3–4):** Unidades (3) + Header/Popover + Barra Fixa Mobile + Formulário + Página de Obrigado reformulada — **R$ 3.220,00** (35%).
* **Marco 3 (Semanas 5–6):** Institucional (Serviços/Sobre/Depoimentos/Notícias) + UX + SEO/Acessibilidade básicos — **R$ 2.300,00** (25%).
* **Marco 4 (Semanas 7–8):** Testes (performance + aparelhos reais) + *Go‑live* + Treinamento — **R$ 1.380,00** (15%).

**Prazo total estimado:** 8 (oito) semanas a partir do Kickoff e do recebimento dos materiais e acessos do Anexo C.

---

### ANEXO B — CRITÉRIOS DE ACEITE (DEFINIÇÃO DE PRONTO)

1. Páginas do escopo publicadas e responsivas (mobile/desktop).
2. Eventos `click_tel`, `click_whatsapp`, `lead_submit` funcionando; documentação do dataLayer entregue.
3. PageSpeed/Lighthouse (mobile) ≥ 90 em Home e Unidades (considerando variação de rede/aparelho).
4. CMS com coleções criadas e acessos entregues (Admin/Editor para a Contratante).
5. Guia de edição e treinamento realizados.

---

### ANEXO C — MATERIAIS/ACESSOS NECESSÁRIOS PARA INÍCIO

* Telefones e links de WhatsApp por unidade; endereços oficiais e links do Google Maps.
* Textos atuais e logotipo/identidade (se houver).
* Fotos separadas por unidade (quando disponíveis).
* E‑mails que receberão os leads do formulário.
* Acessos/convites de colaborador à hospedagem/DNS/analytics já utilizados pela Contratante.

---

**Assinaturas**

Contratante: __________________________________________
Nome: _________________________________________________
Cargo: _________________________________________________
Data: ****/****/___________

Contratado: **Lucas Antunes Ferreira**
CPF: _________________________________________________
Data: ****/****/___________
