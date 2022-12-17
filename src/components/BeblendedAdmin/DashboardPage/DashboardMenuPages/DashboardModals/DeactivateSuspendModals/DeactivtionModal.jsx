import React from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../../../../../../components";
import { motion } from "framer-motion";
import { MdCancel } from "react-icons/md";
import './DeactivateSuspend.scss';

export default function DeactivtionModal({ openModal, closeModal }) {
  return ReactDOM.createPortal(
    <>
      {openModal ? (
        <div className="deactivationModal">
          <Backdrop>
            <motion.div
              className="deactivationContent"
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
                <p className="boldText">Confirm Account Deactivation</p>
                
              </div>
              <div className="dialogBody">
                <p>Are you sure you would like to deactivate this account?</p>
                <MdCancel size={18} />
              </div>
              <div className="dialogFooter">
                <button
                  className="btn-primary"
                  type="button"
                  data-dismiss="deleteModal"
                >
                  No, Cancel
                </button>
                <button
                  className="btn-secondary"
                  type="button"
                  onClick={closeModal}
                >
                  Yes, Continue
                </button>
              </div>
            </motion.div>
          </Backdrop>
        </div>
      ) : null}
    </>,
    document.getElementById("modal")
  );}
