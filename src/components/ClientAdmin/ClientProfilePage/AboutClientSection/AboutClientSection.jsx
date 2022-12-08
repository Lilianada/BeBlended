import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import Kinky from "../../../../assets/KinkyHair.png";
import Coarse from "../../../../assets/CoarseHair.png";
import "./AboutClientSection.scss";

export default function AboutClientSection() {
  return (
    <section className="aboutClient_Section">
      <div>
        <p className="aboutHead">About</p>
      </div> 
        <div className="address">
            <AiFillHome style={{marginRight: ".75rem"}} size={18} />
            <p>Lives in Toronto, Canada</p>
            <FaPen style={{marginLeft: ".75rem"}} />
        </div>

        <div className="hairDetails">
          <div className="aboutHead">Hair Details</div>
          <div className="details">
            <div className="rowSpan">
              <div className="detailCircle">
                <img src={Kinky} alt="Hair Detail" />
              </div>
              <h5>Hair Texture</h5>
              <p>Kinky/Coily</p>
            </div>
 
            <div className="rowSpan">
              <div className="detailCircle">
                <img src={Coarse} alt="Hair Detail" />
              </div>
              <h5>Hair Structure</h5>
              <p>Coarse</p>
            </div>
          </div>
        </div>
    </section>
  );
}
