import React from 'react';
import './ProductList.css';
import ProductTile from '../shared/ProductTile';
import Searchbar from './Searchbar';

function ProductList(){
    return(
        <main className="product-list">
            <Searchbar />
            <div className="products">
                <ProductTile />
                <ProductTile />
                <ProductTile />
                <ProductTile />
                <ProductTile />
            </div>
        </main>
    )
}

export default ProductList;