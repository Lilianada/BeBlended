import React from "react";
import "./StylistAdminHome.scss";
import StylistAdminHeader from "../StylistAdminHeader/StylistAdminHeader";
import Personal from "../../../assets/Admin-Icons/Personal-icon.svg";
import Business from "../../../assets/Admin-Icons/Business-icon.svg";
import { GrNext } from "react-icons/gr";

export default function StylistAdminHome() {
  return (
    <section className="mainWrapper stylistAdmin_Home">
      <StylistAdminHeader />

      <div className="adminHead_Text">
        <h5>Your Account</h5>
        <p className="stylistName">
          <strong>Braids by Becky</strong> - Becky Jones{" "}
        </p>
      </div>

      <div className="adminMenu_items">
        <div className="menuItem">
          <img src={Personal} alt="Menu Icon" className="menuIcon" />
          <div className="menuName">
            <p>Personal Information</p>
            <GrNext fontWeight={700} />
          </div>
          <p className="menuInfo">
            Provide personal details and let us know how we can reach you.
          </p>
        </div>
        <div className="menuItem">
          <img src={Business} alt="Menu Icon" className="menuIcon" />
          <div className="menuName">
            <p>Business Profile</p>
            <GrNext fontWeight={700} />
          </div>
          <p className="menuInfo">
            Update your services, hours and all business information.
          </p>
        </div>
      </div>
    </section>
  );
}
