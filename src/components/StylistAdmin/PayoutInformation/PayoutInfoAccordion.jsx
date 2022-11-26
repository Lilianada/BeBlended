import React, { useState } from "react";
import { GrNext, GrDown } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";

export default function PayoutInfoAccordion({body, head}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <motion.div
        className="accordionHeader"
        initial={false}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className="accordionCol">
          <p className="headText">{head}</p>
        </div>
        <AnimatePresence>
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            {isActive ? (
              <GrDown className="accordionIcon" />
            ) : (
              <GrNext className="accordionIcon" />
            )}
          </motion.div>
        </AnimatePresence>
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
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            <div className="description">
              <p>{body} </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
