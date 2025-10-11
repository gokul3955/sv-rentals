import React, { useState } from "react";
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    material: "",
    date: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "918501839285";
    const message = `New Enquiry from SV Rentals Website:
Name: ${formData.name}
Phone: ${formData.phone}
Material Needed: ${formData.material}
Date: ${formData.date}
Additional Details: ${formData.details}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2>Get in Touch</h2>
          <div className="contact-info">
            <p><strong>Shop Address:</strong> C Ramapuram, Tirupati Rural, AP.</p>
            <p><strong>Phone:</strong> +91 8501839285</p>
            <p><strong>WhatsApp:</strong> +91 8501839285</p>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="material"
              placeholder="Material Needed"
              value={formData.material}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <textarea
              name="details"
              placeholder="Additional Details"
              value={formData.details}
              onChange={handleChange}
              rows="4"
            />
            <button type="submit">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
