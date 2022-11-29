import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { GrPrevious } from "react-icons/gr";
import { StylistAdminHeader } from "../../../../components";
import BeblendedHead from "../../../../assets/Admin-Icons/Beblended-head.svg";
import Kinky from "../../../../assets/KinkyHair.png";
import Coarse from "../../../../assets/CoarseHair.png";
import "./AdminClientProfile.scss";
import { BsChat } from "react-icons/bs";

export default function AdminClientProfile() {
  return (
    <main className="mainWrapper adminClient_Profile">
      <StylistAdminHeader />

      <div className="wd_80">
        <div className="adminClient_head">
          <button className="previousButton">
            <GrPrevious style={{ marginRight: ".5rem" }} />
            <p>Back</p>
          </button>
        </div>
        <div className="adminClient_subhead">
          <div className="subHead">
            <h4 className="formHead">
              My Clients <AiOutlineMinus style={{ margin: "0 .75rem" }} /> Melly
              Thomas
            </h4>
          </div>
        </div>
        <hr />
      </div>

      <div className="clientProfile_Grid">
        <div className="clientDetails">
          <img
            src={BeblendedHead}
            alt="Client Profile Image"
            className="clientImg"
          />
          <p className="clientName"> Melly Thomas </p>
          <button className="chat">
            <BsChat />
            Chat with Melly
          </button>
          <button className="add">Add New Appointment</button>
          <div className="hairTexture">
            <div className="texture">
              <div className="textureCircle">
                <img src={Kinky} alt="Hair Texture" />
              </div>
              <h5 className="hairName"> Hair Texture </h5>
              <p className="textureName"> Kinky/Coily </p>
            </div>
            <div className="texture">
              <div className="textureCircle">
                <img src={Coarse} alt="Hair Structure" />
              </div>
              <h5 className="hairName"> Hair Structure </h5>
              <p className="textureName"> Coarse </p>
            </div>
          </div>
        </div>
        <div className="clientAppointments">
            <div className="flexHead">
                <div className="flexItem">
                    <h3>6</h3>
                    <p>All Bookings</p>
                </div>
                <div className="flexItem">
                    <h3>3</h3>
                    <p>Completed</p>
                </div>
                <div className="flexItem">
                    <h3>2 Cancelled</h3>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
