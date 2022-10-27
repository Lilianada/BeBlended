import React, { useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import "./BusinessModal.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import ModalList from "./ModalList";
import { Backdrop } from "../../../../../components";

export const BusinessModal = ({ openModal, closeModal }) => {
  //Complete button handler and for inputs
  const [isClicked, setIsClicked] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);

  const handleInput = () => {
    setIsClicked(!isClicked);
    if (setIsClicked !== isClicked) {
      setActiveBtn(!activeBtn);
    }
  };

  return ReactDOM.createPortal(
    <>
      {" "}
      {openModal ? (
        <section className="sectionModal_Wrap">
          <Backdrop onClick={closeModal}>
            <motion.div
              className="modalCol"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              exit="exit"
            >
              <header className="getTime_Header">
                <h6>Opening Hours</h6>
                <button className="openBtn" onClick={closeModal}>
                  <AiOutlineClose fill="black" size={20} />
                </button>
              </header>

              <ModalList data={handleInput} />

              <div className="footer">
                <button
                  className={`complete ${
                    activeBtn ? "activeBtn" : "inactiveBtn"
                  }`}
                >
                  <Link to="/stylist-step-seven">Complete</Link>
                </button>
              </div>
            </motion.div>
          </Backdrop>
        </section>
      ) : null}{" "}
    </>,
    document.getElementById("modal")
  );
};
