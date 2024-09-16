import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20" data-aos="fade-up">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0066b3] mb-8">Sobre Nós</h2>
          <div className="grid gap-12">
            <div>
              <p className="text-gray-600 mb-4 text-base sm:text-lg md:text-xl">
                A WL Material de Construção é uma empresa pensada em você cliente que procura sempre por qualidade e um ótimo preço, aqui você encontra os melhores produtos para sua obra, do zero até o acabamento!
              </p>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl">
                Nossa equipe altamente qualificada está comprometida em fornecer excelência em cada projeto, garantindo a satisfação total de nossos clientes.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="src/assets/u0dniz97.bmp" alt="Equipe WL Ferro" className="rounded-lg shadow-lg w-full h-auto max-w-xs md:max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;