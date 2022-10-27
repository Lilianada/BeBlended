import React, { useState } from "react";
import "./BusinessHour.scss";
import Logo from "../../../../../assets/logo-black.svg";
import BlobMB from "../../../../../assets/mobileBlob.svg";
import Blob from "../../../../../assets/StylistVector.svg";
import BlobPurpleMB from "../../../../../assets/VectorPurpleMb.svg";
import BlobPurple from "../../../../../assets/StylistVectorPurple.svg";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BusinessModal } from "../BusinessModal/BusinessModal";
import {AnimatePresence} from 'framer-motion'

function BusinessHour() {
  //Complete button handler and for inputs
  const [isClicked, setIsClicked] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);

  const handleInput = () => {
    setIsClicked(!isClicked);
    if (setIsClicked !== isClicked) {
      setActiveBtn(true);
    }
  };

  //Open modal
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

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
      <div className="sectionWrapper">
        <p className="smallText">You’re almost there.</p>
        <h3>Your business hours</h3>
        <div className="note">
          <p>Monday - Saturday</p>
          <p>10:00 AM - 7:00 PM</p>
        </div>
        <button
          className="editBtn"
          onClick={() => {
            handleInput();
            handleClick();
          }}
        >
          Edit/Add
        </button>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          <BusinessModal openModal={open} closeModal={handleClick} />
        </AnimatePresence>
      </div>
      <footer>
        <button className={`next ${activeBtn ? "activeBtn" : "inactiveBtn"}`}>
          <Link to="/stylist-step-seven">Next</Link>
        </button>
        <img src={BlobMB} alt="Blob" className="mobileBottomVector" />
        <img src={BlobPurple} alt="Blob" className="desktopBottomVector" />
      </footer>
    </section>
  );
}

export default BusinessHour;
