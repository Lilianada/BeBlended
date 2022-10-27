import React, { useState } from "react";
import "./ManageBookings.scss";
import BookingHeader from "../BookingHeader/BookingHeader";
import { Backdrop, BottomNavStylist } from "../../../components";
import { AiFillDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { GrPrevious } from "react-icons/gr";
import { IoCalendarSharp } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

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

const pastServices = [
    {
        serviceName: "Knotless Braids",
        clientName: "Ashley Nelson",
        date: "October 23, 2021",
        time: "11:00am - 5:00pm",
    },
    {
        serviceName: "Knotless Braids",
        clientName: "Ashley Nelson",
        date: "October 23, 2021",
        time: "11:00am - 5:00pm",
    },
];

export default function ManageBookings() {
    const [activeTab, setActiveTab] = useState(1);
    const isActive = (index) => setActiveTab(index);

    const [tabOpen, setTabOpen] = useState(false);
    const isOpen = () => setTabOpen(!tabOpen);

    return (
        <main className="mainWrapper">
            <BookingHeader />

            <section className="appointmentSection">
                <button className="backBtn">
                    <GrPrevious className="angleLeft" size={18} />
                    <p>Back</p>
                </button>
                <div className="searchWrap">
                    <button className="searchButton">
                        <FaSearch size={18} fill="#907D7D" stroke="#907D7D" />
                    </button>
                    <div className="searchBar">
                        <input
                            type="search"
                            name="search-bar"
                            placeholder="Search"
                            className="searchInput"
                        />
                        <button className="searchBtn">
                            <FaSearch size={14} fill="#907D7D" stroke="#907D7D" />
                        </button>
                    </div>
                </div>
                <button className="createBtn">
                    <MdAdd
                        size={28}
                        fill="white"
                        stroke="white"
                        style={{ marginRight: ".75rem" }}
                    />
                    Create Appointment
                </button>
            </section>

            <section className="manageBookings_Section">
                <div className="sectionHead">
                    <h4 className="sectionTitle"> Manage Bookings </h4>
                </div>
                <div className="sectionTabs">
                    <div className="tabHead">
                        <AnimatePresence
                            initial={false}
                            exitBeforeEnter={true}
                            onExitComplete={() => null}
                        >
                            <motion.label
                                htmlFor="upcoming"
                                className={`tab ${activeTab === 1 ? "active" : ""}`}
                                onClick={() => isActive(1)}

                            >
                                Upcoming
                            </motion.label>
                        </AnimatePresence>
                        <AnimatePresence
                            initial={false}
                            exitBeforeEnter={true}
                            onExitComplete={() => null}
                        >
                            <motion.label
                                htmlFor="past"
                                className={`tab ${activeTab === 2 ? "active" : ""}`}
                                onClick={() => isActive(2)}
                            >
                                Past
                            </motion.label>
                        </AnimatePresence>
                    </div>

                    <div className="tabFlex">
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
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {
                            pastServices.length > 0 ? (
                                <div className={`mappedTabs ${activeTab === 2 ? "activeTab" : ""}`} onClick={isOpen}>
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
                            )
                                : (
                                    <div className={`noPastBooking ${activeTab === 2 ? "activeTab" : ""}`} onClick={isOpen}>
                                        <div className="calendarIcon">
                                            <IoCalendarSharp size={40} />
                                        </div>
                                        <p className="noBookingText">You have no past <br /> bookings.</p>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </section>
            <BottomNavStylist />
        </main>
    );
}


export function DeclineAppointment() {
    return (
        <div className="declineAppointment">
            <Backdrop>
                <div className="declineContent">
                    <div className="dialogHeader">
                        <AiFillDelete size={35} />
                    </div>
                    <div className="dialogBody">
                        <p>Are you sure you want to decline this appointment?</p>
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
                        // onClick={}
                        >
                            No
                        </button>
                    </div>
                </div>
            </Backdrop>
        </div>
    )
}