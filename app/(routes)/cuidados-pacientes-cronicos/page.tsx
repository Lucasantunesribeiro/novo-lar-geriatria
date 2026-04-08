import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/cuidados-pacientes-cronicos', {
  title: 'Cuidados para Idosos com Doenças Crônicas em Porto Alegre | Novo Lar Geriatria',
  description: 'Cuidado contínuo para idosos com diabetes, hipertensão, DPOC e outras condições crônicas em Porto Alegre. Equipe multidisciplinar e monitoramento diário.',
})

export { generateMetadata }
export default PageComponent
