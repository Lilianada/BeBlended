import React from "react";
import { GrPrevious } from "react-icons/gr";
import { StylistAdminHeader } from "../../../components";

export default function Personalnfo() {
  return (
    <main className="mainWrapper">
        <StylistAdminHeader/>

        <div className="personalInfo_head">
            <GrPrevious/>
            Back
        </div>
    </main>
  );
}
