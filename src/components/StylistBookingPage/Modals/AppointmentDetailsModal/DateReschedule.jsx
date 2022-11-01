import React from "react";
import ReactDOM from "react-dom";
import "./AppointmentDetails.scss";
import { Backdrop } from "../../../../components";
import { Calendar } from "react-calendar";
import Pic from "../../../../assets/BraidedLady.png";
import { AiOutlineClose } from "react-icons/ai";

function DateReschedule ({ openModal, closeModal}) {
    const [value, onChange] = React.useState(new Date());
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
  export default  DateReschedule;