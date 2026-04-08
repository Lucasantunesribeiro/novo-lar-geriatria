import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/porto-alegre/passo-dareia/cuidados-parkinson', {
  title: 'Cuidados para Parkinson no Passo da Areia, Porto Alegre | Novo Lar Geriatria',
  description: 'Residencial especializado em Parkinson na Zona Norte de Porto Alegre. Fisioterapia, suporte à mobilidade e acompanhamento médico na unidade Passo da Areia.',
})

export { generateMetadata }
export default PageComponent
