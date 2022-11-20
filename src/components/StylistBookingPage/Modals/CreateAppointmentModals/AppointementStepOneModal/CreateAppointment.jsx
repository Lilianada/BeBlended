import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Backdrop,
  DateReschedule,
  InfoForm,
  CustomService,
} from "../../../../../components";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose, AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineCalendar } from "react-icons/hi";
import AfroIcon from "../../../../../assets/AfroVector.svg";
import "./AppointmentStepOne.scss";
import { services, getTimer } from "../../../CreateAppointmentData";

function CreateAppointment({ openModal, closeModal }) {
  const [open, setOpen] = useState({
    date: false,
    form: false,
    custom: false,
  });

  const handleModal = (date, form, custom) => {
    setOpen((prevState) => {
      return {
        ...prevState,
        [date]: !prevState[date],
        [form]: !prevState[form],
        [custom]: !prevState[custom],
      };
    });
  };

  const handleSelect = (e) => {
    if (e.target.value === "Custom Service") {
      handleModal('custom')
    }else {
      return
    }
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
                  <select
                    className="selectDropdown"
                    onChange={(e) => handleSelect(e)}
                  >
                    <option
                      value="services"
                      className="optHead"
                      defaultValue
                      disabled
                    >
                      Select services...
                    </option>
                    {services.map((item, id) => (
                      <option value={item} className="opt" key={id}>
                        {item}
                      </option>
                    ))}
                    <AnimatePresence
                      initial={false}
                      exitBeforeEnter={true}
                      onExitComplete={() => null}
                    >
                      {open.custom && (
                        <CustomService
                          openModal={open.custom}
                          closeModal={setOpen}
                        />
                      )}
                    </AnimatePresence>
                  </select>

                  <div className="selectDate">
                    <HiOutlineCalendar className="HiOutlineCalendar" />
                    <div className="select" onClick={() => handleModal("date")}>
                      Select a date
                    </div>
                    <AnimatePresence
                      initial={false}
                      exitBeforeEnter={true}
                      onExitComplete={() => null}
                    >
                      {open.date && (
                        <DateReschedule
                          openModal={open.date}
                          closeModal={setOpen}
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="selectTime">
                    <AiOutlineClockCircle className="AiOutlineClockCircle" />
                    <select name="select-time-one" className="select">
                      <option
                        value="id"
                        className="optHead"
                        defaultValue={true}
                      >
                        6:00 AM
                      </option>
                      {getTimer.map((time, id) => {
                        return (
                          <option key={id} value="id" className="opt">
                            {time}
                          </option>
                        );
                      })}
                    </select>
                    <span className="bar"></span>
                    <select name="select-time-two" className="select">
                      <option
                        value="id"
                        className="optHead"
                        defaultValue={true}
                      >
                        6:00 AM
                      </option>
                      {getTimer.map((time, id) => {
                        return (
                          <option value="id" className="opt" key={id}>
                            {time}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="clientDetails">
                    <img src={AfroIcon} alt="Afro Vector" width={34} />
                    <div className="select" onClick={() => handleModal("form")}>
                      Click here to add client details.
                    </div>
                    <AnimatePresence
                      initial={false}
                      exitBeforeEnter={true}
                      onExitComplete={() => null}
                    >
                      {open.form && (
                        <InfoForm openModal={open.form} closeModal={setOpen} />
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    className="saveBtn"
                    onClick={(e) => e.preventDefault()}
                  >
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
