import React from 'react';
import { useId } from 'react';
import './Footer.css';

const Footer = () => {
    const id = useId();

    return (
        <footer className="main-footer">
        <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Tiendita. Todos los derechos reservados.</p>
            <div className="social-links">
            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
