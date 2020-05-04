import React from 'react';
import avocadoImage from '../../images/header-avocado.png';
// import lycheeImage from '../../images/header-lychee.png';
// import passionFruitImage from '../../images/header-passion-fruit.png';

function Header(){
    return (
        <div className="header">
            <div className="header-title">
                <h1>Achetez vos fruits et légumes directement avec votre producteur.</h1>
            </div>
            <img src={avocadoImage} alt="Avocados" />
            <button className="header-cta">Achetez maintenant</button> 
        </div>
    )

}

export default Header;