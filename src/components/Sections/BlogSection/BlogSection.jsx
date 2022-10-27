import React, {Component} from "react";
import "./BlogSection.scss";
import AfroScarf from "../../../assets/AfroScarf.png";
import Braids from "../../../assets/BraidedLady.png";
import Women from "../../../assets/Women.png";
import BossLady from "../../../assets/BossLady.png";
import { BsClock } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function BlogSection()  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <section className="blogSection_wrap">
        <div className="blogSection_header">
          <h4 className="blogHead">BeBlended World</h4>
          <p>Explore the Blog</p>
        </div>

        <Slider className="blogItems_row" {...settings}>
          <div className="blogItem">
            <div className="blogImage">
              <img src={AfroScarf} alt="Blog Display" />
            </div>
            <h6 className="blogTitle">Listening to my short 4c hair</h6>
            <span className="readMore">Read More</span>
            <div className="timer">
              <BsClock fill="#050205" size={18} />
              <p>Under 1 min read</p>
            </div>
          </div>
          <div className="blogItem">
            <div className="blogImage">
              <img src={Braids} alt="Blog Display" />
            </div>
            <h6 className="blogTitle">
              If at First You Don't Succeed: Protective Hairstyle Tip
            </h6>
            <span className="readMore">Read More</span>
            <div className="timer">
              <BsClock fill="#050205" size={18} />
              <p>Under 1 min read</p>
            </div>
          </div>
          <div className="blogItem">
            <div className="blogImage">
              <img src={Women} alt="Blog Display" />
            </div>
            <h6 className="blogTitle">
              "You Can Say No, They'll be Fine" by Ataisi Iris
            </h6>
            <span className="readMore">Read More</span>
            <div className="timer">
              <BsClock fill="#050205" size={14} />
              <p>Under 1 min read</p>
            </div>
          </div>
          <div className="blogItem">
            <div className="blogImage">
              <img src={BossLady} alt="Blog Display" />
            </div>
            <h6 className="blogTitle">
              "You Can Say No, They'll be Fine" by Ataisi Iris
            </h6>
            <span className="readMore">Read More</span>
            <div className="timer">
              <BsClock fill="#050205" size={14} />
              <p>Under 1 min read</p>
            </div>
          </div>
        </Slider>
      </section>
    );
  }

export default BlogSection;
