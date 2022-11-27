import React, { useState } from "react";
import { GrNext, GrDown, GrPrevious, GrSearch } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import { StylistAdminHeader } from "../../../components";
import "./AdminClientList.scss";
import { RiSearchLine } from "react-icons/ri";

export default function AdminClientList() {
    const [isActive, setIsActive] = useState(false);
  return (
    <main className="mainWrapper adminClient_Page">
      <StylistAdminHeader />

      <div className="wd_80">
        <div className="adminClient_head">
            <div>
                <GrPrevious style={{ marginRight: ".5rem" }} />
                <p>Back</p>
            </div>
            <div className="subHead_input">
                <label htmlFor="input" className="inputField">
                    <RiSearchLine fill="#907D7D" size={16}/>
                    <input type="text" name="" className="" placeholder="Search" />
                </label>
            </div>
        </div>
        <div className="adminClient_subhead">
            <div className="subHead">
                <h4 className="formHead">My Clients</h4>

                <div className="sortDropdown">
                    <p className="totalClients">0 in Total</p>
                    <div className="accordion">
                        <motion.div
                            className="accordionHeader"
                            initial={false}
                            onClick={() => {
                            setIsActive(!isActive);
                            }}
                        >
                            <div className="accordionCol">
                                <p className="headText">Sort by: <strong>Top Clients</strong></p>
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
                                style={{ marginLeft: ".75rem" }}
                            >
                                <GrDown className="accordionIcon" size={14} />
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
                                <button className="sortBy">Top Client</button>
                                <button className="sortBy">Name</button>
                                <button className="sortBy">Date Added</button>
                                </div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <div className="subHead_input">
                <label htmlFor="input" className="inputField">
                    <RiSearchLine fill="#907D7D" size={16}/>
                    <input type="text" name="" className="" placeholder="Search" />
                </label>
            </div>
        </div>
      </div>
    </main>
  );
}
