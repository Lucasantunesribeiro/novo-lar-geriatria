export type UnitInfo = {
  slug: string
  name: string
  title: string
  address: string
  neighborhood: string
  phoneDisplay: string
  phoneDigits: string
  whatsapp: string
  group: 'moinhos' | 'passo-dareia'
}

export const UNITS: UnitInfo[] = [
  {
    slug: 'moinhos-luciana-de-abreu',
    name: 'Moinhos de Vento · Rua Luciana de Abreu, 151',
    title: 'Moinhos de Vento - Luciana de Abreu',
    address: 'Rua Luciana de Abreu, 151 - Moinhos de Vento, Porto Alegre - RS',
    neighborhood: 'Moinhos de Vento',
    phoneDisplay: '(51) 3346.7620',
    phoneDigits: '5133467620',
    whatsapp: '555133467620',
    group: 'moinhos',
  },
  {
    slug: 'moinhos-barao-de-santo-angelo',
    name: 'Moinhos de Vento · Rua Barão de Santo Ângelo, 406',
    title: 'Moinhos de Vento - Barão de Santo Ângelo',
    address: 'Rua Barão de Santo Ângelo, 406 - Moinhos de Vento, Porto Alegre - RS',
    neighborhood: 'Moinhos de Vento',
    phoneDisplay: '(51) 3346.7620',
    phoneDigits: '5133467620',
    whatsapp: '555133467620',
    group: 'moinhos',
  },
  {
    slug: 'passo-dareia',
    name: "Passo d'Areia · Rua Brigadeiro Oliveira Neri, 175",
    title: "Passo d'Areia",
    address: "Rua Brigadeiro Oliveira Neri, 175 - Passo d'Areia, Porto Alegre - RS",
    neighborhood: "Passo d'Areia",
    phoneDisplay: '(51) 3376.9462',
    phoneDigits: '5133769462',
    whatsapp: '555133769462',
    group: 'passo-dareia',
  },
]

export const UNIT_CONTACT_GROUPS = [
  {
    title: 'Moinhos de Vento',
    addresses: ['Rua Luciana de Abreu, 151', 'Rua Barão de Santo Ângelo, 406'],
    phoneDisplay: '(51) 3346.7620',
    phoneDigits: '5133467620',
  },
  {
    title: "Passo d'Areia",
    addresses: ["Rua Brigadeiro Oliveira Neri, 175"],
    phoneDisplay: '(51) 3376.9462',
    phoneDigits: '5133769462',
  },
]

export const COMPANY_CONTACT = {
  centralPhoneDisplay: '(51) 3346.7620',
  centralPhoneDigits: '5133467620',
  whatsappDigits: '555133467620',
  email: 'contato@novolargeriatria.com.br',
  visitation: 'Visitas diárias das 9h às 19h com agendamento prévio',
  city: 'Porto Alegre - RS',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Sobre nós', href: '/sobre' },
  { label: 'Depoimentos', href: '/depoimentos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

export const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/novolarhospedagemassistida/',
    icon: 'facebook',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/novolarhospedagemassistida/',
    icon: 'instagram',
  },
]

export const getUnitBySlug = (slug: string) => UNITS.find((unit) => unit.slug === slug)
