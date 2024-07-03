import React from 'react';
import { bikeData } from '../data';
import './Bikes.css';

const createBikeBox = (bike) => (
  <div className="bike-box" key={bike.name}>
    <img src={`images/${bike.image}`} alt="" className="bike-img"/>
    <div className="title-price">
      <div className="title-data">
        <h2>{bike.name}</h2>
        <p>{bike.type}</p>
      </div>
      <h3 className="bike-price">${bike.price} <span>/day</span></h3>
    </div>
    <a href="#" className="book-btn"><i className="ri-send-plane-fill"></i> Book Now</a>
    <span className="tag">{bike.tag}</span>
  </div>
);

const Bikes = () => (
  <section className="bikes container" id="bikes">
    <div className="heading">
      <span>LAST MINUTE OFFERS</span>
      <h2>Motorcycle & Scooters for rent</h2>
    </div>
    <div className="bikes-content">
      {bikeData.map(createBikeBox)}
    </div>
  </section>
);

export default Bikes;
