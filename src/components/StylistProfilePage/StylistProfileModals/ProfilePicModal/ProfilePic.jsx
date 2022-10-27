import React, { useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import "../UploadPhotoModal/UploadPhoto.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Backdrop } from "../../../../components";
import DropFile from "../DropBoxFile/DropFile";

function ProfilePicture({ openModal, closeModal }) {
  return ReactDOM.createPortal(
    <>
      {" "}
      {openModal ? (
        <div className="profilePicture">
          <Backdrop className="dialogWrap" onClick={closeModal}>
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
            >
              <header className="modalHeader">
                <button onClick={closeModal} className="closeButton">
                  <AiOutlineClose size={24} />
                </button>
              </header>
              <div className="modalContent">
                <div className="modalContent_Head">
                  <h4>Upload profile picture or business logo</h4>
                  <p>Let customers know who you are!</p>
                </div>
                <DropFile/>
              </div>
              <footer className="modalFooter">
                <button className="saveBtn">Done</button>
              </footer>
            </motion.div>
          </Backdrop>
        </div>
      ) : null}{" "}
    </>,
    document.getElementById("modal")
  );
}

export default ProfilePicture;
