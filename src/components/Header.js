import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <div className="nav">
      <a href="#" className="logo">Bike-Rent</a>
      <div className="navbar">
        <a href="#home" className="nav-link">Home</a>
        <a href="#bikes" className="nav-link">Bikes</a>
        <a href="#destination" className="nav-link">Destination</a>
        <a href="#reviews" className="nav-link">Reviews</a>
        {/* <a href="#" className="mobile-sign-up">Sign Up</a> */}
      </div>
      <a href="#" className="sign-up">Sign Up</a>
      <div className="menu-icon">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  </header>
);

export default Header;
