import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navigation(){
    return(
        <nav>
            <FontAwesomeIcon icon="bars" className="navigation-mobile" />
            <NavLink to="/" className="navigation-logo">Cathy Boutiq</NavLink>
            <div className="navigation-desktop">
                <NavLink to="/produits">Products</NavLink>
                <p>Contact</p>
            </div>
            <FontAwesomeIcon icon="shopping-bag" />
        </nav>
    )
}

export default Navigation;