import React from 'react';
import './Destination.css';

const Destination = () => (
  <section className="destination" id="destination">
    <div className="heading container">
      <span>ONE-OF-A-KIND MOTORCYCLE RENTALS</span>
      <h2>Search, Compare, Reserve.</h2>
    </div>
    <div className="destination-container swiper-container">
      <div className="swiper-wrapper">
        {/* Swiper slides will be dynamically inserted here */}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  </section>
);

export default Destination;
