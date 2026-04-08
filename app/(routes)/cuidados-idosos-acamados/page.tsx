import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/cuidados-idosos-acamados', {
  title: 'Cuidados para Idosos Acamados em Porto Alegre | Novo Lar Geriatria',
  description: 'Cuidado especializado para idosos acamados em Porto Alegre. Prevenção de escaras, fisioterapia passiva, higiene e mobilização com equipe 24h.',
})

export { generateMetadata }
export default PageComponent
