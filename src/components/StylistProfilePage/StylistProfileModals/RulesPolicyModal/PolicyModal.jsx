import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import "./PolicyModal.scss";
import { AiOutlineClose } from "react-icons/ai";
import CurrencyInput from "react-currency-input-field";
import { Backdrop } from "../../../../components";

function PolicyModal({ openModal, closeModal }) {

  return ReactDOM.createPortal(
    <>
      {" "}
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
                <button className="closeButton">
                  <AiOutlineClose size={24} stroke="#000" />
                </button>
              </header>

              <div className="modalContent">
                <h4 className="title">Rules & Cancellation Policy</h4>

                <ul className="listItems">
                  <li className="listItem">
                    Charge clients a late fee of
                    <CurrencyInput
                      name="price"
                      className="lateFee"
                      placeholder="$0"
                      prefix="$"
                      disableGroupSeparators={true}
                      onValueChange={(value, name) => console.log(value, name)}
                      required={false}
                    />
                    after
                    <input
                      type="number"
                      name="text|number"
                      className="lateFee"
                      placeholder="0"
                      min="0"
                    />
                    minutes.
                  </li>

                  <li className="listItem">
                    Cancel appointment after waiting for
                    <input
                      type="number"
                      name="text|number"
                      className="lateFee"
                      placeholder="0"
                      min="0"
                    />
                    minutes.
                  </li>

                  <li className="listItem">
                    Deposits can be transferable
                    <input
                      type="number"
                      name="text|number"
                      className="lateFee"
                      placeholder="0"
                      min="0"
                    />
                    time(s).
                  </li>
                </ul>

                <div className="colShow">
                  <h6 className="colHead">Cancellation Information:</h6>
                  <div className="colWrap">
                    <ul className="colList">
                      <li className="dot"></li>
                      <li className="bar"></li>
                      <li className="dot"></li>
                    </ul>

                    <ul className="colList">
                      <li className="text">Full refund:</li>
                      <li className="text"></li>
                      <li className="text">
                        <CurrencyInput
                          name="percent"
                          className="lateFee"
                          placeholder="%0"
                          prefix="%"
                          disableGroupSeparators={true}
                          onValueChange={(value, name) =>
                            console.log(value, name)
                          }
                          required={false}
                        />
                        partial refund:
                      </li>
                    </ul>

                    <ul className="colList">
                      <li className="row">
                        <input
                          type="number"
                          name="deposit"
                          className="serviceInput"
                          placeholder="0"
                          min="0"
                        />
                        <select className="selectWrap">
                          <option
                            className="dollarBtn  activeBtn"
                            type="button"
                          >
                            Days
                          </option>
                          <option className="percentBtn " type="button">
                            Hours
                          </option>
                        </select>
                      </li>
                      <li className="row"></li>
                      <li className="row">
                        <input
                          type="number"
                          name="deposit"
                          className="serviceInput"
                          placeholder="0"
                          min="0"
                        />
                        <select className="selectWrap">
                          <option
                            className="percentBtn percentBtn activeBtn"
                            type="button"
                          >
                            Hours
                          </option>
                          <option className="dollarBtn" type="button">
                            Days
                          </option>
                        </select>
                      </li>
                    </ul>

                    <ul className="colList">
                      <li className="text">Before Appointment</li>
                      <li className="text"></li>
                      <li className="text">Before Appointment</li>
                    </ul>
                  </div>
                </div>

                <div className="colShow">
                  <h6 className="colHead">Rescheduling Information:</h6>
                  <div className="colWrap">
                    <ul className="colList">
                      <li className="dot"></li>
                    </ul>

                    <ul className="colList">
                      <li className="text">Clients can reschedule up to:</li>
                    </ul>

                    <ul className="colList">
                      <li className="row">
                        <input
                          type="number"
                          name="deposit"
                          className="serviceInput"
                          placeholder="0"
                          min="0"
                        />
                        <select className="selectWrap">
                          <option
                            className="percentBtn percentBtn activeBtn"
                            type="button"
                          >
                            Hours
                          </option>
                          <option className="dollarBtn" type="button">
                            Days
                          </option>
                        </select>
                      </li>
                    </ul>

                    <ul className="colList">
                      <li className="text">Before Appointment</li>
                    </ul>
                  </div>
                </div>

                <div className="colShow">
                  <label htmlFor="additional-info" className="additionalInfo">
                    Additional Information?
                  </label>
                  <textarea
                    name="text"
                    className="textArea"
                    cols="30"
                    rows="10"
                    placeholder="Add additional rules here."
                  ></textarea>
                </div>
                <button className="btn-primary">Save</button>
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


              