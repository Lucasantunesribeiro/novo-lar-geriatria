import unit from './unit'
import service from './service'
import serviceCategory from './serviceCategory'
import testimonial from './testimonial'
import blogPost from './blogPost'
import teamMember from './teamMember'
import lead from './lead'
import siteSettings from './siteSettings'
import headerConfig from './headerConfig'
import footerConfig from './footerConfig'
import page from './page'
import {sectionTypes} from './sections'

// Páginas singleton
import homePage from './homePage'
import aboutPage from './aboutPage'
import aboutNovoLarPage from './aboutNovoLarPage'
import photosPage from './photosPage'
import locationPage from './locationPage'
import servicesIndexPage from './servicesIndexPage'
import blogIndexPage from './blogIndexPage'
import faqPage from './faqPage'
import contactPage from './contactPage'
import testimonialsPage from './testimonialsPage'
import thankYouPage from './thankYouPage'
import privacyPolicy from './privacyPolicy'
import termsOfService from './termsOfService'
import activitiesPage from './activitiesPage'
import teamPage from './teamPage'
import structurePage from './structurePage'

export const schemaTypes = [
  // Documentos principais
  unit,
  service,
  serviceCategory,
  testimonial,
  blogPost,
  teamMember,
  lead,

  // Configurações (Singletons)
  siteSettings,
  headerConfig,
  footerConfig,

  // Páginas genéricas
  page,

  // Páginas singleton
  homePage,
  aboutPage,
  aboutNovoLarPage,
  photosPage,
  locationPage,
  servicesIndexPage,
  blogIndexPage,
  faqPage,
  contactPage,
  testimonialsPage,
  thankYouPage,
  privacyPolicy,
  termsOfService,
  activitiesPage,
  teamPage,
  structurePage,

  // Seções
  ...sectionTypes,
]
