import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Plus, Minus, Trash2, ShoppingCart, ArrowRightCircle } from 'lucide-react';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, setCart, clearCart } = useCart();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const getWhatsAppLink = () => {
    const message = `Olá, gostaria de comprar os seguintes itens:\n\n${cart.map(item => `- ${item.name} (${item.quantity}x): R$ ${(item.price * item.quantity).toFixed(2)}`).join('\n')}\n\nTotal: R$ ${getTotalPrice()}`;
    return `https://wa.me/5519999606233?text=${encodeURIComponent(message)}`;
  };

  const handleWhatsAppClick = () => {
    clearCart();
  };

  const handleDecreaseQuantity = (id, quantity) => {
    if (quantity === 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, quantity - 1);
    }
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src="src/assets/wl-logo.png" alt="WL Ferro Logo" className="h-12 md:h-16" />
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-[#0066b3] cursor-pointer">Home</Link>
            <Link to="/" className="text-gray-600 hover:text-[#0066b3] cursor-pointer">Sobre</Link>
            <Link to="/" className="text-gray-600 hover:text-[#0066b3] cursor-pointer">Serviços</Link>
            <Link to="/" className="text-gray-600 hover:text-[#0066b3] cursor-pointer">Produtos</Link>
            <Link to="/" className="text-gray-600 hover:text-[#0066b3] cursor-pointer">Contato</Link>
          </nav>
        </div>
      </header>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-[#0066b3]">Seu Carrinho</h1>
              <Link to="/" className="text-[#0066b3] hover:underline flex items-center">
                <ChevronLeft className="mr-1" />
                <span className="hidden sm:inline">Continuar Comprando</span>
              </Link>
            </div>
            {cart.length === 0 ? (
              <p className="text-gray-500">Seu carrinho está vazio.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row items-center justify-between border-b py-4">
                    <div className="flex items-center mb-4 md:mb-0 w-full md:w-1/2">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                      <div>
                        <h2 className="font-semibold text-lg">{item.name}</h2>
                        <p className="text-gray-600">R$ {item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center w-full md:w-1/2 justify-end">
                      <button 
                        onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="mx-2 w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="mt-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-lg">Total:</span>
                    <span className="font-bold text-xl">R$ {getTotalPrice()}</span>
                  </div>
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    className="bg-[#0066b3] text-white px-6 py-3 rounded-full hover:bg-[#005092] transition duration-300 inline-flex items-center justify-center w-full"
                  >
                    <ShoppingCart className="mr-2" />
                    Finalizar Compra via WhatsApp
                    <ArrowRightCircle className="ml-2" />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>        
  );
};

export default CartPage;