import React, { useState } from "react";
import { GrDown, GrUp } from "react-icons/gr";
import "./Accordion.scss";
import { motion, AnimatePresence } from "framer-motion";

function AddonAccordion({ id, name, description}) {
    const [isActive, setIsActive] = useState(false);
    const handleAccordion = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="accordion" key={id}>
            <motion.div className="accordionHeader" initial={false} onClick={handleAccordion}>
                <div className="accordionCol">
                    <h5 className="headText">{name}</h5>
                </div>
                <div className="row">
                    <AnimatePresence>
                        <div>{isActive ? <GrDown className="accordionIcon" /> : <GrUp className="accordionIcon" />}</div>
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
                                <input type="number" name="" className="variantAccordion" min='0' />
                                <p className="inventory">9 remaining</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default AddonAccordion;
