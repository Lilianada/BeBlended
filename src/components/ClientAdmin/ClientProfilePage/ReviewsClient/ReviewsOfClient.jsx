import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";
import "./ReviewsClient.scss";

export default function ReviewsOfClient() {
  return (
    <section className="reviewsOfClient">
      <div>
        <p className="aboutHead">Reviews of You</p>
      </div>
      <div className="totalReview_Head">
        <AiFillStar fill="#893583" size={38} />
        <h3 className="ratingNumber">0.0</h3>
        <p className="reviewNumber">(0 reviews)</p>
      </div>
      {/* No REVIEW */}
      <div className="noReview">
        <MdOutlineReviews size={56} />
        <p className="noReview_Head">You have no reviews in our system yet!</p>
        <p className="noReview_Info">
          Reviews get added once you start booking appointments.
        </p>
      </div>
      {/* REVIEWS */}
    </section>
  );
}
