import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/gravatai/ilpi-em-porto-alegre', {
  title: 'ILPI em Porto Alegre para Famílias de Gravataí | Novo Lar Geriatria',
  description: 'Famílias de Gravataí confiam à Novo Lar Geriatria em Porto Alegre o cuidado de seus idosos. Acesso pela BR-290 e cuidados especializados 24h.',
})

export { generateMetadata }
export default PageComponent
