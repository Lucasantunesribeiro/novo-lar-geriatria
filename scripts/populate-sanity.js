/**
 * Script para Popular Sanity CMS com Dados das Páginas
 *
 * Uso:
 * - Dry-run (sem modificar): node scripts/populate-sanity.js --dry-run
 * - Execução real: node scripts/populate-sanity.js
 * - Limpar dados: node scripts/populate-sanity.js --clean
 */

const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

// Configuração do Sanity Client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'seu-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Token com permissões de escrita
})

// Cores para logs
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  blue: '\x1b[34m',
}

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`)
}

function logSection(title) {
  console.log('\n' + '='.repeat(60))
  log(title, colors.bright + colors.cyan)
  console.log('='.repeat(60) + '\n')
}

function logSuccess(message) {
  log(`✓ ${message}`, colors.green)
}

function logWarning(message) {
  log(`⚠ ${message}`, colors.yellow)
}

function logError(message) {
  log(`✗ ${message}`, colors.red)
}

function logInfo(message) {
  log(`ℹ ${message}`, colors.blue)
}

// Carregar dados do JSON
function loadPageData() {
  try {
    const dataPath = path.join(__dirname, 'sanity-data', 'pages-content.json')
    const rawData = fs.readFileSync(dataPath, 'utf8')
    return JSON.parse(rawData)
  } catch (error) {
    logError(`Erro ao carregar dados: ${error.message}`)
    process.exit(1)
  }
}

// Verificar se documento já existe
async function documentExists(id) {
  try {
    const doc = await client.getDocument(id)
    return !!doc
  } catch (error) {
    return false
  }
}

// Criar ou atualizar documento
async function upsertDocument(document, dryRun = false) {
  const { _id, _type } = document

  if (!_id || !_type) {
    logWarning(`Documento sem _id ou _type: ${JSON.stringify(document).substring(0, 100)}...`)
    return { created: false, updated: false, skipped: true }
  }

  try {
    const exists = await documentExists(_id)

    if (dryRun) {
      if (exists) {
        logInfo(`[DRY-RUN] Atualizaria: ${_type} (${_id})`)
        return { created: false, updated: true, skipped: false }
      } else {
        logInfo(`[DRY-RUN] Criaria: ${_type} (${_id})`)
        return { created: true, updated: false, skipped: false }
      }
    }

    if (exists) {
      await client
        .patch(_id)
        .set(document)
        .commit()
      logSuccess(`Atualizado: ${_type} (${_id})`)
      return { created: false, updated: true, skipped: false }
    } else {
      await client.create(document)
      logSuccess(`Criado: ${_type} (${_id})`)
      return { created: true, updated: false, skipped: false }
    }
  } catch (error) {
    logError(`Erro ao processar ${_type} (${_id}): ${error.message}`)
    return { created: false, updated: false, skipped: true, error: error.message }
  }
}

// Limpar todos os documentos (CUIDADO!)
async function cleanAllDocuments(dryRun = false) {
  logSection('🗑️  LIMPEZA DE DADOS')

  if (!dryRun) {
    logWarning('ATENÇÃO: Esta operação irá DELETAR TODOS os documentos!')
    logWarning('Pressione Ctrl+C para cancelar ou aguarde 5 segundos...')
    await new Promise(resolve => setTimeout(resolve, 5000))
  }

  try {
    const query = '*[_type in ["homePage", "aboutPage", "aboutNovoLarPage", "servicesIndexPage", "teamPage", "structurePage", "activitiesPage", "faqPage", "contactPage", "siteSettings", "unit"]]'
    const documents = await client.fetch(query)

    logInfo(`Encontrados ${documents.length} documentos para limpar`)

    if (dryRun) {
      logInfo('[DRY-RUN] Simulando limpeza...')
      documents.forEach(doc => {
        logInfo(`[DRY-RUN] Deletaria: ${doc._type} (${doc._id})`)
      })
      return { deleted: documents.length }
    }

    let deleted = 0
    for (const doc of documents) {
      try {
        await client.delete(doc._id)
        logSuccess(`Deletado: ${doc._type} (${doc._id})`)
        deleted++
      } catch (error) {
        logError(`Erro ao deletar ${doc._id}: ${error.message}`)
      }
    }

    return { deleted }
  } catch (error) {
    logError(`Erro na limpeza: ${error.message}`)
    return { deleted: 0, error: error.message }
  }
}

// Popular Sanity com dados
async function populateSanity(dryRun = false) {
  logSection('📦 POPULANDO SANITY CMS')

  if (!process.env.SANITY_API_TOKEN) {
    logError('SANITY_API_TOKEN não configurado no .env!')
    logInfo('Crie um token em: https://www.sanity.io/manage')
    process.exit(1)
  }

  if (dryRun) {
    logWarning('MODO DRY-RUN: Nenhuma alteração será feita')
  }

  const data = loadPageData()
  const stats = {
    created: 0,
    updated: 0,
    skipped: 0,
    errors: 0,
  }

  // 1. Site Settings (singleton)
  logSection('1. Site Settings')
  const siteSettingsResult = await upsertDocument(data.siteSettings, dryRun)
  stats.created += siteSettingsResult.created ? 1 : 0
  stats.updated += siteSettingsResult.updated ? 1 : 0
  stats.skipped += siteSettingsResult.skipped ? 1 : 0
  stats.errors += siteSettingsResult.error ? 1 : 0

  // 2. Home Page (singleton)
  logSection('2. Home Page')
  const homePageResult = await upsertDocument(data.homePage, dryRun)
  stats.created += homePageResult.created ? 1 : 0
  stats.updated += homePageResult.updated ? 1 : 0
  stats.skipped += homePageResult.skipped ? 1 : 0
  stats.errors += homePageResult.error ? 1 : 0

  // 3. About Page (singleton)
  logSection('3. About Page')
  const aboutPageResult = await upsertDocument(data.aboutPage, dryRun)
  stats.created += aboutPageResult.created ? 1 : 0
  stats.updated += aboutPageResult.updated ? 1 : 0
  stats.skipped += aboutPageResult.skipped ? 1 : 0
  stats.errors += aboutPageResult.error ? 1 : 0

  // 4. About Novo Lar Page (singleton)
  logSection('4. About Novo Lar Page')
  const aboutNovoLarResult = await upsertDocument(data.aboutNovoLarPage, dryRun)
  stats.created += aboutNovoLarResult.created ? 1 : 0
  stats.updated += aboutNovoLarResult.updated ? 1 : 0
  stats.skipped += aboutNovoLarResult.skipped ? 1 : 0
  stats.errors += aboutNovoLarResult.error ? 1 : 0

  // 5. Services Index Page (singleton)
  logSection('5. Services Index Page')
  const servicesPageResult = await upsertDocument(data.servicesIndexPage, dryRun)
  stats.created += servicesPageResult.created ? 1 : 0
  stats.updated += servicesPageResult.updated ? 1 : 0
  stats.skipped += servicesPageResult.skipped ? 1 : 0
  stats.errors += servicesPageResult.error ? 1 : 0

  // 6. Team Page (singleton)
  logSection('6. Team Page')
  const teamPageResult = await upsertDocument(data.teamPage, dryRun)
  stats.created += teamPageResult.created ? 1 : 0
  stats.updated += teamPageResult.updated ? 1 : 0
  stats.skipped += teamPageResult.skipped ? 1 : 0
  stats.errors += teamPageResult.error ? 1 : 0

  // 7. Structure Page (singleton)
  logSection('7. Structure Page')
  const structurePageResult = await upsertDocument(data.structurePage, dryRun)
  stats.created += structurePageResult.created ? 1 : 0
  stats.updated += structurePageResult.updated ? 1 : 0
  stats.skipped += structurePageResult.skipped ? 1 : 0
  stats.errors += structurePageResult.error ? 1 : 0

  // 8. Activities Page (singleton)
  logSection('8. Activities Page')
  const activitiesPageResult = await upsertDocument(data.activitiesPage, dryRun)
  stats.created += activitiesPageResult.created ? 1 : 0
  stats.updated += activitiesPageResult.updated ? 1 : 0
  stats.skipped += activitiesPageResult.skipped ? 1 : 0
  stats.errors += activitiesPageResult.error ? 1 : 0

  // 9. FAQ Page (singleton)
  logSection('9. FAQ Page')
  const faqPageResult = await upsertDocument(data.faqPage, dryRun)
  stats.created += faqPageResult.created ? 1 : 0
  stats.updated += faqPageResult.updated ? 1 : 0
  stats.skipped += faqPageResult.skipped ? 1 : 0
  stats.errors += faqPageResult.error ? 1 : 0

  // 10. Contact Page (singleton)
  logSection('10. Contact Page')
  const contactPageResult = await upsertDocument(data.contactPage, dryRun)
  stats.created += contactPageResult.created ? 1 : 0
  stats.updated += contactPageResult.updated ? 1 : 0
  stats.skipped += contactPageResult.skipped ? 1 : 0
  stats.errors += contactPageResult.error ? 1 : 0

  // 11. Units (documentos múltiplos)
  logSection('11. Units')
  if (data.units && Array.isArray(data.units)) {
    for (const unit of data.units) {
      const unitResult = await upsertDocument(unit, dryRun)
      stats.created += unitResult.created ? 1 : 0
      stats.updated += unitResult.updated ? 1 : 0
      stats.skipped += unitResult.skipped ? 1 : 0
      stats.errors += unitResult.error ? 1 : 0
    }
  }

  // Relatório Final
  logSection('📊 RESUMO DA EXECUÇÃO')
  console.table({
    'Criados': stats.created,
    'Atualizados': stats.updated,
    'Ignorados': stats.skipped,
    'Erros': stats.errors,
    'Total Processados': stats.created + stats.updated + stats.skipped + stats.errors,
  })

  if (dryRun) {
    logWarning('\nMODO DRY-RUN: Nenhuma alteração foi feita')
    logInfo('Execute sem --dry-run para aplicar as mudanças')
  } else {
    logSuccess('\n✅ Migração concluída com sucesso!')
  }

  if (stats.errors > 0) {
    logError(`\n⚠️  ${stats.errors} erro(s) encontrado(s). Verifique os logs acima.`)
    process.exit(1)
  }
}

// Função principal
async function main() {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const clean = args.includes('--clean')

  try {
    if (clean) {
      const result = await cleanAllDocuments(dryRun)
      logSuccess(`\n✅ Limpeza concluída: ${result.deleted} documentos deletados`)
    } else {
      await populateSanity(dryRun)
    }
  } catch (error) {
    logError(`\nErro fatal: ${error.message}`)
    console.error(error)
    process.exit(1)
  }
}

// Executar
main()
