import React, {useState} from "react";
import { DeclineAppointment } from "../../../components";
import { AnimatePresence } from "framer-motion";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCalendarSharp } from "react-icons/io5";
import "./ManageBookings.scss";

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
    serviceName: "Micro Twists",
    clientName: "Ayo Adetunde",
    date: "August 23, 2021",
    time: "8:00am - 12:00pm",
  },
  {
    serviceName: "Knotless Braids",
    clientName: "Ashley Nelson",
    date: "October 23, 2021",
    time: "11:00am - 5:00pm",
  },
];

export default function UpcomingAppointment({openModal, closeModal}) {
  const [activeTab, setActiveTab] = useState(1);
  const isActive = (index) => setActiveTab(index);

  const [tabOpen, setTabOpen] = useState(false);
  const isOpen = () => setTabOpen(!tabOpen);

  return (
    <div>
      {upcomingServices.length > 0 ? (
        <div
          className={`mappedTabs ${activeTab === 1 ? "activeTab" : ""}`}
          onClick={isOpen}
        >
          {upcomingServices.map((items, id) => (
            <div className="serviceCard" key={id}>
              <div className="bar"></div>
              <div className="card">
                <div className="cardHead">
                  <p className="cardTitle"> {items.serviceName} </p>
                  <BsThreeDotsVertical style={{ cursor: "pointer" }} />
                </div>
                <div className="cardTexts">
                  <p className="text"> {items.clientName} </p>
                  <p className="text"> {items.date} </p>
                  <p className="text"> {items.time} </p>
                </div>
                <div className="cardButtons">
                  <button className="accept"> Accept </button>
                  <button className="decline"> Decline </button>
                  <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                  >
                    <DeclineAppointment
                      openModal={closeModal}
                      closeModal={openModal}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`noPastBooking ${activeTab === 2 ? "activeTab" : ""}`}
          onClick={isOpen}
        >
          <div className="calendarIcon">
            <IoCalendarSharp size={40} />
          </div>
          <p className="noBookingText">You have no upbookings.</p>
        </div>
      )}
    </div>
  );
}
