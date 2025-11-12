import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

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

type SocialLinks = {
  facebook?: string
  instagram?: string
}

type FooterProps = {
  units: UnitInfo[]
  companyContact: CompanyContact
  socialLinks: SocialLinks
}

const SOCIAL_ICON_MAP = {
  facebook: Facebook,
  instagram: Instagram,
} as const

export default function Footer({ units, companyContact, socialLinks }: FooterProps) {
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
            loading="lazy"
            quality={85}
          />
        </div>

        {/* Grid de colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          {/* Coluna 1: Atendimento */}
          <div>
            <h3 className="text-[#8B6914] font-bold text-sm uppercase tracking-wider mb-4">
              Atendimento
            </h3>
            <div className="space-y-3">
              {units.map((unit) => (
                <div key={unit.slug}>
                  <p className="text-xs text-white/70 mb-1">{unit.title}</p>
                  <a
                    href={`tel:${unit.phoneDigits}`}
                    className="inline-flex items-center gap-2 min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#8B6914]"
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
            <h3 className="text-[#8B6914] font-bold text-sm uppercase tracking-wider mb-4">
              Acessos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-sm text-white transition-colors hover:text-[#8B6914]"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/unidades"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-sm text-white transition-colors hover:text-[#8B6914]"
                >
                  Unidades
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-sm text-white transition-colors hover:text-[#8B6914]"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-sm text-white transition-colors hover:text-[#8B6914]"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-sm text-white transition-colors hover:text-[#8B6914]"
                >
                  Notícias
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre/fotos"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-sm text-white transition-colors hover:text-[#8B6914]"
                >
                  Fotos
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-sm text-white transition-colors hover:text-[#8B6914]"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Novo Lar */}
          <div>
            <h3 className="text-[#8B6914] font-bold text-sm uppercase tracking-wider mb-4">
              Novo Lar
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sobre"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#8B6914]"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#8B6914]"
                >
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/unidades"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#8B6914]"
                >
                  Nossas Unidades
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre/fotos"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#8B6914]"
                >
                  Galeria de Fotos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Legal */}
          <div>
            <h3 className="text-[#8B6914] font-bold text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#8B6914]"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-de-uso"
                  className="inline-flex items-center min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#8B6914]"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${companyContact.email}`}
                  className="inline-flex items-center gap-2 min-h-[48px] px-2 py-3 text-white transition-colors hover:text-[#8B6914]"
                >
                  <Mail className="h-4 w-4" />
                  {companyContact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{companyContact.city}</span>
              </li>
            </ul>
          </div>

          {/* Coluna 5: Redes Sociais */}
          <div>
            <h3 className="text-[#8B6914] font-bold text-sm uppercase tracking-wider mb-4">
              Redes Sociais
            </h3>
            <p className="text-sm text-white mb-4">
              Siga-nos nas redes sociais e fique por dentro das novidades
            </p>
            <div className="flex gap-3">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all hover:bg-[#8B6914] hover:border-[#8B6914]"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all hover:bg-[#8B6914] hover:border-[#8B6914]"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
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



