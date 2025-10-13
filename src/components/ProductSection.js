import React from "react";
import "./ProductSection.css";

const pillarBoxes = [
  {
    name: "Small Pillar Box",
    size: "1.5ft x 1.5ft x 6ft",
    imageUrl: "/api/placeholder/300/200",
    hasImage: true
  },
  {
    name: "Medium Pillar Box",
    size: "2ft x 2ft x 7ft",
    imageUrl: "/api/placeholder/300/200",
    hasImage: false
  },
  {
    name: "Large Pillar Box",
    size: "2.5ft x 2.5ft x 8ft",
    imageUrl: "/api/placeholder/300/200",
    hasImage: false
  },
];

const centeringSheets = [
  {
    name: "Small Centering Sheet",
    size: "2ft x 2ft",
    imageUrl: "/api/placeholder/300/200",
    hasImage: true
  },
  {
    name: "Medium Centering Sheet",
    size: "3ft x 2.5ft",
    imageUrl: "/api/placeholder/300/200",
    hasImage: false
  },
  {
    name: "Large Centering Sheet",
    size: "4ft x 3ft",
    imageUrl: "/api/placeholder/300/200",
    hasImage: false
  },
];

const ProductSection = () => {
  const handleBookNow = (productName) => {
    const phoneNumber = "918501839285";
    const message = `Hi, I'm interested in booking ${productName} from SV Rentals.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="our-materials" className="product-section">
      <div className="product-container">
        {/* Square Pillar Boxes */}
        <div className="subsection">
          <h2 className="section-title">Square Pillar Boxes</h2>
          <div className="products-grid">
            {pillarBoxes.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  {product.hasImage ? (
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className="placeholder-image"
                    style={{ display: product.hasImage ? 'none' : 'flex' }}
                  >
                    <span>Pillar Box {product.name.split(' ')[0]}</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-details">
                    <p><strong>Size:</strong> {product.size}</p>
                  </div>
                  <button 
                    className="book-btn"
                    onClick={() => handleBookNow(product.name)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centering Sheets */}
        <div className="subsection">
          <h2 className="section-title">Centering Sheets</h2>
          <div className="products-grid">
            {centeringSheets.map((sheet, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
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
                    className="placeholder-image"
                    style={{ display: sheet.hasImage ? 'none' : 'flex' }}
                  >
                    <span>{sheet.name}</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{sheet.name}</h3>
                  <div className="product-details">
                    <p><strong>Size:</strong> {sheet.size}</p>
                  </div>
                  <button 
                    className="book-btn"
                    onClick={() => handleBookNow(sheet.name)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
