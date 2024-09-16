import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';

const products = [
  { id: 1, name: 'Vergalhão CA-50', price: 15.99, image: 'src/assets/vergalhao.bmp' },
  { id: 2, name: 'Ferragem Armada', price: 29.99, image: 'src/assets/ferragem_armada.bmp' },
  { id: 3, name: 'Blocos e Tijolos', price: 39.99, image: 'src/assets/bloco.bmp' },
  { id: 4, name: 'Lajes e eps', price: 9.99, image: 'src/assets/lajes e eps.bmp' },
  { id: 5, name: 'Tubos e Conexões', price: 7.99, image: 'src/assets/tubos_e_conexoes.bmp' },
];

const ProductsSection = () => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
    setPopupMessage(`${product.name} adicionado ao carrinho!`);
    setShowPopup(true);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <section id="products" className="py-20" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0066b3] mb-12 text-center">Nossos Produtos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-[#0066b3] mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">R$ {product.price.toFixed(2)}</p>
              <button 
                onClick={() => handleAddToCart(product)}
                className="bg-[#0066b3] text-white px-4 py-2 rounded-full hover:bg-[#005092] transition duration-300"
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
        {showPopup && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
            {popupMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;