'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle, Menu, X, Clock, ChevronDown } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'

const NAV_ITEMS = [
  { label: 'Sobre Nós', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Estrutura', href: '/sobre/estrutura' },
  { label: 'Notícias', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

const UNITS = [
  {
    name: 'Moinhos de Vento - Luciana de Abreu',
    href: '/unidades/moinhos-luciana-de-abreu'
  },
  {
    name: 'Moinhos de Vento - Barão de Santo Ângelo',
    href: '/unidades/moinhos-barao-de-santo-angelo'
  },
  {
    name: "Passo d'Areia",
    href: '/unidades/passo-dareia'
  },
]

interface HeaderProps {
  topBarLinks?: { label: string; href: string }[]
  showTopBar?: boolean
  topBarText?: string
  topBarBusinessHours?: string
}

export default function Header({
  topBarLinks = [
    { label: 'Tour e contato', href: '/sobre' },
    { label: 'Fotos', href: '/sobre/fotos' },
    { label: 'Notícias', href: '/blog' },
    { label: 'Fale Conosco', href: '/contato' },
  ],
  showTopBar = true,
  topBarText = 'Residencial Geriátrico em Porto Alegre - Novo Lar',
  topBarBusinessHours = 'Atendimento Comercial 9h-19h · Equipe 24h',
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [unitsDropdownOpen, setUnitsDropdownOpen] = useState(false)

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'click_tel',
        button_location: 'header',
      })
    }
  }

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'click_whatsapp',
        button_location: 'header',
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      {showTopBar && (
        <div className="bg-[#2C3E6B] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-10 text-xs">
              {/* Left - Business Hours */}
              <div className="hidden md:flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                <span>{topBarBusinessHours}</span>
              </div>

              {/* Center - Top Bar Text */}
              <div className="hidden lg:block text-center flex-1">
                <span className="font-medium">{topBarText}</span>
              </div>

              {/* Right - Quick Links */}
              <nav className="flex items-center gap-4">
                {topBarLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-[#D4A853] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/Novo-Lar-Logo-7.png"
                alt="Novo Lar Geriatria"
                width={160}
                height={64}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#2C3E6B] transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              {/* Unidades Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setUnitsDropdownOpen(true)}
                onMouseLeave={() => setUnitsDropdownOpen(false)}
              >
                <button className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#2C3E6B] transition-colors">
                  Unidades
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      unitsDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[320px] bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-200 origin-top ${
                    unitsDropdownOpen
                      ? 'opacity-100 scale-100 visible'
                      : 'opacity-0 scale-95 invisible'
                  }`}
                  style={{ zIndex: 100 }}
                >
                  <div className="p-2">
                    {UNITS.map((unit, index) => (
                      <Link
                        key={unit.href}
                        href={unit.href}
                        className="group block px-4 py-3 text-sm text-gray-700 hover:bg-[#2C3E6B]/5 hover:text-[#2C3E6B] rounded-lg transition-all duration-150"
                        style={{
                          transitionDelay: unitsDropdownOpen ? `${index * 30}ms` : '0ms',
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{unit.name}</span>
                          <svg
                            className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="tel:+555133467668"
                onClick={handlePhoneClick}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#2C3E6B] hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(51) 3346-7668</span>
              </a>
              <a
                href="https://wa.me/555133467668"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#10B981] text-white text-sm font-semibold rounded-lg hover:bg-[#059669] transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <Dialog.Trigger asChild>
                <button
                  className="lg:hidden p-2 text-gray-700 hover:text-[#2C3E6B] hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Abrir menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
                <Dialog.Content
                  className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl z-50 flex flex-col"
                  aria-describedby={undefined}
                >
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <Dialog.Title className="text-lg font-bold text-[#2C3E6B]">
                      Menu
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Fechar menu"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <nav className="flex-1 overflow-y-auto p-6">
                    <ul className="space-y-2">
                      {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#2C3E6B] hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}

                      {/* Unidades - Mobile */}
                      <li className="pt-2">
                        <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
                          Unidades
                        </div>
                        <ul className="space-y-1 mt-1">
                          {UNITS.map((unit) => (
                            <li key={unit.href}>
                              <Link
                                href={unit.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-[#2C3E6B] hover:bg-gray-50 rounded-lg transition-colors"
                              >
                                {unit.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>

                  <div className="p-6 border-t border-gray-200 space-y-3">
                    <a
                      href="tel:+555133467668"
                      onClick={() => {
                        handlePhoneClick()
                        setMobileMenuOpen(false)
                      }}
                      className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#2C3E6B] bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>(51) 3346-7668</span>
                    </a>
                    <a
                      href="https://wa.me/555133467668"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        handleWhatsAppClick()
                        setMobileMenuOpen(false)
                      }}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-[#10B981] text-white text-sm font-semibold rounded-lg hover:bg-[#059669] transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </header>
  )
}
