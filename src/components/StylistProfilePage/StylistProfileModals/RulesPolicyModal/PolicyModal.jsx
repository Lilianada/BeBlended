import React, { useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import "./PolicyModal.scss";
import { AiOutlineClose } from "react-icons/ai";
import CurrencyInput from "react-currency-input-field";
import { Backdrop } from "../../../../components";

function PolicyModal({ openModal, closeModal }) {
  const options = [
    { value: 1, text: "Flexible" },
    { value: 2, text: "Moderate" },
    { value: 3, text: "Strict" },
  ];
  const [isClicked, setIsClicked] = useState(options[0].value);
  const handleChange = (event) => {
    const selected = event.target.value;
    setIsClicked(selected);
  };
  return ReactDOM.createPortal(
    <>
      {" "}
      {/* {openModal ? ( */}
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
                <div className="rowItems">
                  <label htmlFor="Select" style={{ marginRight: ".75rem" }}>
                    Select cancellation policy:
                  </label>
                  <select
                    // value={setIsClicked}
                    className="selectOption"
                    onChange={handleChange}
                  >
                    {options.map((option, id) => (
                      <option value={option.value} key={id}>
                        {option.text}
                      </option>
                    ))}
                  </select>
                </div>
                { isClicked == options[0].value && (
                <div className="colShow">
                  <h6 className="colHead">Flexible Cancellation Policy:</h6>
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
                )}
                { isClicked == options[1].value && (
                <div className="colShow">
                  <h6 className="colHead">Moderate Cancellation Policy:</h6>
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
                )}
                { isClicked == options[2].value && (
                <div className="colShow">
                  <h6 className="colHead">Strict Cancellation Policy:</h6>
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
                )}
                <div className="rowItems">
                  <label htmlFor="late-fee">
                    Charge clients a late fee of{" "}
                  </label>
                  <CurrencyInput
                    name="price"
                    className="lateFee"
                    placeholder="$0"
                    prefix="$"
                    disableGroupSeparators={true}
                    onValueChange={(value, name) => console.log(value, name)}
                    required={false}
                  />
                  <label htmlFor="late-fee"> after </label>
                  <input
                    type="number"
                    name="text|number"
                    className="lateFee"
                    placeholder="0"
                  />
                  <label htmlFor="minutes"> minutes.</label>
                </div>
                <div className="colShow">
                  <label htmlFor="additional-info">
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
      {/* ) : null}{" "} */}
    </>,
    document.getElementById("modal")
  );
}

export default PolicyModal;
