import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/porto-alegre/passo-dareia/cuidados-demencia', {
  title: 'Cuidados para Demência no Passo da Areia, Porto Alegre | Novo Lar Geriatria',
  description: 'Cuidado especializado para idosos com demência na unidade Novo Lar no Passo da Areia, Porto Alegre. Rotina terapêutica, ambiente seguro e equipe 24h.',
})

export { generateMetadata }
export default PageComponent
