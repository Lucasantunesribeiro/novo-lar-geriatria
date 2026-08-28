import './loadEnv'
import { getExpectedPageIdsFromPath, getPageByPath } from '../lib/sanity/queries'

async function runTests() {
  console.log('--- TEST 1: getExpectedPageIdsFromPath ---')
  const ids1 = getExpectedPageIdsFromPath('/sobre/estrutura')
  console.log('/sobre/estrutura IDs:', ids1)
  if (!ids1.includes('page-sobre-estrutura')) {
    throw new Error('Expected page-sobre-estrutura in IDs')
  }

  const idsHome = getExpectedPageIdsFromPath('/')
  console.log('/ IDs:', idsHome)
  if (!idsHome.includes('page-home')) {
    throw new Error('Expected page-home in IDs')
  }
  console.log('✅ TEST 1 PASSED')

  console.log('\n--- TEST 2: getPageByPath fetching /sobre/estrutura ---')
  const page = await getPageByPath('/sobre/estrutura')
  if (!page) {
    throw new Error('Failed to fetch /sobre/estrutura page document from Sanity')
  }
  console.log('Found page title:', page.title, '| ID:', page._id, '| path:', page.path)
  console.log('✅ TEST 2 PASSED')
}

runTests().catch((err) => {
  console.error('❌ TEST FAILED:', err)
  process.exit(1)
})
