import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Bikes from './components/Bikes';
import Destination from './components/Destination';
import Reviews from './components/Reviews';
import Work from './components/Work';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div>
    <Header />
    <Home />
    <Bikes />
    <Destination />
    <Reviews />
    <Work />
    <Footer />

  </div>
);

export default App;
