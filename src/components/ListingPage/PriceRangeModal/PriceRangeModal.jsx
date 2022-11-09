import React from "react";
import {Backdrop} from "../../../components";
import { motion } from "framer-motion";
import PriceRange from "../../../assets/PriceRange.svg";
import './PriceRange.scss';

export default function PriceRangeModal() {
  return (
    <section className="priceRangeModal">
        <Backdrop>
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
                <img src={PriceRange} alt="Price Range" />
            </motion.div>
        </Backdrop>
    </section>
  );
}
