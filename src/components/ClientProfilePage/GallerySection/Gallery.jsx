import React, { useState } from "react";
import "./Gallery.scss";
import { AnimatePresence } from "framer-motion";
import Carousel from "nuka-carousel";
import { VscHeart } from "react-icons/vsc";
import GalleryModalClient from "./GalleryModal";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function Gallery() {
  const images = [
    {
      id: 1,
      item: "https://images.unsplash.com/photo-1663431512656-b1d9e811735b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80",
    },
    {
      id: 2,
      item: "https://images.unsplash.com/photo-1657130711047-522ce815a2c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 3,
      item: "https://images.unsplash.com/photo-1662859009178-62afb0cff049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 4,
      item: "https://images.unsplash.com/photo-1663431512656-b1d9e811735b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80",
    },
  ];
  //open and close modal
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  //like button
  const [isliked, setIsLiked] = useState("white");
  const handleLike = () => {
    setIsLiked(!isliked);
  };

  return (
    <div className="galleryUpload">
      <div className="topButtons">
        <button className="showImage" onClick={handleModal}>
          Show all photos
        </button>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {openModal && (
            <GalleryModalClient
              openModal={openModal}
              closeModal={handleModal}
            />
          )}
        </AnimatePresence>
        <button className="likeImage" onClick={handleLike}>
          {isliked ? (
            <AiOutlineHeart size={24} />
          ) : (
            <AiFillHeart size={24} className="AiFillHeart" />
          )}
        </button>
      </div>

      {/* desktop gallery items / replace divs with img tag*/}
      <div className="galleryItems">
        {images.map((image) => (
          <img src={image.item} className="image" key={image.id} />
        ))}
      </div>

      {/* mobile gallery carousel items */}
      <div className="galleryItems_Slide">
        <Carousel autoPlay={false}>
          {images.map((image) => (
            <img
              src={image.item}
              className="image"
              key={image.id}
              draggable="false"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Gallery;
