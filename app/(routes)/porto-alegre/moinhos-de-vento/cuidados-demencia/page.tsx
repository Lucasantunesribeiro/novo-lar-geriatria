import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/porto-alegre/moinhos-de-vento/cuidados-demencia', {
  title: 'Cuidados para Demência em Moinhos de Vento, Porto Alegre | Novo Lar',
  description: 'Cuidado especializado para idosos com demência na unidade Novo Lar em Moinhos de Vento, Porto Alegre. Ambiente seguro, equipe treinada e rotina estruturada 24h.',
})

export { generateMetadata }
export default PageComponent
