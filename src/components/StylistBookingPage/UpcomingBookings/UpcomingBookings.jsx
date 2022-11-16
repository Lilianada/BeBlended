import React from "react";
import "./UpcomingBookings.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { DeclineAppointment, AppointmentDetails} from "../../../components";


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
                <BsThreeDotsVertical style={{ cursor: "pointer" }} onClick={() => handleModal("details")} />
                <AnimatePresence
                  initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                  >
                    {openModal.details && (
                      <AppointmentDetails openDetails={openModal.details} closeDetails={handleModal} />
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
                <button className="decline" onClick={() => handleModal("decline")} > Decline </button>
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
    </div>
  );
}

