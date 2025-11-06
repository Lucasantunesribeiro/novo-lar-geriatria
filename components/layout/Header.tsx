'use client'

import { useState, useEffect, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, MapPin, Home as HomeIcon, Building, Sparkles, Stethoscope, Activity, Utensils, Pill, Package, Phone } from 'lucide-react'
import { UNITS, COMPANY_CONTACT } from '@/lib/site-data'
import { SERVICE_MENU_GROUPS } from '@/lib/services-data'

export default function Header() {
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

  const TOP_HEADER_LINKS = [
    { label: 'Tour e contato', href: '/sobre' },
    { label: 'Fotos', href: '/fotos' },
    { label: 'Notícias', href: '/blog' },
    { label: 'Fale Conosco', href: '/contato' },
  ]

  const DESKTOP_CONTACT_LINKS = [
    {
      id: 'central',
      label: 'Central Novo Lar',
      phoneDisplay: COMPANY_CONTACT.centralPhoneDisplay,
      phoneDigits: COMPANY_CONTACT.centralPhoneDigits,
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

  const SERVICE_NAV_ITEMS = SERVICE_MENU_GROUPS.map((group) => ({
    type: 'dropdown' as const,
    id: group.id,
    label: group.title,
    description: group.description,
    items: group.items,
  }))

  const PRIMARY_NAV = [
    ...SERVICE_NAV_ITEMS,
    { type: 'link' as const, id: 'fotos', label: 'Fotos', href: '/fotos' },
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
            className={`px-3 py-1.5 text-[0.92rem] rounded-lg font-semibold transition-all flex items-center gap-1 whitespace-nowrap ${
              isActive('/unidades')
                ? 'bg-[#2C3E6B] text-white'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            aria-haspopup="true"
            aria-expanded={isUnitsOpen}
          >
            Unidades
            <ChevronDown className={`w-[1.05rem] h-[1.05rem] transition-transform ${isUnitsOpen ? 'rotate-180' : ''}`} />
          </button>

          {isUnitsOpen && (
            <div className="absolute top-full left-0 pt-2 z-[9999]">
              <div className="w-72 rounded-xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
                {UNITS.map((unit) => (
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
                className={`px-3 py-1.5 text-[0.92rem] rounded-lg font-semibold whitespace-nowrap transition ${
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
            className={`px-3 py-1.5 text-[0.92rem] rounded-lg font-semibold whitespace-nowrap transition flex items-center gap-1 ${
              isOpen || isGroupActive ? 'bg-[#2C3E6B] text-white' : 'text-gray-700 hover:bg-gray-50'
            }`}
              aria-haspopup="true"
              aria-expanded={isOpen}
              onClick={() => setOpenDropdown(isOpen ? null : item.id)}
            >
              {item.label}
              <ChevronDown className={`w-[1.05rem] h-[1.05rem] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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
            {UNITS.map((unit) => (
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
            {SERVICE_MENU_GROUPS.flatMap((group) =>
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
          href="/fotos"
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
          href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
          className="flex items-center justify-center gap-2 w-full px-4 py-3 text-white bg-[#2C3E6B] rounded-lg font-semibold hover:bg-[#1f2d4f]"
          onClick={() => setIsMenuOpen(false)}
        >
          <Phone className="w-4 h-4" />
          {COMPANY_CONTACT.centralPhoneDisplay}
        </a>
        <a
          href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-3 text-white bg-[#25D366] rounded-lg font-semibold hover:bg-[#20BD5A]"
          onClick={() => setIsMenuOpen(false)}
        >
          <i className="bi bi-whatsapp text-lg"></i>
          WhatsApp
        </a>
      </div>
    </div>
  )
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        {!isScrolled && (
          <div className="border-b border-gray-100 bg-gradient-to-r from-[#2C3E6B] via-[#1f2d4f] to-[#2C3E6B] py-2.5">
            <div className="mx-auto flex flex-col gap-1.5 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-22 xl:px-28 2xl:px-32">
              {/* Mobile: apenas título */}
              <div className="text-xs font-semibold uppercase tracking-widest text-white/90 lg:hidden">
              Residencial Geriátrico em Porto Alegre - Novo Lar
              </div>

              {/* Desktop: layout completo */}
              <div className="hidden text-[11px] font-semibold uppercase tracking-widest text-white/90 lg:block">
                Residencial Geriátrico em Porto Alegre - Novo Lar
              </div>
              <div className="hidden flex-wrap items-center justify-center gap-4 text-[13px] font-semibold text-white/90 lg:flex">
                {TOP_HEADER_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="hidden text-[13px] font-semibold text-white/90 lg:block">
                Atendimento Comercial 9h-19h · Equipe 24h
              </div>
            </div>
          </div>
        )}
        <div className="px-4 sm:px-6 lg:px-[9rem] xl:px-[11rem] 2xl:px-[13rem]">
          <div className="hidden lg:flex w-full items-center justify-between gap-12 py-2 max-w-full mx-auto pr-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group flex-shrink-0 lg:ml-8 xl:ml-12"
            >
              <Image
                src="/Novo-Lar-Logo-7.png"
                alt="Novo Lar - Hospedagem Assistida com Qualidade"
                width={240}
                height={80}
                className="h-14 w-auto lg:h-16 transform group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>

            {/* Navegação + contatos (desktop) */}
            <nav className="hidden lg:flex flex-1 min-w-0 items-center justify-center gap-4 text-[0.9rem] font-semibold text-gray-700 whitespace-nowrap mx-auto">
              {navItems.map((navItem) => (
                <Fragment key={navItem.key}>{navItem.element}</Fragment>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4 flex-shrink-0 ml-4 lg:mr-10">
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
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#2C3E6B] bg-white px-4 py-2 shadow transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2C3E6B] text-white transition-all group-hover:scale-110">
                      <Phone className="h-[18px] w-[18px]" aria-hidden />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Ligue agora</span>
                      <span className="text-[14px] font-bold text-[#2C3E6B]">{contact.phoneDisplay}</span>
                    </div>
                  </a>
              ))}
              <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre a Novo Lar Geriatria.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).dataLayer) {
                      ;(window as any).dataLayer.push({
                        event: 'click_whatsapp',
                        button_location: 'header',
                        phone_number: COMPANY_CONTACT.whatsappDigits,
                      })
                    }
                  }}
                  className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#25D366] to-[#20BD5A] px-4 py-2 shadow transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  aria-label="Falar no WhatsApp"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all group-hover:scale-110">
                    <i className="bi bi-whatsapp text-white text-lg" aria-hidden="true"></i>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">Fale conosco</span>
                    <span className="text-[14px] font-bold text-white">WhatsApp</span>
                  </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#2C3E6B] hover:bg-gray-100 rounded-lg transition-colors ml-auto"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Header Spacer - Compensa altura do header fixo */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-20' : 'h-32'}`}></div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`fixed left-0 right-0 bottom-0 bg-white shadow-lg overflow-y-auto transition-all duration-300 ${
              isScrolled ? 'top-20' : 'top-32'
            }`}
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
