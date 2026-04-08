import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/vale-do-sinos', {
  title: 'Residencial Geriátrico para Famílias do Vale do Sinos | Novo Lar Geriatria',
  description: 'Famílias do Vale dos Sinos escolhem a Novo Lar Geriatria em Porto Alegre. Cuidados especializados 24h para idosos, com fácil acesso pela BR-116 e RS-020.',
})

export { generateMetadata }
export default PageComponent
