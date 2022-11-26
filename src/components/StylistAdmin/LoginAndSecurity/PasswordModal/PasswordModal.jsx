import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../../../components";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import "./PasswordModal.scss";

function PasswordModal ({ openModal, closeModal }) {
    const [input, setInput] = useState("")
    const [active, setActive] = useState(false);
    const handleInput = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        if (setInput !== ""){
            setActive(true)
        }
    }

  return ReactDOM.createPortal (
    <>
      {" "}
      {openModal ? (
      <div className="infoWrap">
        <Backdrop>
          <motion.div
            className="dialogContent"
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
            <header className="modalHeader">
              <h5> </h5>
              <button className="closeButton" onClick={closeModal}>
                <AiOutlineClose size={20} />
              </button>
            </header>

            <div className="modalContent">
              <form action="" className="infoForm">
                  <div className="inputField">
                    <label htmlFor="current-password">Current password</label>
                    <input type="password" onChange={handleInput} />
                  </div>
                  <div className="inputField">
                    <label htmlFor="new-password">New Password</label>
                    <input type="password" onChange={handleInput} />
                  </div>
                <div className="inputField">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input type="text" onChange={handleInput} />
                </div>
                <button 
                className={`saveBtn ${active ? "activeBtn" : "inactiveBtn"}`}
                >
                    Update Password
                </button>
              </form>
            </div>
          </motion.div>
        </Backdrop>
      </div>
      ) : null}{" "} 
    </>,
    document.getElementById("modal")
  );
}

export default PasswordModal;
