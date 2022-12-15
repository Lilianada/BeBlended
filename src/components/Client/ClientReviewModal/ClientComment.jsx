import React, { useState } from "react";

export default function ClientComment() {
  const [active, setActive] = useState(1);
  const isActive = (index, e) => {
    e.preventDefault(e);
    setActive(state => {
      return{
        ...state,
        [index]: !state[index]
      }
    });
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
        <button className={active === 1 ? "inactiveBtn" : "activeBtn" } onClick={() => isActive(1)} >Yes</button>
        <button className={active === 2 ? "inactiveBtn" : "activeBtn" } onClick={() => isActive(2)} >No</button>
      </div>
      <button className="submitBtn">Submit Review</button>
    </form>
  );
}
