import React, { useState } from "react";
import "./ClientHeader.scss";
import Logo from "../../../assets/BeBlendedLogo.svg"; 
import ProfileImage from "../../../assets/profileIcon.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

function ClientHeader () {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="headers">
      <header className="clientDesktop__Header">
        <img src={Logo} alt="Logo" />
        <div className="navWrap">
          <button className="headBtn">Join as a Stylist</button>
          <nav className="navItems">
            <div className="toggle" onClick={handleToggle}>
              <FiMenu
                size={28}
                fill="white"
                stroke="white"
                style={{ marginRight: "1rem", cursor: 'pointer' }}
              />
            </div>
            <a href="/" className="profileIcon">
              <img src={ProfileImage} alt="Profile Icon" />
            </a>
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

      <header className="clientMobile__Header">
        <img src={Logo} alt="Logo" />
      </header>
    </div>
  );
}

export default ClientHeader;
