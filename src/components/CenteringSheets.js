import React from 'react';
import './CenteringSheets.css';

const sheets = [
  {
    name: "Small Centering Sheet",
    size: "2ft x 2ft",
    rent: "₹25/Day",
    imageUrl: "/api/placeholder/300/200",
    hasImage: true
  },
  {
    name: "Medium Centering Sheet",
    size: "3ft x 2.5ft",
    rent: "₹30/Day",
    imageUrl: "/api/placeholder/300/200",
    hasImage: false
  },
  {
    name: "Large Centering Sheet",
    size: "4ft x 3ft",
    rent: "₹40/Day",
    imageUrl: "/api/placeholder/300/200",
    hasImage: false
  },
];

const CenteringSheets = () => {
  const handleBookNow = (sheetName) => {
    const phoneNumber = "918501839285";
    const message = `Hi, I'm interested in booking ${sheetName} from SV Rentals.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="how-it-works" className="centering-sheets-section">
      <div className="centering-container">
        {/* Header */}
        <div className="sheets-header">
          <h2>Centering Sheets</h2>
        </div>

        {/* Product Details */}
        <div className="sheets-content">
          {sheets.map((sheet, index) => (
            <div key={index} className="sheet-product-card">
              <div className="sheet-image">
                {sheet.hasImage ? (
                  <img 
                    src={sheet.imageUrl} 
                    alt={sheet.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className="placeholder-sheet"
                  style={{ display: sheet.hasImage ? 'none' : 'flex' }}
                >
                  <span>{sheet.name}</span>
                </div>
              </div>
              <div className="sheet-info">
                <h3>{sheet.name}</h3>
                <p><strong>Size:</strong> {sheet.size}</p>
                <p><strong>Rent:</strong> {sheet.rent}</p>
                <button className="book-sheet-btn" onClick={() => handleBookNow(sheet.name)}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* How Renting Works - Dedicated Section */}
        <div id="how-renting-works" className="how-renting-section">
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
        </div>

      </div>
    </section>
  );
};

export default CenteringSheets;
