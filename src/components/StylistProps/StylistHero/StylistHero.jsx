import React, { useState } from "react";
import "./StylistHero.scss";
import Rose from "../../../assets/Ellipse-Rose.png";
import StylistHeader from "../StylistHeader/StylistHeader";

function StylistHero() {
  // const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    // setOpen(true);
  };

  return (
    <section className="stylistHero__Wrapper">
      <StylistHeader />
      <div className="ellipse4">
        <img src={Rose} alt="Rose Ellipse" />
      </div>
      <div className="stylistHero__Texts">
        <h5 className="smallHead">Afro-hair care</h5>
        <h2 className="stylistHero__Head">
          It’s time 
          <br />
          to get to work!
        </h2>
        <button 
          className="stylistHero__Button"
          onClick={handleClick}
          >
          View Profile
        </button>
      </div>
    </section>
  );
}

export default StylistHero;
