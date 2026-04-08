import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/cuidados-parkinson', {
  title: 'Cuidados para Idosos com Parkinson em Porto Alegre | Novo Lar Geriatria',
  description: 'Residencial geriátrico especializado em Parkinson em Porto Alegre. Fisioterapia 24h, fonoaudiologia, equipe treinada para mobilidade, tremores e quedas.',
})

export { generateMetadata }
export default PageComponent
