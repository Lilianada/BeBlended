import React, { useState } from "react";
import "../OnboardingStylist.scss";
import Hair from "../../../../assets/AfroVector.svg";
import Logo from "../../../../assets/logo-black.svg";
import { FaAngleLeft } from "react-icons/fa";
import BlobMB from "../../../../assets/mobileBlob.svg";
import Blob from "../../../../assets/StylistVector.svg";
import BlobPurpleMB from "../../../../assets/VectorPurpleMb.svg";
import BlobPurple from "../../../../assets/StylistVectorPurple.svg";
import { Link } from "react-router-dom";

export default function StepTwoStylist() {
  //Complete button handler and for inputs
  const [handleClick, setHandleClick] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);

  const clickListener = () => {
    setHandleClick(true);
    if (setHandleClick === true) {
      setActiveBtn(!activeBtn);
    }
  }

  return (
    <section className="onboardingStylist__Wrap">
      <header className="onboardingStylist__Head">
        <button className="rowBack">
          <FaAngleLeft className="angleLeft" size={24} />
          <p>Back</p>
        </button>
        <div className="welcomeLogo">
          <img src={Logo} alt="Logo" />
        </div>
      </header>
      <img src={BlobPurpleMB} alt="Vector" className="mobileTopVector" />
      <img src={Blob} alt="Vector" className="desktopTopVector" />

      <div className="questionWrap">
        <div className="question">
          <h4>How long have you been doing hair?</h4>
          <p className="subText_x">Select one that applies</p>
        </div>
        <form action="" className="options">
          <div className="option" onClick={clickListener}>
            <img src={Hair} alt="Hair Type" className="image mini" />
            <div className="optionText_Box">
              <h6 className="optionHead">Advanced</h6>
              <p className="optionText">0 - 1 Year</p>
            </div>
          </div>
          <div className="option" onClick={clickListener}>
            <img src={Hair} alt="Hair Type" className="image midi" />
            <div className="optionText_Box">
              <h6 className="optionHead">Fully Established</h6>
              <p className="optionText">2 - 5 Years</p>
            </div>
          </div>
          <div className="option" onClick={clickListener}>
            <img src={Hair} alt="Hair Type" className="image maxi" />
            <div className="optionText_Box">
              <h6 className="optionHead">Truly Exceptional</h6>
              <p className="optionText">6 - 10 Years</p>
            </div>
          </div>
          <div className="option" onClick={clickListener}>
            <img src={Hair} alt="Hair Type" className="image" />
            <div className="optionText_Box">
              <h6 className="optionHead">Major League</h6>
              <p className="optionText">11+Years</p>
            </div>
          </div>

          {/* <Link to="/stylist-step-two"> */}
          {/* </Link> */}
        </form>
      </div>
      <footer>
        <button type="submit"
              className={`continue ${activeBtn ? "activeBtn" : "inactiveBtn"}`}>
          Continue
        </button>
        <img src={BlobMB} alt="Blob" className="mobileBottomVector" />
        <img src={BlobPurple} alt="Blob" className="desktopBottomVector" />
      </footer>
    </section>
  );
};