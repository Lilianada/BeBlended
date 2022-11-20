import React from "react";
import "./UpcomingBookings.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import { DeclineAppointment, AppointmentDetails } from "../../../components";

export default function BookingServiceCard({ item }) {
  const [openModal, setOpenModal] = React.useState({
    details: false,
    decline: false,
  });

  const handleModal = (details, decline) => {
    setOpenModal((prev) => {
      return {
        [details]: !prev[details],
        [decline]: !prev[decline],
      };
    });
  };

  return (
    <>
      <div className="serviceCard">
        <div className="bar"></div>
        <div className="card">
          <div className="cardHead">
            <p className="cardTitle"> {item.serviceName} </p>
            <BsThreeDotsVertical
              style={{ cursor: "pointer" }}
              onClick={() => handleModal("details")}
            />
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {openModal.details && (
                <AppointmentDetails
                  openDetails={openModal.details}
                  closeDetails={setOpenModal}
                />
              )}
            </AnimatePresence>
          </div>
          <div className="cardTexts">
            <p className="text"> {item.clientName} </p>
            <p className="text"> {item.date} </p>
            <p className="text"> {item.time} </p>
          </div>
          <div className="cardButtons">
            <button className="accept"> Accept </button>
            <button className="decline" onClick={() => handleModal("decline")}>
              {" "}
              Decline{" "}
            </button>
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {openModal.decline && (
                <DeclineAppointment
                  openModal={openModal.decline}
                  closeModal={setOpenModal}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
