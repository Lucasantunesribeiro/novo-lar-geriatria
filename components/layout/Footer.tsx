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
            <h3 className="text-[#A67C2F] font-bold text-sm uppercase tracking-wider mb-4">
              Atendimento
            </h3>
            <div className="space-y-3">
              {UNITS.map((unit) => (
                <div key={unit.slug}>
                  <p className="text-xs text-white/70 mb-1">{unit.title}</p>
                  <a
                    href={`tel:${unit.phoneDigits}`}
                    className="inline-flex items-center gap-2 min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#A67C2F]"
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
            <h3 className="text-[#A67C2F] font-bold text-sm uppercase tracking-wider mb-4">
              Acessos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-sm text-white transition-colors hover:text-[#A67C2F]"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/unidades"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-sm text-white transition-colors hover:text-[#A67C2F]"
                >
                  Unidades
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-sm text-white transition-colors hover:text-[#A67C2F]"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-sm text-white transition-colors hover:text-[#A67C2F]"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-sm text-white transition-colors hover:text-[#A67C2F]"
                >
                  Notícias
                </Link>
              </li>
              <li>
                <Link
                  href="/fotos"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-sm text-white transition-colors hover:text-[#A67C2F]"
                >
                  Fotos
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-sm text-white transition-colors hover:text-[#A67C2F]"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Novo Lar */}
          <div>
            <h3 className="text-[#A67C2F] font-bold text-sm uppercase tracking-wider mb-4">
              Novo Lar
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sobre"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#A67C2F]"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#A67C2F]"
                >
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/unidades"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#A67C2F]"
                >
                  Nossas Unidades
                </Link>
              </li>
              <li>
                <Link
                  href="/fotos"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#A67C2F]"
                >
                  Galeria de Fotos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Legal */}
          <div>
            <h3 className="text-[#A67C2F] font-bold text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#A67C2F]"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-de-uso"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#A67C2F]"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="inline-flex items-center gap-2 min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#A67C2F]"
                >
                  <Mail className="h-4 w-4" />
                  {COMPANY_CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_CONTACT.city}</span>
              </li>
            </ul>
          </div>

          {/* Coluna 5: Redes Sociais */}
          <div>
            <h3 className="text-[#A67C2F] font-bold text-sm uppercase tracking-wider mb-4">
              Redes Sociais
            </h3>
            <p className="text-sm text-white mb-4">
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
                    className="flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all hover:bg-[#A67C2F] hover:border-[#A67C2F]"
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


