import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="manageCreate_Bookings">
        {/* <Link to='/manage-booking'>Manage Bookings</Link> */}
        <div className="createAppointment_Button">
          <GrAdd />
        </div>
      </div>

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
