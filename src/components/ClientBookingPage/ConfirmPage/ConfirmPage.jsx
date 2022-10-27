import React, { useState } from "react";
import "./ConfirmPage.scss";
import BookingHeader from "../Header/Header";
import "react-calendar/dist/Calendar.css";
import { AnimatePresence } from "framer-motion";
import PolicyModal from "../PolicyModal/Policy";
import CancelModal from "../CancelModal/CancelModal";
import ReschedulePage from "../ReschedulePage/ReschedulePage";
import { Link } from "react-router-dom";
import { BottomNavClient} from "../../../components";

const cartItems = [
  {
    id: 1,
    service: "Box Braids",
    variant: "Mid-back/Small",
  },
  {
    id: 2,
    service: "Hair Extensions",
    variant: "2 packs",
  },
];

function ConfirmPage() {
  //Modal for rules and policy
  const [openModal, setOpenModal] = useState({
    cancel: false,
    timeSchedule: false,
    policy: false,
    reschedule: false,
  });

  const handleModal = (cancel, timeSchedule, policy, reschedule) => {
    setOpenModal((prevState) => {
      return {
        ...prevState,
        [cancel]: !prevState[cancel],
        [timeSchedule]: !prevState[timeSchedule],
        [policy]: !prevState[policy],
        [reschedule]: !prevState[reschedule],
      };
    });
  };
  return (
    <section className="confirmPage">
      <BookingHeader />
      <div className="confirmPage_Body">
        <div className="head">
          <p className="confirmText">
            Your appointment has been{" "}
            <span className="purpleText">confirmed </span> .
          </p>
          <small className="greeting">Thank you for choosing BeBlended! </small>
        </div>

        <div className="flexItems">
          <div className="itemOne">
            <h5 className="headText">Your appointment details:</h5>
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
              <div className="buttonWrap">
                <AnimatePresence
                  initial={false}
                  exitBeforeEnter={true}
                  onExitComplete={() => null}
                >
                  <Link to="/reschedule-appointment">
                    <button
                      className="btnPrimary"
                      onClick={() => {
                        handleModal("reschedule");
                      }}
                    >
                      Reschedule appointment
                    </button>
                  </Link>
                </AnimatePresence>
                <button
                  className="btnPrimary"
                  onClick={() => {
                    handleModal("cancel");
                  }}
                >
                  Cancel appointment
                </button>
                <AnimatePresence
                  initial={false}
                  exitBeforeEnter={true}
                  onExitComplete={() => null}
                >
                  {openModal && (
                    <CancelModal
                      openModal={openModal.cancel}
                      closeModal={setOpenModal}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="itemTwo">
            <div className="cartWrap">
              <div className="cart">
                <div className="head">
                  <h5 className="headText">Service name:</h5>
                </div>
                <div className="body">
                  {cartItems.map((item) => (
                    <>
                      <div className="cartItem" key={item.id}>
                        <div className="item">
                          <p className="service"> {item.service} </p>
                          <p className="variant"> {item.variant} </p>
                        </div>
                      </div>
                    </>
                  ))}
                  <div className="subTotal">
                    <div className="priceList">
                      <div className="list">
                        <p className="service"> Paid today: </p>
                        <p className="price"> $20 </p>
                      </div>
                      <div className="list">
                        <p className="service"> Remaining balance: </p>
                        <p className="price"> $10 </p>
                      </div>
                      <p className="info">
                        *This amount will be charged automatically after your
                        appointment
                      </p>

                      <div className="list">
                        <label className="terms">
                          View
                          <button
                            className="link"
                            onClick={() => {
                              handleModal("policy");
                            }}
                          >
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
                                openModal={openModal.policy}
                                closeModal={setOpenModal}
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
            <button className="btnPrimary"> View appointments </button>
          </div>
        </div>
      </div>
      <BottomNavClient/>
    </section>
  );
}

export default ConfirmPage;
