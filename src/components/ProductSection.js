import React from "react";
import "./ProductSection.css";

const pillarBoxes = [
  {
    name: "Small Pillar Box",
    imageUrl: "/pillar-box-1.jpg",
    hasImage: true
  },
  {
    name: "Medium Pillar Box",
    imageUrl: "/pillar-box-2.jpg",
    hasImage: true
  },
  {
    name: "Large Pillar Box",
    imageUrl: "/pillar-box-1.jpg",
    hasImage: true
  },
];

const centeringSheets = [
  {
    name: "Small Centering Sheet",
    imageUrl: "/smallsheet-1.jpeg",
    hasImage: true
  },
  {
    name: "Medium Centering Sheet",
    imageUrl: "/Medium Centering Sheet.jpeg",
    hasImage: true
  },
  {
    name: "Large Centering Sheet",
    imageUrl: "/Large Centering Sheet.jpeg",
    hasImage: true
  },
];

const ladders = [
  {
    name: "Small Ladder",
    imageUrl: "/Small ladder.jpeg",
    hasImage: true
  },
  {
    name: "Medium Ladder",
    imageUrl: "/Mediumladder.jpeg",
    hasImage: true
  },
  {
    name: "Large Ladder",
    imageUrl: "/Largeladder.jpeg",
    hasImage: true
  },
];

const ProductSection = () => {
  const handleBookNow = (productName) => {
    const phoneNumber = "918501839285";
          const message = `Hi, I'm interested in booking ${productName} from CSR Rentals.`;
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
                    {/* Size removed */}
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
                    {/* Size removed */}
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

        {/* Ladders */}
        <div className="subsection">
          <h2 className="section-title">Ladders</h2>
          <div className="products-grid">
            {ladders.map((ladder, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  {ladder.hasImage ? (
                    <img 
                      src={ladder.imageUrl} 
                      alt={ladder.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className="placeholder-image"
                    style={{ display: ladder.hasImage ? 'none' : 'flex' }}
                  >
                    <span>{ladder.name}</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{ladder.name}</h3>
                  <div className="product-details">
                    {/* Size removed */}
                  </div>
                  <button 
                    className="book-btn"
                    onClick={() => handleBookNow(ladder.name)}
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
