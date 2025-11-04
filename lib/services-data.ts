export type ServiceCategoryId = 'residencial' | 'clinico' | 'bem-estar' | 'suporte'

export type ServiceDetail = {
  id: string
  slug: string
  title: string
  subtitle: string
  summary: string
  category: ServiceCategoryId
  description: string[]
  highlights: string[]
  heroImage: string
  heroImageAlt: string
  gallery: Array<{ src: string; alt: string }>
}

const SERVICE_CATEGORY_INFO: Record<ServiceCategoryId, { title: string; description: string }> = {
  residencial: {
    title: 'Cuidado residencial 24h',
    description: 'Hospedagem assistida e monitoramento integral nas unidades Novo Lar.',
  },
  clinico: {
    title: 'Cuidados clínicos e enfermagem',
    description: 'Protocolos médicos e de enfermagem especializados para cada necessidade.',
  },
  'bem-estar': {
    title: 'Bem-estar e terapias',
    description: 'Atividades que estimulam autonomia, cognição e vínculos afetivos.',
  },
  suporte: {
    title: 'Suporte ao familiar',
    description: 'Serviços que facilitam a rotina e garantem continuidade dos cuidados.',
  },
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: 'geriatria',
    slug: 'hospedagem-assistida-24h',
    title: 'Hospedagem assistida 24h',
    subtitle: 'Residencial geriátrico com cuidado contínuo e ambiente acolhedor.',
    summary:
      'Planos permanentes ou temporários com acompanhamento integral para idosos que precisam de suporte diário em um ambiente seguro e acolhedor.',
    category: 'residencial',
    description: [
      'A <strong>hospedagem assistida 24 horas</strong> é muito mais do que um espaço de moradia: trata-se de um <strong>modelo de cuidado integral</strong> que combina assistência médica, enfermagem especializada, suporte nutricional, atividades terapêuticas e acolhimento humanizado. Na Novo Lar Geriatria, proporcionamos um ambiente preparado para atender idosos em diferentes graus de dependência, desde aqueles que buscam autonomia e convivência social até pacientes que necessitam de <strong>cuidados intensivos e monitoramento contínuo</strong>.',
      'Diferente do cuidado domiciliar, a hospedagem assistida oferece <strong>infraestrutura completa, equipe multidisciplinar integrada e protocolos de segurança</strong> que garantem resposta imediata a qualquer necessidade. Cada residente recebe um <strong>plano de cuidado personalizado</strong>, elaborado com base em avaliação clínica detalhada, histórico de saúde, preferências pessoais e orientações da família. Esse plano é constantemente revisado pela equipe, assegurando evolução e bem-estar em cada etapa do envelhecimento.',
      'Nossas três unidades em Porto Alegre — localizadas nos bairros Moinhos de Vento e Passo d\'Areia — foram projetadas para proporcionar conforto, segurança e autonomia. Os espaços são amplos, climatizados e totalmente acessíveis, com pisos antiderrapantes, corrimãos de apoio, iluminação adequada e áreas de convivência que estimulam a socialização. Contamos com jardins arborizados, salas de atividades, refeitórios acolhedores e quartos individuais ou compartilhados, sempre respeitando a privacidade e dignidade de cada pessoa.',
      'A equipe multidisciplinar da Novo Lar atua de forma integrada, incluindo médicos geriatras, enfermeiros, técnicos de enfermagem, fisioterapeutas, terapeutas ocupacionais, nutricionistas, fonoaudiólogos, psicólogos e cuidadores especializados. Todos trabalham em regime de plantão 24 horas por dia, 7 dias por semana, garantindo assistência contínua, administração correta de medicamentos, monitoramento de sinais vitais e resposta imediata a emergências. A presença constante de profissionais qualificados proporciona tranquilidade às famílias e segurança aos residentes.',
      'Além do cuidado clínico, desenvolvemos uma programação diária rica em atividades recreativas, culturais e terapêuticas que estimulam a cognição, a coordenação motora, a memória afetiva e o bem-estar emocional. Oficinas de artesanato, musicoterapia, fisioterapia em grupo, jogos de memória, celebrações de datas especiais e momentos de convivência fazem parte da rotina, promovendo qualidade de vida e prevenindo o isolamento social.',
      'O processo de admissão na Novo Lar é conduzido com máxima atenção e transparência. Iniciamos com uma avaliação detalhada do paciente, incluindo histórico de saúde, diagnósticos, limitações físicas e necessidades emocionais. Em seguida, realizamos entrevista com familiares para compreender hábitos, rotinas, preferências alimentares e expectativas. Com base nessas informações, elaboramos o plano individual de cuidados e acompanhamos de perto a adaptação do residente nos primeiros dias, ajustando protocolos sempre que necessário.',
      'A alimentação na Novo Lar é supervisionada por nutricionistas especializados em geriatria, que elaboram cardápios equilibrados, saborosos e adaptados a restrições alimentares, consistências diferenciadas ou suplementação nutricional. São oferecidas seis refeições diárias, com controle rigoroso de aceitação alimentar e hidratação. Todos os alimentos são preparados em cozinhas que seguem protocolos sanitários e de manipulação, garantindo segurança e qualidade.',
      'As famílias são parte fundamental do processo de cuidado. Mantemos comunicação transparente através de relatórios periódicos, atualizações sobre a evolução do residente, reuniões com a equipe multidisciplinar e canais diretos de contato. Visitas são incentivadas e bem-vindas, pois fortalecem vínculos afetivos e contribuem para a adaptação e bem-estar emocional dos residentes. Acreditamos que o cuidado integral envolve não apenas o paciente, mas toda a rede de apoio familiar.',
      'A Novo Lar Geriatria segue rigorosamente todas as normas sanitárias e regulamentações para instituições de longa permanência, incluindo a RDC 502/2021 da Anvisa e o Estatuto do Idoso. Nossos ambientes são fiscalizados regularmente, contamos com sistemas de prevenção de incêndio, protocolos de higiene e segurança, câmeras de vigilância e controle de acesso. Toda a equipe é treinada em urgência e emergência, garantindo resposta rápida e eficaz em qualquer situação crítica.',
      'Escolher a hospedagem assistida 24 horas da Novo Lar significa oferecer ao seu familiar um ambiente seguro, acolhedor e profissional, onde ele será tratado com respeito, carinho e dignidade. Mais do que uma instituição, somos uma extensão da família, comprometidos em proporcionar qualidade de vida, conforto e bem-estar em cada fase do envelhecimento.',
    ],
    highlights: [
      'Planos permanentes ou temporários totalmente personalizados conforme perfil clínico e necessidades de cada família',
      'Equipe multidisciplinar completa presente 24h: médico geriatra, enfermeiros, fisioterapeutas, nutricionistas, psicólogos e terapeutas ocupacionais',
      'Ambientes totalmente acessíveis com pisos antiderrapantes, corrimãos, áreas verdes arborizadas e salas de convivência climatizadas',
      'Quartos individuais ou compartilhados com camas hospitalares, climatização, banheiros adaptados e sistema de chamada de emergência',
      'Programação diária supervisionada: atividades terapêuticas, recreativas, culturais, fisioterapia em grupo e celebrações especiais',
      'Alimentação balanceada com seis refeições diárias elaboradas por nutricionistas especializados em geriatria',
      'Administração controlada de medicamentos com checklist de enfermagem, controle de horários e integração com farmácias parceiras',
      'Monitoramento contínuo de sinais vitais, glicemia, pressão arterial e demais parâmetros clínicos conforme necessidade individual',
      'Fisioterapia motora e respiratória para manutenção da mobilidade, prevenção de quedas e estímulo à autonomia funcional',
      'Terapia ocupacional e musicoterapia para estimular cognição, memória afetiva, coordenação motora e integração social',
      'Infraestrutura completa: refeitório acolhedor, lavanderia própria, estacionamento para visitantes e sistema de segurança 24h com câmeras',
      'Comunicação transparente com familiares através de relatórios de evolução, reuniões periódicas com a equipe e canais diretos de atendimento',
      'Visitas flexíveis incentivadas para fortalecer vínculos familiares e participação ativa da família no processo de cuidado',
      'Localização privilegiada em bairros nobres de Porto Alegre (Moinhos de Vento e Passo d\'Areia), próximo a hospitais e com fácil acesso',
      'Cumprimento rigoroso das normas sanitárias (RDC 502/2021 Anvisa) e do Estatuto do Idoso, com fiscalização regular e certificações vigentes',
    ],
    heroImage: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg',
    heroImageAlt: 'Sala de convivência acolhedora na unidade Novo Lar Moinhos de Vento',
    gallery: [
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg',
        alt: 'Área externa arborizada da Novo Lar com moradores em atividade',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/10.jpeg',
        alt: 'Equipe de enfermagem acompanhando residente durante a rotina diária',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
        alt: 'Suíte climatizada e acessível da Novo Lar Geriatria',
      },
      {
        src: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
        alt: 'Ambiente acolhedor com equipe multidisciplinar presente',
      },
    ],
  },
  {
    id: 'medico-enfermagem',
    slug: 'enfermagem-medico-24h',
    title: 'Enfermagem e médico 24h',
    subtitle: 'Equipe especializada com monitoramento clínico integral.',
    summary:
      'Cobertura médica geriatra e equipe de enfermagem 24 horas com protocolos personalizados para cada residente.',
    category: 'clinico',
    description: [
      'O <strong>acompanhamento médico e de enfermagem 24 horas</strong> é o pilar fundamental da assistência oferecida pela Novo Lar Geriatria. Nossa equipe é composta por <strong>médicos geriatras, enfermeiros coordenadores e técnicos de enfermagem especializados</strong> em cuidados geriátricos, todos trabalhando em regime de plantão contínuo para garantir <strong>segurança, monitoramento e resposta imediata</strong> a qualquer necessidade clínica dos residentes.',
      'Os médicos geriatras realizam <strong>avaliações periódicas semanais</strong>, acompanham a evolução clínica de cada residente, ajustam prescrições medicamentosas quando necessário e mantêm comunicação ativa com familiares e médicos particulares. Cada paciente possui um <strong>prontuário eletrônico atualizado em tempo real</strong>, contendo histórico completo de saúde, exames, diagnósticos, medicações em uso e intercorrências. Isso garante <strong>continuidade do cuidado</strong> e tomada de decisões assertivas baseadas em informações precisas.',
      'A equipe de enfermagem atua <strong>24 horas por dia, 7 dias por semana</strong>, realizando <strong>administração de medicamentos</strong> conforme prescrição médica, <strong>monitoramento de sinais vitais</strong> (pressão arterial, frequência cardíaca, temperatura, glicemia capilar), curativos, sondagens, controle de diurese e evacuações, suporte em higiene pessoal e mobilização assistida. Todos os procedimentos seguem <strong>protocolos rigorosos de segurança</strong> do paciente e são registrados em prontuário eletrônico.',
      'A <strong>enfermeira coordenadora</strong> de cada unidade supervisiona toda a equipe técnica, padroniza protocolos de cuidado, realiza <strong>educação continuada dos profissionais</strong>, acompanha a evolução dos residentes e serve como canal direto de comunicação com as famílias. Em <strong>situações de emergência</strong>, a equipe está preparada para acionar serviços de urgência, realizar primeiros socorros e estabilizar o paciente até a chegada do atendimento especializado.',
      'Além do acompanhamento clínico regular, a Novo Lar oferece <strong>integração completa com médicos particulares e especialistas externos</strong>. Quando necessário, agendamos consultas, encaminhamos para exames diagnósticos, acompanhamos internações hospitalares e garantimos que toda a equipe esteja alinhada com o <strong>plano terapêutico</strong> definido pelos profissionais responsáveis. Nosso objetivo é complementar — e nunca substituir — o vínculo que o residente possui com seus médicos de confiança.',
      'A <strong>administração de medicamentos</strong> é realizada com máximo rigor e segurança. Utilizamos <strong>sistema de checklist duplo</strong>, onde dois profissionais conferem medicação, dose, via de administração e horário antes de cada aplicação. Mantemos <strong>controle de estoque integrado</strong> com farmácias parceiras, evitando faltas e garantindo reposição automática de prescrições contínuas. <strong>Medicamentos controlados</strong> são armazenados em locais seguros com dupla chave e registro de movimentação.',
      'O <strong>monitoramento de sinais vitais</strong> é realizado conforme <strong>protocolo individualizado</strong>, podendo ser de rotina (diário, duas vezes ao dia) ou intensivo (de hora em hora) dependendo da condição clínica do residente. Utilizamos equipamentos calibrados e certificados, com registro automático em prontuário eletrônico. Qualquer alteração fora dos parâmetros estabelecidos gera <strong>alerta imediato</strong> para a equipe médica e de enfermagem, permitindo <strong>intervenção precoce</strong>.',
      'As famílias recebem <strong>relatórios periódicos</strong> sobre a evolução clínica, participam de <strong>reuniões com a equipe multidisciplinar</strong> sempre que necessário e têm acesso a canais diretos de comunicação para esclarecer dúvidas, receber orientações e acompanhar de perto o cuidado prestado. Acreditamos que a <strong>transparência</strong> e a <strong>participação ativa da família</strong> são essenciais para o sucesso terapêutico e bem-estar emocional do residente.',
    ],
    highlights: [
      'Médicos geriatras com avaliações semanais, ajuste de prescrições e acompanhamento contínuo da evolução clínica',
      'Equipe de enfermagem presente 24h por dia, 7 dias por semana em regime de plantão ininterrupto',
      'Administração rigorosa de medicamentos com sistema de checklist duplo e controle de horários',
      'Monitoramento de sinais vitais (pressão arterial, glicemia, temperatura, saturação) conforme protocolo individualizado',
      'Prontuário eletrônico completo com histórico de saúde, exames, diagnósticos e intercorrências atualizados em tempo real',
      'Curativos especializados, sondagens, controle de diurese e evacuações realizados por técnicos capacitados',
      'Protocolos de prevenção de quedas, úlceras por pressão e infecções hospitalares',
      'Suporte em higiene pessoal, banho assistido, troca de fraldas e cuidados com pele',
      'Integração total com médicos particulares e especialistas externos (cardiologista, neurologista, ortopedista)',
      'Encaminhamento para exames diagnósticos, consultas especializadas e internações quando necessário',
      'Equipe treinada em primeiros socorros, suporte básico de vida e acionamento de serviços de emergência',
      'Comunicação transparente com familiares através de relatórios, reuniões periódicas e canais diretos de atendimento',
    ],
    heroImage: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
    heroImageAlt: 'Profissional de saúde acompanhando residente em consulta na Novo Lar',
    gallery: [
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/11.jpeg',
        alt: 'Enfermeira auxiliando residente durante atividade terapêutica',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/13.jpeg',
        alt: 'Equipe multidisciplinar reunida revisando protocolos de cuidado',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/16.jpeg',
        alt: 'Profissional monitorando sinais vitais em ambiente moderno e seguro',
      },
      {
        src: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/14.jpeg',
        alt: 'Enfermeira utilizando checklist para conferência de medicação',
      },
    ],
  },
  {
    id: 'nutricao',
    slug: 'nutricao-individualizada',
    title: 'Nutrição individualizada',
    subtitle: 'Planos alimentares supervisionados por nutricionistas.',
    summary:
      'Cardápios personalizados, seis refeições diárias e acompanhamento constante de nutricionistas especializados em geriatria.',
    category: 'bem-estar',
    description: [
      'A <strong>nutrição adequada</strong> é fundamental para a saúde, qualidade de vida e bem-estar dos idosos. Na Novo Lar Geriatria, o acompanhamento nutricional é conduzido por <strong>nutricionistas especializados em geriatria</strong> que elaboram <strong>planos alimentares individualizados</strong>, considerando não apenas as necessidades clínicas, mas também as preferências pessoais, a história alimentar e os aspectos culturais de cada residente.',
      'Cada residente passa por <strong>avaliação nutricional completa</strong> na admissão, incluindo medidas antropométricas (peso, altura, IMC, circunferências), exames bioquímicos (albumina, hemoglobina, glicemia, perfil lipídico), avaliação da capacidade mastigatória e de deglutição, identificação de alergias e intolerâncias alimentares, e análise do histórico de saúde. Com base nesses dados, elaboramos um <strong>plano nutricional personalizado</strong> que é constantemente revisado conforme a evolução clínica.',
      'Oferecemos <strong>seis refeições diárias balanceadas</strong>: café da manhã, lanche da manhã, almoço, lanche da tarde, jantar e ceia. Todos os cardápios são elaborados com <strong>variedade, cor, sabor e textura adequados</strong>, seguindo as recomendações nutricionais para idosos e respeitando particularidades individuais. As preparações são saborosas, atrativas visualmente e servidas em temperatura adequada para estimular o apetite e garantir boa aceitação.',
      'Nosso serviço de nutrição contempla <strong>dietas especiais</strong> para diversas condições clínicas: <strong>diabetes</strong> (controle de carboidratos e açúcares), <strong>hipertensão</strong> (redução de sódio), <strong>dislipidemia</strong> (controle de gorduras), <strong>doença renal</strong> (ajuste de proteínas, potássio e fósforo), <strong>disfagia</strong> (<strong>consistências modificadas</strong>: pastosa, semilíquida, líquida), <strong>dietas enterais</strong> por sonda (fórmulas específicas), intolerâncias (sem lactose, sem glúten), alergias alimentares, e dietas para ganho ou perda de peso conforme necessário.',
      'As cozinhas das unidades Novo Lar seguem <strong>protocolos rigorosos de boas práticas</strong> de manipulação de alimentos, higienização, armazenamento e controle de temperatura. Todos os alimentos são selecionados com critério, priorizando <strong>produtos frescos</strong>, da estação e de fornecedores certificados. As refeições são preparadas diariamente, <strong>sem uso de produtos ultraprocessados</strong> ou conservantes artificiais.',
      'Realizamos <strong>monitoramento constante da aceitação alimentar</strong>, registrando diariamente quanto cada residente consumiu em cada refeição. Quando identificamos <strong>baixa aceitação ou perda de apetite</strong>, a nutricionista investiga causas (medicamentos, alterações de paladar, dificuldade de mastigação, questões emocionais) e implementa <strong>estratégias personalizadas</strong> como fracionamento das refeições, enriquecimento calórico, suplementação oral, mudança de consistência ou ajustes no tempero.',
      'A <strong>hidratação</strong> é acompanhada de perto, especialmente em idosos que apresentam redução da sensação de sede. Oferecemos água, sucos naturais, chás e outras bebidas ao longo do dia, com <strong>controle individualizado</strong> de ingestão hídrica. Para residentes com dificuldade de deglutição de líquidos, utilizamos <strong>espessantes</strong> para garantir hidratação segura e <strong>prevenir broncoaspiração</strong>.',
      'As <strong>famílias são sempre envolvidas</strong> no processo nutricional. Conversamos sobre preferências alimentares do residente, recebemos orientações sobre pratos favoritos e restrições, e mantemos comunicação ativa sobre a evolução da aceitação alimentar, ganho ou perda de peso e ajustes realizados no plano nutricional. Acreditamos que a <strong>alimentação é também um ato de afeto e memória</strong>, por isso valorizamos receitas tradicionais e momentos especiais à mesa.',
    ],
    highlights: [
      'Nutricionistas especializadas em geriatria com avaliação nutricional completa na admissão e reavaliações periódicas',
      'Seis refeições diárias balanceadas: café da manhã, lanche manhã, almoço, lanche tarde, jantar e ceia',
      'Cardápios elaborados com variedade, cor, sabor e textura adequados às necessidades de cada residente',
      'Dietas especiais para diabetes, hipertensão, dislipidemia, doença renal, disfagia e outras condições clínicas',
      'Consistências modificadas (pastosa, semilíquida, líquida) para residentes com dificuldade de deglutição',
      'Suplementação nutricional oral quando necessário (hipercalóricas, hiperproteicas, vitaminas e minerais)',
      'Dietas enterais por sonda com fórmulas específicas para cada necessidade clínica',
      'Monitoramento diário da aceitação alimentar com registro em prontuário e intervenções quando necessário',
      'Controle rigoroso de hidratação com oferta regular de líquidos e uso de espessantes quando indicado',
      'Cozinhas com protocolos de boas práticas, higienização e controle de temperatura conforme normas sanitárias',
      'Alimentos frescos, da estação e de fornecedores certificados, sem ultraprocessados ou conservantes artificiais',
      'Comunicação transparente com famílias sobre evolução nutricional, ajustes e preferências alimentares',
    ],
    heroImage: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/14.jpeg',
    heroImageAlt: 'Refeição colorida e balanceada servida na Novo Lar Geriatria',
    gallery: [
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/3.jpeg',
        alt: 'Nutricionista conversando com residente sobre o plano alimentar',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/15.jpeg',
        alt: 'Mesa posta com refeições variadas e nutritivas',
      },
      {
        src: '/fotos-sobre/sobre-1.jpg',
        alt: 'Ambiente de refeitório acolhedor para convivência durante as refeições',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/14.jpeg',
        alt: 'Refeição balanceada preparada por nutricionistas especializados',
      },
    ],
  },
  {
    id: 'terapia-ocupacional',
    slug: 'terapia-ocupacional',
    title: 'Terapia ocupacional',
    subtitle: 'Protocolos para estímulo da autonomia e da cognição.',
    summary:
      'Programas terapêuticos personalizados para resgatar habilidades, promover socialização e fortalecer a autonomia.',
    category: 'bem-estar',
    description: [
      'A <strong>terapia ocupacional</strong> é uma especialidade essencial no cuidado geriátrico, focada em promover, manter e recuperar a <strong>independência funcional</strong> dos idosos nas atividades cotidianas. Na Novo Lar Geriatria, o serviço de terapia ocupacional é conduzido por profissionais especializados que elaboram <strong>programas terapêuticos individualizados</strong>, respeitando o histórico de vida, as capacidades residuais e os objetivos de cada residente.',
      'Cada residente passa por <strong>avaliação funcional completa</strong> realizada pelo terapeuta ocupacional, que analisa capacidade de realizar <strong>atividades básicas de vida diária</strong> (higiene, vestuário, alimentação, mobilidade), atividades instrumentais (uso de telefone, gerenciamento de medicamentos, tarefas domésticas leves), <strong>funções cognitivas</strong> (memória, atenção, orientação temporal e espacial), coordenação motora fina e grossa, força muscular, equilíbrio e marcha. Com base nessa avaliação, elaboramos um <strong>plano terapêutico personalizado</strong> com metas claras e mensuráveis.',
      'As sessões de terapia ocupacional podem ser <strong>individuais ou em grupo</strong>, conforme necessidade e perfil de cada residente. Nas sessões individuais, trabalhamos objetivos específicos como <strong>treino de transferências</strong> (cama-cadeira, cadeira-vaso sanitário), adaptação de órteses e dispositivos auxiliares, treino de alimentação, <strong>estimulação cognitiva direcionada</strong> e reabilitação pós-AVC ou pós-fraturas. Nas sessões em grupo, promovemos <strong>socialização</strong>, estimulação cognitiva coletiva, oficinas de artesanato, jogos terapêuticos e atividades recreativas adaptadas.',
      'Utilizamos <strong>recursos terapêuticos variados</strong> como jogos de memória, quebra-cabeças, atividades de encaixe, pintura, artesanato, massinha de modelar, materiais de diferentes texturas para estimulação sensorial, <strong>tecnologias assistivas</strong> (talheres adaptados, engrossadores de cabo, antiderrapantes), <strong>órteses</strong> para posicionamento e função, e <strong>adaptações ambientais</strong> para facilitar autonomia e segurança.',
      'A <strong>estimulação cognitiva</strong> é parte fundamental do trabalho da terapia ocupacional. Desenvolvemos atividades específicas para <strong>memória</strong> (recordação de eventos pessoais, memorização de sequências), <strong>atenção e concentração</strong> (jogos com tempo limite, atividades com múltiplos estímulos), <strong>orientação temporal e espacial</strong> (calendários, relógios, mapas), linguagem (nomeação de objetos, leitura, escrita), raciocínio lógico (resolução de problemas, planejamento de atividades) e <strong>funções executivas</strong> (organização, sequenciamento de tarefas).',
      'Trabalhamos também com <strong>prevenção de quedas</strong> através de <strong>treino de equilíbrio</strong>, fortalecimento muscular, orientação quanto a calçados adequados, avaliação de riscos ambientais e orientação de cuidadores. Para residentes com mobilidade reduzida, treinamos <strong>transferências seguras</strong>, uso de andadores e bengalas, e posicionamento adequado em cadeira de rodas para <strong>prevenir úlceras por pressão</strong> e deformidades.',
      'A Novo Lar acredita na importância da <strong>integração entre os profissionais</strong> da equipe multidisciplinar. A terapia ocupacional trabalha de forma articulada com fisioterapia (reabilitação motora), fonoaudiologia (deglutição e comunicação), nutrição (alimentação segura e autônoma), psicologia (aspectos emocionais e motivacionais), enfermagem (cuidados diários) e medicina (ajuste de prescrições e acompanhamento clínico), garantindo <strong>abordagem global</strong> e resultados mais efetivos.',
      'As <strong>famílias são sempre envolvidas</strong> no processo terapêutico. Orientamos sobre como estimular autonomia em casa durante visitas, ensinamos <strong>técnicas de transferências seguras</strong>, esclarecemos sobre uso correto de dispositivos auxiliares e mantemos comunicação constante sobre evolução, conquistas e ajustes necessários no plano terapêutico.',
    ],
    highlights: [
      'Terapeutas ocupacionais especializados em geriatria com avaliação funcional completa na admissão',
      'Planos terapêuticos personalizados com metas claras, mensuráveis e revisadas periodicamente',
      'Sessões individuais focadas em objetivos específicos de reabilitação e ganho de autonomia',
      'Sessões em grupo para estimulação cognitiva, socialização e atividades recreativas adaptadas',
      'Treino de atividades de vida diária: higiene, vestuário, alimentação, mobilidade e transferências',
      'Estimulação cognitiva para memória, atenção, orientação, linguagem e raciocínio lógico',
      'Recursos terapêuticos variados: jogos, artesanato, materiais sensoriais e tecnologias assistivas',
      'Adaptação de órteses, talheres, dispositivos auxiliares e modificações ambientais para autonomia',
      'Prevenção de quedas com treino de equilíbrio, fortalecimento muscular e orientações de segurança',
      'Reabilitação pós-AVC, pós-fraturas e pós-cirúrgica com protocolos específicos',
      'Integração com fisioterapia, fonoaudiologia, nutrição, psicologia e enfermagem para abordagem global',
      'Orientação e treinamento de familiares para continuidade dos estímulos e manutenção das conquistas',
    ],
    heroImage: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg',
    heroImageAlt: 'Residentes participando de oficina terapêutica em grupo',
    gallery: [
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/5.jpeg',
        alt: 'Terapeuta ocupacional conduzindo atividade manual com residente',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/6.jpeg',
        alt: 'Residentes realizando exercícios de coordenação motora fina',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/7.jpeg',
        alt: 'Ambiente preparado para terapia ocupacional com materiais didáticos',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg',
        alt: 'Grupo participando de atividades terapêuticas em ambiente adaptado',
      },
    ],
  },
  {
    id: 'musicoterapia',
    slug: 'musicoterapia-socializacao',
    title: 'Musicoterapia e socialização',
    subtitle: 'Atividades que fortalecem vínculos e bem-estar emocional.',
    summary:
      'Sessões musicais terapêuticas que estimulam memória afetiva, expressão emocional e convivência entre residentes.',
    category: 'bem-estar',
    description: [
      'A <strong>musicoterapia</strong> é uma intervenção terapêutica cientificamente fundamentada que utiliza a <strong>música e seus elementos</strong> (ritmo, melodia, harmonia, timbre) para promover <strong>saúde física, emocional, cognitiva e social</strong>. Na Novo Lar Geriatria, as sessões de musicoterapia são conduzidas por <strong>profissionais especializados</strong> que planejam atividades musicais adaptadas às necessidades, preferências e histórias de vida de cada residente.',
      'A música possui capacidade única de <strong>acessar memórias profundas</strong>, <strong>despertar emoções positivas</strong>, estimular comunicação verbal e não verbal, promover movimento e coordenação motora, e criar momentos de convivência e pertencimento. Para idosos, especialmente aqueles com <strong>demências ou dificuldades de comunicação</strong>, a musicoterapia se mostra extremamente eficaz em <strong>resgatar lembranças, reduzir agitação e ansiedade</strong>, melhorar humor e estimular participação social.',
      'As sessões podem ser <strong>individuais</strong> (para objetivos específicos como estimulação de fala, movimento ou expressão emocional) ou <strong>em grupo</strong> (promovendo socialização, senso de grupo e momentos alegres de convivência). Utilizamos <strong>instrumentos musicais variados</strong> (violão, teclado, pandeiro, chocalhos, tambores, xilofone), <strong>canto, audição de músicas significativas</strong>, improvisação, composição de paródias e atividades rítmicas adaptadas.',
      'Trabalhamos com <strong>repertórios musicais</strong> que fazem parte da <strong>história de vida dos residentes</strong>: músicas da época de juventude, canções folclóricas, hinos, músicas religiosas, marchinhas de carnaval, boleros, tangos, valsas. Essa conexão com a <strong>memória afetiva musical</strong> gera bem-estar, desperta sorrisos, estimula cantar junto, dançar e compartilhar histórias. Muitos residentes que têm dificuldade de falar conseguem <strong>cantar trechos de músicas</strong> que marcaram suas vidas.',
      'A musicoterapia contribui para <strong>estimulação cognitiva</strong> (memorização de letras, sequências rítmicas, concentração), <strong>reabilitação motora</strong> (tocar instrumentos, dançar, bater palmas), <strong>expressão emocional</strong> (cantar sentimentos, relaxamento, catarse), <strong>socialização</strong> (tocar em grupo, participar de coral, celebrar datas especiais) e <strong>qualidade de vida</strong> (prazer, alegria, senso de pertencimento, redução de isolamento).',
      'Além das sessões regulares de musicoterapia, promovemos <strong>eventos especiais musicais</strong> como <strong>festas juninas, baile de carnaval</strong>, celebrações de aniversários, coral dos residentes, audições de violão e canto, e apresentações com músicos convidados. Esses momentos <strong>fortalecem vínculos</strong> entre residentes, equipe e familiares, proporcionando alegria e memórias positivas.',
    ],
    highlights: [
      'Musicoterapeutas especializados em geriatria conduzindo sessões individuais e em grupo',
      'Estímulo à memória afetiva através de músicas significativas da história de vida de cada residente',
      'Redução de ansiedade, agitação e sintomas comportamentais em idosos com demência',
      'Promoção de socialização, senso de grupo e momentos alegres de convivência',
      'Utilização de instrumentos variados (violão, teclado, percussão) e atividades de canto',
      'Repertório musical personalizado: canções folclóricas, hinos, boleros, marchinhas, valsas',
      'Estimulação cognitiva através de memorização de letras, ritmo e melodias',
      'Reabilitação motora com atividades de tocar instrumentos, dançar e movimentos rítmicos',
      'Expressão emocional e relaxamento através da música',
      'Eventos musicais especiais: festas juninas, carnaval, aniversários, apresentações com convidados',
      'Integração com terapia ocupacional, fisioterapia e psicologia para resultados ampliados',
      'Participação de familiares incentivada em eventos e celebrações musicais',
    ],
    heroImage: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/8.jpeg',
    heroImageAlt: 'Grupo de residentes participando de atividade musical com terapeuta',
    gallery: [
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/9.jpeg',
        alt: 'Residente tocando instrumento acompanhado por profissional de musicoterapia',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/12.jpeg',
        alt: 'Atividade musical coletiva em espaço de convivência',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/3.jpeg',
        alt: 'Ambiente acolhedor com instrumentos disponíveis para sessões de musicoterapia',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/8.jpeg',
        alt: 'Momento de celebração e socialização com música',
      },
    ],
  },
  {
    id: 'lavanderia',
    slug: 'servicos-lavanderia',
    title: 'Serviços de lavanderia',
    subtitle: 'Conforto diário com enxoval organizado em cada unidade.',
    summary:
      'Processos padronizados para higienização de roupas pessoais e de cama, garantindo conforto e praticidade aos residentes.',
    category: 'suporte',
    description: [
      'O <strong>serviço de lavanderia</strong> é essencial para garantir <strong>conforto, higiene e bem-estar</strong> dos residentes. Na Novo Lar Geriatria, cada unidade possui equipe dedicada ao <strong>cuidado completo da rouparia</strong>, realizando lavagem, higienização, secagem, passadoria e organização de todas as roupas pessoais, roupas de cama, banho e mesa.',
      'Todas as peças pessoais são <strong>identificadas individualmente</strong> com <strong>etiquetas permanentes</strong> contendo nome do residente, garantindo que cada item retorne ao seu proprietário. Seguimos <strong>protocolos rigorosos</strong> de separação por tipo de tecido, cor, nível de sujidade e necessidade de cuidados especiais, assegurando que roupas delicadas sejam tratadas adequadamente e preservadas por mais tempo.',
      'Utilizamos <strong>produtos de limpeza de qualidade hospitalar</strong>, <strong>hipoalergênicos e seguros</strong>, especialmente selecionados para peles sensíveis de idosos. Os processos de lavagem são realizados em temperaturas adequadas para cada tipo de tecido, garantindo <strong>higienização profunda</strong> e eliminação de bactérias, fungos e odores sem danificar as fibras.',
      'A <strong>troca de enxoval</strong> (lençóis, fronhas, toalhas) é realizada regularmente conforme protocolo de cada unidade, geralmente <strong>duas a três vezes por semana</strong>, ou <strong>sempre que necessário</strong> em caso de intercorrências. Todos os itens são armazenados em local limpo, seco e organizado, facilitando o trabalho da equipe de enfermagem e garantindo reposição rápida.',
      'O serviço de lavanderia proporciona <strong>tranquilidade total às famílias</strong>, que <strong>não precisam se preocupar</strong> com deslocamentos para lavar roupas ou com a logística de troca e reposição de enxoval. Tudo é <strong>cuidado internamente com profissionalismo</strong>, permitindo que os familiares dediquem o tempo de visita ao que realmente importa: estar presente, conversar e compartilhar momentos afetivos com o residente.',
    ],
    highlights: [
      'Lavagem profissional com produtos hospitalares hipoalergênicos adequados para peles sensíveis',
      'Identificação individual de todas as peças pessoais com etiquetas permanentes',
      'Processos padronizados de separação, lavagem, secagem e passadoria conforme tipo de tecido',
      'Troca regular de enxoval (lençóis, fronhas, toalhas) duas a três vezes por semana',
      'Cuidado especial com roupas delicadas e peças que requerem atenção específica',
      'Armazenamento organizado e higienizado facilitando reposição rápida',
      'Equipe dedicada em cada unidade garantindo agilidade e qualidade no serviço',
      'Tranquilidade para famílias sem necessidade de deslocamentos ou preocupações com lavanderia',
    ],
    heroImage: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/2.jpeg',
    heroImageAlt: 'Equipe organizando enxoval em lavanderia da Novo Lar Geriatria',
    gallery: [
      {
        src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/5.jpeg',
        alt: 'Equipe dobrando enxoval na lavanderia com processos padronizados',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/6.jpeg',
        alt: 'Detalhe de enxoval identificado pronto para cada residente',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/15.jpeg',
        alt: 'Quarto com roupas de cama organizadas e higienizadas',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/2.jpeg',
        alt: 'Área de lavanderia organizada e equipada profissionalmente',
      },
    ],
  },
  {
    id: 'convenio-farmacia',
    slug: 'convenio-farmacia',
    title: 'Convênio com farmácia',
    subtitle: 'Gestão facilitada das medicações e reposições rápidas.',
    summary:
      'Parcerias com farmácias para entrega programada de medicamentos e insumos diretamente nas unidades.',
    category: 'suporte',
    description: [
      'A <strong>gestão adequada de medicamentos</strong> é fundamental para garantir <strong>continuidade e segurança do tratamento</strong> dos residentes. A Novo Lar Geriatria mantém <strong>convênio com farmácias de confiança</strong> que realizam <strong>entrega programada</strong> de medicamentos e insumos diretamente nas unidades, facilitando a rotina das famílias e garantindo que nenhuma prescrição fique sem reposição.',
      'Quando um residente ingressa na Novo Lar, a equipe de enfermagem recebe todas as prescrições médicas atualizadas e realiza <strong>levantamento completo dos medicamentos em uso</strong>. A partir daí, estabelecemos contato com a farmácia conveniada da família ou, se preferir, indicamos <strong>parceiros de confiança</strong> que oferecem <strong>condições especiais e entrega ágil</strong>.',
      'O <strong>sistema funciona de forma integrada</strong>: a enfermagem <strong>monitora diariamente o estoque</strong> de medicamentos de cada residente, identifica quando algum item está próximo do fim, comunica a família e a farmácia, e agenda a reposição antes que ocorra falta. Esse <strong>controle rigoroso</strong> evita <strong>interrupções no tratamento</strong> e garante administração correta conforme prescrição médica.',
      'Além de medicamentos de uso contínuo, o convênio abrange também <strong>insumos médicos</strong> como <strong>fraldas geriátricas, materiais para curativos, seringas, agulhas, luvas, sondas, fórmulas enterais</strong> e suplementos nutricionais. Tudo é entregue na unidade, <strong>conferido pela enfermagem</strong> quanto à validade, dosagem e integridade da embalagem, e <strong>armazenado adequadamente</strong>.',
      'As famílias recebem <strong>relatórios periódicos</strong> sobre consumo de medicamentos e insumos, facilitando o <strong>controle financeiro</strong> e a compreensão de quais itens estão sendo utilizados. Mantemos <strong>comunicação transparente</strong> sobre custos, possibilidades de <strong>genéricos ou similares</strong>, e orientações para otimização de gastos sem comprometer a qualidade do tratamento.',
    ],
    highlights: [
      'Parcerias com farmácias confiáveis para entrega programada de medicamentos e insumos',
      'Controle rigoroso de estoque pela enfermagem evitando faltas e interrupções no tratamento',
      'Levantamento completo de prescrições e medicamentos em uso na admissão do residente',
      'Comunicação proativa com famílias quando necessária reposição de medicamentos',
      'Entrega de insumos médicos (fraldas, curativos, seringas, sondas, fórmulas enterais)',
      'Conferência de validade, dosagem e integridade de todas as entregas pela equipe de enfermagem',
      'Armazenamento adequado conforme normas sanitárias e tipo de medicamento',
      'Relatórios periódicos para famílias sobre consumo, facilitando controle financeiro',
      'Orientação sobre opções de genéricos e similares para otimização de custos',
      'Transparência total sobre valores, prescrições e necessidades de reposição',
    ],
    heroImage: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/12.jpeg',
    heroImageAlt: 'Profissional conferindo medicações e insumos em unidade Novo Lar',
    gallery: [
      {
        src: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/13.jpeg',
        alt: 'Controle de estoque com medicações identificadas por residente',
      },
      {
        src: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/14.jpeg',
        alt: 'Enfermeira utilizando checklist para conferência de medicação',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/4.jpeg',
        alt: 'Sala de medicação equipada com armários e controle de estoque',
      },
      {
        src: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/12.jpeg',
        alt: 'Profissional organizando medicamentos com protocolo de segurança',
      },
    ],
  },
]

export const SERVICE_MENU_GROUPS = (
  Object.entries(SERVICE_CATEGORY_INFO) as Array<[
    ServiceCategoryId,
    { title: string; description: string }
  ]>
).map(([categoryId, info]) => ({
  id: categoryId,
  title: info.title,
  description: info.description,
  items: SERVICE_DETAILS.filter((service) => service.category === categoryId).map((service) => ({
    id: service.id,
    title: service.title,
    summary: service.subtitle,
    href: `/servicos/${service.slug}`,
  })),
})).filter((group) => group.items.length > 0)

export const SERVICE_NAV = SERVICE_DETAILS.map((service) => ({
  id: service.id,
  title: service.title,
}))

export const getServiceBySlug = (slug: string) =>
  SERVICE_DETAILS.find((service) => service.slug === slug)
