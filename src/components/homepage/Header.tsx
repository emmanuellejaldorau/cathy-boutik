import React from 'react';
import avocadoImage from '../../images/header-avocado.png';

function Header(){
    return (
        <div className="header">
            <div className="header-title">
                {/* <h1>ACHETEZ VOS FRUITS ET LEGUMES DIRECTEMENT AVEC VOTRE PRODUCTEUR</h1> */}
                <h1>Achetez vos fruits et légumes directement avec votre producteur.</h1>
            </div>
            <img src={avocadoImage} alt="Avocados" /> 
        </div>
    )

}

export default Header;