import React, { useState } from "react";
import "./ReschedulePage.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLeft } from "react-icons/ai";
import BookingHeader from "../Header/Header";
import ProfilePicture from "../../../assets/BossLady.png";
import TimeRescheduler from "../TimeScheduler/TimeRescheduler";

function ReschedulePage({ openModal, closeModal }) {
  //date
  const [date, setDate] = useState(new Date());

  //time
  const [time, setTime] = useState();
  const handleTime = () => {
    setTime(!time);
  };

  return(
    <>
      {openModal ? (
      <motion.section
        className="reschedule"
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
        <BookingHeader />
        <div className="reschedule_Body">
          <button className="backBtn">
            <AiOutlineLeft
              fill="#050205"
              size={20}
              style={{ marginRight: ".75rem" }}
            />
            Back
          </button>
          <div className="flexItems">
            <div className="head">
              <div className="stylistProfile">
                <img src={ProfilePicture} alt="" className="profilePicture" />
                <h5 className="name">Braids by Becky</h5>
              </div>
              <p>Choose a Date & Time</p>
            </div>
            <div className="body">
              <div className="calendarContainer">
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
            </div>
          </div>
        </div>
      </motion.section>
      ) : null}
    </>
  );
}

export default ReschedulePage;
