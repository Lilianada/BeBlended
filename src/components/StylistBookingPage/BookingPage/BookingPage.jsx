import React, { useState } from "react";
import { Calendar } from "react-calendar";
import AppointmentSection from "../Appointment/AppointmentSection";
import BookingHeader from "../BookingHeader/BookingHeader";
import Schedule from "../Scheduler/Scheduler";
import UpcomingBookings from "../UpcomingBookings/UpcomingBookings";
import './BookingPage.scss';


export default function BookingPage() {
    const [value, onChange] = useState(new Date());

    return (
        <main className="mainWrapper">
            <BookingHeader />
            <AppointmentSection />

            <div className="gridContainer">
                <div className="smallGrid">
                    {/* <div className="calendarWrap">
                        <Calendar onChange={onChange} value={value} />
                    </div> */}
                    <UpcomingBookings/> 
                </div>
                <div className="bigGrid">
                    <div className="calendarWrap">
                        <Schedule />
                    </div>
                </div>
            </div>
        </main>
    );
}

