'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, ChevronDown, Calendar, MapPin, Home as HomeIcon, Building, Heart, MessageSquare, BookOpen, Mail, Sparkles, MessageCircle, Camera } from 'lucide-react'
import { UNITS, UNIT_CONTACT_GROUPS, COMPANY_CONTACT } from '@/lib/site-data'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUnitsOpen, setIsUnitsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileUnitsOpen, setMobileUnitsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
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
    setIsServicesOpen(false)
    setIsAboutOpen(false)
    setMobileUnitsOpen(false)
    setMobileServicesOpen(false)
    setMobileAboutOpen(false)
  }, [pathname])

  // Resetar submenus mobile ao fechar o menu principal
  useEffect(() => {
    if (!isMenuOpen) {
      setMobileUnitsOpen(false)
      setMobileServicesOpen(false)
      setMobileAboutOpen(false)
    }
  }, [isMenuOpen])

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-2'
            : 'bg-white/95 backdrop-blur-sm shadow-sm py-3 lg:py-4'
        }`}
      >
        <div className="w-full px-32 lg:px-52">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group"
            >
              <Image
                src="/Novo-Lar-Logo-7.png"
                alt="Novo Lar - Hospedagem Assistida com Qualidade"
                width={280}
                height={93}
                className="h-14 w-auto lg:h-20 transform group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4">
              <Link
                href="/"
                className={`font-semibold text-base px-2.5 py-3 rounded-lg transition-all relative group ${
                  isActive('/')
                    ? 'bg-[#2C3E6B] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Início
              </Link>

              {/* Units Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsUnitsOpen(true)}
                onMouseLeave={() => setIsUnitsOpen(false)}
              >
                <button
                  type="button"
                  className={`font-semibold text-base px-2.5 py-3 rounded-lg transition-all flex items-center gap-1.5 ${
                    isActive('/unidades')
                      ? 'bg-[#2C3E6B] text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={isUnitsOpen}
                >
                  Unidades
                  <ChevronDown className={`w-5 h-5 transition-transform ${isUnitsOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isUnitsOpen && (
                  <div
                    className="absolute top-full left-0 pt-0 z-[9999]"
                  >
                    <div className="w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
                    >
                    {UNITS.map((unit) => (
                      <Link
                        key={unit.slug}
                        href={`/unidades/${unit.slug}`}
                        className="block px-5 py-4 hover:bg-gradient-to-r hover:from-[#4A9B9F]/5 hover:to-[#2C3E6B]/5 transition-all border-b border-gray-100 last:border-0 group/item"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="font-semibold text-[#2C3E6B] group-hover/item:text-[#4A9B9F] transition-colors mb-1">
                              {unit.title}
                            </div>
                            <div className="text-xs text-gray-500 flex items-center gap-1.5">
                              <Phone className="w-3.5 h-3.5 text-[#D4A853]" />
                              {unit.phoneDisplay}
                            </div>
                          </div>
                          <MapPin className="w-5 h-5 text-[#D4A853] opacity-0 group-hover/item:opacity-100 transition-all transform group-hover/item:translate-x-1" />
                        </div>
                      </Link>
                    ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  type="button"
                  className={`font-semibold text-base px-2.5 py-3 rounded-lg transition-all flex items-center gap-1.5 ${
                    isActive('/servicos')
                      ? 'bg-[#2C3E6B] text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                >
                  Serviços
                  <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <div
                    className="absolute top-full left-0 pt-0 z-[9999]"
                  >
                    <div className="w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* Cuidados 24h */}
                    <div className="border-b border-gray-100">
                      <div className="px-5 py-3 bg-gradient-to-r from-[#2C3E6B]/5 to-transparent">
                        <h3 className="text-sm font-bold text-[#2C3E6B]">Cuidados 24h</h3>
                      </div>
                      <Link
                        href="/servicos/hospedagem-24h"
                        className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#4A9B9F]/5 hover:to-transparent transition-all group/item"
                      >
                        <span className="text-sm text-gray-700 group-hover/item:text-[#4A9B9F] transition-colors">Hospedagem 24h</span>
                      </Link>
                      <Link
                        href="/servicos/enfermagem-24h"
                        className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#4A9B9F]/5 hover:to-transparent transition-all group/item"
                      >
                        <span className="text-sm text-gray-700 group-hover/item:text-[#4A9B9F] transition-colors">Enfermagem 24h</span>
                      </Link>
                      <Link
                        href="/servicos/medicacao-controlada"
                        className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#4A9B9F]/5 hover:to-transparent transition-all group/item"
                      >
                        <span className="text-sm text-gray-700 group-hover/item:text-[#4A9B9F] transition-colors">Medicação Controlada</span>
                      </Link>
                    </div>

                    {/* Saúde e Bem-estar */}
                    <div className="border-b border-gray-100">
                      <div className="px-5 py-3 bg-gradient-to-r from-[#2C3E6B]/5 to-transparent">
                        <h3 className="text-sm font-bold text-[#2C3E6B]">Saúde e Bem-estar</h3>
                      </div>
                      <Link
                        href="/servicos/acompanhamento-medico"
                        className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#4A9B9F]/5 hover:to-transparent transition-all group/item"
                      >
                        <span className="text-sm text-gray-700 group-hover/item:text-[#4A9B9F] transition-colors">Acompanhamento Médico</span>
                      </Link>
                      <Link
                        href="/servicos/fisioterapia"
                        className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#4A9B9F]/5 hover:to-transparent transition-all group/item"
                      >
                        <span className="text-sm text-gray-700 group-hover/item:text-[#4A9B9F] transition-colors">Fisioterapia</span>
                      </Link>
                      <Link
                        href="/servicos/nutricao"
                        className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#4A9B9F]/5 hover:to-transparent transition-all group/item"
                      >
                        <span className="text-sm text-gray-700 group-hover/item:text-[#4A9B9F] transition-colors">Nutrição</span>
                      </Link>
                    </div>

                    {/* Atividades */}
                    <div>
                      <div className="px-5 py-3 bg-gradient-to-r from-[#2C3E6B]/5 to-transparent">
                        <h3 className="text-sm font-bold text-[#2C3E6B]">Atividades</h3>
                      </div>
                      <Link
                        href="/servicos/terapia-ocupacional"
                        className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#4A9B9F]/5 hover:to-transparent transition-all group/item"
                      >
                        <span className="text-sm text-gray-700 group-hover/item:text-[#4A9B9F] transition-colors">Terapia Ocupacional</span>
                      </Link>
                      <Link
                        href="/servicos/atividades-sociais"
                        className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#4A9B9F]/5 hover:to-transparent transition-all group/item"
                      >
                        <span className="text-sm text-gray-700 group-hover/item:text-[#4A9B9F] transition-colors">Atividades Sociais</span>
                      </Link>
                      <Link
                        href="/servicos/lazer-recreacao"
                        className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#4A9B9F]/5 hover:to-transparent transition-all group/item"
                      >
                        <span className="text-sm text-gray-700 group-hover/item:text-[#4A9B9F] transition-colors">Lazer e Recreação</span>
                      </Link>
                    </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/sobre/a-novo-lar"
                className={`font-semibold text-base px-2.5 py-3 rounded-lg transition-all ${
                  isActive('/sobre')
                    ? 'bg-[#2C3E6B] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Sobre Nós
              </Link>

              <Link
                href="/blog"
                className={`font-semibold text-base px-2.5 py-3 rounded-lg transition-all ${
                  isActive('/blog')
                    ? 'bg-[#2C3E6B] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Notícias
              </Link>

              <Link
                href="/fotos"
                className={`font-semibold text-base px-2.5 py-3 rounded-lg transition-all ${
                  isActive('/fotos')
                    ? 'bg-[#2C3E6B] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Fotos
              </Link>

              <Link
                href="/contato"
                className={`font-semibold text-base px-2.5 py-3 rounded-lg transition-all ${
                  isActive('/contato')
                    ? 'bg-[#2C3E6B] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Fale Conosco
              </Link>
            </nav>

            {/* Desktop Contact Info */}
            <div className="hidden lg:flex items-center gap-1.5">
              {/* Telefones lado a lado */}
              <div className="flex items-center gap-1.5">
                {/* Telefone 1 */}
                <a
                  href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).dataLayer) {
                      (window as any).dataLayer.push({
                        event: 'click_tel',
                        phone_number: COMPANY_CONTACT.centralPhoneDigits,
                        location: 'header',
                      })
                    }
                  }}
                  className="flex flex-col hover:bg-gray-50 px-2.5 py-2 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Phone className="w-3.5 h-3.5 text-[#4A9B9F]" />
                    <span className="text-xs font-medium text-gray-600">Telefone</span>
                  </div>
                  <span className="text-[#2C3E6B] font-bold text-sm group-hover:text-[#4A9B9F] transition-colors">
                    {COMPANY_CONTACT.centralPhoneDisplay}
                  </span>
                  <span className="text-[10px] text-gray-500 mt-0.5">Moinhos / Barão</span>
                </a>

                {/* Divisor */}
                <div className="h-12 w-px bg-gray-300"></div>

                {/* Telefone 2 */}
                <a
                  href="tel:5133769462"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).dataLayer) {
                      (window as any).dataLayer.push({
                        event: 'click_tel',
                        phone_number: '5133769462',
                        location: 'header',
                      })
                    }
                  }}
                  className="flex flex-col hover:bg-gray-50 px-2.5 py-2 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Phone className="w-3.5 h-3.5 text-[#4A9B9F]" />
                    <span className="text-xs font-medium text-gray-600">Telefone</span>
                  </div>
                  <span className="text-[#2C3E6B] font-bold text-sm group-hover:text-[#4A9B9F] transition-colors">
                    (51) 3376.9462
                  </span>
                  <span className="text-[10px] text-gray-500 mt-0.5">Passo d'Areia</span>
                </a>
              </div>

              {/* WhatsApp com texto */}
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre a Novo Lar Geriatria.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).dataLayer) {
                    (window as any).dataLayer.push({
                      event: 'click_whatsapp',
                      button_location: 'header',
                      phone_number: COMPANY_CONTACT.whatsappDigits,
                    })
                  }
                }}
                className="flex items-center gap-2 bg-[#25D366] text-white px-3.5 py-2.5 rounded-lg font-semibold hover:bg-[#22c55e] transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
                aria-label="Falar no WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#2C3E6B] hover:bg-gray-100 rounded-lg transition-colors"
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
      <div className={`transition-all duration-300 ${isScrolled ? 'h-16 lg:h-20' : 'h-20 lg:h-28'}`}></div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 right-0 bg-gradient-to-b from-white to-gray-50 shadow-2xl max-h-screen overflow-y-auto transition-all duration-300 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header do Menu Mobile */}
          <div className="sticky top-0 bg-gradient-to-r from-[#2C3E6B] to-[#4A9B9F] px-5 py-5 flex items-center justify-between shadow-md z-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/10 rounded-lg backdrop-blur-sm">
                <Menu className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg">Menu de Navegação</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2.5 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <nav className="px-5 py-8 space-y-4">
            {/* Início */}
            <Link
              href="/"
              className={`flex items-center gap-4 px-5 py-4 rounded-xl font-semibold transition-all shadow-sm ${
                isActive('/')
                  ? 'bg-gradient-to-r from-[#2C3E6B] to-[#1f2d4f] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md'
              }`}
            >
              <div className={`p-2.5 rounded-lg ${isActive('/') ? 'bg-white/20' : 'bg-[#2C3E6B]/10'}`}>
                <HomeIcon className={`w-5 h-5 ${isActive('/') ? 'text-white' : 'text-[#2C3E6B]'}`} />
              </div>
              <span className="text-base">Início</span>
            </Link>

            {/* Nossas Unidades - Expansível */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => setMobileUnitsOpen(!mobileUnitsOpen)}
                className={`w-full flex items-center justify-between gap-4 px-5 py-4 font-semibold transition-all ${
                  isActive('/unidades')
                    ? 'bg-gradient-to-r from-[#2C3E6B] to-[#1f2d4f] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-lg ${isActive('/unidades') ? 'bg-white/20' : 'bg-[#2C3E6B]/10'}`}>
                    <Building className={`w-5 h-5 ${isActive('/unidades') ? 'text-white' : 'text-[#2C3E6B]'}`} />
                  </div>
                  <span className="text-base">Nossas Unidades</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileUnitsOpen ? 'rotate-180' : ''} ${isActive('/unidades') ? 'text-white' : 'text-gray-400'}`} />
              </button>

              {/* Submenu de Unidades */}
              <div className={`transition-all duration-300 ${mobileUnitsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-3 py-3 space-y-2 bg-gray-50/50">
                  {UNITS.map((unit) => (
                    <Link
                      key={unit.slug}
                      href={`/unidades/${unit.slug}`}
                      className={`block px-4 py-3.5 rounded-lg font-medium transition-all ${
                        pathname === `/unidades/${unit.slug}`
                          ? 'bg-gradient-to-r from-[#4A9B9F] to-[#3d8b8f] text-white shadow-sm'
                          : 'text-gray-700 hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <MapPin className={`w-4 h-4 flex-shrink-0 ${pathname === `/unidades/${unit.slug}` ? 'text-white' : 'text-[#D4A853]'}`} />
                          <span className="text-sm truncate">{unit.title}</span>
                        </div>
                        <span className={`text-xs flex-shrink-0 ${pathname === `/unidades/${unit.slug}` ? 'text-white/80' : 'text-gray-500'}`}>
                          {unit.phoneDisplay}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Nossos Serviços - Expansível */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex items-center justify-between gap-4 px-5 py-4 font-semibold transition-all ${
                  isActive('/servicos')
                    ? 'bg-gradient-to-r from-[#2C3E6B] to-[#1f2d4f] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-lg ${isActive('/servicos') ? 'bg-white/20' : 'bg-[#2C3E6B]/10'}`}>
                    <Sparkles className={`w-5 h-5 ${isActive('/servicos') ? 'text-white' : 'text-[#2C3E6B]'}`} />
                  </div>
                  <span className="text-base">Nossos Serviços</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''} ${isActive('/servicos') ? 'text-white' : 'text-gray-400'}`} />
              </button>

              {/* Submenu de Serviços */}
              <div className={`transition-all duration-300 ${mobileServicesOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-3 py-3 space-y-4 bg-gray-50/50">
                  {/* Cuidados 24h */}
                  <div>
                    <div className="px-4 py-2 text-xs font-bold text-[#2C3E6B] uppercase tracking-wider">Cuidados 24h</div>
                    <div className="space-y-1">
                      <Link
                        href="/servicos/hospedagem-24h"
                        className="block px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white hover:shadow-sm transition-all"
                      >
                        Hospedagem 24h
                      </Link>
                      <Link
                        href="/servicos/enfermagem-24h"
                        className="block px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white hover:shadow-sm transition-all"
                      >
                        Enfermagem 24h
                      </Link>
                      <Link
                        href="/servicos/medicacao-controlada"
                        className="block px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white hover:shadow-sm transition-all"
                      >
                        Medicação Controlada
                      </Link>
                    </div>
                  </div>

                  {/* Saúde e Bem-estar */}
                  <div>
                    <div className="px-4 py-2 text-xs font-bold text-[#2C3E6B] uppercase tracking-wider">Saúde e Bem-estar</div>
                    <div className="space-y-1">
                      <Link
                        href="/servicos/acompanhamento-medico"
                        className="block px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white hover:shadow-sm transition-all"
                      >
                        Acompanhamento Médico
                      </Link>
                      <Link
                        href="/servicos/fisioterapia"
                        className="block px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white hover:shadow-sm transition-all"
                      >
                        Fisioterapia
                      </Link>
                      <Link
                        href="/servicos/nutricao"
                        className="block px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white hover:shadow-sm transition-all"
                      >
                        Nutrição
                      </Link>
                    </div>
                  </div>

                  {/* Atividades */}
                  <div>
                    <div className="px-4 py-2 text-xs font-bold text-[#2C3E6B] uppercase tracking-wider">Atividades</div>
                    <div className="space-y-1">
                      <Link
                        href="/servicos/terapia-ocupacional"
                        className="block px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white hover:shadow-sm transition-all"
                      >
                        Terapia Ocupacional
                      </Link>
                      <Link
                        href="/servicos/atividades-sociais"
                        className="block px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white hover:shadow-sm transition-all"
                      >
                        Atividades Sociais
                      </Link>
                      <Link
                        href="/servicos/lazer-recreacao"
                        className="block px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white hover:shadow-sm transition-all"
                      >
                        Lazer e Recreação
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conheça a Novo Lar */}
            <Link
              href="/sobre/a-novo-lar"
              className={`flex items-center gap-4 px-5 py-4 rounded-xl font-semibold transition-all shadow-sm ${
                isActive('/sobre')
                  ? 'bg-gradient-to-r from-[#2C3E6B] to-[#1f2d4f] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md'
              }`}
            >
              <div className={`p-2.5 rounded-lg ${isActive('/sobre') ? 'bg-white/20' : 'bg-[#2C3E6B]/10'}`}>
                <Heart className={`w-5 h-5 ${isActive('/sobre') ? 'text-white' : 'text-[#2C3E6B]'}`} />
              </div>
              <span className="text-base">Conheça a Novo Lar</span>
            </Link>

            {/* Notícias */}
            <Link
              href="/blog"
              className={`flex items-center gap-4 px-5 py-4 rounded-xl font-semibold transition-all shadow-sm ${
                isActive('/blog')
                  ? 'bg-gradient-to-r from-[#2C3E6B] to-[#1f2d4f] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md'
              }`}
            >
              <div className={`p-2.5 rounded-lg ${isActive('/blog') ? 'bg-white/20' : 'bg-[#2C3E6B]/10'}`}>
                <BookOpen className={`w-5 h-5 ${isActive('/blog') ? 'text-white' : 'text-[#2C3E6B]'}`} />
              </div>
              <span className="text-base">Notícias</span>
            </Link>

            {/* Fotos */}
            <Link
              href="/fotos"
              className={`flex items-center gap-4 px-5 py-4 rounded-xl font-semibold transition-all shadow-sm ${
                isActive('/fotos')
                  ? 'bg-gradient-to-r from-[#2C3E6B] to-[#1f2d4f] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md'
              }`}
            >
              <div className={`p-2.5 rounded-lg ${isActive('/fotos') ? 'bg-white/20' : 'bg-[#2C3E6B]/10'}`}>
                <Camera className={`w-5 h-5 ${isActive('/fotos') ? 'text-white' : 'text-[#2C3E6B]'}`} />
              </div>
              <span className="text-base">Fotos</span>
            </Link>

            {/* Fale Conosco */}
            <Link
              href="/contato"
              className={`flex items-center gap-4 px-5 py-4 rounded-xl font-semibold transition-all shadow-sm ${
                isActive('/contato')
                  ? 'bg-gradient-to-r from-[#2C3E6B] to-[#1f2d4f] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md'
              }`}
            >
              <div className={`p-2.5 rounded-lg ${isActive('/contato') ? 'bg-white/20' : 'bg-[#2C3E6B]/10'}`}>
                <MessageSquare className={`w-5 h-5 ${isActive('/contato') ? 'text-white' : 'text-[#2C3E6B]'}`} />
              </div>
              <span className="text-base">Fale Conosco</span>
            </Link>

            {/* Footer do Menu Mobile */}
            <div className="pt-6 pb-4">
              <div className="text-center text-sm text-gray-500">
                <p className="font-semibold text-[#2C3E6B]">Novo Lar Geriatria</p>
                <p className="mt-1 text-xs">Hospedagem Assistida com Qualidade®</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
