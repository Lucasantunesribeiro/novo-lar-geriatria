import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/residencial-geriatrico-em-porto-alegre', {
  title: 'Residencial Geriátrico em Porto Alegre — Referência em Cuidados | Novo Lar',
  description: 'Saiba o que diferencia um residencial geriátrico de qualidade em Porto Alegre. Estrutura, equipe, serviços e como a Novo Lar Geriatria se posiciona no mercado.',
})

export { generateMetadata }
export default PageComponent
