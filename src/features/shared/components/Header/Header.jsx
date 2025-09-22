import React from 'react';
import { useId } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ cartItemCount }) => {
  const id = useId();
  return (
    <header className="main-header">
      <nav className="nav-container">
        <Link to="/" className="logo-link">
          Cosmic Glow
        </Link>
        <ul className="nav-links">
          <li><Link to="/dashboard" className="nav-item">Dashboard</Link></li>
          <li><Link to="/products" className="nav-item">Products</Link></li>
          <li>
            <Link to="/car" className="nav-item">
              🛒 ({cartItemCount})
            </Link>
          </li>
          <li><Link to="/contact" className="nav-item">Contact</Link></li>
          <li><Link to="/profile" className="nav-item">Profile</Link></li>
          <li><Link to="/logout" className="nav-item">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;