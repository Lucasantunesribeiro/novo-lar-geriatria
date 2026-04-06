export type Testimonial = {
  id: string
  author: string
  text: string
  rating: 5
  source: 'google'
}

// 26 avaliações reais do Google — Novo Lar Geriatria (5,0 estrelas)
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Viviane Leal',
    rating: 5,
    source: 'google',
    text: 'Excelente lugar. Casa muito acolhedora, humanizada, presta excelente atendimento tanto ao interno quanto à família. Muito, muito bom no geral. Ponto alto: portas abertas para visitação sempre. Meu pai foi muito bem cuidado e a família também.',
  },
  {
    id: '2',
    author: 'Caroline Bortoluzzi',
    rating: 5,
    source: 'google',
    text: 'A Clínica possui uma excelente reputação e conta com uma equipe de saúde e limpeza altamente qualificada. Dispõe de salas amplas, arejadas e bem iluminadas, com acesso para deficientes. Aqui os hóspedes são tratados com todo o carinho.',
  },
  {
    id: '3',
    author: 'Karen Alves',
    rating: 5,
    source: 'google',
    text: 'Ótimo local planejado para a assistência integral do idoso. Os cuidados não se estendem apenas ao cuidado de hotelaria e alimentação. O bem estar dos idosos está em primeiro lugar. Tem-se o cuidado global com os serviços de enfermagem.',
  },
  {
    id: '4',
    author: 'Caroline Miorando',
    rating: 5,
    source: 'google',
    text: 'Melhor geriatria sem dúvidas de Porto Alegre, melhor atendimento, sem contar na educação dos funcionários e na limpeza da casa. Meu tio está lá já alguns anos e não trocamos essa casa por nada!',
  },
  {
    id: '5',
    author: 'Leticia Marocco',
    rating: 5,
    source: 'google',
    text: 'Agradeço o carinho de toda a equipe no cuidado de minha mãe. Sempre atenciosos, me tranquilizo por saber que estão próximos e prontos para atendê-la em todas as necessidades. O ambiente familiar traz segurança à família.',
  },
  {
    id: '6',
    author: 'Bianca Sarmento',
    rating: 5,
    source: 'google',
    text: 'Atendimento excelente. Completa, com ótimos profissionais, ambiente acolhedor. Recomendo de olhos fechados.',
  },
  {
    id: '7',
    author: 'Ariane Oliveira',
    rating: 5,
    source: 'google',
    text: 'Excelente atendimento. Super organizado, pessoal dedicado e altamente capacitado. Super recomendo!',
  },
  {
    id: '8',
    author: 'Vanessa Guedes',
    rating: 5,
    source: 'google',
    text: 'Clínica maravilhosa. Atendimentos e cuidados excelentes tanto com os pacientes quanto com os familiares.',
  },
  {
    id: '9',
    author: 'Milene C. Valotta',
    rating: 5,
    source: 'google',
    text: 'Lugar que reconhece o idoso, tratamento exclusivo e cuidados especiais, toda necessidade exclusiva para a terceira idade.',
  },
  {
    id: '10',
    author: 'Moacir Miorando',
    rating: 5,
    source: 'google',
    text: 'Lugar aconchegante e com um atendimento profissional, mas com muita paciência e cordialidade. Recomendo.',
  },
  {
    id: '11',
    author: 'Marco Antonio Cavalheiros',
    rating: 5,
    source: 'google',
    text: 'Ótimo atendimento! Faço questão de elogiar o bom atendimento dado a minha mãe. Parabéns à equipe da Novo Lar.',
  },
  {
    id: '12',
    author: 'Fabi Saliba',
    rating: 5,
    source: 'google',
    text: 'Experiência muito positiva. Ambiente acolhedor com profissionais muito dedicados.',
  },
  {
    id: '13',
    author: 'Mara Santos',
    rating: 5,
    source: 'google',
    text: 'Fomos muito bem atendidos, profissionais competentes. Meu esposo ficou lá um ano e quatro meses.',
  },
  {
    id: '14',
    author: 'samara blas',
    rating: 5,
    source: 'google',
    text: 'Lar bastante cuidadoso, limpo e organizado. Tive um parente que ficou na geriatria e gostei bastante do atendimento.',
  },
  {
    id: '15',
    author: 'Hélcio Ortiz',
    rating: 5,
    source: 'google',
    text: 'Serviços prestados com total profissionalismo e atenção! Recomendo e indico!',
  },
  {
    id: '16',
    author: 'Adriana Carboni',
    rating: 5,
    source: 'google',
    text: 'Super indico, ambiente agradável e muito atenciosos.',
  },
  {
    id: '17',
    author: 'maria rejane Biaggio',
    rating: 5,
    source: 'google',
    text: 'Conforme relato de familiares, o atendimento é excelente. Recomendo.',
  },
  {
    id: '18',
    author: 'Luciana Bandeira Rodeghiero',
    rating: 5,
    source: 'google',
    text: 'Ótima clínica. Recomendo.',
  },
  {
    id: '19',
    author: 'Bruno Scherer',
    rating: 5,
    source: 'google',
    text: 'Conheço os gestores do local. Confiança, responsabilidade, cuidado.',
  },
  {
    id: '20',
    author: 'Camila Souza',
    rating: 5,
    source: 'google',
    text: 'Ótimo lugar e profissionais competentes.',
  },
  {
    id: '21',
    author: 'alvaro Souza',
    rating: 5,
    source: 'google',
    text: 'Ambiente limpo e organizado.',
  },
]

// Seleciona os mais substantivos para o carrossel da homepage
export const FEATURED_TESTIMONIALS = TESTIMONIALS.filter((t) => t.text.length > 80)
