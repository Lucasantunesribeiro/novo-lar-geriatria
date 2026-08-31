import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import {
  cx,
  classeTexto,
  estiloDeTexto,
  styleImagem,
  type EstiloImagem,
  type EstiloTexto,
} from '@/lib/cms/estilo'

type LinkSimples = { label: string; href: string }

type Coluna = {
  titulo: string
  links: LinkSimples[]
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
  companyContact: CompanyContact
  socialLinks: SocialLinks
  colunas?: Coluna[]
  unidades?: LinkSimples[]
  mostrarUnidades?: boolean
  tituloUnidades?: string
  logoUrl?: string | null
  logoAlt?: string
  estiloLogo?: EstiloImagem
  descricao?: string
  mostrarTelefone?: boolean
  telefoneTexto?: string
  telefoneLink?: string
  mostrarEmail?: boolean
  emailTexto?: string
  textoCopyright?: string
  mostrarAno?: boolean
  estiloTitulos?: EstiloTexto
  estiloLinks?: EstiloTexto
  estiloDescricao?: EstiloTexto
  corDeFundo?: string
}

/** Colunas que o rodape mostra hoje — padrao quando o Studio esta vazio. */
export const COLUNAS_PADRAO: Coluna[] = [
  {
    titulo: 'Institucional',
    links: [
      { label: 'Sobre a Novo Lar', href: '/sobre' },
      { label: 'Equipe multidisciplinar', href: '/sobre/equipe' },
      { label: 'Atividades', href: '/sobre/atividades' },
      { label: 'Localização', href: '/sobre/localizacao' },
    ],
  },
  {
    titulo: 'Explore',
    links: [
      { label: 'ILPI em Porto Alegre', href: '/ilpi-em-porto-alegre' },
      { label: 'Cuidados para Alzheimer', href: '/cuidados-alzheimer' },
      { label: 'Perguntas frequentes', href: '/perguntas-frequentes' },
      { label: 'Comparativos', href: '/comparativos/ilpi-ou-home-care' },
      { label: 'Depoimentos', href: '/depoimentos' },
    ],
  },
]

export const DESCRICAO_PADRAO =
  'Cuidado humanizado e especializado para idosos em Porto Alegre, com mais de 30 anos de experiência, equipe multidisciplinar e três unidades reais na cidade.'

export default function FooterLight({
  companyContact,
  socialLinks,
  colunas = COLUNAS_PADRAO,
  unidades = [],
  mostrarUnidades = true,
  tituloUnidades = 'Unidades',
  logoUrl,
  logoAlt = 'Novo Lar Geriatria - Residencial Geriátrico em Porto Alegre',
  estiloLogo,
  descricao = DESCRICAO_PADRAO,
  mostrarTelefone = true,
  telefoneTexto,
  telefoneLink,
  mostrarEmail = true,
  emailTexto,
  textoCopyright,
  mostrarAno = true,
  estiloTitulos,
  estiloLinks,
  estiloDescricao,
  corDeFundo,
}: FooterProps) {
  const styleTitulos = estiloDeTexto(estiloTitulos)
  const styleLinks = estiloDeTexto(estiloLinks)
  const styleDescricao = estiloDeTexto(estiloDescricao)

  const copyrightPadrao = `Novo Lar Geriatria. Porto Alegre - RS. Todos os direitos reservados.`
  const textoFinal = textoCopyright?.trim() || copyrightPadrao

  return (
    <footer
      className="w-full border-t border-slate-200 bg-white text-slate-700"
      style={corDeFundo ? { backgroundColor: corDeFundo } : undefined}
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image
              src={logoUrl || '/Novo-Lar-Logo-7.png'}
              alt={logoAlt}
              width={180}
              height={72}
              className="mb-4 h-14 w-auto"
              style={styleImagem(estiloLogo)}
              loading="lazy"
              quality={85}
            />
            <p
              className={cx('max-w-md text-sm leading-relaxed text-slate-600', classeTexto(estiloDescricao))}
              style={styleDescricao}
            >
              {descricao}
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
              {mostrarTelefone && (
                <a
                  href={telefoneLink || `tel:${companyContact.centralPhoneDigits}`}
                  className={cx('inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 transition hover:border-[#2C3E6B] hover:text-[#2C3E6B]', classeTexto(estiloLinks))}
                  style={styleLinks}
                >
                  <Phone className="h-4 w-4" />
                  {telefoneTexto || companyContact.centralPhoneDisplay}
                </a>
              )}
              {mostrarEmail && (
                <a
                  href={`mailto:${companyContact.email}`}
                  className={cx('inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 transition hover:border-[#2C3E6B] hover:text-[#2C3E6B]', classeTexto(estiloLinks))}
                  style={styleLinks}
                >
                  <Mail className="h-4 w-4" />
                  {emailTexto || companyContact.email}
                </a>
              )}
            </div>
          </div>

          {colunas.map((coluna, i) => (
            <div key={`${coluna.titulo}-${i}`}>
              <h2
                className={cx('mb-4 text-sm font-semibold uppercase tracking-wider text-[#2C3E6B]', classeTexto(estiloTitulos))}
                style={styleTitulos}
              >
                {coluna.titulo}
              </h2>
              <ul className="space-y-2">
                {coluna.links?.map((link, j) => (
                  <li key={`${link.href}-${j}`}>
                    <Link
                      href={link.href}
                      className={cx('text-sm text-slate-600 transition-colors hover:text-[#2C3E6B]', classeTexto(estiloLinks))}
                      style={styleLinks}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {mostrarUnidades && (
            <div>
              <h2
                className={cx('mb-4 text-sm font-semibold uppercase tracking-wider text-[#2C3E6B]', classeTexto(estiloTitulos))}
                style={styleTitulos}
              >
                {tituloUnidades}
              </h2>
              <ul className="space-y-2">
                {unidades.map((unit, i) => (
                  <li key={`${unit.href}-${i}`}>
                    <Link
                      href={unit.href}
                      className={cx('text-sm text-slate-600 transition-colors hover:text-[#2C3E6B]', classeTexto(estiloLinks))}
                      style={styleLinks}
                    >
                      {unit.label}
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
          )}
        </div>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-center text-sm text-slate-500">
            {mostrarAno ? <>&copy; {new Date().getFullYear()} </> : null}
            {textoFinal}
          </p>
        </div>
      </div>
    </footer>
  )
}
