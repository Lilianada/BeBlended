import React from "react";
import { BsChat } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import "./AdminClientList.scss";

export default function AdminClientCards({ clientImage, clientName }) {
  return (
    <div className="clientCard">
      <img src={clientImage} alt="Client List" className="clientImg" />
      <p className="clientName"> {clientName} </p>
      <div className="cardButtons">
        <button className="profile">
          <IoPersonOutline />
          Profile
        </button>
        <button className="chat">
          <BsChat />
          Chat
        </button>
      </div>
    </div>
  );
}
