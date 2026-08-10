'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'
import {disableVersionCheckPlugin} from './sanity/plugins/disableVersionCheck'

/** Tipos que o cliente pode criar pelo botao "+" do topo. */
const CRIAVEIS = [
  'page',
  'blogPost',
  'testimonial',
  'teamMember',
  'service',
  'serviceCategory',
  'unit',
]

/** Documentos unicos: nao podem ser duplicados nem apagados sem querer. */
const SINGLETONS = ['siteSettings', 'headerConfig', 'footerConfig', 'faqPage']

/** Dados que chegam sozinhos (formulario/analytics): ninguem cria na mao. */
const SOMENTE_LEITURA = ['lead', 'pageView']

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    disableVersionCheckPlugin(),
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  document: {
    // O "+" global so oferece o que faz sentido criar do zero.
    newDocumentOptions: (prev, {creationContext}) =>
      creationContext.type === 'global'
        ? prev.filter((item) => CRIAVEIS.includes(item.templateId))
        : prev,

    // Protege configuracoes e dados recebidos de exclusao/duplicacao acidental.
    actions: (prev, {schemaType}) => {
      if (SINGLETONS.includes(schemaType)) {
        return prev.filter(
          ({action}) => action !== 'delete' && action !== 'duplicate' && action !== 'unpublish'
        )
      }

      if (SOMENTE_LEITURA.includes(schemaType)) {
        return prev.filter(({action}) => action !== 'duplicate')
      }

      return prev
    },
  },
  deployment: {
    appId: 'hf9k2mspsqf0tl1r2ovidrw8',
  },
})
