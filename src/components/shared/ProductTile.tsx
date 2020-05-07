import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import passionFruitImage from '../../images/passion-fruit.png';

interface Props {
    type: string;
}

function ProductTile(props:Props){
    const width = props.type === "homepage" ? 
                    window.screen.width > 450 ? "25%" : "75%" 
                    :  window.screen.width > 450 ? "20%" : "40%";
    const widthStyle = {width};
    return(
        <div className="product-tile" style={widthStyle}>
            <div className="product-tile-image">
                <img src={passionFruitImage} alt="Fruit de la passion" />
            </div>
            <div className="product-tile-description">
                <p>Fruit de la passion</p>
                <p className="product-tile-price">1,99€/kg</p>
            </div>
            <div className="product-tile-actions">
                <div className="product-tile-kilos">
                    <FontAwesomeIcon icon="minus-circle" />
                    <p>1kg</p>
                    <FontAwesomeIcon icon="plus-circle" />
                </div>
                <button className="product-tile-cta">Ajoutez au panier</button>
            </div>
        </div>
    )
}

export default ProductTile;