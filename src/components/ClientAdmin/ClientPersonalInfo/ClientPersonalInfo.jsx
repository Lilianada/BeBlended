import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import {
  StylistAdminHeader,
  BottomNavStylist,
} from "../../../components";
import "../../StylistAdmin/PersonalnfoPage/PersonalInfo.scss";

export default function ClientPersonalInfo() {
  return (
    <main className="mainWrapper personalInfo_page">
      <StylistAdminHeader />

      <div className="wd_80">
        <div className="personalInfo_head">
          <GrPrevious style={{ marginRight: ".5rem" }} />
          <p>Back</p>
        </div>

        <strong className="personalInfo_subhead">
          Account
          <GrNext style={{ margin: " 0 .5rem" }} />
          Personal Information
        </strong>

        <h4 className="formHead">Personal Information</h4>

        <form action="" className="personalInfo_form">
          <div className="formWrap">
            <label htmlFor="First-Name" className="inputWrap">
              <p>First name*</p>
              <button className="editBtn">Edit</button>
            </label>
            <input type="text" className="inputField" />
          </div>

          <div className="formWrap">
            <label htmlFor="Last-Name" className="inputWrap">
              <p>Last name*</p>
              <button className="editBtn">Edit</button>
            </label>
            <input type="text" className="inputField" />
          </div>

          <div className="formWrap">
            <label htmlFor="Email" className="inputWrap">
              <p>Email address*</p>
              <button className="editBtn">Edit</button>
            </label>
            <input type="text" className="inputField" />
          </div>

          <div className="formWrap">
            <label htmlFor="Government-id" className="inputWrap">
              <p>Address*</p>
              <div className="updateBtn">Edit</div>
            </label>
            <input
              type="text"
              className="inputField"
              placeholder="Not Provided"
            />
          </div>
          <button className="saveBtn">Save Changes</button>
        </form>
      </div>

      <BottomNavStylist />
    </main>
  );
}
