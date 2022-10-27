import React, { useState} from "react";
import Hair from "../../../assets/WindyHair.png";
import Stylist from "../../../assets/HairStylist.png";
import "./Explore.scss";
import GetStartedModal from "../GetStartedModal/GetStarted";

function Explore() {
  const [openGetStarted, setOpenGetStarted] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpenGetStarted(true);
  }

  const handleEvent = (e) => {
    e.preventDefault();
    setOpenGetStarted(true);
  }

  return (
    <section className="exploreWrap">
      <h3 className="exploreHead">Explore BeBlended</h3>
      <div className="exploreFlex">
        <div className="flexItem">
          <img src={Hair} alt="Windy" />
          <h5 className="flexTitle">Book your Appointment</h5>
          <button 
            className="flexBtn" 
            type="submit"
            onClick={handleClick}
          >
            Book Now
          </button>
          {openGetStarted && <GetStartedModal openModal={setOpenGetStarted} />}
        </div>
        <div className="flexItem">
          <img src={Stylist} alt="" />
          <h5 className="flexTitle">Become a Hairstylist</h5>
          <button 
            className="flexBtn" 
            type="submit"
            onClick={handleEvent}
          >
            Start your Journey
          </button>
        </div>
      </div>
    </section>
  );
}

export default Explore;
