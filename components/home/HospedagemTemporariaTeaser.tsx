import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { linkWhatsApp } from '@/lib/site-data'

/**
 * Chamada da hospedagem temporária na home.
 *
 * Por que existe: o serviço tinha página própria, mas nenhum caminho até ela
 * a partir da home nem do menu. Quem procurava "período curto" não achava.
 *
 * O texto é o aprovado pela cliente (planilha de revisão, item 5). Prazo
 * mínimo e valores ainda não foram confirmados, por isso não aparecem aqui.
 */
const DESCRICAO =
  'Recuperação após cirurgia, alta hospitalar ou um período de cuidado enquanto a família se organiza, com enfermagem 24h e reabilitação desde o primeiro dia.'

const MENSAGEM_WHATSAPP = 'Olá! Gostaria de saber mais sobre a hospedagem temporária da Novo Lar.'

export default function HospedagemTemporariaTeaser() {
  return (
    <section aria-labelledby="temporaria-titulo" className="bg-[#F9FAFB] py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl border border-[#2C3E6B]/10 bg-white p-8 shadow-sm md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#D4A853]">
              Períodos curtos
            </p>
            <h2 id="temporaria-titulo" className="mb-4 text-3xl font-bold text-[#2C3E6B]">
              Hospedagem temporária para idosos em Porto Alegre
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">{DESCRICAO}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              href="/hospedagem-temporaria-idosos-porto-alegre"
              className="inline-flex items-center justify-center rounded-xl bg-[#2C3E6B] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[#1f2b4b]"
            >
              Conhecer a hospedagem temporária
            </Link>
            <a
              href={linkWhatsApp(MENSAGEM_WHATSAPP)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#10B981] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[#059669]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
