import React, { useState } from "react";
import "./TimeScheduler.scss";
import ReactDOM from "react-dom";
import { Backdrop } from "../../../components";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";;

function TimeRescheduler( { openModal, closeModal } ) {
    const time = [
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
    ]

    return ReactDOM.createPortal(
        <>
            {openModal ? (
                <div className="timeScheduler">
                    <Backdrop onClick={closeModal}>
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
                                <button className="closeButton" onClick={closeModal}>
                                    <AiOutlineClose size={24} />
                                </button>
                            </header>
                            <div className="headerText">
                                <p className="day">Wednesday</p>
                                <p className="month">December 18, 2021</p>
                            </div>
                            <hr />
                            <div className="modalContent">
                                <div className="timeSlots">
                                    {time.map((time, index) => (
                                        <button className="button" key={index} > {time} </button>
                                    ))}
                                </div>
                                <button className="confirm"> Confirm New Date & Time </button>
                            </div>
                        </motion.div>
                    </Backdrop>
                </div>
            ) : null}
        </>,
        document.getElementById("modal")
    );
}

export default TimeRescheduler;
