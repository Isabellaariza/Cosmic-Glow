import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './features/shared/components/Header/Header.jsx'; 
import { ProductsPage } from './features/products/pages/ProductsPage.jsx';
import { CartPage } from './features/car/pages/CarPage.jsx'; 
import Dashboard from './features/dashboard/pages/Dashboard.jsx';
import Contact from './features/contact/Contact.jsx';
import Profile from './features/profile/Profile.jsx';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const isProductsPage = location.pathname === '/products';

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleIncreaseQuantity = (productId) => {
    setCartItems(
      cartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  const handleDecreaseQuantity = (productId) => {
    setCartItems(
      cartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0)
    );
  };

  return (
    <>
      <Header cartItemCount={cartItems.length} showCartIcon={isProductsPage} />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/products"
            element={<ProductsPage onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/car"
            element={<CartPage 
              cartItems={cartItems} 
              onRemoveFromCart={handleRemoveFromCart}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
            />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;