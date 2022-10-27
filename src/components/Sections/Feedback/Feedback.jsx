import React, { useState } from "react";
import Quote from "../../../assets/Quote.svg";
import Underline from "../../../assets/Underline.svg";
import "./Feedback.scss";
import Profile from "../../../assets/CelebrityLady.png";
import GetStartedModal from "../GetStartedModal/GetStarted";
// import Slider from "react-slick";

function Feedback() {
  const [openGetStarted, setOpenGetStarted] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpenGetStarted(true);
  }

  return (
    <section className="feedbackWrap">
      <div className="feedbackHeader">
        <img src={Quote} alt="Quote" />
        <h4 className="quotedText">What people are saying about BeBlended?</h4>
        <img src={Underline} alt="Underline" />
      </div>

      <div className="mobile_feedsWrap">
        <div className="feedsWrap">
          <div className="feedback">
            <img src={Profile} alt="Feedbacker Profile" />
            <div className="feedText">
              <h5 className="feedHead">I loved my hairstyle!</h5>
              <p>
                I loved that my hairstylist took into consideration that I'm
                tender headed. She did a good job neatly braiding my hair without
                it hurting too much. I was able to comfortably run errands
                afterwards!
                <br />
                <br />
                Hairstylist: <strong>Braids by Becky</strong>
              </p>
              <button 
                className="feedBtn"
                onClick={handleClick}
              >
                Book Yours
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="desktop_feedsWrap">
        <div className="feedsWrap"> 
          <div className="feedback">
            <img src={Profile} alt="Feedbacker Profile" />
            <div className="feedText">
              <h5 className="feedHead">I loved my hairstyle!</h5>
              <p>
                I loved that my hairstylist took into consideration that I'm
                tender headed. She did a good job neatly braiding my hair without
                it hurting too much. I was able to comfortably run errands
                afterwards!
                <br />
                <br />
                Hairstylist: <strong>Braids by Becky</strong>
              </p>
              <button 
                className="feedBtn"
                onClick={handleClick}
              >
                Book Yours
              </button>
              {openGetStarted && <GetStartedModal openModal={setOpenGetStarted} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
