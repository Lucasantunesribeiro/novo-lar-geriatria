import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/cuidados-pos-avc', {
  title: 'Cuidados Pós-AVC para Idosos em Porto Alegre | Novo Lar Geriatria',
  description: 'Reabilitação e cuidados pós-AVC para idosos em Porto Alegre. Fisioterapia neurológica, fonoaudiologia e acompanhamento 24h para recuperação funcional.',
})

export { generateMetadata }
export default PageComponent
