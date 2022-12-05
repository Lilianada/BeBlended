import React from "react";
import ReactDOM from "react-dom";
import {
    Backdrop,
    CancelAppointment,
    DateReschedule,
} from "../../..";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import "./ClientAppointmentDetails.scss";

export default function ClientAppointmentDetails({ openDetails, closeDetails }) {
  const [open, setOpen] = React.useState({
    cancel: false,
    reschedule: false,
  });
  const handleModal = (cancel, reschedule) => {
    setOpen((prevState) => {
      return {
        ...prevState,
        [cancel]: !prevState[cancel],
        [reschedule]: !prevState[reschedule],
      };
    });
  };

  return ReactDOM.createPortal(
    <>
      {openDetails ? (
        <section className="clientAppointment_Details">
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
                <button className="closeButton" onClick={closeDetails}>
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
                  <p className="text">Braids by Becky</p>
                  <div className="buttonControls">
                    <button className="chatBtn">Chat with Becky</button>
                    <button className="viewBtn">View Profile</button>
                    <button
                      className="rescheduleBtn"
                      onClick={() => handleModal("reschedule")}
                    >
                      Reschedule Appointment
                    </button>
                    <AnimatePresence
                      initial={false}
                      exitBeforeEnter={true}
                      onExitComplete={() => null}
                    >
                      {open.reschedule && (
                        <DateReschedule
                          openModal={open.reschedule}
                          closeModal={setOpen}
                        />
                      )}
                    </AnimatePresence>
                    <button
                      className="cancelBtn"
                      onClick={() => handleModal("cancel")}
                    >
                      Cancel Appointment
                    </button>
                    <AnimatePresence
                      initial={false}
                      exitBeforeEnter={true}
                      onExitComplete={() => null}
                    >
                      {open.cancel && (
                        <CancelAppointment
                          openModal={open.cancel}
                          closeModal={setOpen}
                        />
                      )}
                    </AnimatePresence>
                    <button className="chatBtn">View Payment Details</button>
                  </div>
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
