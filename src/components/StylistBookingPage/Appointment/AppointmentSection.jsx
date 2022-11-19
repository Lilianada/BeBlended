import React from "react";
import { Link } from "react-router-dom";
import { CreateAppointment } from "../../../components";
import { AnimatePresence } from "framer-motion";
import { RiAddFill } from "react-icons/ri";
import { GrPrevious } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import "./AppointmentSection.scss";

export default function AppointmentSection () {
  const [openModal, setOpenModal] = React.useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <section className="appointmentSection">
      <div className="desktopVersion">
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
        <button className="createBtn" onClick={handleModal}>
          <RiAddFill
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

        <select name="dropdown" className="dropdown">
          <option value="Day" defaultValue={true}>
            Day
          </option>
          <option value="Week">Week</option>
          <option value="Month">Month</option>
        </select>
      </div>

      <div className="mobileVersion">
        <Link to='/manage-booking' className="manageBookings_Link">Manage Bookings</Link>
        <div className="createAppointment_Button" onClick={handleModal}>
          <RiAddFill size={24} stroke="white" fill="white" />
        </div>
        <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {openModal && (
          <CreateAppointment openModal={openModal} closeModal={handleModal} />
        )}
      </AnimatePresence>
      </div>
    </section>
  );
}
