import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About SV Rentals</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              SV Rentals is a trusted construction materials rental company serving the Tirupati region. 
              We provide high-quality construction materials including Square Pillar Boxes and Centering Sheets 
              for your construction projects.
            </p>
            
            <p>
              With years of experience in the construction industry, we understand the importance of reliable 
              and durable materials. Our rental services help you save costs while ensuring you have access 
              to the best quality construction materials when you need them.
            </p>
            
            <p>
              We offer flexible rental terms, competitive pricing, and excellent customer service. 
              Our team is dedicated to supporting your construction projects with timely delivery 
              and professional service.
            </p>
          </div>
          
          <div className="about-features">
            <div className="feature">
              <h3>🏗️ Quality Materials</h3>
              <p>High-quality construction materials for all your projects</p>
            </div>
            
            <div className="feature">
              <h3>💰 Competitive Pricing</h3>
              <p>Affordable rental rates with flexible terms</p>
            </div>
            
            <div className="feature">
              <h3>🚚 Timely Delivery</h3>
              <p>Fast and reliable delivery service</p>
            </div>
            
            <div className="feature">
              <h3>📞 Excellent Support</h3>
              <p>24/7 customer support for all your needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
