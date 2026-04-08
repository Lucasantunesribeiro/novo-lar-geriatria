import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/hospedagem-temporaria-idosos-porto-alegre', {
  title: 'Hospedagem Temporária para Idosos em Porto Alegre | Novo Lar Geriatria',
  description: 'Hospedagem temporária para idosos em Porto Alegre. Curta ou média estadia com cuidados completos para viagens da família, pós-hospitalar ou respiro do cuidador.',
})

export { generateMetadata }
export default PageComponent
