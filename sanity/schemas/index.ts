import unit from './unit'
import service from './service'
import serviceCategory from './serviceCategory'
import testimonial from './testimonial'
import blogPost from './blogPost'
import pageView from './pageView'
import teamMember from './teamMember'
import lead from './lead'
import siteSettings from './siteSettings'
import headerConfig from './headerConfig'
import footerConfig from './footerConfig'
import page from './page'
import faqPage from './faqPage'
import {sectionTypes} from './sections'

/**
 * Tipos registrados no Studio.
 *
 * Os arquivos de "paginas singleton" antigos (homePage, aboutPage, contactPage,
 * privacyPolicy, teamPage, structurePage, ...) continuam no repositorio, mas NAO
 * sao mais registrados aqui: nenhum deles tinha documento criado e nenhuma rota
 * do site os consultava. Deixa-los no menu so confundia quem edita — o conteudo
 * real dessas paginas vive no tipo `page`.
 *
 * Excecao: `faqPage` continua registrado porque /perguntas-frequentes le dele.
 */
export const schemaTypes = [
  // Conteudos principais
  unit,
  service,
  serviceCategory,
  testimonial,
  blogPost,
  teamMember,

  // Paginas do site
  page,
  faqPage,

  // Configuracoes
  siteSettings,
  headerConfig,
  footerConfig,

  // Dados recebidos (somente leitura no dia a dia)
  lead,
  pageView,

  // Blocos usados dentro das paginas
  ...sectionTypes,
]
