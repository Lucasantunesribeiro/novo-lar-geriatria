import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/gravatai', {
  title: 'Casa de Repouso Próxima a Gravataí | Novo Lar Geriatria Porto Alegre',
  description: 'Famílias de Gravataí encontram na Novo Lar Geriatria, em Porto Alegre, cuidados especializados 24h para idosos. Fácil acesso pela BR-290. Visitas diárias.',
})

export { generateMetadata }
export default PageComponent
