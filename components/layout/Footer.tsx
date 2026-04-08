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
    <footer className="bg-[#2C3E6B] text-gray-300 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid de 4 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Coluna 1: Logo + Descrição */}
          <div>
            <Image
              src="/Novo-Lar-Logo-7.png"
              alt="Novo Lar Geriatria - Residencial Geriátrico em Porto Alegre"
              width={180}
              height={72}
              className="h-14 w-auto mb-4 brightness-0 invert"
              loading="lazy"
              quality={85}
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Cuidado humanizado e especializado para idosos em Porto Alegre, com mais de 30 anos de experiência e dedicação.
            </p>
          </div>

          {/* Coluna 2: Links Institucionais */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Institucional
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sobre/a-novo-lar"
                  className="text-sm text-gray-400 hover:text-white transition-colors inline-block"
                  aria-label="Saiba mais sobre a Novo Lar Geriatria"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-sm text-gray-400 hover:text-white transition-colors inline-block"
                  aria-label="Conheça nossos serviços especializados"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/#unidades"
                  className="text-sm text-gray-400 hover:text-white transition-colors inline-block"
                  aria-label="Veja nossas unidades em Porto Alegre"
                >
                  Unidades
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="text-sm text-gray-400 hover:text-white transition-colors inline-block"
                  aria-label="Leia nossa política de privacidade"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${companyContact.centralPhoneDigits}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                aria-label={`Ligar para ${companyContact.centralPhoneDisplay}`}
              >
                <Phone className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>{companyContact.centralPhoneDisplay}</span>
              </a>
              {units.slice(0, 2).map((unit) => (
                <a
                  key={unit.slug}
                  href={`tel:${unit.phoneDigits}`}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                  aria-label={`Ligar para a unidade ${unit.title}`}
                >
                  <Phone className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{unit.title}: {unit.phoneDisplay}</span>
                </a>
              ))}
              <a
                href={`mailto:${companyContact.email}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                aria-label={`Enviar email para ${companyContact.email}`}
              >
                <Mail className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all">{companyContact.email}</span>
              </a>
            </div>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Redes Sociais
            </h3>
            <div className="flex gap-3">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                  aria-label="Visite nossa página no Facebook"
                >
                  <Facebook className="h-5 w-5 text-white" aria-hidden="true" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                  aria-label="Siga-nos no Instagram"
                >
                  <Instagram className="h-5 w-5 text-white" aria-hidden="true" />
                </a>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Acompanhe nosso dia a dia e novidades
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Novo Lar Geriatria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

