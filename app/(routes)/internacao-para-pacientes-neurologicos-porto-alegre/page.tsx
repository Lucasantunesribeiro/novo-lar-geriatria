import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/internacao-para-pacientes-neurologicos-porto-alegre', {
  title: 'Internação para Pacientes Neurológicos em Porto Alegre | Novo Lar Geriatria',
  description: 'Cuidados especializados para idosos com condições neurológicas em Porto Alegre. Alzheimer, Parkinson, AVC, demências e esclerose com equipe treinada 24h.',
})

export { generateMetadata }
export default PageComponent
