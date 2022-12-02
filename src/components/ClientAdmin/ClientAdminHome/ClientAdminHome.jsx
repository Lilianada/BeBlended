import React from "react";
import Personal from "../../../assets/Admin-Icons/Personal-icon.svg";
import Business from "../../../assets/Admin-Icons/Business-icon.svg";
import Finances from "../../../assets/Admin-Icons/Finances-icon.svg";
import Clients from "../../../assets/Admin-Icons/Clients-icon.svg";
import { GrNext } from "react-icons/gr";
import { IoCalendarClearOutline, IoCard } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import {BottomNavClient, ClientAdminHeader} from "../../../components";
import { Link } from "react-router-dom";

export default function ClientAdminHome() {
  return (
   <main className="mainWrapper clientAdmin_Home">
        <ClientAdminHeader/>
        <div className="adminHead_Text">
            <h5>Your Account</h5>
            <p className="stylistName">
            <strong>Lola Adeyemi</strong> - View you profile 
            </p> 
      </div>
        <BottomNavClient />
   </main>
  );
}
