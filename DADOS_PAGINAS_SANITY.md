# Documentação: Dados das Páginas para Sanity CMS

> **Projeto**: Novo Lar Geriatria
> **Data**: 2025-01-11
> **Objetivo**: Mapeamento completo de todos os conteúdos das páginas para migração ao Sanity CMS

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Site Settings](#site-settings)
3. [Home Page](#home-page)
4. [About Page](#about-page)
5. [About Novo Lar Page](#about-novo-lar-page)
6. [Services Index Page](#services-index-page)
7. [Team Page](#team-page)
8. [Structure Page](#structure-page)
9. [Activities Page](#activities-page)
10. [FAQ Page](#faq-page)
11. [Contact Page](#contact-page)
12. [Units](#units)
13. [Como Usar](#como-usar)

---

## Visão Geral

Este documento contém todos os dados extraídos do site atual da Novo Lar Geriatria, organizados por página e schema do Sanity CMS. Os dados foram extraídos diretamente dos componentes React Next.js 15.

### Arquivos Gerados

```
/scripts/
  /sanity-data/
    pages-content.json          # Dados estruturados em JSON
  populate-sanity.js             # Script de migração Node.js
/DADOS_PAGINAS_SANITY.md        # Esta documentação
```

### Schemas Mapeados

- ✅ `siteSettings` - Configurações globais do site
- ✅ `homePage` - Página inicial (singleton)
- ✅ `aboutPage` - Página "Sobre" geral (singleton)
- ✅ `aboutNovoLarPage` - Página "A Novo Lar" (singleton)
- ✅ `servicesIndexPage` - Página índice de serviços (singleton)
- ✅ `teamPage` - Página da equipe (singleton)
- ✅ `structurePage` - Página de estrutura (singleton)
- ✅ `activitiesPage` - Página de atividades (singleton)
- ✅ `faqPage` - Página de perguntas frequentes (singleton)
- ✅ `contactPage` - Página de contato (singleton)
- ✅ `unit` - Unidades (múltiplos documentos)

---

## Site Settings

### Schema: `siteSettings`

**_id**: `siteSettings`
**_type**: `siteSettings`

### Campos

| Campo | Tipo | Valor |
|-------|------|-------|
| **siteName** | string | Novo Lar Geriatria |
| **tagline** | string | Hospedagem Assistida com Qualidade® |
| **foundedYear** | string | 1994 |

### Contact Info (objeto)

| Campo | Valor |
|-------|-------|
| centralPhoneDisplay | (51) 3346.7620 |
| centralPhoneDigits | 5133467620 |
| whatsappDigits | 555133467620 |
| email | contato@novolargeriatria.com.br |
| visitationHours | Visitas diárias das 9h às 19h com agendamento prévio |
| city | Porto Alegre - RS |

### Social Media (objeto)

| Campo | Valor |
|-------|-------|
| facebook | https://www.facebook.com/novolarhospedagemassistida/ |
| instagram | https://www.instagram.com/novolarhospedagemassistida/ |

---

## Home Page

### Schema: `homePage`

**_id**: `homePage`
**_type**: `homePage`

### SEO

| Campo | Valor |
|-------|-------|
| title | Novo Lar - Casa de Repouso em Porto Alegre |
| description | Residencial Geriátrico em Porto Alegre com equipe multidisciplinar 24h, estrutura moderna e cuidado humanizado. Mais de 20 anos de experiência. |
| keywords | residencial geriátrico porto alegre, casa de repouso, hospedagem assistida, cuidados idosos, moinhos de vento |

### Hero Section

| Campo | Valor |
|-------|-------|
| title | Cuidado humanizado com a experiência de quem está no mercado há mais de 20 anos |
| subtitle | Residencial Geriátrico em Porto Alegre - Novo Lar |

### Why Choose Section

**Título**: Por que escolher a Novo Lar?
**Subtítulo**: Cuidado humanizado com a experiência de quem está no mercado há mais de 20 anos

**Items** (array de 4 cards):

1. **Estrutura Moderna e Acolhedora**
   - Descrição: Instalações amplas, seguras e preparadas para oferecer conforto e bem-estar
   - Link: /sobre/estrutura

2. **Equipe Multidisciplinar 24h**
   - Descrição: Médicos, enfermeiros, fisioterapeutas e nutricionistas dedicados ao cuidado integral
   - Link: /sobre/equipe

3. **Localização Privilegiada**
   - Descrição: Unidades em bairros nobres de Porto Alegre, próximas a parques e com fácil acesso
   - Link: /sobre/localizacao

4. **Atividades e Terapia Ocupacional**
   - Descrição: Programação diária com estímulos cognitivos, sociais e atividades recreativas
   - Link: /sobre/atividades

### Units Section

| Campo | Valor |
|-------|-------|
| title | Nossas Unidades |
| subtitle | Escolha a unidade mais próxima e conheça nossa estrutura completa |

### SEO Content Section

**Título**: Cuidado Especializado com Mais de 20 Anos de Experiência

**Parágrafos** (4):

1. A Novo Lar Geriatria é referência em residencial geriátrico em Porto Alegre, oferecendo uma solução completa e humanizada para o cuidado de idosos. Com três unidades estrategicamente localizadas nos bairros Moinhos de Vento e Passo d'Areia, proporcionamos ambientes acolhedores, seguros e preparados para promover o bem-estar e a qualidade de vida de cada residente.

2. Nossa equipe multidisciplinar é composta por médicos geriatras, enfermeiros, fisioterapeutas, nutricionistas, terapeutas ocupacionais e psicólogos, que trabalham de forma integrada para garantir um atendimento personalizado e de excelência. Oferecemos hospedagem 24 horas com acompanhamento contínuo, enfermagem especializada, medicação controlada, fisioterapia, acompanhamento médico regular e uma programação completa de atividades sociais e terapia ocupacional.

3. Com mais de 20 anos de experiência no mercado, a Novo Lar se destaca pelo cuidado humanizado e familiar, onde cada residente é tratado com carinho, respeito e atenção individualizada. Nossas instalações modernas e adaptadas oferecem conforto, segurança e todas as comodidades necessárias para que seu familiar receba o melhor cuidado possível.

4. Se você busca um residencial geriátrico em Porto Alegre que ofereça cuidado integral, ambiente familiar e equipe qualificada, a Novo Lar Geriatria é a escolha ideal. Estamos localizados em regiões nobres da cidade, próximos ao Parcão, Parque Germânia e principais hospitais de Porto Alegre.

---

## About Page

### Schema: `aboutPage`

**_id**: `aboutPage`
**_type**: `aboutPage`

### SEO

| Campo | Valor |
|-------|-------|
| title | Sobre a Novo Lar - Experiência em Cuidado Geriátrico \| Porto Alegre |
| description | Conheça a Novo Lar Geriatria: mais de 20 anos de experiência em hospedagem assistida para idosos em Porto Alegre. Cuidado humanizado e equipe multidisciplinar. |
| keywords | sobre novo lar, hospedagem assistida, experiência geriatria, cuidado idosos porto alegre |

### Hero Section

| Campo | Valor |
|-------|-------|
| title | Um lar seguro, humano e cheio de vida para quem você ama |
| subtitle | Há mais de duas décadas, a Novo Lar Geriatria oferece hospedagem assistida e cuidados especializados em Porto Alegre, unindo estrutura, equipe multidisciplinar e proximidade com as famílias. |

**Highlights** (3 badges):
- 3 unidades em bairros nobres
- Equipe 24 horas e planos personalizados
- Tour guiado e avaliação sem compromisso

### Care Highlights (3 cards)

1. **Hospedagem acolhedora**
   - Descrição: Suites amplas, áreas externas arborizadas e ambientes personalizados para acolher diferentes níveis de dependência.

2. **Equipe multidisciplinar 24h**
   - Descrição: Médicos geriatras, enfermeiros, fisioterapeutas, terapeutas ocupacionais e musicoterapeutas atuam em regime integral.

3. **Famílias próximas**
   - Descrição: Processos transparentes, visitas guiadas frequentes e acompanhamento das rotinas para deixar a família sempre por perto.

### Experience Journey (3 etapas)

1. **Tour guiado pelas unidades**
   - Descrição: Agende um horário, percorra suítes, jardins e espaços de convivência e conheça nossa equipe de perto.

2. **Plano personalizado de cuidado**
   - Descrição: Avaliações clínicas e sociais para entender o perfil do residente e montar um plano que respeita a história da família.

3. **Integração e acompanhamento contínuo**
   - Descrição: Relatórios recorrentes, adaptações da rotina e participação da família para garantir conforto e segurança em cada fase.

### Gallery Section

| Campo | Valor |
|-------|-------|
| title | Ambientes pensados para acolher famílias inteiras |
| description | As unidades Novo Lar possuem suítes individuais e duplas, espaços de convivência banhados por luz natural, jardins, salas terapêuticas e estruturas completas para reabilitação e cuidados clínicos. |

---

## About Novo Lar Page

### Schema: `aboutNovoLarPage`

**_id**: `aboutNovoLarPage`
**_type**: `aboutNovoLarPage`

### SEO

| Campo | Valor |
|-------|-------|
| title | A Novo Lar Geriatria - Tradição e Excelência desde 1994 \| Porto Alegre |
| description | Fundada em 1994, a Novo Lar é empresa gaúcha especializada em hospedagem assistida para idosos com equipe experiente e estrutura completa em Porto Alegre. |
| keywords | novo lar geriatria, história, fundação 1994, empresa gaúcha, tradição geriatria |

### Hero Section

| Campo | Valor |
|-------|-------|
| badge | Desde 1994 |
| title | A Novo Lar Geriatria |
| subtitle | Tradição e excelência em hospedagem assistida para idosos em Porto Alegre desde 1994. |

### History (4 parágrafos)

1. A NOVO LAR — Hospedagem Assistida com Qualidade®, empresa gaúcha fundada em 1994, foi idealizada para proporcionar conforto, tranquilidade e a melhor qualidade de vida na 3ª idade. Nasceu da visão empreendedora de seus sócios, cuja experiência técnica e administrativa de mais de 40 anos na área da saúde e hospitalar garante seriedade e transparência.

2. Nosso compromisso é dar suporte integral ao idoso e sua família com carinho e respeito. Combinamos hotelaria com assistência médica e de enfermagem 24 horas por dia, funcionando como clínica geriátrica e casa de repouso com equipe multidisciplinar dedicada e experiente.

3. Na geriatria Novo Lar você encontra hospedagem permanente ou temporária em Porto Alegre. Cada unidade conta com estrutura completa e profissionais focados no atendimento integral ao idoso e suas necessidades, para que o conforto e o bem-estar estejam sempre presentes.

4. Atualmente, a NOVO LAR — Hospedagem Assistida com Qualidade® dispõe de três estabelecimentos em Porto Alegre, situados nos bairros Moinhos de Vento e Passo d'Areia, integrados ao cotidiano da cidade e próximos aos principais serviços de saúde.

### Highlights (4 cards)

1. **1994**
   - Label: Ano de fundação
   - Descrição: Tradição gaúcha em cuidado especializado para idosos.

2. **3**
   - Label: Unidades em Porto Alegre
   - Descrição: Estrutura presencial nos bairros Moinhos de Vento e Passo d'Areia.

3. **40+**
   - Label: Anos de experiência
   - Descrição: Direção com vivência em gestão hospitalar e assistência à saúde.

4. **24h**
   - Label: Suporte de enfermagem
   - Descrição: Cuidado integral e monitoramento contínuo para residentes e famílias.

### Mission, Vision & Values

**Missão**:
Garantir e trabalhar com excelência, prestando serviços de assistência de enfermagem 24h aos residentes, oferecendo conforto e tranquilidade também aos familiares.

**Visão**:
Ser a melhor empresa do segmento e referência pela excelência em serviços de hospedagem assistida para idosos em Porto Alegre e região.

**Valores** (4 itens):
1. Garantir a satisfação e a confiança de nossos clientes.
2. Trabalhar com dignidade, transparência e ética.
3. Manter uma equipe sinérgica com foco em excelência.
4. Praticar a sustentabilidade social, econômica e ambiental.

---

## Services Index Page

### Schema: `servicesIndexPage`

**_id**: `servicesIndexPage`
**_type**: `servicesIndexPage`

### SEO

| Campo | Valor |
|-------|-------|
| title | Serviços Completos para Cuidado Integral de Idosos \| Novo Lar Geriatria |
| description | Conheça todos os serviços oferecidos: hospedagem assistida, enfermagem 24h, fisioterapia, nutrição, terapia ocupacional e musicoterapia em Porto Alegre. |
| keywords | serviços geriatria, hospedagem assistida, enfermagem 24h, fisioterapia idosos, terapia ocupacional |

### Hero Section

| Campo | Valor |
|-------|-------|
| badge | Hospedagem assistida em Porto Alegre |
| title | Serviços completos para o cuidado integral de quem você ama |
| subtitle | Conheça nossa estrutura multidisciplinar, construída para oferecer segurança, autonomia e acolhimento em todas as etapas da jornada do idoso. |

### Hero Stats (3 cards)

1. **3**
   - Label: Unidades em Porto Alegre
   - Descrição: Localizadas nos bairros Moinhos de Vento e Passo d'Areia

2. **24h**
   - Label: Equipe de enfermagem
   - Descrição: Profissionais habilitados acompanhando todos os residentes

3. **6**
   - Label: Refeições diárias
   - Descrição: Cardápio supervisionado por nutricionista com ajustes individuais

### Care Programs (3 modalidades)

#### 1. Hospedagem permanente

**Descrição**: Acolhimento contínuo em suítes adaptadas, com acompanhamento 24h da equipe de enfermagem, médico geriatra e profissionais de apoio. Ideal para quem busca rotina estável, estímulos diários e convivência em um ambiente seguro.

**Benefícios**:
- Planos personalizados que respeitam preferências e histórico clínico
- Rotinas com terapias, alimentação supervisionada e estímulos cognitivos
- Ambientes aconchegantes que acolhem residentes com diferentes níveis de dependência

#### 2. Hospedagem temporária

**Descrição**: Períodos flexíveis para famílias que precisam de suporte em viagens, férias ou diante de mudanças na rotina. A equipe garante continuidade dos cuidados e integração com o plano já adotado pelos familiares.

**Benefícios**:
- Estadas planejadas com acompanhamento médico e de enfermagem integral
- Atividades diárias que estimulam autonomia e socialização
- Transição tranquila entre o lar e a clínica, com orientação à família

#### 3. Cuidados pós-operatórios e reabilitação

**Descrição**: Assistência especializada para alta hospitalar, reabilitação de traumas e recuperação funcional. A equipe multidisciplinar acompanha cada etapa para acelerar a retomada das atividades com segurança.

**Benefícios**:
- Monitoramento clínico, administração de medicamentos e curativos
- Apoio de fisioterapia, terapia ocupacional e musicoterapia conforme indicação
- Adequação de cardápio e rotina conforme orientações médicas

### Care Journey (4 etapas)

1. **Avaliação completa**
   - Reunião inicial com família e residente para entender histórico de saúde, preferências, expectativas e necessidades específicas.

2. **Plano individualizado**
   - Construção conjunta do plano de cuidados com definição de terapias, alimentação, acompanhamento médico e rotinas personalizadas.

3. **Cuidado multidisciplinar**
   - Equipe de enfermagem 24h, médico geriatra, terapeuta ocupacional, nutricionista e musicoterapeuta atuando em sincronia.

4. **Acompanhamento e diálogo**
   - Monitoramento contínuo com atualizações à família, ajustes de protocolos e acolhimento para dúvidas a qualquer momento.

### Support Features (4 items)

1. **Equipe multidisciplinar**
   - Médicos, enfermeiros, nutricionistas, terapeutas ocupacionais, musicoterapeutas e cuidadores atuando de forma integrada.

2. **Rotinas acolhedoras**
   - Programações que estimulam autonomia, socialização e bem-estar emocional em um ambiente familiar e seguro.

3. **Planos personalizados**
   - Planos de cuidados construídos com cada família, respeitando históricos clínicos, preferências e objetivos individuais.

4. **Estruturas completas**
   - Unidades com acessibilidade total, jardins, salas de convivência, elevadores e espaços terapêuticos preparados para diferentes perfis.

---

## Team Page

### Schema: `teamPage`

**_id**: `teamPage`
**_type**: `teamPage`

### SEO

| Campo | Valor |
|-------|-------|
| title | Equipe Multidisciplinar 24h - Profissionais Especializados \| Novo Lar Geriatria |
| description | Equipe multidisciplinar 24 horas com médicos geriatras, enfermeiros, fisioterapeutas, nutricionistas e psicólogos dedicados ao cuidado integral de idosos em Porto Alegre. |
| keywords | equipe geriátrica porto alegre, médicos geriatras, enfermagem 24 horas, fisioterapia idosos, nutricionista geriátrico |

### Hero Section

| Campo | Valor |
|-------|-------|
| title | Equipe Multidisciplinar 24h |
| subtitle | Profissionais Qualificados e Dedicados ao Cuidado Integral |

### Specialists (6 profissionais)

1. **Médicos Geriatras** - Acompanhamento especializado
2. **Enfermagem 24h** - Cuidado contínuo e atencioso
3. **Fisioterapeutas** - Reabilitação e mobilidade
4. **Nutricionistas** - Alimentação balanceada
5. **Psicólogos** - Apoio emocional e mental
6. **Terapeutas Ocupacionais** - Atividades e estímulos

### Description

**Parágrafo 1**: Nossa equipe multidisciplinar está presente 24 horas por dia, trabalhando de forma integrada para proporcionar o melhor cuidado aos nossos residentes.

**Parágrafo 2**: Cada profissional é cuidadosamente selecionado e capacitado para oferecer um atendimento personalizado, respeitando as necessidades individuais de cada residente.

### Availability Box

**Título**: Atendimento 24 Horas
**Descrição**: Nossa equipe está sempre disponível para garantir segurança, conforto e bem-estar em tempo integral.

---

## Structure Page

### Schema: `structurePage`

**_id**: `structurePage`
**_type**: `structurePage`

### SEO

| Campo | Valor |
|-------|-------|
| title | Estrutura Moderna e Acolhedora - Instalações Completas \| Novo Lar Geriatria |
| description | Estrutura moderna e completa com quartos adaptados, salas de convivência, refeitórios climatizados e áreas verdes para conforto e segurança dos residentes em Porto Alegre. |
| keywords | estrutura clínica geriátrica, instalações modernas idosos, quartos adaptados porto alegre, casa de repouso estrutura |

### Hero Section

| Campo | Valor |
|-------|-------|
| title | Estrutura Moderna e Acolhedora |
| subtitle | Ambientes Preparados para o Seu Conforto |

### Main Description

Nossas instalações foram projetadas pensando no bem-estar e na segurança dos nossos residentes

### Features (5 itens)

1. Ambientes amplos e acolhedores
2. Salas de convivência confortáveis
3. Banheiros adaptados e seguros
4. Refeitórios climatizados
5. Quartos individuais e compartilhados

### Detail Section

**Título**: Conforto e Segurança em Cada Detalhe
**Descrição**: Cada ambiente foi cuidadosamente planejado para proporcionar segurança, acessibilidade e conforto aos nossos residentes.

---

## Activities Page

### Schema: `activitiesPage`

**_id**: `activitiesPage`
**_type**: `activitiesPage`

### SEO

| Campo | Valor |
|-------|-------|
| title | Atividades e Terapia Ocupacional - Programação Diária \| Novo Lar Geriatria |
| description | Programação diária completa com musicoterapia, artes, exercícios físicos, atividades sociais e estímulos cognitivos para promover qualidade de vida e bem-estar dos idosos. |
| keywords | atividades para idosos, terapia ocupacional porto alegre, musicoterapia terceira idade, estimulação cognitiva idosos |

### Hero Section

| Campo | Valor |
|-------|-------|
| title | Atividades e Terapia Ocupacional |
| subtitle | Programação Diversificada e Estimulante |

### Main Description

Oferecemos uma ampla variedade de atividades pensadas para promover bem-estar e qualidade de vida

### Activity Types (6 categorias)

1. **Musicoterapia** - Sessões de música e canto
2. **Artes e Artesanato** - Pintura, desenho e trabalhos manuais
3. **Leitura e Jogos** - Estímulo cognitivo e memória
4. **Atividades Sociais** - Confraternizações e interação
5. **Exercícios Físicos** - Alongamentos e movimentação
6. **Lazer e Recreação** - Passeios e momentos de diversão

### Cognitive Stimulation Section

**Título**: Estímulo Cognitivo e Social

**Descrição**: Nossas atividades são cuidadosamente planejadas por terapeutas ocupacionais para estimular a cognição, memória, socialização e autonomia dos residentes.

**Highlights**:

1. **Programação Diária**
   - Atividades todos os dias da semana com horários flexíveis e adaptados

2. **Acompanhamento Individual**
   - Cada residente participa de acordo com suas capacidades e preferências

---

## FAQ Page

### Schema: `faqPage`

**_id**: `faqPage`
**_type**: `faqPage`

### SEO

| Campo | Valor |
|-------|-------|
| title | Perguntas Frequentes (FAQ) - Tire suas Dúvidas \| Novo Lar Geriatria |
| description | Encontre respostas para as principais dúvidas sobre hospedagem assistida, cuidados com idosos, valores, estrutura e serviços da Novo Lar Geriatria em Porto Alegre. |
| keywords | faq residencial geriátrico, perguntas casa de repouso, dúvidas hospedagem idosos, como funciona clínica geriátrica |

### Hero Section

| Campo | Valor |
|-------|-------|
| title | Perguntas Frequentes |
| subtitle | Encontre respostas para as principais dúvidas sobre nossos serviços |

### CTA Section

**Título**: Ainda tem dúvidas?
**Descrição**: Nossa equipe está pronta para esclarecer todas as suas questões e ajudar você a encontrar a melhor solução

### FAQs (12 perguntas - disponíveis no arquivo JSON)

---

## Contact Page

### Schema: `contactPage`

**_id**: `contactPage`
**_type**: `contactPage`

### SEO

| Campo | Valor |
|-------|-------|
| title | Entre em Contato - Fale Conosco \| Novo Lar Geriatria Porto Alegre |
| description | Entre em contato com a Novo Lar Geriatria. Agende uma visita, tire suas dúvidas ou solicite orçamento. Atendimento em Porto Alegre. |
| keywords | contato novo lar, agendar visita geriatria, telefone casa de repouso, orçamento hospedagem idosos |

### Hero Section

| Campo | Valor |
|-------|-------|
| title | Entre em Contato |
| description | Estamos prontos para atendê-lo. Preencha o formulário abaixo ou entre em contato diretamente com uma de nossas unidades. |

### Form Section

**Título do Form**: Envie sua Mensagem
**Tempo de Resposta**: Responderemos em até 24 horas úteis

### Units Section

**Título**: Nossas Unidades
**Descrição**: Entre em contato diretamente com a unidade de sua preferência. Estamos prontos para atendê-lo.

### CTA Box

**Título**: Prefere falar por telefone?
**Descrição**: Nossa equipe está pronta para esclarecer todas as suas dúvidas e agendar uma visita.

---

## Units

### Schema: `unit`

**_type**: `unit`

### Unidade 1: Moinhos de Vento - Luciana de Abreu

| Campo | Valor |
|-------|-------|
| **slug** | moinhos-luciana-de-abreu |
| **name** | Moinhos de Vento · Rua Luciana de Abreu, 151 |
| **title** | Moinhos de Vento - Luciana de Abreu |
| **address** | Rua Luciana de Abreu, 151 |
| **neighborhood** | Moinhos de Vento |
| **city** | Porto Alegre |
| **state** | RS |
| **postalCode** | 90570-060 |
| **phoneDisplay** | (51) 3346.7620 |
| **phoneDigits** | 5133467620 |
| **whatsapp** | 555133467620 |
| **status** | active |
| **hours** | Atendimento 24 horas \| Visitas mediante agendamento |

**Descrição**: Unidade localizada no coração do bairro Moinhos de Vento, oferecendo cuidado especializado e ambiente acolhedor.

**Features** (6 itens):
- Ambiente com jardim central
- Suítes individuais e duplas
- Próximo aos serviços do bairro Moinhos
- Equipe multidisciplinar 24h
- Área de convivência ampla
- Fisioterapia e terapia ocupacional

---

### Unidade 2: Moinhos de Vento - Barão de Santo Ângelo

| Campo | Valor |
|-------|-------|
| **slug** | moinhos-barao-de-santo-angelo |
| **name** | Moinhos de Vento · Rua Barão de Santo Ângelo, 406 |
| **title** | Moinhos de Vento - Barão de Santo Ângelo |
| **address** | Rua Barão de Santo Ângelo, 406 |
| **neighborhood** | Moinhos de Vento |
| **city** | Porto Alegre |
| **state** | RS |
| **postalCode** | 90570-150 |
| **phoneDisplay** | (51) 3346.7620 |
| **phoneDigits** | 5133467620 |
| **whatsapp** | 555133467620 |
| **status** | active |
| **hours** | Atendimento 24 horas \| Visitas mediante agendamento |

**Descrição**: Unidade moderna no Moinhos de Vento, com fácil acesso e estrutura completa para atendimento geriátrico de qualidade.

**Features** (6 itens):
- Próximo ao Parcão
- Estrutura moderna em região central
- Áreas de convivência integradas com jardins
- Ambiente familiar e acolhedor
- Equipe especializada 24h
- Fisioterapia e atividades terapêuticas

---

### Unidade 3: Passo d'Areia

| Campo | Valor |
|-------|-------|
| **slug** | passo-dareia |
| **name** | Passo d'Areia · Rua Brigadeiro Oliveira Neri, 175 |
| **title** | Passo d'Areia |
| **address** | Rua Brigadeiro Oliveira Neri, 175 |
| **neighborhood** | Passo d'Areia |
| **city** | Porto Alegre |
| **state** | RS |
| **postalCode** | 91340-260 |
| **phoneDisplay** | (51) 3376.9462 |
| **phoneDigits** | 5133769462 |
| **whatsapp** | 555133769462 |
| **status** | active |
| **hours** | Atendimento 24 horas \| Visitas mediante agendamento |

**Descrição**: Ampla unidade no Passo d'Areia, com espaços arejados e estrutura completa para cuidados geriátricos especializados.

**Features** (6 itens):
- Vizinho ao Parque Germânia
- Espaços amplos e iluminados
- Fácil acesso pelas principais vias da zona norte
- Rotina integrada de terapias e atividades
- Jardim arborizado
- Sala de fisioterapia equipada

---

## Como Usar

### 1. Pré-requisitos

```bash
# Instalar dependências
npm install @sanity/client

# Configurar variáveis de ambiente no .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=seu-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=seu-token-com-permissao-escrita
```

### 2. Teste em Modo Dry-Run

```bash
# Simular sem modificar o Sanity
node scripts/populate-sanity.js --dry-run
```

### 3. Executar Migração

```bash
# Popular o Sanity com os dados reais
node scripts/populate-sanity.js
```

### 4. Limpar Dados (se necessário)

```bash
# Simular limpeza
node scripts/populate-sanity.js --clean --dry-run

# Limpar todos os documentos (CUIDADO!)
node scripts/populate-sanity.js --clean
```

---

## Próximos Passos

1. ✅ Dados extraídos e mapeados
2. ✅ JSON estruturado criado
3. ✅ Script de migração desenvolvido
4. ⏳ Testar script em modo dry-run
5. ⏳ Verificar schemas no Sanity Studio
6. ⏳ Executar migração real
7. ⏳ Upload de imagens para Sanity Assets
8. ⏳ Atualizar referências de imagens nos documentos
9. ⏳ Testar queries e frontend
10. ⏳ Deploy para produção

---

## Observações Importantes

### Imagens

As imagens estão atualmente em `/public/fotos-sobre/`. Após a migração inicial dos dados textuais, será necessário:

1. Fazer upload de todas as imagens para Sanity Assets
2. Criar referências corretas nos documentos
3. Atualizar schemas para incluir campos de imagem quando necessário

### Schemas Faltantes

Alguns schemas podem precisar ser criados ou ajustados no Sanity Studio:
- Verificar se todos os campos mapeados existem nos schemas
- Adicionar campos de imagem quando necessário
- Ajustar tipos de dados conforme necessário

### Dados Dinâmicos

Alguns dados estão hardcoded nos componentes e podem precisar ser movidos para schemas adicionais:
- FAQs (podem ser um schema separado)
- Testimonials do Google (considerar integração com API do Google)
- Blog posts (schema separado)
- Services (schemas detalhados por serviço)

---

**Documento gerado em**: 2025-01-11
**Última atualização**: 2025-01-11
**Versão**: 1.0.0
