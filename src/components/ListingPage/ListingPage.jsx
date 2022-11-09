import React, { useState } from "react";
import { IoIosPricetags, IoMdTime }from 'react-icons/io';
import { IoLocationSharp }from 'react-icons/io5';
import { BottomNavClient, Footer } from "../../components";
import ListingHead from "./ListingHead/ListingHead";
import './ListingPage.scss';
import Listings from "./Listings";

export default function ListingPage () {
  const [openModal, setOpenModal] = useState({
    price: false,
    available: false,
    distance: false,
  })
  const handleModal = (price, available, distance) => {
    setOpenModal((prevState) => {
      return {
        ...prevState,
        [price]: !prevState[price],
        [available]: !prevState[available],
        [distance]: !prevState[distance],
      };
    });
  };
  return (
    <section className="mainWrapper">
      <ListingHead/>
      <div className="listingTitle">
        <h4 className="title">32 Search Results in Toronto</h4>
        <div className="titleButtons">
          <button className="btnPrimary" onClick={()=> handleModal('price')} >
            <IoIosPricetags size={18} className='icon' />
            Price
          </button>
          <button className="btnPrimary" onClick={()=> handleModal('available')} >
            <IoMdTime size={18} className='icon' />
            Available Now
          </button>
          <button className="btnPrimary" onClick={()=> handleModal('distance')} >
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
      <div className="footer">
        <Footer/>
      </div>
    </section>
  );
}
