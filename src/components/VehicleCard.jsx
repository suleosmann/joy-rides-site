// VehicleCard.js
import React from 'react';
import './css/VehicleCard.css'; // Make sure to create a corresponding CSS file for styling

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="vehicle-card">
      <img src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} />
      <div className="vehicle-details">
        <h3>{`${vehicle.make} ${vehicle.model}`}</h3>
        <p>Year: {vehicle.year}</p>
        <p>Price: {vehicle.price}</p>
        {/* Add other details as needed */}
      </div>
    </div>
  );
};

export default VehicleCard;
