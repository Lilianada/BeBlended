import React from "react";
import "./Appointment.scss";
import { GrPrevious } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

function AppointmentSection() {
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
            <FaSearch
              size={14}
              fill="#907D7D"
              stroke="#907D7D"
            />
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

      <select name="dropdown" className="dropdown">
        <option value="Day" defaultValue={true}>
          Day
        </option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
    </section>
  );
}

export default AppointmentSection;
