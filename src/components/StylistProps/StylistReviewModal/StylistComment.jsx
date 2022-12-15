import React, { useState } from "react";
import './StylistReviewModal.scss';

export default function ClientComment() {
  const [active, setActive] = useState(0);
  const isActive = (index) => {
    setActive(index);
  }
  return (
    <form action="" className="commentSection">
      <p className="boldText">Comments</p>
      <textarea
        name="comment-area"
        className="commentArea"
        cols="30"
        rows="10"
        placeholder="Good or bad, describe your experience here!"
      ></textarea>
      <p className="boldText">Would you recommend Braids by Becky? </p>
      <div className="buttonRow">
        <div className={`inactiveBtn ${active === 1 ? "activeBtn" : ""}`} onClick={() => isActive(1)} >Yes</div>
        <div className={`inactiveBtn ${active === 2 ? "activeBtn" : ""}`} onClick={() => isActive(2)} >No</div>
      </div>
      <button className="submitBtn">Submit Review</button>
    </form>
  );
}
