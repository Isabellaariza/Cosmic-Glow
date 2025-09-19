import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../../api/products_api";
import "./ProductsPage.css";

// Componente para la tarjeta de producto, ahora definido aquí.
function ProductCard({ product, onAddToCart }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.title} />
      <div className="product-info">
        <h3 className="product-name">{product.title}</h3>
        <p 
          className={`product-description ${isExpanded ? 'expanded' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {product.description}
        </p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

// Componente de la página de productos
export function ProductsPage({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const apiProducts = await fetchProducts();
        setProducts(apiProducts);
        setFilteredProducts(apiProducts);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const categories = ['all', ...new Set(products.map(product => product.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  if (isLoading) {
    return (
      <div className="products-container">
        <div className="loading-message">
          <span>Cargando productos...</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="products-container">
      <h1 className="page-title">Catálogo de Productos</h1>
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category === 'all' ? 'Todos' : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
