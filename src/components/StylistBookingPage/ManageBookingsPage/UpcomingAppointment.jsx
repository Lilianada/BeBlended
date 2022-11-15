import React, {useState} from "react";
import { DeclineAppointment, AppointmentDetails  } from "../../../components";
import { AnimatePresence } from "framer-motion";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCalendarSharp } from "react-icons/io5";
import "./ManageBookings.scss";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

const upcomingServices = [
  {
    serviceName: "Box Braids",
    clientName: "Leah James",
    date: "August 23, 2021",
    time: "8:00am - 12:00pm",
  },
  {
    serviceName: "Cornrows",
    clientName: "Sarah Jones",
    date: "August 23, 2021",
    time: "12:10pm - 3:00pm",
  },
  {
    serviceName: "Cornrows",
    clientName: "Sarah Jones",
    date: "August 23, 2021",
    time: "12:10pm - 3:00pm",
  },
];

export default function UpcomingAppointment({activeTab, open}) {
  
  const [openModal, setOpenModal] = React.useState({
    details: false,
    decline: false
  });
  const handleModal = (details, decline) => {
    setOpenModal((prev) => {
      return {
        [details]: !prev[details],
        [decline]: !prev[decline],
      }
    });
  };
  return (
    <ErrorBoundary>
      {upcomingServices.length > 0 ? (
        <div
          className={`mappedTabs ${activeTab === 1 ? "activeTab" : ""}`}
          onClick={open}
        >
          {upcomingServices.map((items, id) => (
            <div className="serviceCard" key={id}>
              <div className="bar"></div>
              <div className="card">
                <div className="cardHead">
                  <p className="cardTitle"> {items.serviceName} </p>
                  <BsThreeDotsVertical style={{ cursor: "pointer" }} onClick={() => handleModal('details')} />
                  {
                    openModal.details && (
                      <AnimatePresence
                      initial={false}
                      exitBeforeEnter={true}
                      onExitComplete={() => null}
                    >
                      <AppointmentDetails openDetails={openModal.details} closeDetails={setOpenModal} />
                    </AnimatePresence>
                    )
                  }
                </div>
                <div className="cardTexts">
                  <p className="text"> {items.clientName} </p>
                  <p className="text"> {items.date} </p>
                  <p className="text"> {items.time} </p>
                </div>
                <div className="cardButtons">
                  <button className="accept"> Accept </button>
                  <button className="decline" onClick={() => handleModal('decline')}> Decline </button>
                  <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                  >
                    {
                      openModal.decline && (
                        <DeclineAppointment
                          openModal={openModal.decline}
                          closeModal={setOpenModal}
                        />
                      )
                    }
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`noPastBooking ${activeTab === 2 ? "activeTab" : ""}`}
          onClick={open}
        >
          <div className="calendarIcon">
            <IoCalendarSharp size={40} />
          </div>
          <p className="noBookingText">You have no upbookings.</p>
        </div>
      )}
    </ErrorBoundary>
  );
}
