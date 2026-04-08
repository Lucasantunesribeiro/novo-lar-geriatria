import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/lar-para-idosos-em-porto-alegre', {
  title: 'Lar para Idosos em Porto Alegre | Novo Lar Geriatria',
  description: 'Lar para idosos em Porto Alegre com acolhimento familiar, rotina humanizada e cuidado integral. Um segundo lar para o seu familiar, não uma instituição fria.',
})

export { generateMetadata }
export default PageComponent
