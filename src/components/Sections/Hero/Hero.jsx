import React, { useState, useContext } from "react";
import "./Hero.scss";
import HeroImage from "../../../assets/HeroImage.svg";
import Rose from "../../../assets/Ellipse-Rose.png";
import Pink from "../../../assets/Ellipse-Pink.png";
import Yellow from "../../../assets/Ellipse-Yellow.png";
import { GetStartedModal, ModalContext } from "../../../components";
import { AnimatePresence } from "framer-motion";

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
    console.log("clicked");
  };

  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <section className="heroWrapper">
      <div className="ellipse4">
        <img src={Rose} alt="Rose Ellipse" />
      </div>
      <div className="backdrop">
        <div className="desktop">
          <div className="heroTexts">
            <h5 className="smallHead">Afro-hair care</h5>
            <h1 className="heroHead">
              Find a skilled hairstylist
              <br />
              near you
            </h1>
            <button className="heroButton" onClick={handleModal}>
              Get started
            </button>
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
             <GetStartedModal openModal={openModal} closeModal={handleModal} />
            </AnimatePresence>
          </div>
          <div className="heroImage">
            <img src={HeroImage} alt="Hero" />
          </div>
        </div>
        <div className="ellipse3">
          <img src={Pink} alt="Pink Ellipse" />
        </div>
        <div className="ellipse5">
          <img src={Yellow} alt="Yellow Ellipse" />
        </div>

        <div className="mobile">
          <div className="heroTexts">
            <h5 className="smallHead">Afro-hair care</h5>
            <h1 className="heroHead">
              Find a skilled
              <br /> hairstylist
              <br /> near you
            </h1>
            <button onClick={handleClick} className="heroButton">
              Get started
            </button>
            {open && <GetStartedModal openModal={setOpen} />}
          </div>
        </div>
      </div>
    </section>
  );
}
