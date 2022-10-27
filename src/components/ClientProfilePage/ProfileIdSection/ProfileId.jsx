import React from "react";
import "./ProfileId.scss";
import ProfilePicture from "../../../assets/BossLady.png";
import { BsStarFill } from "react-icons/bs";

export default function ProfileId() {
  return (
    <section className="profileId_Wrap">
      <div className="stylistName">
        <img src={ProfilePicture} alt="" className="profilePicture" />
        <div>
          <h5 className="name">Braids by Becky</h5>
          <div className="rating">
            <BsStarFill className="BsStarFill" />
            <h6 className="rate">0.0</h6>
            <span className="review">( 0 reviews )</span>
          </div>
        </div>
      </div>
    </section>
  );
}
