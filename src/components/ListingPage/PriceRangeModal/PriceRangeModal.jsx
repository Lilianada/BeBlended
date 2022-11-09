import React from "react";
import { Backdrop } from "../../../components";
import { motion } from "framer-motion";
import PriceRange from "../../../assets/PriceRange.svg";
import "./PriceRangeModal.scss";
import { AiOutlineMinus } from "react-icons/ai";
import CurrencyInput from "react-currency-input-field";

export default function PriceRangeModal({ openModal, closeModal }) {
  return ReactDOM.createPortal(
    <>
      {openModal ? (
        <section className="priceRangeModal">
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
                <img src={PriceRange} alt="Price Range" />
                <div className="inputWrap">
                  <label htmlFor="min-price" className="label">
                    Min Price
                    <CurrencyInput
                      prefix="$"
                      type="text|num"
                      name="min-price"
                      className="inputField"
                      placeholder="00.00"
                      groupSeparator=""
                      disableGroupSeparators="true"
                    />
                  </label>
                  <AiOutlineMinus size={18} />
                  <label htmlFor="max-price" className="label">
                    Max Price
                    <CurrencyInput
                      prefix="$"
                      type="text|num"
                      name="max-price"
                      className="inputField"
                      placeholder="00.00"
                      groupSeparator=""
                      disableGroupSeparators="true"
                    />
                  </label>
                </div>
                <div className="buttonWrap">
                  <button className="clearBtn">clear</button>
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
