import React from "react";
import { IoIosPricetags, IoMdTime }from 'react-icons/io';
import { IoLocationSharp }from 'react-icons/io5';
import ListingHead from "./ListingHead/ListingHead";
import './ListingPage.scss';

export default function ListingPage () {
  return (
    <section className="mainWrapper">
      <ListingHead/>
      <div className="listingTitle">
        <h4 className="title">32 Search Results in Toronto</h4>
        <div className="titleButtons">
          <button className="btnPrimary">
            <IoIosPricetags size={18} style={{marginRight: '1rem'}} />
            Price
          </button>
          <button className="btnPrimary">
            <IoMdTime size={18} style={{marginRight: '1rem'}} />
            Available Now
          </button>
          <button className="btnPrimary">
            <IoLocationSharp size={18} style={{marginRight: '1rem'}} />
            Distance
          </button>
        </div>
      </div>
    </section>
  );
}
