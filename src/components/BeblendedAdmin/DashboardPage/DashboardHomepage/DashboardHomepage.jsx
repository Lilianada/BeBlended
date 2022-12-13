import React from "react";
import Logo from "../../../../assets/logo-black.svg";
import './DashboardHomepage.scss';
import {DashboardMenu} from "../../../../components";

export default function DashboardHomepage() {
  return (
    <main className="dashboardHomepage">
        <header className="dashboardHeader">
            <img src={Logo} alt="Logo"/>
            <button className="logoutBtn">Logout</button>
        </header>

        <div className="dashboardGrid">
            <DashboardMenu/>
            <div className="dashboard">Grace</div>
        </div>
    </main>
  );
}
