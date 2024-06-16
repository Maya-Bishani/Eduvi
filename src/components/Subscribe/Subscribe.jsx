import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <img src="/images/subscribe/topRight.svg" className="photo photo1" alt="photo1" />
      <img src="/images/subscribe/middleRight.svg" className="photo photo2" alt="photo2" />
      <img src="/images/subscribe/bottomRight.svg" className="photo photo3" alt="photo3" />
      <img src="/images/subscribe/topLeft.svg" className="photo photo4" alt="photo4" />
      <img src="/images/subscribe/middleLeft.svg" className="photo photo5" alt="photo5" />
      <img src="/images/subscribe/bottomLeft.svg" className="photo photo6" alt="photo6" />

      <div className="subscribe-content">
        <h2>Subscribe For Get Update <br/> Every New Courses</h2>
        <span className="subscribe-text">20k+ students daily learn with Eduvi. Subscribe for new courses.</span>
        <form className="subscribe-form">
          <input type="email" className="form-control" placeholder="enter your email" required />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
