import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function ReviewsOfClient() {
  return (
    <section className="reviewsOfClient">
      <div>
        <p className="aboutHead">About</p>
      </div>
      <div className="totalReview">
        <AiFillStar fill="#893583" />
        <h3 className="ratingNumber">0.0</h3>
        <p className="reviewNumber">(0 reviews)</p>
      </div>
    </section>
  );
}
