import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/sapucaia-do-sul', {
  title: 'Casa de Repouso Próxima a Sapucaia do Sul | Novo Lar Geriatria Porto Alegre',
  description: 'Cuidados geriátricos especializados para famílias de Sapucaia do Sul nas unidades Novo Lar em Porto Alegre. Visitas diárias e comunicação transparente.',
})

export { generateMetadata }
export default PageComponent
