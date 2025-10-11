import React from "react";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import RentalProcess from "./components/RentalProcess";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductSection />
      <RentalProcess />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
