import React from "react";
import "./PriceBar.scss";

function MobilePriceBar() {
  
  return (
    <section className="priceBar">
      <div className="mobile">
        <div className="priceItems">
          <div className="row">
            <p className="item">2 items</p>
            <span className="bar"></span>
            <p className="price"> ${160} </p>
          </div>
        </div>
        <button className="datePicker">Pick Date & Time</button>
      </div>
    </section>
  );
}

export default MobilePriceBar;
