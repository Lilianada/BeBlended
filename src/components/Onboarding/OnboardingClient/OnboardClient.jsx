import React, {useState} from "react";
import './OnboardingClient.scss';
import Logo from '../../../assets/logo-black.svg';
import NaturallyHair from '../../../assets/NaturalHairXL.svg';
import Crown from '../../../assets/Crown.png';

import Curly from '../../../assets/CurlyHair.png';
import Wavy from '../../../assets/WavyHair.png';
import Straight from '../../../assets/StraightHair.png';
import Kinky from '../../../assets/KinkyHair.png';

import Fine from '../../../assets/FineHair.png';
import Medium from '../../../assets/MediumHair.png';
import Coarse from '../../../assets/CoarseHair.png';

import Wigs from '../../../assets/Wigs.png';
import NaturalHair from '../../../assets/NaturalHair.png';
import Braids from '../../../assets/Braids.png';
import Dreadlocks from '../../../assets/Dreadlocks.png';

import BottomNavClient from "../../Sections/BottomNav/BottomNavClient";
import ProfileImage from "../../../assets/profileIcon.png";
import BigComb from "../../../assets/BigComb.svg";
import RightBlob from "../../../assets/RightBlob.svg";

import Blob from '../../../assets/mobileBlob.svg';
import BlobDesk from '../../../assets/clientButtDesk.svg';
import BlobPurple from '../../../assets/clientTopDesk.svg';
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaAngleLeft } from "react-icons/fa";

export function OnboardClient() {
  return (
      <section className="onboardingWrap">
        <header className="onboardHead">
          <div></div>
          <div className="welcomeLogo">
            <img src={Logo} alt="Logo" />
          </div>
        </header>
        <img src={BlobPurple} alt="Vector" className="topBlob" />
        <div className="questionWrap">
          <div className="question">
            <h4 className="welcomeMsg">Nice to meet you <span>Lola Adeyemi.</span></h4>
          </div>
          <img src={Crown} alt="Crown" className="crownImage"/>
          <Link to='/step-One'>
            <img src={NaturallyHair} alt="Natural Hair" className="welcomeImage"/>
          </Link>
        </div>
        <footer>
          <img src={Blob} alt="Blob" className="mobileBlob" />
          <img src={BlobDesk} alt="Blob" className="desktopBlob" />
        </footer>
      </section>
    );
}


export function StepOneClient() {
  const handleClick = (e) => {
    e.preventDefault();
  }
  return (
    <section className="onboardingWrap">
      <header className="onboardHead">
        <button className="rowBack">
          <FaAngleLeft className="angleLeft" size={24}/>
          <p>Back</p>
        </button>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </header>
      <img src={BlobPurple} alt="Vector" className="topBlob" />
      <div className="questionWrap">
        <div className="question">
          <h4>How would you best describe your hair texture?</h4>
        </div>
        <form action="" className="options">
            <div className="option">
              <div className="imgOption">
                <img src={Straight} alt="Hair Texture"/>  
              </div>
              <p className="optionText">Straight</p>
            </div> 
            <div className="option">
              <div className="imgOption">
                <img src={Wavy} alt="Hair Texture"/>
              </div>
              <p className="optionText">Wavy</p>
            </div> 
            <div className="option">
              <div className="imgOption">
                <img src={Curly} alt="Hair Texture"/>
              </div>
              <p className="optionText">Curly</p>
            </div> 
            <div className="option">
              <div className="imgOption">
                <img src={Kinky} alt="Hair Texture"/>
              </div>
              <p className="optionText">Kinky</p>
            </div> 
        </form>
      </div>
      <footer>
        <Link to='/step-Two'>
          <button className="next">Next</button> 
        </Link>
        <img src={Blob} alt="Blob" className="mobileBlob" />
        <img src={BlobDesk} alt="Blob" className="desktopBlob" />
      </footer>
    </section>
  );
}


export function StepTwoClient() {
  return (
    <section className="onboardingWrap">
        <header className="onboardHead">
          <button className="rowBack">
            <FaAngleLeft className="angleLeft" size={24}/>
            <p>Back</p>
          </button>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
        </header>
        <img src={BlobPurple} alt="Vector" className="topBlob" />
        <div className="questionWrap">
            <div className="question">
              <h4>How would you best describe your hair structure?</h4>
            </div>
            <form action="" className="options">
                <div className="option">
                    <div className="imgOption">
                        <img src={Fine} alt='Hair Structure' />
                    </div>
                    <p className="optionText">Fine</p>
                </div> 
                <div className="option">
                    <div className="imgOption">
                        <img src={Medium} alt='Hair Structure' />
                    </div>
                    <p className="optionText">Medium</p>
                </div> 
                <div className="option">
                    <div className="imgOption">
                        <img src={Coarse} alt='Hair Structure' />
                    </div>
                    <p className="optionText">Coarse</p>
                </div> 
            </form>
        </div>
        <footer>
            <Link to='/step-Three'>
            <button className="next">Next</button> 
            </Link>
            <img src={Blob} alt="Blob" className="mobileBlob" />
          <img src={BlobDesk} alt="Blob" className="desktopBlob" />
        </footer>
    </section>
    );
}


export function StepThreeClient() {
  return (
      <section className="onboardingWrap">
        <header className="onboardHead">
          <button className="rowBack">
            <FaAngleLeft className="angleLeft" size={24}/>
            <p>Back</p>
          </button>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
        </header>
        <img src={BlobPurple} alt="Vector" className="topBlob" />
        <div className="questionWrap">
            <div className="question">
                <h4>How frequently do you get your hair done?</h4>
            </div>
            <form action="" className="optionsColumn">
                <div className="option">
                    <div className="optionBox">1 - 2 times a month</div>
                </div> 
                <div className="option">
                    <div className="optionBox">Every 2 months</div>
                </div> 
                <div className="option">
                    <div className="optionBox">Every 3 months</div>
                </div> 
                <div className="option">
                    <div className="optionBox">1-2 times a year</div>
                </div> 
            </form>
        </div>
        <footer>
            <Link to="/step-Four">
              <button className="next">Next</button> 
            </Link>
            <img src={Blob} alt="Blob" className="mobileBlob" />
          <img src={BlobDesk} alt="Blob" className="desktopBlob" />
        </footer>
      </section>
    );
}

export function StepFourClient() {
  return (
      <section className="onboardingWrap">
        <header className="onboardHead">
          <button className="rowBack">
            <FaAngleLeft className="angleLeft" size={24}/>
            <p>Back</p>
          </button>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
        </header>
          <img src={BlobPurple} alt="Blob" className="topBlob" />
        <div className="questionWrap">
          <div className="question">
            <h4>I love wearing ______!</h4>
          </div>
          <form action="" className="options">
            <div className="option">
              <div className="imgOption noRadius">
                <img src={Wigs} alt="Hair Type" />
              </div>
              <p className="optionText">Wigs/Weave</p>
            </div> 
            <div className="option">
              <div className="imgOption noRadius">
                <img src={Braids} alt="Hair Type" />
              </div>
              <p className="optionText">Braids</p>
            </div> 
            <div className="option">
              <div className="imgOption noRadius">
                <img src={NaturalHair} alt="Hair Type" />
              </div>
              <p className="optionText">Natural Hair</p>
            </div> 
            <div className="option">
              <div className="imgOption noRadius">
                <img src={Dreadlocks} alt="Hair Type" />
              </div>
              <p className="optionText">Dreadlocks</p>
            </div> 
          </form>
        </div>
        <footer>
          <Link to='/welcome'>
            <button className="next">Next</button> 
          </Link>
          <img src={Blob} alt="Blob" className="mobileBlob" />
          <img src={BlobDesk} alt="Blob" className="desktopBlob" />
        </footer>
      </section>
    );
}


export function StepFiveClient() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <section className="onboardingWrap">
      <div className="headers">
        <header className="clientDesktop__Header">
          <img src={Logo} alt="Logo" />
          <div className="navWrap">
            <nav className="navItems">
              <div className="toggle" onClick={handleToggle}>
                <FiMenu
                  size={28}
                  fill="black"
                  stroke="black"
                  style={{ marginRight: "1rem" }}
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

      <div className="redHeight questionWrap">
        <img src={BigComb} alt="Comb" />
        <div className="question">
          <h4 className="onboardMsg">Yay, you’re all set up!</h4>
          <p className="subText">Start exploring our hair services.</p>
          <Link to="/logged-in-client">
            <button className="submit">Explore Beblended</button>
          </Link>
        </div>
      </div>

      <footer>
        <img src={Blob} alt="Blob" className="mobileBlob_Right"/>
        <img src={RightBlob} alt="Blob" className="rightBlob" />
        <BottomNavClient />
      </footer>
    </section>
  );
}
