import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/porto-alegre/moinhos-de-vento/cuidados-parkinson', {
  title: 'Cuidados para Parkinson em Moinhos de Vento, Porto Alegre | Novo Lar',
  description: 'Residencial em Moinhos de Vento especializado em Parkinson. Fisioterapia, fonoaudiologia e acompanhamento 24h para idosos com Parkinson em Porto Alegre.',
})

export { generateMetadata }
export default PageComponent
