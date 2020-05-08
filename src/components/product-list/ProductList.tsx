import React from 'react';
import './ProductList.css';
import ProductTile from '../shared/ProductTile';

function ProductList(){
    return(
        <main>
            <ProductTile />
            <ProductTile />
        </main>
    )
}

export default ProductList;