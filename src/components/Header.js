import React from 'react';
import './Header.css';

const Header = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    // Map navigation items to actual section IDs
    const sectionMap = {
      'home': 'hero-banner',
      'our-materials': 'our-materials',
      'how-it-works': 'how-renting-works',
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
          <h1 className="company-name">CSR Rentals</h1>
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
