import React from 'react';
import './CenteringSheets.css';

const HowRentingWorks = () => {
  return (
    <section id="how-renting-works" className="how-renting-section">
      <div className="how-renting-container">
        <h2 className="how-renting-title">How Renting Works</h2>
        <div className="process-steps">
          <div className="step">
            <span className="step-number">1</span>
            <p>Contact us via WhatsApp or Phone</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <p>Confirm availability & pay security deposit</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <p>Delivery / Pick-up of materials</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <p>Return items & receive deposit refund</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowRentingWorks;
