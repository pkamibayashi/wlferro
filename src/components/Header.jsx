import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../CartContext';

const Header = () => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src="src/assets/wl-logo.png" alt="WL Ferro Logo" className="h-12 md:h-16" />
        <nav className="hidden md:flex space-x-6">
          <ScrollLink to="home" smooth={true} duration={500} className="text-gray-600 hover:text-[#0066b3] cursor-pointer">Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="text-gray-600 hover:text-[#0066b3] cursor-pointer">Sobre</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="text-gray-600 hover:text-[#0066b3] cursor-pointer">Serviços</ScrollLink>
          <ScrollLink to="products" smooth={true} duration={500} className="text-gray-600 hover:text-[#0066b3] cursor-pointer">Produtos</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-600 hover:text-[#0066b3] cursor-pointer">Contato</ScrollLink>
        </nav>
        <div className="flex items-center">
          <Link to="/cart" className="text-[#0066b3] relative cursor-pointer">
            <ShoppingCart />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </Link>
          <button className="md:hidden ml-4" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md animate-slide-down">
          <ScrollLink to="home" smooth={true} duration={500} className="block px-4 py-2 text-gray-600 hover:text-[#0066b3] cursor-pointer animate-rotate-in">Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="block px-4 py-2 text-gray-600 hover:text-[#0066b3] cursor-pointer animate-rotate-in">Sobre</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="block px-4 py-2 text-gray-600 hover:text-[#0066b3] cursor-pointer animate-rotate-in">Serviços</ScrollLink>
          <ScrollLink to="products" smooth={true} duration={500} className="block px-4 py-2 text-gray-600 hover:text-[#0066b3] cursor-pointer animate-rotate-in">Produtos</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="block px-4 py-2 text-gray-600 hover:text-[#0066b3] cursor-pointer animate-rotate-in">Contato</ScrollLink>
        </nav>
      )}
    </header>
  );
};

export default Header;