import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/cuidados-fragilidade-do-idoso', {
  title: 'Cuidados para Síndrome de Fragilidade do Idoso | Novo Lar Geriatria',
  description: 'Residencial geriátrico especializado na síndrome de fragilidade em Porto Alegre. Prevenção de quedas, reabilitação, nutrição e sarcopenia com equipe 24h.',
})

export { generateMetadata }
export default PageComponent
