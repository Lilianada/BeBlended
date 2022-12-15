import React, { useState } from "react";
import './StylistReviewModal.scss';

export default function ClientComment() {
  const [active, setActive] = useState(1);
  const isActive = (index) => {
    // e.preventDefault(e);
    setActive(index)
    // setActive(state => {
    //   return{
    //     ...state,
    //     [index]: !state[index]
    //   }
    // });
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
        <button className={`inactiveBtn ${active ? "activeBtn" : ""}`} onClick={() => isActive(1)} >Yes</button>
        <button className={`inactiveBtn ${active ? "activeBtn" : ""}`} onClick={() => isActive(2)} >No</button>
      </div>
      <button className="submitBtn">Submit Review</button>
    </form>
  );
}
