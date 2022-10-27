import React from "react";
import "./PriceBar.scss";

function PriceBar() {
  
  return (
    <section className="priceBar">
      <div className="desktop">
        <div className="priceItems">
          <div className="row">
            <p className="item">2 items</p>
            <span className="bar"></span>
            <div className="price"> ${160} </div>
          </div>
        </div>
        <button className="datePicker">Pick Date & Time</button>
      </div>
    </section>
  );
}

export default PriceBar;
