import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './features/shared/components/Header/Header.jsx'; 
import { ProductsPage } from './features/products/pages/ProductsPage.jsx';
import { CartPage } from './features/car/pages/CarPage.jsx'; 
import Dashboard from './features/dashboard/pages/Dashboard.jsx';
import Contact from './features/contact/Contact.jsx';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Glow Filter',
      price: 60,
      image: 'https://montoccosmetictools.com/cdn/shop/files/glow_filter_montoc_pre_base_para_maquillaje.jpg?v=1737551425&width=1200',
      description: 'Un filtro de brillo para un look radiante y saludable.'
    },
    {
      id: 2,
      name: 'Base Humide',
      price: 60,
      image: 'https://montoccosmetictools.com/cdn/shop/files/Base_de_maquillaje.jpg?v=1752507071&width=1200',
      description: 'Base de maquillaje ligera y transpirable que deja un acabado natural.'
    },
    {
      id: 3,
      name: 'Gel Facial Hidratante',
      price: 61,
      image: 'https://montoccosmetictools.com/cdn/shop/files/MG_5971.jpg?v=1711482762&width=1200',
      description: 'Gel hidratante con ácido hialurónico para una piel fresca y revitalizada.'
    },
    {
      id: 4,
      name: 'Paleta de Sombras',
      price: 32,
      image: 'https://montoccosmetictools.com/cdn/shop/files/Harmony-Dalia-2.jpg?v=1755031811&width=1200',
      description: 'Paleta de 6 sombras con colores mate y brillosos para looks de día y de noche.'
    },
    {
      id: 5,
      name: 'Gloss',
      price: 26,
      image: 'https://montoccosmetictools.com/cdn/shop/files/Ariel_338c20a7-31be-4b34-958d-15d623702341.jpg?v=1749657521&width=1200',
      description: 'Labios perfectamente hidratados durante todo el día. Incorpora cerámica fría, moringa y ácido hialurónico que hidratarán a tus labios.'
    },
    {
      id: 6,
      name: 'Iluminador',
      price: 35,
      image: 'https://montoccosmetictools.com/cdn/shop/files/ILUMINADORES_CHAMPAGNE.png?v=1738877440&width=1200',
      description: 'Los pigmentos perlados ultrareflejantes capturan la luz de manera espectacular, iluminando tu rostro y dándote un efecto radiante al instante.'
    },
    {
      id: 7,
      name: 'Rubor en crema',
      price: 36,
      image: 'https://montoccosmetictools.com/cdn/shop/products/37-1.jpg?v=1742479857&width=1200',
      description: 'Su textura cremosa y pigmentación intensa te brindan un acabado natural y duradero, ideal para un maquillaje fresco, radiante y luminoso.'
    },
    {
      id: 8,
      name: 'Corrector',
      price: 40,
      image: 'https://montoccosmetictools.com/cdn/shop/files/Corrector_EMPAQUE.png?v=1757099623&width=1200',
      description: 'es un corrector en gel de cobertura media alta, diseñado para lograr una piel fresca, luminosa y uniforme sin marcar las líneas finas.'
    }
  ]);
  
  const [cartItems, setCartItems] = useState([]);

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
      <Header cartItemCount={cartItems.length} />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/products"
          element={<ProductsPage products={products} onAddToCart={handleAddToCart} />}
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
      </Routes>
    </>
  );
}

export default App;