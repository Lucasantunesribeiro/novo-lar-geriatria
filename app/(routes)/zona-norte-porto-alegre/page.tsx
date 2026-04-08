import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/zona-norte-porto-alegre', {
  title: 'Casa de Repouso na Zona Norte de Porto Alegre | Novo Lar Geriatria',
  description: 'Residencial geriátrico na Zona Norte de Porto Alegre com unidades no Passo da Areia. Cuidados 24h, médico geriatra e atividades terapêuticas diárias.',
})

export { generateMetadata }
export default PageComponent
