import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default LandingPage;
