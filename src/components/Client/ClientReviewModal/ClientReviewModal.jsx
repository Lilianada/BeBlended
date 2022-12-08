import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { Backdrop } from "../../../components";
import "./ClientReviewModal.scss";

export default function ClientReviewModal({ openModal, closeModal }) {
  return ReactDOM.createPortal(
    <>
      {/* {openModal ? ( */}
        <div className="clientReviewModal">
          <Backdrop onClick={closeModal}>
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
              <header className="modalHeader" onClick={closeModal}>
                <h5></h5>
                <button className="closeButton">
                  <AiOutlineClose size={24} />
                </button>
              </header>

              <div className="modalContent">
                <div className="modalHead">
                    <h5 className="title">
                        Leave a review for
                        <strong className="clientName">  Lola Adeyemi</strong>
                    </h5>
                </div>
              </div>
            </motion.div>
          </Backdrop>
        </div>
      {/* ) : null} */}
    </>,
    document.getElementById("modal")
  );
}
