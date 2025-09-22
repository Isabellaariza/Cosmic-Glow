import React from 'react';
import { useId } from 'react';
import './Footer.css';

const Footer = () => {
    const id = useId();

    return (
        <footer className="main-footer">
        <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Cosmic Glow. Todos los derechos reservados.</p>
            <div className="social-links">
                <a href="#" className="social-icon">Instagram</a>
                <a href="#" className="social-icon">TikTok</a>
                <a href="#" className="social-icon">Facebook</a>
                <a href="#" className="social-icon">Twitter</a>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
