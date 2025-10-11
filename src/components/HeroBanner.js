import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918501839285";
    const message = "Hi, I'm interested in renting construction materials from SV Rentals.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="hero-banner" className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">Construction Materials for Rent</h1>
        <p className="hero-subtitle">In Stock : Sheets & Pillar Boxes</p>
        <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
          WhatsApp Us Now
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
