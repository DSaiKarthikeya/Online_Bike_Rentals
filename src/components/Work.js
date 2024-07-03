import React from 'react';
import './Work.css';

const Work = () => (
  <section className="work" id="work">
    <div className="heading container">
      <span>HOW IT WORKS</span>
      <h2>Easy Steps to Rent</h2>
    </div>
    <div className="work-container container">
      <div className="work-box">
        <i className="ri-medal-line"></i>
        <h3 className="work-title">Find the right motorbike</h3>
        <p className="work-description">
          Enter a location and date to browse and compare thousands 
          of motorbikes available to rent in over 600 cities.
        </p>
      </div>
      <div className="work-box">
        <i className="ri-bank-card-line"></i>
        <h3 className="work-title">Book at the best price</h3>
        <p className="work-description">
          Our prices are guaranteed equal or lower than you can book on arrival! 
          Cancel for free up to 24 hours before.
        </p>
      </div>
      <div className="work-box">
        <i className="ri-medal-line"></i>
        <h3 className="work-title">Enjoy the ride</h3>
        <p className="work-description">
          Have the motorbike delivered or pick it up from the local rental
          office. Show voucher, grab the keys, and hit the road. 
        </p>
      </div>
    </div>
  </section>
);

export default Work;
