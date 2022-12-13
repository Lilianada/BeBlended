import React from "react";
import Logo from "../../../assets/logo-black.svg";
import TopBlob from "../../../assets/TopBlob2.svg";
import AdminVector from "../../../assets/AdminVector.svg";
import Beblended from "../../../assets/Admin-Icons/Beblended-head.svg";
import "./BeblendedLogin.scss";

export default function BeblendedLogin() {
  const [show, setShow] = React.useState(false);
  const isShow = () => {
    setShow(!show);
  }

  return (
    <main className="beblendedLogin">
      <header className="beblendedHeader">
        <img src={Logo} alt="Logo"/>
      </header>
      <img src={TopBlob} alt="Blob"  className="topBlob" />
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
          <button className="showBtn">Show</button>
        </div>
        <button className="submitBtn">Login</button>
      </form>
      <img src={AdminVector} alt="Blob" />
    </main>
  );
}
