import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navigation(){
    return(
        <nav className="navigation">
            <FontAwesomeIcon icon="bars" className="navigation-mobile" />
            <h3>Cathy Boutiq</h3>
            <div className="navigation-desktop">
                <p>Products</p>
                <p>Contact</p>
            </div>
            <FontAwesomeIcon icon="shopping-bag" />
        </nav>
    )
}

export default Navigation;