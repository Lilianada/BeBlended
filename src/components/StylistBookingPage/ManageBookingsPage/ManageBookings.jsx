import React, { useState } from "react";
import "./ManageBookings.scss";
import BookingHeader from "../BookingHeader/BookingHeader";
import {
  BottomNavStylist,
  CreateAppointment,
  PastAppointments,
} from "../../../components";
import { bookings } from "../CreateAppointmentData";
import { FaSearch } from "react-icons/fa";
import { GrPrevious } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import BookingServiceCard from "../UpcomingBookings/BookingServiceCard";


export default function ManageBookings() {
  const [activeTab, setActiveTab] = useState(1);
  const isActive = (index) => setActiveTab(index);

  const [tabOpen, setTabOpen] = useState({
    upcoming: false,
    past: false
  });
  const isOpen = (upcoming, past) => {
    setTabOpen((prev) => {
      return {
        ...prev, 
        [upcoming]: !prev[upcoming],
        [past]: !prev[past]
      }}

    );
  }

  const [openModal, setOpenModal] = React.useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <main className="mainWrapper manageBookings">
      <BookingHeader />

      <section className="appointmentSection">
        <Link to="/stylist-booking-page" className="backBtn">
          <GrPrevious className="angleLeft" size={18} />
          <p>View Calendar</p>
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
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
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
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                htmlFor="past"
                className={`tab ${activeTab === 2 ? "active" : ""}`}
                onClick={() => isActive(2)}
              >
                Past
              </motion.label>
            </AnimatePresence>
          </div>

          <div className="tabFlex">
            <div className={`mappedTabs ${activeTab === 1 ? "activeTab" : ""}`}>
              {bookings.map((item, id) => {
                return (
                <BookingServiceCard item={item} key={id} open={isOpen.upcoming}/>
              )})}
            </div>
            <PastAppointments activeTab={activeTab} open={isOpen.past} />
          </div>
        </div>
      </section>
      <BottomNavStylist />
    </main>
  );
}
