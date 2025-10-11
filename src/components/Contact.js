import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleGoogleMaps = () => {
    const address = "C Ramapuram, Tirupati Rural, AP";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  const handleWhatsApp = () => {
    const phoneNumber = "918501839285";
    const message = "Hi, I'm interested in your construction materials rental services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>📍 Shop Address</h3>
              <p>C Ramapuram, Tirupati Rural, AP</p>
            </div>
            
            <div className="contact-item">
              <h3>📞 Phone</h3>
              <p>+91 8501839285</p>
            </div>
            
            <div className="contact-item">
              <h3>💬 WhatsApp</h3>
              <p>+91 8501839285</p>
            </div>
          </div>
          
          <div className="contact-buttons">
            <button className="maps-btn" onClick={handleGoogleMaps}>
              📍 View on Google Maps
            </button>
            <button className="whatsapp-btn" onClick={handleWhatsApp}>
              💬 Contact on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
