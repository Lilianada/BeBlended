import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import "../../StylistProfilePage/StylistProfileModals/RulesPolicyModal/PolicyModal.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Backdrop } from "../../../components";

function PolicyModal({ openModal, closeModal }) {
 
  return ReactDOM.createPortal(
    <>
      {openModal ? (
        <div className="policyModal">
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
                <h4 className="title">Rules & Cancellation Policy</h4>
                <div className="colShow">
                  <h6 className="colHead">Cancellation Policy</h6>
                  <ul className="colList">
                    <li>You recieve your non-refundable deposit.</li>
                    <li>
                      cels atleast 24 hours before the appointment start time.
                    </li>
                    <li>
                      You get paid half the appoitnment cost if a client cancels
                      within 24 hours of the appointment start time.
                    </li>
                    <li>
                      Clients have 1 opportunity to reschedule an appointment.
                    </li>
                  </ul>
                </div>
                <div className="colShow">
                    <h6 className="colHead">Late Fee</h6>
                    <ul className="colList">
                        <li>Clients are charged a late fee of $15 after 15 minutes.</li>
                    </ul>
                </div>
                <div className="colShow">
                  <h6 className="colHead">Additional Information</h6>
                  <ul className="colList">
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </Backdrop>
        </div>
      ) : null}{" "}
    </>,
    document.getElementById("modal")
  );
}

export default PolicyModal;
