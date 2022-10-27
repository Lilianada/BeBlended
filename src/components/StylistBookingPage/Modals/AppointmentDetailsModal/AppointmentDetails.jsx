import React, { useState } from "react";
import "./AppointmentDetails.scss";
import { Backdrop } from "../../../../components";
import { motion } from "framer-motion";
import { AiOutlineClose, AiFillDelete } from "react-icons/ai";
import { Calendar } from "react-calendar";
import Pic from "../../../../assets/BraidedLady.png";

export default function AppointmentDetails({ openModal, closeModal }) {
  return ReactDOM.createPortal (
    <>
    {openModal ? (
    <section className="appointmentDetails">
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
          <header className="modalHeader">
            <button className="closeButton" onClick={closeModal}>
              <AiOutlineClose size={26} />
            </button>
          </header>
          <div className="modalContent">
            <div className="contentHead">
              <h5 className="head">Box Braids</h5>
              <p className="subHead">Mid-back/Small</p>
            </div>
            <div className="contentDetails">
              <p className="text">
                <strong>Cost: </strong>
                $150
              </p>
              <p className="text">
                <strong>Date: </strong>
                Monday August 23, 2021
              </p>
              <p className="text">
                <strong>Time: </strong>
                8:00am - 12:00pm
              </p>
              <p className="text">
                <strong>Location: </strong>
                123 Front Street West, Toronto ON, Canada
              </p>
            </div>
            <hr className="borderBottom" />
            <div className="serviceControls">
              <p className="text">Leah James</p>
              <div className="buttonControls">
                <button className="chatBtn">Chat with Leah</button>
                <button className="viewBtn">View Profile</button>
                <button className="rescheduleBtn">
                  Reschedule Appointment
                </button>
                <button className="cancelBtn">Cancel Appointment</button>
              </div>
            </div>
          </div>
        </motion.div>
      </Backdrop>
    </section>
    ) : null}{" "}
    </>,
    document.getElementById("modal")
  );
}

export function CancelAppointment({ openModal, closeModal}) {
  return ReactDOM.createPortal (
    <>
    {openModal ? (
    <div className="cancelAppointment">
      <Backdrop>
        <div className="cancelContent">
          <div className="dialogHeader">
            <AiFillDelete size={35} />
          </div>
          <div className="dialogBody">
            <p>Are you sure you want to cancel your appointment?</p>
          </div>
          <div className="dialogFooter">
            <button
              className="btn-secondary"
              type="button"
              data-dismiss="deleteModal"
            >
              Yes
            </button>
            <button
              className="btn-primary"
              type="button"
            onClick={closeModal}
            >
              No
            </button>
          </div>
        </div>
      </Backdrop>
    </div>
) : null}{" "}
</>,
document.getElementById("modal")  );
}

export function DateReschedule({ openModal, closeModal}) {
  const [value, onChange] = useState(new Date());
  return ReactDOM.createPortal (
    <>
    {openModal ? (
    <div className="dateReschedule">
      <Backdrop>
        <div className="dialogContent">
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
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
      </Backdrop>
    </div>
    ) : null}{" "} 
    </>,
    document.getElementById("modal")
  );
}

