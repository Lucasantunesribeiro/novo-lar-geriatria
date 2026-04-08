import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/cachoeirinha', {
  title: 'Casa de Repouso Próxima a Cachoeirinha | Novo Lar Geriatria Porto Alegre',
  description: 'Atendemos famílias de Cachoeirinha em nossas unidades em Porto Alegre. Cuidado geriátrico 24h, a poucos minutos de casa. Agende uma visita.',
})

export { generateMetadata }
export default PageComponent
