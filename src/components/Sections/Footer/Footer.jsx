import React, { useState } from "react";
import "./Footer.scss";
import { BsArrowRight, BsTwitter, BsInstagram } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import ContactModal from "../ContactModal/Contact";
import { AnimatePresence } from "framer-motion";

function Footer() {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
  };

  return (
    <footer className="footerWrapper">
      <div className="footerTop">
        <div className="footerFlex">
          <h6 className="footerAbout_head">About</h6>
          <ul>
            <li>
              <a href="/">How BeBlended works</a>
            </li>
            <li>
              <a href="/">Become a Stylist</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="footerFlex">
          <h6 className="footerAbout_head">Support</h6>
          <ul>
            <li>
              <a href="/" onClick={handleClick}>
                Contact Us
              </a>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {openModal && (
                  <ContactModal
                    openContactModal={openModal}
                    closeModal={handleClick}
                  />
                )}
              </AnimatePresence>
            </li>
            <li>
              <a href="/">COVID - 19</a>
            </li>
          </ul>
        </div>
        <div className="footerFlex">
          <h6 className="footerAbout_head">Join Our Community</h6>
          <p className="formSubtitile">
            Be the first to know about all things BeBlended!
          </p>
          <div className="joinForm">
            <form action="" method="post">
              <div className="formColumn">
                <div className="formWrap">
                  <label htmlFor="FirstName">First name*</label>
                  <input type="text" name="Firstname" required />
                </div>
                <div className="formWrap">
                  <label htmlFor="LastName">Last name*</label>
                  <input type="text" name="Lastname" required />
                </div>
              </div>
              <div className="formColumn">
                <div className="formWrap">
                  <div>
                    <label htmlFor="Email">Email address*</label>
                    <button type="submit" className="submitForm">
                      <BsArrowRight fill="#FFFFFF" size={24} />
                    </button>
                  </div>
                  <input type="text" name="Email" className="email" required />
                  <br />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="copywright">
          <p>© 2022 BeBlended inc.</p>
        </div>
        <div className="socialWrap">
          <a
            href="https://www.facebook.com/"
            className="wrap"
            target="_blank"
            rel="noreferrer"
          >
            <GrFacebookOption size={24} />
          </a>
          <a
            href="https://instagram.com/"
            className="wrap"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="wrap"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
