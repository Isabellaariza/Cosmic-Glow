import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../shared/components/Header/Header.jsx';
import Footer from '../shared/components/Footer/Footer.jsx'; 
import './Contact.css'; 

const Contact = () => {
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatusMessage('');

        emailjs.sendForm('service_1v95kp3', 'template_b4z7g5f', form.current, {
            publicKey: 'xtAGZytaRCgR1-fgn',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                setStatusMessage('¡Tu mensaje ha sido enviado exitosamente!');
                form.current.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
                setStatusMessage('Hubo un error al enviar tu mensaje. Inténtalo de nuevo.');
            },
        );
    };

    return (
        <div className="contact-layout">
            <main className="contact-content">
                <div className="contact-form-section">
                    <h2>Contáctanos</h2>
                    {statusMessage && (
                        <div className={statusMessage.includes('exitosamente') ? 'success-message' : 'error-message'}>
                            {statusMessage}
                        </div>
                    )}
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <label htmlFor="user_name">Nombre:</label>
                            <input type="text" id="user_name" name="user_name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_email">Correo:</label>
                            <input type="email" id="user_email" name="user_email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje:</label>
                            <textarea id="message" name="message" required />
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;