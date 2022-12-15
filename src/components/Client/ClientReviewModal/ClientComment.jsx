import React, { useState } from "react";
import "./ClientReviewModal.scss";

export default function ClientComment() {
  const [active, setActive] = useState(0);
  const isActive = (index, e) => {
    e.preventDefault(e);
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
      ></textarea>
      <p className="boldText">Was Lola Adeyemi a good client? </p>
      <div className="buttonRow">
        <button className={`inactiveBtn ${active === 1 ? "activeBtn" : ""}`} onClick={() => isActive (1)} >Yes</button>
        <button className={`inactiveBtn ${active === 2 ? "activeBtn" : ""}`} onClick={() => isActive (2)} >No</button>
      </div>
      <button className="submitBtn">Submit Review</button>
    </form>
  );
}
