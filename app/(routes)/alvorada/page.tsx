import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/alvorada', {
  title: 'Casa de Repouso Próxima a Alvorada | Novo Lar Geriatria Porto Alegre',
  description: 'Famílias de Alvorada encontram na Novo Lar Geriatria cuidados geriátricos completos em Porto Alegre. Equipe multidisciplinar 24h e visitas livres.',
})

export { generateMetadata }
export default PageComponent
