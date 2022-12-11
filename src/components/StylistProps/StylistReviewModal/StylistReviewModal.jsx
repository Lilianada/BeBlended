import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { Backdrop, RateEmoji, RateClientCriterias, StylistComment } from "../../../components";
import './StylistReviewModal.scss';

export default function StylistReviewModal({openModal, closeModal}) {
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
                  <h4 className="stylistName">
                    Leave a review for
                    <strong> Braids by Becky</strong>
                  </h4>
                  <h5 className="serviceName">
                    <strong>Service: </strong>
                    Box Braids
                  </h5>
                  <h5 className="date">
                    <strong>Date:</strong>
                    Dec 12, 2022
                  </h5>
                </div>
                <div className="modalBody">
                  <div className="row">
                    <p>Do you want to remain anonymous? </p>
                    <select name="" className="selectOption">
                      <option value="">No</option>
                      <option value="">Yes</option>
                    </select>
                  </div>
                  <p className="boldText">Rate your overall experience</p>
                  <RateEmoji />
                  <RateClientCriterias/>
                  <StylistComment/>
                </div>
              </div>
            </motion.div>
          </Backdrop>
        </div>
        {/* ) : null} */}
        </>, document.getElementById('modal')
  );
}
