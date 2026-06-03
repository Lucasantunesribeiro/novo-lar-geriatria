import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import { getUnitPath } from '@/lib/site-data'

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

const INSTITUTIONAL_LINKS = [
  { label: 'Sobre a Novo Lar', href: '/sobre/a-novo-lar' },
  { label: 'Equipe multidisciplinar', href: '/sobre/equipe' },
  { label: 'Atividades', href: '/sobre/atividades' },
  { label: 'Localização', href: '/sobre/localizacao' },
]

const SEO_LINKS = [
  { label: 'ILPI em Porto Alegre', href: '/ilpi-em-porto-alegre' },
  { label: 'Cuidados para Alzheimer', href: '/cuidados-alzheimer' },
  { label: 'Perguntas frequentes', href: '/perguntas-frequentes' },
  { label: 'Comparativos', href: '/comparativos/ilpi-ou-home-care' },
  { label: 'Depoimentos', href: '/depoimentos' },
]

export default function FooterLight({ units, companyContact, socialLinks }: FooterProps) {
  return (
    <footer className="w-full border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image
              src="/Novo-Lar-Logo-7.png"
              alt="Novo Lar Geriatria - Residencial Geriátrico em Porto Alegre"
              width={180}
              height={72}
              className="mb-4 h-14 w-auto"
              loading="lazy"
              quality={85}
            />
            <p className="max-w-md text-sm leading-relaxed text-slate-600">
              Cuidado humanizado e especializado para idosos em Porto Alegre, com mais de 30 anos
              de experiência, equipe multidisciplinar e três unidades reais na cidade.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
              <a
                href={`tel:${companyContact.centralPhoneDigits}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 transition hover:border-[#2C3E6B] hover:text-[#2C3E6B]"
              >
                <Phone className="h-4 w-4" />
                {companyContact.centralPhoneDisplay}
              </a>
              <a
                href={`mailto:${companyContact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 transition hover:border-[#2C3E6B] hover:text-[#2C3E6B]"
              >
                <Mail className="h-4 w-4" />
                {companyContact.email}
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#2C3E6B]">
              Institucional
            </h2>
            <ul className="space-y-2">
              {INSTITUTIONAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-[#2C3E6B]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#2C3E6B]">
              Explore
            </h2>
            <ul className="space-y-2">
              {SEO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-[#2C3E6B]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#2C3E6B]">
              Unidades
            </h2>
            <ul className="space-y-2">
              {units.map((unit) => (
                <li key={unit.slug}>
                  <Link
                    href={getUnitPath(unit.slug)}
                    className="text-sm text-slate-600 transition-colors hover:text-[#2C3E6B]"
                  >
                    {unit.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex gap-3">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 transition-all hover:scale-110 hover:bg-slate-200"
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
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 transition-all hover:scale-110 hover:bg-slate-200"
                  aria-label="Siga-nos no Instagram"
                >
                  <Instagram className="h-5 w-5 text-[#2C3E6B]" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Novo Lar Geriatria. Porto Alegre - RS. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
