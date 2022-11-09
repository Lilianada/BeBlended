import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import ReactDOM from 'react-dom';
import { Backdrop } from "../../../components";
import { motion } from "framer-motion";
import "./DistanceModal.scss";

export default function DistanceModal({ openModal, closeModal }) {
  const [switchBtn, setSwitchBtn] = useState({
    kilo: true,
    miles: false,
  });
  // const handleSwitch = () => {

  // }

  return ReactDOM.createPortal(
    <>
      {/* {openModal ? ( */}
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
                  <CurrencyInput
                    suffix="km"
                    type="text|num"
                    name="kilometers"
                    className="inputField"
                    placeholder="0"
                    groupSeparator=""
                    disableGroupSeparators="true"
                  />
                </label>
                <div className="buttonWrap">
                  <button className="clearBtn">clear</button>
                  <button className="saveBtn">Save</button>
                </div>
              </div>
            </motion.div>
          </Backdrop>
        </section>
      {/* ) : null} */}
    </>,
    document.getElementById("modal")
  );
}
