import React from "react";
import "./css/VehicleSearchForm.css"; // Adjust the path as needed

const VehicleSearchForm = () => {
  return (
    <div className="search-form-container">
      <form className="search-form">
        <div className="form-group">
          <div className="input-label-group">
            <label htmlFor="vehicle-name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="vehicle-name"
              placeholder="Vehicle name"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <select id="make" className="form-control">
              <option>Make</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="form-group">
            <select id="model" className="form-control">
              <option>Model</option>
              {/* Add more options here */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="input-label-group">
            <label htmlFor="min-year" className="form-label">
              Year of manufacture
            </label>
            <div className="form-row">
              <input
                type="number"
                id="min-year"
                placeholder="Min YOM"
                className="form-control"
              />
              <input
                type="number"
                id="max-year"
                placeholder="Max YOM"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="input-label-group">
            <label htmlFor="min-price" className="form-label">
              Price
            </label>
            <div className="form-row">
              <input
                type="number"
                id="min-price"
                placeholder="0"
                className="form-control"
              />
              <input
                type="number"
                id="max-price"
                placeholder="Max Price"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="input-label-group">
            <label htmlFor="currency" className="form-label">
              Currency
            </label>
            <select id="currency" className="form-control">
              <option>All Currencies</option>
              {/* Add more options here */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="button-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default VehicleSearchForm;
