import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Novo Lar Geriatria - Hospedagem Assistida em Porto Alegre',
    short_name: 'Novo Lar',
    description: 'Residencial geriátrico em Porto Alegre com cuidado especializado, equipe multidisciplinar e ambientes acolhedores. Atendimento 24 horas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2C3E6B',
    orientation: 'portrait-primary',
    categories: ['health', 'medical', 'lifestyle'],
    lang: 'pt-BR',
    icons: [
      {
        src: '/favicon-geriatria-novo-lar.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon-geriatria-novo-lar.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
