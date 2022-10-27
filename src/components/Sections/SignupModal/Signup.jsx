import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import "./Signup.scss";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../../assets/logo-black.svg";
import ReactDom from "react-dom";
import LoginModal from "../LoginModal/Login";
import { Backdrop } from "../../../components";
import { motion } from "framer-motion";

function SignupModal({ openModal, closeModal }) {
  const [openLogin, setOpenLogin] = useState(false);

  const handleSignupClick = (e) => {
    e.preventDefault();
    setOpenLogin(true);
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordRepeat, setPasswordRepeat] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordRepeat = () => {
    setPasswordRepeat(passwordRepeat ? false : true);
  };

  return ReactDom.createPortal(
    <>
      {" "}
      {openModal ? (
        <section className="signupWrap">
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
                  <AiOutlineClose fill="#050205" size={20} />
                </button>
              </div>
              <div className="signupBody">
                <div className="signupHead">
                  <h5>Get started with BeBlended</h5>
                </div>
                <form action="" className="signupForm">
                  <div className="signup">
                    <label htmlFor="">First Name*</label>
                    <input type="text" name="firstName" required />
                  </div>
                  <div className="signup">
                    <label htmlFor="">Last Name*</label>
                    <input type="text" name="firstName" required />
                  </div>
                  <div className="signup">
                    <label htmlFor="">Phone Number*</label>
                    <input type="tel" name="phoneNumber" required />
                  </div>
                  <div className="signup">
                    <label htmlFor="">Email address*</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                  <div className="signup">
                    <label htmlFor="">Create password*</label>
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
                  <div className="signup">
                    <label htmlFor="">Re-enter password*</label>
                    <input
                      type={passwordRepeat ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <p className="showPassword" onClick={togglePasswordRepeat}>
                      Show
                    </p>
                  </div>
                </form>
                <div className="signupFooter">
                  <div className="checkBox">
                    <input type="checkbox" name="" required />
                    <p>
                      I agree to the <span>terms & conditions.</span>{" "}
                    </p>
                  </div>

                  <button className="register grey">Register Account</button>

                  <div className="footTxt">
                    <div className="bar"></div>
                    <p>Or</p>
                    <div className="bar"></div>
                  </div>

                  <button className="register">
                    <FcGoogle size={24} style={{ marginRight: "1rem" }} />{" "}
                    Register with Google
                  </button>

                  <div className="footerBottom">
                    <p> Already have an account?</p>
                    {openLogin && <LoginModal openLoginModal={setOpenLogin} />}
                    <button className="submitBtn" onClick={handleSignupClick}>
                      Log in
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

export default SignupModal;
