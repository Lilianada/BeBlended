import React from "react";
import './OnboardingStylist.scss';
import Logo from '../../../assets/logo-black.svg';
import { FaAngleLeft } from 'react-icons/fa';
import Dryer from '../../../assets/BlowDryer.svg'
import BlobMB from '../../../assets/mobileBlob.svg';
import Blob from '../../../assets/StylistVector.svg';
import BlobPurpleMB from '../../../assets/VectorPurpleMb.svg';
import BlobPurple from '../../../assets/StylistVectorPurple.svg';
// import { Link } from "react-router-dom";


function OnboardingStylistIntro() {
    return (
      <section className="onboardingStylist__Wrap">
        <header className="onboardingStylist__Head">
            <button className="rowBack">
                <FaAngleLeft className="angleLeft" size={24}/>
                <p>Back</p>
            </button>
            <div className="welcomeLogo">
                <img src={Logo} alt="Logo" />
            </div>
        </header>
        <img src={BlobPurpleMB} alt="Vector" className="mobileTopVector"/>
        <img src={Blob} alt="Vector" className="desktopTopVector"/>

        <div className="textWrap">
            <div className="texts">
                <h4 className="welcomeMsg">Nice to meet you <span>Lola Adeyemi.</span></h4>
                <p className="subText">Let's get to know more about your business!</p>
            </div>
          {/* <Link to='/Step-One'> */}
            <img src={Dryer} alt="Hair Dryer" className="welcomeImage"/>
          {/* </Link> */}
        </div>
        
        <footer>
          <img src={BlobMB} alt="Blob" className="mobileBottomVector" />
          <img src={BlobPurple} alt="Blob" className="desktopBottomVector" />
        </footer>
      </section>
    );
}

export default OnboardingStylistIntro;
