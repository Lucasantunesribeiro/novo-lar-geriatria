import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/novo-hamburgo/ilpi-em-porto-alegre', {
  title: 'ILPI em Porto Alegre para Famílias de Novo Hamburgo | Novo Lar Geriatria',
  description: 'Famílias de Novo Hamburgo escolhem a Novo Lar Geriatria em Porto Alegre para cuidar de seus idosos. Referência há 30 anos com equipe multidisciplinar 24h.',
})

export { generateMetadata }
export default PageComponent
