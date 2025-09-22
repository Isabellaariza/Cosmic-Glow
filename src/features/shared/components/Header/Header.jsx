import React, { useState } from 'react';
import { useId } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ cartItemCount, showCartIcon = false }) => {
  const id = useId();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <nav className="nav-container">
        <Link to="/" className="logo-link">
          Cosmic Glow
        </Link>
        
        <div className="nav-right">
          {showCartIcon && (
            <Link to="/car" className="cart-icon-link">
              🛒 <span className="cart-text">Carrito</span>
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </Link>
          )}
          
          <button className="hamburger-btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
          <li><Link to="/dashboard" className="nav-item" onClick={() => setIsMenuOpen(false)}>Dashboard</Link></li>
          <li><Link to="/products" className="nav-item" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
          {!showCartIcon && (
            <li>
              <Link to="/car" className="nav-item cart-link" onClick={() => setIsMenuOpen(false)}>
                🛒 <span className="cart-text">Carrito</span>
                {cartItemCount > 0 && (
                  <span className="cart-badge">{cartItemCount}</span>
                )}
              </Link>
            </li>
          )}
          <li><Link to="/contact" className="nav-item" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/profile" className="nav-item" onClick={() => setIsMenuOpen(false)}>Profile</Link></li>
          <li><Link to="/logout" className="nav-item" onClick={() => setIsMenuOpen(false)}>Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;