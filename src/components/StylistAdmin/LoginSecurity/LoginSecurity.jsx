import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import {
  StylistAdminHeader,
  BottomNavStylist
} from "../../../components";
import './LoginSecurity.scss';

export default function LoginSecurity() {
    const [openModal, setOpenModal] = useState(false);

  return (
    <main className="mainWrapper loginSecurity_page">
      <StylistAdminHeader />

      <div className="wd_80">
        <div className="loginSecurity_head">
          <GrPrevious style={{ marginRight: ".5rem" }} />
          <p>Back</p>
        </div>

        <strong className="loginSecurity_subhead">
          Account
          <GrNext style={{ margin: " 0 .5rem" }} />
          Login & Security
        </strong>

        <h4 className="formHead">Login & Security</h4>
  
        <form action="" className="loginSecurity_form">
          <div className="formWrap">
            <label htmlFor="First-Name" className="inputWrap">
              <p>Current password</p>
              <button className="updateBtn">Update</button>
            </label>
            <input type="password" className="inputField" placeholder="********" required />
            <button className="deactivate">Deactivate Account</button>
          </div>
        </form>
        </div>
        <BottomNavStylist />
    </main>
  );
}
