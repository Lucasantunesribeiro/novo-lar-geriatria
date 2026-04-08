import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/canoas/ilpi-em-porto-alegre', {
  title: 'ILPI em Porto Alegre para Famílias de Canoas | Novo Lar Geriatria',
  description: 'Famílias de Canoas encontram na Novo Lar Geriatria, em Porto Alegre, a ILPI ideal para seus idosos. Fácil acesso, visitas diárias e cuidados especializados 24h.',
})

export { generateMetadata }
export default PageComponent
