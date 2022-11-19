import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiAddFill } from "react-icons/ri";
import { BottomNavStylist } from "../../../components";
import AppointmentSection from "../Appointment/AppointmentSection";
import BookingHeader from "../BookingHeader/BookingHeader";
import Schedule from "../Scheduler/Scheduler";
import UpcomingBookings from "../UpcomingBookings/UpcomingBookings";
import "./BookingPage.scss";

export default function BookingPage() {
  const [value, onChange] = useState(new Date());

  return (
    <main className="mainWrapper bookingPage">
      <div className="displayNone">
        <BookingHeader />
      </div>
      <AppointmentSection />

      <div className="gridContainer">
        <div className="smallGrid">
          <UpcomingBookings />
        </div>
        <div className="bigGrid">
          <div className="calendarWrap">
            <Schedule />
          </div>
        </div>
      </div>
      <BottomNavStylist />
    </main>
  );
}
