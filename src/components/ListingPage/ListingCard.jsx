import React, { useState } from "react";
import ReactDOM from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineClose,
  AiOutlineHeart,
} from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { ListingData } from "./ListingData";

export default function ListingCard({ openModal, closeModal }) {
  //like button
  const [isliked, setIsLiked] = useState("white");
  const handleLike = () => {
    setIsLiked(!isliked);
  };
  return ReactDOM.createPortal(
    <>
      {openModal ? (
        <motion.div
          className="listingCards"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          exit="exit"
        >
          <div className="cardHeader">
            <button className="closeButton" onClick={closeModal}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <article>
           {/* This is the left icon, you can give it an onclick */}
           <button className="slideControl"> <FiChevronLeft /></button>
           
            <div className="listings">
              {ListingData.slice(0, 1).map((item, id) => (
                <div className="listing" key={id}>
                  <div className="listingsWrap">
                    <div className="profileImage">
                      <img src={item.profileImage} alt="Listing Image" />
                    </div>
                    <div className="listingInfo">
                      <div className="infoHead">
                        {/* This should link to stylist page */}
                        <h5 className="title"> {item.stylistName}</h5>
                        <div className="like" onClick={handleLike}>
                          {isliked ? (
                            <AiOutlineHeart size={24} />
                          ) : (
                            <AiFillHeart size={24} />
                          )}
                        </div>
                      </div>
                      <p className="location"> {item.address} </p>
                      <div className="ratingReviews">
                        <AiFillStar
                          size={18}
                          style={{ marginRight: ".75rem" }}
                          fill="#893583"
                        />
                        <p className="rating"> {item.rating} </p>
                        <p className="review"> ({item.reviews} reviews) </p>
                      </div>
                      <div className="tags">
                        {item.tags.map((tag, id) => (
                          <p className="tag" key={id}>
                            {" "}
                            {tag}{" "}
                          </p>
                        ))}
                      </div>
                      <div className="services">
                        <p className="serviceTitle">Services provided:</p>
                        <p className="serviceLists"> {item.services} </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* This is the right icon, you can give it an onclick */}
            <button className="slideControl"><FiChevronRight /> </button>
          </article>
        </motion.div>
      ) : null}
    </>,
    document.getElementById("modal")
  );
}
