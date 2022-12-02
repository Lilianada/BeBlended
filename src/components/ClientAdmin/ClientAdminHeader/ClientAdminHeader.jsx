import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../../assets/logo-black.svg";
import {FiMenu} from "react-icons/fi";
import ProfileImage from "../../../assets/ClientProfile.png";
import './ClientAdminHeader.scss';

export default function ClientAdminHeader() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }
  return ( 
    <div className="clientAdminHeader">
      <header className="clientDesktop__Header">
        <img src={Logo} alt="Logo" />
        <div className="navWrap">
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
    </div>
    )    
}
