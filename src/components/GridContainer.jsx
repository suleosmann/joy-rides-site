// GridContainer.js
import React from 'react';
import VehicleCard from './VehicleCard';
import './css/GridContainer.css'; // Make sure to create a corresponding CSS file for styling
import vehiclesData from './data/data.json'; // Update the path as necessary

const GridContainer = () => {
  return (
    <div className="grid-container">
      {vehiclesData.map(vehicle => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default GridContainer;
