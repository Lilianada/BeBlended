import React from "react";
import "./Support.scss";
import CircleVector from "../../../assets/CircleVector.png";
import Book from "../../../assets/BookPenIcon.png";
import Idea from "../../../assets/IdeaIcon.png";
import Security from "../../../assets/SecurityVector.png";
import Slider from "react-slick";

function SupportClient () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="supportWrap">
      <div className="supportHeading">
        <h3>How we support you.</h3>
        <img src={CircleVector} alt="Circle Vector" />
      </div>

      <div className="mobileRow">
        <Slider 
          className="supportRow"
          {...settings}
        >
          <div className="row">
            <div className="iconWrap">
              <img src={Book} alt="Icon" />
            </div>
            <h6>Anonymous Reviews</h6>
            <p>
              We create a space for you to tell the truth about how your
              appointment actually went <strong> without</strong> being
              confrontational.
            </p>
          </div>
          <div className="row">
            <div className="iconWrap">
              <img src={Security} alt="Icon" />
            </div>
            <h6>Security</h6>
            <p>
              Whether it’s reporting an incident, getting a refund, or vetting
              your hairstylist - we provide resources to hold everyone
              accountable
            </p>
          </div>
          <div className="row">
            <div className="iconWrap">
              <img src={Idea} alt="Icon" />
            </div>
            <h6>User Experience</h6>
            <p>
              Our customer support team is readily available to answer questions
              and receive feedback to improve your experience
            </p>
          </div>
        </Slider>
      </div>
      <div className="desktopRow">
        <div className="supportRow">
          <div className="row">
            <div className="iconWrap">
              <img src={Book} alt="Icon" />
            </div>
            <h6>Anonymous Reviews</h6>
            <p>
              We create a space for you to tell the truth about how your
              appointment actually went <strong>without</strong> being
              confrontational.
            </p>
          </div>
          <div className="row">
            <div className="iconWrap">
              <img src={Security} alt="Icon" />
            </div>
            <h6>Security</h6>
            <p>
              Whether it’s reporting an incident, getting a refund, or vetting
              your hairstylist - we provide resources to hold everyrow
              accountable
            </p>
          </div>
          <div className="row">
            <div className="iconWrap">
              <img src={Idea} alt="Icon" />
            </div>
            <h6>User Experience</h6>
            <p>
              Our customer support team is readily available to answer questions
              and receive feedback to improve your experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportClient;
