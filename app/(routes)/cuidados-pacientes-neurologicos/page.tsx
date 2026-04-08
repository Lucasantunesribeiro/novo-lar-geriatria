import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/cuidados-pacientes-neurologicos', {
  title: 'Cuidados para Idosos com Condições Neurológicas | Novo Lar Geriatria',
  description: 'Residencial geriátrico com expertise em condições neurológicas em Porto Alegre. Esclerose, epilepsia, neuropatias e declínio cognitivo com suporte 24h.',
})

export { generateMetadata }
export default PageComponent
