import React from "react";
import { FaSearch } from "react-icons/fa";
import "./HairStylistDashboard.scss";
import {HairStylistTable} from "../../../../../components";
import {hairstylistData} from '../DashboardData';

export default function HairStylistDashboard() {
  return (
    <section className="hairstylistDashboard">
      <div className="hairstylistDashboard_Container">
        <div className="hairstylistDashboard_Head">
          <div className="searchWrap">
            <div className="searchBar">
            <button className="searchButton">
              <FaSearch size={18} fill="#907D7D" stroke="#907D7D" />
            </button>
              <input
                type="search"
                name="search-bar"
                placeholder="Search"
                className="searchInput"
              />
            </div>
          </div>
        </div>
        <div className="hairstylistDashboard_Body">
          <HairStylistTable data={hairstylistData} />
        </div>
      </div>
    </section>

  );
}
