import React, { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import {BottomNavClient, ClientAdminHeader, ClientUpcomingBookings, PastBookings} from "../../../../components";
import './ClientBookingPage.scss';

export default function ClientBookingPage() {
    const [activeTab, setActiveTab] = useState(1);
    const isActive = (index) => setActiveTab(index);

    const [tabOpen, setTabOpen] = useState({
        upcoming: false,
        past: false,
    });
    const isOpen = (upcoming, past) => {
        setTabOpen((prev) => {
        return {
            ...prev,
            [upcoming]: !prev[upcoming],
            [past]: !prev[past],
        };
        });
    };


    return (
        <main className="mainWrapper clientBookings">
            <ClientAdminHeader />

            <section className="clientBookings_Section">
            <div className="backBtn">
                <GrPrevious style={{ marginRight: ".35rem" }} fill="#707070" />
                <p>Back</p>
            </div>

                <div className="sectionHead">
                    <h4 className="sectionTitle"> My Bookings </h4>
                </div>
                <div className="sectionTabs">
                    <div className="tabHead">
                        <AnimatePresence
                            initial={false}
                            exitBeforeEnter={true}
                            onExitComplete={() => null}
                        >
                            <motion.label
                                initial={{ x: 300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -300, opacity: 0 }}
                                htmlFor="upcoming"
                                className={`tab ${activeTab === 1 ? "active" : ""}`}
                                onClick={() => isActive(1)}
                            >
                                Upcoming
                            </motion.label>
                        </AnimatePresence>
                        <AnimatePresence
                            initial={false}
                            exitBeforeEnter={true}
                            onExitComplete={() => null}
                        >
                            <motion.label
                                initial={{ x: 300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -300, opacity: 0 }}
                                htmlFor="past"
                                className={`tab ${activeTab === 2 ? "active" : ""}`}
                                onClick={() => isActive(2)}
                            >
                                Past
                            </motion.label>
                        </AnimatePresence>
                    </div>

                    <div className="tabFlex">
                        <ClientUpcomingBookings activeTab={activeTab} open={isOpen.upcoming} />
                        <PastBookings activeTab={activeTab} open={isOpen.past} />
                    </div>
                </div>
            </section>
            <BottomNavClient />
        </main>
    );
}
