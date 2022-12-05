import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import {AppointmentDetails} from "../../../../components";
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
                        <BsThreeDotsVertical
                            style={{ cursor: "pointer" }}
                            onClick={() => handleModal("details")}
                        />
                        <AnimatePresence
                            initial={false}
                            exitBeforeEnter={true}
                            onExitComplete={() => null}
                        >
                            {openModal.details && (
                                <AppointmentDetails
                                    openDetails={openModal.details}
                                    closeDetails={setOpenModal}
                                />
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="cardTexts">
                        <p className="text"> <strong>{item.clientName}</strong> </p>
                        <p className="text"> {item.date} </p>
                        <p className="text"> {item.time} </p>
                    </div>
                    <div className="cardButtons">
                        <button className="viewBtn"> View Details </button>
                        {/* <AnimatePresence
                  initial={false}
                  exitBeforeEnter={true}
                  onExitComplete={() => null}
                >
                  {openModal.decline && (
                    <DeclineAppointment
                      openModal={openModal.decline}
                      closeModal={setOpenModal}
                    />
                  )}
                </AnimatePresence> */}
                    </div>
                </div>
            </div>
        </>
    );
}
