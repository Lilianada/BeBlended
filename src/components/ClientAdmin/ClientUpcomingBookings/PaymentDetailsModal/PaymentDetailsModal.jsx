import React from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../../../../components";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import './PaymentDetailsModal.scss';

export default function PaymentDetailsModal() {
  return ReactDOM.createPortal (
    <>
    {openDetails ? (
      <section className="paymentDetails_modal">
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
              <button className="closeButton" onClick={closeDetails}>
                <AiOutlineClose size={26} />
              </button>
            </header>
            <div className="modalContent">
              <div className="contentHead">
                <h5 className="head">Payment Details</h5>
              </div>
            </div>
          </motion.div>
        </Backdrop>
      </section>
    )
    : null }
    </>, document.getElementById('modal')
  );
}
