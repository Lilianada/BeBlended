import React from "react";
import Logo from "../../../assets/logo-black.svg";
import TopBlob from "../../../assets/TopBlob2.svg";
import AdminVector from "../../../assets/AdminVector.svg";
import Beblended from "../../../assets/Admin-Icons/Beblended-head.svg";
import "./BeblendedLogin.scss";

export default function BeblendedLogin() {
  const [passwordShown, setPasswordShown] = React.useState(false);
  const isShow = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
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
            type={passwordShown ? "text" : "password"}
            className="formInput"
            placeholder="xxxxxxxxx"
            required
          />
          <button className="showBtn" onClick={isShow}> Show</button>
        </div>
        <button className="submitBtn">Login</button>
      </form>
      <img src={AdminVector} alt="Blob" />
    </main>
  );
}
