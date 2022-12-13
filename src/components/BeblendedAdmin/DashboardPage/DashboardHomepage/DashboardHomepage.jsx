import React from "react";
import Logo from "../../../assets/logo-black.svg";
import './DashboardHomepage.scss';

export default function DashboardHomepage() {
  return (
    <main className="mainWrapper dashboardHomepage">
        <header className="dashboardHeader">
            <img src={Logo} alt="Logo"/>
            <button className="logoutBtn">Logout</button>
        </header>

        <div className="dashboardGrid">
            <div className="dashboardMenu"></div>
            <div className="dashboard"></div>
        </div>
    </main>
  );
}
