import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../../api/products_api.js';
import Footer from '../../shared/components/Footer/Footer.jsx';
import './Dashboard.css';

const Dashboard = () => {
    const [email, setEmail] = useState('');
    const [userName] = useState('Beauty');
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const loadFeaturedProducts = async () => {
            try {
                const products = await fetchProducts();
                setFeaturedProducts(products.slice(0, 3));
            } catch (error) {
                console.error('Error loading featured products:', error);
            }
        };
        loadFeaturedProducts();
    }, []);

    const testimonials = [
        {
            name: 'María González',
            rating: 5,
            comment: 'Productos increíbles, mi piel nunca se había visto tan radiante. ¡Totalmente recomendado!'
        },
        {
            name: 'Ana Rodríguez',
            rating: 5,
            comment: 'La calidad es excepcional y los precios muy accesibles. Mi tienda favorita de belleza.'
        }
    ];

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        alert('¡Gracias por suscribirte! Recibirás nuestras mejores ofertas.');
        setEmail('');
    };

    return (
        <div className="dashboard-layout">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Bienvenido a Cosmic Glow, <span className="hero-username">{userName}!</span></h1>
                    <p className="hero-subtitle">
                        Descubre tu belleza natural con nuestra colección exclusiva de productos de maquillaje y cuidado de la piel. 
                        Calidad premium, precios accesibles.
                    </p>
                    <Link to="/products" className="hero-btn">Explorar Productos</Link>
                </div>
            </section>

            {/* Featured Products */}
            <section className="featured-section">
                <h2 className="section-title">Productos Destacados</h2>
                <div className="featured-grid">
                    {featuredProducts.map(product => (
                        <div key={product.id} className="featured-card">
                            <img src={product.image} alt={product.title || product.name} className="featured-image" />
                            <h3 className="featured-name">{product.title || product.name}</h3>
                            <p className="featured-price">${(product.price * 4000).toLocaleString('es-CO')} COP</p>
                            <Link to="/products" className="featured-btn">Ver Más</Link>
                        </div>
                    ))}
                </div>
            </section>



            {/* Testimonials */}
            <section className="testimonials-section">
                <h2 className="section-title">Lo que dicen nuestras clientas</h2>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="stars">
                                {'★'.repeat(testimonial.rating)}
                            </div>
                            <p className="testimonial-text">"{testimonial.comment}"</p>
                            <p className="testimonial-author">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Store Info */}
            <section className="info-section">
                <div className="info-grid">
                    <div className="info-card">
                        <h3>🚚 Envío Gratis</h3>
                        <p>En compras mayores a $100</p>
                    </div>
                    <div className="info-card">
                        <h3>💳 Pago Seguro</h3>
                        <p>Aceptamos todas las tarjetas</p>
                    </div>
                    <div className="info-card">
                        <h3>🔄 Garantía</h3>
                        <p>30 días de garantía</p>
                    </div>
                </div>
            </section>





            <Footer />
        </div>
    );
};

export default Dashboard;