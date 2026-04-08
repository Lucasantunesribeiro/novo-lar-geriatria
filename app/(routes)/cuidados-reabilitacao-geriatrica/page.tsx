import { makeSeoPage } from '@/lib/utils/seoPageFactory'

const { generateMetadata, PageComponent } = makeSeoPage('/cuidados-reabilitacao-geriatrica', {
  title: 'Reabilitação Geriátrica em Porto Alegre | Novo Lar Geriatria',
  description: 'Reabilitação geriátrica completa em Porto Alegre após AVC, cirurgia ou evento agudo. Fisioterapia, fonoaudiologia, terapia ocupacional e enfermagem 24h.',
})

export { generateMetadata }
export default PageComponent
