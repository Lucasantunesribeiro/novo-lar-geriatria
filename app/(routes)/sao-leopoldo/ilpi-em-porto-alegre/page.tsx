import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/sao-leopoldo/ilpi-em-porto-alegre', {
  title: 'ILPI em Porto Alegre para Famílias de São Leopoldo | Novo Lar Geriatria',
  description: 'Famílias de São Leopoldo escolhem a Novo Lar Geriatria em Porto Alegre para cuidados geriátricos especializados. Acesso fácil pela BR-116 e equipe 24h.',
})

export { generateMetadata }
export default PageComponent
