import React from "react";
import "./StylistAdminHome.scss";
import StylistAdminHeader from "../StylistAdminHeader/StylistAdminHeader";
import Personal from "../../../assets/Admin-Icons/Personal-icon.svg";
import Business from "../../../assets/Admin-Icons/Business-icon.svg";
import Finances from "../../../assets/Admin-Icons/Finances-icon.svg";
import Clients from "../../../assets/Admin-Icons/Clients-icon.svg";
import { GrNext } from "react-icons/gr";
import { IoCalendarClearOutline, IoCard } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import {BottomNavStylist} from "../../../components";
import { Link } from "react-router-dom";

export default function StylistAdminHome() {
  return (
    <section className="mainWrapper stylistAdmin_Home">
      <StylistAdminHeader />

      <div className="adminHead_Text">
        <h5>Your Account</h5>
        <p className="stylistName">
          <strong>Braids by Becky</strong> - Becky Jones
        </p>
      </div>

      <div className="adminMenu_items">
        <div className="menuItem">
          <img src={Personal} alt="Menu Icon" className="menuIcon" />
          <div className="menuName">
            <Link to="/personal-information" className="menuLink" >Personal Information</Link>
            <GrNext fontWeight={700} size={14} />
          </div>
          <p className="menuInfo">
            Provide personal details and let us know how we can reach you.
          </p>
        </div>

        <div className="menuItem">
          <img src={Business} alt="Menu Icon" className="menuIcon" />
          <div className="menuName">
            <Link to="/business-profile" className="menuLink" >Business Profile</Link>
            <GrNext fontWeight={700} size={14} />
          </div>
          <p className="menuInfo">
            Update your services, hours and all business information.
          </p>
        </div>

        <div className="menuItem">
          <img src={Finances} alt="Menu Icon" className="menuIcon" />
          <div className="menuName">
            <Link to="/stylist-finances" className="menuLink" >Finances</Link>
            <GrNext fontWeight={700} size={14} />
          </div>
          <p className="menuInfo">
            View your past, current, and upcoming earnings.
          </p>
        </div>

        <div className="menuItem">
          <img src={Clients} alt="Menu Icon" className="menuIcon" />
          <div className="menuName">
            <Link to="/clients-list" className="menuLink" >Clients</Link>
            <GrNext fontWeight={700} size={14} />
          </div>
          <p className="menuInfo">
            View, manage, and engage with your clientele.
          </p>
        </div>

        <div className="menuItem">
          <IoCalendarClearOutline
            className="menuIcon"
            size={24}
            stroke="#893583"
          />
          <div className="menuName">
            <Link to="/calendar" className="menuLink" >Calendar</Link>
            <GrNext fontWeight={700} size={14} />
          </div>
          <p className="menuInfo">View, manage, and create appointments.</p>
        </div>

        <div className="menuItem">
          <IoCard size={24} fill="#893583"  className="menuIcon"  />
          <div className="menuName">
            <Link to="/payout-info" className="menuLink" >Payout Information</Link>
            <GrNext fontWeight={700} size={14} />
          </div>
          <p className="menuInfo">Add and manage your payout information.</p>
        </div>

        <div className="menuItem">
          <MdOutlineSecurity size={24} fill="#893583"   className="menuIcon" />
          <div className="menuName">
            <Link to="/login-security" className="menuLink" >Login & Security</Link>
            <GrNext fontWeight={700} size={14} />
          </div>
          <p className="menuInfo">
            Update your password and secure your account.
          </p>
        </div>
      </div>

      <BottomNavStylist/>
    </section>
  );
}
