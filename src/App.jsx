import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CartProvider } from './CartContext'
import LandingPage from './LandingPage'
import CartPage from './CartPage'

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App