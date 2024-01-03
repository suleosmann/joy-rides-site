import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQSection from "./components/FAQSection";
import VehiclesInKenya from "./components/VehiclesInKenya";
import GridContainer from "./components/GridContainer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/VehiclesInKenya" element={<VehiclesInKenya />} />
          <Route path="/GridContainer" element={<GridContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/FAQSection" element={<FAQSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
