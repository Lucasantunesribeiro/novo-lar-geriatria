import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/cachoeirinha/ilpi-em-porto-alegre', {
  title: 'ILPI em Porto Alegre para Famílias de Cachoeirinha | Novo Lar Geriatria',
  description: 'Famílias de Cachoeirinha encontram na Novo Lar Geriatria, em Porto Alegre, uma ILPI de referência com cuidados 24h e visitas diárias liberadas.',
})

export { generateMetadata }
export default PageComponent
