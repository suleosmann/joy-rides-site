import React from 'react'
import './css/Navbar.css'; // Import


const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="/images/joyrides-logo.png" alt="logo image" />
          <h1>Joy & Rides</h1>
        </div>
        <ul>
          <a href="#">Vehicles in Kenya</a>
          <a href="#">International Stock</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Frequently asked questions</a>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
