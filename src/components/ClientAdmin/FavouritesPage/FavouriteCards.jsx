import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

export default function FavouriteCards({ favouritesImage, favouritesName}) {
  return (
    <div className="favouriteCard">
      <div className="alignedLeft">
        <img src={favouritesImage} alt="Client List" className="favouriteImg" />
        <BsHeartFill className="bsHeart" size={24} />
      </div>
        <p className="favouriteName"> {favouritesName} </p>
        <button className="bookingBtn">
            Book an Appointment
        </button>
    </div>
  );
}
