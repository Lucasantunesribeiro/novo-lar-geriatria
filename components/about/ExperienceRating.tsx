import { Star } from 'lucide-react'

export default function ExperienceRating() {
  return (
    <section
      className="flex flex-col items-center px-5 py-10 lg:px-[208px] lg:py-[80px]"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
        width: '100%',
      }}
    >
      <div
        className="flex flex-col items-center gap-8 lg:gap-[48px] w-full"
        style={{
          maxWidth: '1024px',
        }}
      >
        {/* Rating Stars */}
        <div className="flex flex-row items-center gap-2 lg:gap-[8px]">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={32}
              fill="#F5D481"
              color="#F5D481"
              strokeWidth={1}
            />
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-4 lg:gap-[16px] w-full">
          <h2
            className="text-2xl lg:text-[36px] lg:leading-[40px] text-center"
            style={{
              fontFamily: 'Arial',
              fontWeight: 700,
              color: '#2C3E6B',
            }}
          >
            Experiência e Confiança
          </h2>

          <p
            className="text-base lg:text-[18px] lg:leading-[29px] text-center"
            style={{
              fontFamily: 'Arial',
              fontWeight: 400,
              color: '#4A5565',
              maxWidth: '800px',
            }}
          >
            A Novo Lar nasceu da vontade de oferecer um lar verdadeiramente acolhedor para idosos que precisam de cuidados especializados. Com mais de três décadas de experiência, construímos unidades que combinam infraestrutura moderna, equipe multidisciplinar e um olhar humanizado sobre o envelhecimento.
          </p>

          <p
            className="text-base lg:text-[18px] lg:leading-[29px] text-center"
            style={{
              fontFamily: 'Arial',
              fontWeight: 400,
              color: '#4A5565',
              maxWidth: '800px',
            }}
          >
            Cada residente é acompanhado de forma individualizada, com rotina personalizada e atenção constante. A família participa ativamente e tem acesso transparente a tudo que acontece no dia a dia.
          </p>
        </div>
      </div>
    </section>
  )
}
