import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/internacao-geriatrica-porto-alegre', {
  title: 'Internação Geriátrica em Porto Alegre | Novo Lar Geriatria',
  description: 'Internação geriátrica em Porto Alegre para idosos com alta necessidade de cuidado clínico. Equipe médica, enfermagem e suporte 24h em ambiente residencial.',
})

export { generateMetadata }
export default PageComponent
