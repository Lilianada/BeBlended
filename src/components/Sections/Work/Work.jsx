import React, { useState } from "react";
import Ellipse from "../../../assets/Ellipse6.png";
import Ellipse2 from "../../../assets/Ellipse-Pinkrose.png";
import "./Work.scss";


function Work() {
  const [toggle, setToggle] = useState(1);
  const [click, setClick] = useState(1)

  const handleToggle = (index) => {
    setToggle(index);
  };

  const handleClick = (idx) => {
    setClick(idx);
  }
  return (
    <section className="workSection">
      <div className="workFlex_Mobile">
        <div className="workHead">
          <h4 className="workTitle">How BeBlended works.</h4>
          {/* Tab Menu */}
          <div className="tabs"> 
            <h6 className="italicText">For your hair</h6>
            <div 
              className="toggleButton" 
              >
              <button
                className={toggle === 1 ? "toggleDefault active" : "toggleDefault"}
                onClick={() =>  handleToggle(1)}
              ></button>
              <button
                className={toggle === 2 ? "toggleNext active" : "toggleNext"}
                onClick={() =>  handleToggle(2)}
              ></button>
            </div>
            <h6 className="normTxt">For a hairstylist</h6>
          </div>
          {/* Tab Menu End */}
        </div>
        {/* Tab List */}
        <div 
          className={toggle === 1 ? "tabList activeContent" : "tabList"}
        >
          <ol className="orderedList">
            <li className="item">
              <div className="blob pink">
                <img src={Ellipse} alt="Blob" />
              </div>
              <div className="titleWrap">
                <div className="dash">
                  <div className="filled">
                    <p>1</p>
                  </div>
                </div>
                <h6 className="listHead">Find a hairstylist</h6>
              </div>
              <p className="listText">
                Whether you’re looking for a new or familiar hairstylist, just
                enter your desired hairstyle, availability, and location to get
                started.
              </p>
              <div className="wrkImgOne"></div>
              <div className="blob rose">
                <img src={Ellipse2} alt="Blob" />
              </div>
            </li>
            <li className="item">
              <div className="blob pink">
                <img src={Ellipse} alt="Blob" />
              </div>
              <div className="titleWrap">
                <div className="dash">
                  <div className="filled">
                    <p>2</p>
                  </div>
                </div>
                <h6 className="listHead">Book an appointment</h6>
              </div>
              <p className="listText">
                Browse the hairstylist’s profile, select your service, and then
                book. For more assistance you can directly chat with the
                hairstylist on our platform before booking!
              </p>
              <div className="wrkImgTwo"></div>
              <div className="blob rose">
                <img src={Ellipse2} alt="Blob" />
              </div>
            </li>
            <li className="item">
              <div className="blob pink">
                <img src={Ellipse} alt="Blob" />
              </div>
              <div className="titleWrap">
                <div className="dash">
                  <div className="filled">
                    <p>3</p>
                  </div>
                </div>
                <h6 className="listHead">Pay online or in-person</h6>
              </div>
              <p className="listText">
                Receive full transparency on what you’re being charged for. We
                offer flexible payment options for you to pay with credit,
                debit, or cash.
              </p>
              <div className="wrkImgThree"></div>
              <div className="blob rose">
                <img src={Ellipse2} alt="Blob" />
              </div>
            </li>
          </ol>
        </div>

        <div 
          className={toggle === 2 ? "tabList_two activeContent" : "tabList_two"}
          >
          <ol className="orderedList">
            <li className="item">
              <div className="blob pink">
                <img src={Ellipse} alt="Blob" />
              </div>
              <div className="titleWrap">
                <div className="dash">
                  <div className="filled">
                    <p>1</p>
                  </div>
                </div>
                <h6 className="listHead">Promote your work</h6>
              </div>
              <p className="listText">
                Whether you work at home, in a salon, or offer mobile services, use our platform to easily welcome new and loyal clients. Marketing is on us!
              </p>
              <div className="wrkImg_One"></div>
              <div className="blob rose">
                <img src={Ellipse2} alt="Blob" />
              </div>
            </li>
            <li className="item">
              <div className="blob pink">
                <img src={Ellipse} alt="Blob" />
              </div>
              <div className="titleWrap">
                <div className="dash">
                  <div className="filled">
                    <p>2</p>
                  </div>
                </div>
                <h6 className="listHead">Manage appointments</h6>
              </div>
              <p className="listText">
                Discover which booking process works best for you. Have the option to receive auto-bookings or screen appointments before accepting them.
              </p>
              <div className="wrkImg_Two"></div>
              <div className="blob rose">
                <img src={Ellipse2} alt="Blob" />
              </div>
            </li>
            <li className="item">
              <div className="blob pink">
                <img src={Ellipse} alt="Blob" />
              </div>
              <div className="titleWrap">
                <div className="dash">
                  <div className="filled">
                    <p>3</p>
                  </div>
                </div>
                <h6 className="listHead">Get paid</h6>
              </div>
              <p className="listText">
                Receive credit and debit card payments directly to your bank account. Place automatic charges for late arrivals, squeeze-ins, and service changes during the appointment.
              </p>
              <div className="wrkImg_Three"></div>
              <div className="blob rose">
                <img src={Ellipse2} alt="Blob" />
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* Desktop Screen */}
      <div className="workFlex_Desktop">
        <div className="flexOne">
          <div className={toggle === 1 ? "tabPanel activeContent" : "tabPanel"}>
            <div className="tabList">
              <div className="workHead">
                <h4 className="workTitle">How BeBlended works.</h4>
                {/* Tab Menu */}
                <div className="tabs"> 
                  <h6 className={toggle === 1 ? "italicText" : "normTxt"}>
                    For your hair
                  </h6>
                  <div 
                    className="toggleButton" 
                    >
                    <button
                      className={toggle === 1 ? "toggleDefault active" : "toggleDefault"}
                      onClick={() =>  handleToggle(1)}
                    ></button>
                    <button
                      className={toggle === 2 ? "toggleNext active" : "toggleNext"}
                      onClick={() =>  handleToggle(2)}
                    ></button>
                  </div>
                  <h6 className={toggle === 2 ? "italicText" : "normTxt"}>
                    For a hairstylist
                  </h6>
                </div>
                {/* Tab Menu End */}
              </div>

              <div className="listItems">
                <div className="listStyle">
                  <button className={click === 1 ? "dash activeClick" : "dash"}
                    onClick={() =>  handleClick(1)}
                  >
                    <div className="solidBorder">
                      <p>1</p>
                    </div>
                  </button>
                  <hr />
                  <button 
                    className={click === 2 ? "dash activeClick" : "dash"}
                    onClick={() =>  handleClick(2)}
                  >
                    <div className="solidBorder">
                      <p>2</p>
                    </div>
                  </button>
                  <hr />
                  <button className={click === 3 ? "dash activeClick" : "dash"}
                    onClick={() =>  handleClick(3)}
                  >
                    <div className="solidBorder">
                      <p>3</p>
                    </div>
                  </button>
                </div>
                <ol className="orderedList">
                  <li className="item">
                    <h6 className={click === 1 ? "bold listHead" : "listHead"}>
                      Find a hairstylist
                    </h6>
                    <p className="listText">
                      Whether you’re looking for a new or familiar hairstylist, just
                      enter your desired hairstyle, availability, and location to
                      get started.
                    </p>
                  </li>
                  <li className="item">
                    <h6 className={click === 2 ? "bold listHead" : "listHead"}>
                      Book an appointment
                      </h6>
                    <p className="listText">
                      Browse the hairstylist’s profile, select your service, and
                      then book. For more assistance you can directly chat with the
                      hairstylist on our platform before booking!
                    </p>
                  </li>
                  <li className="item">
                    <h6 className={click === 3 ? "bold listHead" : "listHead"}>
                      Pay online or in-person
                    </h6>
                    <p className="listText">
                      Receive full transparency on what you’re being charged for. We
                      offer flexible payment options for you to pay with credit,
                      debit, or cash.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
            <div className="workImages_Desk">
              <img src={Ellipse} alt="Blob" className="wrkBlob" />
              <div className="wrkImg1"></div>
              <div className="wrkImg2"></div>
              <div className="wrkImg3"></div>
              <div className="wrkImg4"></div>
            </div>
          </div>

          <div className={toggle === 2 ? "tabPanel2 activeContent" : "tabPanel2"}>
            <div className="tabList">
              <div className="workHead">
                <h4 className="workTitle">How BeBlended works.</h4>
                {/* Tab Menu */}
                <div className="tabs"> 
                  <h6 className={toggle === 1 ? "italicText" : "normTxt"}>
                    For your hair
                  </h6>
                  <div 
                    className="toggleButton" 
                    >
                    <button
                      className={toggle === 1 ? "toggleDefault active" : "toggleDefault"}
                      onClick={() =>  handleToggle(1)}
                    ></button>
                    <button
                      className={toggle === 2 ? "toggleNext active" : "toggleNext"}
                      onClick={() =>  handleToggle(2)}
                    ></button>
                  </div>
                  <h6 className={toggle === 2 ? "italicText" : "normTxt"}>
                    For a hairstylist
                  </h6>
                </div>
                {/* Tab Menu End */}
              </div>
              <div className="listItems">
                  <div className="listStyle">
                    <button className={click === 1 ? "dash activeClick" : "dash"}
                      onClick={() =>  handleClick(1)}
                    >
                      <div className="solidBorder">
                        <p>1</p>
                      </div>
                    </button>
                    <hr />
                    <button 
                      className={click === 2 ? "dash activeClick" : "dash"}
                      onClick={() =>  handleClick(2)}
                    >
                      <div className="solidBorder">
                        <p>2</p>
                      </div>
                    </button>
                    <hr />
                    <button className={click === 3 ? "dash activeClick" : "dash"}
                      onClick={() =>  handleClick(3)}
                    >
                      <div className="solidBorder">
                        <p>3</p>
                      </div>
                    </button>
                  </div>
                  <ol className="orderedList">
                    <li className="item">
                      <h6 className={click === 1 ? "bold listHead" : "listHead"}>
                        Promote your work
                      </h6>
                      <p className="listText">
                        Whether you work at home, in a salon, or offer mobile services, use our platform to easily welcome new and loyal clients. Marketing is on us!
                      </p>
                    </li>
                    <li className="item">
                      <h6 className={click === 2 ? "bold listHead" : "listHead"}>
                        Manage appointments
                        </h6>
                      <p className="listText">
                        Discover which booking process works best for you. Have the option to receive auto-bookings or screen appointments before accepting them.
                      </p>
                    </li>
                    <li className="item">
                      <h6 className={click === 3 ? "bold listHead" : "listHead"}>
                        Get paid
                      </h6>
                      <p className="listText">
                        Receive credit and debit card payments directly to your bank account. Place automatic charges for late arrivals, squeeze-ins, and service changes during the appointment.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="stylistImages">
                <div 
                  className={click === 1 ? "stylistImg1 activeImage" : "stylistImg1"}
                >
                </div>
                <div 
                  className={click === 2 ? "stylistImg2 activeImage" : "stylistImg2"}
                >
                </div>
                <div 
                  className={click === 3 ? "stylistImg3 activeImage" : "stylistImg3"}
                >
                </div>
              </div>
            </div>
          </div> 
      </div>
    </section>
  );
}

export default Work;



