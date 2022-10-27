import React, { useState } from "react";
import "./ReviewFilled.scss";
import { Rating } from "react-simple-star-rating";

export default function ReviewedFilled() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  const Review = [
    {
      comment:
        "Becky was very professional in doing my hair cut.. Very well manerd and also very friendly, will be going back to hair 21. Thank you for a good service 5*****",
      name: "Sandra",
      defaultValue: "4",
      timeline: "24 days ago",
    },
    {
      comment:
        "I would definitely revisit the salon my haircut was great. Many thanks",
      name: "Gary",
      defaultValue: "4",
      timeline: "14 days ago",
    },
    {
      comment:
        "My first time at the salon shortly after lockdown; brilliant service and very friendly atmosphere at very reasonable prices. I booked for my next appointment immediately and have recommended this salon to all my friends",
      name: "Anonymous",
      defaultValue: "5",
      timeline: "11 days ago",
    },
    {
      comment:
        "Becky is friendly, competent,accomplished she is able to help and advise on a wide variety of styles and colours for your hair also giving advice on how to care for and achieve the style she achieved in the salon.",
      name: "Sandra",
      defaultValue: "5",
      timeline: "1 day ago",
    },
    {
      comment:
        "Becky is friendly, competent,accomplished she is able to help and advise on a wide variety of styles and colours for your hair also giving advice on how to care for and achieve the style she achieved in the salon.",
      name: "Sandra",
      defaultValue: "5",
      timeline: "1 day ago",
    },
    {
      comment:
        "Becky is friendly, competent,accomplished she is able to help and advise on a wide variety of styles and colours for your hair also giving advice on how to care for and achieve the style she achieved in the salon.",
      name: "Sandra",
      defaultValue: "2",
      timeline: "1 day ago",
    },
    {
      comment:
        "Becky is friendly, competent,accomplished she is able to help and advise on a wide variety of styles and colours for your hair also giving advice on how to care for and achieve the style she achieved in the salon.",
      name: "Sandra",
      defaultValue: "3",
      timeline: "1 day ago",
    },
    {
      comment:
        "Becky is friendly, competent,accomplished she is able to help and advise on a wide variety of styles and colours for your hair also giving advice on how to care for and achieve the style she achieved in the salon.",
      name: "Sandra",
      defaultValue: "5",
      timeline: "1 day ago",
    },
    {
      comment:
        "Becky is friendly, competent,accomplished she is able to help and advise on a wide variety of styles and colours for your hair also giving advice on how to care for and achieve the style she achieved in the salon.",
      name: "Sandra",
      defaultValue: "4",
      timeline: "1 day ago",
    },
    {
      comment:
        "Becky is friendly, competent,accomplished she is able to help and advise on a wide variety of styles and colours for your hair also giving advice on how to care for and achieve the style she achieved in the salon.",
      name: "Sandra",
      defaultValue: "5",
      timeline: "1 day ago",
    },
  ];

  const Values = [
    {
      value: 30,
      num: 3,
      defaultValue: 5,
    },
    {
      value: 70,
      num: 6,
      defaultValue: 6,
    },
    {
      value: 30,
      num: 2,
      defaultValue: 3,
    },
    {
      value: 20,
      num: 1,
      defaultValue: 2,
    },
    {
      value: 0,
      num: 0,
      defaultValue: 1,
    },
  ];

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
