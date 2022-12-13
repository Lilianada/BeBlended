import React from "react";
import Beblended from "../../../assets/Admin-Icons/Beblended-head.svg";
import './DashboardHomepage.scss';

export default function DashboardMenu() {
  return ( 
   <div className="dashboardMenu">
        <div className="menuHead">
            <img src={Beblended} alt="Beblended Logo" />
            <div className="menuHead_Txt">
                <p><strong>BeBlended</strong></p>
                <p>Customer Service Team</p>
            </div>

        </div>
   </div>
  );
}
