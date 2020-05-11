import React from 'react';
import './Contact.css';
import avocadoImage from '../../images/header-avocado.png';

function Contact(){
    return(
        <main className="contact" >
            <div className="contact-description">
                <img src={avocadoImage} alt="Avocados" />
                <div>
                    <h2>Contactez-nous</h2>
                    <p>Vous n'aimez pas les formulaires? Envoyez nous un email.</p>
                </div>
            </div>
            <form className="contact-form">
                <label className="contact-label">
                    Votre Nom :
                    <input type="text" name="name" />
                </label>
                <label className="contact-label">
                    Votre Email :
                    <input type="text" name="email" />
                </label>
                <label className="contact-label">
                    Votre Message :
                    <textarea rows={4} name="message" />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        </main>
    )
}

export default Contact;