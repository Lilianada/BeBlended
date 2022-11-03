import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../../../..";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose, AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineCalendar } from "react-icons/hi";
import { BsChevronCompactDown } from "react-icons/bs";
import AfroIcon from "../../../../../assets/AfroVector.svg";
import "./AppointmentStepOne.scss";
import InfoForm from "../ClientInfoFormModal/InfoForm";

const services = [
  "Classic Box Braids",
  "Knotless Box Braids",
  "Braided Ponytail",
  "Crotchet Braids",
];

function CreateAppointment({ openModal, closeModal }) {
  const handleClick = (e) => {
    e.preventDefault();
  };

  const [open, setOpen] = useState({
    date: false,
    form: false,
  });

  const handleModal = (date, form, e) => {
    e.preventDefault();
    setOpen((prevState) => {
      return {
        ...prevState,
        [date]: !prevState[date],
        [form]: !prevState[form],
      };
    });
  };

  return ReactDOM.createPortal(
    <>
      {" "}
      {openModal ? (
        <div className="modalWrap">
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
                  <AiOutlineClose size={24} />
                </button>
              </header>

              <div className="modalContent">
                <form action="" className="appointmentForm">
                  <select name="select" className="selectDropdown">
                    <option value="" className="optHead" defaultValue={true}>
                      Select services...
                    </option>
                    {services.map((item, id) => (
                      <option value={id} className="opt" key={id}>
                        {item}
                      </option>
                    ))}
                    <option value="" className="optButton">
                      Custom Service
                    </option>
                  </select>

                  <div className="selectDate">
                    <HiOutlineCalendar className="HiOutlineCalendar" />
                    <button
                      className="select"
                      onClick={(e) => e.preventDefault()}
                    >
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
                    <button
                      className="select"
                      onClick={() => handleModal("form")}
                    >
                      Click here to add client details.
                    </button>
                    {open.form && (
                      <AnimatePresence
                        initial={false}
                        exitBeforeEnter={true}
                        onExitComplete={() => null}
                      >
                        <InfoForm openModal={open.form} closeModal={setOpen} />
                      </AnimatePresence>
                    )}
                  </div>

                  <button className="saveBtn" onClick={handleClick}>
                    Save
                  </button>
                </form>
              </div>
            </motion.div>
          </Backdrop>
        </div>
      ) : null}{" "}
    </>,
    document.getElementById("modal")
  );
}

export default CreateAppointment;
