import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navigation(){
    return(
        <nav className="navigation">
            <FontAwesomeIcon icon="bars" />
            <h5>Cathy Boutiq</h5>
            <FontAwesomeIcon icon="shopping-bag" />
        </nav>
    )
}

export default Navigation;