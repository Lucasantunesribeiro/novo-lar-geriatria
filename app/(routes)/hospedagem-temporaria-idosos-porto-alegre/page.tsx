import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/hospedagem-temporaria-idosos-porto-alegre', {
  title: 'Hospedagem Temporária para Idosos em Porto Alegre | Novo Lar Geriatria',
  description: 'Hospedagem temporária para idosos em Porto Alegre. Recuperação após cirurgia, alta hospitalar ou um período de cuidado enquanto a família se organiza, com enfermagem 24h e reabilitação desde o primeiro dia.',
})

export { generateMetadata }
export default PageComponent
