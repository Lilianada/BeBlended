import React, { useState } from "react";
import "./StepOne.scss";
import { AiOutlineLeft } from "react-icons/ai";
import BookingHeader from "../Header/Header";
import Calendar from "react-calendar";
import { AnimatePresence } from "framer-motion";
import PolicyModal from "../PolicyModal/Policy";
import TimeScheduler from "../TimeScheduler/TimeScheduler";
import ProfilePicture from "../../../assets/BossLady.png";
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

function StepOneBooking() {
  //Modal for rules and policy
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  //date
  const [date, setDate] = useState(new Date());

  //calculate total price
  const totalPrice = cartItems.reduce((acc, curr) => {
    let cur = curr.price;
    return acc + Number(cur);
  }, 0);

  //set time
  const [time, setTime] = useState();
  const handleTime = () => {
    setTime(!time);
  };

  //set time
  const OnClick = () => {
    return(
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
        <p className="service">Total (due after your appointment)</p>
        <p className="price"> $210 </p>
      </div>
      <div className="list" style={{ marginTop: "1rem" }}>
        <input type="checkbox" name="checkbox" />
        <span className="checkbox"></span>
        <label className="terms">
          I have read and agree to the
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
              <PolicyModal openModal={openModal} closeModal={handleModal} />
            )}
          </AnimatePresence>
        </label>
      </div>
    </div>
    )
  };

  return (
    <section className="stepOne">
      <BookingHeader />
      <div className="stepOne_Body">
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
                <img src={ProfilePicture} alt="" className="profilePicture" />
                <h5 className="name">Braids by Becky</h5>
              </div>
              <p>Choose a Date & Time</p>
            </div>
            <div className="body">
              <div className="calendarContainer">
                <Calendar
                  onChange={setDate }
                  value={date}
                  onClickDay={handleTime}
                />
                <AnimatePresence
                  initial={false}
                  exitBeforeEnter={true}
                  onExitComplete={() => null}
                >
                  {time && (
                    <TimeScheduler openModal={time} closeModal={handleTime} />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="itemTwo">
            <div className="cart">
              <div className="head">
                <p>My Cart</p>
              </div>
              <div className="body">
                {cartItems.map((item, id) => (
                  <>
                    <div className="cartItem" key={id}>
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
                    <div className="list">
                      <p>Subtotal</p>
                      <p>${totalPrice}</p>
                    </div>
                  </div>
                  <button className="checkout">Checkout</button>
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

export default StepOneBooking;
