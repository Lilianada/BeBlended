import React from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../../../../components";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import{ cartItems } from "../../ClientAdminData";
import "./PaymentDetailsModal.scss";

export default function PastPaymentDetails({openModal,closeModal}) {
    return ReactDOM.createPortal(
        <>
          {openModal ? (
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
                    <button className="closeButton" onClick={closeModal}>
                      <AiOutlineClose size={26} />
                    </button>
                  </header>
                  <div className="modalContent">
                    <div className="contentHead">
                      <h5 className="head">Payment Details</h5>
                    </div>
    
                    <div className="contentBody">
                      <div className="cartWrap">
                        <div className="cart">
                          <div className="head">
                            <h5 className="headText">Service Details:</h5>
                          </div>
                          <div className="body">
                            <div>
                            {cartItems.map((item) => (
                              <div className="cartItem" key={item.id}>
                                <div className="item">
                                  <p className="service"> {item.service} </p>
                                  <p className="variant"> {item.variant} </p>
                                </div>
                                <p className="price"> ${item.price} </p>
                              </div>
                            ))}
                            </div>
    
                            <div className="extraFee">
                              <div className="list">
                                  <p className="service"> Service fee </p>
                                  <p className="price"> $10 </p>
                                </div>
                            </div>
    
                            <div className="subTotal">
                              <div className="priceList">
                                <div className="list">
                                  <p className="service">Total paid: </p>
                                  <p className="price"> $120 </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Backdrop>
            </section>
          ) : null}
        </>,
        document.getElementById("modal")
      );
}
