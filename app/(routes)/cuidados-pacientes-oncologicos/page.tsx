import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/cuidados-pacientes-oncologicos', {
  title: 'Cuidados para Idosos com Câncer em Porto Alegre | Novo Lar Geriatria',
  description: 'Suporte especializado para idosos em tratamento oncológico em Porto Alegre. Gestão de sintomas, conforto, nutrição oncológica e apoio emocional 24h.',
})

export { generateMetadata }
export default PageComponent
