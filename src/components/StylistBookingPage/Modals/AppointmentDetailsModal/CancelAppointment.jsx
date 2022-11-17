import React from "react";
import ReactDOM from "react-dom";
import "./AppointmentDetails.scss";
import { Backdrop } from "../../../../components";
import { AiFillDelete } from "react-icons/ai";
import { motion } from "framer-motion";

export default function CancelAppointment({ openModal, closeModal}) {
    return ReactDOM.createPortal (
      <>
      {openModal ? (
      <div className="cancelAppointment">
        <Backdrop>
          <motion.div 
          className="cancelContent"
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
            <div className="dialogHeader">
              <AiFillDelete size={35} />
            </div>
            <div className="dialogBody">
              <p>Are you sure you want to cancel your appointment?</p>
            </div>
            <div className="dialogFooter">
              <button
                className="btn-secondary"
                type="button"
                data-dismiss="deleteModal"
              >
                Yes
              </button>
              <button
                className="btn-primary"
                type="button"
              onClick={closeModal}
              >
                No
              </button>
            </div>
          </motion.div>
        </Backdrop>
      </div>
  ) : null}{" "}
  </>,
  document.getElementById("modal")  );
  }