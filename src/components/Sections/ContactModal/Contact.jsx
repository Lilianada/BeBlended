import React, { useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { Backdrop } from "../../../components";
import { AiOutlineClose } from "react-icons/ai";
import "./Contact.scss";

function ContactModal({ openContactModal, closeModal }) {
  const [isActive, setIsActive] = useState("");
  const [activeBtn, setActiveBtn] = useState(false);

  const setActive = (e) => {
    console.log(e.target.value);
    if (setIsActive !== "") {
      setActiveBtn(true);
    }
  };

  return ReactDOM.createPortal(
    <>
      {" "}
      {openContactModal ? (
        <div className="contactWrap">
          <Backdrop onClick={closeModal}>
            <motion.div
              className="modalWrap"
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
              <div className="closeWrap">
                <h5>Contact Us</h5>
                <button className="submitBtn" onClick={closeModal}>
                  <AiOutlineClose fill="#050205" size={20} />
                </button>
              </div>
              <div className="contactBody">
                <form action="" className="contactForm">
                  <div className="contact">
                    <input
                      type="text"
                      name="text"
                      placeholder="Full name"
                      onChange={setActive}
                      required
                    />
                  </div>
                  <div className="contact">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      onChange={setActive}
                      required
                    />
                  </div>
                  <div className="contact">
                    <textarea
                      name="text"
                      cols="30"
                      rows="10"
                      placeholder="Message"
                      onChange={setActive}
                    ></textarea>
                  </div>
                </form>
                <div className="footerBottom">
                  <button
                    className={`submitBtn ${
                      activeBtn ? "activeBtn" : "isactiveBtn"
                    }`}
                  >
                    Send
                  </button>
                </div>
              </div>
            </motion.div>
          </Backdrop>
        </div>
      ) : null}{" "}
    </>,
    document.getElementById("modal")
  );
}

export default ContactModal;
