import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { COMPANY_CONTACT, SOCIAL_LINKS, UNITS } from '@/lib/site-data'

const SOCIAL_ICON_MAP = {
  facebook: Facebook,
  instagram: Instagram,
} as const

export default function Footer() {
  return (
    <footer className="bg-[#2C3E6B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/Novo-Lar-Logo-7.png"
            alt="Novo Lar Geriatria"
            width={200}
            height={80}
            className="h-16 w-auto"
          />
        </div>

        {/* Grid de colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          {/* Coluna 1: Atendimento */}
          <div>
            <h3 className="text-[#D4A853] font-bold text-sm uppercase tracking-wider mb-4">
              Atendimento
            </h3>
            <div className="space-y-3">
              {UNITS.map((unit) => (
                <div key={unit.slug}>
                  <p className="text-xs text-white/70 mb-1">{unit.title}</p>
                  <a
                    href={`tel:${unit.phoneDigits}`}
                    className="flex items-center gap-2 text-white hover:text-[#D4A853] transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="font-semibold">{unit.phoneDisplay}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 2: Acessos */}
          <div>
            <h3 className="text-[#D4A853] font-bold text-sm uppercase tracking-wider mb-4">
              Acessos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/90 hover:text-[#D4A853] transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/unidades" className="text-white/90 hover:text-[#D4A853] transition-colors text-sm">
                  Unidades
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-white/90 hover:text-[#D4A853] transition-colors text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/sobre/a-novo-lar" className="text-white/90 hover:text-[#D4A853] transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/90 hover:text-[#D4A853] transition-colors text-sm">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/fotos" className="text-white/90 hover:text-[#D4A853] transition-colors text-sm">
                  Fotos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-white/90 hover:text-[#D4A853] transition-colors text-sm">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Novo Lar */}
          <div>
            <h3 className="text-[#D4A853] font-bold text-sm uppercase tracking-wider mb-4">
              Novo Lar
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-white/90 hover:text-[#D4A853] transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-white/90 hover:text-[#D4A853] transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link href="/unidades" className="text-white/90 hover:text-[#D4A853] transition-colors">
                  Nossas Unidades
                </Link>
              </li>
              <li>
                <Link href="/fotos" className="text-white/90 hover:text-[#D4A853] transition-colors">
                  Galeria de Fotos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Legal */}
          <div>
            <h3 className="text-[#D4A853] font-bold text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/politica-de-privacidade" className="text-white/90 hover:text-[#D4A853] transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="text-white/90 hover:text-[#D4A853] transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-white/90 hover:text-[#D4A853] transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {COMPANY_CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/90">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_CONTACT.city}</span>
              </li>
            </ul>
          </div>

          {/* Coluna 5: Redes Sociais */}
          <div>
            <h3 className="text-[#D4A853] font-bold text-sm uppercase tracking-wider mb-4">
              Redes Sociais
            </h3>
            <p className="text-sm text-white/90 mb-4">
              Siga-nos nas redes sociais e fique por dentro das novidades
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.icon as keyof typeof SOCIAL_ICON_MAP]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-[#D4A853] hover:border-[#D4A853] transition-all"
                    aria-label={social.label}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm text-white/70">
            &copy; {new Date().getFullYear()} Novo Lar Geriatria. Todos os direitos reservados. | Residencial Geriátrico em Porto Alegre
          </p>
        </div>
      </div>
    </footer>
  )
}
