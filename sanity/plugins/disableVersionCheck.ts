import {definePlugin} from 'sanity'

const MODULES_PATH_FRAGMENT = '/v1/modules/'
const PATCH_FLAG = Symbol.for('sanity.disableVersionCheck')

function extractUrl(target: FetchArgs[0]) {
  if (typeof target === 'string') {
    return target
  }

  if (target instanceof URL) {
    return target.toString()
  }

  if (typeof Request !== 'undefined' && target instanceof Request) {
    return target.url
  }

  return undefined
}

function shouldBypassFetch(rawUrl: string | URL) {
  try {
    const url = typeof rawUrl === 'string' ? new URL(rawUrl, rawUrl.startsWith('http') ? undefined : 'https://sanity-cdn.com') : rawUrl
    return url.hostname.endsWith('sanity-cdn.com') && url.pathname.includes(MODULES_PATH_FRAGMENT)
  } catch {
    return typeof rawUrl === 'string' && rawUrl.includes(MODULES_PATH_FRAGMENT)
  }
}

type FetchArgs = Parameters<typeof fetch>

function patchGlobalFetch() {
  const globalObject = globalThis as typeof globalThis & {
    [PATCH_FLAG]?: boolean
  }

  if (globalObject[PATCH_FLAG]) {
    return
  }

  if (typeof globalObject.fetch !== 'function' || typeof Response === 'undefined') {
    return
  }

  const originalFetch = globalObject.fetch.bind(globalObject)

  globalObject.fetch = async (...args: FetchArgs) => {
    const [input, init] = args
    const url = extractUrl(input)

    if (url && shouldBypassFetch(url)) {
      const body = JSON.stringify({packageVersion: null})
      return new Response(body, {
        status: 200,
        headers: {'Content-Type': 'application/json'},
      })
    }

    return originalFetch(input, init)
  }

  globalObject[PATCH_FLAG] = true
}

export const disableVersionCheckPlugin = definePlugin(() => {
  patchGlobalFetch()

  return {
    name: 'disable-sanity-version-check',
  }
})
