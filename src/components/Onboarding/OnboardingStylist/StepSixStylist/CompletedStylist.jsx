import React from "react";
import './CompletedStylist.scss';
import { Link } from "react-router-dom";
import Logo from '../../../../assets/logo-black.svg';
import { FaAngleLeft } from 'react-icons/fa';
import BlobMB from '../../../../assets/mobileBlob.svg';
import Blob from '../../../../assets/StylistVector.svg';
import BlobPurpleMB from '../../../../assets/VectorPurpleMb.svg';
import BlobPurple from '../../../../assets/StylistVectorPurple.svg';
import BigComb from '../../../../assets/BigComb.svg';

export default function CompletedStylist() {
  return (
    <section className="completedWrap">
      <header className="completedWrap__Head">
        <button className="rowBack">
          <FaAngleLeft className="angleLeft" size={24} />
          <p>Back</p>
        </button>
        <div className="welcomeLogo">
          <img src={Logo} alt="Logo" />
        </div>
      </header>
      <img src={BlobPurpleMB} alt="Vector" className="mobileTopVector" />
      <img src={Blob} alt="Vector" className="desktopTopVector" />

      <div className="textWrap">
        <img src={BigComb} alt="Comb" />
        <div className="texts">
          <h4 className="welcomeMsg">Now, let’s finish up your profile!</h4>
          <Link to="/logged-in-stylist">
            <button className="submit">View profile</button>
          </Link>
        </div>
      </div>

      <footer>
        <img src={BlobMB} alt="Blob" className="mobileBottomVector" />
        <img src={BlobPurple} alt="Blob" className="desktopBottomVector" />
      </footer>
    </section>
  );
}
