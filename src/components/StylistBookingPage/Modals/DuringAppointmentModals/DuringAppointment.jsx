import React from "react";
import "../AppointmentDetailsModals/AppointmentDetails.scss";
import { Backdrop } from "../../..";
import { motion } from "framer-motion";
import { AiOutlineClose, AiFillDelete } from "react-icons/ai";

export default function DuringAppointment({ handleModal }) {
    return (
        <section className="duringAppointment">
            <Backdrop onClick={handleModal}>
                <motion.div
                    className="dialogContent"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    exit="exit"
                >
                    <header className="modalHeader">
                        <button className="closeButton" onClick={handleModal}>
                            <AiOutlineClose size={26} />
                        </button>
                    </header>
                    <div className="modalContent">
                        <div className="contentHead">
                            <h5 className="head">Box Braids</h5>
                            <p className="subHead">Mid-back/Small</p>
                        </div>
                        <div className="contentDetails">
                            <p className="text">
                                <strong>Cost: </strong>
                                $150
                            </p>
                            <p className="text">
                                <strong>Date: </strong>
                                Monday August 23, 2021
                            </p>
                            <p className="text">
                                <strong>Time: </strong>
                                8:00am - 12:00pm
                            </p>
                            <p className="text">
                                <strong>Location: </strong>
                                123 Front Street West, Toronto ON, Canada
                            </p>
                        </div>
                        <hr className="borderBottom" />
                        <div className="serviceControls">
                            <p className="text">Leah James</p>
                            <div className="buttonControls">
                                <button className="chatBtn">Chat with Leah</button>
                                <button className="viewBtn">View Profile</button>
                                <button className="rescheduleBtn">
                                    Charge Late Fee
                                </button>
                                <button className="cancelBtn">No Show</button>
                                <button className="chatBtn">Additional Charges</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Backdrop>
        </section>
    );
}

export function ChargeLateFee() {
    return (
        <div className="chargeFee">
            <Backdrop>
                <div className="cancelContent">
                    <div className="dialogHeader">
                        <AiFillDelete size={35} />
                    </div>
                    <div className="dialogBody">
                        <p>Are you sure you want to charge your client a late fee?</p>
                    </div>
                    <div className="dialogFooter">
                        <button
                            className="btn-secondary"
                            type="button"
                            data-dismiss="deleteModal"
                        >
                            Yes
                        </button>
                        <button
                            className="btn-primary"
                            type="button"
                        // onClick={}
                        >
                            No
                        </button>
                    </div>
                </div>
            </Backdrop>
        </div>
    );
}

export function DeclareNoShow() {
    return (
        <div className="noShowModal">
            <Backdrop>
                <div className="cancelContent">
                    <div className="dialogHeader">
                        <AiFillDelete size={35} />
                    </div>
                    <div className="dialogBody">
                        <p>Are you sure you want to declare your client as a “no show”?</p>
                    </div>
                    <div className="dialogFooter">
                        <button
                            className="btn-secondary"
                            type="button"
                            data-dismiss="deleteModal"
                        >
                            Yes
                        </button>
                        <button
                            className="btn-primary"
                            type="button"
                        // onClick={}
                        >
                            No
                        </button>
                    </div>
                </div>
            </Backdrop>
        </div>
    );
}
