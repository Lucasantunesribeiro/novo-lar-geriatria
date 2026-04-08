import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/casa-de-repouso-em-porto-alegre', {
  title: 'Casa de Repouso em Porto Alegre — Guia Completo | Novo Lar Geriatria',
  description: 'Entenda o que é uma casa de repouso em Porto Alegre, como escolher, o que avaliar e por que a Novo Lar Geriatria é referência há 30 anos na cidade.',
})

export { generateMetadata }
export default PageComponent
