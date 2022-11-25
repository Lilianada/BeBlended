import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { StylistAdminHeader } from "../..";
import './PersonalInfo.scss';

export default function Personalnfo() {
  return (
    <main className="mainWrapper personalInfo_page">
        <StylistAdminHeader/>

        <div className="personalInfo_head">
            <GrPrevious style={{marginRight: ".5rem"}}/>
            <p>Back</p>
        </div>

        <div>
          <strong className="personalInfo_subhead">
            Account
            <GrNext style={{margin:" 0 .5rem"}}/>
            Personal Information
          </strong>
        </div>

        <form action="" className="personalInfo_form">
          <label htmlFor="form-head" className="formHead">Personal Information</label>
        </form>
    </main>
  );
}
