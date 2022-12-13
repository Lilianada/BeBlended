import React from "react";
import Logo from "../../../assets/logo-black.svg";
import './DashboardHomepage.scss';
import {DashboardMenu} from "../../../../components";

export default function DashboardHomepage() {
  return (
    <main className="mainWrapper dashboardHomepage">
        <header className="dashboardHeader">
            <img src={Logo} alt="Logo"/>
            <button className="logoutBtn">Logout</button>
        </header>

        <div className="dashboardGrid">
            <div className="dashboardMenu">
                <DashboardMenu/>
            </div>
            <div className="dashboard"></div>
        </div>
    </main>
  );
}
