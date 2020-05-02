import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navigation(){
    return(
        <nav className="navigation">
            <FontAwesomeIcon icon="bars" className="navigation-mobile" />
            <h3>Cathy Boutiq</h3>
            <div className="navigation-desktop">
                <div>
                    <p>Products</p>
                    <p>Contact</p>
                </div>
                <div className="navigation-desktop-search">
                    <FontAwesomeIcon icon="search" />
                    <input type="text" />
                </div>
            </div>
            <FontAwesomeIcon icon="shopping-bag" />
        </nav>
    )
}

export default Navigation;