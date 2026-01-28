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
    href: '/unidades/moinhos-luciana-de-abreu',
  },
  {
    name: 'Moinhos de Vento - Barão de Santo Ângelo',
    href: '/unidades/moinhos-barao-de-santo-angelo',
  },
  {
    name: "Passo d'Areia",
    href: '/unidades/passo-dareia',
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

  return (
    <header className="sticky top-0 z-50 w-full">
      {showTopBar && (
        <div className="bg-[#2C3E6B] text-white">
          <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-2 text-xs md:px-6 lg:px-[112px]">
            <div className="flex items-center gap-2 font-semibold">
              <Clock className="h-4 w-4" />
              <span>{topBarBusinessHours}</span>
            </div>
            <p className="hidden flex-1 justify-center text-center text-sm font-medium lg:flex">
              {topBarText}
            </p>
            <nav className="hidden items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] md:flex">
              {topBarLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-[#D4A853]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className="border-b border-[#E2E8F0] bg-white/95 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex h-[100px] w-full max-w-[1440px] items-center justify-between px-4 md:px-6 lg:px-[112px]">
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

          <div className="hidden flex-1 justify-center lg:flex">
            <nav className="flex items-center gap-8 text-sm font-medium text-[#4A4AAC]">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-[#2C3E6B]"
                >
                  {item.label}
                </Link>
              ))}
              <div
                className="relative"
                onMouseEnter={() => setUnitsDropdownOpen(true)}
                onMouseLeave={() => setUnitsDropdownOpen(false)}
              >
                <button className="inline-flex items-center gap-1 text-sm font-medium text-[#4A4AAC] transition hover:text-[#2C3E6B]">
                  Unidades
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      unitsDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] rounded-xl border border-white/30 bg-white/95 p-3 shadow-2xl shadow-black/10 transition-all duration-200 ${
                    unitsDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                  }`}
                  style={{ zIndex: 100 }}
                >
                  {UNITS.map((unit, index) => (
                    <Link
                      key={unit.href}
                      href={unit.href}
                      className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm text-[#2C3E6B] transition hover:bg-[#2C3E6B]/5 hover:text-[#2C3E6B]"
                      style={{
                        transitionDelay: unitsDropdownOpen ? `${index * 40}ms` : '0ms',
                      }}
                    >
                      <span className="font-semibold">{unit.name}</span>
                      <span className="text-xs font-semibold">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+555133467668"
              onClick={handlePhoneClick}
              className="inline-flex items-center gap-2 rounded-full border border-[#D4A853] px-4 py-2 text-sm font-semibold text-[#2C3E6B] transition hover:bg-[#D4A853]/10"
            >
              <Phone className="h-4 w-4" />
              <span>(51) 3346-7668</span>
            </a>
            <a
              href="https://wa.me/555133467668"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 rounded-full bg-[#00A63E] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#00A63E]/40 transition hover:bg-[#008f32]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <Dialog.Trigger asChild>
              <button
                className="lg:hidden rounded-full p-2 text-[#2C3E6B] transition hover:bg-[#F3F4F6]"
                aria-label="Abrir menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
              <Dialog.Content className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] p-6">
                  <Dialog.Title className="text-lg font-bold text-[#2C3E6B]">Menu</Dialog.Title>
                  <Dialog.Close asChild>
                    <button className="rounded-full p-2 text-gray-500 transition hover:bg-[#F3F4F6]">
                      <X className="h-5 w-5" />
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
                          className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#2C3E6B] transition hover:bg-[#F3F4F6]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#4A4AAC]">Unidades</p>
                    {UNITS.map((unit) => (
                      <Link
                        key={unit.href}
                        href={unit.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-2xl px-4 py-3 text-sm text-[#2C3E6B] transition hover:bg-[#F3F4F6]"
                      >
                        {unit.name}
                      </Link>
                    ))}
                  </div>
                </nav>

                <div className="space-y-3 border-t border-[#E2E8F0] p-6">
                  <a
                    href="tel:+555133467668"
                    onClick={() => {
                      handlePhoneClick()
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center justify-center gap-2 rounded-full border border-[#D4A853] px-4 py-3 text-sm font-semibold text-[#2C3E6B]"
                  >
                    <Phone className="h-4 w-4" />
                    (51) 3346-7668
                  </a>
                  <a
                    href="https://wa.me/555133467668"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      handleWhatsAppClick()
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center justify-center gap-2 rounded-full bg-[#00A63E] px-4 py-3 text-sm font-semibold text-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  )
}
