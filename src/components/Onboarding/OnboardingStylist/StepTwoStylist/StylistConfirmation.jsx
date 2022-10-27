import React from "react";
import Star from "../../../../assets/StarVector.svg"
import '../OnboardingStylist.scss';
import Logo from '../../../../assets/logo-black.svg';
import { FaAngleLeft } from 'react-icons/fa';
import BlobMB from '../../../../assets/mobileBlob.svg';
import Blob from '../../../../assets/StylistVector.svg';
import BlobPurpleMB from '../../../../assets/VectorPurpleMb.svg';
import BlobPurple from '../../../../assets/StylistVectorPurple.svg';


export function StylistConfirmationAdvanced() {
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
        <img src={Star} alt="Hair Dryer" className="welcomeImage"/>
            <div className="texts">
                <p className="staredText">
                    Advanced huh?
                    <br/>Love to hear it. 
                </p>
            </div>
        </div>
        <footer>
          <img src={BlobMB} alt="Blob" className="mobileBottomVector" />
          <img src={BlobPurple} alt="Blob" className="desktopBottomVector" />
        </footer>
      </section>
  );
}



export function StylistConfirmationEstablished() {
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
        <img src={Star} alt="Hair Dryer" className="welcomeImage"/>
            <div className="texts">
                <p className="staredText">
                    A whole established stylist??
                    <br/>Love to hear it. 
                </p>
            </div>
        </div>
        <footer>
          <img src={BlobMB} alt="Blob" className="mobileBottomVector" />
          <img src={BlobPurple} alt="Blob" className="desktopBottomVector" />
        </footer>
      </section>
  );
}



export function StylistConfirmationExceptional() {
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
        <img src={Star} alt="Hair Dryer" className="welcomeImage"/>
            <div className="texts">
                <p className="staredText">Truly exceptional indeed.
                    <br/>Happy to have you on board!
                </p>
            </div>
        </div>
        <footer>
          <img src={BlobMB} alt="Blob" className="mobileBottomVector" />
          <img src={BlobPurple} alt="Blob" className="desktopBottomVector" />
        </footer>
      </section>
  );
}



export function StylistConfirmationMajor() {
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
        <img src={Star} alt="Hair Dryer" className="welcomeImage"/>
            <div className="texts">
                <p className="staredText">Truly exceptional indeed.
                    <br/>Happy to have you on board!
                </p>
            </div>
        </div>
        <footer>
          <img src={BlobMB} alt="Blob" className="mobileBottomVector" />
          <img src={BlobPurple} alt="Blob" className="desktopBottomVector" />
        </footer>
      </section>
  );
}