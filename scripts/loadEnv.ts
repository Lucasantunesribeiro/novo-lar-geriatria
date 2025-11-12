import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

function loadEnvFiles() {
  const envFiles = ['.env.local', '.env']

  for (const file of envFiles) {
    const fullPath = path.join(ROOT_DIR, file)
    if (!fs.existsSync(fullPath)) continue

    const contents = fs.readFileSync(fullPath, 'utf-8')
    for (const line of contents.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue

      const equalsIndex = trimmed.indexOf('=')
      if (equalsIndex === -1) continue

      const key = trimmed.slice(0, equalsIndex).trim()
      let value = trimmed.slice(equalsIndex + 1).trim()

      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }

      if (!(key in process.env)) {
        process.env[key] = value
      }
    }
  }
}

loadEnvFiles()
