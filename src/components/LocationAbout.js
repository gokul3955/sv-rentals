import React from 'react';
import './LocationAbout.css';

const LocationAbout = () => {
  const handleViewOnMaps = () => {
    const address = "C Ramapuram, Tirupati Rural, AP";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section id="about" className="location-about-section">
      <div className="location-about-container">
        {/* Our Location */}
        <div className="location-section">
          <div className="location-header">
            <span className="location-icon">📍</span>
            <h3>Our Location</h3>
          </div>
          <button className="maps-btn" onClick={handleViewOnMaps}>
            View on Google Maps
          </button>
        </div>

        {/* About SV Rentals */}
        <div className="about-section">
          <h3>About SV Rentals</h3>
          <div className="about-content">
            <p>SV Rentals is a family-run business providing high-quality construction materials on rent for house building and construction projects.</p>
            <p>Trusted by local contractors and homeowners.</p>
            <p>We ensure flexible rental options, safe delivery, and well-maintained materials.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAbout;
