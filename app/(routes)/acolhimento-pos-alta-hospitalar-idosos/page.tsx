import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/acolhimento-pos-alta-hospitalar-idosos', {
  title: 'Acolhimento Pós-Alta Hospitalar para Idosos | Novo Lar Geriatria Porto Alegre',
  description: 'Acolhimento pós-alta hospitalar para idosos em Porto Alegre. Recuperação segura após cirurgia ou internação com enfermagem, fisioterapia e médico geriatra.',
})

export { generateMetadata }
export default PageComponent
