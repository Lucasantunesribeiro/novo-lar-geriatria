import Image from 'next/image'

export default function CommitmentSection() {
  return (
    <div className="w-full bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] flex justify-center py-16 lg:py-[120px] px-4 sm:px-8">
      <section className="flex flex-col items-center justify-center w-full max-w-[1440px]">
        {/* Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-[1001px] gap-10 lg:gap-[54px]">
          
          {/* Image */}
          <div className="relative w-full max-w-[500px] aspect-[4/3] lg:w-[424px] lg:h-[308px] shrink-0 rounded-2xl overflow-hidden shadow-lg mx-auto lg:mx-0">
            <Image 
              src="/sobre-compromisso/16fa7dd728567a90b7bbcdfd675c479937c6c28f.jpg" 
              alt="Nosso compromisso" 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 w-full max-w-[523px] text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="text-[#2C3E6B] font-bold text-3xl md:text-4xl lg:text-[48px] lg:leading-[52px] tracking-tight lg:tracking-[-1.5px] m-0">
              Nosso compromisso
            </h2>
            <p className="text-[#4A5565] text-base lg:text-[18px] leading-relaxed m-0">
              Na Novo Lar, cuidar vai além de atender necessidades clínicas. É sobre preservar dignidade, promover conforto e oferecer qualidade de vida, mesmo nos momentos mais delicados. Seguimos firmes no compromisso de acolher cada pessoa com respeito, responsabilidade e humanidade — como gostaríamos que alguém que amamos fosse cuidado.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
