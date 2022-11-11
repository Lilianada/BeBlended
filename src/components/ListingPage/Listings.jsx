import React, { useState } from "react";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { ListingData } from "./ListingData";

export default function Listings() {
  //like button
  const [isliked, setIsLiked] = useState("white");
  const handleLike = () => {
    setIsLiked(!isliked);
  };
  return (
    <div className="listings">
      {ListingData.map((item, id) => (
        <div className="listing" key={id}>
          <div className="listingsWrap">
            <div className="profileImage">
              <img src={item.profileImage} alt="Listing Image" />
            </div>
            <div className="listingInfo">
              <h5 className="title"> {item.stylistName} </h5>
              <div className="ratingReviews">
                <AiFillStar
                  size={18}
                  style={{ marginRight: ".75rem" }}
                  fill="#893583"
                />
                <p className="rating"> {item.rating} </p>
                <p className="review"> ({item.reviews} reviews) </p>
              </div>
              <p className="location"> {item.address} </p>
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
          <div className="like">
            {isliked ? <AiOutlineHeart size={24} /> : <AiFillHeart size={24} />}
          </div>
        </div>
      ))}
    </div>
  );
}
