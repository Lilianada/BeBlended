import React, { useEffect, useState } from "react";
import Logo from "../../../../assets/logo-black.svg";
import { FaAngleLeft } from "react-icons/fa";
import BlobMB from "../../../../assets/mobileBlob.svg";
import Blob from "../../../../assets/StylistVector.svg";
import BlobPurpleMB from "../../../../assets/VectorPurpleMb.svg";
import BlobPurple from "../../../../assets/StylistVectorPurple.svg";
import "./StylistForm.scss";
import { MdError } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function OnboardStylistForm() {
  //Complete button handler and for inputs
  const [getInputs, setGetInputs] = useState("");
  const [activeBtn, setActiveBtn] = useState(false);

  const handleInput = (e) => {
    setGetInputs(e.target.value);
    if (setGetInputs !== "") {
      setActiveBtn(true);
    }
  };

  //for when No is clicked
  const [yesResponse, setYesResponse] = useState(null);
  const [noResponse, setNoResponse] = useState(false);

  const isTrueHandler = () => {
    setYesResponse(true);
  };
  const isFalseHandler = () => {
    if (setYesResponse() === true) {
      setNoResponse(false);
    }
  };

  //for when Local is clicked on
  const [isLocal, setIsLocal] = useState(null);
  const [isNotLocal, setIsNotLocal] = useState(null);

  const isLocalHandler = () => {
    setIsLocal(true);
  };

  const isNotLocalHandler = () => {
    if (setIsLocal() === true) {
      setIsNotLocal(false);
    }
  };

  return (
    <>
      <section className="onboardingStylist__Wrap">
        <header className="onboardingStylist__Head">
          <button className="rowBack">
            <FaAngleLeft className="angleLeft" size={24} />
            <p>Back</p>
          </button>
          <div className="welcomeLogo">
            <img src={Logo} alt="Logo" />
          </div>
        </header>
        <img src={BlobPurpleMB} alt="Vector" className="mobileTopVector" />
        <img src={Blob} alt="Vector" className="desktopTopVector" />

        <div className="formWrapper">
          <p className="formHead">A little more about you.</p>
          <form action="" className="stylistForm">
            <div className="formColumn">
              <label className="formQuestion">
                What’s your business name? (*)
                <MdError
                  fill="#B7B3B3"
                  size={16}
                  style={{ marginLeft: ".35rem" }}
                />
              </label>
              <input
                onChange={handleInput}
                type="text"
                name="text"
                className="inputField"
                required
              />
              <MdError id="errorIcon" /> <GrStatusGood id="successIcon" />
              <div className="errorMsg">
                This business name is already taken!
              </div>
            </div>
            <div className="formColumn">
              <label className="formQuestion">
                What’s your phone number? (*)
                <MdError className="mdError" />
              </label>
              <input
                onChange={handleInput}
                type="tel"
                name="tel"
                className="inputField"
                required
              />
            </div>
            <div className="formColumn">
              <label className="formQuestion">
                What’s your business address? (*)
                <MdError className="mdError" />
              </label>
              <div className="formRow_wrap">
                <div className="formRow">
                  <label className="formRow_Question">Address 1 (*)</label>
                  <input
                    onChange={handleInput}
                    type="address"
                    name="text"
                    className="inputField"
                    required
                  />
                </div>
                <div className="formRow">
                  <label className="formRow_Question">Address 2</label>
                  <input
                    onChange={handleInput}
                    type="address"
                    name="text"
                    className="inputField"
                    required
                  />
                </div>
              </div>
              <div className="formRow_wrap">
                <div className="formRow">
                  <label className="formRow_Question">City (*)</label>
                  <input
                    onChange={handleInput}
                    type="address"
                    name="text"
                    className="inputField"
                    required
                  />
                </div>
                <div className="formRow">
                  <label className="formRow_Question">Province (*)</label>
                  <input
                    onChange={handleInput}
                    type="address"
                    name="text"
                    className="inputField"
                    required
                  />
                </div>
              </div>
              <div className="formRow_wrap">
                <div className="formRow">
                  <label className="formRow_Question">Zip Code (*)</label>
                  <input
                    onChange={handleInput}
                    type="address"
                    name="text"
                    className="inputField"
                    required
                  />
                </div>
                <div className="formRow">
                  <label className="formRow_Question">Country (*)</label>
                  <input
                    onChange={handleInput}
                    type="address"
                    name="text"
                    className="inputField"
                    required
                  />
                </div>
              </div>
              <div className="formRow_wrap">
                <label className="checkBox_form">
                  <input onChange={handleInput} type="checkbox" name="check" />
                  <span className="checkbox"></span>
                  <i>Show address on public profile</i>
                </label>
              </div>
              <div className="formRow_wrap">
                <div className="formButton_wrap">
                  <label htmlFor="" className="checkBox_form">
                    Do you offer mobile services to your clients? (*)
                    <MdError className="mdError" />
                  </label>
                  <div className="radioButton_wrap">
                    <label
                      htmlFor="radioInput1"
                      className="radioInput"
                      onClick={isTrueHandler}
                    >
                      <input onChange={handleInput} type="radio" name="radio" />
                      <span className="radioButton"></span>
                      Yes
                    </label>
                    <label
                      htmlFor="radioInput2"
                      className="radioInput"
                      onClick={() => {
                        isFalseHandler();
                        isNotLocalHandler();
                      }}
                    >
                      <input onChange={handleInput} type="radio" name="radio" />
                      <span className="radioButton"></span>
                      No
                    </label>
                  </div>
                </div>
              </div>

              {/* if yes is clicked, display the next line, then when no is clicked make it go away. Add null */}
              <div
                className={`displayNone ${
                  yesResponse
                    ? "displayBlock"
                    : noResponse
                    ? "displayNone"
                    : null
                } }`}
              >
                <div className="formRow_wrap">
                  <div className="formButton_wrap">
                    <label htmlFor="" className="checkBox_form">
                      How far are you willing to travel? (*)
                      <MdError className="mdError" />
                    </label>
                    <div className="radioButton_wrap">
                      <label
                        htmlFor="radioInput3"
                        className="radioInput"
                        onClick={isLocalHandler}
                      >
                        <input
                          onChange={handleInput}
                          type="radio"
                          name="radio2"
                        />
                        <span className="radioButton"></span>
                        Locally
                      </label>
                      <label
                        htmlFor="radioInput4"
                        className="radioInput"
                        onClick={isNotLocalHandler}
                      >
                        <input
                          onChange={handleInput}
                          type="radio"
                          name="radio2"
                        />
                        <span className="radioButton"></span>
                        Nationally
                      </label>
                      <label
                        htmlFor=""
                        className="radioInput"
                        onClick={isNotLocalHandler}
                      >
                        <input
                          onChange={handleInput}
                          type="radio"
                          name="radio2"
                        />
                        <span className="radioButton"></span>
                        Globally
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`displayNone ${
                  isLocal ? "displayBlock" : isNotLocal ? "displayNone" : null
                }`}
              >
                <div className="formRow_wrap">
                  <div className="formButton_wrap">
                    <label htmlFor="" className="checkBox_form">
                      Please enter a distance. (*){" "}
                      <MdError className="mdError" />
                    </label>
                    <div className="distanceDropdown">
                      <input
                        onChange={handleInput}
                        type="number"
                        name="number"
                        className="distanceInput"
                        placeholder="0"
                      />
                      <select className="dropdown">
                        <option value="Km">km</option>
                        <option value="Miles">miles</option>
                      </select>
                    </div>
                    <p>Here is a map to help you visualize the distance</p>
                    {/* Add Map */}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <footer>
          <Link to="/stylist-step-four" className="next">
            <button
              type="submit"
              className={`next ${activeBtn ? "activeBtn" : "inactiveBtn"}`}
            >
              {" "}
              Next
            </button>
          </Link>
          <img src={BlobMB} alt="Blob" className="mobileBottomVector" />
          <img src={BlobPurple} alt="Blob" className="desktopBottomVector" />
        </footer>
      </section>
    </>
  );
}
