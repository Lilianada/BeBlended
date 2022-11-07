import React, {useState} from "react";
import { IoCalendarSharp } from "react-icons/io5";
import "./ManageBookings.scss";
import { BsThreeDotsVertical } from "react-icons/bs";

const pastServices = [
  //   {
  //     serviceName: "Knotless Braids",
  //     clientName: "Ashley Nelson",
  //     date: "October 23, 2021",
  //     time: "11:00am - 5:00pm",
  //   },
  //   {
  //     serviceName: "Knotless Braids",
  //     clientName: "Ashley Nelson",
  //     date: "October 23, 2021",
  //     time: "11:00am - 5:00pm",
  //   },
];

export default function PastAppointments() {
  const [activeTab, setActiveTab] = useState(1);
  const isActive = (index) => setActiveTab(index);

  const [tabOpen, setTabOpen] = useState(false);
  const isOpen = () => setTabOpen(!tabOpen);

  return (
    <div>
        {pastServices.length > 0 ? (
              <div
                className={`mappedTabs ${activeTab === 2 ? "activeTab" : ""}`}
                onClick={isOpen}
              >
                <div className="mappedServices">
                  {pastServices.map((items, id) => (
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
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className={`noPastBooking ${
                  activeTab === 2 ? "activeTab" : ""
                }`}
                onClick={isOpen}
              >
                <div className="calendarIcon">
                  <IoCalendarSharp size={40} />
                </div>
                <p className="noBookingText">
                  You have no past <br /> bookings.
                </p>
              </div>
            )}
    </div>
    );
}
