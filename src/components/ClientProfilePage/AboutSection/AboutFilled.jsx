import React from "react";
import "./AboutFilled.scss";
import { TiLocation } from "react-icons/ti";
import { AiFillMessage, AiOutlineFileProtect } from "react-icons/ai";
import { RiShieldCheckFill } from "react-icons/ri";

function AboutFilled() {
  return (
    <div className="aboutSection">
      <div className="aboutFilled_Left">
        <div className="aboutFilled_Head">
          <h5 className="name">About</h5>
        </div>
        <div className="aboutTextBox">
          <p>
            Welcome to Braids by Becky, located in the heart of Toronto,
            Ontario, Canada. I’m an experienced hairdresser specialising in
            knotless braids, box braids, braided ponytails, and crochet. I look
            forward to meeting you!
          </p>
        </div>
      </div>
      <div className="aboutFilled_Right">
        <div className="listItem">
          <TiLocation className="TiLocation" />
          <p>City, Country</p>
        </div>

        {/* Business Hour Modal */}
        <div className="listItem">
          <AiFillMessage className="AiFillMessage" />
          <p>Business hours</p>
        </div>

        {/* Rules and cancellation policy */}
        <div className="listItem">
          <AiOutlineFileProtect className="AiOutlineFileProtect" />
          <p>Rules and cancellation policy</p>
        </div>
        <div className="listItem">
          <RiShieldCheckFill className="RiShieldCheckFill" />
          <p>Licensed Hairstylist</p>
        </div>
      </div>
    </div>
  );
}

export default AboutFilled;
