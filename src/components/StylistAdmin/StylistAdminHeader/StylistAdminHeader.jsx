import React from "react";

export default function StylistAdminHeader() {
  return (git 
    <div className="stylistAdminHeader">
      <header className="stylistDesktop__Header">
        <img src={Logo} alt="Logo" />
        <div className="navWrap">
          <button className="headBtn">Switch to Client</button>
          <nav className="navItems">
            <div className="toggle" onClick={handleToggle}>
              <FiMenu
                size={28}
                fill="#050205"
                stroke="#050205"
                style={{ marginRight: "1rem", cursor: "pointer" }}
              />
            </div>
            <Link to="/" className="profileIcon">
              <img src={ProfileImage} alt="Profile Icon" />
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
        <Link to="/stylist-booking-page" className="backBtn">
          <GrPrevious className="angleLeft" size={18} />
          <p>Back</p>
        </Link>
      </header>
    </div>
  );
}
