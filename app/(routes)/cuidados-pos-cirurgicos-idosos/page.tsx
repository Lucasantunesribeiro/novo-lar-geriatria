import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/cuidados-pos-cirurgicos-idosos', {
  title: 'Cuidados Pós-Cirúrgicos para Idosos em Porto Alegre | Novo Lar Geriatria',
  description: 'Hospedagem e cuidados pós-cirúrgicos para idosos em Porto Alegre. Recuperação segura com enfermagem 24h, fisioterapia e acompanhamento médico.',
})

export { generateMetadata }
export default PageComponent
