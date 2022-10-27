import React from "react";
import './LicenseQtn.scss';
import Logo from "../../../../../assets/logo-black.svg";
import { FaAngleLeft } from "react-icons/fa";
import BlobMB from "../../../../../assets/mobileBlob.svg";
import Blob from "../../../../../assets/StylistVector.svg";
import BlobPurpleMB from "../../../../../assets/VectorPurpleMb.svg";
import BlobPurple from "../../../../../assets/StylistVectorPurple.svg";

function LicenseQtn() {
  return (
    <section className="licenseQtn__Wrap">
        <header className="licenseQtn_Head">
            <button className="rowBack">
                <FaAngleLeft className="angleLeft" size={24}/>
                <p>Back</p>
            </button>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
        </header>
        <img src={BlobPurpleMB} alt="Vector" className="mobileTopVector" />
        <img src={Blob} alt="Vector" className="desktopTopVector" />
            
        <div className="questionWrap">
            <div className="question">
                <h4>Are you a licensed hairstylist?</h4>
            </div>
            <form action="" className="options">
                <div className="option">
                    <p className="optionText">Yes</p>
                </div> 
                <div className="option">
                    <p className="optionText">No</p>
                </div> 
            </form>
            <p className="subText">
                Don’t have a license? No worries, you don’t need a license to be a part of BeBlended!
            </p>
        </div>

        <footer>
          <img src={BlobMB} alt="Blob" className="mobileBottomVector" />
          <img src={BlobPurple} alt="Blob" className="desktopBottomVector" />
        </footer>
    </section>
  );
}

export default LicenseQtn;


    