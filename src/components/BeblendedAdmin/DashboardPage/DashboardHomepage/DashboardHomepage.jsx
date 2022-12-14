import React from "react";
import Logo from "../../../../assets/logo-black.svg";
import "./DashboardHomepage.scss";
import { DashboardMenu, DashboardPage } from "../../../../components";
import { Route, Routes } from "react-router-dom";

export default function DashboardHomepage() {
  return (
    <main className="dashboardHomepage">
      <header className="dashboardHeader">
        <img src={Logo} alt="Logo" />
        <button className="logoutBtn">Logout</button>
      </header>

      <div className="dashboardGrid">
        <DashboardMenu />
        <div className="dashboard">
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}
