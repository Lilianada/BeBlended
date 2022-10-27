import React from "react";
import './Cancellation.scss';
import BookingHeader from "../Header/Header";

function Cancellation() {
    return (
        <section className="mainWrapper">
            <BookingHeader />
            <div className="cancellation_Body">
                <div className="head">
                    <p className="confirmText">
                        Your appointment has been{" "}
                        <span className="purpleText">cancelled </span> .
                    </p>
                    <small className="greeting">See you some other time!</small>
                </div>

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
                    </div>
                    <button className="btnPrimary"> View appointments </button>
                </div>
            </div>
        </section>
    );
}

export default Cancellation;
