# Guia de Queries Sanity CMS - Header, Footer e Settings

## Queries Implementadas

### 1. `getHeaderConfig()`

Busca configurações completas do Header do site.

**Retorna:**
- Logo customizado do header
- Top Bar (links superiores, horário de funcionamento)
- Navegação principal com dropdowns
- Botões de contato (Telefone e WhatsApp)
- Configuração do dropdown de unidades
- Dados globais de contato

**Cache:** 60 segundos (ISR)

**Exemplo de uso:**
```typescript
import { getHeaderConfig } from '@/lib/sanity/queries'
import type { HeaderData } from '@/types/sanity'

export default async function Header() {
  const headerData: HeaderData | null = await getHeaderConfig()

  if (!headerData?.headerConfig) {
    return <DefaultHeader />
  }

  const { headerConfig, globalPhone, globalWhatsapp } = headerData

  return (
    <header>
      {/* Top Bar */}
      {headerConfig.showTopBar && (
        <div className="top-bar">
          {headerConfig.topBarLinks?.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Navigation */}
      <nav>
        {headerConfig.mainNavigation?.map((item) => {
          if (item.type === 'link') {
            return <a href={item.href}>{item.label}</a>
          }

          if (item.type === 'servicesDropdown') {
            return (
              <Dropdown label={item.label}>
                {item.serviceGroups?.map((group) => (
                  <DropdownGroup key={group._id} title={group.title}>
                    {group.services.map((service) => (
                      <DropdownItem
                        key={service._id}
                        href={`/servicos/${service.slug.current}`}
                      >
                        {service.title}
                      </DropdownItem>
                    ))}
                  </DropdownGroup>
                ))}
              </Dropdown>
            )
          }
        })}
      </nav>

      {/* Contact Buttons */}
      {headerConfig.showPhoneButton && (
        <a href={`tel:${globalPhone}`}>
          {headerConfig.phoneButtonLabel}
        </a>
      )}

      {headerConfig.showWhatsappButton && (
        <a href={`https://wa.me/${globalWhatsapp}`}>
          {headerConfig.whatsappButtonLabel}
        </a>
      )}
    </header>
  )
}
```

**Estrutura de dados:**
```typescript
{
  headerConfig: {
    _id: string
    logo?: { asset: { url: string } }
    showTopBar: boolean
    topBarLinks: Array<{ label: string, href: string }>
    mainNavigation: Array<{
      type: 'link' | 'servicesDropdown' | 'unitsDropdown' | 'customDropdown'
      id: string
      label: string
      href?: string
      serviceGroups?: Array<{
        _id: string
        title: string
        services: Array<{ _id, title, slug, icon }>
      }>
      customDropdownItems?: Array<{ label, href, description }>
    }>
    showPhoneButton: boolean
    phoneButtonLabel: string
    showWhatsappButton: boolean
    whatsappButtonLabel: string
    whatsappDefaultMessage: string
  }
  globalPhone: string
  globalWhatsapp: string
  globalEmail: string
}
```

---

### 2. `getFooterConfig()`

Busca configurações completas do Footer do site.

**Retorna:**
- Logo customizado do footer
- Colunas dinâmicas (links, contato, unidades, social)
- Seção inferior (copyright, links legais)
- Cores customizadas
- Dados globais de contato e redes sociais
- Lista de unidades (quando aplicável)

**Cache:** 60 segundos (ISR)

**Exemplo de uso:**
```typescript
import { getFooterConfig } from '@/lib/sanity/queries'
import type { FooterData } from '@/types/sanity'

export default async function Footer() {
  const footerData: FooterData | null = await getFooterConfig()

  if (!footerData?.footerConfig) {
    return <DefaultFooter />
  }

  const {
    footerConfig,
    globalPhone,
    globalEmail,
    socialLinks,
    allUnits
  } = footerData

  return (
    <footer style={{ backgroundColor: footerConfig.backgroundColor }}>
      <div className="footer-columns">
        {footerConfig.columns?.map((column, index) => {
          // Links Column
          if (column.type === 'links') {
            return (
              <div key={index}>
                <h3>{column.title}</h3>
                {column.links?.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            )
          }

          // Contact Column
          if (column.type === 'contact') {
            return (
              <div key={index}>
                <h3>{column.title}</h3>
                {column.showPhone && <p>{globalPhone}</p>}
                {column.showEmail && <p>{globalEmail}</p>}
                {column.showAddress && <p>{column.customAddress}</p>}
                {column.showBusinessHours && <p>{column.businessHours}</p>}
              </div>
            )
          }

          // Units Column
          if (column.type === 'units') {
            const units = column.showAllUnits
              ? allUnits
              : column.selectedUnits

            return (
              <div key={index}>
                <h3>{column.title}</h3>
                {units?.map((unit) => (
                  <div key={unit._id}>
                    <a href={`/unidades/${unit.slug.current}`}>
                      {unit.name}
                    </a>
                    {column.showUnitPhone && <p>{unit.phone}</p>}
                    {column.showUnitAddress && (
                      <p>{unit.address}, {unit.neighborhood}</p>
                    )}
                  </div>
                ))}
              </div>
            )
          }

          // Social Column
          if (column.type === 'social') {
            return (
              <div key={index}>
                <h3>{column.socialTitle || column.title}</h3>
                <div className={column.socialLayout}>
                  {column.socialPlatforms?.map((platform) => (
                    socialLinks?.[platform] && (
                      <a
                        key={platform}
                        href={socialLinks[platform]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {platform}
                      </a>
                    )
                  ))}
                </div>
              </div>
            )
          }
        })}
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          {footerConfig.bottomSection?.showYear
            ? footerConfig.bottomSection.copyrightText.replace(
                /\d{4}/,
                new Date().getFullYear().toString()
              )
            : footerConfig.bottomSection?.copyrightText
          }
        </p>

        {footerConfig.bottomSection?.bottomLinks?.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}

        {footerConfig.bottomSection?.showDeveloperCredit && (
          <p>
            Desenvolvido por{' '}
            <a href={footerConfig.bottomSection.developerUrl}>
              {footerConfig.bottomSection.developerName}
            </a>
          </p>
        )}
      </div>
    </footer>
  )
}
```

**Tipos de Colunas:**

1. **Links Column:**
```typescript
{
  type: 'links'
  title: string
  links: Array<{ label: string, href: string }>
}
```

2. **Contact Column:**
```typescript
{
  type: 'contact'
  title: string
  showEmail: boolean
  showPhone: boolean
  showAddress: boolean
  customAddress?: string
  showBusinessHours: boolean
  businessHours?: string
}
```

3. **Units Column:**
```typescript
{
  type: 'units'
  title: string
  showAllUnits: boolean
  selectedUnits?: Array<Unit>
  showUnitPhone: boolean
  showUnitAddress: boolean
}
```

4. **Social Column:**
```typescript
{
  type: 'social'
  title: string
  socialPlatforms: Array<'facebook' | 'instagram' | 'linkedin' | 'youtube'>
  socialTitle: string
  socialLayout: 'horizontal' | 'vertical'
}
```

---

### 3. `getSiteSettings()`

Busca configurações globais do site.

**Retorna:**
- Nome e URL do site
- Contatos globais (telefone, WhatsApp, email)
- Redes sociais
- Imagens (logo, favicon, OG image)
- IDs de analytics (Google Analytics, GTM, Facebook Pixel)

**Cache:** 60 segundos (ISR)

**Exemplo de uso:**
```typescript
import { getSiteSettings } from '@/lib/sanity/queries'
import type { SiteSettingsType } from '@/types/sanity'

export async function generateMetadata() {
  const settings: SiteSettingsType | null = await getSiteSettings()

  return {
    title: settings?.siteName || 'Novo Lar Geriatria',
    description: settings?.defaultMetaDescription,
    icons: {
      icon: settings?.favicon?.asset?.url,
    },
    openGraph: {
      siteName: settings?.siteName,
      images: [settings?.defaultOgImage?.asset?.url],
    },
  }
}

// Google Analytics
export function GoogleAnalytics() {
  const settings = await getSiteSettings()

  if (!settings?.googleAnalyticsId) return null

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalyticsId}`}
      strategy="afterInteractive"
    />
  )
}
```

---

## Performance e Cache

Todas as queries implementam:

1. **ISR (Incremental Static Regeneration)**
   - Revalidação: 60 segundos
   - Cache automático no Next.js 15

2. **Error Handling**
   - Try/catch em todas as queries
   - Logs de erro com `console.error`
   - Retorno `null` em caso de falha

3. **Fallback**
   - Verificação de `isSanityConfigured`
   - Retorno antecipado se Sanity não está configurado

4. **Projeção GROQ Otimizada**
   - Busca apenas campos necessários
   - Resolve referências no servidor
   - Evita N+1 queries

---

## Boas Práticas

### 1. Verificação de Dados
```typescript
const headerData = await getHeaderConfig()

if (!headerData?.headerConfig) {
  return <DefaultHeader />
}
```

### 2. Type Safety
```typescript
import type { HeaderData, FooterData } from '@/types/sanity'

const headerData: HeaderData | null = await getHeaderConfig()
```

### 3. Conditional Rendering
```typescript
{headerConfig?.showTopBar && (
  <TopBar links={headerConfig.topBarLinks} />
)}
```

### 4. Map com Keys
```typescript
{columns?.map((column, index) => (
  <Column key={column.title || index} {...column} />
))}
```

---

## Troubleshooting

### Query retorna `null`

**Possíveis causas:**
1. Sanity não configurado (`NEXT_PUBLIC_SANITY_PROJECT_ID` ausente)
2. Erro de rede
3. Schema não existe no Sanity Studio
4. Referência não resolvida

**Solução:**
```bash
# 1. Verificar variáveis de ambiente
env | grep SANITY

# 2. Verificar Studio
npm run dev:sanity

# 3. Verificar logs
console.log('Header data:', headerData)
```

### Referências não resolvidas

**Problema:** `serviceGroups` retorna `[{ _ref: '...' }]`

**Causa:** GROQ não está usando `->` para resolver referência

**Solução:**
```groq
"serviceGroups": serviceGroups[]->{  // <- Note o '->'
  _id,
  title,
  slug
}
```

### Performance lenta

**Problema:** Queries demoram muito

**Soluções:**
1. Reduzir campos projetados
2. Verificar índices no Sanity
3. Usar `limit` quando apropriado
4. Implementar streaming (Suspense)

---

## Migração de Dados Hardcoded

Para migrar componentes que usam dados hardcoded:

```typescript
// ❌ Antes
const links = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
]

// ✅ Depois
const { headerConfig } = await getHeaderConfig()
const links = headerConfig?.mainNavigation || []
```

---

## Referências

- **Arquivo de Queries:** `/lib/sanity/queries.ts`
- **Tipos TypeScript:** `/types/sanity.ts`
- **Schemas Sanity:** `/sanity/schemas/`
- **Testes:** `/lib/sanity/__tests__/queries.test.ts`
