import React from "react";
import "./Join.scss";
import Ladies from "../../../assets/ImageGroup.png";
import Ladies2 from "../../../assets/ImageGroup2.png";

export default function Join() {
  const handleEvent = (e) => {
    e.preventDefault();
  };
  return (
    <section className="joinWrap">
      <div className="desktopJoin">
        <div className="flexOne">
          <div className="joinHeader">
            <h5 className="formTitle">Join Our Sisterhood</h5>
            <div className="borderBottom"></div>
            <p className="formSubtitile">
              Be the first to know about all things BeBlended!
            </p>
          </div>

          <div className="joinForm">
            <form action="" method="post">
              <div className="form">
                <div className="formWrap">
                  <label htmlFor="FirstName">First name*</label>
                  <input
                    type="text"
                    name="Firstname"
                    placeholder="Jane"
                    required
                  />
                </div>
                <div className="formWrap">
                  <label htmlFor="LastName">Last name*</label>
                  <input
                    type="text"
                    name="Lastname"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="form">
                <div className="email">
                  <label htmlFor="Email">Email address*</label>
                  <input
                    type="text"
                    name="Email"
                    placeholder="Janedoe@mail.com"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="submitForm"
                onClick={handleEvent}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="joinImage">
          <img src={Ladies} alt="Ladies" />
        </div>
      </div>

      <div className="mobileJoin">
        <div className="flexOne">
          <div className="joinHeader">
            <h5 className="formTitle">Join Our Sisterhood</h5>
            <div className="borderBottom"></div>
            <p className="formSubtitile">
              Be the first to know about all things BeBlended!
            </p>
          </div>

          <div className="joinImage">
            <img src={Ladies2} alt="Ladies" />
          </div>

          <div className="joinForm">
            <form action="" method="post">
              <div className="form">
                <div className="formWrap">
                  <label htmlFor="FirstName">First name*</label>
                  <input
                    type="text"
                    name="Firstname"
                    placeholder="Jane"
                    required
                  />
                </div>
                <div className="formWrap">
                  <label htmlFor="LastName">Last name*</label>
                  <input
                    type="text"
                    name="Lastname"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="form">
                <div className="formWrap">
                  <label htmlFor="Email">Email address*</label>
                  <input
                    type="text"
                    name="Email"
                    placeholder="Janedoe@mail.com"
                    required
                  />
                </div>
              </div>
            </form>
            <button type="submit" className="submitForm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
