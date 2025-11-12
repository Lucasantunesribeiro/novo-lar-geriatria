import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { disableVersionCheckPlugin } from './plugins/disableVersionCheck'

export default defineConfig({
  name: 'default',
  title: 'Novo Lar Geriatria',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [disableVersionCheckPlugin(), structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
