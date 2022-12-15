import React from "react";
import Logo from "../../../../assets/logo-black.svg";
import "./DashboardHomepage.scss";
import {
  DashboardMenu,
  DashboardPage,
  HairStylistDashboard,
  ClientDashboard,
  SettingsDashboard,
} from "../../../../components";
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
        <div className="dashboardRoutes">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route
              path="/hairstylists-dashboard"
              element={<HairStylistDashboard />}
            />
            <Route path="/clients-dashboard" element={<ClientDashboard />} />
            <Route path="/settings-dashboard" element={<SettingsDashboard />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}
