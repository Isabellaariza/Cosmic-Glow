import React from 'react';
import './CarPage.css';

export function CartPage({ cartItems, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity }) {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
        <h1 className="page-title">Carrito de Compras</h1>
        {cartItems.length === 0 ? (
            <p className="empty-cart-message">Tu carrito está vacío. 🛒</p>
        ) : (
            <div className="cart-content">
            <div className="cart-items">
                {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title || item.name} className="cart-item-image" />
                    <div className="item-details">
                    <h3 className="item-name">{item.title || item.name}</h3>
                    <p className="item-price">${item.price.toFixed(3)}</p>
                    </div>
                    <div className="item-quantity">
                        <div className="quantity-controls">
                            <button className="quantity-btn" onClick={() => onDecreaseQuantity(item.id)}>-</button>
                            <span className="quantity-display">{item.quantity}</span>
                            <button className="quantity-btn" onClick={() => onIncreaseQuantity(item.id)}>+</button>
                        </div>
                    </div>
                    <div className="item-total">
                    <span className="quantity-label">Subtotal: </span>
                    <span>${(item.price * item.quantity).toFixed(3)}</span>
                    </div>
                    <button
                    className="remove-item-btn"
                    onClick={() => onRemoveFromCart(item.id)}
                    >
                    Eliminar
                    </button>
                </div>
                ))}
            </div>
            <div className="cart-summary">
                <h2>Resumen del Pedido</h2>
                <div className="summary-row">
                <span>Total de Productos:</span>
                <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
                </div>
                <div className="summary-row total-amount">
                <span>Total a Pagar:</span>
                <span>${total.toFixed(3)}</span>
                </div>
                <button className="checkout-btn">Pagar</button>
            </div>
            </div>
        )}
        </div>
    );
}

