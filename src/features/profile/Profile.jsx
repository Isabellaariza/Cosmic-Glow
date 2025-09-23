import React, { useState, useEffect } from 'react';
import Footer from '../shared/components/Footer/Footer.jsx';
import './Profile.css';

const Profile = () => {
    const getStoredUserInfo = () => {
        const stored = localStorage.getItem('cosmicGlowUserInfo');
        return stored ? JSON.parse(stored) : {
            name: 'Isabella Ariza',
            email: 'isabella@cosmicglow.com',
            phone: '+57 323 448 0484',
            address: 'Carrera 95 #70 GA-16, Medellín-Colombia',
            birthDate: '2007-6-1'
        };
    };

    const [userInfo, setUserInfo] = useState(getStoredUserInfo);
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState(userInfo);

    const handleEdit = () => {
        setIsEditing(true);
        setEditForm(userInfo);
    };

    const handleSave = () => {
        setUserInfo(editForm);
        localStorage.setItem('cosmicGlowUserInfo', JSON.stringify(editForm));
        setIsEditing(false);
        alert('Perfil actualizado correctamente');
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditForm(userInfo);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="profile-layout">
            <div className="profile-container">
                <div className="profile-header">
                    <div className="profile-avatar">
                        <span className="avatar-icon">👤</span>
                    </div>
                    <h1 className="profile-title">Mi Perfil</h1>
                    <p className="profile-subtitle">Gestiona tu información personal</p>
                </div>

                <div className="profile-content">
                    <div className="profile-card">
                        <div className="card-header">
                            <h2>Información Personal</h2>
                            {!isEditing && (
                                <button className="edit-btn" onClick={handleEdit}>
                                    ✏️ Editar
                                </button>
                            )}
                        </div>

                        {isEditing ? (
                            <form className="edit-form">
                                <div className="form-group">
                                    <label>Nombre Completo</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={editForm.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={editForm.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Teléfono</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={editForm.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Dirección</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={editForm.address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Fecha de Nacimiento</label>
                                    <input
                                        type="date"
                                        name="birthDate"
                                        value={editForm.birthDate}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-actions">
                                    <button type="button" className="save-btn" onClick={handleSave}>
                                        💾 Guardar
                                    </button>
                                    <button type="button" className="cancel-btn" onClick={handleCancel}>
                                        ❌ Cancelar
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="profile-info">
                                <div className="info-item">
                                    <span className="info-label">📧 Email:</span>
                                    <span className="info-value">{userInfo.email}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">📱 Teléfono:</span>
                                    <span className="info-value">{userInfo.phone}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">📍 Dirección:</span>
                                    <span className="info-value">{userInfo.address}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">🎂 Fecha de Nacimiento:</span>
                                    <span className="info-value">{new Date(userInfo.birthDate).toLocaleDateString('es-CO')}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="profile-stats">
                        <div className="stat-card">
                            <h3>🛒 Pedidos Realizados</h3>
                            <p className="stat-number">12</p>
                        </div>
                        <div className="stat-card">
                            <h3>💰 Total Gastado</h3>
                            <p className="stat-number">$2,450,000 COP</p>
                        </div>
                        <div className="stat-card">
                            <h3>⭐ Puntos de Fidelidad</h3>
                            <p className="stat-number">1,250</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;