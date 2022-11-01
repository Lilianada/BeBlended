import React from "react";
import ReactDOM from "react-dom";
import "./AppointmentDetails.scss";
import { Backdrop } from "../../../../components";
import { AiFillDelete } from "react-icons/ai";

export default function CancelAppointment({ openModal, closeModal}) {
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