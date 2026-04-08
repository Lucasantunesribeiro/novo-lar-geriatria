import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/cuidados-paliativos-idosos', {
  title: 'Cuidados Paliativos para Idosos em Porto Alegre | Novo Lar Geriatria',
  description: 'Cuidados paliativos humanizados para idosos em Porto Alegre. Conforto, dignidade e suporte integral à família em fase de fragilidade avançada.',
})

export { generateMetadata }
export default PageComponent
