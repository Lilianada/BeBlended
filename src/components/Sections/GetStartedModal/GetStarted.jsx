import React, { useState, useContext } from "react";
import ReactDom from "react-dom";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { FiBriefcase } from "react-icons/fi";
import "./GetStarted.scss";
import Logo from "../../../assets/BeBlendedLogo.svg";
import SignupModal from "../SignupModal/Signup";
import LoginModal from "../LoginModal/Login";
import { Backdrop } from "../../../components";

function GetStartedModal({openModal, closeModal}) {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setOpenLogin(true);
    if (setOpenLogin === true) {
      setActiveBtn(!openLogin);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setOpenSignup(true);
    if (setOpenSignup === true) {
      setActiveBtn(!openSignup);
    }
  };

  const handleSignup2 = (e) => {
    e.preventDefault();
    setOpenSignup(true);
    if (setOpenSignup === true) {
      setActiveBtn(!openSignup);
    }
  };

  return ReactDom.createPortal(
    <>
      {" "}
      {openModal ? (
        <section className="startedWrap">
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
                <img src={Logo} alt="Hero" />
                <button
                  className="submitBtn"
                  onClick={closeModal}
                >
                  <AiOutlineClose fill="black" size={20} />
                </button>
              </div>
              <div className="startedBody">
                <div className="startedHead">
                  <h5>Get Started!</h5>
                  <p>
                    To begin this journey, tell us what type of account you’ll
                    be opening.
                  </p>
                </div>
                <div className="accounts">
                  <a className="acctBox" href="/">
                    <IoPersonOutline stroke="#050205" size={20} />
                    <div className="acctBox_text">
                      <h6>Individual</h6>
                      <p>Personal account to find and book a hairstylist.</p>
                    </div>
                    <button
                      type="submit"
                      className="submitBtn"
                      onClick={handleSignup}
                    >
                      <BsArrowRight fill="#050205" size={20} />
                    </button>
                      <SignupModal openModal={openSignup} closeModal={handleSignup} />
                  </a>
                  <a className="acctBox" href="/">
                    <FiBriefcase stroke="#050205" size={20} />
                    <div className="acctBox_text">
                      <h6>Business</h6>
                      <p>Own or belong to a company, this is for you.</p>
                    </div>
                    <button
                      type="submit"
                      className="submitBtn"
                      onClick={handleSignup2}
                    >
                      <BsArrowRight fill="#050205" size={20} />
                    </button>
                  </a>
                </div>
                <div className="startedFooter">
                  <p> Already have an account?</p>
                  <button
                    className={`submitBtn ${
                      activeBtn ? "activeBtn" : "isactiveBtn"
                    }`}
                    onClick={handleLoginClick}
                  >
                    Login
                  </button>
                  <LoginModal openModal={openLogin} closeModal={handleLoginClick} />
                </div>
              </div>
            </motion.div>
          </Backdrop>
        </section>
      ) : null}{" "}
    </>,
    document.getElementById("modal")
  );
}

export default GetStartedModal;
