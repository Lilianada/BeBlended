import React, {useState} from "react";
import './ListingHead.scss';
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo-black.svg";
import {FiMenu} from "react-icons/fi";
import ProfileImage from "../../../assets/ClientProfile.png";
import { FaSearch } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { TbMinusVertical } from "react-icons/tb";
import { GrPrevious } from "react-icons/gr";

export default function ListingHead() {
  const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }
  return (
    <section className="listingHeader">
        <header className="stylistDesktop__Header">
                <img src={Logo} alt="Logo" />
                <div className="searchBox">
                  <div className="inputField">
                    <FaSearch size={18} style={{marginLeft: "1.5rem"}} />
                    <input type="text" name="service-search" className="field" />
                  </div>
                  <TbMinusVertical size={48} strokeWidth={1} />
                  <div className="inputField">
                    <HiLocationMarker size={24} />
                    <input type="text" name="service-search" className="field" />
                  </div>
                </div>
                <div className="navWrap">
                    <button className="headBtn">Switch to Stylist</button>
                    <nav className="navItems">
                    <div className="toggle" onClick={handleToggle}>
                        <FiMenu size={28} fill="#050205" stroke="#050205" style={{marginRight: '1rem', cursor: 'pointer'}} />
                    </div>
                        <Link  to="/" className="profileIcon">
                            <img src={ProfileImage} alt="Profile Icon" />
                        </Link>
                    </nav>

                    <ul className={ `navList ${toggle ? "show" : ""}`}>
                        <li className="navItem"><Link to="/" className="navLink">Profile</Link></li>
                        <li className="navItem"><Link to="/" className="navLink">Bookings</Link></li>
                        <li className="navItem"><Link to="/" className="navLink">Inbox</Link> <p className="alert">(2)</p> </li>
                        <li className="navItem"><Link to="/" className="navLink">Notifications</Link></li>
                        <li className="navItem"><Link to="/" className="navLink">Favourites</Link></li>
                        <hr/>
                        <li className="navItem"><Link to="/" className="navLink">Account</Link></li>
                        <li className="navItem"><Link to="/" className="navLink">Help</Link></li>
                        <li className="navItem"><Link to="/" className="navLink">Logout</Link></li>
                    </ul>
                </div>
            </header>

            <header className="stylistMobile__Header">
              <div className="backBtn">
                <GrPrevious className="angleLeft" size={18} />
              </div>
                <div className="searchBox">
                  <div className="inputField">
                    <FaSearch size={18} style={{marginLeft: "1.5rem"}} />
                    <input type="text" name="service-search" className="field" />
                  </div>
                  <TbMinusVertical size={48} strokeWidth={1} />
                  <div className="inputField">
                    <HiLocationMarker size={24} />
                    <input type="text" name="service-search" className="field" />
                  </div>
                </div>
            </header>
        </section>
  );
}
