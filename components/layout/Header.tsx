'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle, Menu, X, Clock, ChevronDown } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import { COMPANY_CONTACT } from '@/lib/site-data'
import {
  cx,
  classeTexto,
  estiloDeTexto,
  type EstiloTexto,
} from '@/lib/cms/estilo'

/**
 * Valores que o site usa hoje.
 *
 * Continuam aqui de proposito: sao o padrao quando o campo correspondente do
 * Sanity esta vazio. Preencher no Studio substitui; apagar volta para ca.
 */
type NavItem = {
  label: string
  href?: string
  type?: string
  customDropdownItems?: { label?: string; href?: string; description?: string }[]
}

type LinkSimples = { label: string; href: string }

export const NAV_ITEMS_PADRAO: NavItem[] = [
  { label: 'Sobre Nós', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Estrutura', href: '/sobre/estrutura' },
  { label: 'Notícias', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

export const UNITS_PADRAO: LinkSimples[] = [
  {
    label: 'Moinhos de Vento - Luciana de Abreu',
    href: '/unidade-luciana-de-abreu',
  },
  {
    label: 'Moinhos de Vento - Barão de Santo Ângelo',
    href: '/unidade-barao-sto-angelo',
  },
  {
    label: "Passo d'Areia",
    href: '/unidade-novo-lar-geriatria',
  },
]

interface HeaderProps {
  topBarLinks?: LinkSimples[]
  showTopBar?: boolean
  topBarText?: string
  topBarBusinessHours?: string
  navItems?: NavItem[]
  unitsDropdownItems?: LinkSimples[]
  showUnitsDropdown?: boolean
  unitsDropdownLabel?: string
  phones?: { label: string; href: string }[]
  logoUrl?: string | null
  logoHeight?: number
  logoAlt?: string
  showPhoneButton?: boolean
  showWhatsappButton?: boolean
  whatsappButtonLabel?: string
  whatsappHref?: string
  mobileMenuTitle?: string
  alturaBarra?: number
  estiloTopo?: EstiloTexto
  estiloMenu?: EstiloTexto
  estiloBotoes?: EstiloTexto
  corFundoTopo?: string
  corFundoMenu?: string
}

export default function Header({
  topBarLinks = [
    { label: 'Tour e contato', href: '/sobre' },
    { label: 'Fotos', href: '/sobre/fotos' },
    { label: 'Depoimentos', href: '/depoimentos' },
    { label: 'Notícias', href: '/blog' },
    { label: 'Fale Conosco', href: '/contato' },
  ],
  showTopBar = true,
  topBarText = 'Residencial Geriátrico em Porto Alegre - Novo Lar',
  topBarBusinessHours = 'Atendimento Comercial 9h-19h · Equipe 24h',
  navItems = NAV_ITEMS_PADRAO,
  unitsDropdownItems = UNITS_PADRAO,
  showUnitsDropdown = true,
  unitsDropdownLabel = 'Unidades',
  phones = [
    {
      label: COMPANY_CONTACT.centralPhoneDisplay,
      href: `tel:${COMPANY_CONTACT.centralPhoneDigits}`,
    },
  ],
  logoUrl,
  logoHeight = 48,
  logoAlt = 'Novo Lar Geriatria',
  showPhoneButton = true,
  showWhatsappButton = true,
  whatsappButtonLabel = 'WhatsApp',
  whatsappHref = `https://wa.me/${COMPANY_CONTACT.whatsappDigits}`,
  mobileMenuTitle = 'Menu',
  alturaBarra,
  estiloTopo,
  estiloMenu,
  estiloBotoes,
  corFundoTopo,
  corFundoMenu,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownAberto, setDropdownAberto] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({
        event: 'click_tel',
        button_location: 'header',
      })
    }
  }

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({
        event: 'click_whatsapp',
        button_location: 'header',
      })
    }
  }

  const styleTopo = estiloDeTexto(estiloTopo)
  const styleMenu = estiloDeTexto(estiloMenu)
  const styleBotoes = estiloDeTexto(estiloBotoes)

  const itensDoMenu = navItems.length > 0 ? navItems : NAV_ITEMS_PADRAO
  const unidades = unitsDropdownItems.length > 0 ? unitsDropdownItems : UNITS_PADRAO

  /** Um item do menu: link simples ou menu suspenso com seus itens. */
  const renderItemDesktop = (item: NavItem, indice: number) => {
    const temDropdown =
      item.type === 'customDropdown' && (item.customDropdownItems?.length ?? 0) > 0
    const chave = `${item.label}-${indice}`

    if (!temDropdown) {
      return (
        <Link
          key={chave}
          href={item.href || '#'}
          className={cx('transition hover:text-[#2C3E6B]', classeTexto(estiloMenu))}
          style={styleMenu}
        >
          {item.label}
        </Link>
      )
    }

    return (
      <div
        key={chave}
        className="relative"
        onMouseEnter={() => setDropdownAberto(chave)}
        onMouseLeave={() => setDropdownAberto(null)}
      >
        <button
          className={cx('inline-flex items-center gap-1 text-sm font-medium text-[#4A4AAC] transition hover:text-[#2C3E6B]', classeTexto(estiloMenu))}
          style={styleMenu}
        >
          {item.label}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              dropdownAberto === chave ? 'rotate-180' : ''
            }`}
          />
        </button>

        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] rounded-xl border border-white/30 bg-white/95 p-3 shadow-2xl shadow-black/10 transition-all duration-200 ${
            dropdownAberto === chave
              ? 'opacity-100 scale-100 visible'
              : 'opacity-0 scale-95 invisible'
          }`}
          style={{ zIndex: 100 }}
        >
          {item.customDropdownItems?.map((sub, i) => (
            <Link
              key={`${sub.href}-${i}`}
              href={sub.href || '#'}
              className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm text-[#2C3E6B] transition hover:bg-[#2C3E6B]/5"
            >
              <span className="font-semibold">{sub.label}</span>
              <span className="text-xs font-semibold">→</span>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {showTopBar && (
        <div
          className="bg-[#2C3E6B] text-white"
          style={corFundoTopo ? { backgroundColor: corFundoTopo } : undefined}
        >
          <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-2 text-xs md:px-6 lg:px-[112px]">
            <div
              className={cx('flex items-center gap-2 font-semibold', classeTexto(estiloTopo))}
              style={styleTopo}
            >
              <Clock className="h-4 w-4" />
              <span>{topBarBusinessHours}</span>
            </div>
            <p
              className={cx('hidden flex-1 justify-center text-center text-sm font-medium lg:flex', classeTexto(estiloTopo))}
              style={styleTopo}
            >
              {topBarText}
            </p>
            <nav className="hidden items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] md:flex">
              {topBarLinks.map((link, i) => (
                <Link
                  key={`${link.href}-${i}`}
                  href={link.href}
                  className={cx('transition hover:text-[#D4A853]', classeTexto(estiloTopo))}
                  style={styleTopo}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div
        className="border-b border-[#E2E8F0] bg-white/95 backdrop-blur-xl shadow-sm"
        style={corFundoMenu ? { backgroundColor: corFundoMenu } : undefined}
      >
        <div
          className="mx-auto flex h-[100px] w-full max-w-[1440px] items-center justify-between px-4 md:px-6 lg:px-[112px]"
          style={alturaBarra ? { height: `${alturaBarra}px` } : undefined}
        >
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logoUrl || '/Novo-Lar-Logo-7.png'}
              alt={logoAlt}
              width={160}
              height={logoHeight}
              style={{ height: `${logoHeight}px`, width: 'auto' }}
              className="w-auto"
              priority
            />
          </Link>

          <div className="hidden flex-1 justify-center lg:flex">
            <nav className="flex items-center gap-8 text-sm font-medium text-[#4A4AAC]">
              {itensDoMenu.map(renderItemDesktop)}

              {showUnitsDropdown && (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownAberto('__unidades')}
                  onMouseLeave={() => setDropdownAberto(null)}
                >
                  <button
                    className={cx('inline-flex items-center gap-1 text-sm font-medium text-[#4A4AAC] transition hover:text-[#2C3E6B]', classeTexto(estiloMenu))}
                    style={styleMenu}
                  >
                    {unitsDropdownLabel}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        dropdownAberto === '__unidades' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] rounded-xl border border-white/30 bg-white/95 p-3 shadow-2xl shadow-black/10 transition-all duration-200 ${
                      dropdownAberto === '__unidades'
                        ? 'opacity-100 scale-100 visible'
                        : 'opacity-0 scale-95 invisible'
                    }`}
                    style={{ zIndex: 100 }}
                  >
                    {unidades.map((unit, index) => (
                      <Link
                        key={`${unit.href}-${index}`}
                        href={unit.href}
                        className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm text-[#2C3E6B] transition hover:bg-[#2C3E6B]/5 hover:text-[#2C3E6B]"
                        style={{
                          transitionDelay:
                            dropdownAberto === '__unidades' ? `${index * 40}ms` : '0ms',
                        }}
                      >
                        <span className="font-semibold">{unit.label}</span>
                        <span className="text-xs font-semibold">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </nav>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            {showPhoneButton &&
              phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={phone.href}
                  onClick={handlePhoneClick}
                  className={cx('inline-flex items-center gap-2 rounded-full border border-[#D4A853] px-4 py-2 text-sm font-semibold text-[#2C3E6B] transition hover:bg-[#D4A853]/10', classeTexto(estiloBotoes))}
                  style={styleBotoes}
                >
                  <Phone className="h-4 w-4" />
                  <span>{phone.label}</span>
                </a>
              ))}
            {showWhatsappButton && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className={cx('inline-flex items-center gap-2 rounded-full bg-[#00A63E] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#00A63E]/40 transition hover:bg-[#008f32]', classeTexto(estiloBotoes))}
                style={styleBotoes}
              >
                <MessageCircle className="h-4 w-4" />
                {whatsappButtonLabel}
              </a>
            )}
          </div>

          <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <Dialog.Trigger asChild>
              <button
                className="lg:hidden rounded-full p-2 text-[#2C3E6B] transition hover:bg-[#F3F4F6]"
                aria-label="Abrir menu"
                suppressHydrationWarning
              >
                <Menu className="h-6 w-6" />
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
              <Dialog.Content className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] p-6">
                  <div className="flex items-center gap-3">
                    <Dialog.Title className="sr-only">{mobileMenuTitle}</Dialog.Title>
                    <Dialog.Description className="sr-only">
                      Escolha uma seção
                    </Dialog.Description>
                    <Image
                      src={logoUrl || '/Novo-Lar-Logo-7.png'}
                      alt={logoAlt}
                      width={140}
                      height={56}
                      className="h-10 w-auto"
                      priority
                      fetchPriority="high"
                    />
                  </div>
                  <Dialog.Close asChild>
                    <button className="rounded-full p-2 text-gray-500 transition hover:bg-[#F3F4F6]">
                      <X className="h-5 w-5" />
                    </button>
                  </Dialog.Close>
                </div>

                <nav className="flex-1 overflow-y-auto px-6 pb-6 pt-2">
                  <ul className="space-y-1">
                    {itensDoMenu.map((item, i) => (
                      <li key={`${item.href}-${i}`}>
                        <Link
                          href={item.href || '#'}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cx('block rounded-2xl px-4 py-3 text-sm font-semibold text-[#2C3E6B] transition hover:bg-[#F3F4F6]', classeTexto(estiloMenu))}
                          style={styleMenu}
                        >
                          {item.label}
                        </Link>
                        {item.type === 'customDropdown' &&
                          item.customDropdownItems?.map((sub, j) => (
                            <Link
                              key={`${sub.href}-${j}`}
                              href={sub.href || '#'}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block rounded-2xl px-8 py-2 text-sm text-[#2C3E6B] transition hover:bg-[#F3F4F6]"
                            >
                              {sub.label}
                            </Link>
                          ))}
                      </li>
                    ))}
                  </ul>

                  {showUnitsDropdown && (
                    <div className="mt-6">
                      <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#4A4AAC]">
                        {unitsDropdownLabel}
                      </p>
                      <ul className="space-y-1">
                        {unidades.map((unit, i) => (
                          <li key={`${unit.href}-${i}`}>
                            <Link
                              href={unit.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block rounded-2xl px-4 py-3 text-sm text-[#2C3E6B] transition hover:bg-[#F3F4F6]"
                            >
                              {unit.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  )
}
