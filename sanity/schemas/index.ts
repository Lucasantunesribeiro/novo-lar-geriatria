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
import textosGlobais from './textosGlobais'
import page from './page'
import faqPage from './faqPage'
import {sectionTypes} from './sections'
import {estiloTypes} from './objects/estilo'
import {blocosSobre} from './blocos/sobre'
import {blocosEstrutura} from './blocos/estrutura'
import {blocosServicos} from './blocos/servicos'
import {blocosHome} from './blocos/home'
import {blocosInstitucional} from './blocos/institucional'

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
  textosGlobais,

  // Dados recebidos (somente leitura no dia a dia)
  lead,
  pageView,

  // Blocos usados dentro das paginas
  ...sectionTypes,

  // Ajustes visuais reutilizaveis (tamanho de texto, imagem, espacamento)
  ...estiloTypes,

  // Blocos espelho das paginas com layout proprio
  ...blocosSobre,
  ...blocosEstrutura,
  ...blocosServicos,
  ...blocosHome,
  ...blocosInstitucional,
]
