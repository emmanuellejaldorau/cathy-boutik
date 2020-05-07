import React from 'react';
import './App.css';
import Navigation from './components/shared/Navigation';
import Homepage from './components/homepage/Homepage';
import Footer from './components/shared/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Homepage />
      <Footer/>
    </>
  );
}

export default App;
