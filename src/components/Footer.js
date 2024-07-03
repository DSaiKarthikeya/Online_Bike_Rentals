// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 BIKE RENTALS. All rights reserved.</p>
        <div className="social-icons">
          {/* Add your social icons or links here */}
          <a href="#"><i className="ri-facebook-fill"></i></a>
          <a href="#"><i className="ri-twitter-fill"></i></a>
          <a href="#"><i className="ri-instagram-fill"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
