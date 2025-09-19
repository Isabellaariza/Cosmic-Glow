import React from 'react';

export function ProductCard({ product, onAddToCart }) {
  return (
    <>
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price.toFixed(3)}</p>
          <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
}