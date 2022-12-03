import React from "react";
import { BsChat } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

export default function FavouriteCards({ favouritesImage, favouritesName}) {
  return (
    <div className="favouriteCard">
        <img src={favouritesImage} alt="Client List" className="favouriteImg" />
        <p className="favouriteName"> {favouritesName} </p>
        <button className="chat">
            Book an Appointment
        </button>
    </div>
  );
}
