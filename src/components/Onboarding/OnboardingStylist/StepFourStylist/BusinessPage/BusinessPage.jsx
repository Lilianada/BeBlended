import React, { useState } from "react";
import Logo from "../../../../../assets/logo-black.svg";
import BlobMB from "../../../../../assets/mobileBlob.svg";
import Blob from "../../../../../assets/StylistVector.svg";
import BlobPurpleMB from "../../../../../assets/VectorPurpleMb.svg";
import BlobPurple from "../../../../../assets/StylistVectorPurple.svg";
import { FaAngleLeft } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BusinessModal } from "../BusinessModal/BusinessModal";
import "./BusinessPage.scss";
import {AnimatePresence} from 'framer-motion'

function BusinessPage() {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  //Complete button handler and for inputs
  const [isClicked, setIsClicked] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);

  const handleInput = () => {
    setIsClicked(!isClicked);
    if (setIsClicked !== isClicked) {
      setActiveBtn(true);
    }
  };

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
        <h3>When are you usually open?</h3>
        <button className="addBtn" onClick={handleClick}>
          <AiOutlinePlus fill="black" style={{ marginRight: "1rem" }} />
          Add hours
        </button>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          <BusinessModal
            openModal={open}
            closeModal={handleClick}
            active={handleInput}
          />
        </AnimatePresence>
        <p className="pinkNote">
          <strong> Does your availability change often? </strong>
          Don’t worry, these hours aren’t permanent. You can always change them
          later.
        </p>
      </div>
      <footer>
        <img src={BlobMB} alt="Blob" className="mobileBottomVector" />
        <img src={BlobPurple} alt="Blob" className="desktopBottomVector" />
      </footer>
    </section>
  );
}

export default BusinessPage;
