import React from 'react';
import { Link } from "react-router-dom";
import './NotFound.css';
import avocadoImage from '../../images/avocado.png';

function NotFound(){
    return(
        <main className="not-found">
            <div className="not-found-title">
                <p>4</p>
                <img src={avocadoImage} alt="Avocado" />
                <p>4</p>
            </div>
            <div className="not-found-description">
                <p>Oups! Cette page n'est pas disponible.</p>
                <button>
                    <Link to="/">
                        Retour à la page d'acceuil
                    </Link>
                </button>
            </div>
        </main>
    )
}

export default NotFound;