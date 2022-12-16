import React from "react";
import { GrPrevious } from "react-icons/gr";
import './HairStylistDashboardProfile.scss';

export default function HairStylistDashboardProfile() {
  return (
    <main className="hairStylistDashboardProfile">
        <div className="profileContainer">
            <div className="profileContainer_head">
            <GrPrevious
                style={{ marginRight: ".35rem" }}
                fill="#707070"
                stroke-opacity={0.5}
            />{" "}
            <p>Back</p>
            </div>
        </div>
    </main>
  );
}
