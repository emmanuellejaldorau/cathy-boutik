import React from 'react';
import { Link } from "react-router-dom";
import './Cart.css';

function Cart(){
    return(
        <main className="cart">
            <div className="cart-section">
                <p>Votre panier est vide</p>
                <button className="cart-cta"> 
                    <Link to="/produits">Découvrez nos produits</Link>
                </button>
            </div>
            <div className="cart-section">
                <p>Besoin d'aide?</p>
                <button className="cart-cta">
                    <Link to="/contact">Contactez-nous</Link>
                </button>

            </div>
        </main>
    )
}

export default Cart;