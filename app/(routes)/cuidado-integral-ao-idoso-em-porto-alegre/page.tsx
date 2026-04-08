import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/cuidado-integral-ao-idoso-em-porto-alegre', {
  title: 'Cuidado Integral ao Idoso em Porto Alegre | Novo Lar Geriatria',
  description: 'Cuidado integral ao idoso em Porto Alegre: saúde física, cognitiva, emocional e social em um único ambiente. Equipe multidisciplinar e plano individualizado.',
})

export { generateMetadata }
export default PageComponent
