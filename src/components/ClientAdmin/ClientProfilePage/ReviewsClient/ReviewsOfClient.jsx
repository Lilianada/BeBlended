import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";
import {Review} from "../../ClientAdminData";
import "./ReviewsClient.scss";

export default function ReviewsOfClient() {
  return (
    <section className="reviewsOfClient">
      <div>
        <p className="aboutHead">Reviews of You</p>
      </div>
      <div className="totalReview_Head">
        <AiFillStar fill="#893583" size={38} />
        <h3 className="ratingNumber">0.0</h3>
        <p className="reviewNumber">(0 reviews)</p>
      </div>
      {
        Review.length === 0 ? (
        <div className="noReview">
          {/* No REVIEW */}
          <MdOutlineReviews size={56} />
          <p className="noReview_Head">You have no reviews in our system yet!</p>
          <p className="noReview_Info">
            Reviews get added once you start booking appointments.
          </p>
        </div>

        ) : (
          <div className="reviewContent">
          {/* REVIEWS */}
          {
            Review.slice(0, 2).map((item, id) => {
              return (
                <div className="reviewRow" key={id}>
                  <AiFillStar fill="#050505" size={38} />
                    <div className="reviewColumn">
                      <div className="reviewComment"> {item.stylistcomment} </div>
                      <div className="reviewerDate"> {item.date} </div>
                      <div className="stylistDetails">
                        <img src={item.image} className="reviewerPic" alt="Profile Image" />
                        <div className="stylistCol">
                          <p className="reviewerName"> {item.stylistName} </p>
                          <div className="reviewerRating">
                            <AiFillStar fill="#893583" size={20} />
                            <h5 className="rateNum"> {item.rating} </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              )
            })
          }
        </div>
        )
      }
    </section>
  );
}
