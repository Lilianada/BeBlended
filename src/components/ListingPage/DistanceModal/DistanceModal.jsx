import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import ReactDOM from 'react-dom';
import { Backdrop } from "../../../components";
import { motion } from "framer-motion";
import "./DistanceModal.scss";

export default function DistanceModal({ openModal, closeModal }) {
    const [message, setMessage] = useState('');

    const handleChange = event => {
    setMessage(event.target.value);
    };

    const handleClear = () => {
    // 👇️ clear input value
    setMessage('');
    };


  return ReactDOM.createPortal(
    <>
      {openModal ? (
        <section className="distanceModal">
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
              exit="exit"
            >
              <div className="modalContent">
                <label htmlFor="max-distance" className="distanceLabel">
                  Max Distance
                </label>
                <div className="labelFlex">
                  <CurrencyInput
                    value={message}
                    onChange={handleChange}
                    name="kilometers"
                    className="inputField"
                    placeholder="0"
                    groupSeparator=""
                    disableGroupSeparators="true"
                  />
                    <select name="select-distance" className="distanceSelect">
                        <option value="km">km</option>
                        <option value="miles">miles</option>
                    </select>
                </div>
                <div className="buttonWrap">
                  <button className="clearBtn" onClick={handleClear}>clear</button>
                  <button className="saveBtn">Save</button>
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
