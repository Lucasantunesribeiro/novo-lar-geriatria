import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/cuidados-mobilidade-reduzida', {
  title: 'Cuidados para Idosos com Mobilidade Reduzida | Novo Lar Geriatria',
  description: 'Residencial adaptado para idosos com mobilidade reduzida em Porto Alegre. Estrutura acessível, fisioterapia, auxílios de locomoção e autonomia assistida.',
})

export { generateMetadata }
export default PageComponent
