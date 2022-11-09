import React from "react";
import { IoIosPricetags, IoMdTime }from 'react-icons/io';
import { IoLocationSharp }from 'react-icons/io5';
import { BottomNavClient, BottomNavStylist } from "../../components";
import ListingHead from "./ListingHead/ListingHead";
import Map from '../../assets/Map.png';
import './ListingPage.scss';
import Listings from "./Listings";

export default function ListingPage () {
  return (
    <section className="mainWrapper">
      <ListingHead/>
      <div className="listingTitle">
        <h4 className="title">32 Search Results in Toronto</h4>
        <div className="titleButtons">
          <button className="btnPrimary">
            <IoIosPricetags size={18} className='icon' />
            Price
          </button>
          <button className="btnPrimary">
            <IoMdTime size={18} className='icon' />
            Available Now
          </button>
          <button className="btnPrimary">
            <IoLocationSharp size={18} className='icon' />
            Distance
          </button>
        </div>
      </div>
      <div className="listingFlex">
        <Listings/>
        <div className="map">
          {/* Fix in the map here */}
        </div>
      </div>
      <BottomNavClient/>
      <BottomNavStylist/>
    </section>
  );
}
