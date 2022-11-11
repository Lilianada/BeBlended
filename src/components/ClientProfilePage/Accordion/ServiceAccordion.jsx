import React, { useState } from "react";
import { GrDown, GrUp } from "react-icons/gr";
import "./Accordion.scss";
import { motion, AnimatePresence } from "framer-motion";

function ServiceAccordion({ id, name, price, description, duration, variant, total }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className="accordion"
            key={id}
        >
                <motion.div
                    className="accordionHeader"
                    initial={false}
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                >
                    <div className="accordionCol">
                        <h5 className="headText">{name}</h5>
                        <div className="serviceDuration">
                            <p>
                                {duration.startHours} hrs {duration.startMins} mins
                            </p>
                            <span> - </span>
                            <p>
                                {duration.endHours} hrs {duration.endMins} mins
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <p>from ${price}</p>
                        <AnimatePresence>
                            <motion.div
                                key="content"
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                    open: { opacity: 1, height: "auto" },
                                    collapsed: { opacity: 0, height: 0 }
                                }}
                                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                                {isActive ? <GrDown className="accordionIcon" /> : <GrUp className="accordionIcon" />}
                                </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="accordionBody"
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="description">
                            <p> {description} </p>
                        </div>
                        <div className="selectWrap">
                            <div className="selectList">
                                {variant.map((opt, idx) => (
                                    <select key={idx} className="variantaccordion">
                                        <option value="" defaultValue={true}>
                                            {opt.type}
                                        </option>
                                        {opt.options.map((arr, index) => (
                                            <option value="index" key={index}>
                                                {arr}
                                            </option>
                                        ))}
                                    </select>
                                ))}
                            </div>
                            <div className="servicePrice">
                                <p className="price"> ${total} </p>{" "}
                                <button className="selected">Selected</button>
                            </div>
                        </div>
                    </motion.div>
                )}
             </AnimatePresence>
        </div>
    );
}

export default ServiceAccordion;
