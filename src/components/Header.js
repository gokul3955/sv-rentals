import React from 'react';
import './Header.css';

const Header = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    // Map navigation items to actual section IDs
    const sectionMap = {
      'home': 'hero-banner',
      'our-materials': 'our-materials',
      'how-it-works': 'how-it-works',
      'contact': 'contact',
      'about': 'about'
    };
    
    const targetSection = sectionMap[sectionId];
    const element = document.getElementById(targetSection);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">
            <img 
              src={`/logo192.png?v=${Date.now()}`} 
              alt="SV Rentals Logo" 
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <span className="logo-text" style={{display: 'flex'}}>SV</span>
          </div>
          <h1 className="company-name">SV Rentals</h1>
        </div>
        <nav className="navigation">
          <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#our-materials" className="nav-link" onClick={(e) => handleNavClick(e, 'our-materials')}>Our Materials</a>
          <a href="#how-it-works" className="nav-link" onClick={(e) => handleNavClick(e, 'how-it-works')}>How It Works</a>
          <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
        </nav>
      </div>
      <div className="header-divider"></div>
    </header>
  );
};

export default Header;
