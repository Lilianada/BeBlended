import React, {useState} from "react";
import { Rating } from "react-simple-star-rating";


export default function RateCriterias() {
    const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <div className="rateCriterias">
        <div className="criteria">
            <p className="boldText">Price</p>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={24}
              fillColor="#893583"
              allowHover={false}
            />
        </div>
        <div className="criteria">
            <p className="boldText">Communication</p>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={24}
              fillColor="#893583"
              allowHover={false}
            />
        </div>
        <div className="criteria">
            <p className="boldText">Quality of Service</p>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={24}
              fillColor="#893583"
              allowHover={false}
            />
        </div>
        <div className="criteria">
            <p className="boldText">Hair Handling</p>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={24}
              fillColor="#893583"
              allowHover={false}
            />
        </div>
        <div className="criteria">
            <p className="boldText">Professionalism</p>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={24}
              fillColor="#893583"
              allowHover={false}
            />
        </div>
        <div className="criteria">
            <p className="boldText">Punctuality</p>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={24}
              fillColor="#893583"
              allowHover={false}
            />
        </div>
    </div>
  );
}
