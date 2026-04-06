import Image from 'next/image'

export default function ThreePillarsSection() {
  const pillars = [
    {
      title: 'Hospedagem acolhedora',
      description: 'Suítes amplas, áreas externas arborizadas e ambientes personalizados para acolher diferentes níveis de dependência.',
      image: '/sobre-cuidado/1.png'
    },
    {
      title: 'Equipe multidisciplinar 24h',
      description: 'Médicos geriatras, enfermeiros, fisioterapeutas, terapeutas ocupacionais e musicoterapeutas atuam em regime integral.',
      image: '/sobre-cuidado/2.png'
    },
    {
      title: 'Famílias próximas',
      description: 'Processos transparentes, visitas guiadas frequentes e acompanhamento das rotinas para deixar a família sempre por perto.',
      image: '/sobre-cuidado/3.png'
    },
  ]

  return (
    <div className="w-full bg-white flex justify-center py-16 lg:py-[80px] px-4 sm:px-8">
      <section className="flex flex-col items-center w-full max-w-[1180px] gap-10">
        
        {/* Header Container */}
        <div className="flex flex-col items-start gap-4 w-full max-w-[768px] mx-auto text-center lg:text-left lg:mr-auto lg:ml-0">
          <h2 className="text-[#1A2745] font-bold text-3xl md:text-4xl lg:text-[36px] lg:leading-[40px] m-0">
            Cuidado humanizado, com base técnica sólida
          </h2>
          <p className="text-[#4A5565] text-base lg:text-[18px] leading-relaxed m-0">
            Conheça os pilares que fazem da Novo Lar referência em hospedagem assistida, reabilitação para idosos e residentes de alta complexidade.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1156px] mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col w-full bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image Container */}
              <div className="relative w-full h-[240px] sm:h-[300px] md:h-[220px] lg:h-[192px]">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col items-start p-6 flex-grow">
                <h3 className="text-[#1A2745] font-bold text-lg leading-tight mb-3 m-0">
                  {pillar.title}
                </h3>
                <p className="text-[#4A5565] text-sm leading-relaxed m-0">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </section>
    </div>
  )
}
