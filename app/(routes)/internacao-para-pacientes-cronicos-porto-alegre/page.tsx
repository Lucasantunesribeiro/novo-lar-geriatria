import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/internacao-para-pacientes-cronicos-porto-alegre', {
  title: 'Internação para Pacientes Crônicos em Porto Alegre | Novo Lar Geriatria',
  description: 'Residencial geriátrico especializado em pacientes crônicos em Porto Alegre. Diabetes, hipertensão, insuficiências e DPOC com monitoramento contínuo e equipe 24h.',
})

export { generateMetadata }
export default PageComponent
