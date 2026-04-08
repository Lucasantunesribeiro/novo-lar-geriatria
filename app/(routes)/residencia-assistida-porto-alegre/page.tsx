import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/residencia-assistida-porto-alegre', {
  title: 'Residência Assistida em Porto Alegre | Novo Lar Geriatria',
  description: 'Residência assistida em Porto Alegre para idosos com autonomia parcial. Moradia segura, suporte assistencial sob demanda e qualidade de vida preservada.',
})

export { generateMetadata }
export default PageComponent
