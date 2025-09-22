import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../shared/components/Header/Header.jsx';
import { Footer } from '../../shared/components/Footer/Footer.jsx';

export function MainLayout() {
    const layoutStyle = { 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
    };
    const mainStyle = {
        flexGrow: 1,
        padding: '2rem',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto'
    };

    return (
        <div style={layoutStyle}>
        <Header />
        <main style={mainStyle}>
            <Outlet />
        </main>
        <Footer />
        </div>
    );
}