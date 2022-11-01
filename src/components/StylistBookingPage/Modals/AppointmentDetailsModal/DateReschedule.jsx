import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./AppointmentDetails.scss";
import { Backdrop, TimeRescheduler } from "../../../../components";
import { Calendar } from "react-calendar";
import Pic from "../../../../assets/BraidedLady.png";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

function DateReschedule ({ openModal, closeModal}) {
    const [value, onChange] = useState(new Date());
      //date
    const [date, setDate] = useState(new Date());

    //time
    const [time, setTime] = useState();
    const handleTime = () => {
      setTime(!time);
    };

    return ReactDOM.createPortal (
      <>
      {openModal ? (
      <div className="dateReschedule">
        <Backdrop>
          <motion.div className="dialogContent"
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
            <div className="dialogHeader">
              <div className="stylistDetails">
                <div className="stylistImage">
                  <img src={Pic} alt="Profile Picture" />
                </div>
                <h5 className="stylistName">Braids by Becky</h5>
              </div>
              <button className="closeButton" onClick={closeModal}>
                <AiOutlineClose size={26} />
              </button>
            </div>
            <div className="dialogSubhead">
              <p className="text">Choose a Date & Time</p>
            </div>
            <div className="calendarWrap">
            <Calendar
                  onChange={() => {
                    setDate();
                    handleTime();
                  }}
                  value={date}
                />
                <AnimatePresence
                  initial={false}
                  exitBeforeEnter={true}
                  onExitComplete={() => null}
                >
                  {time && (
                    <TimeRescheduler openModal={time} closeModal={handleTime} />
                  )}
                </AnimatePresence>
            </div>
          </motion.div>
        </Backdrop>
      </div>
      ) : null}{" "} 
      </>,
      document.getElementById("modal")
    );
  }
  export default  DateReschedule;