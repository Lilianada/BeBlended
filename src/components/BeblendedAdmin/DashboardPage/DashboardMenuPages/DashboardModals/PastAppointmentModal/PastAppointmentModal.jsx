import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import {Backdrop} from "../../../../../../components";
import{ cartItems } from "../../DashboardData";
import './PastAppointmentModal.scss';

export default function PastAppointmentModal({openModal, closeModal}) {
  return ReactDOM.createPortal(
    <>
      {openModal ? (
        <section className="clientAppointment_Details">
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
                  <h5 className="head">Box Braids</h5>
                  <p className="subHead">Mid-back/Small</p>
                </div>
                <div className="contentDetails">
                  <p className="text">
                    <strong>Cost: </strong>
                    $150
                  </p>
                  <p className="text">
                    <strong>Date: </strong>
                    Monday August 23, 2021
                  </p>
                  <p className="text">
                    <strong>Time: </strong>
                    8:00am - 12:00pm
                  </p>
                  <p className="text">
                    <strong>Location: </strong>
                    123 Front Street West, Toronto ON, Canada
                  </p>
                </div>
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
                            <div className="list">
                              <p className="service"> Total Paid: </p>
                              <p className="price"> $20 </p>
                            </div>
                          {/* <div className="subTotal">
                            <div className="priceList">
                            </div>
                          </div> */}
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
