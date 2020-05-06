import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import PopularProducts from './PopularProducts';

function Homepage(){
    return(
        <main>
            <Header />
            <AboutUs /> 
            <PopularProducts />
        </main>
    )
}

export default Homepage;