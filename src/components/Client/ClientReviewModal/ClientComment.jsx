import React from "react";

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
      <p className="boldText">Was Lola Adeyemi a good client? </p>
      <div className="buttonRow">
        <button className="activeBtn">Yes</button>
        <button className="inactiveBtn">No</button>
      </div>
    </form>
  );
}
