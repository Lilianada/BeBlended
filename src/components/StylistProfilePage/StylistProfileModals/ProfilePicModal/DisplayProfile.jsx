import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../../../../components";
import { motion } from "framer-motion";
import "../UploadPhotoModal/UploadPhoto.scss";
import { AiOutlineClose } from "react-icons/ai";
import Profile from "../../../../assets/BossLady.png";

function DisplayProfile() {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
  };

  return ReactDOM.createPortal(
    <>
      {" "}
      {openModal ? (
        <div className="displayPhoto">
          <Backdrop onClick={handleModal}>
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
                <button className="closeButton" onClick={handleModal}>
                  <AiOutlineClose size={24} />
                </button>
              </header>
              <div className="modalContent">
                <div className="modalContent_Head">
                  <h4>Upload profile picture or business logo</h4>
                  <p>Let customers know who you are!</p>
                </div>
                <div className="uploadedPicture">
                  <img src={Profile} alt="Profile Picture" />
                </div>
              </div>
              <footer className="modalFooter">
                <button className="editBtn">Edit</button>
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

export default DisplayProfile;
