import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const isConfigured = projectId && projectId !== 'placeholder-project-id' && projectId !== ''

// Client para leitura (com CDN em produção)
export const client = isConfigured
  ? createClient({
      projectId: projectId!,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: process.env.NODE_ENV === 'production',
    })
  : null

// Client para escrita (sem CDN, com token)
export const writeClient = isConfigured
  ? createClient({
      projectId: projectId!,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
    })
  : null

export const isSanityConfigured = isConfigured
