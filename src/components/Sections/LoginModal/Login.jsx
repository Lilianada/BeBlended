import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { Backdrop } from "../../../components";
import "./Login.scss";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../../assets/logo-black.svg";
import SignupModal from "../SignupModal/Signup";

function LoginModal({ openModal, closeModal }) {
  const [openSignup, setOpenSignup] = useState(false);

  const handleSignupClick = (e) => {
    e.preventDefault();
    setOpenSignup(true);
  };

  const handleLoginClick = () => {
    openModal(false);
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return ReactDOM.createPortal(
    <>
      {" "}
      {openModal ? (
        <section className="loginWrap">
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
                <button className="submitBtn" onClick={closeModal}>
                  <AiOutlineClose fill="#050205" size={20} />
                </button>
              </div>
              <div className="loginBody">
                <div className="loginHead">
                  <h5>Log in to BeBlended</h5>
                  <p>Welcome back - we missed you!</p>
                </div>
                <form action="" className="loginForm">
                  <div className="login">
                    <label htmlFor="">Email address*</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                  <div className="login">
                    <label htmlFor="">Password*</label>
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <p
                      className="showPassword"
                      onClick={togglePasswordVisiblity}
                    >
                      Show
                    </p>
                  </div>
                </form>
                <div className="loginFooter">
                  <div className="checkBox">
                    <input type="checkbox" name="" required />
                    <p>
                      I agree to the <span>terms & conditions.</span>{" "}
                    </p>
                  </div>

                  <button className="loginBtn black">Log in</button>

                  <div className="footTxt">
                    <div className="bar"></div>
                    <p>Or</p>
                    <div className="bar"></div>
                  </div>

                  <button className="loginBtn">
                    <FcGoogle size={24} style={{ marginRight: "1rem" }} /> Log
                    in with Google
                  </button>

                  <div className="footerBottom">
                    <p> Don’t have an account?</p>
                    {openSignup && (
                      <SignupModal openSignupModal={setOpenSignup} />
                    )}
                    <button className="submitBtn" onClick={handleSignupClick}>
                      Sign up
                    </button>
                  </div>
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

export default LoginModal;
