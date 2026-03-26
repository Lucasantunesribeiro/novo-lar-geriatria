'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'
import { COMPANY_CONTACT } from '@/lib/site-data'

export default function EstruturaFigmaHero() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] flex justify-center">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/placeholders/hero-estrutura.jpg)' }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#F8F9FA]/90 to-[#E9ECEF]/95 lg:from-[#F8F9FA]/80 lg:to-[#E9ECEF]/90" />
      
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 mix-blend-soft-light opacity-15 bg-center bg-cover"
        style={{ backgroundImage: 'url(/placeholders/pattern-overlay.png)' }}
      />

      {/* Main Content wrapper */}
      <section className="relative z-10 flex flex-col items-center w-full px-4 py-16 sm:px-8 md:py-20 lg:py-24 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1156px] gap-12 lg:gap-16">
          
          {/* Left / Top Content */}
          <div className="flex flex-col flex-1 items-start w-full gap-6 lg:gap-8 max-w-[723px]">
            {/* Tag/Badge */}
            <div className="inline-flex flex-nowrap items-center px-3 py-1.5 md:px-4 md:py-2 gap-1.5 md:gap-2 bg-[#2C3E6B]/10 rounded-full w-fit">
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-3.5 h-3.5 md:w-4 md:h-4">
                <path d="M6.6243 10.3333C6.56478 10.1026 6.44453 9.89206 6.27605 9.72358C6.10757 9.5551 5.89702 9.43485 5.6663 9.37533L1.5763 8.32066C1.50652 8.30085 1.44511 8.25883 1.40138 8.20096C1.35765 8.14309 1.33398 8.07253 1.33398 7.99999C1.33398 7.92746 1.35765 7.8569 1.40138 7.79903C1.44511 7.74116 1.50652 7.69913 1.5763 7.67933L5.6663 6.62399C5.89693 6.56453 6.10743 6.44438 6.2759 6.27602C6.44438 6.10766 6.56468 5.89725 6.6243 5.66666L7.67897 1.57666C7.69857 1.50661 7.74056 1.44489 7.79851 1.40092C7.85647 1.35696 7.92722 1.33316 7.99997 1.33316C8.07271 1.33316 8.14346 1.35696 8.20142 1.40092C8.25938 1.44489 8.30136 1.50661 8.32097 1.57666L9.37497 5.66666C9.43449 5.89737 9.55474 6.10792 9.72322 6.27641C9.8917 6.44489 10.1023 6.56514 10.333 6.62466L14.423 7.67866C14.4933 7.69806 14.5553 7.74 14.5995 7.79804C14.6437 7.85609 14.6677 7.92703 14.6677 7.99999C14.6677 8.07295 14.6437 8.1439 14.5995 8.20194C14.5553 8.25999 14.4933 8.30193 14.423 8.32133L10.333 9.37533C10.1023 9.43485 9.8917 9.5551 9.72322 9.72358C9.55474 9.89206 9.43449 10.1026 9.37497 10.3333L8.3203 14.4233C8.3007 14.4934 8.25871 14.5551 8.20075 14.5991C8.1428 14.643 8.07205 14.6668 7.9993 14.6668C7.92656 14.6668 7.85581 14.643 7.79785 14.5991C7.73989 14.5551 7.69791 14.4934 7.6783 14.4233L6.6243 10.3333Z" stroke="#D4A853" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.334 2V4.66667" stroke="#D4A853" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.6667 3.33334H12" stroke="#D4A853" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.66602 11.3333V12.6667" stroke="#D4A853" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.33333 12H2" stroke="#D4A853" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-bold text-[10px] md:text-sm tracking-[1.5px] md:tracking-[3px] uppercase text-[#2C3E6B]/80 text-center whitespace-nowrap">
                Hospedagem assistida em Porto Alegre
              </span>
            </div>

            {/* Heading 1 */}
            <h1 className="font-bold text-4xl md:text-5xl lg:text-[48px] lg:leading-[52px] text-[#2C3E6B] w-full max-w-[601px]">
              Estrutura completa para cuidar com segurança, conforto e tranquilidade
            </h1>

            {/* Description */}
            <p className="font-normal text-lg md:text-xl lg:text-[20px] lg:leading-[28px] text-[#2C3E6B]/80 w-full">
              Conheça os ambientes e a organização da Novo Lar, planejados para oferecer segurança, acessibilidade e acolhimento em todas as fases do envelhecimento. Aqui, a estrutura faz parte do cuidado, promovendo bem-estar ao residente e tranquilidade à família todos os dias.
            </p>

            {/* Pillars Tags Grid */}
            <div className="flex flex-wrap gap-2 lg:gap-3 lg:mt-2">
              {[
                'Hospedagem assistida 24h',
                'Enfermagem e médico 24h',
                'Nutrição individualizada',
                'Terapia ocupacional',
                'Musicoterapia e socialização',
                'Serviços de lavanderia',
                'Convênio com farmácia',
              ].map((pill, i) => (
                <div key={i} className="px-4 py-2 bg-[#2C3E6B]/10 border border-[#2C3E6B]/20 rounded-full flex items-center shrink-0">
                  <span className="font-bold text-xs md:text-sm text-[#2C3E6B]">
                    {pill}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full mt-4 lg:mt-6">
              <Link
                href="/contato"
                className="flex justify-center items-center py-3.5 px-6 bg-[#2C3E6B] hover:bg-[#2C3E6B]/90 text-white font-bold text-sm leading-5 rounded-xl transition-colors w-full sm:w-auto"
              >
                Agendar Visita Guiada
              </Link>
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-[11px] px-5 bg-[#00A63E] hover:bg-[#00A63E]/90 text-white font-bold text-sm leading-5 rounded-xl transition-colors w-full sm:w-auto"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <g clipPath="url(#clip0_19_3925_new)">
                    <path d="M5.26732 13.3333C6.5397 13.986 8.00337 14.1628 9.39458 13.8318C10.7858 13.5009 12.013 12.6839 12.8552 11.5281C13.6973 10.3723 14.0989 8.9538 13.9877 7.5281C13.8765 6.1024 13.2597 4.7633 12.2485 3.75212C11.2373 2.74093 9.89824 2.12416 8.47254 2.01293C7.04684 1.90171 5.6283 2.30335 4.47253 3.14549C3.31676 3.98762 2.49978 5.21486 2.1688 6.60607C1.83782 7.99727 2.01461 9.46094 2.66732 10.7333L1.33398 14.6667L5.26732 13.3333Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_19_3925_new">
                      <rect width="16" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                Falar com nossa equipe no WhatsApp
              </a>
            </div>
          </div>

          {/* Right Cards stats */}
          <div className="flex flex-col flex-1 items-center justify-center w-full gap-4 lg:max-w-[340px] xl:max-w-[379px]">
            {/* Card 1 */}
            <div className="flex flex-col items-start p-6 bg-[#2C3E6B]/10 border border-[#2C3E6B]/10 rounded-3xl backdrop-blur-sm shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] w-full">
              <span className="font-bold text-3xl md:text-[30px] leading-9 text-[#2C3E6B]">3</span>
              <span className="font-bold text-sm leading-5 tracking-[3.5px] uppercase text-[#2C3E6B]/70 mt-1">Unidades em Porto Alegre</span>
              <p className="font-normal text-sm leading-5 text-[#2C3E6B]/80 mt-1">Localizadas nos bairros Moinhos de Vento e Passo d&apos;Areia</p>
            </div>
            
            {/* Card 2 */}
            <div className="flex flex-col items-start p-6 bg-[#2C3E6B]/10 border border-[#2C3E6B]/10 rounded-3xl backdrop-blur-sm shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] w-full">
              <span className="font-bold text-3xl md:text-[30px] leading-9 text-[#2C3E6B]">24h</span>
              <span className="font-bold text-sm leading-5 tracking-[3.5px] uppercase text-[#2C3E6B]/70 mt-1">Equipe de enfermagem</span>
              <p className="font-normal text-sm leading-5 text-[#2C3E6B]/80 mt-1">Profissionais habilitados acompanhando todos os residentes</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start p-6 bg-[#2C3E6B]/10 border border-[#2C3E6B]/10 rounded-3xl backdrop-blur-sm shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] w-full">
              <span className="font-bold text-3xl md:text-[30px] leading-9 text-[#2C3E6B]">6</span>
              <span className="font-bold text-sm leading-5 tracking-[3.5px] uppercase text-[#2C3E6B]/70 mt-1">Refeições diárias</span>
              <p className="font-normal text-sm leading-5 text-[#2C3E6B]/80 mt-1">Cardápio supervisionado por nutricionista com ajustes individuais</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
