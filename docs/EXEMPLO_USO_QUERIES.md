# Exemplo Prático de Uso das Queries Sanity

## 1. Migrar Header Existente

### Antes (Dados Hardcoded)

```typescript
// components/layout/Header.tsx (ANTIGO)
export default function Header() {
  const links = [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Unidades', href: '/unidades' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ]

  return (
    <header>
      <nav>
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a href="tel:1112345678">Ligar Agora</a>
    </header>
  )
}
```

### Depois (Sanity CMS)

```typescript
// components/layout/Header.tsx (NOVO)
import { getHeaderConfig } from '@/lib/sanity/queries'
import type { HeaderData } from '@/types/sanity'
import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'

export default async function Header() {
  const data: HeaderData | null = await getHeaderConfig()

  // Fallback se Sanity não configurado
  if (!data?.headerConfig) {
    return <HeaderFallback />
  }

  const { headerConfig, globalPhone, globalWhatsapp } = data

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      {headerConfig.showTopBar && (
        <div className="bg-primary-600 text-white">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex gap-4">
              {headerConfig.topBarLinks?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {headerConfig.topBarBusinessHours && (
              <span className="text-sm">{headerConfig.topBarBusinessHours}</span>
            )}
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          {headerConfig.logo?.asset?.url ? (
            <img
              src={headerConfig.logo.asset.url}
              alt="Logo"
              className="h-12"
            />
          ) : (
            <span className="text-2xl font-bold text-primary-700">
              Novo Lar Geriatria
            </span>
          )}
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex gap-6">
          {headerConfig.mainNavigation?.map((item) => {
            if (item.type === 'link') {
              return (
                <Link
                  key={item.id}
                  href={item.href || '#'}
                  className="text-gray-700 hover:text-primary-600 font-medium"
                >
                  {item.label}
                </Link>
              )
            }

            if (item.type === 'servicesDropdown') {
              return (
                <ServicesDropdown
                  key={item.id}
                  label={item.label}
                  description={item.description}
                  serviceGroups={item.serviceGroups}
                />
              )
            }

            if (item.type === 'unitsDropdown') {
              return (
                <UnitsDropdown
                  key={item.id}
                  label={item.label}
                  showUnitsDropdown={headerConfig.showUnitsDropdown}
                />
              )
            }

            if (item.type === 'customDropdown') {
              return (
                <CustomDropdown
                  key={item.id}
                  label={item.label}
                  items={item.customDropdownItems}
                />
              )
            }
          })}
        </nav>

        {/* Contact Buttons */}
        <div className="hidden lg:flex gap-3">
          {headerConfig.showPhoneButton && (
            <a
              href={`tel:${globalPhone}`}
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
            >
              <Phone size={18} />
              {headerConfig.phoneButtonLabel}
            </a>
          )}

          {headerConfig.showWhatsappButton && (
            <a
              href={`https://wa.me/${globalWhatsapp}?text=${encodeURIComponent(
                headerConfig.whatsappDefaultMessage || ''
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              <MessageCircle size={18} />
              {headerConfig.whatsappButtonLabel}
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton headerConfig={headerConfig} />
      </div>
    </header>
  )
}

// Componente Dropdown de Serviços
function ServicesDropdown({ label, description, serviceGroups }) {
  return (
    <div className="relative group">
      <button className="text-gray-700 hover:text-primary-600 font-medium flex items-center gap-1">
        {label}
        <ChevronDown size={16} />
      </button>

      <div className="absolute left-0 top-full mt-2 w-[600px] bg-white shadow-xl rounded-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        {description && (
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        )}

        <div className="grid grid-cols-2 gap-6">
          {serviceGroups?.map((group) => (
            <div key={group._id}>
              <h3 className="font-semibold text-primary-700 mb-2">
                {group.title}
              </h3>
              <ul className="space-y-1">
                {group.services.map((service) => (
                  <li key={service._id}>
                    <Link
                      href={`/servicos/${service.slug.current}`}
                      className="text-sm text-gray-700 hover:text-primary-600"
                    >
                      {service.icon && <span className="mr-2">{service.icon}</span>}
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```

---

## 2. Migrar Footer Existente

### Antes (Dados Hardcoded)

```typescript
// components/layout/Footer.tsx (ANTIGO)
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3>Sobre</h3>
            <a href="/sobre">Quem Somos</a>
            <a href="/sobre/equipe">Equipe</a>
          </div>
          {/* ... mais colunas hardcoded */}
        </div>
        <p>© 2024 Novo Lar Geriatria</p>
      </div>
    </footer>
  )
}
```

### Depois (Sanity CMS)

```typescript
// components/layout/Footer.tsx (NOVO)
import { getFooterConfig } from '@/lib/sanity/queries'
import type { FooterData } from '@/types/sanity'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail } from 'lucide-react'

export default async function Footer() {
  const data: FooterData | null = await getFooterConfig()

  if (!data?.footerConfig) {
    return <FooterFallback />
  }

  const {
    footerConfig,
    globalPhone,
    globalEmail,
    socialLinks,
    allUnits,
  } = data

  const styles = {
    backgroundColor: footerConfig.backgroundColor || '#2C3E6B',
    color: footerConfig.textColor || 'white',
  }

  return (
    <footer style={styles} className="py-12">
      <div className="container mx-auto px-4">
        {/* Logo */}
        {footerConfig.logo?.asset?.url && (
          <div className="mb-8">
            <img
              src={footerConfig.logo.asset.url}
              alt="Logo Footer"
              className="h-16"
            />
          </div>
        )}

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerConfig.columns?.map((column, index) => (
            <FooterColumn
              key={index}
              column={column}
              globalPhone={globalPhone}
              globalEmail={globalEmail}
              socialLinks={socialLinks}
              allUnits={allUnits}
              accentColor={footerConfig.accentColor}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              {footerConfig.bottomSection?.showYear
                ? footerConfig.bottomSection.copyrightText.replace(
                    /\d{4}/,
                    new Date().getFullYear().toString()
                  )
                : footerConfig.bottomSection?.copyrightText}
            </p>

            <div className="flex gap-4">
              {footerConfig.bottomSection?.bottomLinks?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {footerConfig.bottomSection?.showDeveloperCredit && (
              <p className="text-sm">
                Desenvolvido por{' '}
                <a
                  href={footerConfig.bottomSection.developerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {footerConfig.bottomSection.developerName}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

// Componente para renderizar cada coluna
function FooterColumn({
  column,
  globalPhone,
  globalEmail,
  socialLinks,
  allUnits,
  accentColor,
}) {
  const titleStyle = {
    color: accentColor || '#8B6914',
  }

  if (column.type === 'links') {
    return (
      <div>
        <h3 className="font-bold mb-4" style={titleStyle}>
          {column.title}
        </h3>
        <ul className="space-y-2">
          {column.links?.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (column.type === 'contact') {
    return (
      <div>
        <h3 className="font-bold mb-4" style={titleStyle}>
          {column.title}
        </h3>
        <div className="space-y-2">
          {column.showPhone && (
            <a href={`tel:${globalPhone}`} className="flex items-center gap-2">
              <Phone size={16} />
              {globalPhone}
            </a>
          )}
          {column.showEmail && (
            <a href={`mailto:${globalEmail}`} className="flex items-center gap-2">
              <Mail size={16} />
              {globalEmail}
            </a>
          )}
          {column.showAddress && <p>{column.customAddress}</p>}
          {column.showBusinessHours && <p>{column.businessHours}</p>}
        </div>
      </div>
    )
  }

  if (column.type === 'units') {
    const units = column.showAllUnits ? allUnits : column.selectedUnits

    return (
      <div>
        <h3 className="font-bold mb-4" style={titleStyle}>
          {column.title}
        </h3>
        <ul className="space-y-2">
          {units?.map((unit) => (
            <li key={unit._id}>
              <Link
                href={`/unidades/${unit.slug.current}`}
                className="hover:underline"
              >
                {unit.name}
              </Link>
              {column.showUnitPhone && unit.phone && (
                <p className="text-sm">{unit.phone}</p>
              )}
              {column.showUnitAddress && unit.address && (
                <p className="text-sm">{unit.address}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (column.type === 'social') {
    const iconMap = {
      facebook: Facebook,
      instagram: Instagram,
      linkedin: Linkedin,
      youtube: Youtube,
    }

    return (
      <div>
        <h3 className="font-bold mb-4" style={titleStyle}>
          {column.socialTitle || column.title}
        </h3>
        <div
          className={`flex gap-4 ${
            column.socialLayout === 'vertical' ? 'flex-col' : ''
          }`}
        >
          {column.socialPlatforms?.map((platform) => {
            const Icon = iconMap[platform]
            const url = socialLinks?.[platform]

            if (!url || !Icon) return null

            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Icon size={24} />
              </a>
            )
          })}
        </div>
      </div>
    )
  }

  return null
}
```

---

## 3. Usar Settings Globais

```typescript
// app/layout.tsx
import { getSiteSettings } from '@/lib/sanity/queries'
import Script from 'next/script'

export async function generateMetadata() {
  const settings = await getSiteSettings()

  return {
    title: {
      default: settings?.siteName || 'Novo Lar Geriatria',
      template: `%s | ${settings?.siteName || 'Novo Lar Geriatria'}`,
    },
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

export default async function RootLayout({ children }) {
  const settings = await getSiteSettings()

  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        {settings?.googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${settings.googleAnalyticsId}');
              `}
            </Script>
          </>
        )}

        {/* Google Tag Manager */}
        {settings?.googleTagManagerId && (
          <Script id="gtm" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${settings.googleTagManagerId}');
            `}
          </Script>
        )}
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## 4. Resumo da Migração

### Checklist de Migração

- [ ] Instalar pacotes: `@sanity/client`, `next-sanity`
- [ ] Configurar variáveis de ambiente
- [ ] Criar schemas no Sanity Studio
- [ ] Adicionar queries em `/lib/sanity/queries.ts`
- [ ] Criar types em `/types/sanity.ts`
- [ ] Migrar Header para usar `getHeaderConfig()`
- [ ] Migrar Footer para usar `getFooterConfig()`
- [ ] Usar `getSiteSettings()` no layout
- [ ] Testar no Sanity Studio
- [ ] Validar no frontend
- [ ] Deploy

### Performance Esperada

- **Cache:** 60 segundos (ISR)
- **Build Time:** Queries executadas no build
- **Runtime:** Revalidação automática
- **TTI:** < 200ms para header/footer

### Vantagens

✅ **Sem redeploy** para mudar menu
✅ **Preview** antes de publicar
✅ **Histórico** de mudanças
✅ **Multi-língua** ready
✅ **Type-safe** com TypeScript
✅ **Performance** otimizada
