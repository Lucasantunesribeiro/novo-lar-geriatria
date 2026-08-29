import Link from 'next/link'
import { Sparkles, Phone, MessageCircle, Calendar, ArrowRight } from 'lucide-react'

interface UnidadesCTAProps {
  etiqueta?: string
  titulo?: string
  descricao?: string
  cartoes?: Array<{ titulo?: string; descricao?: string; label?: string }>
}

export default function UnidadesCTA({
  etiqueta,
  titulo,
  descricao,
  cartoes,
}: UnidadesCTAProps = {}) {
  /** Texto do cartao na posicao `i`; vazio = o texto que ja estava aqui. */
  const cartao = (i: number, campo: 'titulo' | 'descricao' | 'label', padrao: string) =>
    cartoes?.[i]?.[campo] || padrao
  return (
    <section className="py-20 px-8 md:px-24 lg:px-36">
      <div className="max-w-[1156px] mx-auto">
        <div 
          className="flex flex-col items-center gap-10 p-10 rounded-3xl" 
          style={{
            background: 'linear-gradient(135deg, rgb(16, 32, 65) 0%, rgb(29, 51, 100) 50%, rgb(46, 123, 127) 100%)', 
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px'
          }}
        >
          <div className="flex flex-col items-center gap-4 text-center max-w-[672px]">
            <div className="flex items-center px-4 py-2 gap-2 bg-white/10 rounded-full">
              <Sparkles className="w-4 h-4 text-white/80" />
              <span className="text-white/80 font-bold text-xs tracking-[3.6px] uppercase">
                {etiqueta || 'Atendimento próximo'}
              </span>
            </div>
            <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight">
              {titulo || 'Estamos prontos para planejar a melhor solução para a sua família'}
            </h2>
            <p className="text-white/80 text-base leading-6">
              {descricao ||
                'Escolha o canal que preferir para falar com nossa equipe. Responderemos rapidamente para orientar sobre vagas, documentação, valores e visitas.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 w-full">
            <a href="tel:5133769462" className="flex flex-col p-6 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-white/15 rounded-2xl mb-5">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl leading-7 mb-3">Central Novo Lar</h3>
              <p className="text-white/80 text-sm leading-5 mb-6 flex-grow">
                Converse com nossa equipe e tire todas as dúvidas sobre as modalidades de hospedagem.
              </p>
              <div className="flex items-center gap-2 text-[#F5D481] font-bold text-sm">
                <span>Ligar agora</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
            
            <a href="https://wa.me/5551920011523" target="_blank" rel="noopener noreferrer" className="flex flex-col p-6 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-white/15 rounded-2xl mb-5">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl leading-7 mb-3">WhatsApp 24h</h3>
              <p className="text-white/80 text-sm leading-5 mb-6 flex-grow">
                Envie uma mensagem e receba retorno rápido da equipe de plantão para orientações imediatas.
              </p>
              <div className="flex items-center gap-2 text-[#F5D481] font-bold text-sm">
                <span>Abrir conversa</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
            
            <Link href="/contato" className="flex flex-col p-6 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-white/15 rounded-2xl mb-5">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl leading-7 mb-3">Agendar visita guiada</h3>
              <p className="text-white/80 text-sm leading-5 mb-6 flex-grow">
                Escolha a unidade de preferência e conheça pessoalmente nossa estrutura e protocolos de cuidado.
              </p>
              <div className="flex items-center gap-2 text-[#F5D481] font-bold text-sm">
                <span>Agendar agora</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
