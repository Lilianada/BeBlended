import React, { useState } from "react";
import "./ManageBookings.scss";
import BookingHeader from "../BookingHeader/BookingHeader";
import {
  BottomNavStylist,
  CreateAppointment,
  PastAppointment,
} from "../../../components";
import { FaSearch } from "react-icons/fa";
import { GrPrevious } from "react-icons/gr";
import { IoCalendarSharp } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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

export default function ManageBookings() {
  const [activeTab, setActiveTab] = useState(1);
  const isActive = (index) => setActiveTab(index);

  const [tabOpen, setTabOpen] = useState(false);
  const isOpen = () => setTabOpen(!tabOpen);

  const [openModal, setOpenModal] = React.useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <main className="mainWrapper">
      <BookingHeader />

      <section className="appointmentSection">
        <Link to="/stylist-booking-page" className="backBtn">
          <GrPrevious className="angleLeft" size={18} />
          <p>Back</p>
        </Link>
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
        <button className="createBtn" onClick={handleModal}>
          <MdAdd
            size={28}
            fill="white"
            stroke="white"
            style={{ marginRight: ".75rem" }}
          />
          Create Appointment
        </button>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {openModal && (
            <CreateAppointment openModal={openModal} closeModal={handleModal} />
          )}
        </AnimatePresence>
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
            <PastAppointment />
          </div>
        </div>
      </section>
      <BottomNavStylist />
    </main>
  );
}
