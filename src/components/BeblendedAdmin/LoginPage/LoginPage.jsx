import React from "react";
import Logo from "../../../assets/logo-black.svg";
import TopBlob from "../../../assets/TopBlob2.svg";
import AdminVector from "../../../assets/Admin-Icons/AdminVector.svg";
import Beblended from "../../../assets/Admin-Icons/Beblended-head.svg";
import "/LoginPage.scss";

export default function LoginPage() {
  return (
    <main className="mainWrapper beblendedLogin">
      <img src={TopBlob} alt="Blob" />
      <header className="beblendedHeader">
        <img src={Logo} alt="Logo" />
      </header>
      <div className="formhead">
        <img src={Beblended} alt="Beblended head" />
        <h5 className="headText">
          BeBlended Team <br /> Admin
        </h5>
      </div>
      <form action="" className="loginForm">
        <div className="formWrap">
          <label htmlFor="Email" className="formLabel">
            Email address*
          </label>
          <input type="email" className="formInput" required />
        </div>
        <div className="formWrap">
          <label htmlFor="Email" className="formLabel">
            Password*
          </label>
          <input
            type="password"
            className="formInput"
            placeholder="xxxxxxxxx"
            required
          />
          <p>Show</p>
        </div>
        <button className="submitBtn">Login</button>
      </form>
      <img src={AdminVector} alt="Blob" />
    </main>
  );
}
