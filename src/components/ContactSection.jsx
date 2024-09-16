import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '551999606233'; // Número de telefone no formato internacional
    const whatsappMessage = `Olá, meu nome é ${name}. ${message}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="contact" className="py-20" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0066b3] mb-12 text-center">Entre em Contato</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border rounded-md focus:border-[#0066b3] focus:outline-none focus:ring-1 focus:ring-[#0066b3]" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border rounded-md focus:border-[#0066b3] focus:outline-none focus:ring-1 focus:ring-[#0066b3]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-[#0066b3] text-white px-6 py-3 rounded-full hover:bg-[#005092] transition duration-300">Enviar Mensagem</button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-center">
              <Phone className="text-[#0066b3] mr-4" />
              <span>(11) 2574-7744</span>
            </div>
            <div className="flex items-center">
              <Mail className="text-[#0066b3] mr-4" />
              <span>contato@wlferroeaco.com.br</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-[#0066b3] mr-4" />
              <span>Rua Amambaí, 1100 - Vila Maria - São Paulo/SP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;