import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";
import {Review} from "../../ClientAdminData";
import "./ReviewsClient.scss";

export default function ReviewByClient() {
  return (
    <section className="reviewsByClient">
      <div>
        <p className="aboutHead">Reviews by You</p>
      </div>
      <div className="totalReview_Head"></div>
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
            Review.map((item, id) => {
              return (
                <div className="reviewRow" key={id}>
                  <AiFillStar fill="#050505" size={38} />
                    <div className="reviewColumn">
                      <div className="reviewComment"> {item.clientcomment} </div>
                      <div className="reviewerDate"> {item.date} </div>
                      <div className="stylistDetails">
                        <img src={item.image} className="reviewerPic" alt="Profile Image" />
                        <div className="stylistCol">
                          <p className="reviewerName"> {item.clientName} </p>
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
