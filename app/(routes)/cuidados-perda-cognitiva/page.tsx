import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/cuidados-perda-cognitiva', {
  title: 'Cuidados para Idosos com Perda Cognitiva | Novo Lar Geriatria',
  description: 'Cuidado especializado para idosos com comprometimento cognitivo leve e moderado em Porto Alegre. Estimulação cognitiva, rotina estruturada e ambiente seguro.',
})

export { generateMetadata }
export default PageComponent
