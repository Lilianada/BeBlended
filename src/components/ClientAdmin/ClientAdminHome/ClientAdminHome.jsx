import React from "react";
import Personal from "../../../assets/Admin-Icons/Personal-icon.svg";
import { GrNext } from "react-icons/gr";
import { IoCalendarClearOutline, IoCard } from "react-icons/io5";
import { MdFavorite, MdOutlineSecurity } from "react-icons/md";
import { BottomNavClient, ClientAdminHeader } from "../../../components";
import { Link } from "react-router-dom";
import './ClientAdminHome.scss';

export default function ClientAdminHome() {
  return (
    <main className="mainWrapper clientAdmin_Home">
      <ClientAdminHeader />
      <div className="adminHead_Text">
        <h5>Your Account</h5>
        <p className="stylistName">
          Lola Adeyemi - <strong><u> View your profile </u> </strong> 
        </p>
      </div>

      <div className="adminMenu_items">
        <div className="menuItem">
          <img src={Personal} alt="Menu Icon" className="menuIcon" />
          <div className="menuName">
            <Link to="/personal-information" className="menuLink">
              Personal Information
            </Link>
            <GrNext fontWeight={700} size={14} />
          </div>
          <p className="menuInfo">
            Provide personal details and let us know how we can reach you.
          </p>
        </div>

        <div className="menuItem">
          <IoCalendarClearOutline stroke="#893583" className="menuIcon" />
          <div className="menuName">
            <Link to="/business-profile" className="menuLink">
              Bookings
            </Link>
            <GrNext fontWeight={700} size={14} />
          </div>
          <p className="menuInfo">
            View and manage your upcoming appointments.
          </p>
        </div>

        <div className="menuItem">
          <IoCard size={24} fill="#893583" className="menuIcon" />
          <div className="menuName">
            <Link to="/finances" className="menuLink">
              Payment Information
            </Link>
            <GrNext fontWeight={700} size={14} />
          </div>
          <p className="menuInfo">Add and manage your payment information.</p>
        </div>

        <div className="menuItem">
          <MdFavorite size={24} fill="#893583" className="menuIcon" />
          <div className="menuName">
            <Link to="/clinets" className="menuLink">
              Favourites
            </Link>
            <GrNext fontWeight={700} size={14} />
          </div>
          <p className="menuInfo">
            View a selection of your favourite hairstylists.
          </p>
        </div>

        <div className="menuItem">
          <MdOutlineSecurity size={24} fill="#893583" className="menuIcon" />
          <div className="menuName">
            <Link to="/login-security" className="menuLink">
              Login & Security
            </Link>
            <GrNext fontWeight={700} size={14} />
          </div>
          <p className="menuInfo">Update your password and secure your account.</p>
        </div>

        <div className="logoutItem">
          <div className="menuName">
            <Link to="/logout" className="menuLink">
              Logout
            </Link>
          </div>
        </div>
      </div>

      <BottomNavClient />
    </main>
  );
}
