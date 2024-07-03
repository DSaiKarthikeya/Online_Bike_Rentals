import React from 'react';
import { reviewsData } from '../data';
import './Reviews.css';

const createReviewBox = (review) => (
  <div className="review-box" key={review.author}>
    <div className="review-content">
      <img src={`images/${review.avatar}`} alt="avatar" className="review-img"/>
      <div className="review-text">
        <p>{review.text}</p>
        <span className="review-author">{review.author}</span>
      </div>
    </div>
  </div>
);

const Reviews = () => (
  <section className="reviews" id="reviews">
    <div className="heading container">
      <span>WHAT OUR CUSTOMERS SAY</span>
      <h2>Customer Reviews</h2>
    </div>
    <div className="reviews-container">
      {reviewsData.map(createReviewBox)}
    </div>
  </section>
);

export default Reviews;
