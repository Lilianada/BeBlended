import React from "react";
import './LocationFilled.scss';
import Map from "../../../assets/Map.png";

function LocationFilled() {
  return (
    <div className="locationFilled">
      <div className="locationFilled_Head">
        <h5 className="name">Location</h5>
      </div>
      {/* Map */}
      <img src={Map} alt="map" />
    </div>
  );
}

export default LocationFilled;
