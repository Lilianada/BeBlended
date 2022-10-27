import React, { useEffect, useState, useContext } from "react";
import "./Header.scss";
import Logo from "../../../assets/BeBlendedLogo.svg";
import Logo2 from "../../../assets/logo-black.svg";
import { FiMenu } from "react-icons/fi";
import SignupModal from "../SignupModal/Signup";
import LoginModal from "../LoginModal/Login";
import { AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ModalContext } from "../../../components";

export default function Header() {
  const [header, setHeader] = useState("header");

  const [openModal, setOpenModal] = useState({
    login: false,
    signup: false,
  });

  const handleModal = (login, signup) => {
    setOpenModal((auth) => {
      return {
      ...auth,
      [login]: !auth[login],
      [signup]: !auth[signup],
    }});
  };

  const listenScrollEvent = () => {
    if (window.scrollY > 70) {
      return setHeader(true);
    } else {
      return setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <React.Fragment>
      <div className="desktopDisplay">
        <header className={header ? "header2" : "navHeader"}>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="logo2">
            <img src={Logo2} alt="Logo" />
          </div>
          <nav className="navbar">
            <ul className="navList">
              <li className="navItem">
                <a
                  href="/"
                  onClick={(e) => {e.preventDefault(); handleModal("signup");}}
                  className="navLink"
                >
                  Sign up
                </a>
              </li>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                  <SignupModal
                  openModal={openModal.signup}
                  closeModal={setOpenModal}
                  />
              </AnimatePresence>
              <li className="navItem">
                <a
                  href="/"
                  onClick={(e) => {e.preventDefault(); handleModal("login");}}
                  className="navLink"
                >
                  Log in
                </a>
              </li>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                  <LoginModal
                  openModal={openModal.login}
                  closeModal={setOpenModal}
                  />
              </AnimatePresence>
            </ul>
          </nav>
        </header>
      </div>

      <div className="mobileDisplay">
        <header className="navHeader">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="navWrap">
            <div className="toggle" onClick={handleToggle}>
              <FiMenu
                size={24}
                fill="white"
                stroke="white"
                id="Vector"
                style={{ cursor: "pointer" }}
              />
            </div>
            <ul className={`navList ${toggle ? "show" : ""}`}>
              <hr />
              <li className="navItem">
                <a href="/" className="navLink" onClick={(e) => {e.preventDefault(); handleModal("login");}}>
                  Log In
                </a>
              </li>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                  <LoginModal
                  openModal={openModal.login}
                  closeModal={setOpenModal}
                  />
              </AnimatePresence>
              <li className="navItem">
                <a href="/" className="navLink" onClick={(e) => {e.preventDefault(); handleModal("signup");}}>
                  Sign Up
                </a>
              </li>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                  <SignupModal
                  openModal={openModal.signup}
                  closeModal={setOpenModal}
                  />
              </AnimatePresence>
            </ul>
          </div>
        </header>
      </div>
    </React.Fragment>
  );
}
