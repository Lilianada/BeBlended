import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../../../../../components";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineCalendar } from "react-icons/hi";
import { BsChevronCompactDown } from "react-icons/bs";
import AfroIcon from "../../../../../assets/AfroVector.svg";
import "./NormalService.scss";

const services = [
  "Classic Box Braids",
  "Knotless Box Braids",
  "Braided Ponytail",
  "Crotchet Braids",
]

export default function NormalService({ openModal, closeModal }) {
  const handleClick = (e) => {
    e.preventDefault(); 
  }

  return ReactDOM.createPortal(
    <>
      {" "}
      {/* {openModal ? ( */}
      <div className="normalService">
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
              <form action="" className="appointmentForm">
                <select name="select" className="selectDropdown">
                  <option value="" className="optHead" defaultValue={true}>Select services...</option>
                  {services.map((item, id) => (
                    <option value={id} className="opt" key={id}>
                      {item}
                    </option>
                  ))}
                  <option value="" className="optButton">
                    Custom Service
                  </option>
                </select>

                <div className="variants">
                  <select name="variant-one" className="variantDropdown">
                    <option value="" defaultValue={true}>Size...</option>
                    <option value="">Small</option>
                    <option value="">Medium</option>
                    <option value="">Big</option>
                  </select>
                  <select name="variant-two" className="variantDropdown">
                    <option value="" defaultValue={true}>Length...</option>
                    <option value="">Collarbone</option>
                    <option value="">Armpit</option>
                    <option value="">Brastrap</option>
                    <option value="">Mid-Back</option>
                    <option value="">Waist</option>
                  </select>
                </div>

                <div className="selectDate">
                  <HiOutlineCalendar className="HiOutlineCalendar" />
                  <button className="select" onClick={(e) => e.preventDefault()}>
                    Select a date
                  </button>
                </div>

                <div className="selectTime">
                  <AiOutlineClockCircle className="AiOutlineClockCircle" />
                  <button disabled className="select">
                    8:00am
                    <BsChevronCompactDown fill="#000" size={18} />
                  </button>
                  <span className="bar"></span>
                  <button disabled className="select">
                    1:00pm
                    <BsChevronCompactDown fill="#000" size={18} />
                  </button>
                </div>

                <div className="clientDetails">
                  <img src={AfroIcon} alt="Afro Vector" width={34} />
                  <button className="select" onClick={(e) => e.preventDefault()}>
                    Click here to add client details.
                  </button>
                </div>

                <button className="saveBtn" onClick={handleClick}>
                  Save
                </button>
              </form>
            </div>
          </motion.div>
        </Backdrop>
      </div>
      {/* ) : null } */}
    </>, document.getElementById('modal')
  );
}
