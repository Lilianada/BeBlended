import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import "./AdminClientList.scss";

export default function AdminClientCards({ clientImage, clientName }) {
  return (
    <div className="adminClient_body">
      <div className="clientCards">
        <div className="clientCard">
          <img src={clientImage} alt="Client List" className="clientImg" />
          <p className="clientName"> {clientName} </p>
          <div className="cardButtons">
            <button className="profile">
              <IoPersonOutline />
              Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
