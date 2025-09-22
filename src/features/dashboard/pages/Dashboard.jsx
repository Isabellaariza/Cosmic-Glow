import React from 'react';
import { useId, useState } from 'react';
import Header from '../../shared/components/Header/Header.jsx';
import Footer from '../../shared/components/Footer/Footer.jsx';
import './Dashboard.css';

const Dashboard = () => {
    const id = useId();
    const [userName] = useState('Beauty');

    return (
        <div className="dashboard-layout">
        <main className="dashboard-content">
            <h1 className="dashboard-title">Bienvenido a Cosmic Glow, <span className="dashboard-username">{userName}!</span></h1>
            <p className="dashboard-subtitle">Esta es la página principal de nuestra página de belleza, en esta página encontrarás tus productos favoritos. 
                Explora nuestra amplia selección de maquillaje y cuidado de la piel, cuidadosamente seleccionadas para realzar tu belleza natural. 
                Descubre los últimos lanzamientos de las marcas más prestigiosas, aprovecha ofertas exclusivas. Tu viaje hacia un nuevo look comienza aquí,
                en un espacio diseñado para que cada visita sea un momento de puro deleite y descubrimiento.</p>
            
            <div className="dashboard-grid">
            <div className="dashboard-card">
                <h2 className="card-title">Mayoristas</h2>
                <p className="card-text">Productos para tiendas mayoristas.</p>
            </div>
            <div className="dashboard-card">
                <h2 className="card-title">Calidad</h2>
                <p className="card-text">Productos con una calidad excelente.</p>
            </div>
            <div className="dashboard-card">
                <h2 className="card-title">Marcas</h2>
                <p className="card-text">Marcas nacionales/internacionales accequibles.</p>
            </div>
            </div>
        </main>
        <Footer />
        </div>
    );
};

export default Dashboard;