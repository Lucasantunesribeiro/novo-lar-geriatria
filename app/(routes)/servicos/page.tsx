import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { COMPANY_CONTACT } from '@/lib/site-data'
import Image from 'next/image'
import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  Brain,
  Building2,
  CalendarCheck,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  HandHeart,
  Heart,
  Home,
  Hospital,
  ListChecks,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  PhoneCall,
  PillBottle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Utensils,
  Waves,
} from 'lucide-react'

const HERO_STATS = [
  {
    value: '3',
    label: 'Unidades em Porto Alegre',
    description: 'Localizadas nos bairros Moinhos de Vento e Passo d’Areia',
  },
  {
    value: '24h',
    label: 'Equipe de enfermagem',
    description: 'Profissionais habilitados acompanhando todos os residentes',
  },
  {
    value: '6',
    label: 'Refeições diárias',
    description: 'Cardápio supervisionado por nutricionista com ajustes individuais',
  },
]

const SERVICE_DETAILS = [
  {
    id: 'geriatria',
    title: 'Hospedagem assistida',
    subtitle: 'Geriatria em Porto Alegre',
    icon: Home,
    description: [
      'Na Novo Lar Geriatria oferecemos dois tipos de hospedagem, de acordo com a necessidade do idoso e de sua família. Hospedagem permanente ou temporária para residentes independentes ou que tenham qualquer grau de dependência. Há também assistência para altas hospitalares no pós-operatório e recuperação de traumas.',
      'Com três unidades em Porto Alegre, a Novo Lar conta com ambientes amplos e aconchegantes, garantindo conforto, exclusividade, segurança e acolhimento. Equipes de qualidade e serviços especializados acompanham cada residente e sua família em todas as etapas do cuidado.',
    ],
    highlights: [
      'Planos permanentes ou temporários adaptados ao perfil de cada residente',
      'Assistência pós-operatória e suporte para reabilitação de traumas',
      'Rotinas planejadas pela equipe multidisciplinar para favorecer autonomia e bem-estar',
    ],
  },
  {
    id: 'medico-enfermagem',
    title: 'Médico e enfermagem',
    subtitle: 'Atenção integral 24 horas',
    icon: Stethoscope,
    description: [
      'Serviço prestado por médico com especialização em geriatria, com consultas e avaliações semanais e individuais. Outros especialistas e médicos da família podem acompanhar o residente dentro da unidade, mantendo o histórico de saúde sempre atualizado.',
      'A equipe técnica de enfermagem é gerenciada por enfermeira e atua 24 horas por dia. Profissionais habilitados e capacitados acompanham cada residente em todas as rotinas, orientando, acolhendo e apoiando familiares.',
    ],
    highlights: [
      'Cobertura médica geriatra com avaliações periódicas',
      'Enfermagem técnica 24h para administração de medicamentos e cuidados diários',
      'Integração com médicos e especialistas da família quando necessário',
    ],
  },
  {
    id: 'nutricao',
    title: 'Nutrição e alimentação',
    subtitle: 'Planos alimentares individualizados',
    icon: Utensils,
    description: [
      'Avaliação nutricional semanal e elaboração de cardápios personalizados. São servidas seis refeições diárias elaboradas e supervisionadas por nutricionista, com foco em equilíbrio, variedade e respeito às necessidades clínicas de cada residente.',
      'A cozinha segue as boas práticas de manipulação de alimentos e mantém acompanhamento diário das refeições. A nutrição garante um plano balanceado, baseado em dados antropométricos e clínicos, para promover saúde e prazer à mesa.',
    ],
    highlights: [
      'Seis refeições diárias supervisionadas por nutricionista',
      'Adequação para dietas especiais e necessidades clínicas',
      'Monitoramento constante da aceitação alimentar e hidratação',
    ],
  },
  {
    id: 'terapia-ocupacional',
    title: 'Terapia ocupacional',
    subtitle: 'Autonomia no cotidiano',
    icon: Activity,
    description: [
      'Intervenções que resgatam habilidades desde as atividades mais simples, como escovar os dentes ou levar alimentos à boca, até tarefas mais complexas. A terapia ocupacional promove bem-estar, previne e recupera disfunções e fortalece a interação social.',
      'O programa é estruturado para melhorar o desempenho funcional e proporcionar qualidade de vida, sempre considerando a história e os objetivos de cada residente e de sua família.',
    ],
    highlights: [
      'Planos terapêuticos personalizados e em grupo',
      'Estímulo à coordenação motora, cognição e socialização',
      'Acompanhamento contínuo para evolução e reabilitação',
    ],
  },
  {
    id: 'musicoterapia',
    title: 'Musicoterapia',
    subtitle: 'Expressão e vínculos afetivos',
    icon: Waves,
    description: [
      'Sessões em grupo destinadas a facilitar comunicação, mobilização, expressão e organização emocional. A música é utilizada como recurso terapêutico para atender necessidades físicas, emocionais, mentais, sociais e cognitivas.',
      'Os encontros favorecem prevenção e reabilitação, fortalecendo vínculos afetivos e proporcionando mais qualidade de vida aos residentes e familiares.',
    ],
    highlights: [
      'Atividades musicais terapêuticas conduzidas por profissionais especializados',
      'Foco em comunicação, memória afetiva e estímulos cognitivos',
      'Integração social e redução de quadros de ansiedade e isolamento',
    ],
  },
  {
    id: 'lavanderia',
    title: 'Serviços de lavanderia',
    subtitle: 'Conforto e praticidade nas unidades',
    icon: Package,
    description: [
      'Serviço disponível em cada uma das unidades da Novo Lar – Hospedagem Assistida com Qualidade®. Rouparia e enxoval são cuidados por equipes treinadas, garantindo peças higienizadas, organizadas e prontas para uso diário.',
      'O serviço contribui para conservar conforto e personalização dos ambientes, mantendo a rotina leve para residentes e familiares.',
    ],
    highlights: [
      'Lavagem, higienização e organização de roupas pessoais e de cama',
      'Processos padronizados para preservar peças delicadas e individuais',
      'Equipe dedicada em cada unidade para atender demandas específicas',
    ],
  },
  {
    id: 'convenio-farmacia',
    title: 'Convênio com farmácia',
    subtitle: 'Gestão facilitada de medicações',
    icon: PillBottle,
    description: [
      'Para dar maior comodidade aos familiares, a Novo Lar mantém convênio com farmácias, agilizando a entrega de medicações e insumos prescritos. O convênio integra a rotina de cuidados e garante reposição rápida e segura.',
      'As unidades seguem os mesmos padrões de acolhimento e hospitalidade, com espaços amplos, aconchegantes e equipe atenciosa pronta para acolher as demandas do dia a dia.',
    ],
    highlights: [
      'Entrega programada de medicamentos diretamente nas unidades',
      'Controle compartilhado entre enfermagem e farmacêuticos parceiros',
      'Menos deslocamentos e burocracias para familiares e cuidadores',
    ],
  },
]

const SUPPORT_FEATURES = [
  {
    icon: Users,
    title: 'Equipe multidisciplinar',
    description:
      'Médicos, enfermeiros, nutricionistas, terapeutas ocupacionais, musicoterapeutas e cuidadores atuando de forma integrada.',
  },
  {
    icon: Heart,
    title: 'Rotinas acolhedoras',
    description:
      'Programações que estimulam autonomia, socialização e bem-estar emocional em um ambiente familiar e seguro.',
  },
  {
    icon: CheckCircle2,
    title: 'Planos personalizados',
    description:
      'Planos de cuidados construídos com cada família, respeitando históricos clínicos, preferências e objetivos individuais.',
  },
  {
    icon: Building2,
    title: 'Estruturas completas',
    description:
      'Unidades com acessibilidade total, jardins, salas de convivência, elevadores e espaços terapêuticos preparados para diferentes perfis.',
  },
]

const UNIT_CARDS = [
  {
    slug: 'moinhos-luciana-de-abreu',
    name: 'Moinhos de Vento · Rua Luciana de Abreu, 151',
    image: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg',
    address: 'Rua Luciana de Abreu, 151 · Porto Alegre - RS',
    phone: '(51) 3346.7620',
    highlights: ['Ambiente arborizado e acolhedor', 'Suítes individuais e duplas', 'Próximo aos serviços do bairro Moinhos'],
  },
  {
    slug: 'passo-dareia',
    name: "Passo d'Areia · Rua Brigadeiro Oliveira Neri, 175",
    image: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
    address: "Rua Brigadeiro Oliveira Neri, 175 · Porto Alegre - RS",
    phone: '(51) 3376.9462',
    highlights: ['Espaços amplos e iluminados', 'Fácil acesso pelas principais vias da zona norte', 'Rotina integrada de terapias e atividades'],
  },
  {
    slug: 'moinhos-barao-de-santo-angelo',
    name: 'Moinhos de Vento · R. Barão de Santo Ângelo, 406',
    image: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
    address: 'Rua Barão de Santo Ângelo, 406 · Porto Alegre - RS',
    phone: '(51) 3346.7620',
    highlights: ['Estrutura moderna em região central', 'Áreas de convivência integradas com jardins', 'Equipe de referência em reabilitação e acolhimento'],
  },
]

const SERVICE_NAV = SERVICE_DETAILS.map((service) => ({
  id: service.id,
  title: service.subtitle,
}))

const CARE_PROGRAMS = [
  {
    icon: Home,
    title: 'Hospedagem permanente',
    description:
      'Acolhimento contínuo em suítes adaptadas, com acompanhamento 24h da equipe de enfermagem, médico geriatra e profissionais de apoio. Ideal para quem busca rotina estável, estímulos diários e convivência em um ambiente seguro.',
    bullets: [
      'Planos personalizados que respeitam preferências e histórico clínico',
      'Rotinas com terapias, alimentação supervisionada e estímulos cognitivos',
      'Ambientes aconchegantes que acolhem residentes com diferentes níveis de dependência',
    ],
  },
  {
    icon: CalendarClock,
    title: 'Hospedagem temporária',
    description:
      'Períodos flexíveis para famílias que precisam de suporte em viagens, férias ou diante de mudanças na rotina. A equipe garante continuidade dos cuidados e integração com o plano já adotado pelos familiares.',
    bullets: [
      'Estadas planejadas com acompanhamento médico e de enfermagem integral',
      'Atividades diárias que estimulam autonomia e socialização',
      'Transição tranquila entre o lar e a clínica, com orientação à família',
    ],
  },
  {
    icon: Hospital,
    title: 'Cuidados pós-operatórios e reabilitação',
    description:
      'Assistência especializada para alta hospitalar, reabilitação de traumas e recuperação funcional. A equipe multidisciplinar acompanha cada etapa para acelerar a retomada das atividades com segurança.',
    bullets: [
      'Monitoramento clínico, administração de medicamentos e curativos',
      'Apoio de fisioterapia, terapia ocupacional e musicoterapia conforme indicação',
      'Adequação de cardápio e rotina conforme orientações médicas',
    ],
  },
]

const CARE_JOURNEY = [
  {
    icon: ClipboardList,
    title: 'Avaliação completa',
    description:
      'Reunião inicial com família e residente para entender histórico de saúde, preferências, expectativas e necessidades específicas.',
  },
  {
    icon: Brain,
    title: 'Plano individualizado',
    description:
      'Construção conjunta do plano de cuidados com definição de terapias, alimentação, acompanhamento médico e rotinas personalizadas.',
  },
  {
    icon: HandHeart,
    title: 'Cuidado multidisciplinar',
    description:
      'Equipe de enfermagem 24h, médico geriatra, terapeuta ocupacional, nutricionista e musicoterapeuta atuando em sincronia.',
  },
  {
    icon: ShieldCheck,
    title: 'Acompanhamento e diálogo',
    description:
      'Monitoramento contínuo com atualizações à família, ajustes de protocolos e acolhimento para dúvidas a qualquer momento.',
  },
]

const CONTACT_OPTIONS = [
  {
    icon: PhoneCall,
    title: 'Central Novo Lar',
    description: 'Converse com nossa equipe e tire todas as dúvidas sobre as modalidades de hospedagem.',
    action: 'Ligar agora',
    href: `tel:${COMPANY_CONTACT.centralPhoneDigits}`,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp 24h',
    description: 'Envie uma mensagem e receba retorno rápido da equipe de plantão para orientações imediatas.',
    action: 'Abrir conversa',
    href: `https://wa.me/${COMPANY_CONTACT.whatsappDigits}`,
    target: '_blank',
  },
  {
    icon: CalendarCheck,
    title: 'Agendar visita guiada',
    description: 'Escolha a unidade de preferência e conheça pessoalmente nossa estrutura e protocolos de cuidado.',
    action: 'Agendar agora',
    href: '/contato',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-white">
        <Image
          src="/banner-servicos.jpg"
          alt="Profissional de saúde acolhendo familiar na Novo Lar Geriatria"
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a36]/95 via-[#1d3364]/90 to-[#4A9B9F]/85"></div>
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-15 mix-blend-soft-light"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                <Sparkles className="h-4 w-4 text-[#D4A853]" />
                Hospedagem assistida em Porto Alegre
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Serviços completos para o cuidado integral de quem você ama
              </h1>
              <p className="mt-6 text-lg text-white/80 sm:text-xl">
                Conheça nossa estrutura multidisciplinar, construída para oferecer segurança, autonomia e acolhimento em todas as etapas da jornada do idoso.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {SERVICE_NAV.map((service) => (
                  <a
                    key={service.id}
                    href={`#service-${service.id}`}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
                  >
                    {service.title}
                  </a>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#D4A853] px-7 py-4 text-lg font-semibold text-[#1a2745] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#c49943]"
                >
                  Agendar visita guiada
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" />
                  Ligar para a central {COMPANY_CONTACT.centralPhoneDisplay}
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-lg shadow-black/10 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                    {stat.label}
                  </div>
                  <p className="mt-2 text-sm text-white/80">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section id="overview" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              {SERVICE_DETAILS[0].description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="rounded-3xl border border-[#4A9B9F]/20 bg-[#4A9B9F]/5 p-8 shadow-sm">
              <div className="flex items-center gap-3 text-[#2C3E6B]">
                <ListChecks className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-[0.3em]">
                  Cuidado que se adapta a cada família
                </span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                {SERVICE_DETAILS[0].highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[#4A9B9F]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programas de hospedagem */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#4A9B9F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#2C3E6B]">
              <Home className="h-4 w-4" />
              Modalidades disponíveis
            </span>
            <h2 className="mt-4 text-4xl font-bold text-[#2C3E6B] sm:text-5xl">
              Cuidado que acompanha cada fase da família
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Escolha a modalidade que mais combina com a sua necessidade e conte com nossas equipes para garantir conforto, segurança e autonomia na rotina do idoso.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CARE_PROGRAMS.map((program) => {
              const Icon = program.icon
              return (
                <div
                  key={program.title}
                  className="flex h-full flex-col rounded-3xl border border-[#4A9B9F]/15 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#4A9B9F] hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4A9B9F]/10 text-[#4A9B9F]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-[#2C3E6B]">{program.title}</h3>
                  <p className="mt-4 text-base text-gray-600">{program.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-gray-600">
                    {program.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 text-[#4A9B9F]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Serviços detalhados */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#2C3E6B] sm:text-5xl">Serviços especializados</h2>
            <p className="mt-4 text-lg text-gray-600">
              Atendimento multidisciplinar com protocolos exclusivos para promover segurança, autonomia e qualidade de vida.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {SERVICE_DETAILS.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={service.id}
                  id={`service-${service.id}`}
                  className={`grid items-center gap-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:grid-cols-2 ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#4A9B9F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#4A9B9F]">
                      <Icon className="h-4 w-4" />
                      {service.subtitle}
                    </div>
                    <h3 className="mt-4 text-3xl font-bold text-[#2C3E6B]">{service.title}</h3>
                    <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-700">
                      {service.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-[#4A9B9F]/15 bg-[#4A9B9F]/5 p-8">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2C3E6B]">
                      Diferenciais do programa
                    </h4>
                    <ul className="mt-4 space-y-3 text-sm text-gray-700">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 text-[#4A9B9F]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Jornada de cuidado */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2C3E6B]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#2C3E6B]">
              <ClipboardList className="h-4 w-4" />
              Como cuidamos
            </span>
            <h2 className="mt-4 text-4xl font-bold text-[#2C3E6B] sm:text-5xl">Processo acolhedor do primeiro contato ao dia a dia</h2>
            <p className="mt-4 text-lg text-gray-600">
              Transparência e proximidade com a família em todas as etapas. Nossa metodologia foi desenhada para garantir transições suaves e acompanhamento frequente.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CARE_JOURNEY.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#4A9B9F] hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4A9B9F]/10 text-[#4A9B9F]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#2C3E6B]">{step.title}</h3>
                  <p className="mt-3 text-sm text-gray-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Estrutura de apoio */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#2C3E6B] sm:text-5xl">Estrutura que acolhe famílias inteiras</h2>
            <p className="mt-4 text-lg text-gray-600">
              A combinação entre ambiente planejado, equipe próxima e rotinas humanizadas garante tranquilidade para o idoso e para quem acompanha de perto.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SUPPORT_FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#4A9B9F] hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4A9B9F]/10 text-[#4A9B9F]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#2C3E6B]">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Unidades */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#2C3E6B] sm:text-5xl">Unidades Novo Lar Geriatria</h2>
            <p className="mt-4 text-lg text-gray-600">
              Escolha a unidade mais próxima para conhecer de perto nossa estrutura e os ambientes preparados para acolher o seu familiar.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {UNIT_CARDS.map((unit) => (
              <div
                key={unit.slug}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#4A9B9F] hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2C3E6B]">
                    <MapPin className="h-3.5 w-3.5" />
                    Porto Alegre
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-[#2C3E6B]">{unit.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{unit.address}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {unit.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 text-[#4A9B9F]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4 text-sm">
                    <span className="font-semibold text-[#2C3E6B]">{unit.phone}</span>
                    <Link
                      href={`/unidades/${unit.slug}`}
                      className="text-sm font-semibold text-[#4A9B9F] transition hover:text-[#2C3E6B]"
                    >
                      Ver unidade
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato rápido */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#102041] via-[#1d3364] to-[#4A9B9F] p-10 text-white shadow-xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                <Sparkles className="h-4 w-4" />
                Atendimento próximo
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Estamos prontos para planejar a melhor solução para a sua família</h2>
              <p className="mt-4 text-base text-white/80">
                Escolha o canal que preferir para falar com nossa equipe. Responderemos rapidamente para orientar sobre vagas, documentação, valores e visitas.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {CONTACT_OPTIONS.map((option) => {
                const Icon = option.icon
                return (
                  <a
                    key={option.title}
                    href={option.href}
                    target={option.target}
                    rel={option.target === '_blank' ? 'noopener noreferrer' : undefined}
                    className="group flex h-full flex-col rounded-2xl border border-white/20 bg-white/10 p-6 transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/15"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{option.title}</h3>
                    <p className="mt-3 flex-1 text-sm text-white/80">{option.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#F5D481] transition group-hover:translate-x-1">
                      {option.action}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] to-[#4A9B9F] py-20 text-white">
        <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Pronto para conhecer a Novo Lar pessoalmente?</h2>
          <p className="mt-4 text-lg text-white/85">
            Nossa equipe está disponível para apresentar cada unidade, compartilhar o plano de cuidados e orientar sua família na escolha ideal.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 rounded-xl bg-[#D4A853] px-8 py-4 text-lg font-semibold text-[#1a2745] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#c49943]"
            >
              Falar com a equipe multidisciplinar
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              <Users className="h-5 w-5" />
              Conversar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
