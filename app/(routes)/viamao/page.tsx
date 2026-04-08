import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/viamao', {
  title: 'Casa de Repouso Próxima a Viamão | Novo Lar Geriatria Porto Alegre',
  description: 'Atendemos famílias de Viamão em nossas unidades em Porto Alegre. Cuidado humanizado 24h para idosos com diferentes graus de dependência.',
})

export { generateMetadata }
export default PageComponent
