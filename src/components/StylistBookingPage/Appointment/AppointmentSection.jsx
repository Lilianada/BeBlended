import React from "react";
import { Link } from "react-router-dom";
import { CreateAppointment } from "../../../components";
import { AnimatePresence, motion } from "framer-motion";
import { RiAddFill } from "react-icons/ri";
import { GrPrevious } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import "./AppointmentSection.scss";

export default function AppointmentSection () {
  const [openModal, setOpenModal] = React.useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const [isSearch, setIsSearch] = React.useState(false);
  const handleSearch = () => {
    setIsSearch(!isSearch);
  }

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
        <div className="firstHeader">
          <button className="backBtn">
            <GrPrevious className="angleLeft" size={18} />
            <p>Back</p>
          </button>

          <div className="searchWrap">
            <button className="searchButton" onClick={handleSearch}>
              <FaSearch size={18} fill="#907D7D" stroke="#907D7D" />
            </button>
            <AnimatePresence>
              {
                isSearch && (
                <motion.div className="searchBar"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  // delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                exit={{ x: 300, opacity: 0 }}
                >
                  <input
                    type="search"
                    name="search-bar"
                    placeholder="Search"
                    className="searchInput"
                  />
                </motion.div>
                )
              }
            </AnimatePresence>
          </div>
        </div>
        <div className="secondHeader">
          <Link to='/manage-booking' className="manageBookings_Link">Manage Bookings</Link>
          <div className="createAppointment_Button" onClick={handleModal}>
            <RiAddFill
              size={28}
              fill="white"
              stroke="white"
              style={{ marginRight: ".75rem" }}
            />
            Create Appointment         
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
      </div>
    </section>
  );
}
