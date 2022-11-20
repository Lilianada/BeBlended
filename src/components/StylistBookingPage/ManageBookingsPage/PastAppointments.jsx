import React from "react";
import { IoCalendarSharp } from "react-icons/io5";
import "./ManageBookings.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { pastServices } from "../CreateAppointmentData";
import { AnimatePresence } from "framer-motion";
import { AppointmentDetails } from "../../../components";

export default function PastAppointments({ activeTab, open }) {
  const [openModal, setOpenModal] = React.useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <ErrorBoundary>
      {pastServices.length > 0 ? (
        <div
          className={`mappedTabs ${activeTab === 2 ? "activeTab" : ""}`}
          onClick={open}
        >
          <div className="mappedServices">
            {pastServices.map((items, id) => (
              <div className="serviceCard" key={id}>
                <div className="bar"></div>
                <div className="card">
                  <div className="cardHead">
                    <p className="cardTitle"> {items.serviceName} </p>
                    <BsThreeDotsVertical style={{ cursor: "pointer" }} />
                    <AnimatePresence
                      initial={false}
                      exitBeforeEnter={true}
                      onExitComplete={() => null}
                    >
                      {openModal && (
                        <AppointmentDetails
                          openDetails={openModal}
                          closeDetails={handleModal}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="cardTexts">
                    <p className="text"> {items.clientName} </p>
                    <p className="text"> {items.date} </p>
                    <p className="text"> {items.time} </p>
                  </div>
                  <div className="cardButtons">
                    <button className="accept"> Accept </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          className={`noPastBooking ${activeTab === 2 ? "activeTab" : ""}`}
          onClick={open}
        >
          <div className="calendarIcon">
            <IoCalendarSharp size={40} />
          </div>
          <p className="noBookingText">
            You have no past <br /> bookings.
          </p>
        </div>
      )}
    </ErrorBoundary>
  );
}
