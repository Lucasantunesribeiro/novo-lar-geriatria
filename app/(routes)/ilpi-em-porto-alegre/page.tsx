import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/ilpi-em-porto-alegre', {
  title: 'ILPI em Porto Alegre — Guia Completo 2025 | Novo Lar Geriatria',
  description: 'Guia completo sobre ILPIs em Porto Alegre: o que são, como escolher, diferenças de outros modelos e por que a Novo Lar é referência na cidade há 30 anos.',
})

export { generateMetadata }
export default PageComponent
