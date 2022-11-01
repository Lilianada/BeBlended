import React from "react";
import "./UpcomingBookings.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AppointmentDetails from "../Modals/AppointmentDetailsModal/AppointmentDetails";

const services = [
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

export default function UpcomingBookings() {
  const [openModal, setOpenModal] = React.useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="upcomingBookings">
      <div className="upcomingHeader">
        <h5 className="upcomingHead">Upcoming Bookings</h5>
        <Link to="/manage-bookings" className="subHead" >
            View all
        </Link>
      </div>
      <div className="mappedServices">
        {services.map((items, id) => (
          <div className="serviceCard" key={id}>
            <div className="bar"></div>
            <div className="card">
              <div className="cardHead">
                <p className="cardTitle"> {items.serviceName} </p>
                <BsThreeDotsVertical style={{ cursor: "pointer" }} onClick={handleModal} />
                <AnimatePresence
                  initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                  >
                    {openModal && (
                      <AppointmentDetails openDetails={openModal} closeDetails={handleModal} />
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
                <button className="decline"> Decline </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

