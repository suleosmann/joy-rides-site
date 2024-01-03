import React from 'react'
import './css/Navbar.css'; // Import
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="/images/joyrides-logo.png" alt="logo image" />
          <h1>Joy & Rides</h1>
        </div>
        <ul>
          <Link to="/VehiclesInKenya">Vehicles in Kenya</Link>
          <Link to="/GridContainer">International Stock</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/FAQSection">Frequently asked questions</Link>
          
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
