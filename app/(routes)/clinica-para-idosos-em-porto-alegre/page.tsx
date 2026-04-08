import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/clinica-para-idosos-em-porto-alegre', {
  title: 'Clínica para Idosos em Porto Alegre | Novo Lar Geriatria',
  description: 'Clínica residencial para idosos em Porto Alegre com acompanhamento médico geriátrico, enfermagem 24h, fisioterapia e cuidados personalizados por grau de dependência.',
})

export { generateMetadata }
export default PageComponent
