import React from "react";
import "./Appointment.scss";
import { GrPrevious } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import CreateAppointment from "../Modals/CreateAppointmentModals/AppointementStepOneModal/AppointmentStepOne";
import { AnimatePresence } from "framer-motion";

function AppointmentSection() {
  const [openModal, setOpenModal] = React.useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
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

      <select name="dropdown" className="dropdown">
        <option value="Day" defaultValue={true}>
          Day
        </option>
        <option value="Week">Week</option>
        <option value="Month">Month</option>
      </select>
    </section>
  );
}

export default AppointmentSection;
