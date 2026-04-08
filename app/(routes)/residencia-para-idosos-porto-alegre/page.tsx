import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/residencia-para-idosos-porto-alegre', {
  title: 'Residência para Idosos em Porto Alegre | Novo Lar Geriatria',
  description: 'Residência para idosos em Porto Alegre que preserva autonomia, qualidade de vida e dignidade. Moradia segura com suporte médico e atividades terapêuticas diárias.',
})

export { generateMetadata }
export default PageComponent
