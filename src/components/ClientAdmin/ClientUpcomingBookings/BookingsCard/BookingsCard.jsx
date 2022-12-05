import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import {ClientAppointment} from "../../../../components";
import "./BookingsCard.scss";

export default function BookingsCard({item}) {
    const [openModal, setOpenModal] = useState(false);

    const handleModal = () => {
        setOpenModal(!openModal);
    };

    return (
        <>
            <div className="serviceCard">
                <div className="bar"></div>
                <div className="card">
                    <div className="cardHead">
                        <p className="cardTitle"> {item.serviceName} </p>
                    </div>
                    <div className="cardTexts">
                        <p className="text"> <strong>{item.clientName}</strong> </p>
                        <p className="text"> {item.date} </p>
                        <p className="text"> {item.time} </p>
                    </div>
                    <div className="cardButtons">
                        <button className="viewBtn" onClick={handleModal}> View Details </button>
                        <AnimatePresence
                            initial={false}
                            exitBeforeEnter={true}
                            onExitComplete={() => null}
                        >
                            {openModal && (
                                <ClientAppointment
                                    openDetails={openModal}
                                    closeDetails={setOpenModal}
                                />
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    );
}
