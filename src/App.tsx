import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/shared/Navigation';
import Footer from './components/shared/Footer';
import Homepage from './components/homepage/Homepage';
import ProductList from './components/product-list/ProductList';
import NotFound from './components/not-found/NotFound';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/produits" component={ProductList} />
          <Route path="/contact" component={Contact} />
          <Route path="/panier" component={Cart} />
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
