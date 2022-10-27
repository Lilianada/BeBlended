import React, { useState } from "react";
import './Reviewed.scss';
import { Rating } from "react-simple-star-rating";

function Reviewed() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <div className="reviewed">
      <div className="reviewed_Head">
        <h5 className="name">Reviews</h5>
        <hr />
      </div>
      <div className="reviewed_FLex">
        <div className="reviewed_Left">
          <div className="rateNumber">
            <h4>0.0</h4>
          </div>
          <div className="reviewed_Row">
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={24}
              fillColor="#B8B8B8"
              allowHover={false}
              readonly={true}
              initialValue={0}
            />
            <p>0 reviews</p>
          </div>
        </div>
        <div className="reviewed_Col">
          <div className="reviewCategory">
            <p>Arrival time</p>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={24}
              fillColor="#B8B8B8"
              allowHover={false}
              readonly={true}
              initialValue={0}
            />
          </div>
          <hr />
          <div className="reviewCategory">
            <p>Professionalism</p>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={24}
              fillColor="#B8B8B8"
              allowHover={false}
              readonly={true}
              initialValue={0}
            />
          </div>
        </div>
        <div className="reviewed_Col">
          <div className="reviewCategory">
            <p>Hair Handling</p>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={24}
              fillColor="#B8B8B8"
              allowHover={false}
              readonly={true}
              initialValue={0}
            />
          </div>
          <hr />
          <div className="reviewCategory">
            <p>Communication</p>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={24}
              fillColor="#B8B8B8"
              allowHover={false}
              readonly={true}
              initialValue={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviewed;
