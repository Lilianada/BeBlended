import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineClose,
  AiOutlineHeart,
} from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ListingData } from "./ListingData";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function ListingCard({ openModal, closeModal }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const dataIndex = wrap(0, ListingData.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  //like button
  const [isliked, setIsLiked] = useState({});
  const handleLike = (index) => {
    setIsLiked((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return ReactDOM.createPortal(
    <>
      {/* {openModal ? ( */}
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
          <div className="listings">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "linear", stiffness: 80, damping: 20 },
                  opacity: { duration: 0.5 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              >
                <div className="listing">
                  <div className="listingsWrap">
                    <div className="profileImage">
                      <img
                        src={ListingData[dataIndex].profileImage}
                        alt="Listing Image"
                      />
                    </div>
                    <div className="listingInfo">
                      <div className="infoHead">
                        {/* This should link to stylist page */}
                        <h5 className="title">
                          {" "}
                          {ListingData[dataIndex].stylistName}
                        </h5>
                        <div
                          className="like"
                          onClick={() => handleLike(dataIndex)}
                        >
                          {isliked[dataIndex] ? (
                            <AiOutlineHeart size={24} />
                          ) : (
                            <AiFillHeart size={24} />
                          )}
                        </div>
                      </div>
                      <p className="location">
                        {" "}
                        {ListingData[dataIndex].address}{" "}
                      </p>
                      <div className="ratingReviews">
                        <AiFillStar
                          size={18}
                          style={{ marginRight: ".75rem" }}
                          fill="#893583"
                        />
                        <p className="rating">
                          {" "}
                          {ListingData[dataIndex].rating}{" "}
                        </p>
                        <p className="review">
                          {" "}
                          ({ListingData[dataIndex].reviews} reviews){" "}
                        </p>
                      </div>
                      <div className="tags">
                        {ListingData[dataIndex].tags.map((tag, id) => (
                          <p className="tag" key={id}>
                            {" "}
                            {tag}{" "}
                          </p>
                        ))}
                      </div>
                      <div className="services">
                        <p className="serviceTitle">Services provided:</p>
                        <p className="serviceLists">
                          {" "}
                          {ListingData[dataIndex].services}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="next" onClick={() => paginate(1)}>
              <FiChevronRight size={24} />
            </div>
            <div className="prev" onClick={() => paginate(-1)}>
              <FiChevronLeft size={24} />
            </div>
          </div>
        </article>
      </motion.div>
      {/* ) : null} */}
    </>,
    document.getElementById("modal")
  );
}
