import React from 'react';
import ProductTile from '../shared/ProductTile';

function PopularProducts(){
    return(
        <div className="popular-products">
            <h2>Produits les plus poulaires</h2>
            <div className="title-decoration"></div>
            <div className="product-tile-list">
                <ProductTile />
                <ProductTile />
                <ProductTile />
            </div>

        </div>
    )
}

export default PopularProducts;