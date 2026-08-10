import type {ComponentType} from 'react'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'

import {apiVersion} from './env'
import {
  BarChartIcon,
  BlockContentIcon,
  CaseIcon,
  CogIcon,
  DocumentsIcon,
  DocumentTextIcon,
  EarthGlobeIcon,
  EditIcon,
  EnvelopeIcon,
  EyeClosedIcon,
  HeartIcon,
  HelpCircleIcon,
  HomeIcon,
  MenuIcon,
  PinIcon,
  StarIcon,
  TagIcon,
  ThLargeIcon,
  UsersIcon,
} from '@sanity/icons'

/**
 * Menu do Studio.
 *
 * Regras que seguimos aqui:
 * - titulos em portugues, na linguagem do cliente (nao do desenvolvedor);
 * - so aparece o que realmente muda o site;
 * - "Paginas do site" e a area principal: e de la que o cliente edita e cria paginas.
 */

const PAGE_ORDERING = [{field: 'path', direction: 'asc' as const}]

/** Lista de paginas (`page`) filtrada por um GROQ, ja ordenada por endereco. */
function pageList(
  S: StructureBuilder,
  options: {
    id: string
    title: string
    filter: string
    params?: Record<string, unknown>
  }
) {
  return S.documentTypeList('page')
    .id(options.id)
    .title(options.title)
    .apiVersion(apiVersion)
    .filter(`_type == "page" && (${options.filter})`)
    .params(options.params || {})
    .defaultOrdering(PAGE_ORDERING)
}

/** Documento unico (singleton): abre direto no formulario, sem lista intermediaria. */
function singleton(
  S: StructureBuilder,
  options: {schemaType: string; documentId: string; title: string; icon: ComponentType}
) {
  return S.listItem()
    .id(options.documentId)
    .title(options.title)
    .icon(options.icon)
    .child(
      S.document()
        .schemaType(options.schemaType)
        .documentId(options.documentId)
        .title(options.title)
    )
}

const CIDADES = [
  '/porto-alegre',
  '/canoas',
  '/sao-leopoldo',
  '/novo-hamburgo',
  '/gravatai',
  '/cachoeirinha',
  '/esteio',
  '/sapucaia-do-sul',
  '/alvorada',
  '/viamao',
  '/vale-do-sinos',
  '/zona-norte-porto-alegre',
  '/regiao-metropolitana',
]

const MORADIA = [
  '/ilpi',
  '/casa-de-repouso',
  '/residencia',
  '/residencial',
  '/lar-para-idosos',
  '/clinica',
]

const SERVICOS = [
  '/servicos',
  '/cuidado',
  '/internacao',
  '/acolhimento',
  '/hospedagem',
]

const startsWithAny = (paths: string[]) =>
  paths.map((_, i) => `string::startsWith(path, $p${i})`).join(' || ')

const startsWithParams = (paths: string[]) =>
  Object.fromEntries(paths.map((path, i) => [`p${i}`, path]))

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Novo Lar Geriatria')
    .items([
      // ─────────────────────────────────────────────────────────────
      // 1. PAGINAS DO SITE — a area principal do cliente
      // ─────────────────────────────────────────────────────────────
      S.listItem()
        .id('paginas')
        .title('Páginas do site')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .id('paginas-lista')
            .title('Páginas do site')
            .items([
              S.listItem()
                .id('pagina-inicial')
                .title('Página inicial')
                .icon(HomeIcon)
                .child(
                  pageList(S, {
                    id: 'pagina-inicial-lista',
                    title: 'Página inicial',
                    filter: 'path == "/"',
                  })
                ),

              S.listItem()
                .id('paginas-sobre')
                .title('Sobre a Novo Lar')
                .icon(HeartIcon)
                .child(
                  pageList(S, {
                    id: 'paginas-sobre-lista',
                    title: 'Sobre a Novo Lar',
                    filter: 'string::startsWith(path, "/sobre")',
                  })
                ),

              S.listItem()
                .id('paginas-servicos')
                .title('Serviços e cuidados')
                .icon(CaseIcon)
                .child(
                  pageList(S, {
                    id: 'paginas-servicos-lista',
                    title: 'Serviços e cuidados',
                    filter: startsWithAny(SERVICOS),
                    params: startsWithParams(SERVICOS),
                  })
                ),

              S.listItem()
                .id('paginas-moradia')
                .title('Tipos de moradia (ILPI, casa de repouso…)')
                .icon(ThLargeIcon)
                .child(
                  pageList(S, {
                    id: 'paginas-moradia-lista',
                    title: 'Tipos de moradia',
                    filter: startsWithAny(MORADIA),
                    params: startsWithParams(MORADIA),
                  })
                ),

              S.listItem()
                .id('paginas-cidades')
                .title('Cidades e bairros')
                .icon(PinIcon)
                .child(
                  pageList(S, {
                    id: 'paginas-cidades-lista',
                    title: 'Cidades e bairros',
                    filter: startsWithAny(CIDADES),
                    params: startsWithParams(CIDADES),
                  })
                ),

              S.listItem()
                .id('paginas-duvidas')
                .title('Perguntas e comparativos')
                .icon(HelpCircleIcon)
                .child(
                  pageList(S, {
                    id: 'paginas-duvidas-lista',
                    title: 'Perguntas e comparativos',
                    filter:
                      'string::startsWith(path, "/perguntas") || string::startsWith(path, "/comparativos")',
                  })
                ),

              S.listItem()
                .id('paginas-relacionamento')
                .title('Blog, contato e depoimentos')
                .icon(EnvelopeIcon)
                .child(
                  pageList(S, {
                    id: 'paginas-relacionamento-lista',
                    title: 'Blog, contato e depoimentos',
                    filter: 'path in ["/blog", "/contato", "/depoimentos"]',
                  })
                ),

              S.listItem()
                .id('paginas-legais')
                .title('Termos e privacidade')
                .icon(DocumentTextIcon)
                .child(
                  pageList(S, {
                    id: 'paginas-legais-lista',
                    title: 'Termos e privacidade',
                    filter: 'path in ["/termos-de-uso", "/politica-de-privacidade"]',
                  })
                ),

              S.divider(),

              S.listItem()
                .id('paginas-todas')
                .title('Todas as páginas (A → Z)')
                .icon(DocumentsIcon)
                .child(
                  pageList(S, {
                    id: 'paginas-todas-lista',
                    title: 'Todas as páginas',
                    filter: 'defined(path)',
                  })
                ),

              S.listItem()
                .id('paginas-rascunho')
                .title('Não publicadas (rascunho)')
                .icon(EditIcon)
                .child(
                  pageList(S, {
                    id: 'paginas-rascunho-lista',
                    title: 'Não publicadas',
                    filter: 'published == false',
                  })
                ),

              S.listItem()
                .id('paginas-noindex')
                .title('Escondidas do Google')
                .icon(EyeClosedIcon)
                .child(
                  pageList(S, {
                    id: 'paginas-noindex-lista',
                    title: 'Escondidas do Google',
                    filter: 'indexable == false',
                  })
                ),
            ])
        ),

      S.divider(),

      // ─────────────────────────────────────────────────────────────
      // 2. CONTEUDOS REUTILIZAVEIS
      // ─────────────────────────────────────────────────────────────
      S.listItem()
        .id('unidades')
        .title('Unidades')
        .icon(EarthGlobeIcon)
        .child(S.documentTypeList('unit').title('Unidades')),

      S.listItem()
        .id('servicos')
        .title('Serviços')
        .icon(CaseIcon)
        .child(
          S.list()
            .id('servicos-lista')
            .title('Serviços')
            .items([
              S.listItem()
                .id('servicos-itens')
                .title('Serviços')
                .icon(CaseIcon)
                .child(S.documentTypeList('service').title('Serviços')),
              S.listItem()
                .id('servicos-categorias')
                .title('Categorias de serviço')
                .icon(TagIcon)
                .child(S.documentTypeList('serviceCategory').title('Categorias de serviço')),
            ])
        ),

      S.listItem()
        .id('blog')
        .title('Blog')
        .icon(BlockContentIcon)
        .child(S.documentTypeList('blogPost').title('Posts do blog')),

      S.listItem()
        .id('depoimentos')
        .title('Depoimentos')
        .icon(StarIcon)
        .child(S.documentTypeList('testimonial').title('Depoimentos')),

      S.listItem()
        .id('equipe')
        .title('Equipe')
        .icon(UsersIcon)
        .child(S.documentTypeList('teamMember').title('Equipe')),

      singleton(S, {
        schemaType: 'faqPage',
        documentId: 'faqPage-singleton',
        title: 'Perguntas frequentes',
        icon: HelpCircleIcon,
      }),

      S.divider(),

      // ─────────────────────────────────────────────────────────────
      // 3. CONFIGURACOES DO SITE
      // ─────────────────────────────────────────────────────────────
      S.listItem()
        .id('configuracoes')
        .title('Configurações do site')
        .icon(CogIcon)
        .child(
          S.list()
            .id('configuracoes-lista')
            .title('Configurações do site')
            .items([
              singleton(S, {
                schemaType: 'siteSettings',
                documentId: 'siteSettingsSingleton',
                title: 'Dados da empresa',
                icon: CogIcon,
              }),
              singleton(S, {
                schemaType: 'headerConfig',
                documentId: 'headerConfigSingleton',
                title: 'Menu do topo',
                icon: MenuIcon,
              }),
              singleton(S, {
                schemaType: 'footerConfig',
                documentId: 'footerConfigSingleton',
                title: 'Rodapé',
                icon: MenuIcon,
              }),
            ])
        ),

      S.divider(),

      // ─────────────────────────────────────────────────────────────
      // 4. SO LEITURA — dados que chegam sozinhos
      // ─────────────────────────────────────────────────────────────
      S.listItem()
        .id('leads')
        .title('Contatos recebidos')
        .icon(EnvelopeIcon)
        .child(
          S.documentTypeList('lead')
            .title('Contatos recebidos')
            .defaultOrdering([{field: '_createdAt', direction: 'desc'}])
        ),

      S.listItem()
        .id('estatisticas')
        .title('Visualizações das páginas')
        .icon(BarChartIcon)
        .child(S.documentTypeList('pageView').title('Visualizações das páginas')),
    ])
