import React from "react";
import './StylistReviewModal.scss';

export default function ClientComment() {
  return (
    <form action="" className="commentSection">
      <p className="boldText">Comments</p>
      <textarea
        name="comment-area"
        className="commentArea"
        cols="30"
        rows="10"
      ></textarea>
      <p className="boldText">Would you recommend Braids by Becky? </p>
      <div className="buttonRow">
        <button className="activeBtn">Yes</button>
        <button className="inactiveBtn">No</button>
      </div>
      <button className="submitBtn">Submit Review</button>
    </form>
  );
}
