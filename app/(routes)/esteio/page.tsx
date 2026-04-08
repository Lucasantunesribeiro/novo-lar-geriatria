import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/esteio', {
  title: 'Casa de Repouso Próxima a Esteio | Novo Lar Geriatria Porto Alegre',
  description: 'Famílias de Esteio escolhem a Novo Lar Geriatria em Porto Alegre para cuidados especializados de idosos. Equipe 24h e fácil acesso pela região metropolitana.',
})

export { generateMetadata }
export default PageComponent
