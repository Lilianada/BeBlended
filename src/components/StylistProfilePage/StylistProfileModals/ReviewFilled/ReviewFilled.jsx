import React, { useState } from "react";
import "./ReviewFilled.scss";
import { Rating } from "react-simple-star-rating";
import {Review, Values} from "../ProfileModalData";


export default function ReviewedFilled() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <section className="reviewFilled">
      <div className="reviewFilled_Head">
        <h5 className="name">Reviews</h5>
        <hr />
      </div>
      <div className="reviewFilled_FLex">
        <div className="reviewFilled_Left">
          <div className="rateNumber">
            <h4 className="name">4.5</h4>
          </div>
          <div className="reviewFilled_Row">
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={24}
              fillColor="#893583"
              allowHover={false}
              readonly={true}
              initialValue={4}
            />
            <p>4 reviews</p>
          </div>
        </div>
        <div className="reviewFilled_Col">
          <div className="reviewCategory">
            <p>Arrival time</p>
            <div className="ratings">
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={24}
                fillColor="#893583"
                allowHover={false}
                readonly={true}
                initialValue={5}
              />
            </div>
          </div>
          <hr />
          <div className="reviewCategory">
            <p>Professionalism</p>
            <div className="ratings">
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={24}
                fillColor="#893583"
                allowHover={false}
                readonly={true}
                initialValue={4}
              />
            </div>
          </div>
        </div>
        <div className="reviewFilled_Col">
          <div className="reviewCategory">
            <p>Hair Handling</p>
            <div className="ratings">
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={24}
                fillColor="#893583"
                allowHover={false}
                readonly={true}
                initialValue={3}
              />
            </div>
          </div>
          <hr />
          <div className="reviewCategory">
            <p>Communication</p>
            <div className="ratings">
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={24}
                fillColor="#893583"
                allowHover={false}
                readonly={true}
                initialValue={4}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="reviewFilled_Row">
        <div className="reviewFilter">
          <p className="head">Filter by rating</p>
          <div className="ratings">
            {Values.map((value, index) => (
              <div className="ratingData" key={index}>
                <Rating
                  onClick={handleRating}
                  ratingValue={rating}
                  size={24}
                  fillColor="#893583"
                  allowHover={false}
                  readonly={true}
                  initialValue={value.defaultValue}
                />
                <progress value={value.value} max="100" />
                <p> {value.num} </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reviewComments">
          {Review.map((review, id) => (
            <div className="commentWrap" key={id}>
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={24}
                fillColor="#893583"
                allowHover={false}
                readonly={true}
                initialValue={review.defaultValue}
              />
              <p className="comment">{review.comment}</p>
              <div className="bar"> </div>
              <div className="commentFooter">
                <div className="commentFooter_Left">
                  <p className="clientName"> {review.name} </p>
                  <div className="dot"></div>
                  <p className="commentDate"> {review.timeline} </p>
                </div>
                <div className="commentFooter_Right">
                  <a href="/" className="report">
                    Report
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
