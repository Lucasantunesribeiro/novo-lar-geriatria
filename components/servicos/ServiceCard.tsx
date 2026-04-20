import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  tag: string
  tagIcon?: React.ReactNode
  title: string
  description: string | React.ReactNode
  benefits: string[]
  images: {
    src: string
    alt: string
  }[]
  link?: string
  reverse?: boolean
}

export default function ServiceCard({
  tag,
  tagIcon,
  title,
  description,
  benefits,
  images,
  link,
  reverse = false,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col w-full max-w-[1156px] bg-white border border-[#E5E7EB] shadow-sm rounded-3xl overflow-hidden mx-auto">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch w-full`}>
        
        {/* Container de imagens */}
        <div className="flex-1 w-full lg:w-1/2 flex flex-col p-4 lg:p-6 lg:pb-6 pb-2">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 lg:gap-3 w-full h-full min-h-[300px] lg:min-h-[400px]">
            {images.map((image, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden w-full h-full group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Container de conteúdo */}
        <div className="flex-1 w-full lg:w-1/2 flex flex-col items-start p-6 sm:p-8 lg:p-12 gap-6">
          {/* Tag/Overlay */}
          <div className="inline-flex items-center px-4 py-2 gap-2 bg-[#2E7B7F]/10 rounded-full shrink-0">
            {tagIcon && <div className="w-4 h-4 shrink-0">{tagIcon}</div>}
            <span className="font-bold text-xs leading-4 tracking-[3.6px] uppercase text-[#2E7B7F]">
              {tag}
            </span>
          </div>

          {/* Título */}
          <h3 className="font-bold text-3xl md:text-4xl lg:text-[30px] lg:leading-[36px] text-[#2C3E6B] m-0 w-full">
            {title}
          </h3>

          {/* Descrição */}
          <div className="font-normal text-base text-[#364153] leading-relaxed w-full">
            {description}
          </div>

          {/* Box de benefícios */}
          <div className="flex flex-col items-start p-[32px_24px_24px] gap-3 bg-[rgba(46,123,127,0.05)] border border-[rgba(46,123,127,0.15)] rounded-2xl w-full mt-2 box-border">
            <h4 className="font-arial font-bold text-[12px] leading-[16px] tracking-[3.6px] uppercase text-[#2C3E6B] p-0 m-0">
              Principais benefícios
            </h4>

            <div className="flex flex-col items-start gap-2 w-full mt-1">
              {benefits.slice(0, 5).map((benefit, index) => (
                <div key={index} className="flex flex-row items-start gap-2 w-full min-h-[40px]">
                  <div className="flex flex-col items-start pt-[2px] w-4 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                      <path d="M13.3333 4L6.00001 11.3333L2.66667 8" stroke="#2E7B7F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="font-arial font-normal text-[14px] leading-[20px] text-[#364153]">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Link */}
          {link && (
            <Link
              href={link}
              className="group flex flex-row items-center pt-2 gap-2 no-underline mt-auto"
            >
              <span className="font-bold text-sm leading-5 text-[#2E7B7F]">
                Ver detalhes completos
              </span>
              <ArrowRight className="w-4 h-4 text-[#2E7B7F] shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
