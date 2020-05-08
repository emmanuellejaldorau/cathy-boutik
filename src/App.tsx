import React from 'react';
import './App.css';
import Navigation from './components/shared/Navigation';
import Homepage from './components/homepage/Homepage';
import Footer from './components/shared/Footer';
import ProductList from './components/product-list/ProductList';

function App() {
  return (
    <>
      <Navigation />
      {/* <Homepage /> */}
      <ProductList />
      <Footer/>
    </>
  );
}

export default App;
