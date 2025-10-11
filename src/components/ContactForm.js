import React, { useState } from "react";

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
    // Handle form submission here, like sending an email or storing data
    alert("Enquiry submitted!");
  };

  return (
    <section id="contact" className="my-5">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
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
        />
        <button type="submit">Send Enquiry</button>
      </form>
    </section>
  );
};

export default ContactForm;
