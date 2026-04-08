import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/clinica-geriatrica-porto-alegre', {
  title: 'Clínica Geriátrica em Porto Alegre | Novo Lar Geriatria',
  description: 'Clínica geriátrica residencial em Porto Alegre com médico geriatra, enfermagem 24h, fisioterapia e acompanhamento multidisciplinar completo.',
})

export { generateMetadata }
export default PageComponent
