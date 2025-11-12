'use client'

import { useState, useEffect, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, MapPin, Home as HomeIcon, Building, Sparkles, Stethoscope, Activity, Utensils, Pill, Package, Phone, MessageCircle } from 'lucide-react'

type UnitInfo = {
  slug: string
  name: string
  title: string
  address: string
  neighborhood: string
  phoneDisplay: string
  phoneDigits: string
  whatsapp: string
  group: 'moinhos' | 'passo-dareia'
}

type CompanyContact = {
  centralPhoneDisplay: string
  centralPhoneDigits: string
  whatsappDigits: string
  email: string
  city: string
  visitation: string
}

type TopBarLink = {
  label: string
  href: string
}

type ServiceMenuItem = {
  id: string
  title: string
  summary: string
  href: string
}

type ServiceMenuGroup = {
  id: string
  title: string
  description: string
  items: ServiceMenuItem[]
}

type HeaderProps = {
  units: UnitInfo[]
  companyContact: CompanyContact
  topBarLinks: TopBarLink[]
  showTopBar: boolean
  topBarText: string
  topBarBusinessHours: string
  serviceMenuGroups: ServiceMenuGroup[]
}

export default function Header({
  units,
  companyContact,
  topBarLinks,
  showTopBar,
  topBarText,
  topBarBusinessHours,
  serviceMenuGroups,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUnitsOpen, setIsUnitsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileUnitsOpen, setMobileUnitsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsUnitsOpen(false)
    setOpenDropdown(null)
    setMobileUnitsOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  // Resetar submenus mobile ao fechar o menu principal
  useEffect(() => {
    if (!isMenuOpen) {
      setMobileUnitsOpen(false)
      setMobileServicesOpen(false)
    }
  }, [isMenuOpen])
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  const DESKTOP_CONTACT_LINKS = [
    {
      id: 'central',
      label: 'Central Novo Lar',
      phoneDisplay: companyContact.centralPhoneDisplay,
      phoneDigits: companyContact.centralPhoneDigits,
      analyticsKey: 'central_phone',
    },
  ] as const

  const SERVICE_ICON_MAP = {
    geriatria: HomeIcon,
    'medico-enfermagem': Stethoscope,
    nutricao: Utensils,
    'terapia-ocupacional': Activity,
    musicoterapia: Sparkles,
    lavanderia: Package,
    'convenio-farmacia': Pill,
  } as const

  const SERVICE_NAV_ITEMS = serviceMenuGroups.map((group) => ({
    type: 'dropdown' as const,
    id: group.id,
    label: group.title,
    description: group.description,
    items: group.items,
  }))

  const PRIMARY_NAV = [
    ...SERVICE_NAV_ITEMS,
    { type: 'link' as const, id: 'fotos', label: 'Fotos', href: '/sobre/fotos' },
  ]

  const navItems = [
    {
      key: 'units',
      element: (
        <div
          className="relative"
          onMouseEnter={() => setIsUnitsOpen(true)}
          onMouseLeave={() => setIsUnitsOpen(false)}
        >
          <button
            type="button"
            className={`px-1.5 py-1.5 min-[1140px]:px-2 min-[1140px]:py-1.5 xl:px-2.5 xl:py-2 min-[1380px]:px-3 min-[1380px]:py-2 2xl:px-3.5 2xl:py-2 rounded-lg font-semibold transition-all flex items-center gap-0.5 min-[1140px]:gap-1 min-[1380px]:gap-1.5 whitespace-nowrap ${
              isActive('/unidades')
                ? 'bg-[#2C3E6B] text-white'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            aria-haspopup="true"
            aria-expanded={isUnitsOpen}
          >
            Unidades
            <ChevronDown className={`w-3 h-3 min-[1140px]:w-3.5 min-[1140px]:h-3.5 xl:w-3.5 xl:h-3.5 min-[1380px]:w-4 min-[1380px]:h-4 2xl:w-[1.05rem] 2xl:h-[1.05rem] transition-transform ${isUnitsOpen ? 'rotate-180' : ''}`} />
          </button>

          {isUnitsOpen && (
            <div className="absolute top-full left-0 pt-2 z-[9999]">
              <div className="w-72 rounded-xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
                {units.map((unit) => (
                  <Link
                    key={unit.slug}
                    href={`/unidades/${unit.slug}`}
                    className="block px-5 py-4 border-b border-gray-100 last:border-none transition hover:bg-[#f7f9fc]"
                  >
                    <span className="block text-sm font-semibold text-[#2C3E6B]">{unit.title}</span>
                    <span className="mt-1 block text-xs text-gray-500">{unit.phoneDisplay}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ),
    },
    ...PRIMARY_NAV.map((item) => {
      if (item.type === 'link') {
          return {
            key: item.id,
            element: (
              <Link
                href={item.href}
                className={`px-1.5 py-1.5 min-[1140px]:px-2 min-[1140px]:py-1.5 xl:px-2.5 xl:py-2 min-[1380px]:px-3 min-[1380px]:py-2 2xl:px-3.5 2xl:py-2 rounded-lg font-semibold whitespace-nowrap transition ${
                  isActive(item.href)
                    ? 'bg-[#2C3E6B] text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
              {item.label}
            </Link>
          ),
        }
      }

      const isOpen = openDropdown === item.id
      const isGroupActive = item.items.some((subItem) => isActive(subItem.href))

      return {
        key: item.id,
        element: (
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown(item.id)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
          <button
            type="button"
            className={`px-1.5 py-1.5 min-[1140px]:px-2 min-[1140px]:py-1.5 xl:px-2.5 xl:py-2 min-[1380px]:px-3 min-[1380px]:py-2 2xl:px-3.5 2xl:py-2 rounded-lg font-semibold whitespace-nowrap transition flex items-center gap-0.5 min-[1140px]:gap-1 min-[1380px]:gap-1.5 ${
              isOpen || isGroupActive ? 'bg-[#2C3E6B] text-white' : 'text-gray-700 hover:bg-gray-50'
            }`}
              aria-haspopup="true"
              aria-expanded={isOpen}
              onClick={() => setOpenDropdown(isOpen ? null : item.id)}
            >
              {item.label}
              <ChevronDown className={`w-3 h-3 min-[1140px]:w-3.5 min-[1140px]:h-3.5 xl:w-3.5 xl:h-3.5 min-[1380px]:w-4 min-[1380px]:h-4 2xl:w-[1.05rem] 2xl:h-[1.05rem] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="absolute top-full left-0 pt-2 z-[9999] w-[22rem] rounded-xl border border-gray-200 bg-white shadow-2xl">
                <div className="grid gap-1 px-4 py-4">
                  {item.items.map((subItem) => {
                    const Icon = SERVICE_ICON_MAP[subItem.id as keyof typeof SERVICE_ICON_MAP] ?? Sparkles
                    return (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="flex items-start gap-3 rounded-lg px-3 py-3 transition hover:bg-[#f7f9fc]"
                      >
                        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-md bg-[#2C3E6B]/10 text-[#2C3E6B]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-[#2C3E6B]">{subItem.title}</p>
                          {subItem.summary && (
                            <p className="text-xs text-gray-500 leading-snug">{subItem.summary}</p>
                          )}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        ),
      }
    }),
  ]

  const renderMobileMenuContent = () => (
    <div className="space-y-3">
      {/* Unidades */}
      <div>
        <button
          onClick={() => setMobileUnitsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between px-4 py-3 font-semibold text-gray-900 bg-gray-50 rounded-lg"
        >
          <span>Nossas Unidades</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${mobileUnitsOpen ? 'rotate-180' : ''}`} />
        </button>
        {mobileUnitsOpen && (
          <div className="mt-2 space-y-1 pl-2">
            {units.map((unit) => (
              <Link
                key={unit.slug}
                href={`/unidades/${unit.slug}`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {unit.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Serviços */}
      <div>
        <button
          onClick={() => setMobileServicesOpen((prev) => !prev)}
          className="flex w-full items-center justify-between px-4 py-3 font-semibold text-gray-900 bg-gray-50 rounded-lg"
        >
          <span>Serviços</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
        </button>
        {mobileServicesOpen && (
          <div className="mt-2 space-y-1 pl-2">
            {serviceMenuGroups.flatMap((group) =>
              group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))
            )}
          </div>
        )}
      </div>

      {/* Links diretos */}
      <div className="space-y-1">
        <Link
          href="/sobre"
          className="block px-4 py-3 font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMenuOpen(false)}
        >
          Sobre
        </Link>
        <Link
          href="/sobre/fotos"
          className="block px-4 py-3 font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMenuOpen(false)}
        >
          Fotos
        </Link>
        <Link
          href="/blog"
          className="block px-4 py-3 font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </Link>
        <Link
          href="/contato"
          className="block px-4 py-3 font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMenuOpen(false)}
        >
          Contato
        </Link>
      </div>

      {/* Botões de contato */}
      <div className="space-y-2 pt-4 border-t border-gray-200">
        <a
          href={`tel:${companyContact.centralPhoneDigits}`}
          className="flex items-center justify-center gap-2 w-full px-4 py-3 text-white bg-[#2C3E6B] rounded-lg font-semibold hover:bg-[#1f2d4f]"
          onClick={() => setIsMenuOpen(false)}
        >
          <Phone className="w-4 h-4" />
          {companyContact.centralPhoneDisplay}
        </a>
        <a
          href={`https://wa.me/${companyContact.whatsappDigits}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-3 text-white bg-[#25D366] rounded-lg font-semibold hover:bg-[#20BD5A]"
          onClick={() => setIsMenuOpen(false)}
        >
          <MessageCircle className="text-lg" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  )

  const mobileMenuTopClass = isScrolled ? 'top-20' : 'top-32'
  const headerSpacerClass = isScrolled ? 'h-20' : 'h-32'
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        {showTopBar && !isScrolled && (
          <div className="border-b border-gray-100 bg-gradient-to-r from-[#2C3E6B] via-[#1f2d4f] to-[#2C3E6B] py-2">
            <div className="mx-auto flex flex-col gap-1.5 px-3 text-center sm:flex-row sm:items-center sm:justify-between sm:px-4 lg:px-16 xl:px-24 2xl:px-28">
              {/* Mobile: apenas título */}
              <div className="text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white/90 lg:hidden">
                {topBarText}
              </div>

              {/* Desktop: layout completo */}
              <div className="hidden text-[10px] font-semibold uppercase tracking-widest text-white/90 lg:block">
                {topBarText}
              </div>
              <div className="hidden flex-wrap items-center justify-center gap-3 text-[12px] font-semibold text-white/90 lg:flex">
                {topBarLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="hidden min-[1145px]:block text-[12px] font-semibold text-white/90">
                {topBarBusinessHours}
              </div>
            </div>
          </div>
        )}
        <div className="px-4 sm:px-6 lg:px-10 xl:px-12">
          {/* Mobile logo row */}
          <div className="flex items-center justify-between py-3 lg:hidden">
            <Link href="/" className="flex items-center" aria-label="Novo Lar Geriatria">
              <Image
                src="/Novo-Lar-Logo-7.png"
                alt="Novo Lar - Hospedagem Assistida com Qualidade"
                width={180}
                height={56}
                className="h-12 w-auto"
                priority
                loading="eager"
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg p-2 text-[#2C3E6B] transition-colors hover:bg-gray-100"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-nowrap w-full items-center gap-1 min-[1140px]:gap-1.5 xl:gap-2 min-[1380px]:gap-3 py-4 max-w-screen-2xl mx-auto">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group flex-shrink-0"
            >
              <Image
                src="/Novo-Lar-Logo-7.png"
                alt="Novo Lar - Hospedagem Assistida com Qualidade"
                width={200}
                height={68}
                className="h-10 w-auto min-[1140px]:h-11 xl:h-12 min-[1380px]:h-14 transform group-hover:scale-105 transition-transform duration-300"
                priority
                loading="eager"
              />
            </Link>

            {/* Navegação + contatos (desktop) */}
            <nav className="hidden lg:flex flex-1 min-w-0 items-center justify-center gap-0 min-[1140px]:gap-0.5 xl:gap-1 min-[1380px]:gap-1.5 2xl:gap-2 text-[0.8rem] min-[1140px]:text-[0.825rem] xl:text-[0.85rem] min-[1380px]:text-[0.9rem] 2xl:text-base font-semibold text-gray-700 whitespace-nowrap">
              {navItems.map((navItem) => (
                <Fragment key={navItem.key}>{navItem.element}</Fragment>
              ))}
            </nav>

            <div className="hidden lg:flex flex-shrink-0 items-center gap-1 min-[1140px]:gap-1.5 xl:gap-1.5 min-[1380px]:gap-2 2xl:gap-3">
              {DESKTOP_CONTACT_LINKS.map((contact) => (
                  <a
                    key={contact.id}
                    href={`tel:${contact.phoneDigits}`}
                    aria-label={`Ligar para ${contact.phoneDisplay}`}
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).dataLayer) {
                        ;(window as any).dataLayer.push({
                          event: 'click_tel',
                          phone_number: contact.phoneDigits,
                          location: 'header_main',
                        })
                      }
                    }}
                  className="group inline-flex items-center gap-1 min-[1140px]:gap-1.5 xl:gap-1.5 min-[1380px]:gap-2 rounded-lg border border-[#2C3E6B] bg-white px-1.5 py-3 min-[1140px]:px-2 min-[1140px]:py-3 xl:px-2.5 xl:py-2.5 min-[1380px]:px-3 min-[1380px]:py-2.5 2xl:px-4 2xl:py-3 text-[0.78rem] font-semibold shadow transition-all hover:-translate-y-0.5 hover:shadow-lg w-[95px] min-[1140px]:w-[110px] xl:w-[140px] min-[1380px]:w-[180px] 2xl:w-[215px]"
                  >
                    <div className="flex h-8 w-8 min-[1140px]:h-8 min-[1140px]:w-8 xl:h-9 xl:w-9 min-[1380px]:h-10 min-[1380px]:w-10 items-center justify-center rounded-full bg-[#2C3E6B] text-white transition-all group-hover:scale-110">
                      <Phone className="h-[13px] w-[13px] min-[1140px]:h-[14px] min-[1140px]:w-[14px] xl:h-[15px] xl:w-[15px] min-[1380px]:h-[18px] min-[1380px]:w-[18px]" aria-hidden />
                    </div>
                    <div className="flex flex-col leading-tight text-left">
                      <span className="text-[0.48rem] min-[1140px]:text-[0.5rem] xl:text-[0.52rem] min-[1380px]:text-[0.6rem] font-bold uppercase tracking-wider text-gray-500">Ligue agora</span>
                      <span className="text-[0.75rem] min-[1140px]:text-[0.8rem] xl:text-[0.82rem] min-[1380px]:text-[0.95rem] 2xl:text-[1rem] font-bold text-[#2C3E6B]">{contact.phoneDisplay}</span>
                    </div>
                  </a>
              ))}
              <a
                  href={`https://wa.me/${companyContact.whatsappDigits}?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre a Novo Lar Geriatria.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).dataLayer) {
                      ;(window as any).dataLayer.push({
                        event: 'click_whatsapp',
                        button_location: 'header',
                        phone_number: companyContact.whatsappDigits,
                      })
                    }
                  }}
                  className="group inline-flex items-center gap-1 min-[1140px]:gap-1.5 xl:gap-1.5 min-[1380px]:gap-2 rounded-lg bg-gradient-to-r from-[#25D366] to-[#20BD5A] px-1.5 py-3 min-[1140px]:px-2 min-[1140px]:py-3 xl:px-2.5 xl:py-2.5 min-[1380px]:px-3 min-[1380px]:py-2.5 2xl:px-4 2xl:py-3 text-[0.78rem] font-semibold text-white shadow transition-all hover:-translate-y-0.5 hover:shadow-lg w-[95px] min-[1140px]:w-[110px] xl:w-[140px] min-[1380px]:w-[180px] 2xl:w-[215px]"
                  aria-label="Falar no WhatsApp"
                >
                  <div className="flex h-8 w-8 min-[1140px]:h-8 min-[1140px]:w-8 xl:h-9 xl:w-9 min-[1380px]:h-10 min-[1380px]:w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all group-hover:scale-110">
                    <MessageCircle className="text-white text-[13px] min-[1140px]:text-[14px] xl:text-[15px] min-[1380px]:text-[18px]" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col leading-tight text-left">
                    <span className="text-[0.45rem] min-[1140px]:text-[0.48rem] xl:text-[0.5rem] min-[1380px]:text-[0.6rem] font-bold uppercase tracking-wider text-white/80">Fale conosco</span>
                    <span className="text-[0.75rem] min-[1140px]:text-[0.8rem] xl:text-[0.82rem] min-[1380px]:text-[0.95rem] 2xl:text-[1rem] font-bold">WhatsApp</span>
                  </div>
                </a>
            </div>
          </div>
        </div>
      </header>

      {/* Header Spacer - Compensa altura do header fixo */}
      <div className={`transition-all duration-300 ${headerSpacerClass}`}></div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`fixed left-0 right-0 bottom-0 bg-white shadow-lg overflow-y-auto transition-all duration-300 ${mobileMenuTopClass}`}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="px-4 py-6">
              {renderMobileMenuContent()}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
