import React from "react";
import { MdOutlineReviews } from "react-icons/md";
import "./ReviewsClient.scss";

export default function ReviewByClient() {
  return (
    <section className="reviewsByClient">
      <div>
        <p className="aboutHead">Reviews of You</p>
      </div>
      <div className="totalReview_Head"></div>
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
