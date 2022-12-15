import React from "react";
import { FaSearch } from "react-icons/fa";
import "./ClientDashboard.scss";
import {ClientTable} from "../../../../../components";
import {clientData} from '../DashboardData';

export default function ClientDashboard() {
  return (
    <section className="clientDashboard">
      <div className="clientDashboard_Container">
        <div className="clientDashboard_Head">
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
        <div className="clientDashboard_Body">
          <ClientTable data={clientData} />
        </div>
      </div>
    </section>

  );
}
