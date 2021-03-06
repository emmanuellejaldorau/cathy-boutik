import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AboutUs(){
    return(
        <div className="about-us">
            <h2>Information Utiles</h2>
            <div className="title-decoration"></div>
            <div className="about-us-tiles">
                <div>
                    <FontAwesomeIcon icon="hands" className="about-us-icon" />
                    <p className="about-us-text">Culture sans pesticides, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div>
                    <FontAwesomeIcon icon="map-marker-alt" className="about-us-icon" />
                    <p className="about-us-text">Production locale, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div>
                    <FontAwesomeIcon icon="truck" className="about-us-icon" />
                    <p className="about-us-text">Lieux de pick up, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;