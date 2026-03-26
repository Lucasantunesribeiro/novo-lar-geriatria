import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

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

export default function FooterLight({ units, companyContact, socialLinks }: FooterProps) {
  return (
    <footer className="bg-white text-slate-700 w-full border-t border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Image
              src="/Novo-Lar-Logo-7.png"
              alt="Novo Lar Geriatria - Residencial Geriátrico em Porto Alegre"
              width={180}
              height={72}
              className="h-14 w-auto mb-4"
              loading="lazy"
              quality={85}
            />
            <p className="text-sm text-slate-600 leading-relaxed">
              Cuidado humanizado e especializado para idosos em Porto Alegre, com mais de 20 anos de experiência e dedicação.
            </p>
          </div>

          <div>
            <h3 className="text-[#2C3E6B] font-semibold text-sm uppercase tracking-wider mb-4">
              Institucional
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sobre/a-novo-lar"
                  className="text-sm text-slate-600 hover:text-[#2C3E6B] transition-colors inline-block"
                  aria-label="Saiba mais sobre a Novo Lar Geriatria"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-sm text-slate-600 hover:text-[#2C3E6B] transition-colors inline-block"
                  aria-label="Conheça nossos serviços especializados"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/#unidades"
                  className="text-sm text-slate-600 hover:text-[#2C3E6B] transition-colors inline-block"
                  aria-label="Veja nossas unidades em Porto Alegre"
                >
                  Unidades
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="text-sm text-slate-600 hover:text-[#2C3E6B] transition-colors inline-block"
                  aria-label="Leia nossa política de privacidade"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#2C3E6B] font-semibold text-sm uppercase tracking-wider mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+555133467668"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#2C3E6B] transition-colors group"
                aria-label="Ligar para (51) 3346-7668"
              >
                <Phone className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>(51) 3346-7668</span>
              </a>
              <a
                href="tel:+555133769462"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#2C3E6B] transition-colors group"
                aria-label="Ligar para (51) 3376-9462"
              >
                <Phone className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>(51) 3376-9462</span>
              </a>
              <a
                href={`mailto:${companyContact.email}`}
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#2C3E6B] transition-colors group"
                aria-label={`Enviar email para ${companyContact.email}`}
              >
                <Mail className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all">{companyContact.email}</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#2C3E6B] font-semibold text-sm uppercase tracking-wider mb-4">
              Redes Sociais
            </h3>
            <div className="flex gap-3">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 transition-all hover:scale-110"
                  aria-label="Visite nossa página no Facebook"
                >
                  <Facebook className="h-5 w-5 text-[#2C3E6B]" aria-hidden="true" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 transition-all hover:scale-110"
                  aria-label="Siga-nos no Instagram"
                >
                  <Instagram className="h-5 w-5 text-[#2C3E6B]" aria-hidden="true" />
                </a>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Acompanhe nosso dia a dia e novidades
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Novo Lar Geriatria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
