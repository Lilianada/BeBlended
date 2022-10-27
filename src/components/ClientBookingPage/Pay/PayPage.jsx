import React, { useState } from "react";
import "./PayPage.scss";
import { AiOutlineLeft } from "react-icons/ai";
import BookingHeader from "../Header/Header";
import "react-calendar/dist/Calendar.css";
import ProfilePicture from "../../../assets/BossLady.png";
import PolicyModal from "../PolicyModal/Policy";
import { BsCreditCard2Front } from "react-icons/bs";
import { IoAddOutline } from "react-icons/io5";
import { AnimatePresence } from "framer-motion";
import { BottomNavClient} from "../../../components";


const cartItems = [
  {
    id: 1,
    service: "Box Braids",
    price: 100,
    variant: "Mid-back/Small",
  },
  {
    id: 2,
    service: "Hair Extensions",
    price: 160,
    variant: "2 packs",
  },
  {
    id: 3,
    service: "Box Braids",
    price: 210,
    variant: "Mid-back/Small",
  },
];

function PayPage() {
  //Modal for rules and policy
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  //calculate total price
  const totalPrice = cartItems.reduce((acc, curr) => {
    let cur = curr.price;
    return acc + Number(cur);
  }, 0);
  
  return (
    <section className="payPage">
      <BookingHeader />
      <div className="payPage_Body">
        <div className="flexItems">
          <div className="itemOne">
        <button className="backBtn">
          <AiOutlineLeft
            fill="#050205"
            size={20}
            style={{ marginRight: ".75rem" }}
          />
          Back
        </button>
        <div className="head">
          <div className="stylistProfile">
            <h5 className="headText">Confirm & Pay</h5>
          </div>
        </div>
          <p>Your appointment details:</p>
            <div className="body">
              <div className="bodyAppointment">
                <ul className="appointmentList">
                  <li className="list">
                    <div className="ball"></div>
                    <h6 className="head">Stylist:</h6>
                  </li>
                  <li className="list">
                    <div className="ball"></div>
                    <h6 className="head">Date:</h6>
                  </li>
                  <li className="list">
                    <div className="ball"></div>
                    <h6 className="head">Time:</h6>
                  </li>
                  <li className="list">
                    <div className="ball"></div>
                    <h6 className="head">Location:</h6>
                  </li>
                </ul>
                <ul className="appointmentList">
                  <li className="list">
                    <h6 className="text">Braids by Becky</h6>
                  </li>
                  <li className="list">
                    <h6 className="text">December 18, 2021</h6>
                  </li>
                  <li className="list">
                    <h6 className="text">9:00 am EST</h6>
                  </li>
                  <li className="list">
                    <h6 className="text">
                      123 Front Street West, Toronto, Canada
                    </h6>
                  </li>
                </ul>
              </div>
              <div className="bodyCredit">
                <p>Pay with:</p>
                <button className="pay">
                  <div>
                    <BsCreditCard2Front
                      className="BsCreditCard2Front"
                      size={18}
                    />
                    Credit or debit card
                  </div>
                  <IoAddOutline size={18} />
                </button>
                <button className="confirmPay">Confirm & Pay</button>
              </div>
            </div>
          </div>
          <div className="itemTwo">
            <div className="cart">
              <div className="head">
                <div className="stylistProfile">
                  <img src={ProfilePicture} alt="" className="profilePicture" />
                  <h5 className="name">Braids by Becky</h5>
                </div>
              </div>
              <div className="body">
                <p className="text">Price Details:</p>
                {cartItems.map((item) => (
                  <>
                    <div className="cartItem" key={item.id}>
                      <div className="item">
                        <p className="service"> {item.service} </p>
                        <p className="variant"> {item.variant} </p>
                      </div>
                      <p className="price"> ${item.price} </p>
                    </div>
                  </>
                ))}
                <div className="subTotal">
                  <hr />
                  <div className="priceList">
                    <p className="info">
                      *A $20 deposit is required to secure your appointment.
                    </p>
                    <div className="list">
                      <p className="service"> Deposit </p>
                      <p className="price"> $20 </p>
                    </div>
                    <div className="list">
                      <p className="service"> Service fee: </p>
                      <p className="price"> $10 </p>
                    </div>
                    <div className="list">
                      <p className="service">
                        {" "}
                        <strong>Total (due today)</strong>{" "}
                      </p>
                      <p className="price">$30</p>
                    </div>
                    <div className="list">
                      <p className="service">
                        Total (due after your appointment)
                      </p>
                      <p className="price"> $210 </p>
                    </div>
                    <div className="list" style={{ marginTop: "1rem" }}>
                      <label className="terms">
                        View
                        <button className="link" onClick={handleModal}>
                          {" "}
                          cancellation policy
                        </button>{" "}
                        and <span> client rules </span>.
                        <AnimatePresence
                          initial={false}
                          exitBeforeEnter={true}
                          onExitComplete={() => null}
                        >
                          {openModal && (
                            <PolicyModal
                              openModal={openModal}
                              closeModal={handleModal}
                            />
                          )}
                        </AnimatePresence>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNavClient />
    </section>
  );
}

export default PayPage;
