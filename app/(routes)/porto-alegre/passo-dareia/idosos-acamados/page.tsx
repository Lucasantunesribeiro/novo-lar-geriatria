import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/porto-alegre/passo-dareia/idosos-acamados', {
  title: 'Cuidados para Idosos Acamados no Passo da Areia, Porto Alegre | Novo Lar',
  description: 'Cuidado completo para idosos acamados na unidade Novo Lar no Passo da Areia. Prevenção de escaras, fisioterapia passiva e enfermagem 24h em Porto Alegre.',
})

export { generateMetadata }
export default PageComponent
