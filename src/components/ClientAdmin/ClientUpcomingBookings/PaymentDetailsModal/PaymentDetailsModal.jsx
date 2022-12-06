import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Backdrop, PolicyModal } from "../../../../components";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import{ cartItems } from "../../ClientAdminData";
import "./PaymentDetailsModal.scss";

export default function PaymentDetailsModal({ openModal, closeModal }) {
  const [openPolicy, setOpenPolicy] = useState(false);
  const handleModal = () => {
    setOpenPolicy(!openPolicy);
  }
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
                        <h5 className="headText">Service name:</h5>
                      </div>
                      <div className="body">
                        {cartItems.map((item) => (
                          <>
                            <div className="cartItem" key={item.id}>
                              <div className="item">
                                <p className="service"> {item.service} </p>
                                <p className="variant"> {item.variant} </p>
                              </div>
                            </div>
                          </>
                        ))}
                        <div className="subTotal">
                          <div className="priceList">
                            <div className="list">
                              <p className="service"> Paid: </p>
                              <p className="price"> $20 </p>
                            </div>
                            <div className="list">
                              <p className="service"> Remaining balance: </p>
                              <p className="price"> $10 </p>
                            </div>
                            <p className="info">
                              *This amount will be charged automatically after
                              your appointment
                            </p>

                            <div className="list">
                              <label className="terms">
                                View
                                <button
                                  className="link"
                                  onClick={handleModal}
                                >
                                  cancellation policy
                                </button>
                                and <span> client rules </span>.
                                <AnimatePresence
                                  initial={false}
                                  exitBeforeEnter={true}
                                  onExitComplete={() => null}
                                >
                                  {openPolicy && (
                                    <PolicyModal
                                      openModal={openPolicy}
                                      closeModal={handleModal}
                                    />
                                  )}
                                </AnimatePresence>
                              </label>
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
