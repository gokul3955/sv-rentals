import React from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductSection from "./components/ProductSection";
import CenteringSheets from "./components/CenteringSheets";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <ProductSection />
      <CenteringSheets />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}

export default App;
