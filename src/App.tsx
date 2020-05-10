import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/shared/Navigation';
import Footer from './components/shared/Footer';
import Homepage from './components/homepage/Homepage';
import ProductList from './components/product-list/ProductList';
import NotFound from './components/not-found/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/produits" component={ProductList} />
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
