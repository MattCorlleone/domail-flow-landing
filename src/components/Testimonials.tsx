
const Testimonials = () => {
  const testimonials = [
    {
      content: "Migrar nossos domínios para o EquilibriumDomain foi uma das melhores decisões que tomamos. A equipe de suporte é incrivelmente responsiva e prestativa.",
      author: "Edipo Cleber",
      role: "Arq 7 Decorações",
    },
    {
      content: "EquilibriumDomain tem sido essencial para o crescimento da nossa empresa, e a interface do HestiaCP torna tudo fácil de gerenciar.",
      author: "Patricia Amorim",
      role: "Lash Design",
    },
    {
      content: "Usamos o EquilibriumDomain há mais de um ano e nunca estivemos tão satisfeitos. O serviço é estável e a interface é intuitiva.",
      author: "Lidia Pelegrino",
      role: "Centro Neurodiverso",
    },
  ];

  return (
    <div id="about" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Sobre</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Confiável para empresas de todos os tamanhos
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Não acredite apenas na nossa palavra. O que nossos clientes dizem.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="text-lg italic text-gray-700 mb-4">
                "{testimonial.content}"
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
