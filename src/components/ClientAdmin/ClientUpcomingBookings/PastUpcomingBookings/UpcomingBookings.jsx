import React from "react";
import {
  
  ErrorBoundary,
} from "../../../../components";
import { IoCalendarSharp } from "react-icons/io5";
import { bookings } from "../../../StylistBookingPage/CreateAppointmentData";
import "./UpcomingBookings.scss";

export default function UpcomingBookings() {
  <ErrorBoundary>
  <>
    {bookings.length > 0 ? (
      <div className={`mappedTabs ${activeTab === 1 ? "activeTab" : ""}`}>
        {bookings.map((item, id) => {
          return <BookingServiceCard item={item} key={id} />;
        })}
      </div>
    ) : (
      <div
        className={`noPastBooking ${activeTab === 1 ? "activeTab" : ""}`}
        onClick={open}
      >
        <div className="calendarIcon">
          <IoCalendarSharp size={40} />
        </div>
        <p className="noBookingText">You have no upbookings.</p>
      </div>
    )}
  </>
</ErrorBoundary>
}
