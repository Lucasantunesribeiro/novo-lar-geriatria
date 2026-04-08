import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/porto-alegre/moinhos-de-vento/cuidados-paliativos', {
  title: 'Cuidados Paliativos em Moinhos de Vento, Porto Alegre | Novo Lar Geriatria',
  description: 'Cuidados paliativos humanizados na unidade Novo Lar em Moinhos de Vento. Conforto, dignidade e suporte à família em um ambiente acolhedor em Porto Alegre.',
})

export { generateMetadata }
export default PageComponent
