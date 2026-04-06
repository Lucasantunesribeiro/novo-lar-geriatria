import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import ServiceCard from '@/components/servicos/ServiceCard'
import EstruturaModalidades from '@/components/estrutura/EstruturaModalidades'

const services = [
  {
    tag: 'ambiente acolhedor.',
    title: 'Hospedagem assistida 24h',
    description:
      'A hospedagem assistida 24 horas é muito mais do que um espaço de moradia: trata-se de um modelo de cuidado integral que combina assistência médica, enfermagem especializada, suporte nutricional, atividades terapêuticas e acolhimento humanizado. Na Novo Lar Geriatria, proporcionamos um ambiente preparado para atender idosos em diferentes graus de dependência, desde aqueles que buscam autonomia e convivência social até pacientes que necessitam de cuidados intensivos e monitoramento contínuo.',
    benefits: [
      'Planos permanentes ou temporários totalmente personalizados conforme perfil clínico e necessidades de cada família',
      'Equipe multidisciplinar completa presente 24h: médico geriatra, enfermeiros, fisioterapeutas, nutricionistas, psicólogos e terapeutas ocupacionais',
      'Ambientes totalmente acessíveis com pisos antiderrapantes, corrimãos, áreas verdes arborizadas e salas de convivência climatizadas',
      'Quartos individuais ou compartilhados com camas hospitalares, climatização, banheiros adaptados e sistema de chamada de emergência',
      'Programação diária supervisionada: atividades terapêuticas, recreativas, culturais, fisioterapia em grupo e celebrações especiais',
    ],
    images: [
      {
        src: '/servicos/hospedagem-assistida/1.png',
        alt: 'Área externa arborizada da Novo Lar com moradores em atividade',
      },
      {
        src: '/servicos/hospedagem-assistida/2.png',
        alt: 'Equipe de enfermagem acompanhando residente durante a rotina diária',
      },
      {
        src: '/servicos/hospedagem-assistida/3.png',
        alt: 'Suíte climatizada e acessível da Novo Lar Geriatria',
      },
      {
        src: '/servicos/hospedagem-assistida/4.png',
        alt: 'Ambiente acolhedor com equipe multidisciplinar presente',
      },
    ],
    link: '/servicos/hospedagem-assistida-24h',
  },
  {
    tag: 'Equipe especializada',
    title: 'Enfermagem e médico 24h',
    description: (
      <>
        O acompanhamento médico e de enfermagem 24 horas é o pilar fundamental da
        assistência oferecida pela Novo Lar Geriatria. Nossa equipe é composta por{' '}
        <strong>médicos geriatras, enfermeiros</strong>{' '}
        <strong>coordenadores e técnicos de enfermagem especializados</strong> em{' '}
        <strong>cuidados geriátricos</strong>, todos trabalhando em regime de plantão
        contínuo para garantir{' '}
        <strong>segurança, monitoramento e resposta</strong>{' '}
        <strong>imediata</strong> a qualquer necessidade clínica dos residentes.
      </>
    ),
    benefits: [
      'Médicos geriatras com avaliações semanais, ajuste de prescrições e acompanhamento contínuo da evolução clínica',
      'Equipe de enfermagem presente 24h por dia, 7 dias por semana em regime de plantão ininterrupto',
      'Administração rigorosa de medicamentos com sistema de checklist duplo e controle de horários',
      'Monitoramento de sinais vitais (pressão arterial, glicemia, temperatura, saturação) conforme protocolo individualizado',
      'Prontuário eletrônico completo com histórico de saúde, exames, diagnósticos e intercorrências atualizados em tempo real',
    ],
    images: [
      {
        src: '/servicos/enfermagem-medico/1.png',
        alt: 'Enfermeira auxiliando residente durante atividade terapêutica',
      },
      {
        src: '/servicos/enfermagem-medico/2.png',
        alt: 'Equipe multidisciplinar reunida revisando protocolos de cuidado',
      },
      {
        src: '/servicos/enfermagem-medico/3.png',
        alt: 'Profissional monitorando sinais vitais em ambiente moderno e seguro',
      },
      {
        src: '/servicos/enfermagem-medico/4.png',
        alt: 'Enfermeira utilizando checklist para conferência de medicação',
      },
    ],
    link: '/servicos/enfermagem-medico-24h',
    reverse: true,
  },
  {
    tag: 'supervisão de nutricionistas.',
    title: 'Nutrição individualizada',
    description: (
      <>
        A nutrição adequada é fundamental para a saúde, qualidade de vida e bem-estar dos
        idosos. Na Novo Lar Geriatria, o acompanhamento nutricional é conduzido por{' '}
        <strong>nutricionistas especializados em</strong> <strong>geriatria</strong> que
        elaboram planos alimentares individualizados, considerando não apenas as
        necessidades clínicas, mas também as preferências pessoais, a história alimentar e
        os aspectos culturais de cada residente.
      </>
    ),
    benefits: [
      'Nutricionistas especializadas em geriatria com avaliação nutricional completa na admissão e reavaliações periódicas',
      'Seis refeições diárias balanceadas: café da manhã, lanche manhã, almoço, lanche tarde, jantar e ceia',
      'Cardápios elaborados com variedade, cor, sabor e textura adequados às necessidades de cada residente',
      'Dietas especiais para diabetes, hipertensão, dislipidemia, doença renal, disfagia e outras condições clínicas',
      'Consistências modificadas (pastosa, semilíquida, líquida) para residentes com dificuldade de deglutição',
    ],
    images: [
      {
        src: '/servicos/nutricao-individualizada/1.png',
        alt: 'Nutricionista conversando com residente sobre o plano alimentar',
      },
      {
        src: '/servicos/nutricao-individualizada/2.png',
        alt: 'Mesa posta com refeições variadas e nutritivas',
      },
      {
        src: '/servicos/nutricao-individualizada/3.png',
        alt: 'Ambiente de refeitório acolhedor para convivência durante as refeições',
      },
      {
        src: '/servicos/nutricao-individualizada/4.png',
        alt: 'Refeição balanceada preparada por nutricionistas especializados',
      },
    ],
    link: '/servicos/nutricao-individualizada',
  },
  {
    tag: 'estímulo da autonomia e da cognição.',
    title: 'Terapia ocupacional',
    description: (
      <>
        A terapia ocupacional é uma especialidade essencial no cuidado geriátrico, focada
        em promover, manter e recuperar a <strong>independência</strong>{' '}
        <strong>funcional</strong> dos idosos nas atividades cotidianas. Na Novo Lar
        Geriatria, o serviço de terapia ocupacional é conduzido por profissionais
        especializados que elaboram <strong>programas terapêuticos</strong>{' '}
        <strong>individualizados</strong>, respeitando o histórico de vida, as capacidades
        residuais e os objetivos de cada residente.
      </>
    ),
    benefits: [
      'Terapeutas ocupacionais especializados em geriatria com avaliação funcional completa na admissão',
      'Planos terapêuticos personalizados com metas claras, mensuráveis e revisadas periodicamente',
      'Sessões individuais focadas em objetivos específicos de reabilitação e ganho de autonomia',
      'Sessões em grupo para estimulação cognitiva, socialização e atividades recreativas adaptadas',
      'Treino de atividades de vida diária: higiene, vestuário, alimentação, mobilidade e transferências',
    ],
    images: [
      {
        src: '/servicos/terapia-ocupacional/1.png',
        alt: 'Terapeuta ocupacional conduzindo atividade manual com residente',
      },
      {
        src: '/servicos/terapia-ocupacional/2.png',
        alt: 'Residentes realizando exercícios de coordenação motora fina',
      },
      {
        src: '/servicos/terapia-ocupacional/3.png',
        alt: 'Ambiente preparado para terapia ocupacional com materiais didáticos',
      },
      {
        src: '/servicos/terapia-ocupacional/4.png',
        alt: 'Grupo participando de atividades terapêuticas em ambiente adaptado',
      },
    ],
    link: '/servicos/terapia-ocupacional',
    reverse: true,
  },
  {
    tag: 'bem-estar emocional.',
    title: 'Musicoterapia e socialização',
    description: (
      <>
        A musicoterapia é uma intervenção terapêutica cientificamente fundamentada que
        utiliza a música e seus elementos (ritmo, melodia, harmonia, timbre) para promover{' '}
        <strong>saúde física, emocional,</strong> <strong>cognitiva e social</strong>. Na
        Novo Lar Geriatria, as sessões de musicoterapia são conduzidas por profissionais
        especializados que planejam atividades musicais adaptadas às necessidades,
        preferências e histórias de vida de cada residente.
      </>
    ),
    benefits: [
      'Musicoterapeutas especializados em geriatria conduzindo sessões individuais e em grupo',
      'Estímulo à memória afetiva através de músicas significativas da história de vida de cada residente',
      'Redução de ansiedade, agitação e sintomas comportamentais em idosos com demência',
      'Promoção de socialização, senso de grupo e momentos alegres de convivência',
      'Utilização de instrumentos variados (violão, teclado, percussão) e atividades de canto',
    ],
    images: [
      {
        src: '/servicos/musicoterapia/1.png',
        alt: 'Residente tocando instrumento acompanhado por profissional de musicoterapia',
      },
      {
        src: '/servicos/musicoterapia/2.png',
        alt: 'Residente tocando instrumento acompanhado por profissional de musicoterapia',
      },
      {
        src: '/servicos/musicoterapia/3.png',
        alt: 'Ambiente acolhedor com instrumentos disponíveis para sessões de musicoterapia',
      },
      {
        src: '/servicos/musicoterapia/4.png',
        alt: 'Momento de celebração e socialização com música',
      },
    ],
    link: '/servicos/musicoterapia-socializacao',
  },
  {
    tag: 'Conforto diário com enxoval organizado',
    title: 'Serviços de lavanderia',
    description: (
      <>
        O serviço de lavanderia é essencial para garantir <strong>conforto, higiene</strong>{' '}
        <strong>e bem-estar</strong> dos residentes. Na Novo Lar Geriatria, cada unidade
        possui equipe dedicada ao cuidado completo da rouparia, realizando lavagem,
        higienização, secagem, passadoria e organização de todas as roupas pessoais, roupas
        de cama, banho e mesa.
      </>
    ),
    benefits: [
      'Lavagem profissional com produtos hospitalares hipoalergênicos adequados para peles sensíveis',
      'Identificação individual de todas as peças pessoais com etiquetas permanentes',
      'Processos padronizados de separação, lavagem, secagem e passadoria conforme tipo de tecido',
      'Troca regular de enxoval (lençóis, fronhas, toalhas) duas a três vezes por semana',
      'Cuidado especial com roupas delicadas e peças que requerem atenção específica',
    ],
    images: [
      {
        src: '/servicos/lavanderia/1.png',
        alt: 'Equipe dobrando enxoval na lavanderia com processos padronizados',
      },
      {
        src: '/servicos/lavanderia/2.png',
        alt: 'Detalhe de enxoval identificado pronto para cada residente',
      },
      {
        src: '/servicos/lavanderia/3.png',
        alt: 'Quarto com roupas de cama organizadas e higienizadas',
      },
      {
        src: '/servicos/lavanderia/4.png',
        alt: 'Área de lavanderia organizada e equipada profissionalmente',
      },
    ],
    link: '/servicos/servicos-lavanderia',
    reverse: true,
  },
  {
    tag: 'Gestão facilitada das medicações',
    title: 'Convênio com farmácia',
    description:
      'A gestão adequada de medicamentos é fundamental para garantir continuidade e segurança do tratamento dos residentes. A Novo Lar Geriatria mantém convênio com farmácias de confiança que realizam entrega programada de medicamentos e insumos diretamente nas unidades, facilitando a rotina das famílias e garantindo que nenhuma prescrição fique sem reposição.',
    benefits: [
      'Parcerias com farmácias confiáveis para entrega programada de medicamentos e insumos',
      'Controle rigoroso de estoque pela enfermagem evitando faltas e interrupções no tratamento',
      'Levantamento completo de prescrições e medicamentos em uso na admissão do residente',
      'Comunicação proativa com famílias quando necessária reposição de medicamentos',
      'Entrega de insumos médicos (fraldas, curativos, seringas, sondas, fórmulas enterais)',
    ],
    images: [
      {
        src: '/servicos/farmacia/1.png',
        alt: 'Controle de estoque com medicações identificadas por residente',
      },
      {
        src: '/servicos/farmacia/2.png',
        alt: 'Enfermeira utilizando checklist para conferência de medicação',
      },
      {
        src: '/servicos/farmacia/3.png',
        alt: 'Sala de medicação equipada com armários e controle de estoque',
      },
      {
        src: '/servicos/farmacia/4.png',
        alt: 'Profissional organizando medicamentos com protocolo de segurança',
      },
    ],
    link: '/servicos/convenio-farmacia',
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <HeaderWrapper />

      <EstruturaModalidades />

      {/* Section */}
      <section className="flex flex-col items-center w-full bg-[#F9FAFB] py-16 lg:py-[80px] px-4 sm:px-8">
        
        {/* Container */}
        <div className="flex flex-col items-center w-full max-w-[1180px] gap-12 lg:gap-[48px]">
          
          {/* Header Container */}
          <div className="flex flex-col items-center w-full gap-4 text-center">
            <h2 className="font-bold text-4xl lg:text-[48px] lg:leading-[48px] text-[#2C3E6B]">
              Serviços especializados
            </h2>
            <p className="font-normal text-base md:text-lg text-[#4A5565] max-w-[912px]">
              Atendimento multidisciplinar com protocolos exclusivos para promover segurança, autonomia e qualidade de vida.
            </p>
          </div>

          {/* Services Container */}
          <div className="flex flex-col items-center w-full gap-12 lg:gap-[48px]">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                tag={service.tag}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                images={service.images}
                link={service.link}
                reverse={service.reverse}
              />
            ))}
          </div>

        </div>
      </section>

      <FooterWrapper />
    </div>
  )
}
