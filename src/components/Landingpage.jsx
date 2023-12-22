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
    </div>
  );
};

export default Landingpage;
