import React, { useState } from "react";
import "./Placeholders.scss";
import Logo from "../../../assets/logo-black.svg";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
    //header
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <div className="headers">
      <header className="stylistDesktop__Header">
        <img src={Logo} alt="Logo" />
        <div className="navWrap">
          <button className="headBtn">Switch to Client</button>
          <nav className="navItems">
            <div className="toggle" onClick={handleToggle}>
              <FiMenu className="FiMenu" />
            </div>
            <Link to="/" className="profileIcon">
              {/* <img src={ProfileImage} alt="Profile Icon" /> */}
            </Link>
          </nav>
          <ul className={`navList ${toggle ? "show" : ""}`}>
            <li className="navItem">
              <Link to="/" className="navLink">
                Profile
              </Link>
            </li>
            <li className="navItem">
              <Link to="/" className="navLink">
                Bookings
              </Link>
            </li>
            <li className="navItem">
              <Link to="/" className="navLink">
                Inbox
              </Link>{" "}
              <p className="alert">(2)</p>{" "}
            </li>
            <li className="navItem">
              <Link to="/" className="navLink">
                Notifications
              </Link>
            </li>
            <li className="navItem">
              <Link to="/" className="navLink">
                Favourites
              </Link>
            </li>
            <hr />
            <li className="navItem">
              <Link to="/" className="navLink">
                Account
              </Link>
            </li>
            <li className="navItem">
              <Link to="/" className="navLink">
                Help
              </Link>
            </li>
            <li className="navItem">
              <Link to="/" className="navLink">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <header className="stylistMobile__Header">
        <img src={Logo} alt="Logo" />
      </header>
    </div>
  );
}

export default Header;
