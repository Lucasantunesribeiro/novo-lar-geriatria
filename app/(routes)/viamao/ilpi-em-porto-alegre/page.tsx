import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/viamao/ilpi-em-porto-alegre', {
  title: 'ILPI em Porto Alegre para Famílias de Viamão | Novo Lar Geriatria',
  description: 'Famílias de Viamão escolhem a Novo Lar Geriatria em Porto Alegre para cuidados geriátricos especializados. Equipe 24h, médico geriatra e atividades terapêuticas.',
})

export { generateMetadata }
export default PageComponent
