import React from "react";
import './StylistAdminHome.scss';
import StylistAdminHeader from "../StylistAdminHeader/StylistAdminHeader";

export default function StylistAdminHome() {
    
  return (
    <section className="mainWrapper stylistAdmin_Home">
       <StylistAdminHeader/>

        <div className="adminHead_Text">
            <h5>Your Account</h5>
            <p className="stylistName">
               <strong>Braids by Becky</strong> - Becky Jones  </p>
        </div>

        <div className="adminMenu_items">
          
        </div>
    </section>
  );
}
