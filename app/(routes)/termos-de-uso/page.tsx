import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { FileText, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Termos de Uso do Site | Novo Lar Geriatria',
  description: 'Termos e condições de uso do site da Novo Lar Geriatria. Leia as regras e políticas para utilização dos nossos serviços online.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://novolargeriatria.com.br/termos-de-uso',
  },
}

export default function TermosDeUsoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Scale className="w-4 h-4" />
              <span className="text-sm font-semibold">Termos e Condições</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Termos de Uso
            </h1>
            <p className="text-lg text-white/90">
              Última atualização: Janeiro de 2025
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-[#2C3E6B] mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ao acessar e usar o site da Novo Lar Geriatria (novolargeriatria.com.br), você concorda
                em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não
                concordar com qualquer parte destes termos, não deverá usar nosso site.
              </p>

              <h2 className="text-2xl font-bold text-[#2C3E6B] mb-4">2. Uso do Site</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                O conteúdo deste site é fornecido apenas para fins informativos sobre nossos serviços
                de hospedagem assistida para idosos. Você concorda em:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Usar o site apenas para fins legais e de acordo com estes Termos</li>
                <li>Não usar o site de forma que possa danificar, desabilitar ou prejudicar o site</li>
                <li>Não tentar obter acesso não autorizado ao site ou sistemas relacionados</li>
                <li>Não usar o site para transmitir material ilegal, ofensivo ou prejudicial</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#2C3E6B] mb-4">3. Propriedade Intelectual</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Todo o conteúdo incluído neste site, incluindo textos, gráficos, logotipos, imagens,
                clipes de áudio, downloads digitais e compilações de dados, é propriedade da Novo Lar
                Geriatria ou de seus fornecedores de conteúdo e é protegido por leis de direitos
                autorais brasileiras e internacionais.
              </p>

              <h2 className="text-2xl font-bold text-[#2C3E6B] mb-4">4. Informações de Contato</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                As informações de contato fornecidas através de formulários em nosso site serão
                tratadas de acordo com nossa Política de Privacidade. Não compartilhamos suas
                informações pessoais com terceiros sem seu consentimento.
              </p>

              <h2 className="text-2xl font-bold text-[#2C3E6B] mb-4">5. Isenção de Garantias</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Este site é fornecido &ldquo;como está&rdquo; sem garantias de qualquer tipo, expressas ou
                implícitas. A Novo Lar Geriatria não garante que o site será ininterrupto ou livre
                de erros.
              </p>

              <h2 className="text-2xl font-bold text-[#2C3E6B] mb-4">6. Limitação de Responsabilidade</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A Novo Lar Geriatria não será responsável por quaisquer danos diretos, indiretos,
                incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de
                usar este site.
              </p>

              <h2 className="text-2xl font-bold text-[#2C3E6B] mb-4">7. Links para Sites de Terceiros</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nosso site pode conter links para sites de terceiros. Estes links são fornecidos
                apenas para sua conveniência. Não temos controle sobre esses sites e não somos
                responsáveis por seu conteúdo.
              </p>

              <h2 className="text-2xl font-bold text-[#2C3E6B] mb-4">8. Modificações dos Termos</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A Novo Lar Geriatria reserva-se o direito de modificar estes termos a qualquer
                momento. As alterações entrarão em vigor imediatamente após a publicação no site.
                Seu uso contínuo do site após tais alterações constitui sua aceitação dos novos termos.
              </p>

              <h2 className="text-2xl font-bold text-[#2C3E6B] mb-4">9. Lei Aplicável</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Estes termos serão regidos e interpretados de acordo com as leis da República
                Federativa do Brasil. Qualquer disputa relacionada a estes termos será submetida
                aos tribunais competentes de Porto Alegre, Rio Grande do Sul.
              </p>

              <h2 className="text-2xl font-bold text-[#2C3E6B] mb-4">10. Contato</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="text-gray-700 mb-2">
                  <strong>E-mail:</strong> contato@novolargeriatria.com.br
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Telefone:</strong> (51) 3346.7620
                </p>
                <p className="text-gray-700">
                  <strong>Endereço:</strong> Rua Luciana de Abreu, 151, Moinhos de Vento, Porto Alegre - RS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

