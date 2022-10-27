import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../../../../../components";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

export default function NormalService({ openModal, closeModal}) {
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
            </div>
        </motion.div>
        </Backdrop>
      </div>
    ) : null }
    </>, document.getElementById('modal')
  );
}
