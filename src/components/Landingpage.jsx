import React from "react";
import "./css/Landingpage.css"; // Import
import VehicleSearchForm from "./VehicleSearchForm"

const Landingpage = () => {
  return (
    <div>
      <h1 className="main-header">Find your dream car</h1>
      <img src="/images/range-rover.png" alt="logo image" />

      <div className="main-container">
        {/* This will center the button group */}
        <div className="main-button">
          <button className="local-button">Vehicles in Kenya</button>
          <button className="International-button">International Stock</button>
        </div>
      </div>
      <div>
        <p>Research before buying</p>
        <p>
          We help you find a car that fits Your personality, dream and pocket!
        </p>
      </div>
      <div>
        <VehicleSearchForm />
      </div>
      <div className="process-container">
      <h2>Getting your dream car is a 3 step process</h2>
      <div className="steps">
        <div className="step">
          <div className="icon">🚗</div> {/* Replace with actual icons */}
          <p>Select your car</p>
        </div>
        <div className="step">
          <div className="icon">📝</div> {/* Replace with actual icons */}
          <p>Enquire</p>
        </div>
        <div className="step">
          <div className="icon">💳</div> {/* Replace with actual icons */}
          <p>Pay</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Landingpage;
