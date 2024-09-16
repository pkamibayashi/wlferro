import React from 'react';

const services = [
  {
    title: 'Corte e Dobra de Aço',
    image: 'https://wlferroeaco.com.br/wp-content/uploads/2023/05/wl-ferro-e-aco-corte-e-dobra.jpg'
  },
  {
    title: 'Fabricação de Estruturas Metálicas',
    image: 'https://wlferroeaco.com.br/wp-content/uploads/2023/05/wl-ferro-e-aco-estruturas-metalicas.jpg'
  },
  {
    title: 'Fornecimento de Materiais',
    image: 'https://wlferroeaco.com.br/wp-content/uploads/2023/05/wl-ferro-e-aco-fornecimento-de-materiais.jpg'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-100 py-20" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0066b3] mb-12 text-center">Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-[#0066b3] mb-4">{service.title}</h3>
              <p className="text-gray-600">Oferecemos soluções personalizadas e de alta qualidade para atender às necessidades específicas de cada projeto.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
