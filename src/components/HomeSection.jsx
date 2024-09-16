import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { ChevronRight } from 'lucide-react';

const HomeSection = () => {
  return (
    <section 
      id="home" 
      style={{backgroundImage: 'url(src/assets/wl-fundo.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} 
      className="py-20 text-white" 
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
          MATERIAIS DE<br/> CONSTRUÇÃO E <br/>ACABAMENTO!
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          Desejamos ser mais que mais uma loja de materiais para construção.<br/> 
          Com nossos materiais e serviços, desejamos ser a solução de seus<br/> 
          problemas. Com atendimento eficiente e diferenciado. Entregas<br/> 
          programadas rápidas, formas de pagamentos que se encaixam no seu<br/> 
          bolso. Diversos itens para sua obra, do início ao fim; e muitas utilidades<br/> 
          domésticas para seu lar!
        </p>
        <ScrollLink 
          to="contact" 
          smooth={true} 
          duration={500} 
          className="bg-white text-[#0066b3] px-4 py-2 sm:px-6 sm:py-3 rounded-full inline-flex items-center hover:bg-gray-100 transition duration-300 cursor-pointer"
        >
          Entre em contato
          <ChevronRight className="ml-2" />
        </ScrollLink>
      </div>
    </section>
  );
};

export default HomeSection;