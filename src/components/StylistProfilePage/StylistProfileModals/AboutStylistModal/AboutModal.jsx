import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import "./AboutModal.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Backdrop } from "../../../../components";
import { useRef } from "react";

function AboutModal({ openModal, closeModal }) {
    const inputRef = useRef(null);
    const handleClick = (e) => {
        e.preventDefault();
        inputRef.current.value= ""
        console.log(inputRef.current.value);
    }

    return ReactDOM.createPortal(
        <>
            {" "}
            {openModal ? (
                <div className="aboutModal">
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
                                <h5> </h5>
                                <button className="closeButton" onClick={closeModal}>
                                    <AiOutlineClose size={20} />
                                </button>
                            </header>

                            <div className="modalContent">
                                <h5 className="title">About</h5>
                                <p className="subtitle">Let customers know who you are!</p>
                                <form action="" className="aboutForm">
                                    <textarea
                                        // onChange={handleTextArea}
                                        ref={inputRef}
                                        name="text"
                                        className="textArea"
                                        cols="30"
                                        rows="8"
                                        maxLength={450}
                                        placeholder="Tell customers about your specialties, how long you’ve been doing hair, or anything that will help them get to know you better!"
                                    ></textarea>
                                    <button className="saveBtn" onClick={handleClick}>Done</button>
                                </form>
                            </div>
                        </motion.div>
                    </Backdrop>
                </div>
            ) : null}{" "}
        </>,
        document.getElementById("modal")
    );
}

export default AboutModal;
