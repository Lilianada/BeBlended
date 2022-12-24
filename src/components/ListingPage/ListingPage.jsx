import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosPricetags, IoMdTime } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { BottomNavClient, Footer } from "../../components";
import DistanceModal from "./DistanceModal/DistanceModal";
import ListingCard from "./ListingCard";
import ListingHead from "./ListingHead/ListingHead";
import Listings from "./Listings";
import PriceRangeModal from "./PriceRangeModal/PriceRangeModal";
import "./ListingPage.scss";

export default function ListingPage() {
  const [openModal, setOpenModal] = useState({
    price: false,
    available: false,
    distance: false,
    list: false,
  });

  const handleModal = (price, distance, available, list) => {
    setOpenModal((prevState) => {
      return {
        ...prevState,
        [price]: !prevState[price],
        [available]: !prevState[available],
        [distance]: !prevState[distance],
        [list]: !prevState[list],
      };
    });
  };

  return (
    <section className="mainWrapper listingPage">
      <div className="listHead">
        <ListingHead />
        <div className="listingTitle">
          <h4 className="title">32 Search Results in Toronto</h4>
          <div className="titleButtons">
            <button
              className={`btnPrimary ${openModal.price ? "activeBtn" : ""}`}
              onClick={() => handleModal("price")}
            >
              <IoIosPricetags size={18} className="icon" />
              Price
            </button>
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {openModal.price && (
                <PriceRangeModal
                  openModal={openModal.price}
                  closeModal={setOpenModal}
                />
              )}
            </AnimatePresence>

            <button
              className={`btnPrimary ${openModal.available ? "activeBtn" : ""}`}
              onClick={() => handleModal("available")}
            >
              <IoMdTime size={18} className="icon" />
              Available Now
            </button>

            <button
              className={`btnPrimary ${openModal.distance ? "activeBtn" : ""}`}
              onClick={() => handleModal("distance")}
            >
              <IoLocationSharp size={18} className="icon" />
              Distance
            </button>
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {openModal.distance && (
                <DistanceModal
                  openModal={openModal.distance}
                  closeModal={setOpenModal}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      <div className="listingFlex">
        <Listings />
        <div className="map">{/* Fix in the map here */}</div>
      </div>

      {openModal && (
        <ListingCard openModal={openModal.list} closeModal={setOpenModal} />
      )}

      <BottomNavClient />
      <div className="footer">
        <Footer />
      </div>
    </section>
  );
}
