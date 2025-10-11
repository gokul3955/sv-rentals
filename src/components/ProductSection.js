import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const products = [
  {
    name: "Small Pillar Box",
    size: "1.5ft × 1.5ft × 6ft",
    rent: "₹50/Day",
    imageUrl: "/path/to/small-pillar-box.jpg", // Replace with correct image
  },
  {
    name: "Medium Pillar Box",
    size: "2ft × 2ft × 7ft",
    rent: "₹70/Day",
    imageUrl: "/path/to/medium-pillar-box.jpg", // Replace with correct image
  },
  {
    name: "Large Pillar Box",
    size: "2.5ft × 2.5ft × 8ft",
    rent: "₹90/Day",
    imageUrl: "/path/to/large-pillar-box.jpg", // Replace with correct image
  },
];

const ProductSection = () => {
  return (
    <section id="our-materials" className="my-5">
      <h2>Construction Materials for Rent</h2>
      <Row>
        {products.map((product, index) => (
          <Col md={4} key={index}>
            <Card>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>Size:</strong> {product.size}
                  <br />
                  <strong>Rent:</strong> {product.rent}
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ProductSection;
