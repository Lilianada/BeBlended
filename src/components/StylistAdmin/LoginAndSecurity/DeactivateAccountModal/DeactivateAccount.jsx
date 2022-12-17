import React from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../../../../components";
import { AiFillDelete } from "react-icons/ai";
import { motion } from "framer-motion";
import "./DeactivateAccount.scss";

export default function DeactivateAccount({ openModal, closeModal }) {
  return ReactDOM.createPortal(
    <>
      {openModal ? (
        <div className="deactivateAccount">
          <Backdrop>
            <motion.div
              className="deactivateContent"
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
                <p>Are you sure you want to deactivate your account?</p>
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
    document.getElementById("modal")
  );
}
